export const state = () => ({
    layout: "default",
})

export const mutations = {
    setLayout (state, value) {
        state.layout = value
    },
}