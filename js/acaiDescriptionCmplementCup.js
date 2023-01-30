

// funções que pegam o vvalor selecionado no input e imprimem o valor na div do copo  açaí 

function acaiTypeSelected() {
    //reference the div with the inputs
    let div = document.getElementById("divInputs")

    //reference all checkbox in the div
    let chk = div.getElementsByTagName('INPUT') 
 
    // reference the div inside de cup 
    let paragraph = document.getElementById("p01")

    

    for(var i=0; i< chk.length; i++){
        if(chk[i].checked){
            paragraph.innerHTML=chk[i].value
            acaiChoiced = chk[i].value
            
            
        }
    }
   
  }

function acaiSizeSelected() {
    //reference the div with the inputs
    let div = document.getElementById("divInputs")

    //reference all checkbox in the div
    let chk = div.getElementsByTagName('INPUT') 
 
    // reference the div inside de cup 
    let paragraph = document.getElementById("p02")

    

    for(var i=0; i< chk.length; i++){
        if(chk[i].checked){
            paragraph.innerHTML=chk[i].value
           
            
        }
    }
   
  }
function acaiFruitsSelected() {
    //reference the div with the inputs
    let div = document.getElementById("divInputs")

    //reference all checkbox in the div
    let chk = div.getElementsByTagName('INPUT') 
 
    // reference the div inside de cup 
    let paragraph = document.getElementById("p03")

    var fruitsName = []

    for(var i=0; i< chk.length; i++){
        
        if(chk[i].checked){
           
            let FruitName = chk[i].value+"<br>"
           fruitsName.push(FruitName)
           paragraph.innerHTML = fruitsName.join("")
           
          
           
            
        }
    }

   
  }
function acaiComplementsSelected() {
    //reference the div with the inputs
    let div = document.getElementById("divInputs")

    //reference all checkbox in the div
    let chk = div.getElementsByTagName('INPUT') 
 
    // reference the div inside de cup 
    let paragraph = document.getElementById("p04")

    
    let complementsName = []

    for(var i=0; i< chk.length; i++){
        
        if(chk[i].checked){
           
            let FruitName = chk[i].value+"<br>"
           complementsName.push(FruitName)
           paragraph.innerHTML = complementsName.join("")
           
            
        }
    }
   
  }
function acaiToppingSelected() {
    //reference the div with the inputs
    let div = document.getElementById("divInputs")

    //reference all checkbox in the div
    let chk = div.getElementsByTagName('INPUT') 
 
    // reference the div inside de cup 
    let paragraph = document.getElementById("p05")

    

    for(var i=0; i< chk.length; i++){
        
        if(chk[i].checked){
           
            paragraph.innerHTML=chk[i].value+"<br>"
           
            
        }
    }
   
  }
function acaiAddictionSelected() {
    //reference the div with the inputs
    let div = document.getElementById("divInputs")

    //reference all checkbox in the div
    let chk = div.getElementsByTagName('INPUT') 
 
    // reference the div inside de cup 
    let paragraph = document.getElementById("p06")

    
    let addictionName = []

    for(var i=0; i< chk.length; i++){
        
        if(chk[i].checked){
           
            let FruitName = chk[i].value+"<br>"
           addictionName.push(FruitName)
           paragraph.innerHTML = addictionName.join("")
           
            
        }
    }
   
  }

  

  