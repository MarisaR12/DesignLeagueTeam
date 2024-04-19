//Loader
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.setAttrubute('style', 'opacity: 0;');
  }, 500);
  setTimeout(() => {
    loader.parentNode.removeChild(loader);
    document.body.style.overflow = 'initial';
  }, 1000);
});

const coinSfx = new Sfx('sfx/Mario Coin.wav');
const pipeSfx = new sfx('sfx/Mario Pipe.wav');
const powerUpSfx = new Sfx('sfx/Mario Powerup.wav');
const container = document.queryselector('.content');
let ninja;

function Sfx(src) {
  this.sound = document.createElement('audio');
  this.sound.src = src;
  this.sound.setAttribute('preload', 'auto');
  this.sound.setAttribute('controls', 'none');
  this.sound.style.display = 'none';
  documnet.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  };
}
function Ninjas(name, age, height, color) {
  this.name = name;
  this.age = age;
  this.height - height;
  this.color = color;

  this.coin = () => {
    //audio
    coinSfx.play();

    const button = document.querySelector('#btnCoin');

    button.style.setProperty('background-color', '#2ecc71');
    button.style.setProperty('border-color', '#2ecc71');
    button.style.setProperty('color', 'var(--bg-color)');

    //coin effect
    const coinImg = document.createElement('img');
    coinImg.setAttribute






















  









