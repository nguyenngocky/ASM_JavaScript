import instance from "./config";

export const getAll = () => {
    const url = `/sanpham`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/sanpham/${id}`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/sanpham/${id}`;
    return instance.delete(url);
}
export const add = (sanpham) => {
    const url = `/sanpham`;
    return instance.post(url, sanpham);
}
export const update = (sanpham) => {
    const url = `/sanpham/${sanpham.id}`;
    return instance.put(url, sanpham);
}