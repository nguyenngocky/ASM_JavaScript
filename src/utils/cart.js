let cart = [];
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
}

export const addToCart = (newProduct, next) => {
    const existProduct = cart.find(item => item.id === newProduct.id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity += newProduct.quantity;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}


export const decInQty = (id, soluong, next) => {
    const currentProduct = cart.find(item => item.id == id);

    currentProduct.quantity = soluong;

    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Bạn có muốn xóa không?");
        if (confirm) {
            cart = cart.filter(item => item.id != id)
        } else {
            currentProduct.quantity = 1;
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}
export const removeItemInCart = (id, next) => {
    const confirm = window.confirm("Bạn có muốn xóa không?");
    if (confirm) {
        cart = cart.filter(item => item.id != id)
        // console.log(cart);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
}