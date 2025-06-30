import { useState } from "react";
import { assets } from "../../assets/assets";

const Charges = () => {
  const [selected, setSelected] = useState({
    value: 100,
    label: 'All 18+ applicant'
  });
  const [open, setOpen] = useState(false);

  const options = [
    { value: 100, label: 'All 18+ applicant' },
    { value: 200, label: 'All 25+ applicant' },
    { value: 300, label: 'All applicants' },
  ];

  return (
    <div className="w-full max-w-4xl p-6 text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Applicant Fee (one-time)<span className="text-red-500">*</span>
          </label>
          <div
            className="border border-gray-300 rounded-lg p-2 cursor-pointer flex items-center justify-between gap-4"
            onClick={() => setOpen(!open)}
          >
            <div className="flex justify-between w-full items-center text-gray-700">
              <span className="w-[30%]">{selected.value}</span>
              <span className="w-[60%] text-right">{selected.label}</span>
              <img src={assets.downArrow} className="w-5 h-5" alt="" />
            </div>
          </div>

          {/* Dropdown options */}
          {open && (
            <div className="absolute mt-1 bg-white border border-gray-300 rounded-lg shadow z-10 w-[45%]">
              {options.map((option, i) => (
                <div
                  key={i}
                  className="p-2 hover:bg-gray-100 flex justify-between items-center cursor-pointer"
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                  }}
                >
                  <span className="w-[30%]">{option.value}</span>
                  <span className="w-[60%] text-right">{option.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Admin Fee Input */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Admin fee (one-time)<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            defaultValue="Dallas"
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-500"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-6 flex justify-between">
        <div className="flex gap-2 items-center">
          <img src={assets.infromationCircle} className="w-5 h-5" alt="" />
          <p>Type 0 if charges not applicable</p>
        </div>
        <button className="bg-[#316EED] cursor-pointer hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium">
          Add
        </button>
      </div>
    </div>
  );
};

export default Charges;
