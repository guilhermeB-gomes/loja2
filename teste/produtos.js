const product = [
    {
        id:0,
        Image: 'assets/img/produto01.jpeg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id:1,
        Image: 'assets/img/produto02.jpeg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id:2,
        Image: 'assets/img/produto03.jpeg',
        title: '250D Dslr Camera',
        price: 230,
    },
    {
        id:3,
        Image: 'assets/img/produto04.jpeg',
        title: 'Head Phones',
        price: 100,
    },
];
const categories =[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var{Image, title, price} = item;
    return(
        `<div class='box'
          <div class='img-box'>
                <img class='images' src=${Image}></img>
                </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='produtos("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
    )
}).join('')

var cart =[];

function produtos(a){
    cart.push({...categories[a]});
    displaycart();
}

function displaycart(a){
    let j = 0;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((item)=>
        {
            var {Image, title, price} = item;
            return(
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${Image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2> style='font-size: 15px;'>$ ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclinc='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}