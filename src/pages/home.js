import axios from 'axios';
import { getAll } from '../api/sanpham';
import Header from '../components/header';
import Footer from '../components/footer';

const numberFormat = new Intl.NumberFormat('vi-VN', {
	style: 'currency',
	currency: 'VND',
});

const HomePage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="max-w-15xl mx-auto"> 
            <div id="header">
                ${Header.render()}
            </div>

            <div class="my-3 mx-auto">
                <img class="mx-auto w-[1200px]" src="../../img/banner.jpg" />
            </div>


            <div class="news">
            
                <div class="grid grid-cols-5 gap-8 w-[82%] mx-auto">
                
                    ${data.map((post) => `
                        <div class="h-[400px] border p-2 rounded-lg shadow-inner shadow-orange-900 hover:bg-orange-100 hover:drop-shadow-xl
                        hover:-translate-y-1 hover:scale-100  relative overflow-hidden bg-white">
                            <a href="/news/${post.id}">
                                <img class="w-[150px] h-[200px] mx-auto py-4"src="${post.img}" alt="" />
                            </a>
                            <p class="text-red-900 text-center">${numberFormat.format(post.price)}</p>
                            <h3 class="my-3"><a  href="/news/${post.id}"class="font-semibold text-[15px] text-orange-500 hover:text-red-700">${post.title}</a></h3>
                            <p class="w-[100%] text-ellipsis text-[13px]">${post.desc}</p>
                        </div>
                    `).join("")}
                </div>
            </div>
            <div class="mt-[20px]" id="footer">
                ${Footer.render()}
            </div>
        </div>
        `;
    },
    afterRender(){
        Header.afterRender()
    }
};

export default HomePage;