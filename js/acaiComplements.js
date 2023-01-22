var acaiComplemetsValues = []

var acaiChoiced=""

var mainContainerAcai = document.getElementById("containerAcaiComplements")


// função que gera a escolha do tipo de açaí 
let generateAcaiType=()=>{
    
    return (mainContainerAcai.innerHTML = acai.map((x,index)=>{
        let {id,name} = x;
        return`
                <h3>Escolha um tipo</h3><br>
                
                <div  id="typeAcai" class="inputsDivAcaiComplements">   
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
                    
                    <div  id="sizeAcai" class="inputsDivAcaiSize">   
                        ${size.map((y,index)=> {
                            return`
                            <div  class="sizeAcaiInputs" >
                                <input onclick="acaiTypeSelected()" id="${y}" name="tipoAcai" type="radio" value="${y}">
                                <label for="${y}">${y} ->  ${priceSize1[index].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</label>
                            </div>
                            `}).join("")}

                    </div>

                    <div class="buttonsNextPrev">
                        <button onclick="generateAcaiType()" class="prevButton"><i class="bi bi-caret-left"></i>Voltar </button>
                        <button class="nextButton">Próximo <i class="bi bi-caret-right"></i></button>
                    </div>          
                 `
        }else{
            return`
            <h3>Escolha o tamanho </h3><br>
                    
            <div  id="sizeAcai" class="inputsDivAcaiSize">   
                ${size.map((y,index)=> {
                    return`
                    <div  class="sizeAcaiInputs" >
                        <input onclick="acaiTypeSelected()" id="${y}" name="tipoAcai" type="radio" value="${y}">
                        <label for="${y}">${y} ->  ${priceSize2[index].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</label>
                    </div>
                    `}).join("")}

            </div>

            <div class="buttonsNextPrev">
                <button onclick="generateAcaiType()" class="prevButton"><i class="bi bi-caret-left"></i>Voltar </button>
                <button class="nextButton">Próximo <i class="bi bi-caret-right"></i></button>
            </div> 
            
            `
        }
       
   
    }))
    
}

function acaiTypeSelected() {
    //reference the div with the inputs
    let inputTypeAcai = document.getElementById('typeAcai')

    //reference all checkbox in the div
    let chk = inputTypeAcai.getElementsByTagName('INPUT') 

    // reference the div inside de cup 
    let acaiType = document.getElementById("acaiType")

    

    for(var i=0; i< chk.length; i++){
        if(chk[i].checked){
            acaiType.innerHTML=chk[i].value
           return acaiChoiced = chk[i].value
            
        }
    }
   
  }

generateAcaiType()
// generateAcaiSize()
