//localStorage dan veri al
const getFromLocale = (key) =>{

    return JSON.parse(localStorage.getItem(key)) || []
}


//toplam urun miktarini hesapla
const calculateTotalQuantity = (cart) => {

    //reduce ile bir liste elemanlarini hepsini gezip, reduce icinde tanitigimiz bir elemean ekleyip cikartabiliyoruz
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)
    return totalQuantity
}

//urunu veritabanina kaydet
const saveToLocal = (key, data) =>{
    localStorage.setItem(key, JSON.stringify(data))
}

//sepetteki urun miktarini hesapla
const calculateTotalPrice = (cart) => {

    const cartItemsAmount = cart.reduce(
        (total, product) => total + product.quantity * product.price, 0
    )

    let totalAmount;

    if (cartItemsAmount < 500) {
        totalAmount = cartItemsAmount + 100
    } else {
        totalAmount = cartItemsAmount
    }

    console.log("totalAmount: ", totalAmount)

    return totalAmount

}

//carttan kaldir

export {getFromLocale, calculateTotalQuantity, saveToLocal, calculateTotalPrice}