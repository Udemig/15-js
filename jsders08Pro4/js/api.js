const fetchProduct = async () =>{

    try {
        
        const response = await fetch("../db.json")
        const data = await response.json()
        console.log("data")
        return data.products

    } catch (error) {
        alert(error)
        return []
    }
}

export default fetchProduct