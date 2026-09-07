
const music = document.getElementById("snowmanMusic");

document.addEventListener("pointerdown", function () {
    music.play()
        .then(() => {
            console.log("Music started!");
        })
        .catch((error) => {
            console.log("Music error:", error);
        });
});
