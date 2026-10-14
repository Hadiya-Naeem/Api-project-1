let loader = document.querySelector(".loader")
const hideLoader = () => {
loader.className = "hide"
}



const finalCarts = [];
async function getData() {
   let respone = await fetch('https://dummyjson.com/carts')
   let data = await respone.json()

   const carts = data.carts

   for(i = 0; i < carts.length; i++){
    finalCarts.push(...carts[i].products)
   }
}

getData()


setTimeout(() => {
    hideLoader()
    let main = document.querySelector("#main")
for(i = 0; i < finalCarts.length; i++){
    let cart = finalCarts[i]
    console.log(finalCarts[i])
main.innerHTML += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <img src=${cart.thumbnail} class="card-img" alt="...">
    <h5 class="mt-2 mb-0 text-center ">${cart.title}</h5>
    <p class="card-text fg-2 text-center">${cart.price}</p>
    
  </div>
</div>`
    
}
},2000)