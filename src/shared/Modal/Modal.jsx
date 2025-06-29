import { assets } from "../../assets/assets";

const Modal = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/5 bg-opacity-40 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl relative">
        <div className="flex justify-between bg-[#f4f4f4] overflow-hidden px-6 py-2.5 rounded-t-xl">
          <p className="text-base font-medium text-gray-800">{title}</p>
          <button
            onClick={onClose}
            className="text-gray-500 cursor-pointer hover:text-gray-700 text-xl"
          >
            <img src={assets.crossIcon} alt="Close" className="w-5 h-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal
