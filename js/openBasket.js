
    var validation = false

    let hotdog = document.getElementById("hotdogCart")
   

    // soma ds arrays em um só para usar na função GenerateCartItens
   var cartItens = hotDogItems.concat(salgadosItems,bebidasItems,polpasItems)

   
//função que abre  e fecha a sacola dos itens 
let openBasket=()=>{

    let basketOpen = document.getElementById("basketSection")
    let basketDiv = document.getElementById('basket')

    

    if(validation === false ){
        
        document.getElementById('toSeeShopCart').innerHTML = 'Fechar Sacola'
        basketOpen.classList.add("basketSectionOpen")
        basketDiv.style.backgroundColor = 'black'
        basketOpen.style.transition = "all 1s"
        basketDiv.style.transition = "all 1s"

        
       
       
        
       
       
       
       
        return validation = true

    }else{
        
        document.getElementById('toSeeShopCart').innerHTML = 'Abrir Sacola'
        basketOpen.classList.remove("basketSectionOpen")
        basketDiv.style.backgroundColor ='#f20055'
        basketOpen.style.transition = "all 1s"
        basketDiv.style.transition = "all 1s"
        
        return validation = false

    }
    
    
}

// gera o carrinho com os itens seecionados 
let generateCartItems = (div,product) =>{
    if (basket.lenght !==0) {

        return (div.innerHTML = basket.map((x) =>{
            let {id,item} = x

            
            let search = product.find((y) => y.id === id) || [] 
           
           
           
            return`
                
                <p> ${item}</p>
                <p> ${search.name}</p>
                <p> ${search.price}</p>
                <p> ${item*search.price}</p>

                `  
           
            
        }))
    }
}






