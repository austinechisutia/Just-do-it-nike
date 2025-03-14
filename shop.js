import {images} from './images.js';

const container = document.querySelector('.js-products-container');

let containerHTML = '';

images.forEach((image)=>{
    containerHTML += `
        <div class="product-small js-product-small" name="product-small-${image.id}">
          <div class="product-small-image js-product-small-image">
            <img src="${image.imagesContainerOne.image7}" alt="">
          </div>
          <div class="product-small-image js-product-small-image">
            <img src="${image.imagesContainerOne.image2}" alt="">
          </div>
          <div class="product-small-image js-product-small-image">
            <img src="${image.imagesContainerOne.image3}" alt="">
          </div>
          <div class="product-small-image js-product-small-image">
            <img src="${image.imagesContainerOne.image1}" alt="">
          </div>
          <div class="product-small-image js-product-small-image">
            <img src="${image.imagesContainerOne.image5}" alt="">
          </div>
          <div class="product-small-image js-product-small-image">
            <img src="${image.imagesContainerOne.image6}" alt="">
          </div>
          
          
        </div>
        <div class="product-image">
          <div class="image-product-container js-image-product-container">
            <img src="${image.imagesContainerOne.image1}" alt="">
          </div>
        </div>
        <div class="product-content">
          <div class="product-title">Nike Sportswear Club</div>
          <div class="product-subtitle">
            Men's T-Shirt
          </div>
          <div class="product-price">€24.99</div>
          <div class="product-content-image">
            <div class="product-content-image-one js-product-content-image-one">

            </div>
          </div>
          <div class="product-sizes">
            <div class="product-content-size-title">
              <div class="product-content-size-title-one">Select Size</div>
              <div class="product-content-size-title-two">Size Guide</div>

            </div>
            <div class="product-sizes-specific">
              <button class="bx">XS</button>
              <button class="bx">S</button>
              <button class="bx">M</button>
              <button class="bx">L</button>
              <button class="bx">XL</button>

            </div>
            <button class="product-sizes-button main">Add to Bag</button>
            <button class="product-sizes-button sub-main">Favourite</button>

          </div>
        </div>
    `
});
    
container.innerHTML = containerHTML;


document.addEventListener("DOMContentLoaded", () => {
  const productSmall = document.querySelectorAll('.js-product-small-image');
  const productImage = document.querySelector('.js-image-product-container img');
  const jsImage = document.querySelectorAll('.js-image');  // error here


  if (productSmall.length > 0 && productImage) {
      productSmall.forEach((smallImage) => {
            smallImage.addEventListener('mouseover', () => {
              const newSrc = smallImage.tagName === 'IMG' ? smallImage.src : smallImage.querySelector('img').src;
              productImage.src = newSrc;
          });
      });
  }
});

const producuctContainer = document.querySelector(".js-product-content-image-one");

const imageHTML = images.map((image)=>{
    return `
        <img class="js-image" src="${image.imagesContainerOne.image1}" alt="">
    `
}).join('');

producuctContainer.innerHTML = imageHTML;


producuctContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        document.querySelector('.js-image-product-container img').src = e.target.src;
    }
});

producuctContainer.addEventListener('click', (e)=>{
  if(e.target.tagName === 'IMG'){
      document.querySelector('.js-product-small img').src = e.target.src;
  }
});

const addBtn = document.querySelector('.js-add-to-cart');
const cartBtn = document.querySelector('.js-cart');


addBtn.addEventListener('click', ()=>{
  
})



