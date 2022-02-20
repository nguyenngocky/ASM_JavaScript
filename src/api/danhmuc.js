import instance from "./config";

export const getAll = () => {
    const url = `/danhMuc`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/danhMuc/${id}`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/danhMuc/${id}`;
    return instance.delete(url);
}
export const add = (danhmuc) => {
    const url = `/danhMuc`;
    return instance.post(url, danhmuc);
}

export const update = (danhmuc) => {
    const url = `/danhMuc/${danhmuc.id}`;
    return instance.put(url, danhmuc);
}

export const Relationships = (id) => {
    const url = `/danhMuc/${id}?_embed=sanpham`;
    return instance.get(url);
}