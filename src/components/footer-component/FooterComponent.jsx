import FooterIcon from '/assets/icons/beauty.svg';
import { FaDiscord, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterComponent = () => (
    <section className="bg-[#FBE5E3] py-12">
  <div className="custom-container">
    <div className="footer__header flex flex-col lg:flex-row items-center justify-between mb-8 lg:mb-12">
      <div className="footer__brand flex items-center lg:mb-0">
        <img src="https://i.ibb.co/4tnctDK/Logo-Skinaesth.png" alt="Footer Icon" className="w-16" />
        <p className="font-playfair text-xl lg:text-2xl font-semibold">SkinAesth</p>
      </div>
      <div className="footer__sosmed flex items-center gap-4">
        <div className="footer__sosmed__item border border-pink-500 rounded-md p-4">
          <FaInstagram />
        </div>
        <div className="footer__sosmed__item border border-pink-500 rounded-md p-4">
          <FaDiscord />
        </div>
      </div>
    </div>

    <div className="footer__content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Content Item 1 */}
      <div className="footer__content__item mb-8 sm:mb-0">
        <h1 className="footer__title text-xl font-manrope font-semibold mb-4">How Can We Help?</h1>
        <div className="footer__content__item__list flex flex-col gap-2">
          <p className="footer__content__text font-manrope">Home</p>
          <p className="footer__content__text font-manrope">About Us</p>
          <p className="footer__content__text font-manrope">Category</p>
          <p className="footer__content__text font-manrope">Blog</p>
          <p className="footer__content__text font-manrope">Subscribe</p>
        </div>
      </div>

      {/* Content Item 2 */}
      <div className="footer__content__item mb-8 sm:mb-0">
        <h1 className="footer__title text-xl font-manrope font-semibold mb-4">Products</h1>
        <div className="footer__content__item__list flex flex-col gap-2">
          <p className="footer__content__text font-manrope">Toner</p>
          <p className="footer__content__text font-manrope">Sunscreen</p>
          <p className="footer__content__text font-manrope">Serum</p>
          <p className="footer__content__text font-manrope">Moisturizer</p>
          <p className="footer__content__text font-manrope">Cleanser</p>
          <p className="footer__content__text font-manrope">Facial Wash</p>
        </div>
      </div>

      {/* Content Item 3 */}
      <div className="footer__content__item">
        <h1 className="footer__title text-xl font-manrope font-semibold mb-4">Keep In Touch With Beautya</h1>
        <p className="footer__subtitle font-manrope mb-4">
          Join the Beautya newsletter and be the first to hear about news, offers, and skincare advice
        </p>
        <form className="flex flex-col gap-4">
          <div className="form__groups flex items-center gap-4">
            <input
              type="email"
              name="email"
              id="email"
              className="px-6 py-4 border-b border-gray-400 bg-transparent w-full"
              placeholder="Email Address"
            />
            <button className="px-6 py-3 border border-gray-900 rounded-md">Subscribe</button>
          </div>
          <div className="form__groups flex items-center gap-4">
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree" className="text-sm font-light">
              By submitting your email, you agree to receive advertising emails from Beautya. Please review our Privacy Policy, which includes our Financial Incentive Notice for CA residents.
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div className="footer__copyright bg-pink-300 mt-8">
    <div className="custom-container">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <p className="text-sm font-light mb-4 lg:mb-0">© 2023 SkinAesth. All Rights Reserved</p>
        <p className="text-sm font-light">Terms & Conditions | Privacy Policy</p>
      </div>
    </div>
  </div>
</section>
);

export default FooterComponent;