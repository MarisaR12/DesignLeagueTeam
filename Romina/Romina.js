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
    coinImg.setAttribute('src', 'img/coin.png');
    coinImg.setAttribute('id', 'coin-img');
    coinImg.style.transform = 'translate(-50%,calc(-100% - ' + ninja.height + 'px';
    container.appendChild(coinImg);

    $('#coin-img').animate({ top: '60%', opacity: 1 }, 250);
    $('#coin-img').animate({ top: '70%', opacity: 0 }, 250, () => {
      $('#coin-img').remove();
      button.style.setProperty('background-color', 'transparent');
      button.style.setPropery('border-color', 'var(--accent-color)');
      button.style.setProperty('color', 'var(--accent-color');
    });
  };
  this.pipe = () => {
    pipeSfx.play();
  };
  this.powerUp = () => {
    powerUpSfx.play();
  };
}

const promptUser = () => {
  let name = prompt('Pick a name:') || 'Ninja';
  let age;
  let height;
  let color;

  this.getAge = () => {
    age = prompt('Pick an age:') || '18';
    age = parseInt(age);
    if (isNaN(age)) {
      this.getAge();
    } else {
      return;
    }
};

  this.getHeight= () => {
    height = prompt('Pick height: 1, 2, 3, 4') || 4;
    height = parseInt(height);
    if (height === 1 || height === 2 || height === 3 || height === 4) {
      height = height * 64;
      return;
    } else {
      this.getHeight();
    }
  };
  this.getColor = () => {
    color = prompt('Choose color: Red Blue Green') || 'red';
    color = color.toLowerCase();
    if (color === 'red' || color === 'blue' || color === 'green') {
      return;
    } else {
      this.getgetColor();
    }
  };

  this.appedImg = () => {
    img = document.createElement('img');
    let size = 'width:' + height + 'px;height:' + height + 'px;';
    if (color === 'blue') {
      img.setAttribute('src', 'img/ninja1.png');
      img.setAttribute('style', size);
      container.appendChild(img);
    } else if (color === 'green') {
      img.setAttribute('src', 'imgs/ninja2.png');
      img.setAttribute('style', size);
      container.appendChild(img);
    } else if (color === 'red') {
      img.setAttribute('src', 'img/ninja3.png');
      img.setAttribute('style', size);
      conatiner.appendChild(img);
    }
  };

  this.changesBtns = () => {
    const btn = document.queryselector('button');
    const btnContainer = document.queryselector('.btns-container');
    btnContainer.removechild(btn);
    btnContainer.innerHTML =
      "<button onclick='ninja.coin()' id='btnCoin'>Coin</button> /n <button onclick='ninja.pipe()' id='btnPipe'>Pipe</button> /n <button onclick='ninja.powerUp()' id='btnPowerUp'>Power Up</button>";
    const newBtns = document.queryselectorAll('button');
    for (let i = 0; i < newBtns.lenght; i++ {
      newBtns[i].style.setProperty('margin-left', '1.5rem');
    }

    //Add floor
    const floor
  
      
  
    






















  









