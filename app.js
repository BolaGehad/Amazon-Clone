const leftBtn= document.querySelector(".l-btn");
const rightBtn = document.querySelector(".r-btn");


rightBtn.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
leftBtn.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide");
        conent.scrollLeft -=1100;
        event.preventDefault();

})
const leftBtn1= document.querySelector(".btn-1b");
const rightBtn1 = document.querySelector(".btn-1a");


rightBtn1.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-1");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
leftBtn1.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-1");
        conent.scrollLeft -=1100;
        event.preventDefault();

})
const leftBtn2= document.querySelector(".btn-1c");
const rightBtn2 = document.querySelector(".btn-1d");


rightBtn2.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-2");
        conent.scrollLeft +=1100;
        event.preventDefault();

})
leftBtn2.addEventListener("click",
    function(event){
        const conent=document.querySelector(".product-slide-2");
        conent.scrollLeft -=1100;
        event.preventDefault();

})

const backtop = document.querySelector(".backtop");

backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

const sidebar=document.querySelector(".sidebar");
const cross=document.querySelector(".fa-xmark");
const black=document.querySelector(".black");
const sidebtn=document.querySelector(".second-1");

sidebtn.addEventListener("click",()=>{
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
})
cross.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
    document.body.classList.remove("stop-scroll");
})

const sign=document.querySelector(".ac");
const tri=document.querySelector(".triangle");
const signin=document.querySelector(".hdn-sign");

sign.addEventListener("click",()=>{
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
})
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;
    let itemCount = 0;

    // Attach event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            // Find the closest product element to the clicked button
            const product = event.target.closest('.product');
            if (product) {
                // Retrieve the price from the product's data attribute
                const price = parseFloat(product.getAttribute('data-price'));

                if (!isNaN(price)) {
                    // Update the cart total and item count
                    total += price;
                    itemCount++;

                    // Update the cart display
                    cartItems.innerHTML = `${itemCount} item${itemCount > 1 ? 's' : ''} in cart`;
                    cartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
                } else {
                    console.error('Price is not a valid number:', price);
                }
            } else {
                console.error('Product not found.');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const payBtn = document.getElementById('pay-btn');
    const resetBtn = document.getElementById('reset-btn');

    let cart = [];
    let total = 0;

    // إضافة منتج للكارت
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const name = product.querySelector('p').textContent;
            const price = parseFloat(product.getAttribute('data-price'));

            cart.push({ name, price });
            total += price;
            updateCartUI();
        });
    });

    // حذف منتج من الكارت
    cartList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-item')) {
            const index = event.target.dataset.index;
            total -= cart[index].price;
            cart.splice(index, 1);
            updateCartUI();
        }
    });

    // الدفع
    payBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Cart is empty!');
            return;
        }
        alert(`Payment successful. Total: $${total.toFixed(2)}`);
        cart = [];
        total = 0;
        updateCartUI();
    });

    // إعادة الضبط
    resetBtn.addEventListener('click', () => {
        cart = [];
        total = 0;
        updateCartUI();
    });

    // تحديث واجهة الكارت
    function updateCartUI() {
        cartList.innerHTML = '';
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)}
                <button class="delete-item" data-index="${index}">Delete</button>`;
            cartList.appendChild(li);
        });
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }
});
