const getFrame = document.querySelector('#meme-image-container');
const getImgInput = document.querySelector('#meme-insert');
const getBtnFire = document.querySelector('#fire');
const getBtnWater = document.querySelector('#water');
const getBtnEarth = document.querySelector('#earth');
const getImgPreview = document.querySelector('#meme-image');
const getDarkBtn = document.querySelector('#darkMode');
const body = document.querySelector('body');

const darkMode = () => {
  const get = getComputedStyle(body).backgroundColor;
  if(get === 'rgb(245, 245, 245)'){
    body.style.backgroundColor = 'rgb(0,0,0)';
    body.style.color = 'white';
    getDarkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    getDarkBtn.style.backgroundColor = 'black';
    getDarkBtn.style.color = 'white';
    localStorage.setItem('darkMode', 'true');
  }else{
    body.style.backgroundColor = 'rgb(245, 245, 245)';
    body.style.color = 'black';
    getDarkBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    getDarkBtn.style.backgroundColor = 'white';
    getDarkBtn.style.color = 'black';
    localStorage.setItem('darkMode', 'false');
  }
};

const verifyDarkMode = () => {
  if (localStorage.getItem('darkMode') === 'true') {
    body.style.backgroundColor = 'rgb(0,0,0)';
    body.style.color = 'white';
    getDarkBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    getDarkBtn.style.backgroundColor = 'black';
    getDarkBtn.style.color = 'white';
  }else{
    body.style.backgroundColor = 'rgb(245, 245, 245)';
    body.style.color = 'black';
    getDarkBtn.style.backgroundColor = 'white';
    getDarkBtn.style.color = 'black';
    getDarkBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
};

const textPreview = () => {
  const getInput = document.querySelector('#text-input');
  const getContainer = document.querySelector('#meme-text');
  getInput.addEventListener('input', () => {
    getContainer.innerHTML = getInput.value;
  });
};

const uploadImage = () => {
  const uploader = new FileReader();
  uploader.readAsDataURL(getImgInput.files[0]);
  uploader.onloadend = (event) => {
    getImgPreview.src = event.target.result;
  };
};

const setBtnsColours = () => {
  getBtnFire.style.backgroundColor = 'rgb(255, 0, 0)';
  getBtnWater.style.backgroundColor = 'rgb(0, 0, 255';
  getBtnWater.style.color = 'white';
  getBtnEarth.style.backgroundColor = 'rgb(0, 128, 0';
};

const changeFrameColour = (button) => {
  button.addEventListener('click', () => {
    if (button.id === 'fire') {
      getFrame.style.border = 'dashed 3px rgb(255, 0, 0)';
    } else if (button.id === 'water') {
      getFrame.style.border = 'double 5px rgb(0, 0, 255)';
    } else {
      getFrame.style.border = 'groove 6px rgb(0, 128, 0)';
    }
  });
};

const putButtonsToWork = () => {
  const getAllBtns = document.querySelectorAll('button');
  for (let i = 0; i < getAllBtns.length; i += 1) {
    if (getAllBtns[i].id === 'fire') {
      changeFrameColour(getBtnFire);
    } else if (getAllBtns[i].id === 'water') {
      changeFrameColour(getBtnWater);
    } else {
      changeFrameColour(getBtnEarth);
    }
  }
};

const createMiniMeme = () => {
  const getMemes = document.querySelectorAll('img');
  for (let i = 1; i < getMemes.length; i += 1) {
    getMemes[i].addEventListener('click', () => {
      getImgPreview.src = `imgs/meme${i}.png`;
    });
  }
};

window.onload = () => {
  getDarkBtn.addEventListener('click', darkMode);
  getImgInput.addEventListener('input', uploadImage);
  textPreview();
  setBtnsColours();
  putButtonsToWork();
  createMiniMeme();
  verifyDarkMode();
};
//Done