import { useState } from "react";
import { assets } from "../assets/assets";
import Address from "../shared/Forms/Address";
import Modal from '../shared/Modal/Modal'
import LeasingInfo from "../shared/Forms/LeasingInfo";

const CondominiumPage = () => {
  const [modalKey, setModalKey] = useState(null);
  const handleClose = () => setModalKey(null)

  const renderModalContent = () => {
    switch (modalKey) {
      case "Property address":
        return <Address />;
      case "Leasing info":
        return <LeasingInfo />;
      default:
        return null;
    }
  };


  const fields = [
    { label: "Property address", required: true },
    { label: "Pet fees (Optional, add fees if you allow pet)" },
    { label: "Leasing info", required: true },
    { label: "Parking (Optional)" },
    { label: "Charges", required: true },
    { label: "Nearest educational institution (Optional but recommended)" },
    { label: "Rent frequency & payment reminder", required: true },
    { label: "Nearest stations (Optional but recommended)" },
    { label: "Application agreement (Optional)" },
    { label: "Nearest landmark (Optional but recommended)" },
    { label: "About the property (Optional)" },
    { label: "Utilities provider (Optional but recommended)" },
    { label: "Community's amenity/features (Optional but recommended)" },
  ];

  return (
    <div className="max-w-6xl mx-auto py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[22px] font-semibold text-gray-900 leading-7">Condominiums information</h1>
        <button className="text-[14px] text-blue-600 hover:underline font-medium leading-5">Save & Exit</button>
      </div>

      {/* Grid Info Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3 mb-8">
        {fields.map((item, index) => {
          const [main, optional] = item.label.split(" (");
          return (
            <div
              key={index}
              className="flex justify-between items-center h-12 border border-gray-200 rounded-lg px-4 py-0 hover:border-gray-300 transition-colors"
            >
              <span className="text-[14px] text-gray-700 leading-5">
                {main}
                {item.required && <span className="text-red-500 ml-1">(Required)</span>}
                {!item.required && optional && (
                  <span className="text-gray-400 ml-1">({optional}</span>
                )}
              </span>
              <button onClick={()=>setModalKey(item.label)} className="text-[14px] text-blue-600 hover:underline font-medium leading-5 whitespace-nowrap">
                + Add
              </button>
            </div>
          );
        })}
      </div>

      {/* Modal  */}
      <Modal isOpen={!!modalKey} onClose={handleClose} title={modalKey}>
        {renderModalContent()}
      </Modal>

      {/* Gallery Section */}
      <div className="mb-8">
        <p className="text-sm text-gray-700 mb-2 font-medium">
          Property gallery <span className="text-xs text-gray-500">(It’s not unit photos*)</span>
        </p>

        {/* Featured Photo */}
        <div className="flex flex-col md:flex-row gap-6 items-start w-full">
          {/* Featured Photo */}
          <div className="w-full md:w-auto">
            <p className="text-sm font-medium text-gray-700 mb-2">Featured photo*</p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Cover Photo Upload */}
              <label className="w-full sm:w-56 h-50 border bg-gray-50 border-dashed rounded-lg flex flex-col justify-center items-center text-gray-400 hover:bg-gray-100 cursor-pointer relative overflow-hidden">
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <img src={assets.upload} alt="Upload" className="w-5 h-5 mb-1" />
                <p className="text-xs">Upload cover photo</p>
                <p className="text-[10px] text-gray-400">1 image only</p>
              </label>

              {/* Other Uploads */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 w-full sm:w-auto">
                {Array(4)
                  .fill(null)
                  .map((_, idx) => (
                    <label
                      key={idx}
                      className="w-full sm:w-24 h-24 border border-dashed bg-gray-50 rounded-lg flex justify-center items-center text-gray-400 hover:bg-gray-100 cursor-pointer relative overflow-hidden"
                    >
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <img src={assets.upload} alt="Upload" className="w-5 h-5" />
                    </label>
                  ))}
              </div>
            </div>
          </div>

          {/* More Photos */}
          <div className="w-full md:w-auto">
            <p className="text-sm font-medium text-gray-700 mb-2">
              More photos <span className="text-gray-400 text-xs">(optional)</span>
            </p>
            <div className="grid grid-cols-2 gap-2">
              {Array(4)
                .fill(null)
                .map((_, idx) => (
                  <label
                    key={idx}
                    className="w-full sm:w-24 h-24 border bg-gray-50 border-dashed rounded-lg flex justify-center items-center text-gray-400 hover:bg-gray-100 cursor-pointer relative overflow-hidden"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <img src={assets.upload} alt="Upload" className="w-5 h-5" />
                  </label>
                ))}
            </div>
          </div>
        </div>
      </div>

      
      {/* Video Upload */}
      <div className="space-y-4 mb-10">
        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary
            className="flex items-center justify-between gap-1.5 rounded-md border border-gray-300 
             p-4 text-gray-900"
          >
            <h2 className="text-lg font-medium">Video <span className="text-gray-600">(optional)</span></h2>

            <svg
              className="size-5 shrink-0 border rounded-full transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <div className="w-full h-28 border-1 border-dashed rounded-lg flex justify-center items-center text-gray-400 hover:bg-gray-50 cursor-pointer">
            <img src={assets.upload} alt="Upload" className="w-6 h-6 mr-2" />
            <span className="text-sm">Upload video</span>
          </div>
        </details>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center border-t pt-4">
        <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">Back</button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-sm font-medium">
          Next
        </button>
      </div>
    </div>
  );
};

export default CondominiumPage;
