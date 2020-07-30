//document.getElementById('app').innerHTML = 'Hello World!';
const MOUNTAINS = [
  { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
  { name: 'Everest', height: 8848, place: 'Nepal' },
  { name: 'Mount Fuji', height: 3776, place: 'Japan' },
  { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
  { name: 'Denali', height: 6168, place: 'United States' },
  { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
  { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
];
/*
document.getElementById('app').innerHTML += '<table> <tr>  <th>name</th>  <th>height</th>   <th>place</th>  </tr>';
for (let i = 0; i < MOUNTAINS.length; i++) {
    document.getElementById('app').innerHTML += '<tr>';
    document.getElementById('app').innerHTML += '<td>'+ MOUNTAINS[i].name +'</td>';
    document.getElementById('app').innerHTML += '<td>'+ MOUNTAINS[i].height +'</td>';
    document.getElementById('app').innerHTML += '<td>'+ MOUNTAINS[i].place +'</td>';
    document.getElementById('app').innerHTML = '</tr>';
}
document.getElementById('app').innerHTML = '</table>';
function mostrarOcultarTablas1() {
  let mostrado = 0;
  let elem = document.getElementById('app');
  if (elem.style.display == 'block') mostrado = 1;
  elem.style.display = 'none';
  if (mostrado != 1) elem.style.display = 'block';
}

function mostrarOcultarTablas2() {
  let mostrado = 0;
  let elem = document.getElementById('tabla');
  if (elem.style.display == 'block') mostrado = 1;
  elem.style.display = 'none';
  if (mostrado != 1) elem.style.display = 'block';
}

document.getElementById('pinchable1').onclick = function () {
  mostrarOcultarTablas1(myFunction());
};

document.getElementById('pinchable2').onclick = function () {
  mostrarOcultarTablas2(myFunction1());
};

function myFunction() {
  const cuerpoTabla = document.getElementById('app');

  MOUNTAINS.forEach((element) => {
    const tr = document.createElement('tr');
    let tdNombre = document.createElement('td');
    tdNombre.textContent = element.name;
    tr.appendChild(tdNombre);
    let tdAltura = document.createElement('td');
    tdAltura.textContent = element.height;
    tr.appendChild(tdAltura);
    let tdSitio = document.createElement('td');
    tdSitio.textContent = element.place;
    tr.appendChild(tdSitio);
    cuerpoTabla.appendChild(tr);
  });
}

function myFunction1() {
  const cuerpoTabla = document.getElementById('tabla');

  MOUNTAINS.forEach((element) => {
    const tr = document.createElement('tr');
    let tdNombre = document.createElement('td');
    tdNombre.textContent = element.name;
    tr.appendChild(tdNombre);
    let tdAltura = document.createElement('td');
    tdAltura.textContent = element.height;
    tr.appendChild(tdAltura);
    let tdSitio = document.createElement('td');
    tdSitio.textContent = element.place;
    tr.appendChild(tdSitio);
    cuerpoTabla.appendChild(tr);
  });
}*/


const cuerpoTabla = document.getElementById('app');
const boton = document.getElementById('btPinchable1');
const boton1 = document.getElementById('btPinchable2');

boton.addEventListener('click', armarTablaI(boton.id));
boton1.addEventListener('click', armarTablaI(boton1.id));

function armarTablaI(id) {
  return () => {
    if (cuerpoTabla.children.length !== 0) {
      cuerpoTabla.removeChild(cuerpoTabla.lastElementChild);
    }
    generarTabla(id);
  };

}

function generarTabla(id) {
  let table = document.createElement('table');
  let trCabecera = document.createElement('tr');
  let thNombre = document.createElement('th');
  let thAltura = document.createElement('th');
  let thSitio = document.createElement('th');
  if (id === 'btPinchable1') {
    thNombre.textContent = 'Name';
    thAltura.textContent = 'Height';
    thSitio.textContent = 'Place';
  } else {
    thNombre.textContent = 'Nombre';
    thAltura.textContent = 'Altura';
    thSitio.textContent = 'Sitio';
  }
  trCabecera.appendChild(thNombre);
  trCabecera.appendChild(thAltura);
  trCabecera.appendChild(thSitio);
  table.appendChild(trCabecera);
  cuerpoTabla.appendChild(table);
  MOUNTAINS.forEach((element) => {
    let tr = document.createElement('tr');
    let tdNombre = document.createElement('td');
    tdNombre.textContent = element.name;
    tr.appendChild(tdNombre);
    let tdAltura = document.createElement('td');
    tdAltura.textContent = element.height;
    tr.appendChild(tdAltura);
    let tdSitio = document.createElement('td');
    tdSitio.textContent = element.place;
    tr.appendChild(tdSitio);
    table.appendChild(tr);
    cuerpoTabla.appendChild(table);
  });
}



//------------------generar lista

const TODO = ['Queso', 'Tomates', 'Zanahorias', 'Toalla'];
/*
const cuerpoTabla = document.getElementById('myList');

TODO.forEach((element) => {
  const li = document.createElement('LI');
  li.id = 'idLi';

  const boton = document.createElement('button');
  boton.style = 'color:red';
  boton.textContent = 'Eliminar';
  boton.addEventListener('click', Eliminar, true);

  let textnode = document.createTextNode(element);
  li.appendChild(boton);
  li.appendChild(textnode);
  cuerpoTabla.appendChild(li);
});

document.getElementById('agregarLista').onclick = function () {
  agregLista();
};

function agregLista() {
  let li = document.createElement('LI');
  li.id = 'idLi';

  const boton = document.createElement('button');
  boton.style = 'color:red';
  boton.textContent = 'Eliminar';
  boton.addEventListener('click', Eliminar, true);

  let x = document.getElementById('myText').value;
  let t = document.createTextNode(x);
  li.appendChild(boton);
  li.appendChild(t);
  document.getElementById('myList').appendChild(li);
}

const Eliminar = function () {
  const list = document.getElementById('myList');

  //list.removeAttribute('idLi');
  list.removeChild(list.lastElementChild);
};
*/



const cuerpoTabla2 = document.getElementById('myList');

TODO.forEach((element) => {
  const li = document.createElement('LI');
  li.id = 'idLi';
  const boton = document.createElement('button');
  boton.style.cssText= "background-color:#ee3a14;list-style:none;";
  boton.class = 'boton_peresonalizado_tabla';
  boton.dataset.TODO = JSON.stringify(TODO);
  boton.textContent = 'Eliminar';
  boton.addEventListener('click', ()=>{
    Eliminar (li)
  });
  let textnode = document.createTextNode(element);
  li.appendChild(textnode);
  li.appendChild(boton);
  cuerpoTabla2.appendChild(li);
});

document.getElementById('agregarLista').onclick = function () {
  let text = document.getElementById('myText').value;
  agregLista(text);
};



function agregLista(text) {
  if (text===""){
    window.alert("No se puede agregar elementos vacios.");
  }else{
    if (!TODO.find(element=>
      element===text)){
        let li = document.createElement('LI');
  li.id = 'idLi';
  const boton = document.createElement('button');
  boton.class = 'boton_peresonalizado_tabla';
  boton.style.cssText= "background-color:#ee3a14;list-style:none;";
  boton.textContent = 'Eliminar';
  boton.addEventListener('click', ()=>{
    Eliminar (li)
  });
  let text = document.getElementById('myText').value;
  let t = document.createTextNode(text);
  /*TODO.push(t);
  console.log(TODO);
  let txt;
  TODO.forEach(element=>{
    txt= document.createTextNode(element===t);
    console.log(txt);
    li.appendChild(txt.data);
  })*/
 
  li.appendChild(t);
 
  li.appendChild(boton);
  document.getElementById('myList').appendChild(li);
      }else{
        window.alert("El elemento ya existe en la lista.")
      }
  }
  
}

function Eliminar(elementoLista) {
  const list = document.getElementById('myList');
  const antiguoHijo = list.removeChild(elementoLista);
  let idx = TODO.indexOf(elementoLista);
  TODO.splice.idx;
}