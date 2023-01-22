var acaiComplemetsValues = []



var mainContainerAcai = document.getElementById("containerAcaiComplements")


// função que gera a escolha do tipo de açaí 
let generateAcaiSize=()=>{
    
    return (mainContainerAcai.innerHTML = acai.map((x,index)=>{
        let {id,name} = x;
       
        return`
                <h3>Escolha um tipo</h3><br>
                <select onclick="acaiTypeSelected()"  class="selectSizeAcai" name="selectSizeAcai" id="selectSizeAcai">
                    
                ${name.map((y)=> {
                    return`
                        <option  value="${y}">${y}</option>
                    `})}
                    
                </select>
               

                
        `
    }))
    
}

function acaiTypeSelected() {
    let selects = document.getElementById('selectSizeAcai'), select, i;
    let acaiType = document.getElementById("acaiType")

    for(i = 0; i < selects.length; i++) {
      select = selects[i];
      if (select.selected) {
         acaiType.innerHTML = select.value
         
      }
    }
  }

generateAcaiSize()
