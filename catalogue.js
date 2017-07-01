/**
 * Created by Abhishek Ranjan on 30-06-2017.
 */
$(function () {
    // fillCatalogue();
    // setCatalogue();
    // getCatalogue();
    displayCatalogue();

    $("input[value='Add to Cart']").click(addToCart);
});

function populateCatalog(name,price) {
    var obj = { name:name , price:price };
    catalogue.push(obj);
}
function fillCatalogue() {
    console.log("fill catalogue");
    for(var i=0;i<6;i++){
        populateCatalog("item"+i,i*1000);
    }
}


function setCatalogue() {
    console.log("setCatalogue called");
    localStorage.setItem('catalogue',JSON.stringify(catalogue));
}

function displayCatalogue() {
    console.log("displayCatalogue called");
    getCatalogue();
    $('#catalogue-container').html('');
    if(catalogue == [])
    {
        console.log("No items in catalogue !");
        return;
    }
    var row = $("<div class='row'>");
    for(var i = 0; i<catalogue.length; i++)
    {
        var element = $(`<div class="col-4">
                <div class="card"  id="${i}">
                    <img src="p.png" class="card-img-top">
                    <div class="card-block">
                        <h4 class="card-title">${catalogue[i].name}</h4>
                        <p class="card-text">Price:${catalogue[i].price}</p>
                        <input type="button" value="Add to Cart" class="btn btn-success" >
                    </div>
                </div>
            </div>`);
        row.append(element);
        // $('#row-catalog').append(element);
        if( (i+1)%3 == 0){
            // var row = $("<div class='row'>");
            // row.append(element);
            $('#catalogue-container').append(row);
            row = $("<div class='row'>");
        }
    }
    $('#catalogue-container').append(row);
}
