

// Note: each change within these files are pushed out of the reducer as someting brand new. It does not manipulate the data recieved. Rather makes a copy of old changes along wiith the new change.


const modal = (state, action) => {
    if (state === undefined) {
        return {
            visible: false,
            title: null,
            content: null,
        };
    }
    switch (action.type) {
        case "SHOW_MODAL":
            return {
                visible: !state.visible,
                title: !state.visible ? action.payload.title : null,
                content: !state.visible ? action.payload.content : null,
            };
        default:
            return state;
    }
};

export default modal;