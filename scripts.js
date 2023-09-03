//different products that are available are now presented here as OBJECTS.
const products = [
    {
        id: 1,
        title: "Air Force",
        heading: "Air Force Jordan: The Ultimate Fusion of Style and Performance.",
        desc: "Whether you are on the court or on the street, you will love the comfort, durability and iconic design of these sneakers. Inspired by two legendary models, the Air Force 1 and the Air Jordan, these shoes are a must-have for any sneakerhead. Do not miss your chance to own a pair of Air Force Jordan today!",
        price: 13999,
        colors: [
            {
                code: "black",
                img: "./assets/air.png",
            },
            {
                code: "darkblue",
                img: "./assets/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        heading: "Air Jordan: The Shoes That Changed the Game.",
        desc: "Since 1985, Air Jordan has been the ultimate symbol of basketball excellence and culture. From the court to the street, these shoes have defined generations of style and performance. With a variety of models, colors and sizes, there's an Air Jordan for everyone. Don't settle for less, get your Air Jordan today!",
        price: 14999,
        colors: [
            {
                code: "lightgray",
                img: "./assets/jordan.png",
            },
            {
                code: "green",
                img: "./assets/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        heading: "Air Blazer: The Shoes That Blaze a Trail of Style.",
        desc: "If you are looking for a pair of shoes that can keep up with your active lifestyle, look no further than Air Blazer. These shoes are designed to be lightweight, breathable and durable, with a sleek and modern look. Whether you are running, walking or skating, Air Blazer will make you stand out from the crowd. Get your Air Blazer today and blaze your own trail!",
        price: 12999,
        colors: [
            {
                code: "lightgray",
                img: "./assets/blazer.png",
            },
            {
                code: "green",
                img: "./assets/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        heading: "Air Crater: The Shoes That Make an Impact.",
        desc: "Air Crater is more than just a pair of shoes. It is a statement of your commitment to sustainability and innovation. These shoes are made from recycled materials, with a cushioned and responsive sole that reduces waste and carbon footprint. Air Crater is the perfect choice for anyone who wants to make a positive impact on the planet and their style. Get your Air Crater today and make your mark!",
        price: 11999,
        colors: [
            {
                code: "black",
                img: "./assets/crater.png",
            },
            {
                code: "lightgray",
                img: "./assets/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        heading: "Air Hippie: The Shoes That Celebrate Peace and Love.",
        desc: "Air Hippie is the ultimate expression of your free spirit and creativity. These shoes are inspired by the hippie movement of the 1960s, with colorful and psychedelic patterns and designs. Air Hippie is also eco-friendly, made from organic and natural materials that are gentle on the earth. Air Hippie is the perfect choice for anyone who wants to spread peace and love with their shoes. Get your Air Hippie today and join the revolution!",
        price: 9999,
        colors: [
            {
                code: "gray",
                img: "./assets/hippie.png",
            },
            {
                code: "black",
                img: "./assets/hippie2.png",
            },
        ],
    },
];

// to make the sliders functional, as we navigate. 
const wrapper = document.querySelector(".sliderWrapper")
// wrapper.style.backgroundColor="blue"

// positive translateX means to start early or add padding to the left while viewing a single page. 
// negative means to shift the start more to the right. 

// wrapper.style.transform = "translateX(1000px)"
// wrapper.style.transform = "translateX(-1000px)"

// so if we use the viewport, then we can have slideItems as per our needs.
// -100 shows 1st slide, -200 for 2nd, -300 for 3rd etc. 

// wrapper.style.transform = "translateX(-100vw)";

// we need to make the slide change when an option is clicked on the nav bar.
// hence, we need click events, so we use eventlistener and click.
// we add eventlistener to what.. to the menu items and then traverse using loop.
// we select all items, hence queryselectorall.

const menuItems = document.querySelectorAll(".menuItem");

// here what happens is all you click an option on the navbar menu, on the console, you get an output as "you clicked the index 0, etc"
// menuitems.forEach((item, index)=>{
//     item.addEventListener("click", () => {
//         console.log("you clicked the index" + index)
//     });
// });

//we need to change the product and its details according to the chosen index.
let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDescriptionHeading = document.querySelector("#productDescHeading");
const currentProductDescriptionBody = document.querySelector("#productDescBody");


//below statements have querySelectorAll because of multiple divs inside color and size.
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        // -100*0 = 1st slide, -100*1 = 2nd slide, -100*2 = 3rd slide, etc;
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the current product
        chosenProduct = products[index];

        //change the details of the current product.
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "₹" + chosenProduct.price;
        currentProductDescriptionHeading.textContent = chosenProduct.heading;
        currentProductDescriptionBody.textContent = chosenProduct.desc;

        currentProductImg.src = chosenProduct.colors[0].img;

        //assign new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

//change the image of each product when the product color is changed by clicking.
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

//color of size changes from white black to black white only on click.
currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        //to disable the previous click, we added another loop for white black.
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

