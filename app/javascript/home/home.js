const imageArea = document.getElementById('imageArea');
const images = ['ani10.JPG', 'ani11.JPG', 'ani12.JPG'];

const imageNo = Math.floor( Math.random() * images.length)
imageArea.src = images[imageNo];