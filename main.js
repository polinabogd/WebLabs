const clipsContainer = document.getElementById("items_container");
const artistInput = document.getElementById("artist_input");
const songInput = document.getElementById("song_input");
const durationInput = document.getElementById("duration_input");
const viewsInput = document.getElementById("views_input");


const itemTemplate = ({ id, artist, song, duration, views }) => `
<li id="${id}" class="card" draggable="true">
    <div>
        <h5>Name of artist: ${artist}</h5>
        <p>Name of song: ${song}</p>
        <p>Duration: ${duration} sec.</p>
        <p>Views on Youtube: ${views} .</p>
    </div>
</li>`;

const addClipToPage = ({id, artist, song, duration, views }) => {
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

const getInputValue = () =>{
    return{
        artist: artistInput.value,
        song: songInput.value,
        duration: durationInput.value,
        views: viewsInput.value,
    };
};

const clearInputs = () => {
    artistInput.value = " ";
    songInput.value  = " ";
    durationInput.value  = " ";
    viewsInput.value  = " ";
}

const sortButton = document.getElementById("sort_items--button");

const searchButton = document.getElementById("search_items--search");
const clearSearchButton = document.getElementById("search_items--clear");
const searchInput = document.getElementById("search_items--input");

const totalButton = document.getElementById("count_total");
const totalDurationLabel = document.getElementById("total_duration");
const submitCreationBtn = document.getElementById("submit_button")

let clips = [
    { id: 1, artist: 'Selena Gomez', song: 'Fetish', duration: 120, views: 10000000 },
    { id: 2, artist: 'Selena Gomez', song: 'Bad Liar', duration: 12, views: 1 },
    { id: 3, artist: 'Selena Gomez', song: 'Other shit', duration: 1200, views: 3000 },
]

const addItem = ({ artist, song, duration, views }) => {
    const generatedId = uuid.v1();

    const newItem = {id: generatedId, artist, song, duration, views };

    clips.push(newItem);
    addClipToPage(newItem);
}

const editButton = document.getElementById("edit_item--button");

editButton.addEventListener("click", (event) =>{
    event.preventDefault();
    const foundClips = clips.filter(
        (clip) => clip.song.search(searchInput.value) !== -1
    );
    editItem(foundClips);
    addClipToPage(foundClips);
})

const editItem = (foundClip) => {
    foundClip.artist = artistInput.value;
    foundClip.song = songInput.value;
    foundClip.duration = durationInput.value;
    foundClip.views = viewsInput.value;
    clips.push(foundClip);
    addClipToPage(foundClip);
}

submitCreationBtn.addEventListener("click", (event) =>{
    event.preventDefault();
    const { artist, song, duration, views } = getInputValue();

    clearInputs();
    addClipToPage({ artist, song, duration, views })
})

sortButton.addEventListener("click", (event) => {
    event.preventDefault();
    let sorted = clips.sort(
        (a,b) => a.views - b.views
    )
    renderItemsList(sorted)
});

totalButton.addEventListener("click", (event) => {
    event.preventDefault();
    let totalDuration = 0

    for (let clip of clips) {
        totalDuration += clip.duration
    }

    totalDurationLabel.innerText = totalDuration
});

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const foundClips = clips.filter(
        (clip) => clip.song.search(searchInput.value) !== -1
    );
    renderItemsList(foundClips);
});

clearSearchButton.addEventListener("click", (event) => {
    event.preventDefault();
    renderItemsList(clips);
    searchInput.value = "";
});
