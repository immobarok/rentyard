import { assets } from '../assets/assets';

const OfficeInfo = () => {
  return (
    <div className="border border-gray-200 rounded-lg w-full mx-auto overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-200 py-2 px-4 bg-[#f4f4f4] rounded-t-lg">
        <p className="font-medium">Company & Office Info</p>
      </div>

      {/* Form Content */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {/* Company name */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Company name*</label>
          <input type="text" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Runyan trade center" />
        </div>

        {/* Company Identifier */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Company Identifier (EIN/TIN)*</label>
          <input type="text" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Name" />
        </div>

        {/* Job Title */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Your job title*</label>
          <input type="text" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Manager" />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Agreement with landlord/owner*
          </label>
          <label
            htmlFor="fileUpload"
            className="w-full h-10 flex items-center justify-center gap-2 p-2 border border-dashed border-gray-300 rounded bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <img src={assets.upload} alt="Upload icon" className="w-5 h-5" />
            <span className="text-sm font-medium">(Pdf only)</span>
            <input
              type="file"
              id="fileUpload"
              accept=".pdf"
              className="hidden"
            />
          </label>
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Country/Region*</label>
          <select className="w-full border border-gray-200 rounded px-3 py-2">
            <option>Choose country</option>
            <option>Bangladesh</option>
            <option>USA</option>
          </select>
        </div>

        {/* Street Address */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Street address*</label>
          <input type="text" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="111 Austin Ave" />
        </div>

        {/* Apt/unit */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Apt, suit, unit (if applicable)</label>
          <input type="text" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="3050" />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Phone number*</label>

          <div className="flex items-center gap-2 border border-gray-200 rounded px-3 py-2.5 focus-within:ring-2 focus-within:ring-blue-200">
            <div className="flex items-center gap-1 pr-3 border-r border-gray-300 h-full">
              <img src={assets.bdFlag} alt="BD Flag" className="w-5 h-4 object-cover" />
              <img src={assets.downArrow} alt="Dropdown Arrow" className="w-3 h-3" />
            </div>
            <input
              type="tel"
              placeholder="+880"
              className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>



        {/* Contact Email */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Contact email*</label>
          <input type="email" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="example@email.com" />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">City/Town*</label>
          <input type="text" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="Dallas" />
        </div>

        {/* State */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">State/Territory*</label>
          <select className="w-full border border-gray-200 rounded px-3 py-2">
            <option>Choose state</option>
            <option>Texas</option>
            <option>California</option>
          </select>
        </div>

        {/* Zip */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Zip code*</label>
          <input type="text" className="w-full border border-gray-200 rounded px-3 py-2" placeholder="75061" />
        </div>

        {/* File Upload */}

      </div>
    </div>
  );
};

export default OfficeInfo;
