const likeImages = document.querySelectorAll('.like-img');


const image1 = 'assets/icons/like_grey.png';
const image2 = 'assets/icons/like_red.png';


function toggleImageSource(imageElement, imgSrc1, imgSrc2) {
    if (imageElement.src.includes(imgSrc1)) {
        imageElement.src = imgSrc2;
    } else {
        imageElement.src = imgSrc1;
    }
}


likeImages.forEach(image => {
    image.onclick = function() {
        toggleImageSource(image, image1, image2);
    };
});
