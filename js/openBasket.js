
    
    //variavel que valida a função openbasket
    var validation = false

    //elemento html container que contem os itens da sacola 
    var containerCart = document.getElementById("containerAnotherOrders")
    
    //elemento html container que contem os itens do açai
    var containerCartAcai = document.getElementById("containerAcai")

    // soma ds arrays em um só para usar na função GenerateCartItens
   var cartItens = hotDogItems.concat(salgadosItems,bebidasItems,polpasItems)

  

   
//função que abre  e fecha a sacola(carrinho) dos itens 
let openBasket=()=>{

    let basketOpen = document.getElementById("basketSection")
    let body= document.getElementById('body')
    let basketDiv = document.getElementById('basket')
    // let sendOrder = document.getElementById('sendOrder')

    

    if(validation === false ){

        
        
        document.getElementById('toSeeShopCart').innerHTML = 'Fechar Sacola'
        basketOpen.classList.add("basketSectionOpen")
        basketDiv.style.backgroundColor = 'black'
        // sendOrder.style.display = 'block'
        body.style.position = 'fixed'
        body.style.transition = 'all 1s'
        basketOpen.style.transition = "all 1s"
        basketDiv.style.transition = "all 1s"
        

        
        
        
       
       
        
        generateCartItems(containerCart,cartItens)
        // generateCartItemsAcai(containerCartAcai,cartItensAcai)
       
       
       
        return validation = true

    }else{
       
        document.getElementById('toSeeShopCart').innerHTML = 'Abrir Sacola'
        basketOpen.classList.remove("basketSectionOpen")
        basketDiv.style.backgroundColor ='#f20055'
        // sendOrder.style.display = 'none'
        body.style.position = 'relative'
        sendOrder.style.transition = "all 1s"
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
                
                <div class=" cartItem">
                <div class="imgAmountCartIten">
                    <img class="imgItem" src="${search.thumbnail}">
                    <p class="amount"> ${item}</p>
                </div>
                <div class="NamePrinceCartIten">
                    <p class="itemName"> ${search.name}</p>
                    <div class="priceIten">
                        <p class = "itemPrice"> Valor unit: ${search.price}</p>
                        <p class = "totalPrice">Valor total: ${item*search.price}</p>
                    </div>
                </div>
                <div  class="trashIcon" onClick = "removeIten(${id})"><i class="bi bi-trash"></i></div>
                </div>

                `  
           
            
        }).join(""))
    }
}



//remove  os itens da sacola 

let removeIten = (id) =>{

    console.log('removendo itens')
    // let selectedId = id

    // basket.filter((x)=> x.id !== selectedId.id)
    // generateCartItems(hotdog,cartItens)
    // localStorage.setItem("data",JSON.stringify(basket))

}









// gera o carrinho com os itens seecionados do açai 
var generateCartItemsAcai = (div,product) =>{
  if (basketAcai.lenght !==0) {

      return (div.innerHTML = basketAcai.map((x) =>{
          let {id,item} = x

          
          let search = product.find((y) => y.id === id) || [] 
         
       
         
          return`
              
              <div class=" cartItem">
                <div class="imgAmountCartIten">
                    <img class="imgItem" src="${search.thumbnail}">
                    <p class="amount"> ${item}</p>
                </div>

                <div class="NamePrinceCartIten">
                    <p class="itemName"> ${search.name}</p>
                    <div class="priceIten">
                    <p class = "itemPrice"> Valor unit: ${search.price}</p>
                    <p class = "totalPrice">Valor total: ${item*search.price}</p>
                </div>
                </div>
              <div  class="trashIcon" onClick = "removeIten(${id})"><i class="bi bi-trash"></i></div>
              </div>
              
              <details class="complementsAcaiOrder">
              <summary>Complementos</summary>
              <p id="hd01_desc" class="p_ingredientes_hot_dog_unselected">Os nomes dos itens solicitados estarão aqui </p>
              </details>

              `  
         
          
      }).join(""))
  }
}





