export const state = () => ({
    //Layout state
    layout: "default",
    articlesLayout: "default",
    headerkey: 0,
    //User state
    auth: false,
    username: "",
    profilepicture: "",
})

export const mutations = {
    setLayout (state, value) {
        state.layout = value
    },
    setArticlesLayout (state, value) {
        state.articlesLayout = value
    },
    setHeaderKey (state, value) {
        state.headerkey = value
    },
    //USER
    setAuthState (state, value) {
        state.auth = value;
    },
    setUserName (state, value) {
        state.username = value;
    },
    setProfilePic (state, value) {
        state.profilepicture = value;
    }
}