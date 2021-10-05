const sortButton = document.getElementById("sort_items--button");
const searchButton = document.getElementById("search_items--search");
const clearSearchButton = document.getElementById("search_items--clear");
const searchInput = document.getElementById("search_items--input");
const totalButton = document.getElementById("count_total");
const clipsContainer = document.getElementById("items_container");
const totalDurationLabel = document.getElementById("total_duration");

const itemTemplate = ({ id, artist, song, duration, views }) => `
<li id="${id}" class="card" draggable="true">
    <div>
        <h5>Name of artist: ${artist}</h5>
        <p>Name of song: ${song}</p>
        <p>Duration: ${duration} sec.</p>
        <p>Views on Youtube: ${views} .</p>
    </div>
</li>`;

let clips = [
    { id: 1, artist: 'Selena Gomez', song: 'Fetish', duration: 120, views: 10000000 },
    { id: 2, artist: 'Selena Gomez', song: 'Bad Liar', duration: 12, views: 1 },
    { id: 3, artist: 'Selena Gomez', song: 'Other shit', duration: 1200, views: 3000 },
]

const addClipToPage = ({ _id: id, artist, song, duration, views }) => {
    clipsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, artist, song, duration, views })
    );
};

const renderItemsList = (clips) => {
    clipsContainer.innerHTML = "";

    for (const clip of clips) {
        addClipToPage(clip);
    }
};

sortButton.addEventListener("click", () => {
    let sorted = clips.sort(
        (a,b) => a.views - b.views
    )
    renderItemsList(sorted)
});

totalButton.addEventListener("click", () => {
    let totalDuration = 0

    for (let clip of clips) {
        totalDuration += clip.duration
    }

    totalDurationLabel.innerText = totalDuration
});

searchButton.addEventListener("click", () => {
    const foundClips = clips.filter(
        (clip) => clip.song.search(searchInput.value) !== -1
    );
    renderItemsList(foundClips);
});

clearSearchButton.addEventListener("click", () => {
    renderItemsList(clips);
    searchInput.value = "";
});
