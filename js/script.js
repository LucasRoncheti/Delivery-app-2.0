
//function to generate items
let generateAcai = () => {
    let shop = document.getElementById("shop")
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

//hot dog
let generatehotdogSection=()=>{
    let shop2 = document.getElementById("shop2")
    return (shop2.innerHTML = hotDogHeader.map((x)=>{
        let { id, name,  img,desc,price,mainName,mainId } = x;
        return `
        <section  class="item">
            <button onclick="show3()" class="button_produto" id="acai"><img class="icon_products" src="${img}" alt="">${mainName}<img src="images/arrow.svg" alt="" class="a3 arrow"></button>

            <div id="HotDogeLanches"></div>
        </section>
        
        
        `

    }).join(""))
}


let generatehotdogItens=()=>{

    let containerHotDog = document.getElementById('HotDogeLanches')
    return (containerHotDog.innerHTML = hotDogItems.map((x)=>{
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

                    <div>
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>

            </div>

        `

    }).join(""))
}

//salgados 
let generateSalgadosSection =()=>{
    let shop3 = document.getElementById('shop3')
    return(shop3.innerHTML = salgadosHeader.map((u)=>{
        return` 
        <section id="container04" class="item">
            <button onclick="show4()" class="button_produto" id="acai"><img class="icon_products" src="${u.img}" alt="">${u.mainName} <img src="images/arrow.svg" alt="" class="a4 arrow"></button>
                <div id="shop_3_Container" class=" container_checkbox main_container ">

                </div>        
                
            
    </section>       
        `

    }).join(""))
}


let generateSalgadositems =()=>{
    let containerSalgados = document.getElementById('shop_3_Container')
    return(containerSalgados.innerHTML = salgadosItems.map((x)=>{
        return`
            <div class="inputs_sem_valores">
                <div>
                    <input type="checkbox" name="salgados" value="${x.name}" " id="${x.id}" >
                    <label class="fcpSalgados" for="${x.id}">${x.name}</label>
                </div>
                    <p id="salg_preco01" class="mcs fcp_unselected">R$ ${x.price},00</p>
            </div>
        `
    }).join(""))

}

//bebidas

let generateBebidasSection =()=>{
    let shop4=document.getElementById("shop4")
    return(shop4.innerHTML = bebidasHeader.map((x)=>{
        return`

        <section id="container05" class="item">
        <button onclick="show5()" class="button_produto" id="${x.mainId}"><img class="icon_products" src="${x.img}" alt="">${x.mainName}<img src="images/arrow.svg" alt="" class="a5 arrow"></button>

            <div id="shop_4_Container" class="container_checkbox main_container">

            </div>

        </section>

        `

    }).join("") )

}

let generateBebidasItems =()=>{
    let containerBebidas = document.getElementById('shop_4_Container')
    return(containerBebidas.innerHTML =bebidasItems.map((x)=>{
        return`

            <div class="inputs_com_valores miB">
                    
                    <div>
                        <input type="checkbox" name="bebidas" value="${x.name}"  id="${x.id}">
                            <label class="fcpBebidas" for="${x.id}">${x.name}</label>
                    </div>
                        <p id="bdp01" class="fcp_unselected_bebidas">R$ ${x.price},00</p>
            </div>
        
        `
    }).join("") )
}

//Polpas
let generatePolpasSection = ()=>{
    let shop5=document.getElementById("shop5")
    return(shop5.innerHTML = polpasHeader.map((x)=>{
        return`

        <section id="container06" class="item">
            <button onclick="show6()" class="button_produto" id="${x.id}"><img class="icon_products" src="${x.img}" alt="">${x.mainName}<img src="images/arrow.svg" alt="" class="a6 arrow"></button>

            

            <div id="shop_5_Container" class="container_checkbox main_container">

            </div>
            
            <div class=" main_container ">
            <p class="flavors_pulp"> Abacaxi - Abacaxi com hortelã - Acerola  Caju - Goiaba - Manga - Maracujá - Morango - Limão - Graviola</p>
            </div>
            
        </section>

        `

    }).join("") )
}

let generatePolpasItems =()=>{
    let containerBebidas = document.getElementById('shop_5_Container')
    return(containerBebidas.innerHTML =polpasItems.map((x)=>{
        return`

        <div class="inputs_com_valores">
            <div>
                <input type="checkbox" name="${x.name}" value="${x.name}"  id="${x.id}">
                    <label class="fcp" for="polpa01">${x.name}</label>
            </div>
                <p id="polpa01P" class="fcp_unselected">R$ ${x.price},00</p>
        </div>

        
        
        `
    }).join("") )
}


generateAcai()
generatehotdogSection()
generatehotdogItens()
generateSalgadosSection()
generateSalgadositems()
generateBebidasSection()
generateBebidasItems()
generatePolpasSection()
generatePolpasItems()

















