

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
  generateCartItems(hotdog,cartItens)
  
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
    generateCartItems(hotdog,cartItens)

}

// função que fazer a atualização dsintens na variável Basket(sacola)
let update =(id)=>{
    let search = basket.find((x)=> x.id === id)
    
    document.getElementById(id).innerHTML = search.item

    calculation()
}

//função para calcular a quantidade de itens na sacola e mostrar a soma total

let calculation = ()=>{
  let cartNumber=document.getElementById("cartNumber")
  cartNumber.innerHTML= basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
}

calculation()






