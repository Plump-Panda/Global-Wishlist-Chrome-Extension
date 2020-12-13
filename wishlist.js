//Waits for everything to load, then will add the buttons
window.addEventListener("load", function(){
    console.log("Everything on the page has loaded");

    let all = document.getElementsByClassName("dealDetailContainer");

        //Get the newegg item cards on the page
        let newEggProduct = document.getElementsByClassName("item-cell");

        //Go through all the cards
        for(let x = 0; x < newEggProduct.length; x++){
            //Put the 'Add to wishlist' button on the item card
            newEggProduct[x].appendChild(createButton());
        }
});

//Will create a button which will add the item the button is with to the wishlist
function createButton(){
    let button = document.createElement("button");
    button.innerHTML =  "Add to wishlist";
    button.style.width = "100px";
    button.style.float = "left";

    return button;
}