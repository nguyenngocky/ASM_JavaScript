import axios from "axios";
import { update } from "../../../api/sanpham";
import { get } from "../../../api/sanpham";
import { getAll as getDanhMuc } from "../../../api/danhmuc";
import Dashboard from '../../../components/dashboard';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const updateSanPham = {
    async render(id) {
        const { data } = await get(id)
        const danhMuc = await getDanhMuc()
        const dataD = danhMuc.data
        
        return /*html*/`
        <div id="header">
                ${Dashboard.render()}
            </div>
            <div class="max-w-7xl mx-auto py-6 ">
      <!-- Replace with your content -->
		<div class="flex flex-col">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<form action=""  id="formUpdatePost">
						<div class="shadow overflow-hidden sm:rounded-md">
							<div class="px-4 py-5 bg-white sm:p-6">
								<div class="grid grid-cols-6 gap-6">
									<div class="col-span-6 sm:col-span-3">
										<label for="product-name" class="block text-sm font-medium text-gray-700">Tên truyện</label>
										<input type="text" value="${data.title}" name="title-sp" id="title-sp" placeholder="Nhập tên truyện"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

									<div class="col-span-6 sm:col-span-3">
                                    Ảnh sản phẩm: <br/>
                                    <img src="${data.img}" id="img-old" width="150px" height="250px" alt="">

										<label for="img-sp"
											class="block text-sm font-medium text-gray-700">Ảnh</label>
										<input type="file" name="img-sp" id="img-sp"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

                                    <div class="col-span-6 sm:col-span-3 my-5">
										<label for="select-category" class="block text-sm font-medium text-gray-700">Chọn danh mục muốn thêm</label>
											<select name="select-category" id="danhmuc-sp" class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                            ${dataD.map((danhmuc, index) =>
                                                {
                                                    return /*html*/ `
                                                    <option value="${danhmuc.id}">${danhmuc.title}</option>
                                                    `
                                                }).join("")}
											</select>
									</div>

                                    <div class="col-span-6 sm:col-span-3">
										<label for="nxb-sp" class="block text-sm font-medium text-gray-700">Nhà xuất bản</label>
										<input type="text" value="${data.nxb}" name="nxb-sp" id="nxb-sp" placeholder="Nhập nhà xuất bản"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

                                    <div class="col-span-6 sm:col-span-3">
                                    <label for="ngayxb-sp" class="block text-sm font-medium text-gray-700">Ngày xuất bản</label>
                                    <input type="date" value="${data.ngayxb}" name="ngayxb-sp" id="ngayxb-sp" placeholder="Chọn Ngày xuất bản"
                                        class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
										<label for="nph-sp" class="block text-sm font-medium text-gray-700">Nhà phát hành</label>
										<input type="text" name="nph-sp" value="${data.nph}" id="nph-sp" placeholder="Nhập nhà phát hành"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

                                    <div class="col-span-6 sm:col-span-3">
										<label for="size-sp" class="block text-sm font-medium text-gray-700">Kích thước</label>
										<input type="text" name="size-sp" value="${data.size}" id="size-sp" placeholder="Nhập Kích thước"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

                                    <div class="col-span-6 sm:col-span-3">
										<label for="trang-sp" class="block text-sm font-medium text-gray-700">Số trang</label>
										<input type="number" name="trang-sp" value="${data.trang}" id="trang-sp" placeholder="Nhập Số trang"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

                                    <div class="col-span-6 sm:col-span-3">
										<label for="trongluong-sp" class="block text-sm font-medium text-gray-700">Trọng lượng</label>
										<input type="number" name="trongluong-sp" value="${data.trongluong}" id="trongluong-sp" placeholder="Nhập Trọng lượng"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

									<div class="col-span-6 sm:col-span-4">
										<label for="desc-sp" class="block text-sm font-medium text-gray-700">giới thiệu truyện</label>
										<textarea type="text" name="desc-sp" id="desc-sp"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">${data.desc}</textarea>
									</div>
									<div class="col-span-6 sm:col-span-3">
										<label for="price-sp"
											class="block text-sm font-medium text-gray-700">Giá</label>
										<input type="number" min="0" name="price-sp" value="${data.price}" id="price-sp" placeholder="Nhập giá sản phẩm"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>
										<div class="col-span-6 sm:col-span-3">
										<label for="quantity-sp"
											class="block text-sm font-medium text-gray-700">Số lượng</label>
										<input type="number" min="0" name="quantity-sp" value="${data.quantity}" id="quantity-sp" placeholder="Nhập số lượng"
											class="mt-1 py-2 px-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
									</div>

									</div>
                                    </div>
							</div>
							<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
								<button type="submit"
									class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Cập nhật
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

        `
    },
    afterRender(id){
        const ImgOld = document.querySelector("#img-old")
        var imgData = "";
        const formUpdatePost = document.querySelector('#formUpdatePost');

        const imgProduct = document.querySelector('#img-sp');
        imgProduct.addEventListener("change", async (e)=>{
            toastr.warning("Vui lòng đợi hiển thị thông báo trước khi submit")

            const file = e.target.files[0];
			const formData = new FormData();
			const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/deob8p0s0/image/upload"
			formData.append('file', file);
			formData.append('upload_preset', "fmwvygqx")

			const response = await axios.post(CLOUDINARY_API, formData, {
				headers: {
					"Content-Type": "application/form-data"
				}
			})

            if(response.data.url){
                toastr.success("Đã lưu ảnh thành công có thể ấn submit")
            }
            // console.log("Lay thanh conng anh online:", response.data.url);
            imgData = response.data.url
    
        })

        formUpdatePost.addEventListener('submit', async function(e){
            e.preventDefault();
            console.log(imgData);
            // call api thêm bài viết
            console.log(imgData.length);
                if(imgData.length == 0){   
                    imgData = ImgOld.src;
                    console.log("Old",imgData);
                }
				const idDanhMuc = document.querySelector('#danhmuc-sp').value

                update({
                    id,
                    title: document.querySelector('#title-sp').value,
                    price: document.querySelector('#price-sp').value,
                    img: imgData,
                    desc: document.querySelector('#desc-sp').value,
                    nxb: document.querySelector('#nxb-sp').value,
                    ngayxb: document.querySelector('#ngayxb-sp').value,
                    nph: document.querySelector('#nph-sp').value,
                    size: document.querySelector('#size-sp').value,
                    trang: document.querySelector('#trang-sp').value,
                    trongluong: document.querySelector('#trongluong-sp').value,
                    quantity: document.querySelector('#quantity-sp').value,
                    danhMucId: +idDanhMuc
                })
                .then((result) => {
                    toastr.success("Cập nhật thành công")
                    setTimeout(function(){
                        document.location.href="/#/admin/san-pham"
                    }, 1000)
                })
				.catch((error) => {
                    toastr.error("Cập nhật thất bại")
                    $('#formUpdatePost').reset()
                })

            
        })
    }
}
export default updateSanPham;