export const state = () => ({
    layout: "default",
    articlesLayout: "default"
})

export const mutations = {
    setLayout (state, value) {
        state.layout = value
    },
    setArticlesLayout (state, value) {
        state.articlesLayout = value
    },
}