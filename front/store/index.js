export const state = () => ({
    layout: "default",
    articlesLayout: "articlespc"
})

export const mutations = {
    setLayout (state, value) {
        state.layout = value
    },
    setArticlesLayout (state, value) {
        state.articlesLayout = value
    },
}