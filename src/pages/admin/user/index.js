import axios from 'axios';
import { reRender } from '../../../utils/rerender';
import { getAll, remove } from '../../../api/user';
import Dashboard from '../../../components/dashboard';

const UserList = {
    async render() {
        const { data } = await getAll();

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
                    <th class="px-4 py-2 border-r">Tên</th>
                    <th class="px-4 py-2 border-r">Email</th>
                    <th class="px-4 py-2 border-r">Vai trò</th>
                    </tr>
                </thead>
                
                    <tbody>
                        ${data.map((post, index) => {
                            return `
                            <tr>
                                <td class="border border-l-0 px-4 py-2 text-center text-green-500">${index + 1}</td>
                                <td class="border border-l-0 px-4 py-2 text-center text-green-500">${post.name}</td>
                                <td class="border border-l-0 px-4 py-2 text-center text-green-500">${post.email}</td>
                                <td class="border border-l-0 px-4 py-2 text-center text-green-500">${post.role == 1 ? "Admin" : "Người dùng"}</td>
                                <td class="flex px-4 py-2 border-r">
                                    <a class="btn edit btn-bs-secondary mr-6 lg:mr-0 lg:mb-6" href="/admin/user/${post.id}/update">Sửa</a>
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
                        reRender(UserList, '#content');
                    })
                }
            })
        });
    }
};

export default UserList;