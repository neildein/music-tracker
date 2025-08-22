
<div class="manual-add" style="margin-top:40px;">
    <h3>➕ Manually Add an Album</h3>
    <form id="manualForm">
        <input type="text" id="manualTitle" placeholder="Album Title" required><br>
        <input type="text" id="manualArtist" placeholder="Artist" required><br>
        <input type="number" id="manualYear" placeholder="Year" required><br>
        <input type="text" id="manualGenre" placeholder="Genre" required><br>
        <textarea id="manualFacts" placeholder="Album Facts"></textarea><br>
        <input type="url" id="manualArt" placeholder="Album Art URL"><br>
        <label for="manualFamiliarity">Familiarity:</label>
        <select id="manualFamiliarity">
            <option value="new">New to Me</option>
            <option value="familiar">Familiar</option>
        </select><br>
        <label for="manualRating">Rating (1-5 stars):</label>
        <select id="manualRating">
            <option value="">--</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
        </select><br>
        <button type="button" onclick="addManualAlbum()">Add Album</button>
    </form>
</div>

<script>
function addManualAlbum() {
    const title = document.getElementById("manualTitle").value;
    const artist = document.getElementById("manualArtist").value;
    const year = document.getElementById("manualYear").value;
    const genre = document.getElementById("manualGenre").value;
    const facts = document.getElementById("manualFacts").value;
    const art = document.getElementById("manualArt").value;
    const familiarity = document.getElementById("manualFamiliarity").value;
    const rating = document.getElementById("manualRating").value;

    const log = JSON.parse(localStorage.getItem("albumLog") || "[]");
    log.push({
        title: title,
        artist: artist,
        year: year,
        genre: genre,
        facts: facts,
        art: art,
        action: familiarity,
        rating: rating
    });
    localStorage.setItem("albumLog", JSON.stringify(log));
    updateLog();
    document.getElementById("manualForm").reset();
}
</script>
