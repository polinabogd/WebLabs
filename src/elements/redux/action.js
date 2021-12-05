export const addItem = ({artist, duration}) => {
    return {
        type: "ADD",
        payload: {artist, duration}
    }
}

export const deleteItem = ({artist}) => {
    return {
        type: "DELETE",
        payload: {artist}
    }
}