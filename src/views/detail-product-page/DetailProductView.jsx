import { IoLocationOutline } from "react-icons/io5";

const DetailProductView = ({ product, tab, handleSetTab, recommended, like, handleNavigateDetail }) => (
    <>
    <div className="custom-container bg-[#FAF9F5]">
        <div className="flex items-center gap-2">
            <a href="/" className="text-gray-400 text-sm font-manrope">Home</a>
            <p className="text-gray-400 text-sm font-manrope">&gt;</p>
            <a href="#" className="font-medium text-sm font-manrope">{product.product_name}</a>
        </div>
        <div className="my-12 flex items-center gap-24">
            <div className='rounded-md h-96 overflow-hidden'>
                <img src={product.imageUrl} alt="Product Image" className='w-96 flex-none' />
            </div>
            <div className='flex flex-col gap-4 flex-wrap'>
                <h1 className='text-pink-300 font-bold font-manrope text-2xl'>{product.product_name}</h1>
                <p className='font-manrope font-medium'>{product.product_subname}</p>
                <p className='font-manrope font-medium text-sm text-gray-400'>{product.product_types}</p>
                <p className='font-manrope font-semibold text-lg'>Rp{product.product_price}</p>
                <a href={product.product_url} className='button button__with__icon button--primary my-8' target='_blank'>
                    <IoLocationOutline className='text-lg' />
                    Check In Branches Stock
                </a>
            </div>
        </div>
        <div className='my-12'>
            <div className='flex items-center gap-24'>
                <a href='#details' onClick={() => handleSetTab('details')} className={`font-semibold text-gray-500 font-manrope text-sm pb-2 ${tab === 'details' ? 'border-b-2 border-pink-400' : ''}`}>Product Details</a>
                <a href='#apply' onClick={() => handleSetTab('apply')} className={`font-semibold text-gray-500 font-manrope text-sm pb-2 ${tab === 'apply' ? 'border-b-2 border-pink-400' : ''}`}>How to Apply</a>
                <a href='#ingredients' onClick={() => handleSetTab('ingredients')} className={`font-semibold text-gray-500 font-manrope text-sm pb-2 ${tab === 'ingredients' ? 'border-b-2 border-pink-400' : ''}`}>Ingredient</a>
            </div>
            <hr />
            <div className='p-8 bg-white'>
                <div className='flex flex-col gap-4' id='details'>
                    <p className='text-pink-400 font-manrope font-semibold'>Product Details</p>
                    {product.product_details && product.product_details.split('\n').map((line, index) => (
                        <p key={index} className='text-sm font-manrope'>{line}</p>
                    ))}
                </div>
                <hr className='my-8' />
                <div className='flex flex-col gap-4' id='apply'>
                    <p className='text-pink-400 font-manrope font-semibold'>How to Apply</p>
                    {product.product_apply && product.product_apply.split('\n').map((line, index) => (
                        <p key={index} className='text-sm font-manrope'>{line}</p>
                    ))}
                </div>
                <hr className='my-8' />
                <div className='flex flex-col gap-4' id='ingredients'>
                    <p className='text-pink-400 font-manrope font-semibold'>Ingredient</p>
                    <p className='text-sm font-manrope'>Rp{product.product_ingredients}</p>
                </div>
            </div>
        </div>
        <div className="my-8 sm:my-12 md:my-16 lg:my-24">
    <h1 className="text-center font-manrope font-semibold text-lg">Recommended Skincare Routine</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-8">
        {recommended.map((product) => (
            <div className="rounded-md border border-gray-400 overflow-hidden h-fit bg-white px-4 py-6" key={product.product_id} onClick={() => handleNavigateDetail(product.id)}>
                <div className="h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                    <img src={product.imageUrl} alt="Product Image" className="block mx-auto w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-base sm:text-lg font-semibold font-manrope text-pink-300">{product.product_name}</p>
                    <p className="font-manrope text-gray-400 text-sm sm:text-base">{product.product_subname}</p>
                    <p className="font-semibold font-manrope text-gray-400 text-sm sm:text-base">Rp{product.product_price}</p>
                </div>
            </div>
        ))}
    </div>
</div>
    </div>
    <div className="custom-container bg-[#FBE5E3]">
    <h1 className="text-center font-manrope font-semibold text-lg mt-6">You May Also Like</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 mt-8">
        {like.map((product) => (
            <div className="rounded-md border border-gray-400 overflow-hidden h-fit bg-white px-4 py-6" key={product.product_id} onClick={() => handleNavigateDetail(product.id)}>
                <div className="h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                    <img src={product.imageUrl} alt="Product Image" className="block mx-auto w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-base sm:text-lg font-semibold font-manrope text-pink-300">{product.product_name}</p>
                    <p className="font-manrope text-gray-400 text-sm sm:text-base">{product.product_subname}</p>
                    <p className="font-semibold font-manrope text-gray-400 text-sm sm:text-base">Rp{product.product_price}</p>
                </div>
            </div>
        ))}
    </div>
</div>
    </>
);

export default DetailProductView;