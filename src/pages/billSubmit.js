import Header from '../components/header';
import Footer from '../components/footer';


const SuccessPage = {
    render() {

        return /* html */ `
        
        <div id="header">
		${Header.render()}
	</div>

    <main class="grid grid-cols-8 gap-3 my-2 relative">
            <div class="col-span-8 my-10">
            ${localStorage.getItem('infoOrder') ? `
                <div class="my-0 m-auto w-[70%] text-center">
                    <span class="text-2xl font-bold text-green-500">Đặt Hàng Thành Công</span>
                    
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

        const orderSuccess = document.querySelector(".orderSuccess")

        orderSuccess.addEventListener("click", () => {
            localStorage.removeItem("infoOrder");
            localStorage.removeItem("cart");
            document.location.href = "/";
        })

        Header.afterRender()
    }
};
export default SuccessPage;