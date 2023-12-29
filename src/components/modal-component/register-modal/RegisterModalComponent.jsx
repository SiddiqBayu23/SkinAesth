import Logo from '/assets/images/subscribe.png';
import { FaXmark } from "react-icons/fa6";

const RegisterModalComponent = ({ handleCloseModal, handleOpenModal, firstName, lastName, username, email, password, jenisKelamin, handleChangeFirstName, handleChangeLastName, handleChangeUsername, handleChangeEmail, handleChangePassword, handleChangeJenisKelamin, handleSubmit }) => (
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
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="depan" className='font-manrope text-sm text-gray-400'>Nama Depan <span className='text-danger-500'>*</span></label>
                        <input type="text" name='depan' id='depan' className='px-4 py-3 rounded-md border border-gray-400' value={firstName} onChange={handleChangeFirstName} />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="belakang" className='font-manrope text-sm text-gray-400'>Nama Belakang <span className='text-danger-500'>*</span></label>
                        <input type="text" name='belakang' id='belakang' className='px-4 py-3 rounded-md border border-gray-400' value={lastName} onChange={handleChangeLastName} />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <label htmlFor="username" className='font-manrope text-sm text-gray-400'>Username <span className='text-danger-500'>*</span></label>
                    <input type="text" name='username' id='username' className='px-4 py-3 rounded-md border border-gray-400' value={username} onChange={handleChangeUsername} />
                </div>
                <div className='flex flex-col gap-4'>
                    <label htmlFor="email" className='font-manrope text-sm text-gray-400'>Email <span className='text-danger-500'>*</span></label>
                    <input type="text" name='email' id='email' className='px-4 py-3 rounded-md border border-gray-400' value={email} onChange={handleChangeEmail} />
                </div>
                <div className='flex flex-col gap-4'>
                    <label htmlFor="password" className='font-manrope text-sm text-gray-400'>Password</label>
                    <input type="password" name='password' id='password' className='px-4 py-3 rounded-md border border-gray-400' value={password} onChange={handleChangePassword} />
                </div>
                <div className='flex flex-col gap-4'>
                    <label className='font-manrope text-sm text-gray-400'>Jenis Kelamin</label>
                    <div className='flex items-center gap-6'>
                        <div className='flex items-center gap-2'>
                            <input type="radio" name='jenisKelamin' id='perempuan' value="Perempuan" onChange={handleChangeJenisKelamin} />
                            <label htmlFor='perempuan' className='font-manrope text-sm text-gray-400'>Perempuan</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="radio" name='jenisKelamin' id='laki' value="Laki-Laki" onChange={handleChangeJenisKelamin} />
                            <label htmlFor='laki' className='font-manrope text-sm text-gray-400'>Laki-Laki</label>
                        </div>
                    </div>
                </div>
                <div className='block mx-auto'>
                    <button className='button button--primary w-full' onClick={handleSubmit}>DAFTAR SEKARANG</button>
                </div>
            </form>
        </div>
    </div>
    <div className="login__modal__footer py-4 px-6 md:px-12 bg-pink-200">
        <div className='flex items-center justify-center gap-2'>
            <p className='text-sm font-manrope'>Sudah memiliki akun?</p>
            <button className='font-manrope font-semibold text-pink-400' onClick={() => handleOpenModal('login')}>Masuk Sekarang</button>
        </div>
    </div>
</section>
);

export default RegisterModalComponent;