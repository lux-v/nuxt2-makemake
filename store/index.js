// Define State defaults
export const state = () => ({
    siteMeta: {},
    menuOpened: false,
    breadcrumb: {
        text: "",
        to: "",
    },
})

// Define mutations
export const mutations = {
    SET_MENU(state, data) {
        state.menuOpened = data
    },
    SET_SITE_META(state, data) {
        state.siteMeta = data
    },
    SET_BREADCRUMB(state, data) {
        state.breadcrumb = data
    },
}
