
var cartNumber=""

//variável que armazena os itens da sacola do açaí 
var basketAcai = JSON.parse(localStorage.getItem("dataAcai")) || []

var acaiCremosoPrice = "" //variável com o preço do açaí

var acaiCremosoSize = "" //variável com o tamanho do açaí 


//variável que armazena os itens da sacola
var basket = JSON.parse(localStorage.getItem("data")) || []

// funções para aumentar e diminuir a quantidade de itens shop 


let  increment=(id)=>{
    

    let selectedItem =id

    let search = basket.find((x) => x.id === selectedItem.id);
    

  if (search  === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
      
    });
  } else {
    
    search.item += 1;
  }
  
  update(selectedItem.id)
  localStorage.setItem("data",JSON.stringify(basket))
  generateCartItems(containerCart,cartItens)
  
  
}



let  decrement=(id)=>{
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
    }

    update(selectedItem.id)

    //remover itens "0" no local storage 
    basket=basket.filter((x)=> x.item!==0)
    
    localStorage.setItem("data",JSON.stringify(basket))
    generateCartItems(containerCart,cartItens)

}

// função que fazer a atualização dsintens na variável Basket(sacola)
var update =(id)=>{
    let search = basket.find((x)=> x.id === id)
    
    document.getElementById(id).innerHTML = search.item

    CalulationAmountAllItens()
}

//função para calcular a quantidade de itens na sacola e mostrar a soma total

var calculation = ()=>{
 
  cartNumber = basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
  return cartNumber
  
}






////////////////////////////////////////////
//daqui pra baixo são os funções para o açaí 
////////////////////////////////////////////






let  incrementAcai=(id)=>{
    

    let selectedItem =id
  

    
    let search = basketAcai.find((x) => x.id === selectedItem.id);
    

  if (search  === undefined) {
    basketAcai.push({
      id: selectedItem.id,
      item: 1,
      
    });
  } else {
    
    search.item += 1;
  }
  
  updateAcai(selectedItem.id)
  localStorage.setItem("dataAcai",JSON.stringify(basketAcai))
  generateCartItemsAcai(containerCartAcai,cartItens)
 
  
  
}


let  decrementAcai=(id)=>{
    let selectedItem = id;
    let search = basketAcai.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
    }

    updateAcai(selectedItem.id)

    //remover itens "0" no local storage 
    basketAcai=basketAcai.filter((x)=> x.item!==0)
    
    localStorage.setItem("dataAcai",JSON.stringify(basketAcai))
    generateCartItemsAcai(containerCartAcai,cartItens)

}


// função que fazer a atualização dos itens na variável Basketdo açaí
var updateAcai =(id)=>{
  let search = basketAcai.find((x)=> x.id === id)
  
  document.getElementById(id).innerHTML = search.item

  CalulationAmountAllItens()
}

//função para calcular a quantidade de itens na sacola e mostrar a soma total

var calculationAcai = ()=>{
 let containerNumbreItens = document.getElementById('cartNumber')
  let cartNumber= basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
  var cartNumberAcai= basketAcai.map((x)=>x.item).reduce((x,y)=>x+y,0)
  containerNumbreItens.innerHTML= cartNumber + cartNumberAcai
 
}




var CalulationAmountAllItens =()=>{
  calculationAcai()
  calculation()
  
  //   let cartNumber=document.getElementById("cartNumber")
  // cartNumber.innerHTML= basketAcai.map((x)=>x.item).reduce((x,y)=>x+y,0)
  }
  
  
  CalulationAmountAllItens()




