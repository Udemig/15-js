import { calculateTotalQuantity, calculateTotalPrice } from "./helper.js";
import { removeFromCart, onQuantityChange } from "./cart.js";


const uiElements = {
    menuBtn: document.querySelector("#menu-btn"),
    nav: document.querySelector("nav"),
    productsList: document.querySelector("#products-list"),
    cartItems: document.querySelector(".cart-items"),
    cartQuantity: document.querySelector("#basket-btn"),
    totalAmount: document.querySelector(".cart-total")
}

//sepettekı sayıya gore ıcon yanı guncelle
const renderCartQuantity = (cart) => {

    //toplam sayiyi bul
    const totalQuantity = calculateTotalQuantity(cart)

    uiElements.cartQuantity.setAttribute("data-quantity",totalQuantity) 
    
}

//apiden alinan urunler icin html render al
const renderProduct = (products, callBackFunction) =>{

    const productsHtml = products
    .map(
      (product) => `  <div class="product">
         
          <img
            src="${product.image}"
            alt="${product.title}"
          />
        

          <div class="product-info">
            <h2>${product.title}</h2>

            <p>$${product.price.toFixed(2)}</p>

            <button class="add-to-cart" data-id="${
              product.id
            }"  >Add to cart</button>
          </div>
        </div>`
    )
    .join("");  

    uiElements.productsList.innerHTML = productsHtml

    const addToCartButtons = document.querySelectorAll(".add-to-cart")

    addToCartButtons.forEach((button)=>{
        button.addEventListener("click",callBackFunction)
    })
}

//sepetteki urunleri render
const renderCartItems = (cart) =>{

    const cartItemsHtml = cart
    .map(
      (item) => `  <div class="cart-item">
          
            <img
              src="${item.image}"
              alt="cart-item-image"
            />

        
            <div class="cart-item-info">
              <h2 class="cart-item-title">${item.title}</h2>

              <input
                type="number"
                min="1"
                value="${item.quantity}"
                class="cart-item-quantity"
                data-id='${item.id}'
              />
            </div>

           
            <h3 class="cart-item-price">$${item.price}</h3>

     
            <button class="remove-button" data-id='${item.id}'>Remove</button>
          </div>`
    )
    .join("");

    uiElements.cartItems.innerHTML = cartItemsHtml

    //remove tilanirsa
    const removeButtons = document.querySelectorAll(".remove-button")

    removeButtons.forEach((button) => {
        button.addEventListener("click",(e) =>{
            //carttan kaldirma islemi
            removeFromCart(e)
        })
    })

    //urun azaltilip arttirilirsa
    const quantityInputs = document.querySelectorAll(".cart-item-quantity")

    console.log("alan 1")
    quantityInputs.forEach( (input) =>  {
        input.addEventListener("change", (e) =>{
            onQuantityChange(e)
        })
    })

}

//urun yoksa
const renderNotFound = () => {
    uiElements.cartItems.innerHTML = ` 
<div class="cookieCard">
  <h1 class="cookieHeading">No items found in cart</h1>
  <p class="cookieDescription">Go to home page to add items to your cart</p>
  <div>
  <a href='../index.html' class="acceptButton">Go to home page</a>
  </div>
</div>
`
}

//toplami guncelle
const renderCartTotal = (cart) => {

    const totalCartAmount = calculateTotalPrice(cart)
    console.log("totalCartAmount: ", totalCartAmount)
    uiElements.totalAmount.innerText = `$ ${totalCartAmount.toFixed(2)}`


}


export {uiElements, renderCartQuantity, renderProduct, renderCartItems, renderNotFound, renderCartTotal}