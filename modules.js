function fetchData() {
  var dataProduct = [
    {
      id: 1,
      name: "T-Shirt Summer Vibes",
      image_url: "fashion_styles/image/image.png",
      salePrice: 119.99,
      price: 130.25,
      discount: 30,
    },
    {
      id: 2,
      name: "Loose Knit 3/4 Sleeve",
      image_url: "fashion_styles/image/image-2.png",
      price: 119.99,
      discount: 0,
    },
    {
      id: 3,
      name: "Basic Slim Fit T-Shirt",
      image_url: "fashion_styles/image/image-3.png",
      price: 79.99,
      discount: 0,
    },
    {
      id: 4,
      name: "Loose Textured T-Shirt",
      image_url: "fashion_styles/image/image-4.png",
      price: 119.99,
      discount: 0,
    },
  ];
  localStorage.setItem('product', JSON.stringify(dataProduct));
  return dataProduct;
}

function changeQuantityOfItemInCart(mess, productId) {
  var cart = JSON.parse(localStorage.getItem('cart')) || []
  var dataProduct = JSON.parse(localStorage.getItem('product'))
  console.log(dataProduct);
  var product = dataProduct.find(item => item.id === parseInt(productId));
  console.log(product);
  var productInCart = cart.find(item => item.id === parseInt(productId))
  if (mess == 'add') {
    if (productInCart) {
      updateItem(cart, productInCart.id, productInCart.number + 1)
    } else {
      addToProduct(cart, product)
    }
  }
  if(mess == 'delete'){
    deleteProduct(cart, productId)
  }
  if (mess == 'minus') {
    if (minusProduct) {
      updateItem(cart, productInCart.id, productInCart.number - 1)
    }
  }
  
}
function updateItem(cart, id, quantity) {
  var item = cart.find(item => item.id === id);
  if (quantity > 0) {
    item.number = quantity
    localStorage.setItem('cart', JSON.stringify(cart))
  }
  render();
}

function addToProduct(cart, product) {
  cart.push(product);
  cart[cart.length - 1].number = 1;
  localStorage.setItem('cart', JSON.stringify(cart));
  render();
}

function addToCart(id) {
  changeQuantityOfItemInCart('add', id);
  render();
}