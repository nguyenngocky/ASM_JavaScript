
const Dashboard = {
     render() {
        
        return /* html */`
        <nav class="bg-white h-[45px] drop-shadow-md">
        <ul class="flex justify-center pt-[12px]">
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/admin/">Dashboard</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/admin/danh-muc">Bảng Danh mục</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/admin/san-pham">Bảng Sản Phẩm</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/admin/user">Bảng Người Dùng</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/admin/gioi-thieu">Bảng Giới thiệu</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/admin/lien-he">Bảng Liên hệ</a>
          </li>
          <li class="inline-block text-base px-[30px] text-[#38383D] font-normal leading-4 font-mono">
            <a href="/">Về website</a>
          </li>
        </ul>
      </nav>


        `;
    }
}

export default Dashboard;