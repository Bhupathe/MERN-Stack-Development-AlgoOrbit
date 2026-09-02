const button = document.getElementById('play')
const image = document.getElementById('image')

const images = [
    'assets/rock.png',
    'assets/paper.png',
    'assets/scissor.png'
]

button.addEventListener('click', () => {
    const index = Math.floor(Math.random()*3); 
    console.log(index);
    image.style.display = 'block';
    image.src = images[index];
});
