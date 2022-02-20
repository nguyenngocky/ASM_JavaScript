import { get, getAll } from "../api/sanpham";
import { addToCart } from "../utils/cart";
import Header from '../components/header';
import Footer from '../components/footer';
import { $ } from "../utils/selector";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const numberFormat = new Intl.NumberFormat('vi-VN', {
	style: 'currency',
	currency: 'VND',
});

const NewsDetail = {
    async render(id) {
        const { data } = await get(id);
        return `
        <div id="header">
                ${Header.render()}
            </div>
        <div class="max-w-5xl mx-auto">

            <div class="flex mt-[30px] bg-white">
                <div class="img ml-[20px]">\
                <img class="w-[600px] h-[500px]" src="${data.img}" />
                </div>
                <div class="box ml-[30px]">
                    <div class="title">
                    <h1 class="font-bold text-[30px]">${data.title}</h1>
                    </div>
                    <div class="price mt-[10px]">
                    <span class="font-bold text-red-700 text-[20px]">${numberFormat.format(data.price)}</span>
                    </div>
                    <div class="quantity mt-[10px]">
                    <span class="text-zinc-400 text-[14px]">Số lượng: ${data.quantity}</span>
                    </div>

                    <div class="cart mt-[10px]">
                        <div class="form-group">
                            <div>
                            <label class="text-lg">Số lượng</label>
                            <input type="number" id="inputQty" class="border border-gray-400 py-1 px-2 w-[40px]" value="1" />
                            </div>
                            <button
                            class="font-bold text-white inline-block bg-red-500 py-3 px-5 rounded text-xl my-3" id="btnAddToCart">ĐẶT
                            HÀNG</button>
                        </div>
                    </div>

                </div>

            </div>

            <div class="details mt-[30px] bg-white">
              <h1 class="ml-[20px] mb-[10px] pt-[10px] font-bold text-[20px]"> Thông tin chi tiết </h1>
              <div class="text-[14px] ml-[20px]">
                  <div class="pt-[5px]">
                      Nhà xuất bản: <a class="ml-[5px] text-blue-700" href="#">${data.nxb}</a>
                  </div>

                  <div class="pt-[5px]">
                      Ngày xuất bản: <span class="ml-[5px]">${data.ngayxb}</span>
                  </div>

                  <div class="pt-[5px]">
                      Nhà phát hành: <a class="ml-[5px] text-blue-700" href="#">${data.nph}</a>
                  </div>

                  <div class="pt-[5px]">
                      Kích thước: <span class="ml-[5px]">${data.size}</span>
                  </div>

                  <div class="pt-[5px]">
                      Số trang: <span class="ml-[5px]">${data.trang} trang</span>
                  </div>

                  <div class="pt-[5px]">
                      Trọng lượng: <span class="ml-[5px]">${data.trongluong} gram</span>
                  </div>
              </div>
            </div>

            <div class="bg-white mt-[20px]">
                <h1 class="ml-[20px] mb-[10px] pt-[10px] font-bold text-[20px]">Giới thiệu sản phẩm</h1>
                <div class="ml-[20px] italic text-slate-500">
                    ${data.desc}
                </div>
            </div>

            <div class="bg-white mt-[20px]">
                <h1 class="ml-[20px] mb-[10px] pt-[10px] font-bold text-[20px]">Sản phẩm cùng loại</h1>
                <div class="ml-[20px] italic text-slate-500">
                    
                </div>
            </div>

        </div>

        <div class="mt-[30px]" id="footer">
            ${Footer.render()}
        </div>`;
    },

    afterRender(id) {
		const btnAdd = document.querySelector("#btnAddToCart");
		btnAdd.addEventListener('click', async function () {
            const { data } = await get(id);
			addToCart({ ...data, quantity: +$("#inputQty").value, total: +$("#inputQty").value * data.price }, () => {
				toastr.success("Thêm thành công!");
                setTimeout(function(){
                    document.location.href = "/cart";
                }, 1000)
			})
		})

	}
};
export default NewsDetail;