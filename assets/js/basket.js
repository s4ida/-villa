const div = document.getElementById('basketdiv');

function getproducts() {
    div.innerHTML = ``;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.map((item, index) => {
        const box = document.createElement('div');
        box.innerHTML = `
        <img style="width:300px " src='${item.image}' alt="">
        <p class='title'>${item.name}</p>
        <button class="removebtn" onclick="removeItem(${index})">Remove from cart</button>
        `;
        div.appendChild(box);
    });
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    getproducts();
}

    getproducts();
