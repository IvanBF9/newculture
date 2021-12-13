import {getUserWithBearer} from '~/graphql/query'

export default async function ({ app, req, store }) {

    //Check user connection
    //Set the basicals values to be shown on header ...

    if(store.state.auth == false){
        if(app.$cookiz.get('bearer') !== undefined){

            //Fetch a secure route to see if bearer is ok!
            try{
                //Get the apollo config
                const client = app.apolloProvider.clients.protectedRoute;
                //Request 
                let result = await client.query({
                    query: getUserWithBearer,
                    context: {
                        headers: {
                            authorization: 'Bearer ' + app.$cookiz.get('bearer')
                        },
                        errorPolicy: "all",
                        persisting: false,
                        fetchPolicy: 'network-only',
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
        if(app.$cookiz.get('bearer') == undefined){
            store.commit("setAuthState", false);
        }
    }

}