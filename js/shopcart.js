// variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartDOM = document.querySelector(".cart");
const LimitFreeShip = 5000;
// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
  // =============================
  // Private methods and propeties
  // =============================
  cart = [];
  
  // Constructor
  function Item(id, name, price, count) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
  }
  
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  

  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(id, name, price, count) {
    for(var item in cart) {
      // if(cart[item].name === name) {
      if(cart[item].id == id) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(id, name, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item by id
  obj.setCountForItem = function(id, count) {
    for(var i in cart) {
      if (cart[i].id == id) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart by id --minus one?
  obj.removeItemFromCart = function(id) {
      for(var item in cart) {
        if(cart[item].id == id) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(id) {
    for (var item in cart) {
      console.log(cart[item].id);
      if(cart[item].id == id) {
        console.log("delete id:"+id);
        cart.splice(item, 1);
        
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  //postageCart
 obj.postageCart = function() {
   var postageCart = 1000;
   var totalcart = obj.totalCart();
   //console.log(totalcart);
   if (totalcart >= LimitFreeShip)
   {
     postageCart = 0;
   }
    return Number(postageCart);
  }

  //totalOrder
 obj.totalOrder = function() {
    var postageCart = obj.postageCart();
    var totalcart = obj.totalCart();
    var totalOrder = totalcart + postageCart;
    console.log(totalOrder);
    return Number(totalOrder.toFixed(2));
  }

  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$('.add-to-cart').click(function(event) {
  console.log("add to cart.");
  event.preventDefault();
  var id = $.trim($(this).data('id'));
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(id, name, price, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {   
    output += '<tr class="product-row">'
      + '				<td class="product-col">'
      + '				<figure class="product-image-container">'
      + '						<a href="' + cartArray[i].id + '" class="product-image">'
      + '								<img src="{{asset(\'' + 'img/product/product-' + cartArray[i].id + '.jpg\')}}" alt="product"> '
      + '							</a>'
      + '				</figure>'
      + '				<h2 class="product-title"> '
      + '							<a href="' + cartArray[i].id + '">' + cartArray[i].name + '</a>'
      + '				</h2>'
      + '				</td>'
      + '			<td>' + cartArray[i].price + '</td>'
      + '			<td>'
      + '				<div class="input-group  bootstrap-touchspin bootstrap-touchspin-injected">'
      + '					<input class="item-count vertical-quantity form-control" type="text"  data-id="' + cartArray[i].id + '" value="' + cartArray[i].count + '">'
      + '					<span class="input-group-btn-vertical" data-id="' + cartArray[i].id + '">'
      + '					<button class="plus-item btn btn-outline bootstrap-touchspin-up icon-up-dir" type="button"></button>'
      + '					<button class="minus-item btn btn-outline bootstrap-touchspin-down icon-down-dir" type="button"></button>'
      + '					</span>'
      + '				</div>'
      + '			</td>'
      + '			<td>'
      +         cartArray[i].price * cartArray[i].count
      + '				<div class="removep">'
      + '					<a href="#" class="delete-item  btn-remove " title="Remove product"  data-id="' + cartArray[i].id + '"  ><span class="sr-only">Remove</span><i class="icon-cancel"></i></a>'
      + '				</div><!-- End .float-right -->'
      + '			</td>'
      + ' </tr>';
        
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
  $('.postage-cart').html(shoppingCart.postageCart());
  $('.total-order').html(shoppingCart.totalOrder());
 
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function(event) {
 // var name = $(this).data('name')
  var id = $(this).data('id')
  console.log("delete item:"+id);
  shoppingCart.removeItemFromCartAll(id);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  //var name = $(this).data('name')
  var id =$(this).parent().data('id')
  shoppingCart.removeItemFromCart(id);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  //var name = $(this).data('name')
  var id =$(this).parent().data('id')
  shoppingCart.addItemToCart(id);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var id = $.trim($(this).data('id'));
   var count = Number($(this).val());
  shoppingCart.setCountForItem(id, count);
  displayCart();
});


//add Mark for show ,close, clear cart button
function showCart() {
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
}
function hideCart() {
    cartOverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart");
} 
cartBtn.addEventListener("click", this.showCart);
closeCartBtn.addEventListener("click", this.hideCart);
//end here
console.log("hello cart.");
displayCart();
