// Array mit Bild-URLs (Beispiele)
const schnitzelImages = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/1200px-Wiener-Schnitzel02.jpg',
    'https://static01.nyt.com/images/2024/02/28/multimedia/ND-tonkatsu-hbtg/ND-tonkatsu-hbtg-googleFourByThree.jpg',
    'https://www.emikodavies.com/wordpress/wp-content/uploads/2014/03/cotoletta-IMG_5370-blog.jpg',
    'https://www.daskochrezept.de/sites/daskochrezept.de/files/styles/1024_576/public/artikel/schnitzel-mit-pommes.jpg?h=c40d8882&itok=JYxnAhiy'
];

const galleryDiv = document.getElementById('imageGallery');

schnitzelImages.forEach((imageSrc) => {
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.alt = 'Bild von einem Schnitzel';
    galleryDiv.appendChild(imgElement);
});
