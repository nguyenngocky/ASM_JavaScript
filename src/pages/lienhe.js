
import Header from '../components/header';
import Footer from '../components/footer';

const HomePage = {
    async render() {
        return /* html */`
        <div class="max-w-15xl mx-auto"> 
            <div id="header">
                ${Header.render()}
            </div>

            <main class="grid grid-cols-8 gap-3 my-2 relative">
				<div id="contact" class="col-span-8 bg-[#fafafa]">
					<h2 class="text-center text-black text-2xl font-bold my-3">Liên Hệ Với Chúng Tôi</h2>
					<div class="grid grid-cols-6 gap-3 my-3">
						<div id="map" class="col-span-4 border border-gray-300">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.562813340047!2d105.75026011488374!3d21.050171985986807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454e8a4d0bed7%3A0xd6b982ecb25fb149!2zxJDhu6ljIERp4buFbiwgUGjDumMgRGnhu4VuLCBC4bqvYyBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1642427513056!5m2!1svi!2s" width="846" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
						</div>
					<form action="" class="col-span-2 border border-red py-2 px-4 text-orange-400">
						<h2 class="font-bold text-center text-2xl">Thông Tin Liên Hệ</h2>
						<div class="form-group">
							<label for="" class="block py-2 font-bold text-lg">Họ và tên</label>
							<input type="text" class="border border-black w-full px-2 py-2" placeholder="Họ và tên...">
						</div>
						<div class="form-group">
							<label for="" class="block py-2 font-bold text-lg">Email</label>
							<input type="text" class="border border-black w-full px-2 py-2" placeholder="Email...">
						</div>
						<div class="form-group">
							<label for="" class="block py-2 font-bold text-lg">Số Điện Thoại</label>
							<input type="number" class="border border-black w-full px-2 py-2" placeholder="Số Điện Thoại...">
					</div>
					<div class="form-group">
						<label for="" class="block py-2 font-bold text-lg">Tin Nhắn</label>
						<textarea class="border border-black w-full px-1 py-1" cols="1" rows="6"></textarea>
					</div>
					<div class="text-center">
						<button type="submit" class="text-black bg-white font-bold text-xl px-4 py-2 border border-black hover:text-white hover:bg-black inline-block my-2">Gửi ngay</button>
					</div>
				</form>
			</div>
		</div>
			</main>

            
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