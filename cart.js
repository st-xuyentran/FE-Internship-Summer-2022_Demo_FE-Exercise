
// import{changeQuantityOfItemInCart} from './modules.js'
function fetchData() {
  return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

function render() {
  var showCart = document.getElementById('show-cart');
  var quantity = 0;
  var listCart = fetchData();
  var contentCart = document.getElementById('content-cart')
  contentCart.innerHTML = '';
  for (var item of listCart) {
    contentCart.innerHTML += `<li class="cart-item-product">
                  <a class="product-item-link cart-link" href="#">
                    <img class="product-img" src="${item.image_url}" alt="T-shirt Summer Vibes" />
                    <div class="cart-header">
                      <h4 class="product-item-title">${item.name}</h4>
                      <button data-id="${item.id}" class="btn btn-light" >Delete</button>
                    </div>
                    ${item.salePrice ?
                     ` <div class="product-discount">
                      <span class="product-sale">$${item.salePrice}</span>
                      <span class="product-befor-sale">$${item.price}</span>
                    </div>` :``
                    }
                    <span class="badge badge-danger">-${item.discount}%</span>
                  </a>
                  <div>
                    <button class="btn-add" id="btn-plus" data-id="${item.id}">+</button>
                    <span>${item.number}</span>
                    <button class="btn-desc" id="btn-minus" data-id="${item.id}">-</button>
                  </div>
                </li>`
  }
  plusProduct();
  minusProduct();
  removeProduct();
}
function plusProduct() {
  var addBtnElement = document.getElementsByClassName('btn-add')
  for (var i = 0; i < addBtnElement.length; i++) {
    addBtnElement[i].addEventListener('click', function () {
      var id = this.getAttribute('data-id');
      changeQuantityOfItemInCart('add', id)
    })
  }

}
function minusProduct() {
  var descBtnElement = document.getElementsByClassName('btn-desc')
  for (var i = 0; i < descBtnElement.length; i++) {
    descBtnElement[i].addEventListener('click', function () {
      var minusId = this.getAttribute('data-id');
      changeQuantityOfItemInCart('minus', minusId)
      render();
    })
  }
}
function removeProduct() {
  var removeElement = document.getElementsByClassName('btn-light')
  for (var i = 0; i < removeElement.length; i++) {
    removeElement[i].addEventListener('click', function () {
      var deleteId = this.getAttribute('data-id');
      changeQuantityOfItemInCart('delete', deleteId)
    })
  }
}
function deleteProduct(cart, id) {
  var index = cart.findIndex(item => item.id === parseInt(id));
  cart.splice(index, 1)
  localStorage.setItem('cart', JSON.stringify(cart))
  render()
}
function viewPriceProduct() {
  
}
function totalPay(){
//  var totalProductPay = ((cart.price - cart.price * cart.salePrice / 100)* cart.number).toFixed(2)

}
render();
