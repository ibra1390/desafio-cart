const products = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
];
// --- FUNCIONES PARA CONTROLAR EL BOTÓN DE CANTIDAD ---
function renderBotonCantidad(button, cantidad) {
  // Esta función reemplaza el contenido del botón según la cantidad
  if (cantidad > 0) {
    button.innerHTML = `
      <div class="flex items-center gap-4 bg-orange-950 text-white px-4 py-2 rounded-full">
        <button class="decrease text-xl font-bold">−</button>
        <span>${cantidad}</span>
        <button class="increase text-xl font-bold">+</button>
      </div>
    `;
  } else {
    button.innerHTML = `
      <button class="flex items-center gap-2 px-4 py-2 border border-orange-950 text-orange-950 font-medium rounded-full bg-white shadow hover:bg-orange-950 hover:text-white transition">
        <img src="./assets/images/icon-add-to-cart.svg" class="w-5 h-5" />
        Add to Cart
      </button>
    `;
  }
}

    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

let contenedor = document.querySelector(".productos-container");

products.forEach(({ name, image, category, price }, index) => {
  contenedor.innerHTML += `
<div class="max-w-xs rounded-xl overflow-hidden">
              <div class="relative">
                <img
                  src="${image.mobile} "
                  class="w-full h-48 object-cover"
                />
                <div class="absolute inset-x-0 -bottom-6 flex justify-center">
      <button
        class="add-cart flex items-center gap-2 px-4 py-2 border border-orange-950 text-orange-950 font-medium rounded-full bg-white shadow hover:bg-orange-950 hover:text-white transition"
        data-index="${index}" 
      >
                    <img
                      src="./assets/images/icon-add-to-cart.svg"
                      class="w-5 h-5"
                    />
                    Add to Cart
                  </button>
                </div>
              </div>

              <div class="pt-10 pb-4 px-4">
                <p class="text-gray-400 text-sm">${category} </p>
                <h2 class="font-semibold text-lg text-gray-800">
                  ${name}
                </h2>
                <p class="text-orange-700 font-semibold mt-1">$${price}</p>
              </div>
            </div>
`;
});


const carrito = document.querySelector(".carrito");
let cartItems = [];
document.querySelectorAll(".add-cart").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const i = e.currentTarget.dataset.index;
    const product = products[i];
    addCarrito(product);
  });
});

function addCarrito(product) {
  const existe = cartItems.find((i) => i.name === product.name);
  if (existe) {
    existe.quantity++;
    existe.total = existe.quantity * existe.price;
  } else {
    cartItems.push({ ...product, quantity: 1, total: product.price });
  }
  actualizar();
}

function removeItem(name) {
  cartItems = cartItems.filter((item) => item.name !== name);
  actualizar();
}

function actualizar() {
  if (cartItems.length === 0) {
    carrito.innerHTML = `
      <img src="assets/images/illustration-empty-cart.svg" />
      <p class="text-orange-950">Your added items will appear here</p>
    `;
    document.querySelector("h3").textContent = `Your Cart(0)`;
    return;
  }

  let html = "";
  let total = 0;
  let cantidad = 0;

  cartItems.forEach((i) => {
    total += i.total;
    cantidad += i.quantity;
    html += `
      <div class="flex justify-between items-center mb-2">
        <div>
          <h4 class="text-orange-950 font-semibold">${i.name}</h4>
          <p class="text-gray-500 text-sm">
            ${i.quantity}x <span class="text-orange-700">@ $${i.price.toFixed(
      2
    )}</span> 
            <span class="font-semibold text-orange-950">$${i.total.toFixed(
              2
            )}</span>
          </p>
        </div>
        <button class="text-gray-400 hover:text-red-600 text-xl" onclick="removeItem('${
          i.name
        }')">  <img src="./assets/images/icon-remove-item.svg"
                      class="w-5 h-5"
                    />   </button>
      </div>
    `;
  });

  carrito.innerHTML = `
    ${html}
    <hr class="my-3">
    <div class="flex justify-between text-orange-950 font-bold">
      <p>Order Total </p>
      <p>&nbsp;$${total.toFixed(2)}</p>
    </div>
    <div class="text-sm text-gray-600 mt-2 bg-rose-50 p-2 rounded-md">
    <span class="flex flex-row" ><img src="./assets/images/icon-carbon-neutral.svg"
                      class="w-5 h-5"
                    /> This is a&nbsp;<strong> carbon-neutral</strong> &nbsp;delivery</span>
    </div>
    <button class="bg-orange-700 text-white font-semibold w-full mt-4 py-2 rounded-lg hover:bg-orange-800 transition">Confirm Order</button>
  `;

  document.querySelector("h3").textContent = `Your Cart(${cantidad})`;
}
