import { signup } from "../api/user";
import { $ } from "../utils/selector";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Header from '../components/header';
import Footer from '../components/footer';

const Signup = {
    render(){
        return `
        <div id="header">
                ${Header.render()}
            </div>
            <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <div>
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up in to your account</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
            </p>
            </div>
            <form class="mt-8 space-y-6" id="formSignup">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                <label for="name" class="sr-only">Name</label>
                <input id="name"  type="text" autocomplete="name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your name">
                </div>

                <div>
                <label for="email" class="sr-only">Email address</label>
                <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your email">
                </div>

                <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your Password">
                </div>
            </div>

            <div class="flex items-center justify-between">
                <div class="flex items-center">
                
                </div>

            </div>

            <div>
                <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Đăng ký
                </button>
            </div>
            </form>
        </div>
        </div>
            <div id="footer">
                ${Footer.render()}
            </div>
        `
    },
    afterRender(){
        $('#formSignup').addEventListener('submit', async function(e){
            e.preventDefault();
            try {
                const { data } = await signup({
                    name: $('#name').value,
                    email: $('#email').value,
                    password: $('#password').value,
                    role: 0
                });
                toastr.success("Đăng ký thành công")
                if(data){
                    setTimeout(function(){
                        document.location.href="/signin"
                    },2000);
                }
                
            } catch (error) {
                toastr.error(error.response.data)
                $('#formSignup').reset()
            }
           

        })
    }
}
export default Signup;