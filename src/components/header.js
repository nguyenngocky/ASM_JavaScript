import Nav from "./nav";

const Header = {
    render() {
      let cart = [];
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
      }
        return /* html */`
        <header class="max-w-full mx-auto">

            <div class="bg-lime-100 py-4 flex justify-around items-center">
                <div class="logo">
                  <a href="/"><img src="../../img/logo.png" class="w-[150px]" alt=""></a>
                </div>

                <div class="search">
                  <input type="search" placeholder="Tìm kiếm ..." class="p-[5px] w-[450px] text-[14px] border-orange-600">
                  <button><i text-orange-700 class="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div class="cart">
                <li class="inline-block mx-3" > <a href="/#/cart" class="block py-4">
                <i class="fas fa-shopping-cart"></i> Giỏ Hàng
                <span class="bg-red-500 text-white rounded-2xl  inline-block px-2">${cart.length}</span>
              </a>
                </div>

            </div>
            <div class="bg-orange-500" id="main-menu">
                ${Nav.render()}
            </div>
        </header>`;
    },
    afterRender(){
      Nav.afterRender();
    }
};
export default Header;