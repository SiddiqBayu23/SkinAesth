import Logo from '/assets/images/subscribe.png';
import { FaXmark } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const ForgotModalComponent = ({ handleCloseModal, handleOpenModal }) => (
    <section className="login__modal w-1/3 absolute bg-white rounded border border-gray-400 left-[32%]">
        <div className="px-12 py-8">
            <div className="login__modal__content">
                <div className="login__modal__header flex items-center justify-between mb-8">
                    <p className='font-manrope text-sm font-semibold'>LUPA PASSWORD</p>
                    <button onClick={handleCloseModal}>
                        <FaXmark className='text-xl' />
                    </button>
                </div>
                <div className="login__modal__img">
                    <img src={Logo} alt="Modal Logo" className='mx-auto block w-52' />
                    <p className='font-manrope text-sm text-center mt-4'>Gunakan  alamat email untuk mengatur ulang password kamu</p>
                </div>
                <form className='login__modal__form my-8'>
                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col gap-6'>
                            <label htmlFor="email" className='font-manrope text-sm text-gray-400 flex items-center gap-2'>
                                <MdOutlineMail className='text-xl' />
                                Alamat email
                            </label>
                            <input type="text" name='email' id='email' className='px-4 py-3 rounded-md border border-gray-400' />
                        </div>
                        <div className='block mx-auto'>
                            <button className='button button--primary underline'>KIRIM</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="login__modal__footer py-6 px-12 bg-pink-200">
            <div className='flex items-center justify-center gap-2'>
                <p className='text-sm font-manrope'>Kembali ke halaman</p>
                <button className='text-sm text-pink-400 font-semibold font-manrope' onClick={() => handleOpenModal('login')}>Login</button>
                <p className='text-sm font-manrope'>atau</p>
                <button className='text-sm text-pink-400 font-semibold font-manrope' onClickCapture={() => handleOpenModal('register')}>Daftar</button>
            </div>
        </div>
    </section>
);

export default ForgotModalComponent;