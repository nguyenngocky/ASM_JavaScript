import axios from "axios";
import { add } from "../../../api/danhmuc";
import Dashboard from '../../../components/dashboard';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import $ from 'jquery';
import validate from 'jquery-validation';

const AddDanhMuc = {
    render(){
        return /*html*/`
        <div id="header">
                ${Dashboard.render()}
            </div>
            
            <div class="max-w-5xl mx-auto">
            <form action="" id="formAddPost">
                <input type="text" id="title-danhmuc" name="title-dm" class="title border border-black" placeholder="Title" /><br />
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-600 hover:slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Tạo danh mục</button>
            </form>
            </div>
        `
    },
    afterRender(){
        // validate
        const formAddPost = $("#formAddPost");
        const title = document.querySelector("#title-danhmuc")
        formAddPost.validate({
            rules: {
				"title-dm": {
					required: true,
				}
            },
            messages: {
                "title-dm": {
					required: "Không được để trống !",
				}
            },
            submitHandler: function () {
                async function AddDanhMuc() {

                        // call api thêm bài viết
                        add({
                            title: title.value,
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
                    
                }
                AddDanhMuc()
            }
        })

        
        
    }
}
export default AddDanhMuc;