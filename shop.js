import { images } from './images.js';

const container = document.querySelector('.js-products-container');

let containerHTML = '';

images.forEach((image) => {
    containerHTML += `
        <div class="product-container" data-id="${image.id}">
            <div class="product-small js-product-small">
                ${Object.values(image.imagesContainerOne).map(img => `
                    <div class="product-small-image js-product-small-image">
                        <img src="${img}" alt="">
                    </div>
                `).join('')}
            </div>
            <div class="product-image">
                <div class="image-product-container js-image-product-container">
                    <img src="${image.imagesContainerOne.image1}" alt="">
                </div>
            </div>
            <div class="product-content">
                <div class="product-title">${image.imageName}</div>
                <div class="product-subtitle">Men's T-Shirt</div>
                <div class="product-price">€24.99</div>
                <div class="product-content-image">
                    <div class="product-content-image-one js-product-content-image-one"></div>
                </div>
                <div class="product-sizes">
                    <div class="product-content-size-title">
                        <div class="product-content-size-title-one">Select Size</div>
                        <div class="product-content-size-title-two">Size Guide</div>
                    </div>
                    <div class="product-sizes-specific">
                        ${Object.values(image.sizes).map(size => `<button class="bx">${size}</button>`).join('')}
                    </div>
                    <button class="product-sizes-button main js-product">Add to Bag</button>
                    <button class="product-sizes-button sub-main">Favourite</button>
                </div>
            </div>
        </div>
    `;
});

container.innerHTML = containerHTML;

// Function to handle thumbnail and main image update
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.product-container').forEach((product) => {
        const productSmallImages = product.querySelectorAll('.js-product-small-image img');
        const productMainImage = product.querySelector('.js-image-product-container img');

        productSmallImages.forEach((smallImage) => {
            smallImage.addEventListener('mouseover', () => {
                productMainImage.src = smallImage.src;
            });
        });
    });
});

// Brand selection handling
document.querySelectorAll('.brand-button').forEach((brand) => {
    brand.addEventListener("click", () => {
        const selectedBrandId = brand.dataset.brand;
        const selectedBrand = images.find(image => image.id == selectedBrandId);

        if (selectedBrand) {
            const productContainer = document.querySelector('.js-products-container');
            productContainer.innerHTML = `
                <div class="product-container">
                    <div class="product-small js-product-small">
                        ${Object.values(selectedBrand.imagesContainerOne).map(img => `
                            <div class="product-small-image js-product-small-image">
                                <img src="${img}" alt="">
                            </div>
                        `).join('')}
                    </div>
                    <div class="product-image">
                        <div class="image-product-container js-image-product-container">
                            <img src="${selectedBrand.imagesContainerOne.image1}" alt="">
                        </div>
                    </div>
                    <div class="product-content">
                        <div class="product-title">${selectedBrand.imageName}</div>
                        <div class="product-subtitle">Men's T-Shirt</div>
                        <div class="product-price">€24.99</div>
                        <div class="product-sizes">
                            <div class="product-content-size-title">
                                <div class="product-content-size-title-one">Select Size</div>
                                <div class="product-content-size-title-two">Size Guide</div>
                            </div>
                            <div class="product-sizes-specific">
                                ${Object.values(selectedBrand.sizes).map(size => `<button class="bx">${size}</button>`).join('')}
                            </div>
                            <button class="product-sizes-button main js-product">Add to Bag</button>
                            <button class="product-sizes-button sub-main">Favourite</button>
                        </div>
                    </div>
                </div>
            `;
        }
    });
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
        document.querySelectorAll('.js-product-small').src = e.target.src;
    }
});

producuctContainer.addEventListener('click', (e)=>{
  if(e.target.tagName === 'IMG'){
      document.querySelector('.js-product-small img').src = e.target.src;
  }
});

const addBtn = document.querySelector('.js-add-to-cart');
const cartBtn = document.querySelector('.js-product');

let count = 0;
cartBtn.addEventListener('click', ()=>{
  count++;
  addBtn.innerHTML = count;
})



