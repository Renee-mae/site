// Shopping Cart Counter
let cart = 0;

function addCart() {
    cart++;
    document.getElementById("cart-count").innerHTML = cart;
    alert("✅ Product added to cart!");
}

// Search Function
const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function () {

        let value = search.value.toLowerCase();

        let products = document.querySelectorAll(".card");

        products.forEach(function(product){

            let text = product.innerText.toLowerCase();

            if(text.indexOf(value) > -1){
                product.style.display = "block";
            }else{
                product.style.display = "none";
            }

        });

    });
}

function openImage(image){

document.getElementById("imageModal").style.display="flex";

document.getElementById("popupImage").src=image;

}

function closeImage(){

document.getElementById("imageModal").style.display="none";

}

