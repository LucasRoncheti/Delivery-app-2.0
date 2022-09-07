

let shop = document.getElementById("shop")

let container_checkbox = document.getElementById('container_checkbox')


//function to generate items
let generateAcai = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, size, priceAddition, priceSize, fruits, complements, topping, Addition, img } = x;

        return `
       <div id="product-id-${id}" class="item">
       
                <button onclick="show()" class="button_produto" id="acai"> <img class="icon_products" src="${img}" alt=""> ${name} <img src="images/arrow.svg" alt="" class=" arrow"></button>

            <div class = "main_container">
                <h3 >Escolha o tamanho</h3>
                <div class="container_checkbox">

                    ${size.map((y,index) => {
                    return ` 
                        <div class="inputs_com_valores">
                            <div >
                                <input type="radio" name="tamanho`+`${name}" value="${y}" id="${y}" >
                                    <label class="fcp" for="${y}">${y}</label>
                            </div>

                            <p id="${priceSize[index]}" class="fcp_unselected" >R$ ${priceSize[index]}</p>

                        </div>`

                    }).join("")}

                </div>

                <H3>Escolha as frutras</h3>
                <div id="fruits`+`${name}" class="container_checkbox fcp ">

                    ${fruits.map((z)=>{
                        return `
                        <div class="inputs_sem_valores acaicremoso">
                        <input type="checkbox" value=" ${z}" " name="fruits`+`${name}" id="${z}">
                            <label for="${z}">${z}</label>
                        </div>
                    `
                    }).join("")}
                    
                </div>

                <H3>Escolha o Complementos</h3>
                <div id="complements`+`${name}" class="container_checkbox fcp ">

                    ${complements.map((z)=>{
                        return `
                        <div class="inputs_sem_valores acaicremoso">
                        <input type="checkbox" value=" ${z}" " name="complements`+`${name}" id="${z}">
                            <label for="${z}">${z}</label>
                        </div>
                    `
                    }).join("")}
                    
                </div>

                <H3>Escolha a cobertura</h3>
                <div id="topping`+`${name}" class="container_checkbox fcp ">

                    ${topping.map((z)=>{
                        return `
                        <div class="inputs_sem_valores acaicremoso">
                        <input type="radio" value=" ${z}" " name="topping`+`${name}" id="${z}">
                            <label for="${z}">${z}</label>
                        </div>
                    `
                    }).join("")}
                    
                </div>

                <H3>Escolha a Acréscimo</h3>
                <div class="container_checkbox">

                    ${Addition.map((y,index) => {
                    return ` 
                        <div class="inputs_com_valores">
                            <div >
                                <input type="checkbox" name="tamanho`+`${name}" value="${y}" id="${y}" >
                                    <label class="fcp" for="${y}">${y}</label>
                            </div>

                            <p id="${priceAddition[index]}" class="fcp_unselected" >R$ ${priceAddition[index]}</p>

                        </div>`

                    }).join("")}

                </div>
                <div class="container_buttons_add_cancel">
                
                <button  class="button_cancel" onclick=""> <i  class="bi bi-trash"></i></button>

                <button  class="button_add_cart" onclick=""> <i  class="bi bi-bag-plus-fill"></i> </button>
                </div>
        </div>
        
    </div>
    `
    }).join(""))
}

let generatehotdog=()=>{
    let shop2 = document.getElementById("shop2")
    return (shop2.innerHTML = HotDogHeader.map((x)=>{
        let { id, name,  img,desc,price,mainName,mainId } = x;
        return `
        <section  class="item">
            <button onclick="show3()" class="button_produto" id="acai"><img class="icon_products" src="${img}" alt="">${mainName}<img src="images/arrow.svg" alt="" class="a3 arrow"></button>

            <div id="HotDogeLanches"></div>
        </section>
        
        
        `

    }).join(""))
}


let generatehotdogItens = ()=>{

    let containerHotDog = document.getElementById('HotDogeLanches')
    return (containerHotDog.innerHTML = HotDogItems.map((x)=>{
        let { id,desc,price,name } = x;

        return`
   
            <div id="${id}"  class="container_checkbox main_container">
            <div  class="inputs_com_valores">
                    <div>
                        <div>
                            <input type="checkbox" name="${name}" value="${name}" id="${name}" >
                            <label class="fcp"  for="${name}"> ${name}</label>
                        </div>
                        
                    </div>
                        <p id="hd`+`${id}" class="fcp_unselected">R$ ${price},00</p>
            </div>

                <p id="hd01_desc" class="p_ingredientes_hot_dog_unselected">${desc}</p>

        </div>

        `

    }).join(""))
}

generateAcai()
generatehotdog()
generatehotdogItens()

















