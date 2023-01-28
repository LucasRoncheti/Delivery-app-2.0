var acaiComplemetsValues = []


// valor da escolha do tipo de acai que muda a opção de valores na seção de tamanhos 
var acaiChoiced=""

var mainContainerAcai = document.getElementById("containerAcaiComplements")


// função que gera a escolha do tipo de açaí 
let generateAcaiType=()=>{
    
    return (mainContainerAcai.innerHTML = acai.map((x,index)=>{
        let {id,name} = x;
       
        
        return`
              
                <h3>Escolha um tipo</h3><br>
                
                <div  id="divInputs" class="inputsDivAcaiComplements">   
                    ${name.map((y)=> {
                        return`
                        <div  style="margin-top:7px">
                            <input onclick="acaiTypeSelected()" id="${y}" name="tipoAcai" type="radio" value="${y}">
                            <label for="${y}">${y}</label>
                        </div>
                        `}).join("")}
                    
                </div>
               
                <button onclick="generateAcaiSize()" class="nextButton">Próximo <i class="bi bi-caret-right"></i></button>

                
        `
    }))
    
    
}

//gera o tamanho que vai ser o copo do acaí 
let generateAcaiSize=()=>{
    
    return (mainContainerAcai.innerHTML = acai.map((x,index)=>{
        let {size,priceSize1,priceSize2} = x;

        if(acaiChoiced === "Açaí Cremoso"){

            return`
                    <h3>Escolha o tamanho </h3><br>
                    
                    <div  id="divInputs" class="inputsDivAcaiSize">   
                        ${size.map((y,index)=> {
                            return`
                            <div id="${y}-" class="sizeAcaiInputs" >
                                <input onclick="acaiSizeSelected()" id="${y}" name="acaiSize" type="radio" value="${y}">
                                <label for="${y}">${y} ->  ${priceSize1[index].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</label>
                            </div>
                            `}).join("")}

                    </div>

                    <div class="buttonsNextPrev">
                        <button onclick="generateAcaiType()" class="prevButton"><i class="bi bi-caret-left"></i>Voltar </button>

                        <button onclick="generateAcaiFruits()" class="nextButton">Próximo <i class="bi bi-caret-right"></i></button>
                    </div>          
                 `
        }else{
            return`
            <h3>Escolha o tamanho </h3><br>
                    
            <div  id="typeAcai" class="inputsDivAcaiSize">   
                ${size.map((y,index)=> {
                    return`
                    <div id="${y}-" class="sizeAcaiInputs" >
                        <input id="${y}" name="tipoAcai" type="radio" value="${y}">
                        <label for="${y}">${y} ->  ${priceSize2[index].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</label>
                    </div>
                    `}).join("")}

            </div>

            <div class="buttonsNextPrev">
                <button onclick="generateAcaiType()" class="prevButton"><i class="bi bi-caret-left"></i>Voltar </button>
                <button onclick="generateAcaiFruits()"  class="nextButton">Próximo <i class="bi bi-caret-right"></i></button>
            </div> 
            
            `
        }
       
   
    }))
    
}
//gera as frutas  que vai no açaí 
let generateAcaiFruits=()=>{
    
    return (mainContainerAcai.innerHTML = acai.map((x)=>{
        let {fruits} = x;

        

            return`
                    <h3>Escolha as frutas </h3><br>
                    
                    <div  id="divInputs" class="inputsDivAcaiSize">   
                        ${fruits.map((y)=> {
                            return`
                            <div id="${y}-" onclick="acaiFruitsSelected()"  class="sizeAcaiInputs" >
                                <input  id="${y}" name="acaiSize" type="checkbox" value="${y}">
                                <label for="${y}"> ${y}</label>
                            </div>
                            `}).join("")}

                    </div>

                    <div class="buttonsNextPrev">
                        <button onclick="generateAcaiSize()" class="prevButton"><i class="bi bi-caret-left"></i>Voltar </button>
                        <button onclick="generateAcaiComplements()" class="nextButton">Próximo <i class="bi bi-caret-right"></i></button>
                    </div> 
            
            `
        }))
       
   
    
}
//gera os complementos que vai no açaí 
let generateAcaiComplements=()=>{
    
    return (mainContainerAcai.innerHTML = acai.map((x)=>{
        let {complements} = x;

        

            return`
                    <h3>Escolha os complementos </h3><br>
                    
                    <div  id="divInputs" class="inputsDivAcaiSize">   
                        ${complements.map((y)=> {
                            return`
                            <div id="${y}-" onclick="acaiComplementsSelected()" class="sizeAcaiInputs" >
                                <input  id="${y}" name="acaiSize" type="checkbox" value="${y}">
                                <label for="${y}"> ${y}</label>
                            </div>
                            `}).join("")}

                    </div>

                    <div class="buttonsNextPrev">
                        <button onclick="generateAcaiFruits()" class="prevButton"><i class="bi bi-caret-left"></i>Voltar </button>
                        <button onclick="generateAcaiTopping()" class="nextButton">Próximo <i class="bi bi-caret-right"></i></button>
                    </div> 
            
            `
        }))
       
   
    
}
//gera as coberturas  que vai no açaí 
let generateAcaiTopping=()=>{
    
    return (mainContainerAcai.innerHTML = acai.map((x)=>{
        let {topping} = x;

        

            return`
                    <h3>Escolha a cobertura</h3><br>
                    
                    <div  id="divInputs" class="inputsDivAcaiSize">   
                        ${topping.map((y)=> {
                            return`
                            <div id="${y}-" class="sizeAcaiInputs" >
                                <input onclick="acaiToppingSelected()" id="${y}" name="acaiSize" type="radio" value="${y}">
                                <label for="${y}"> ${y}</label>
                            </div>
                            `}).join("")}

                    </div>

                    <div class="buttonsNextPrev">
                        <button onclick="generateAcaiComplements()" class="prevButton"><i class="bi bi-caret-left"></i>Voltar </button>
                        <button onclick="generateAcaiAddition()" class="nextButton">Próximo <i class="bi bi-caret-right"></i></button>
                    </div> 
            
            `
        }))
       
   
    
}
//gera as coberturas  que vai no açaí 
let generateAcaiAddition=()=>{
    
    return (mainContainerAcai.innerHTML = acai.map((x)=>{
        let {Addition,priceAddition} = x;

        

            return`
                    <h3>Que tal  um adicional?</h3><br>
                    
                    <div  id="divInputs" class="inputsDivAcaiSize">   
                        ${Addition.map((y,index)=> {
                            return`
                            <div id="${y}-" class="sizeAcaiInputs" >
                            <input onclick="acaiAddictionSelected()" id="${y}" name="acaiSize" type="checkbox" value="${y}">
                            <label for="${y}">${y} ->  ${priceAddition[index].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</label>
                        </div>
                            `}).join("")}

                    </div>

                    <div class="buttonsNextPrev">
                        <button onclick="generateAcaiComplements()" class="prevButton"><i class="bi bi-caret-left"></i>Voltar </button>
                        <button onclick="generateAcaiTopping()" class="nextButton">Finalizar <i class="bi bi-bag-plus"></i></i></button>
                    </div> 
            
            `
        }))
       
   
    
}



 generateAcaiType()

