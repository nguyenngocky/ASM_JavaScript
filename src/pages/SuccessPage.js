import Header from '../components/header';
import Footer from '../components/footer';
const numberFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

const SuccessPage = {
    render() {
        let info = [];
        if (localStorage.getItem('infoOrder')) {
            info = JSON.parse(localStorage.getItem('infoOrder'))
        }
        return /* html */ `
        
        <div id="header">
		${Header.render()}
	</div>

    <main class="grid grid-cols-8 gap-3 my-2 relative">
            <div class="col-span-8 my-10">
            ${localStorage.getItem('infoOrder') ? `
                <div class="my-0 m-auto w-[70%] text-center">
                    <span class="text-2xl font-bold text-green-500">Đặt Hàng Thành Công</span>
                    <span class="text-xl font-bold block">Đơn hàng của bạn sẽ được giao đến địa chỉ <span class="text-red-500">${info[0].address}</span></span>
                    <span class="text-xl font-bold block">Đến người nhận là<span class="text-red-500"> ${info[0].fullname}</span></span>
                    <span class="text-xl font-bold block">Có email là <span class="text-red-500"> ${info[0].email}</span> và số điện thoại <span class="text-red-500"> ${info[0].phone}</span></span>
                    <span class="text-xl font-bold block">Hãy chuẩn bị số tiền <span class="text-red-500 total"></span></span>
                    <div class="text-center my-3">
                    <button class="bg-[#338dbc] text-white py-4 px-5 rounded text-xl orderSuccess">Hoàn Tất</button>
                </div>
                </div>
            ` : `
                <span class="text-2xl font-bold text-red-500">Không có thông tin và sản phẩm đơn hàng</span>
            `}
                
            </div>
    </main>

    <div class="mt-[30px]" id="footer">
            ${Footer.render()}
        </div>

        `

    },
    afterRender() {
        let cart = [];
        var tongTien = 0;
        const orderSuccess = document.querySelector(".orderSuccess")
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
            const renderTongTien = document.querySelector(".total")
            cart.forEach(carts => {
                tongTien = tongTien + (carts.price * carts.quantity)
            });
            renderTongTien.innerHTML = `${numberFormat.format(tongTien)}`;
        }
        orderSuccess.addEventListener("click", () => {
            localStorage.removeItem("infoOrder");
            localStorage.removeItem("cart");
            document.location.href = "/";
        })


    }
};
export default SuccessPage;