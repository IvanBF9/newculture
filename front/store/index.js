export const state = () => ({
    layout: "default",
})

export const mutations = {
    setLayout (state, value) {
        console.log('SET_VAR_1', value)
        state.layout = value
    },
}