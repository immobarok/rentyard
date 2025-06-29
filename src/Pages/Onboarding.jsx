import { useState } from "react";
import { assets } from "../assets/assets";
import Ownership from "../shared/Ownership";
import RealtorVerification from "../shared/RealtorVerification";
import OfficeInfo from "../shared/OfficeInfo";
import { useNavigate } from "react-router";

const Onboarding = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate()
  const propertyTypes = [
    {
      image: assets.homeIcon,
      title: "Single House Property",
      description: "Single unit house for single family"
    },
    {
      image: assets.apartment,
      title: "Apartments complex",
      description: "Multiple unit house for families"
    },
    {
      image: assets.building,
      title: "Condominiums",
      description: "Multiple unit house for families"
    }
  ];

  const roles = [
    {
      image: assets.key,
      title: "Landlord",
      description: "Owner of the property"
    },
    {
      image: assets.manager,
      title: "Reelker",
      description: "Manage property on behalf as owner"
    },
    {
      image: assets.parmanentJob,
      title: "Property management company",
      description: "For management company"
    }
  ];

  return (
    <div className="min-h-screen flex  flex-col px-4 py-12 sm:px-6">
      <div className="flex-1 max-w-6xl mx-auto w-full">
        {/* Property Type Section */}
        <section className="my-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Property type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {propertyTypes.map((property, index) => (
              <div
                onClick={() =>
                  selectedProperty === property.title
                    ? setSelectedProperty(null)
                    : setSelectedProperty(property.title)
                }
                key={index}
                className={`rounded-xl drop-shadow-sm p-6 
                  ${selectedProperty === property.title ? "bg-[#f9fbff] border border-[#316EED]" : "bg-white"} 
                  transition-all duration-300 hover:shadow-md cursor-pointer group`}
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-[#f9fbff] rounded-lg">
                    <img className="w-6 h-6" src={property.image} alt={property.title} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{property.title}</h3>
                    <p className="text-gray-500 text-sm">{property.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Role Selection Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Select your role</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <div
                key={index}
                onClick={() =>
                  selectedRole === role.title
                    ? setSelectedRole(null)
                    : setSelectedRole(role.title)
                }
                className={`rounded-xl drop-shadow-sm p-6 
                ${selectedRole === role.title ? "bg-[#f9fbff] border border-[#316EED]" : "bg-white"} 
                transition-all duration-300 hover:shadow-md cursor-pointer group`}
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-[#f9fbff] rounded-lg">
                    <img className="w-6 h-6" src={role.image} alt={role.title} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{role.title}</h3>
                    <p className="text-gray-500 text-sm">{role.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedProperty === 'Condominiums' && selectedRole === 'Landlord' && (
          <section className="my-6">
            <Ownership />
            <div className="flex gap-2 items-center mt-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="align-middle -mt-1"
              />
              <p className="text-sm leading-tight">
                Accept RentYard property adding terms & condition
              </p>
            </div>
          </section>
        )}
        {selectedProperty === 'Condominiums' && selectedRole === 'Reelker' && (
          <section className="my-6">
            <RealtorVerification />
            <div className="flex gap-2 items-center mt-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="align-middle -mt-1"
              />
              <p className="text-sm leading-tight">
                Accept RentYard property adding terms & condition
              </p>
            </div>
          </section>
        )}
        {selectedProperty === 'Condominiums' && selectedRole === 'Property management company' && (
          <section className="my-6">
            <OfficeInfo />
            <div className="flex gap-2 items-center mt-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="align-middle -mt-1"
              />
              <p className="text-sm leading-tight">
                Accept RentYard property adding terms & condition
              </p>
            </div>
          </section>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex-1">
        <div className="max-w-6xl mx-auto w-full flex justify-between items-center mt-6">
          <button className="underline gap-2 px-2 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors">
            Back
          </button>
          <button
            disabled={!selectedProperty || !selectedRole || !agreed}
            onClick={() => navigate('/condominiums')}
            className={`px-8 py-3 rounded-lg font-medium shadow-sm transition-colors duration-300
                ${!selectedProperty || !selectedRole || !agreed
                ? "bg-blue-300 text-white cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"}`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
