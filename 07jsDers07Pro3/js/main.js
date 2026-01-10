import {uiElements, renderMenuCard, renderLoader, renderDetailPage, renderNotFound } from "./ui.js";
import getMenu from "./api.js";

//ekrandaki html elementleri yuklenidliginde
document.addEventListener("DOMContentLoaded", async() =>{

    const menuData = await getMenu()
    console.log(menuData)

    if (window.location.pathname.includes("/index.html")) {
        
        //ekrani guncelle
        renderLoader()

        //menu elemanlarini yukle
        renderMenuCard(menuData)

        //kategori tiklanma izlenmesi
        uiElements.categoryButtons.forEach((button)=>{

            button.addEventListener("click",()=>{
                const selectedCategory = button.id

                const filteredMenu = menuData.filter(
                    (item) => item.category == selectedCategory
                )

                console.log(selectedCategory)
                if (selectedCategory == "all"){
                    renderMenuCard(menuData)
                } else{
                    renderMenuCard(filteredMenu)
                }

            })
        })

    } else {
        //url deki parametreye eris
        const params = new URLSearchParams(window.location.search)

        console.log(params)

        const itemId = +params.get("id")

        console.log(itemId)

        const product = menuData.find((item) => item.id == itemId)

        if (!product) {
            //hata ver
            renderNotFound()
        } else {
            renderDetailPage(product)
        }
    }

})

//ver