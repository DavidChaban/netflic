// let text = ''
// let container1 = document.getElementById('container')
// // let card = ''


// // const api = "https://amazing-events.herokuapp.com/api/events"
// fetch("https://fakestoreapi.com/products")
// .then(Response => Response.json())
// // .then(json=>console.log(json))
// .then(category => phones(category))
// console.log(Response);
// let phones = (category) => {
//   array = category


// function displayCards (array) {
//   if (array.length > 0) {
//     let card = ''
    
//     array.forEach(
//       array =>
//         (card += `<div class="card01 card d-flex flex-direction-column ">
//         <img src="${array.image}" class="card-img-top w-3 img2 imgCard"  alt="${array.image}">
//         <div class="card-body d-flex flex-column justify-content-between  ">
//         <div class="d-flex justify-content-start bg-black d-flex align-items-center justify-content-center align-content-center dateCard">
//         <p class="card-text">New</p>
//         </div>
//         <h5 class="card-title">${array.title}</h5>
//         <p class="card-text m-3  ">Category: ${array.category}</p>
//         <div class="d-flex justify-content-around">
//         <p class="pt-1 m-1 ">Price: $${array.price} </p>
//         <a href="./details.html?id=${array._id}" class="btn btn-primary" ${array.price}>add to cart</a>
//         </div>
//         </div>
//         </div>
//         `)
//     )
//     container1.innerHTML = card
//   } else {
//     container1.innerHTML = `<p style="color:black">No Search Found </p>`
//   }
// }
// //---------------
// let checkboxContainer = document.getElementById('checkId')
// let checkboxs = []
// let datahola = category.forEach(a => {
//   if (!checkboxs.includes(a.category)) {
//     checkboxs.push(a.category)
//   }
// })
// //-----imprimir-----
// function printCategory () {
//   let checkboxs1 = ''
//   checkboxs.forEach(a => {
//     // printCategory(a)
//     checkboxs1 += `<div class="form-check form-switch m-3">
//   <input class="form-check-input" type="checkbox" role="switch" id="${a}">
//   <label class="form-check-label" for="${a}">${a}</label>
// </div>`
//     checkboxContainer.innerHTML = checkboxs1
//   })
// }
// printCategory()
// //-----*busqueda*------/
// let textVacie = ''
// function search () {
//   let search = document.getElementById('searchh')
//   search.addEventListener('keyup', e => {
//     textVacie = e.target.value
//     filter()
// })
// }
// search()
// ///-------Eventos click - checkbox-----------
// let checkboxClick = []
// let checkbox = document.querySelectorAll('input[type=checkbox]')
// function checkboxx () {
//   checkbox.forEach(checkedd =>
//     checkedd.addEventListener('click', event => {
//       let checked = event.target.id
//       if (checkedd.checked) {
//         checkboxClick.push(checked)
//         filter()
//       } else {
//         checkboxClick = checkboxClick.filter(uncheck => uncheck !== checked)
//           }
//       filter()
//     })
//   )
// }
// checkboxx()
// ///--------- Filter()-------------
// function filter () {
//   let filterArray = []
//   if (checkboxClick.length > 0 && textVacie !== '') {
//     checkboxClick.map(checked =>
//       filterArray.push(
//         ...array.filter(
//           event =>
//             event.title.toLowerCase().includes(textVacie.trim().toLowerCase()) &&
//             event.category == checked
//         )
//       )
//     )
//   } else if (checkboxClick.length > 0 && textVacie === '') {
//     checkboxClick.map(checked => {
//       filterArray.push(...array.filter(events => events.category == checked))
//     })
//  } else if (checkboxClick.length == 0 && textVacie !== '') {
//     filterArray.push(
//       ...array.filter(event =>
//         event.title.toLowerCase().includes(textVacie.trim().toLowerCase())
//       )
//     )
//   } else {
//     filterArray.push(...array)
//   }
//   displayCards(filterArray)
// }
// filter()
// }