const PRODUCT_API = "http://localhost:8081/api/products";
const CATEGORY_API = "http://localhost:8081/api/categories";

let products = [];
let categories = [];

/* LOAD PRODUCTS */

async function loadProducts() {
  const container = document.getElementById("product-list");

  if (!container) return;

  container.innerHTML = "Loading...";

  const res = await fetch(PRODUCT_API);

  products = await res.json();

  renderProducts(products);
}

/* RENDER PRODUCTS */

function renderProducts(list) {
  const container = document.getElementById("product-list");

  container.innerHTML = "";

  list.forEach((p) => {
    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `

<img src="${p.imageUrl || "https://via.placeholder.com/150"}">

<h3>${p.name}</h3>

<p>${p.description}</p>

<p class="price">₹${p.price}</p>

<button onclick="addToCart(${p.id})">Add To Cart</button>

`;

    container.appendChild(card);
  });
}

/* SEARCH */

async function searchProducts() {
  const keyword = document.getElementById("searchBox").value;

  const res = await fetch(PRODUCT_API + "/search?keyword=" + keyword);

  const data = await res.json();

  renderProducts(data);
}

/* CATEGORY LOAD */

async function loadCategories() {
  const res = await fetch(CATEGORY_API);

  categories = await res.json();

  const filter = document.getElementById("categoryFilter");

  const select = document.getElementById("categorySelect");

  if (filter) {
    filter.innerHTML = '<option value="">All Categories</option>';

    categories.forEach((c) => {
      filter.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
  }

  if (select) {
    select.innerHTML = "";

    categories.forEach((c) => {
      select.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
  }
}

/* FILTER */

function filterByCategory() {
  const id = document.getElementById("categoryFilter").value;

  if (!id) return renderProducts(products);

  const filtered = products.filter((p) => p.category && p.category.id == id);

  renderProducts(filtered);
}

/* CREATE CATEGORY */

async function createCategory() {
  const name = document.getElementById("catName").value;

  const description = document.getElementById("catDesc").value;

  await fetch(CATEGORY_API, {
    method: "POST",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({ name, description }),
  });

  alert("Category created");

  loadCategories();
}

/* CREATE PRODUCT */

async function createProduct() {
  const name = document.getElementById("name").value;

  const description = document.getElementById("desc").value;

  const price = document.getElementById("price").value;

  const imageUrl = document.getElementById("image").value;

  const categoryId = document.getElementById("categorySelect").value;

  await fetch(PRODUCT_API, {
    method: "POST",

    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({
      name,

      description,

      price,

      imageUrl,

      category: { id: categoryId },
    }),
  });

  alert("Product created");
}

/* CART */

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find((p) => p.id === id);

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart");
}

/* CART DISPLAY */

function displayCart() {
  const container = document.getElementById("cart-items");

  if (!container) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;

  container.innerHTML = "";

  cart.forEach((p, i) => {
    const div = document.createElement("div");

    div.innerHTML = `

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="removeFromCart(${i})">Remove</button>

`;

    container.appendChild(div);

    total += p.price;
  });

  document.getElementById("total").innerText = "Total ₹" + total;
}

function removeFromCart(i) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(i, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

function clearCart() {
  localStorage.removeItem("cart");

  displayCart();
}

/* INIT */

loadProducts();

loadCategories();

displayCart();
