
const Address = () => {
  return (
    <div className="w-full max-w-4xl p-6">
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        {/* Row 1 */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Property name as identifier<span className="text-red-500">*</span></label>
          <input type="text" defaultValue="Dallas apartments complex" className="w-full border border-gray-300 rounded-lg p-2 text-gray-500" />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Total apartment unit<span className="text-red-500">*</span></label>
          <input type="number" defaultValue="50" className="w-full border border-gray-300 rounded-lg p-2  text-gray-500" />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Property website <span className="text-gray-400">(optional)</span></label>
          <input type="url" placeholder="https://" className="w-full border border-gray-300 rounded-lg p-2 text-gray-500" />
        </div>

        {/* Row 2 */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Country/Region<span className="text-red-500">*</span></label>
          <select className="w-full border border-gray-300 rounded-lg p-2 text-gray-500">
            <option>Choose country</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Street address<span className="text-red-500">*</span></label>
          <input type="text" defaultValue="111 Austin Ave" className="w-full border border-gray-300 rounded-lg p-2 text-gray-500" />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Apt, suite, unit <span className="text-gray-400">(if applicable)</span></label>
          <input type="text" defaultValue="123" className="w-full border border-gray-300 rounded-lg p-2 text-gray-500" />
        </div>

        {/* Row 3 */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">City/Town<span className="text-red-500">*</span></label>
          <input type="text" defaultValue="Dallas" className="w-full border border-gray-300 rounded-lg p-2 text-gray-500" />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">State/Territory</label>
          <select className="w-full border border-gray-300 rounded-lg p-2 text-gray-500">
            <option>Choose state</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Zip code<span className="text-red-500">*</span></label>
          <input type="text" defaultValue="75061" className="w-full border border-gray-300 rounded-lg p-2 text-gray-500" />
        </div>
      </form>

      {/* Submit */}
      <div className="mt-6 flex justify-end">
        <button className="bg-[#316EED] cursor-pointer hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium">
          Add
        </button>
      </div>
    </div>
  );
};

export default Address;
