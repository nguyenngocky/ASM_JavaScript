import { get } from "../api/sanpham";

const NewsDetail = {
    async render(id) {
        const { data } = await get(id);
        return `<div class="max-w-5xl mx-auto">
            <h1>${data.title}</h1>
            <img src="${data.img}" />
            <p>${data.desc}</p>
        </div>`;
    },
};
export default NewsDetail;