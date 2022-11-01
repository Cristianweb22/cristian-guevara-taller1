const products = [
    {
        'marca' : 'Chevrolet',
        'linea' : 'NPR',
        'modelo' : '2015',
        'carroceria' : 'Reparto',
        'km' : 100000,
        'foto' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-HMfgOf6-FMtIIN_t5IKYklBJbKdXUD-JTtfWxOugBg&s.jpg',
        'precio' : 120000000,
        'tipo' : 'Camion',
        'isNuevo' : false
    }
    ,
    {
        'marca' : 'Foton',
        'linea' : 'FVR Cummins 12.1',
        'modelo' : '2012',
        'carroceria' : 'Furgon',
        'km' : 160000,
        'foto' : 'https://dealers.rewebmkt.com/images/20220505010443-download-2.png',
        'precio' : 120000000,
        'tipo' : 'Camion',
        'isNuevo' : false
    }
    ,
    {
        'marca' : 'Navitrans',
        'linea' : 'International',
        'modelo' : '2018',
        'carroceria' : 'SRS',
        'km' : 300000,
        'foto' : 'https://www.navitrans.com.co/portals/0/img/Vehiculos/International/MV/chasis%20mv.png',
        'precio' : 240000000,
        'tipo' : 'Tractomula',
        'isNuevo' : false
    }
    ,
    {
        'marca' : 'Freightliner',
        'linea' : 'T800',
        'modelo' : '2023',
        'carroceria' : 'SRS',
        'km' : 0,
        'foto' : 'https://http2.mlstatic.com/D_NQ_NP_735062-MCO52145998844_102022-O.webp',
        'precio' : 600000000,
        'tipo' : 'Tractomula',
        'isNuevo' : true
    }
    ,
    {
        'marca' : 'Volkswagen',
        'linea' : 'Worker',
        'modelo' : '2013',
        'carroceria' : 'Reparto',
        'km' : 5000,
        'foto' : 'http://www.military-today.com/trucks/volkswagen_worker.jpg',
        'precio' : 38000000,
        'tipo' : 'Camion'
    },
    {
        'marca' : 'Chevrolet',
        'linea' : 'Dmax',
        'modelo' : '2018',
        'carroceria' : 'Estacas',
        'km' : 89000,
        'foto' : 'https://http2.mlstatic.com/D_NQ_NP_791252-MCO51446391510_092022-W.jpg',
        'precio' : 180500000,
        'tipo' : 'Camioneta',
        'isNuevo' : false
    },
    {
        'marca' : 'Auteco',
        'linea' : 'Karguero',
        'modelo' : '2023',
        'carroceria' : 'Motocarro',
        'km' : 0,
        'foto' : 'https://www.aktmotos.com/sites/default/files/motorcycles/images/_0002_mg_6708.jpg',
        'precio' : 2300000,
        'tipo' : 'Motocarro',
        'isNuevo' : true
    },
    {
        'marca' : 'Ferrelaminas Mosquera',
        'linea' : 'Semirremolque',
        'modelo' : '2009',
        'carroceria' : 'Tanque',
        'km' : 635214,
        'foto' : 'https://http2.mlstatic.com/D_NQ_NP_965373-MCO51759432251_092022-W.jpg',
        'precio' : 120000000,
        'tipo' : 'Semirremolque',
        'isNuevo' : false
    },
    {
        'marca' : 'Freightliner',
        'linea' : 'T800',
        'modelo' : '2023',
        'carroceria' : 'SRS',
        'km' : 0,
        'foto' : 'https://http2.mlstatic.com/D_NQ_NP_735062-MCO52145998844_102022-O.webp',
        'precio' : 400000000,
        'tipo' : 'Tractomula',
        'isNuevo' : false
    }
];



const displayData = (data) => {
    const list = document.getElementById("product-list");
    list.innerHTML = '';
    data.forEach((ele) => {

        const card = document.createElement("div");
        card.className = "card medium";
        card.innerHTML=
            `<div class="card-image">
                <img src="${ele.foto}">
                <span class="card-title">${ele.linea}</span>
            </div>
            <div class="card-content">
                <p>${ele.marca}</p>
                <p>${ele.modelo}</p>
                <p>${ele.km}km</p>
                <h6>${Intl.NumberFormat("es", { style: "currency", currency: "COP" }).format(ele.precio)}</h6>
            </div>
            <div class="card-action">
                <a href="#">Ver Vehiculo</a>
            </div>`;
        list.appendChild(card);

        /*const text = document.createElement("p");
		text.innerHTML = `${ele.marca}, ${ele.linea}, ${
			ele.modelo
		}, ${Intl.NumberFormat("es", { style: "currency", currency: "COP" }).format(
			ele.precio
		)}, ${ele.carroceria}`;

		list.appendChild(text);
        */
    });
};

// LLAMAR METODOS

displayData(products);
displayBodytype();
displayVehType();
console.log('total carros = ' + products.length)

// LISTENERS PARA FILTROS
const keywordElem = document.getElementById('keyword')
keywordElem.addEventListener('change', (event) => handleKeyword(keywordElem))



// ESTABLECER LOS METODOS DE DISPLAY
function displayBodytype(){
    const bodyArr = [];
    products.forEach((product) => {
        if(!bodyArr.includes(product.carroceria)){
            bodyArr.push(product.carroceria)
        }
    });
    console.log(bodyArr)
    
    const bodyList = document.getElementById('bodyList')
    bodyArr.forEach((cat) => {
        const bodyElem = document.createElement('label')
        bodyElem.for = `${cat}`
        bodyElem.innerHTML = `
        <input id="${cat}" type="checkbox">
        <span>${cat}</span>`
    
        bodyList.append(bodyElem)
    })
}

function displayVehType(){
    const vehTypeArr = [];
    products.forEach((product) => {
        if(!vehTypeArr.includes(product.tipo)){
            vehTypeArr.push(product.tipo)
        }
    });
    console.log(vehTypeArr)
    
    const vehTypeList = document.getElementById('vehType')
    vehTypeArr.forEach((cat) => {
        const typeElem = document.createElement('option')
        typeElem.value = `${cat}`
        typeElem.textContent = cat
    
        vehTypeList.append(typeElem)
    })
}

//// METODOS DE EVENTOS
function handleKeyword(event){
//video minuto 39:30
}

// aqui inicializo el dropdown
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems, {});
});
