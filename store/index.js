// Define State defaults
export const state = () => ({
    siteMeta: {},
    menuOpened: false,
})

// Define mutations
export const mutations = {
    SET_MENU(state, data) {
        console.log("in store")
        console.log("data:" , data)
        state.menuOpened = data
    },
    SET_SITE_META(state, data) {
        state.siteMeta = data
    },
}

