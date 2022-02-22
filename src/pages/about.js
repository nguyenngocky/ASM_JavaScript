import Header from '../components/header';
import Footer from '../components/footer';
import { getAll } from '../api/sanpham';
const AboutPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div id="header">
                ${Header.render()}
            </div>
            <div class="max-w-5xl mx-auto">
            <div class="grid grid-cols-4 gap-8 w-[100%] mx-auto mt-[30px]">
                
                ${data.map((post) => `
                    <div class="h-[400px] border p-2 rounded-lg shadow-inner shadow-orange-900 hover:bg-orange-100 hover:drop-shadow-xl
                    hover:-translate-y-1 hover:scale-100  relative overflow-hidden bg-white">
                        <a href="/news/${post.id}">
                            <img class="w-[150px] h-[200px] mx-auto py-4"src="${post.img}" alt="" />
                        </a>
                        <h3 class="my-3"><a  href="/news/${post.id}"class="font-semibold text-[15px] text-orange-500 hover:text-red-700">${post.title}</a></h3>
                        <p class="w-[100%] text-ellipsis text-[13px]">${post.desc}</p>
                    </div>
                `).join("")}
            </div>
            </div>
            <div class="mt-[30px]" id="footer">
            ${Footer.render()}
        </div>
        `;
    },
};
export default AboutPage;