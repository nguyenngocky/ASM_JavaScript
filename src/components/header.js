import Nav from "./nav";

const Header = {
    render() {
        return /* html */`
        <header class="max-w-full mx-auto">

            <div class="bg-lime-100 py-4 flex justify-around items-center">
                <div class="logo">
                  <img src="../../img/logo.png" class="w-[150px]" alt="">
                </div>

                <div class="search">
                  <input type="search" placeholder="Tìm kiếm ..." class="p-[5px] w-[450px] text-[14px] border-orange-600">
                  <button><i text-orange-700 class="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div class="cart">
                  <i class="fa-solid fa-cart-plus text-orange-900 text-[20px]"></i>
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