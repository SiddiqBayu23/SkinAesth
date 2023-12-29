import Logo from '/assets/images/subscribe.png';
import { FaXmark } from "react-icons/fa6";

const LoginModalComponent = ({ handleCloseModal, handleOpenModal, email, handleChangeEmail, password, handleChangePassword, handleLogin }) => (
    <section className="login__modal w-full md:w-1/2 lg:w-1/3 absolute bg-white rounded border border-gray-400 left-1/2 transform -translate-x-1/2">
    <div className="px-6 md:px-12 py-8">
        <div className="login__modal__content">
            <div className="login__modal__header mb-6 md:mb-8">
                <button className='flex justify-end w-full' onClick={handleCloseModal}>
                    <FaXmark className='text-xl' />
                </button>
            </div>
            <div className="login__modal__img">
                <img src={Logo} alt="Modal Logo" className='mx-auto block w-52' />
            </div>
            <form className='login__modal__form my-6'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="email" className='font-manrope text-sm text-gray-400'>Email</label>
                        <input type="email" name='email' id='email' className='px-4 py-3 rounded-md border border-gray-400' value={email} onChange={handleChangeEmail} />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="password" className='font-manrope text-sm text-gray-400'>Password</label>
                        <input type="password" name='password' id='password' className='px-4 py-3 rounded-md border border-gray-400' value={password} onChange={handleChangePassword} />
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <input type="checkbox" name='tetap' id='tetap' />
                            <label htmlFor="tetap" className='font-manrope text-sm text-gray-400'>Tetap Login</label>
                        </div>
                    </div>
                    <div className='block mx-auto'>
                        <button className='button button--primary w-full' onClick={handleLogin}>LOGIN SKIN AESTH</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div className="login__modal__footer py-6 px-6 md:px-12 bg-pink-200">
        <div className='flex items-center justify-center gap-2'>
            <p className='text-sm font-manrope'>Belum memiliki akun?</p>
            <button className='font-semibold font-manrope text-pink-400' onClick={() => handleOpenModal('register')}>Daftar Sekarang</button>
        </div>
    </div>
</section>
);

export default LoginModalComponent;