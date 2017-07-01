/**
 * Created by Abhishek Ranjan on 01-07-2017.
 */
var CartItems = [];
var catalogue = [];
$(function () {
    // fillCatalogue();
    // setCatalogue();
    getCatalogue();
});
function getCatalogue() {
    console.log("getCatalogue called");
    var temp = localStorage.getItem('catalogue');
    if(temp != null)
        catalogue = JSON.parse(temp);
    else
        catalogue = [];
}
function addToCart(event) {
    var realId = event.target.parentNode.parentNode.id;
    var found = false;
    for(var i=0;i<CartItems.length;i++){
        if(CartItems[i].id == realId)
        {
            found = true;
            CartItems[i].quantity++;
            setdata();
            break;
        }
    }
    if(found == false) {
        var obj = new createCartItem(realId);
        CartItems.push(obj);
    }
    setdata();
    // updateCart();
    // alert("add to cart called")
    // console.log(event);
}

function createCartItem(id) {
    this.id = id;
    this.quantity = 1;
}
function setdata() {
    console.log("setcartdat");
    localStorage.setItem('CartItems' ,JSON.stringify(CartItems) );
}