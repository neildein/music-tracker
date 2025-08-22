
<script>
    function markAlbum(action) {
        const log = JSON.parse(localStorage.getItem("albumLog") || "[]");
        log.push({
            title: currentAlbum.title,
            artist: currentAlbum.artist,
            year: currentAlbum.year,
            genre: currentAlbum.genre,
            action: action,
            rating: null
        });
        localStorage.setItem("albumLog", JSON.stringify(log));
        updateLog();

        if (action === "explore" || action === "revisit" || action === "familiar") {
            document.getElementById("rating-box").style.display = "block";
        } else {
            document.getElementById("rating-box").style.display = "none";
            getRandomAlbum();
        }

        if (action === "familiar" || action === "pass") {
            getRandomAlbum();
        }
    }
</script>
