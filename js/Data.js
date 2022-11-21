let shopItemsData = [
{   img:"images/ice_cream.svg",
    id:"ac01",
    name: "Açaí Cremoso",
    size: ["300ml","500ml","700ml","1L", "Barca"],
    priceSize: [10,12,15,20,25],
    fruits:["Banana","Manga","Kiwi","Morango"],
    complements:["Leite em pó","farofa de paçoca","M&M","Granola","Chocoball","Ovomaltine"],
    topping:["Chocolate","Morango ","Leite Condensado"],
    Addition:["Nutela","Doce de leite","Tortuguita", "Paçoca",],
    priceAddition:[3,3,2,1],
    

},




]

let shopItemsData1 = [
 
    //datas from açaí tradicional
    {   img:"images/ice_cream.svg",
        id:"at01",
        name: "Açaí Tradicional",
        size: ["300ml","500ml","700ml","1L", "Barca"],
        priceSize: [12,14,17,22,27],
        fruits:["Banana","Manga","Kiwi","Morango"],
        complements:["Leite em pó","farofa de paçoca","M&M","Granola","Chocoball","Ovomaltine"],
        topping:["Chocolate","Morango ","Leite Condensado"],
        Addition:["Nutela","Doce de leite","Tortuguita", "Paçoca",],
        priceAddition:[3,3,2,1],
    
    },
    
    ]


//data from hot dog and hambuguers

let hotDogHeader = [
    {
        mainId:"HotDogELanches",
        img:"images/burguer.svg",
        mainName:"Hot Dog e Lanches",
        id:"hotdogehamburg",
        name:"hotdogehamburg",
        desc:"2 Salssichas, 2 ovos, queijo e presunto, fatias de bacon, milho e ervilha, Uva passas Keka, batata palha keka premium.",
        price:10
    },
]

let hotDogItems = [

   
    {   
        id:"HotDogTradicional",
        name:"Tradicional",
        desc:"2 Salssichas, 2 ovos, queijo e presunto, fatias de bacon, milho e ervilha, Uva passas Keka, batata palha keka premium.",
        price:10
    },
    { 
        id:"HotDogGourmet",
        name:"Gourmet",
        desc:"1 Salssicha, bacon, ovo de codorna, queijo e presunto, banana, calabresa, milho e ervilha, azeitona, alface e Uva passas Keka, maionese de bacon.",
        price:14
    },
    { 
        id:"HotDogModaDaCasa",
        name:"Moda da Casa",
        desc:"Pão especial, molho barbecue, 2 salsichas, 2 ovos, queijo ralado, banana Frita, milho, ervilha, uva passas e batata palha",
        price:12
    },
    { 
        id:"MistoQuente",
        name:"Misto Quente",
        desc:"Pão de forma, queijo mussarela e presunto.",
        price:6
    },
    { 
        id:"Hamburguer",
        name:"Hamburguer",
        desc:"Pão, bife de picanha, milho e ervilha, alface,tomate e salada de maionese.",
        price:10
    },
    { 
        id:"XBacon",
        name:"X-Bacon",
        desc:"Pão, bife de picanha,queijo,bacon, batata palha, milho e ervilha, alface,tomate e salada de maionese.",
        price:13
    },
    { 
        id:"XEggBacon",
        name:"X-Egg Bacon",
        desc:"Pão, bife de picanha,ovo,queijo,bacon, batata palha, milho e ervilha, alface,tomate e salada de maionese.",
        price:14
    },
    { 
        id:"XTudo",
        name:"X-Tudo",
        desc:"Pão, bife de picanha,ovo,queijo,bacon, presunto, banana, batata palha, milho e ervilha, alface,tomate e salada de maionese.",
        price:15
    },
    { 
        id:"XTudoDuplo",
        name:"X-Tudo Duplo",
        desc:"Pão, 2 bife de picanha,2 ovos ,queijo bacon e presunto em dobro, banana, batata palha, milho e ervilha, alface,tomate e salada de maionese.",
        price:21
    },
    { 
        id:"XModaDaCasa",
        name:"X-Moda da casa",
        desc:"Pão Brioche, molho barbecue, 2 bifes de picanha, calabresa, bacon, ovo, presunto, cheddar, banana frita, milho, ervilha, alface, tomate e batata palha.",
        price:21
    },
]

//data from salgados

let salgadosHeader = [
    {
        mainId:"salgados",
        img:"images/pastel.svg",
        mainName:"Salgados",
    },

]
let salgadosItems = [
 
    {   
        id:"esfirraDefrango",
        name:"Esfirra de frango com requeijão",
        price:5
    },
    {   
        id:"esfirraDeQueijoepresunto",
        name:"Esfirra de Queijo e Presunto",
        price:5
    },
    {   
        id:"Bauru",
        name:"Bauru",
        price:5
    },
]

//data frm bebbidas
let bebidasHeader = [
    {
        mainId:"Bebidas",
        img:"images/drink.svg",
        mainName:"Bebidas",
    },

]

let bebidasItems = [
 
    {   
        id:"bd01",
        name:"Coca-cola 1,5L",
        price:9
    },
    {   
        id:"bd02",
        name:"Coca Zero",
        price:9
    },
    {   
        id:"bd03",
        name:"Coca 600ml",
        price:7
    },
    {   
        id:"bd04",
        name:"Coca Zero 600ml",
        price:7
    },
    {   
        id:"bd05",
        name:"Coca Lata",
        price:5
    },
    {   
        id:"bd06",
        name:"Coca Lata Zero",
        price:5
    },
    {   
        id:"bd07",
        name:"Guaraná Antarctica 1,5L",
        price:8
    },
    {   
        id:"bd08",
        name:"Guaraná Antarctica 600ml",
        price:6
    },
    {   
        id:"bd09",
        name:"Guaraná Antarctica Lata",
        price:4
    },
    {   
        id:"bd10",
        name:"Fanta Uva Lata",
        price:5
    },
    {   
        id:"bd11",
        name:"Fanta Laranja Lata ",
        price:5
    },
    {   
        id:"bd13",
        name:"Heineken ",
        price:7
    },
    {   
        id:"bd14",
        name:"Corona ",
        price:7
    },
    {   
        id:"bd15",
        name:"Budweiser ",
        price:6
    },
    {   
        id:"bd16",
        name:"Skol Latão ",
        price:5.50
    },
    {   
        id:"bd17",
        name:"Brahma Latão ",
        price:5.50
    },
   
]

//data from polpas
let polpasHeader = [
    {
        mainId:"PolpasdeFrutas",
        img:"images/fruits.svg",
        mainName:"Polpas de Frutas",
    },

]

let polpasItems = [
 
    {   
        id:"polpa01",
        name:"5 unid",
        price:10,
        itens:""
    },
    {   
        id:"polpa02",
        name:"8 unid",
        price:16,
        itens:" Abacaxi - Abacaxi com hortelã - Acerola  Caju - Goiaba - Manga - Maracujá - Morango - Limão - Graviola",
    },
   
   
]
