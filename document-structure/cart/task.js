// Получаем контейнер корзины, куда будем добавлять товары
const cartProductsContainer = document.querySelector('.cart__products');

// Функция для обновления количества товара в карточке (увеличение/уменьшение)
function updateQuantityValue(quantityValueElem, increment) {
  let currentValue = parseInt(quantityValueElem.textContent, 10);
  currentValue += increment;
  if (currentValue < 1) currentValue = 1; // минимальное значение 1
  quantityValueElem.textContent = currentValue;
}

// Обработчик кликов на кнопках + и -
document.querySelectorAll('.product__quantity-control').forEach(control => {
  control.addEventListener('click', () => {
    // Находим родительский блок с количеством
    const quantityControls = control.closest('.product__quantity-controls');
    const quantityValueElem = quantityControls.querySelector('.product__quantity-value');

    if (control.classList.contains('product__quantity-control_inc')) {
      // Увеличиваем количество
      updateQuantityValue(quantityValueElem, 1);
    } else if (control.classList.contains('product__quantity-control_dec')) {
      // Уменьшаем количество
      updateQuantityValue(quantityValueElem, -1);
    }
  });
});

// Функция добавления товара в корзину
function addToCart(productElem) {
  const productId = productElem.dataset.id; // артикул товара
  const productImage = productElem.querySelector('.product__image').src;
  const quantityValueElem = productElem.querySelector('.product__quantity-value');
  const quantityToAdd = parseInt(quantityValueElem.textContent, 10);

  // Проверяем, есть ли уже такой товар в корзине
  let cartProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${productId}"]`);

  if (cartProduct) {
    // Если есть, увеличиваем количество
    const cartProductCountElem = cartProduct.querySelector('.cart__product-count');
    let currentCount = parseInt(cartProductCountElem.textContent, 10);
    cartProductCountElem.textContent = currentCount + quantityToAdd;
  } else {
    // Если нет, создаём новый элемент товара в корзине
    cartProduct = document.createElement('div');
    cartProduct.classList.add('cart__product');
    cartProduct.dataset.id = productId;

    // Создаём изображение товара
    const img = document.createElement('img');
    img.classList.add('cart__product-image');
    img.src = productImage;

    // Создаём элемент с количеством товара
    const countDiv = document.createElement('div');
    countDiv.classList.add('cart__product-count');
    countDiv.textContent = quantityToAdd;

    // Добавляем изображение и количество в блок товара
    cartProduct.appendChild(img);
    cartProduct.appendChild(countDiv);

    // Добавляем товар в корзину
    cartProductsContainer.appendChild(cartProduct);
  }
}

// Назначаем обработчики на кнопки "Добавить в корзину"
document.querySelectorAll('.product__add').forEach(addBtn => {
  addBtn.addEventListener('click', () => {
    // Находим карточку товара (родитель с классом product)
    const productElem = addBtn.closest('.product');
    addToCart(productElem);
  });
});
