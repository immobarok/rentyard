import { useLocation } from 'react-router';
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  // label based path
  let buttonLabel = "";
  if (path === "/") {
    buttonLabel = "Exit";
  } else if (path === "/condominiums") {
    buttonLabel = "Save & Exit";
  } else if (path === "/profile-info") {
    buttonLabel = "Save";
  }

  return (
    <div className='flex justify-between px-4 sm:px-16 md:px-26 py-4 border-b border-gray-200 items-center'>
      <img src={logo} alt="RentYard Logo" className="h-8" />
      {buttonLabel && (
        <button className='px-4 py-1.5 text-base font-medium border border-gray-300 rounded-lg cursor-pointer'>
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default Navbar;
