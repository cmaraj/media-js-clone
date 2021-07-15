const messageImg = document.querySelectorAll(".single-image");
const media = document.querySelectorAll(".media");
const showMedia = document.querySelectorAll(".show-media")

messageImg.forEach((message) => {
    message.addEventListener("click", (e) => {
        const imageData = e.target.getAttribute("data-image");

        media.forEach((mediaData) => {
            // mediaData.classList.remove('show-media');
            const num = mediaData.dataset.media;

            if (imageData == num) {
                mediaData.classList.toggle('show-media');
            } else {
                mediaData.classList.remove('show-media');

            }
        })
    })
})