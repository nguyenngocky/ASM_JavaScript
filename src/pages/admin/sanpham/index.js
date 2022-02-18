import axios from 'axios';
import { reRender } from '../../../utils/rerender';
import { getAll, remove } from '../../../api/sanpham';
import { getAll as getAllDanhMuc } from '../../../api/danhmuc';
import Dashboard from '../../../components/dashboard';


const SanPham = {
    async render() {
        const { data } = await getAll();
        const DanhMuc = await getAllDanhMuc()
		const dataD = DanhMuc.data

        return /* html */`
        <div id="header">
                ${Dashboard.render()}
            </div>
        <div class="max-w-5xl mx-auto"> 
            <div class="my-3">
                <a class="btn edit btn-bs-secondary mr-6 lg:mr-0 lg:mb-6" href="/admin/san-pham/add">Tạo mới</a>
            </div>
            <div class="news">
                <h2>Quản lý Sản phẩm</h2>
                <table class="table-auto w-full text-left">
                <thead>
                    <tr>
                    <th class="px-4 py-2 border-r">STT</th>
                    <th class="px-4 py-2 border-r">Tên Sản phẩm</th>
                    <th class="px-4 py-2 border-r">Danh mục</th>
                    <th class="px-4 py-2 border-r">Giá</th>
                    <th class="px-4 py-2 border-r">Ảnh sản phẩm</th>
                    <th class="px-4 py-2 border-r">Số lượng</th>
                    <th class="px-4 py-2 border-r">Hành động</th>
                    </tr>
                </thead>
                
                    <tbody>
                        ${data.map((post, index) => {
                            const result = dataD.filter(DanhMuc => DanhMuc.id == post.id_danhmuc) 
                            return `
                            <tr>
                                <td class="border border-l-0 px-4 py-2 text-center text-green-500">${index + 1}</td>
                                <td class="border border-l-0 px-4 py-2 text-center text-green-500">${post.title}</td>
                                <td class="border border-l-0 px-4 py-2 text-center text-green-500">${result[0].title}</td>
                                <td class="border border-l-0 px-4 py-2 text-center text-green-500">${post.price}</td>
                                <td class="border border-l-0 px-4 py-2 text-center text-green-500"><img src="${post.img}" width="150px" height="250px" alt=""></td>
                                <td class="border border-l-0 px-4 py-2 text-center text-green-500">${post.quantity}</td>
                                <td class="flex px-4 py-2 border-r">
                                    <a class="btn edit btn-bs-secondary mr-6 lg:mr-0 lg:mb-6" href="/admin/san-pham/${post.id}/update">Sửa</a>
                                    <button data-id="${post.id}" class="btn xoa btn-bs-secondary mr-6 lg:mr-0 lg:mb-6">Xóa</button>
                                </td>
                            </tr>
                        `}).join("")}    
                    </tbody>
                </table>
                
            </div>
        </div>
        `;
    },
    afterRender(){
        const btns = document.querySelectorAll('.xoa');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', async function(){
                const confirm = window.confirm("Bạn có chắc chắn không??");
                if(confirm){
                    remove(id).then(() => {
                        reRender(SanPham, '#content');
                    })
                }
            })
        });
    }
};

export default SanPham;