const clipsContainer = document.getElementById("items_container");
const artistInput = document.getElementById("artist_input");
const songInput = document.getElementById("song_input");
const durationInput = document.getElementById("duration_input");
const viewsInput = document.getElementById("views_input");

export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = 'delelte-button-';

const itemTemplate = ({ id, artist, song, duration, views }) => `
<li id="${id}" class="card" draggable="true">
    <div>
        <h5>Name of artist: ${artist}</h5>
        <p>Name of song: ${song}</p>
        <p>Duration: ${duration} sec.</p>
        <p>Views on Youtube: ${views} .</p>
    </div>
    <div>
        <button id="${EDIT_BUTTON_PREFIX}${id}" type="button">Edit</button>
        <button id="${DELETE_BUTTON_PREFIX}${id}" type="button">Delete</button>
</li>`;

const addClipToPage = ({ id, artist, song, duration, views }, onEditItem, onRemoveItem) => {
    clipsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, artist, song, duration, views })
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`)
    const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`)

    editButton.addEventListener("click", onEditItem)
    deleteButton.addEventListener("click", onRemoveItem)
};

export const renderItemsList = (clips, onEditItem, onRemoveItem) => {
    clipsContainer.innerHTML = "";

    for (const clip of clips) {
        addClipToPage(clip, onEditItem, onRemoveItem);
    }
};

export const getInputValue = () => {
    return {
        artist: artistInput.value,
        song: songInput.value,
        duration: durationInput.value,
        views: viewsInput.value,
    };
};

export const clearInputs = () => {
    artistInput.value = " ";
    songInput.value = " ";
    durationInput.value = "";
    viewsInput.value = "";
}