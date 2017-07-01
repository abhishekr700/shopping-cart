/**
 * Created by Abhishek Ranjan on 30-06-2017.
 */
$(function () {
    updateCart();
    clear = $('#clear');
    clear.click(clearCart);
    // $("i[data-icon='plus'").click(plusQuantity);
    // $("i[data-icon='minus'").click(minusQuantity);
});
function plusQuantity(event) {
    console.log("plus quan");
    var id = event.target.parentNode.parentNode.parentNode.parentNode.id;
    console.log(id);
    console.log(event.target.parentNode.parentNode.parentNode.parentNode);
    for(var j=0;j<CartItems.length;j++)
    {
        if(id == CartItems[j].id)
        {
            CartItems[j].quantity++;
        }
    }
    setdata();
    updateCart();
}
function minusQuantity() {
    console.log("minus quan");
    var id = event.target.parentNode.parentNode.parentNode.parentNode.id;
    console.log(id);
    console.log(event.target.parentNode.parentNode.parentNode.parentNode);
    for(var j=0;j<CartItems.length;j++)
    {
        if(id == CartItems[j].id)
        {
            CartItems[j].quantity--;
            if(CartItems[j].quantity == 0)
            {
                CartItems.splice(j,1);
            }
        }
    }
    setdata();
    updateCart();
}
function getdata() {
    console.log("getcartdata called");
    var data = localStorage.getItem('CartItems');
    if(data != null)
        CartItems = JSON.parse(data);
    else CartItems = [];
}

function clearCart() {
    console.log("clearcart called");
    CartItems = [];
    setdata();
    updateCart();
}

function updateCart() {
    getdata();
    $('#cart-contents').html('');
    $('#total-box').text(`₹0`);
    $('#qty-box').text(`0`);
    var Amt = 0,Qty = 0;
    for(i in CartItems)
    {
        var id = CartItems[i].id;
        id = parseInt(id);
        console.log(typeof id);
        for(var j=0;j<catalogue.length;j++){
            // if(catalogue[i].)
        }
        var Item = catalogue[id];
        console.log(Item);
        // Amt += Item.price;
        Amt += Item.price*CartItems[i].quantity
        Qty += CartItems[i].quantity;
        var ItemRow = $(`<tr>
            <th scope="row" class="text-center">${parseInt(i)+1}</th>
            <td>${Item.name}</td>
            <td>₹${Item.price}</td>
           <td id="${id}">
                <div class="container-fluid qty-container" style="">
                    <div class="row" style="">
                    <div class="plus-minus col-2">
                        <i class="fa fa-minus-square" aria-hidden="true" data-icon="minus"></i>
                    </div>
                    <div class="col" style="margin-top: 5px; padding: 1px;">
                        ${CartItems[i].quantity}
                    </div>
                    <div class="plus-minus col-2">
                        <i class="fa fa-plus-square" aria-hidden="true" data-icon="plus"></i>
                    </div>
                     </div>
                </div>
            </td>
            
            <td>₹${Item.price*CartItems[i].quantity}</td>
        </tr>`)
        $('#cart-contents').append(ItemRow);

    }
    $('#total-box').text(`₹${Amt}/-`);
    $('#qty-box').text(`${Qty}`);
    $("i[data-icon='plus'").click(plusQuantity);
    $("i[data-icon='minus'").click(minusQuantity);
}




