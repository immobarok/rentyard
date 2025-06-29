import React from 'react'
import { assets } from '../assets/assets'

const RealtorVerification = () => {
  return (
    <div className="border border-gray-200 rounded-lg w-full mx-auto overflow-hidden">
      <div className="border-b border-gray-200 py-2 px-4 bg-[#f4f4f4] rounded-t-lg">
        <p className="font-medium">Proof of ownership</p>
      </div>
      {/* Content */}
      <div className="p-4 grid grid-cols-3 gap-3 items-center">
        {/* Upload area */}
        <div className='space-y-1'>
          <p className="text-gray-800">Ownership doc *</p>
          <input type="text" className='border w-full py-[7px] p-2 rounded border-gray-200 ' placeholder='000000000' />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Additional document for realtor
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
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Agreement with landlord*
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
      </div>
    </div>
  )
}

export default RealtorVerification