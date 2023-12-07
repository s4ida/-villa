const div = document.getElementById('cards')
const btn = document.getElementById('btn')
let page=1
let limit=3

async function getphotos() {
    let skip = (page = 1)*limit;
    try{
   const response = await axios.get(`https://655c2fe4ab37729791aa011f.mockapi.io/swp102/products?page=${page}&limit=${limit}&skip=${skip}`)
   const data = response.data;
   db=response.data
   data.forEach(item=>{
const box = document.createElement('div')
box.className = 'boxDiv'
box.innerHTML = `
<img style="width:300px " src='${item.image}' alt="">
<p class='title'>${item.date}</p>
<p class='title'>${item.name}</p>
<button class="addtobasketbtn" onclick="addToBasket(${item.id})">Add to basket</button>
`
div.appendChild(box)
})
page++;
}
    catch(error){
        console.error('Error fetching products:',error)
    }
}
   
    btn.addEventListener('click',getphotos) 
function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart'))||[]
    cart.push(db.find(item=>item.id==id))
    localStorage.setItem('cart',JSON.stringify(cart))
}
window.onload = ()=>{
    getphotos()
}


    

