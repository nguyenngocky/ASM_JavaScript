import axios from "axios";
import { add } from "../../../api/danhmuc";
import Dashboard from '../../../components/dashboard';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const AddDanhMuc = {
    render(){
        return /*html*/`
        <div id="header">
                ${Dashboard.render()}
            </div>
            
            <div class="max-w-5xl mx-auto">
            <form id="formAddPost">
                <input type="text" id="title-danhmuc" class="border border-black" placeholder="Title" /><br />
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-600 hover:slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Tạo danh mục</button>
            </form>
            </div>
        `
    },
    afterRender(){
        const formAddPost = document.querySelector('#formAddPost');

        formAddPost.addEventListener('submit', async function(e){
            e.preventDefault();


            // call api thêm bài viết
            add({
                title: document.querySelector('#title-danhmuc').value,
            })

            .then((result) => {
                toastr.success("Thêm thành công")
                setTimeout(function(){
                    document.location.href="/#/admin/danh-muc"
                }, 1000)
            })
            .catch((error) => {
                toastr.error("Thêm thất bại thất bại")
                $('#formAddPost').reset()
            })

        })
    }
}
export default AddDanhMuc;