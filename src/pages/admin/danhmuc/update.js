import axios from "axios";
import { update } from "../../../api/danhmuc";
import { get } from "../../../api/danhmuc";
import Dashboard from '../../../components/dashboard';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const updateDanhMuc = {
    async render(id) {
        const { data } = await get(id)
        
        return /*html*/`
        <div id="header">
                ${Dashboard.render()}
            </div>
            
            <div class="max-w-5xl mx-auto">
            <form id="formUpdatePost">
                <input type="text" value="${data.title}" id="title-danhmuc" class="border border-black" placeholder="Title" /><br />
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-600 hover:slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Cập nhật danh mục</button>
            </form>
            </div>
        `
    },
    afterRender(id){
        const formUpdatePost = document.querySelector('#formUpdatePost');

        formUpdatePost.addEventListener('submit', async function(e){
            e.preventDefault();


            // call api thêm bài viết
            update({
                id,
                title: document.querySelector('#title-danhmuc').value,
            })
            .then((result) => {
                toastr.success("Cập nhật thành công")
                setTimeout(function(){
                    document.location.href="/#/admin/danh-muc"
                }, 1000)
            })
            .catch((error) => {
                toastr.error("Cập nhật thất bại")
                $('#formUpdatePost').reset()
            })
        })
    }
}
export default updateDanhMuc;