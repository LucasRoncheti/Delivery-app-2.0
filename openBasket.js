
    var validation = false

let openBasket=()=>{

    let basketOpen = document.getElementById("basketSection")
    let basket = document.getElementById('basket')
    

    if(validation === false ){
        
        document.getElementById('toSeeShopCart').innerHTML = 'Fechar Sacola'
        basketOpen.classList.add("basketSectionOpen")
        basket.style.backgroundColor = 'black'
        basketOpen.style.transition = "all 1s"
        basket.style.transition = "all 1s"
        
        return validation = true

    }else{
        
        document.getElementById('toSeeShopCart').innerHTML = 'Abrir Sacola'
        basketOpen.classList.remove("basketSectionOpen")
        basket.style.backgroundColor ='#f20055'
        basketOpen.style.transition = "all 1s"
        basket.style.transition = "all 1s"
        
        return validation = false

    }
    
    
}