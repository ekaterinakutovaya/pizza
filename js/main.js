import { cardItemHTML } from "./cardHTML.js";
import { products } from "./data.js";

const app = () => {
  const cartWrapper = document.querySelector(".cart-wrapper"); // вот сюда нам нужно добавить карточку
  let lSProducts = JSON.parse(localStorage.getItem("cart"));

  if (!lSProducts) {
    lSProducts = [];
  }

  lSProducts.forEach((item) =>
    cartWrapper.insertAdjacentHTML("beforeend", cardItemHTML(item))
  );

  const addBtns = document.querySelectorAll("[data-cart]");

  Array.from(addBtns).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let selectedProductId = e.target.dataset.id;
      const cartWrapper = document.querySelector(".cart-wrapper");

      let selectedProduct;

      products.forEach((product) => {
        if (selectedProductId == product.productId) {
          selectedProduct = product;
        }
      });

      // TODO: Kate
      let cart = JSON.parse(localStorage.getItem("cart"));

      if (cart !== null) {
        if (!cart.some((item) => item.productId == selectedProductId)) {
          cart.push(selectedProduct);
          localStorage.setItem("cart", JSON.stringify(cart));
          cartWrapper.insertAdjacentHTML(
            "beforeend",
            cardItemHTML(selectedProduct)
          );
        } else {
          const counter = document.querySelector(
            `[data-counter="${selectedProductId}"]`
          );
          let foundIndex = cart.findIndex((item) => item.productId == selectedProductId);
          cart[foundIndex].count += 1;
          counter.textContent = cart[foundIndex].count;
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      
      } else {
        cart = [selectedProduct];
        localStorage.setItem("cart", JSON.stringify(cart));
        cartWrapper.insertAdjacentHTML(
          "beforeend",
          cardItemHTML(selectedProduct)
        );
      }

    });
  });

  handleDeleteCartItem();
};

const handleDeleteCartItem = () => {
  const cartItems = document.querySelectorAll(".orders__block");
  cartItems.forEach((item) => {
    addHandlers(item);
  });

  // const deleteBtns = document.querySelectorAll(".delete-btn");
  // deleteBtns.forEach((btn) => {
  //   btn.addEventListener("click", function () {
  //     cartItems.forEach((item) => {
  //       if (item.dataset.id == this.dataset.delete) {
  //         let products = JSON.parse(localStorage.getItem("selectedProduct"));

  //         if (!products) {
  //           return;
  //         }

  //         const filteredProducts = products.filter(
  //           (product) => product.productId != item.dataset.id
  //         );
  //         localStorage.setItem(
  //           "selectedProduct",
  //           JSON.stringify(filteredProducts)
  //         );
  //         item.remove();
  //       }
  //     });
  //   });
  // });
};

// Cards

function renderProductCard(data) {
  return `
    <li class="hero__item" data-id="${data.productId}">
        <img src="${data.imgSrc}" alt="" class="hero__img">
        <h3 class="hero__item-title">${data.title}</h3>
        <p class="hero__subtitle" data-items-in-box data-price="${data.price}">$ ${data.price}</p>
        <p class="hero__text">${data.bowl_available} Bowls available</p>
        <div class="hero__button"><button class="hero__btn" data-cart data-id="${data.productId}">Add</button></div>
    </li>
    `;
}

export function renderPoducts(products) {
  const productsContainer = document.querySelector("#products");
  const activeTabId =
    document.querySelector(".tabs__active").dataset.categoryid;
  const ul = document.createElement("ul");

  productsContainer.innerHTML = "";
  productsContainer.append(ul);
  ul.classList.add("hero__list");

  products.forEach((prod) => {
    if (prod.categoryId == activeTabId) {
      let li = renderProductCard(prod);
      ul.insertAdjacentHTML("beforeend", li);
    }
  });

  productsContainer.append(ul);
}

renderPoducts(products);
app();

// TODO: Kate
document.addEventListener("click", function (e) {
  
  if (e.target.classList.contains("plus")) {
    // console.log("plus");
  }
  if (e.target.classList.contains("delete-btn")) {
    // console.log(e.target.dataset.delete);
    const productIdToDelete = e.target.dataset.delete;
    let cart = JSON.parse(localStorage.getItem("cart"));
    let updatedCart = cart.filter((item) => item.productId != productIdToDelete);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const cartWrapper = document.querySelector(".cart-wrapper");
    const foundCartItem = cartWrapper.querySelector(
      `[data-id="${productIdToDelete}"]`
    );
   
    cartWrapper.removeChild(foundCartItem);
  }
});
