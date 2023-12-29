import Subscribe from '/assets/images/subscribe.png';

const SubscribeView = () => (
    <div className="subscribe">
    <section className="subscribe__header bg-pink-400">
        <div className="custom-container">
            <div className="flex flex-col gap-4 items-center my-16 md:my-32">
                <p className="subscribe__title font-manrope text-sm text-white">GET IN TOUCH WITH US</p>
                <h1 className="subscribe__subtitle text-4xl md:text-5xl font-playfair font-semibold text-white">Subscribe</h1>
            </div>
        </div>
    </section>

    {/* Subscribe Content */}
    <section className="subscribe__content my-16 md:my-40">
        <div className="custom-container">
            <div className="subscribe__content__box flex flex-col md:flex-row items-center justify-center gap-8">
                <img src={Subscribe} alt="Image" className="w-full md:w-96" />
                <div className="subscribe___info flex flex-col gap-4 md:w-1/3">
                    <p className="subscribe__title font-manrope text-sm text-gray-300">SKINAESTH</p>
                    <h1 className="subscribe__subtitle text-2xl md:text-4xl font-playfair font-semibold">Subscribe</h1>
                    <p className="subscribe__text text-sm md:text-base">Melalui forum diskusi SkinAesth dengan subscribe Discord, Anda dapat aktif berpartisipasi, mengajukan pertanyaan, serta berbagi pengalaman pribadi Anda seputar skincare. Ini adalah wadah yang ideal untuk bertemu dengan individu yang memiliki topik serupa dan mendapatkan saran berharga dari sesama pengguna produk skincare.</p>
                    <button className="button button--primary">JOIN DISCORD</button>
                </div>
            </div>
        </div>
    </section>
</div>
);

export default SubscribeView;