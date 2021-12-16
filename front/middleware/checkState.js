import {getUserWithBearer} from '~/graphql/query'

export default async function ({ app, req, store }) {

    //Check user connection
    //Set the basicals values to be shown on header ...
    const token = app.$apolloHelpers.getToken('apollo-token');

    if(store.state.auth == false){
        if(token !== undefined){

            //Fetch a secure route to see if bearer is ok!
            try{
                //Get the apollo config
                const client = app.apolloProvider.clients.protectedRoute;
                //Request 
                const result = await client.query({
                    fetchPolicy: "no-cache",
                    query: getUserWithBearer,
                    context: {
                        headers: {
                            //authorization: `Bearer ${token}`//app.$cookiz.get('bearer')
                        },
                        errorPolicy: "all",
                        persisting: false,
                    }
                });
                //values of the request
                let {username, profile_picture} = result.data.getMyProfile[0];
                //Put user values on store   
                store.commit('setAuthState', true);
                store.commit('setUserName', username);
                store.commit('setProfilePic', profile_picture);

                console.warn(store.state.auth + ' ' + store.state.username);

            }catch(err){
                //Fetch error bearer is not good or we have a server error !
                console.error(err)
                store.commit("setAuthState", false);
            }

        }else{
            //No bearer we are sure the user is not logged in !
            store.commit("setAuthState", false);
            console.log('Auth State : ' + store.state.auth)

        }
    }
    if (store.state.auth){
        if(token == undefined){
            store.commit("setAuthState", false);
        }
    }

}