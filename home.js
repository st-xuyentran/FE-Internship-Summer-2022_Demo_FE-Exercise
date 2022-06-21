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
  var idProduct = '';
  function render(productList) {
    var product = document.querySelector('.products-list')
    product.innerHTML = '';
    var productList = JSON.parse(localStorage.getItem('product'))
    for (var i = 0; i < productList.length; i++) {
      var discountProduct = (productList[i].price - productList[i].price * productList[i].discount / 100).toFixed(2);
      var showDiscount = productList[i].discount;
      var showProduct = document.querySelector('.products-list')
      showProduct.innerHTML += '<li class="products-item col-sm-6 col-3">' +
        '<a class="product-item-link" href="#">' +
        '<span class="badge badge-danger">' + productList[i].discount + '</span>' +
        '<img class="product-img" src="' + productList[i].image_url + '" alt="T-shirt Summer Vibes">' +
        '<h4 class="product-item-title">' + productList[i].name + '</h4>' +
        '<div class="product-discount">' +
        '<span class="product-sale">' + '$' + discountProduct + '</span>' +
        '<span class="product-befor-sale">' + '$' + productList[i].price + '</span>' +
        '</div>' +
        '<div class="add-to-cart" id="addItem">' +
        '<button data-id="' + productList[i].id + '" onclick="addToCart(' + productList[i].id + ')" class="btn btn-primary">Add To Cart</button>' +
        '</div>' +
        '</a>' +
        '</li>';
console.log(productList[i].price);
    }
  }

  var dataProduct = fetchData()
  render(dataProduct);