import { assets } from "../../assets/assets"

const LeasingInfo = () => {
  return (
    <div className="w-full max-w-4xl p-6">
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
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
          <label className="block mb-1 font-medium text-gray-700">Leasing manager email<span className="text-red-500">*</span></label>
          <input type="text" defaultValue="leasing@rentyeard.com" className="w-full border border-gray-300 rounded-lg p-2 text-gray-500" />
        </div>

        <div className="flex items-center gap-2 h-">
          <input type="checkbox"  />
          <p className="text-sm font-medium">Address (same as property)</p>
        </div>
      </form>

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