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
document.getElementById('app').innerHTML = '</table>';**/
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
}

//------------------generar lista

const TODO = ['Queso', 'Tomates', 'Zanahorias', 'Toalla'];

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
