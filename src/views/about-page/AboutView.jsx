import About from '/assets/images/about.png';
import Spech from '/assets/icons/spech.svg';
import Macam from '/assets/icons/macam.svg';
import Artikel from '/assets/icons/artikel.svg';
import Forum from '/assets/icons/forum.svg';

const AboutView = () => (
    <div className="about">
        <section className="about__header bg-pink-400">
            <div className="custom-container">
                <div className="flex flex-col gap-4 items-center my-32">
                    <p className="about__title font-manrope text-sm text-white">SHORT STORY ABOUT US</p>
                    <h1 className="about__subtitle text-4xl font-playfair font-semibold text-white">About Us</h1>
                </div>
            </div>
        </section>

        {/* About Content */}
        <section className="about__content bg-pink-200">
            <div className="custom-container">
            <div className="about__content__box flex flex-col md:flex-row items-center justify-center relative bg-gray-800 px-8 sm:px-12 md:px-16 lg:px-24 py-12 md:py-16 lg:py-20 my-12 md:my-16 lg:my-24">
            <img src={About} alt="About Image" className="w-full md:w-1/2 lg:w-[26rem] order-2 md:order-1 mb-6 md:mb-0 md:mr-6 lg:mr-12" />
            <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left order-1 md:order-2">
            <p className="about__title font-manrope text-sm text-white">ABOUT US</p>
            <h1 className="about__subtitle text-4xl md:text-5xl lg:text-6xl font-playfair font-semibold text-white">Style is a Reflection of your Attitude & your Personality</h1>
            <p className="about__text font-manrope text-light text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words which don't look even many desktop publishing packages.</p>
      </div>
    </div>
  </div>
</section>

        {/* About Values Section */}
        <section className='about__values my-40'>
            <div className="custom-container">
                <p className="about__title font-manrope text-sm text-gray-400 text-center">OUR VALUES</p>
                <div className="about__values__box flex flex-col items-center gap-6 mt-20">
                    <div className='flex items-center gap-12 w-1/2'>
                        <div className='p-4 bg-pink-200 border border-gray-900'>
                            <img src={Spech} alt="Icon" className='w-32' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='about__subtitle text-2xl font-playfair font-semibold'>Produk Skincare Sesuai Jenis Kulit</h1>
                            <p className='about__text font-manrope text-light'>SkinAesth membantu Anda merawat kulit dengan panduan produk skincare sesuai jenis kulit Anda, mengakui bahwa setiap kulit unik. Kami menyediakan informasi merek dan produk untuk keputusan yang tepat.</p>
                        </div>
                    </div>
                    <hr className='border-[05.px] border-gray-400 w-1/2 my-4' />
                    <div className='flex items-center gap-12 w-1/2'>
                        <div className='p-4 bg-pink-200 border border-gray-900'>
                            <img src={Macam} alt="Icon" className='w-32' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='about__subtitle text-2xl font-playfair font-semibold'>Macam Kategori Skincare</h1>
                            <p className='about__text font-manrope text-light'>SkinAesth menyajikan berbagai kategori skincare untuk memenuhi kebutuhan kulit Anda, mulai dari cleanser hingga sunscreen. Kami menyediakan informasi tentang produk anti-penuaan, perawatan jerawat, dan perawatan kulit alami untuk membantu Anda menemukan yang terbaik di setiap kategori.</p>
                        </div>
                    </div>
                    <hr className='border-[05.px] border-gray-400 w-1/2 my-4' />
                    <div className='flex items-center gap-12 w-1/2'>
                        <div className='p-4 bg-pink-200 border border-gray-900'>
                            <img src={Artikel} alt="Icon" className='w-32' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='about__subtitle text-2xl font-playfair font-semibold'>Artikel Mengenai Perawatan Kulit</h1>
                            <p className='about__text font-manrope text-light'>SkinAesth menyediakan beragam artikel informatif dan terbaru tentang perawatan kulit, termasuk tips kecantikan, panduan perawatan kulit harian, dan pemahaman mendalam tentang masalah kulit.</p>
                        </div>
                    </div>
                    <hr className='border-[05.px] border-gray-400 w-1/2 my-4' />
                    <div className='flex items-center gap-12 w-1/2'>
                        <div className='p-4 bg-pink-200 border border-gray-900'>
                            <img src={Forum} alt="Icon" className='w-32' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='about__subtitle text-2xl font-playfair font-semibold'>Forum Diskusi Tentang Skincare</h1>
                            <p className='about__text font-manrope text-light'>Melalui forum diskusi SkinAesth, Anda dapat aktif berpartisipasi, mengajukan pertanyaan, serta berbagi pengalaman pribadi Anda seputar skincare. Ini adalah wadah yang ideal untuk bertemu dengan individu yang memiliki minat serupa dan mendapatkan saran berharga dari sesama pengguna produk skincare.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default AboutView;