export const cardItemHTML = (cartItem) => `
    <div class="orders__block" data-id="${cartItem.productId}">
        <div class="orders__left">
            <div class="cart-item__img">
                <img src="${cartItem.imgSrc}" alt="">
            </div>
            <div class="count" data-price="1">
                <input type="button" value="-" class="orders__input minus" data-product="${cartItem.productId}">
                <span class="orders__subtitle number" data-counter="${cartItem.productId}">${cartItem.count}</span>
                <input type="button" value="+" class="orders__input plus" data-product="${cartItem.productId}">
            </div>
        </div>
        <div class="orders__right">
            <h3 class="orders__right-title">${cartItem.title}</h3>
            <span class="orders__right-subtitle total-price cost" data-price="1" data-value="${cartItem.totalPrice}">$ ${cartItem.totalPrice}</span>
            <span class="orders__right-subtitle price" data-price="${cartItem.price}">$ ${cartItem.price}</span>
        </div>
        <div class="orders__end">
            <input type="text" placeholder="Please, just a little bit spicy only." disabled class="orders__end-input">
            <a href="#" class="delete-btn" data-delete="${cartItem.productId}">
                <img src="img/delete.svg" alt="">
            </a>
        </div>
    </div>
`;