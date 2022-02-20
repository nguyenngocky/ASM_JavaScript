import Header from '../components/header';
import Footer from '../components/footer';
import { decInQty, removeItemInCart } from "../utils/cart";
import { reRender } from "../utils/rerender";
import { $ } from "../utils/selector";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const numberFormat = new Intl.NumberFormat('vi-VN', {
	style: 'currency',
	currency: 'VND',
});

const cartPage = {
	render() {
		let cart = [];
		if (localStorage.getItem('cart')) {
			cart = JSON.parse(localStorage.getItem('cart'));
		}
		return /*html*/ ` 
		<div id="header">
		${Header.render()}
	</div>
			<main class="grid grid-cols-8 gap-3 my-2 relative">
			<div class="col-span-8">
			<form action="" id="form-cart">
				<h2 class="font-bold text-2xl text-center">GIỎ HÀNG</h2>
				<table class="w-full border-collapse">
					<thead>
						<tr>
							<th class="border border-[#f0f0f0] border-x-[1px] py-4">Sản Phẩm</th>
							<th class="border border-[#f0f0f0] border-x-[1px] p-4">Tên Sản Phẩm</th>
							<th class="border border-[#f0f0f0] border-x-[1px] p-4">Số Lượng</th>
							<th class="border border-[#f0f0f0] border-x-[1px] p-4">Giá Tiền</th>
							<th class="border border-[#f0f0f0] border-x-[1px] p-4">Xóa</th>
						</tr>
					</thead>
					<tbody>
					${cart.length > 0 ? cart.map(item => /*html*/`
                        <tr id="sanphamtt">
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">
								<div class="">
								<button type="button" hidden class="btn quantityProduct"></button>
									<a href="" class=""><img src="${item.img}" alt="" width="100"
											class="align-middle inline-block"></a>
								</div>
							</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">${item.title}</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">
								<input type="number"  size="3" value="${item.quantity}" data-id="${item.id}"
									class="text-center border border-black w-[65px] quantityProduct">
							</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center">${numberFormat.format(item.price)}</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center"><button href="" data-id="${item.id}" class="btn btn-remove"> 
									<i class="fa fa-trash">
									</i>
								</button></td>
						</tr>
                    `).join("") : `
                        <tr>
                            <td colspan="4">Không có sản phẩm nào trong giỏ hàng</td>
                        </tr>
                    `}
					<tr id="tong-tien" >
							<td colspan="4"
								class="border border-[#f0f0f0] border-x-[1px] p-4 text-center font-bold text-xl">Tổng
								Tiền:
							</td>
							<td class="border border-[#f0f0f0] border-x-[1px] p-4 text-center font-bold total">
								</td>
						</tr>
					</tbody >
				</table >
	<div class="thanh-toan text-center my-4">
		<button type="submit"
			class="text-white bg-red-500 inline-block rounded font-bold text-2xl px-4 py-3"><a href="/#/bill">Thanh
				Toán</a></button>
	</div>
			</form >
		</div >
			</main >
			<div class="mt-[30px]" id="footer">
            ${Footer.render()}
        </div>
`;
	},

    afterRender() {
		
		let cart = [];
		var tongTien = 0;
		if (localStorage.getItem('cart')) {
			cart = JSON.parse(localStorage.getItem('cart'));
		}

		const renderTongTien = document.querySelector(".total")
		cart.forEach(carts => {
			tongTien = tongTien + (carts.price * carts.quantity)
		})
		renderTongTien.innerHTML = `${numberFormat.format(tongTien)}`;

		if ($(".btn")) {
			console.log($(".btn"));
			$(".btn").forEach(btn => {
				const id = btn.dataset.id;
				btn.addEventListener('click', function () {
					removeItemInCart(id, () => {
						reRender(cartPage, "#content");
						toastr.success("Bạn đã xóa thành công")
					})
				})
			})
		}

		if ($(".quantityProduct")) {
			$(".quantityProduct").forEach((quantity) => {
				quantity.addEventListener("change", () => {
					const id = quantity.dataset.id;
					decInQty(id, quantity.value, () => {
						reRender(cartPage, "#content")
						toastr.success("Thêm sản phẩm thành công")
					});
				})
			})
		}

	}
};
export default cartPage;