const cartProducts = document.querySelector(".cart__products");
const cart = document.querySelector('.cart');

cart.style.display = 'none';
cartProducts.addEventListener('click', productRemove);
document.addEventListener('click', changeQuantity);
document.addEventListener('click', addToCart);

function updateCartVisibility() {
  if (cartProducts.children.length > 0) {
    cart.style.display = 'block';
  }else {
    cart.style.display = 'none';
  }
}

function changeQuantity(event) { //Выбор количества добавляемого товара
  const control = event.target;
  if (!control.classList.contains('product__quantity-control')) return;

  const product = control.closest(".product");
  const productQuantityValue = product.querySelector(".product__quantity-value");
  let productQuantity = parseInt(productQuantityValue.textContent, 10);
  if(control.classList.contains('product__quantity-control_inc')) {
    productQuantity++
  }else if(control.classList.contains('product__quantity-control_dec')) {
    productQuantity = Math.max(1, productQuantity - 1);
  }

  productQuantityValue.textContent = productQuantity;
}

function addToCart(event) { //Добавление товара
  const addButton = event.target;
  if(!addButton.classList.contains("product__add")) return;

  const product = addButton.closest(".product");
  const productId = product.dataset.id;
  const productImage = product.querySelector(".product__image").src;
  const productQuantityValue = product.querySelector(".product__quantity-value");
  const productQuantity = parseInt(productQuantityValue.textContent, 10);

  let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
  if(cartProduct) { //Если товар есть в корзине
    const cartProductCount = cartProduct.querySelector('.cart__product-count');
    let currentCount = parseInt(cartProductCount.textContent, 10);
    cartProductCount.textContent = currentCount + productQuantity;
  }else { //Если товара нет
    const cartProductHtml = `
      <div class="cart__product" data-id="${productId}">
        <img class="cart__product-image" src="${productImage}">
        <div class="cart__product-count">${productQuantity}</div>
        <div class="cart__product-remove">Убрать товар</div>
      </div>
    `;
    cartProducts.insertAdjacentHTML('beforeend', cartProductHtml);
    updateCartVisibility() //показывает корзину после добавления товара
  }
}

function productRemove(event) {
  if (event.target.classList.contains('cart__product-remove')) {
    const productToRemove = event.target.closest('.cart__product');
    productToRemove.remove();
    updateCartVisibility();
  }
}