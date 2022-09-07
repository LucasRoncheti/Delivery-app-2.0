
 
let animation = '0.6s';            
     
      

       
     

// função para mostrar/esconder container dos produtos
       
     //açaí cremoso
     function show(){
       let div=document.querySelector('#container01')
       let arrow = document.querySelector('.arrow')//seta do botão 
       
       
       
       if(div.style.height !== '1050px'){
              
              div.style.height = '1050px';
              div.style.transitionDuration = animation
              arrow.style.transform = 'rotate(180deg)'
              arrow.style.transitionDuration = '0.5s'
              setTimeout(top,200)
              function top(){
                    const container01 = document.getElementById('container01')
                    container01.scrollIntoView({behavior:'smooth'});
                    
              }

              
              
       }
       else{
              
              div.style.height = '50px';
              div.style.transitionDuration = animation
              arrow.style.transform = 'rotate(0deg)'
              arrow.style.transitionDuration = '0.5s'
              
       }
       
              
             
              
       } 

     



 
      
          






 


