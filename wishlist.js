//Waits for everything to load, then will add the buttons
window.addEventListener("load", function(){
    console.log("Everything on the page has loaded");

    //Get the newegg item cards on the page
    let items = document.getElementsByClassName("item-cell");

    let allPrices = document.getElementsByClassName("price-current-label");
    let allShipping = document.getElementsByClassName("price-ship");

    //Go through all the cards
    for(let x = 0; x < items.length; x++){


        //WARNING: This only works on the newegg search result pages
        try {
            
            //Get all the tags inside of the 'item-cell' div
            let neweggItemDiv = items[x].firstChild.childNodes;

            let link = neweggItemDiv.item(0);
            let name = neweggItemDiv.item(1);
            

            //This item is an ad and has an extra div as the first child, everything is pushed back by 1
            if(link.tagName != "A"){
                link = neweggItemDiv.item(1);
                name = neweggItemDiv.item(2);
            }

            link = link.getAttribute("href");
            console.log("Link: "+link);

            name = name.childNodes.item(1).innerHTML;
            console.log(name);

            //allPrices starts at the '$', element beside it is the dollar price
            let price = allPrices[x].nextElementSibling.innerHTML;
            //element beside the dollar price is the cents
            price += allPrices[x].nextElementSibling.nextElementSibling.innerHTML;
            price = "$"+price;
            console.log("Price: "+price);
            
            let shipping = allShipping[x].innerHTML;
            console.log(shipping);

            //Put the 'Add to wishlist' button on the screen
            items[x].appendChild(createButton());

        } catch (error) {
            console.log(error.stack);
            //Puts the error on the webpage for degbugging
            items[x].appendChild(outputError(error));
        }
    }
});

//Will create a button which will add the item the button is with to the wishlist
function createButton(){
    let button = document.createElement("button");
    button.innerHTML =  "Add to wishlist";
    button.style.width = "100px";
    button.style.float = "left";

    //TO DO   make button add item to storage
    button.onclick = function(){

    };

    return button;
}

//Outputs which item has the error on the webpage
function outputError(errorMessage){
    let error = document.createElement("h1");
    error.innerHTML = errorMessage;
    error.style.color = "red";
    error.style.width = "100px";
    error.style.float = "left";

    return error;
}