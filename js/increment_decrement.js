
let basket =[]

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


    update(selectedItem.id)

}


let update =(id)=>{
    let search = basket.find((x)=> x.id === id)
    console.log(search.item)
    document.getElementById(id).innerHTML = search.item
}