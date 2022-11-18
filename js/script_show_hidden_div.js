// tempo de duração da animação 
 
let animation = '0.9s';            
     
// função para mostrar/esconder container dos produtos
       

function show(containerId,arrowId,topId){

       let div = (containerId)
       let arrow = (arrowId)
       let divHeight = (containerId).clientHeight;
   
        if(div.style.height !=='auto'){
               
               div.style.height = '600px';
               div.style.transitionDuration = animation
               arrow.style.transform = 'rotate(180deg)'
               arrow.style.transitionDuration = '0.5s'
               
               setTimeout(top,200)
               function top(){
                      div.style.height = 'auto'; 
                     const container01 = topId
                     container01.scrollIntoView({behavior:'smooth'});
                     
               }
 
               
               
        }
        else{
               
               div.style.height = '1000px';
               div.style.transitionDuration = animation
               arrow.style.transform = 'rotate(0deg)'
               arrow.style.transitionDuration = '0.5s'

               setTimeout(top,200)
               function top(){
                      div.style.height = '0px'; 
              
               }
               
        }
        
        } 
       
   // topId se refere ao topo da div  

  // função para açaí Cremoso     
      function showDiv(){
      let div = document.getElementById('main-container2')
      let arrow = document.getElementById('arrow3')
      let top  =document.getElementById('acai')
     
      show(div,arrow,top)

      }
  // função para açaí Tradicional

      function showDiv1(){
      let div = document.getElementById('main-container1')
      let arrow = document.getElementById('arrow2')
      let top  =document.getElementById('acai1')
     
      show(div,arrow,top)

      }
  // função para HOt Dog 

      function showDiv2(){
      let div = document.getElementById('HotDogeLanches')
      let arrow = document.getElementById('arrow1')
      let top  =document.getElementById('hotdog')
     
      show(div,arrow,top)

      }

  // função para Salgados

      function showDiv3(){
      let div = document.getElementById('shop_3_Container')
      let arrow = document.getElementById('arrow4')
      let top  =document.getElementById('arrow4')
     
      show(div,arrow,top)

      }

  // função para Bebidas

      function showDiv5(){
      let div = document.getElementById('shop_4_Container')
      let arrow = document.getElementById('arrow5')
      let top  =document.getElementById('container05')
     
      show(div,arrow,top)

      }
  // função para Polpas

      function showDiv6(){
      let div = document.getElementById('shop_5_Container')
      let arrow = document.getElementById('arrow6')
      let top  =document.getElementById('arrow6')
     
      show(div,arrow,top)

      }

       
     



     



 
      
          






 


