const openModal = (data) => {
    return {
        type: "SHOW_MODAL",
        payload: data
    }
}

export { openModal }