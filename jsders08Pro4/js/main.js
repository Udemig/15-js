import { renderCartQuantity, uiElements, renderProduct, renderCartItems, renderNotFound, renderCartTotal } from "./ui.js";
import { getFromLocale, calculateTotalQuantity } from "./helper.js";
import fetchProduct from "./api.js";
import {addToCart} from "./cart.js"

const CART = "cart"

//ekrandaki html elementleri yuklendikten sonra
document.addEventListener('DOMContentLoaded', async () => {

    uiElements.menuBtn.addEventListener("click",() =>{
        uiElements.nav.classList.toggle("open")
    })

    //localstorage dan sepete ekelenen urunleri al
    let cart = getFromLocale(CART)

    renderCartQuantity(cart)

    if (window.location.pathname.includes('/index.html')) {
        
        const products = await fetchProduct()
        console.log(products)

        renderProduct(products,(e) =>{
            console.log(e)
            //tiklanan urune gore ekleme
            addToCart(e, products)
        })

    } else {
        if (cart.length > 0) {
            renderCartItems(cart)
            
            //toplami guncelle
            renderCartTotal(cart)
        } else {
            //urun yok
            renderNotFound()
        }
    }

    //header guncelle
})