const images = [
    {
        id: 1,
        imageName: "Blackres",
        price: 100,
        category: "resin",
        description: "Black resin",
        imagesContainer:{
            image1: "images/green/1.jpg",
            image2: "images/green/2.jpg",
            image3: "images/green/3.jpg",
            image4: "images/green/4.jpg",
            image5: "images/green/5.jpg",
            image6: "images/green/6.jpg",
            image7: "images/green/7.jpg"
        }
        
    }
]

const container = document.querySelector('.js-products-container');

let containerHTML = '';

images.forEach((image)=>{
    containerHTML += `
        <div class="product-small">
          <div class="product-small-image">
            <img src="${image.imagesContainer.image1}" alt="">
          </div>
          
        </div>
        <div class="product-image">
          <div class="image-product-container">
            <img src="images/green/2.jpeg" alt="">
          </div>
        </div>
        <div class="product-content">
          <div class="product-title">Nike Sportswear Club</div>
          <div class="product-subtitle">
            Men's T-Shirt
          </div>
          <div class="product-price">€24.99</div>
          <div class="product-content-image">
            <div class="product-content-image-one">
              <img src="images/green/6.jpeg" alt="">
              <img src="images/green/6.jpeg" alt="">
              <img src="images/green/6.jpeg" alt="">
              <img src="images/green/6.jpeg" alt="">



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
})
    