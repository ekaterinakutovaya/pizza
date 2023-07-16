function addHandlers(item) {
  console.log(item);
  let minus = item.querySelector(".minus");
  let number = item.querySelector(".number");
  let plus = item.querySelector(".plus");
  let totalPrice = item.querySelector(".total-price");
  let price = item.querySelector(".price").dataset.price; // цена
  let costOutput = item.querySelector(".cost");

  // TODO: Kate
  // plus.addEventListener('click', function (e) {
  //     console.log(e.target);
  //     let products = JSON.parse(localStorage.getItem('selectedProduct'))

  //     if (!products) {
  //         products = []
  //         item.remove()
  //         return
  //     }

  //     const currentItem = products.find((el) => el.productId == item.dataset.id)

  //     if (+number.textContent == currentItem.bowl_available) {
  //         return
  //     }

  //     totalPrice.dataset.value = parseFloat(totalPrice.dataset.value) + parseFloat(price)
  //     number.textContent = +number.textContent + 1
  //     console.log(number.textContent = +number.textContent + 1);

  //     costOutput.textContent =
  //         `$ ` + (+totalPrice.dataset.value).toFixed(2);

  //     const updatedProducts = products.map((el) => {
  //         if (el.productId == item.dataset.id) {
  //             return {
  //                 ...el,
  //                 totalPrice: totalPrice.dataset.value,
  //                 count: +number.textContent
  //             }
  //         }

  //         return el
  //     })

  //     localStorage.setItem('selectedProduct', JSON.stringify(updatedProducts));
  // });

  // minus.addEventListener('click', function () {
  //     let products = JSON.parse(localStorage.getItem('selectedProduct'))

  //     if (!products) {
  //         products = []
  //         item.remove()
  //         return
  //     }

  //     if (number.textContent == 1) {
  //         return
  //     }
  //     totalPrice.dataset.value = parseFloat(totalPrice.dataset.value) - parseFloat(price)
  //     number.textContent = +number.textContent - 1

  //     costOutput.textContent =
  //     `$ ` + (+totalPrice.dataset.value).toFixed(2);

  //     const updatedProducts = products.map((el) => {
  //         if (el.productId == item.dataset.id) {
  //             return {
  //                 ...el,
  //                 totalPrice: totalPrice.dataset.value,
  //                 count: +number.textContent
  //             }
  //         }

  //         return el
  //     })

  //     localStorage.setItem('selectedProduct', JSON.stringify(updatedProducts));
  // });
}