let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addWishlist(name){
    wishlist.push(name);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function addCart(name, price, image){

    const product = {
        name: name,
        price: Number(price),
        image: image,
        qty: 1
    };

    localStorage.setItem(
        "cartItem",
        JSON.stringify(product)
    );

    window.location.href = "cart.html";
}


