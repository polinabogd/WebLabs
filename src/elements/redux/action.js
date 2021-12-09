export const addItem = ({song, duration}) => {
    return {
        type: "ADD",
        payload: {song, duration}
    }
}

export const deleteItem = ({song}) => {
    return {
        type: "DELETE",
        payload: {song}
    }
}