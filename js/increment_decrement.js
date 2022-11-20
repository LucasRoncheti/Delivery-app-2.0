

//variável que armazena os itens da sacola
let basket = JSON.parse(localStorage.getItem("data")) || []

// funções para aumentar e diminuir a quantidade de itens shop 


let  increment=(id)=>{
    

    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
    
    localStorage.setItem("data",JSON.stringify(basket))
    update(selectedItem.id)
    
}



let  decrement=(id)=>{
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
    }

    localStorage.setItem("data",JSON.stringify(basket))
    update(selectedItem.id)

}

// função que faaz a atualização dsintens na variável Basket(sacola)
let update =(id)=>{
    let search = basket.find((x)=> x.id === id)
    console.log(search.item)
    document.getElementById(id).innerHTML = search.item

    calculation()
}

//função para calcular a quantidade de itens na sacola e mostrar a soma total

let calculation = ()=>{
  let cartNumber=document.getElementById("cartNumber")
  cartNumber.innerHTML= basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
}