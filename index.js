let text = ''
let container1 = document.getElementById('container')
const contenedorCarrito = document.getElementById('carrito-contenedor')
// let card = ''


// const api = "https://amazing-events.herokuapp.com/api/events"
fetch("https://fakestoreapi.com/products")
.then(Response => Response.json())
// .then(json=>console.log(json))
.then(category => phones(category))
console.log(Response);
let phones = (category) => {
  array = category


function displayCards (array) {
  if (array.length > 0) {
    let card = ''
    

    
    array.forEach(
      array =>
        (card += `
        <div class="card">
        <img src="${array.image}" class="card-img-top w-3 img2 imgCard"  alt="${array.image}">
    <div class="card-info">
      <p class="text-title"> ${array.title} </p>
    </div>
    <div class="card-footer">
    <span class="text-title">$${array.price}</span>
    <div class="card-button">
      <svg class="svg-icon" viewBox="0 0 20 20">
        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
      </svg>
    </div>
  </div></div>
        
       

        `)
    )
    container1.innerHTML = card

    const boton = document.getElementById('agregar${array.title}')
    boton.addEventListener('click', () => {
        agregarAlCarrito(array.title)
    })


  } else {
    container1.innerHTML = `<p style="color:black">No Search Found </p>`
  }
}








const agregarAlCarrito = (prodId) => {
    const item = array.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}

const actualizarCarrito = () => {

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <p>${prod.name}</p>
        <p>Precio${prod.price}</p>
        <p>Cantidad: <span id="cantidad">${prod.price}</span> </p>
        <button onclick = "eliminarDelCarrito(${prod.id}" class="boton-eliminar"><i class="fas fa.trash-alt" </button>)
        `
        contenedorCarrito.appendChild(div)
    })


}







//---------------
let checkboxContainer = document.getElementById('checkId')
let checkboxs = []
let datahola = category.forEach(a => {
  if (!checkboxs.includes(a.category)) {
    checkboxs.push(a.category)
  }
})
//-----imprimir-----
function printCategory () {
  let checkboxs1 = ''
  checkboxs.forEach(a => {
    // printCategory(a)
    checkboxs1 += `<div class="form-check form-switch m-3">
  <input class="form-check-input" type="checkbox" role="switch" id="${a}">
  <label class="form-check-label" for="${a}">${a}</label>
</div>`
    checkboxContainer.innerHTML = checkboxs1
  })
}
printCategory()
//-----*busqueda*------/
let textVacie = ''
function search () {
  let search = document.getElementById('searchh')
  search.addEventListener('keyup', e => {
    textVacie = e.target.value
    filter()
})
}
search()
///-------Eventos click - checkbox-----------
let checkboxClick = []
let checkbox = document.querySelectorAll('input[type=checkbox]')
function checkboxx () {
  checkbox.forEach(checkedd =>
    checkedd.addEventListener('click', event => {
      let checked = event.target.id
      if (checkedd.checked) {
        checkboxClick.push(checked)
        filter()
      } else {
        checkboxClick = checkboxClick.filter(uncheck => uncheck !== checked)
          }
      filter()
    })
  )
}
checkboxx()
///--------- Filter()-------------
function filter () {
  let filterArray = []
  if (checkboxClick.length > 0 && textVacie !== '') {
    checkboxClick.map(checked =>
      filterArray.push(
        ...array.filter(
          event =>
            event.title.toLowerCase().includes(textVacie.trim().toLowerCase()) &&
            event.category == checked
        )
      )
    )
  } else if (checkboxClick.length > 0 && textVacie === '') {
    checkboxClick.map(checked => {
      filterArray.push(...array.filter(events => events.category == checked))
    })
 } else if (checkboxClick.length == 0 && textVacie !== '') {
    filterArray.push(
      ...array.filter(event =>
        event.title.toLowerCase().includes(textVacie.trim().toLowerCase())
      )
    )
  } else {
    filterArray.push(...array)
  }
  displayCards(filterArray)
}
filter()
}