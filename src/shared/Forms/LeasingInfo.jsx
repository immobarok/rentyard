import { useState } from "react"
import { assets } from "../../assets/assets"

const LeasingInfo = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div className="w-full max-w-4xl p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        {/* Row 1 */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Leasing manager name<span className="text-red-500">*</span></label>
          <input type="text" defaultValue="Alex Johan" className="w-full border border-gray-300 rounded-lg p-2 text-gray-500" />
        </div>
        <div >
          <label className="block mb-1 font-medium text-gray-700">Leasing manager phone number<span className="text-red-500">*</span></label>
          <div className="flex">
            <div className="flex gap-1 items-center px-3 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
              <img src={assets.bdFlag} alt="" />
              <img src={assets.downArrow} alt="" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+880"
              className="w-full px-3 py-2 border border-gray-300 rounded-r-lg"
              required
            />
          </div>
        </div>

        {/* Row 2 */}


        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Leasing manager email<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            defaultValue="leasing@rentyeard.com"
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-500"
          />
        </div>

        <div className="flex items-center gap-2 mt-0 sm:mt-5">
          <input onClick={handleChecked} type="checkbox" className="mt-0.5" />
          <p className="text-sm font-medium leading-none">
            Address (same as property)
          </p>
        </div>

      </div >
      {/* Epandable  */}

      {
        isChecked &&
        <div>
          <div className="grid grid-cols-3 w-full gap-2 my-2 text-sm">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Street Address<span className="text-red-500">*</span>
              </label>
              <input type="text" defaultValue="Dallas apartments complex" className="w-full border border-gray-300 rounded-lg p-2 text-gray-500" />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Apt, suit, Unit<span className="text-red-500">*</span>
              </label>
              <input type="number" defaultValue="123" className="w-full border border-gray-300 rounded-lg p-2  text-gray-500" />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                City/Town<span className="text-red-500">*</span>
              </label>
              <input type="number" defaultValue="Dallas" className="w-full border border-gray-300 rounded-lg p-2  text-gray-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                State/Territory<span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                className="w-full border rounded-lg border-gray-300 p-[7px] text-sm text-gray-600 focus:outline-none "
              >
                <option value="">Choose State</option>
                <option value="chittagong">Chittagong</option>
                <option value="rajshahi">Rajshahi</option>
                <option value="dhaka">Dhaka</option>
                <option value="sylhet">Sylhet</option>
                <option value="khulna">Khulna</option>
                <option value="barisal">Barisal</option>
                <option value="rangpur">Rangpur</option>
                <option value="mymensingh">Mymensingh</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                City/Town<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      }
      <hr className="my-6 text-gray-200" />


      {/* Submit */}
      <div className="mt-6 flex justify-end">
        <button className="bg-[#316EED] cursor-pointer hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium">
          Add
        </button>
      </div>
    </div>
  )
}

export default LeasingInfo