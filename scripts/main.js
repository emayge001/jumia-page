//grab container element
const containerEle = document.getElementById('container');

//grab leftcon element
const leftConEle = document.getElementById('leftCon');

//grab leftcon element
const rightConEle = document.getElementById('rightCon');

//create your main image element and append to leftcon
let imgEle = document.createElement('img');
imgEle.setAttribute('src', './images/img_1.jpg');
imgEle.setAttribute('id', 'imgEle')
leftConEle.appendChild(imgEle);

//create your product images using array and append to leftcon
let productImg = document.getElementById('productImg');
productImg.setAttribute('class', 'productImg');

const products = [
    './images/img_1.jpg',
    './images/img_2.jpg',
    './images/img_3.jpg',
    './images/img_4.jpg'
]

function changeImg(event){
    const newUrl = event.target.src;
    imgEle.src = newUrl;
}


for (url of products){
    let img = document.createElement('img');
    img.setAttribute('src', url);
    img.setAttribute('class', 'images');
    img.addEventListener('mouseover', (event) => changeImg(event));
    
    productImg.appendChild(img);
}

leftConEle.appendChild(productImg);

//create your h1 and append to rightcon
let titleEle = document.createElement('h1');
titleEle.innerHTML = 'Hp Omen 16 Gaming 13th Gen Intel Core I7 16GB RAM/1TeraByte (TB) Solid State Drive (SSD) 16.1" Nvidia RTX 4050 6GB WINS 11';
titleEle.setAttribute('class', 'title')
rightConEle.appendChild(titleEle);

//create your p tag and append 
let brandEle = document.createElement('p');
brandEle.innerHTML = 'Brand: <span style="color: darkblue">HP | Similar products from HP </span>';
brandEle.setAttribute('class', 'brand')
rightConEle.appendChild(brandEle);

//create your hr element
let hrEle = document.querySelector('.hr');
rightConEle.appendChild(hrEle);


//create price element
let priceEle = document.createElement('p');
priceEle.innerHTML = '#2,050,000 <span class="price">#2,250,000</span> <button class="discountBtn">-9%</button>';
priceEle.setAttribute('class', 'priceEle')
rightConEle.appendChild(priceEle);



//create unit element
let unitEle = document.createElement('p');
unitEle.innerText = 'Few units left';
unitEle.setAttribute('class', 'unit');
rightConEle.appendChild(unitEle);



//create shipping element
let shippingEle = document.createElement('p');
shippingEle.innerHTML = '+ shipping from <span style="font-weight: bold">#810</span> to LEKKI-AJAH (SANGOTEDO)';
shippingEle.setAttribute('class', 'shipping');
rightConEle.appendChild(shippingEle);



//create five-star rating element
//create a div element, give it a class
let fiveStar = document.createElement('div');
fiveStar.setAttribute('class', 'fiveStar');

//create a var that grabs the div storing the icons in the HTML
let five = document.getElementById('five');

//append
fiveStar.appendChild(five);
rightConEle.appendChild(fiveStar);

let verifiedEle = document.createElement('p');
verifiedEle.innerHTML = '1 verified rating';
verifiedEle.setAttribute('class', 'verified');
five.appendChild(verifiedEle);




let incrementBtn = document.getElementById('increment');
let decrementBtn = document.getElementById('decrement');
let countEle = document.getElementById('result');

let counter = 1;
countEle.innerHTML = counter;
//handle increment
function increment() {
    counter++;

    countEle.innerHTML = counter;
}

// handle decrement
function decrement() {
    if (counter === 1) {
        return
    } else {
         counter--;
    }

    countEle.innerHTML = counter;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

let coun = document.querySelector('.counter');
rightConEle.appendChild(coun);

//create another hr element
let horiEle = document.querySelector('.hori');
rightConEle.appendChild(horiEle);

//create p element for promotion
let promoEle = document.createElement('p');
promoEle.innerHTML = 'Promotion';
promoEle.setAttribute('class', 'promo');
rightConEle.appendChild(promoEle);