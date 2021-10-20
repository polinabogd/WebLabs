import {
    EDIT_BUTTON_PREFIX,
    DELETE_BUTTON_PREFIX,
    renderItemsList,
    getInputValue,
    clearInputs,
} from './main.js';

import {
    getClips,
    postClip,
    updateClip,
    deleteClip
} from './api.js';

const sortButton = document.getElementById("sort_items--button");
const searchButton = document.getElementById("search_items--search");
const clearSearchButton = document.getElementById("search_items--clear");
const searchInput = document.getElementById("search_items--input");
const totalButton = document.getElementById("count_total");
const totalDurationLabel = document.getElementById("total_duration");
const submitCreationBtn = document.getElementById("submit_button")

let clips = []

const onEditItem = async (e) => {
    const itemId = e.target.id.replace(EDIT_BUTTON_PREFIX, "");
    await updateClip(itemId, getInputValue())

    clearInputs();

    refetchAllClips();
};

const onRemoveItem = async (e) => {
    const itemId = e.target.id.replace(DELETE_BUTTON_PREFIX, "");

    await deleteClip(itemId);

    refetchAllClips(); 
}

export const refetchAllClips = async () => {
    const allClips = await getClips();

    clips = allClips;

    renderItemsList(clips, onEditItem, onRemoveItem);
};

submitCreationBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const { artist, song, duration, views } = getInputValue();

    clearInputs();

    postClip({
        artist,
        song,
        duration,
        views
    }).then(refetchAllClips);
})

sortButton.addEventListener("click", (event) => {
    event.preventDefault();
    let sorted = clips.sort(
        (a, b) => a.views - b.views
    )
    renderItemsList(sorted, onEditItem, onRemoveItem)
});

totalButton.addEventListener("click", (event) => {
    event.preventDefault();
    let totalDuration = 0

    for (let clip of clips) {
        totalDuration += parseFloat(clip.duration)
    }

    totalDurationLabel.innerText = totalDuration
});

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const foundClips = clips.filter(
        (clip) => clip.song.search(searchInput.value) !== -1
    );
    renderItemsList(foundClips, onEditItem, onRemoveItem);
});

clearSearchButton.addEventListener("click", (event) => {
    event.preventDefault();
    renderItemsList(clips, onEditItem, onRemoveItem);
    searchInput.value = "";
});

refetchAllClips()

