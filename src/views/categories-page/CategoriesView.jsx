import { FaCaretDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const CategoriesView = ({ products, handleNavigateDetail, showFilters, toggleFilter, handleFilterChange, filters, handleRemoveFilter }) => (
    <div className="custom-container">
  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
    <div className="flex items-center gap-2">
      <p className="text-gray-400 text-sm font-manrope">Home</p>
      <p className="text-gray-400 text-sm font-manrope">&gt;</p>
      <p className="font-medium text-sm font-manrope">Categories</p>
    </div>
    <h1 className="text-xl font-semibold font-manrope mt-4 lg:mt-0">
      Skincare <span className='text-sm font-semibold'>({products.length})</span>
    </h1>
  </div>
  <div className="flex flex-col lg:flex-row gap-6 my-6">
    <div className="flex-none">
      <h2 className="text-lg font-semibold font-manrope">Filter</h2>
      <hr className='my-2' />
      {filters && Object.values(filters).some(array => array.length > 0) && (
        <>
          <p className="text-sm font-semibold font-manrope">Applied Filters</p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {Object.entries(filters).map(([key, values]) => (
              values.map(value => (
                <div key={`${key}-${value}`} className="px-4 py-2 border border-gray-400 text-sm text-center rounded-md flex items-center justify-between">
                  {`${value}`}
                  <button onClick={() => handleRemoveFilter(key, value)}>
                    <IoClose />
                  </button>
                </div>
              ))
            ))}
          </div>
          <hr className='my-4' />
        </>
      )}
      <div className="flex flex-col gap-4 my-4">
        <div className="flex flex-col gap-4 w-full lg:w-52 px-4 py-4 border border-gray-400 rounded-md">
          <button onClick={() => toggleFilter('category')} className="font-medium font-manrope items-center flex justify-between text-sm">
            Category
            <FaCaretDown />
          </button>
          {showFilters.category && (
            <ul className="w-full flex flex-col gap-3 text-sm">
              <hr className="mb-2" />
              {["Cleanser", "Toner", "Moisturizer", "Facial Wash", "Sunscreen", "Serum"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={item.toLowerCase()}
                    onChange={handleFilterChange}
                    value={item}
                    name="category"
                    checked={filters.category?.includes(item) || false}
                  />
                  <label htmlFor={item.toLowerCase()}>{item}</label>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-52 px-4 py-4 border border-gray-400 rounded-md">
          <button onClick={() => toggleFilter('skinCondition')} className="font-medium font-manrope items-center flex justify-between text-sm">
            Skin Conditions
            <FaCaretDown />
          </button>
          {showFilters.skinCondition && (
            <ul className="w-full flex flex-col gap-3 text-sm">
              <hr className="mb-2" />
              {["Kulit Kering", "Kulit Berminyak", "Kulit Normal", "Kulit Kombinasi", "Kulit Sensitif"].map((item) => (
                <li className="flex items-center gap-2" key={item}>
                  <input type="checkbox" id={item.toLowerCase()} onChange={handleFilterChange} value={item} name="skinCondition" checked={filters.skinCondition?.includes(item) || false} />
                  <label htmlFor={item.toLowerCase()}>{item}</label>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-52 px-4 py-4 border border-gray-400 rounded-md">
          <button className="font-medium font-manrope items-center flex justify-between text-sm">
            Featured
            <FaCaretDown />
          </button>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-52 px-4 py-4 border border-gray-400 rounded-md">
          <button onClick={() => toggleFilter('price')} className="font-medium font-manrope items-center flex justify-between text-sm">
            Price
            <FaCaretDown />
          </button>
          {showFilters.price && (
            <ul className="w-full flex flex-col gap-3 text-sm">
              <hr className="mb-2" />
              {["UpTo100", "Under100"].map((item) => (
                <li className="flex items-center gap-2" key={item}>
                  <input type="checkbox" id={item.toLowerCase()} onChange={handleFilterChange} value={item.toLowerCase()} name="price" checked={filters.price?.includes(item.toLowerCase()) || false} />
                  <label htmlFor={item.toLowerCase()}>{item}</label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div className="rounded-md border border-gray-400 overflow-hidden h-fit px-4 py-6" key={product.product_id} onClick={() => handleNavigateDetail(product.id)}>
          <div className="h-72 overflow-hidden">
            <img src={product.imageUrl} alt="Product Image" className='block mx-auto' />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-lg font-semibold font-manrope text-pink-300'>{product.product_name}</p>
            <p className='font-manrope text-gray-400'>{product.product_subname}</p>
            <p className='font-semibold font-manrope text-gray-400'>Rp{product.product_price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
);

export default CategoriesView;