// import React, { useState } from 'react';
// import { BsChevronLeft } from 'react-icons/bs';
// import { FaAnchorCircleExclamation } from 'react-icons/fa6';
// import { FcApproval } from 'react-icons/fc';
// import { useNavigate } from 'react-router-dom';

// const AddNewCompany = () => {
//   const navigate = useNavigate();
//   const [showPopup, setShowPopup] = useState(false);

//   const handleBack = () => {
//     navigate('/admin/company-management');
//   };

//   const handleAdd = () => {
//     // You can add your form submission logic here

//     // Show success popup
//     setShowPopup(true);

//     // Hide the popup after a few seconds and navigate to company management page
//     setTimeout(() => {
//       setShowPopup(false);
//       navigate('/admin/company-management');
//     }, 2000);
//   };

//   return (
//     <div className="p-6 bg-white rounded-md shadow-sm m-3">
//       {/* Company Management Header */}
//       <div className="flex items-center">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="14.75"
//           viewBox="0 0 18 15.75"
//         >
//           <path
//             id="location_away_FILL1_wght400_GRAD0_opsz24"
//             d="M84.5-804.25H81.8a1.733,1.733,0,0,1-1.271-.529A1.733,1.733,0,0,1,80-806.05v-8.1a1.787,1.787,0,0,1,.191-.81,1.726,1.726,0,0,1,.529-.63l5.4-4.05a1.9,1.9,0,0,1,.518-.27A1.767,1.767,0,0,1,87.2-820a1.767,1.767,0,0,1,.563.09,1.9,1.9,0,0,1,.518.27l2.97,2.25a.428.428,0,0,1,.169.45.462.462,0,0,1-.349.36,4.378,4.378,0,0,0-1.552.956,4.679,4.679,0,0,0-1.057,1.5,4.206,4.206,0,0,0-.371,1.789,4.467,4.467,0,0,0,.394,1.789.8.8,0,0,1,.011.574.644.644,0,0,1-.371.394,6.653,6.653,0,0,0-1.44.833,3.261,3.261,0,0,0-.81.99,3.027,3.027,0,0,0-.36.866,3.927,3.927,0,0,0-.112.934v.81a.871.871,0,0,1-.259.641A.871.871,0,0,1,84.5-804.25Zm8.1-4.5a8.759,8.759,0,0,1,2.351.315,9.052,9.052,0,0,1,2.171.922,1.814,1.814,0,0,1,.641.664,1.772,1.772,0,0,1,.236.889,1.652,1.652,0,0,1-.495,1.215,1.652,1.652,0,0,1-1.215.495H88.91a1.652,1.652,0,0,1-1.215-.495,1.652,1.652,0,0,1-.5-1.215,1.772,1.772,0,0,1,.236-.889,1.814,1.814,0,0,1,.641-.664,9.052,9.052,0,0,1,2.171-.922A8.759,8.759,0,0,1,92.6-808.75Zm0-.9a2.6,2.6,0,0,1-1.913-.787,2.6,2.6,0,0,1-.787-1.912,2.6,2.6,0,0,1,.787-1.913,2.6,2.6,0,0,1,1.913-.788,2.6,2.6,0,0,1,1.912.788,2.6,2.6,0,0,1,.788,1.913,2.6,2.6,0,0,1-.788,1.912A2.6,2.6,0,0,1,92.6-809.65Z"
//             transform="translate(-80 820)"
//             fill="#16425B"
//           />
//         </svg>
//         <p className="md:text-sm text-md ml-1.5 text-customTextGrey1 font-opensans font-bold">
//           User Management
//         </p>
//         <span className="text-customTextGrey2 md:block hidden relative md:mx-16 text-xs">
//           User List
//           <span className="absolute left-0 top-5 bottom-0 w-full h-0.5 bg-[#39A9DB] z-10"></span>
//         </span>
//       </div>

//       {/* Add New User Header */}
//       <div>
//         <p className="text-customTextGrey1 font-opensans font-bold text-md mt-8">
//           Add New User
//         </p>
//       </div>

//       {/* Form Section */}
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 py-5">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Franchise
//           </label>
//           <select
//             name="category"
//             className="mt-1 block w-full text-xs focus:outline-none rounded-md border-gray-300 shadow-sm sm:text-xs"
//           >
//             <option>Choose</option>
//             <option value="Technology">name1</option>
//             <option value="Finance">name2</option>
//             <option value="Healthcare">name3</option>
//             {/* Add more options as needed */}
//           </select>
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             First Name
//           </label>
//           <input
//             type="text"
//             name="firstName"
//             className="mt-1 block w-full text-xs focus:outline-none rounded-md border-gray-300 shadow-sm sm:text-xs"
//             placeholder="Type here"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Last Name
//           </label>
//           <input
//             type="text"
//             name="lastName"
//             className="mt-1 block w-full text-xs focus:outline-none rounded-md border-gray-300 shadow-sm sm:text-xs"
//             placeholder="Type here"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             className="mt-1 block w-full text-xs focus:outline-none rounded-md border-gray-300 shadow-sm sm:text-xs"
//             placeholder="Type here"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Phone Number
//           </label>
//           <input
//             type="text"
//             name="phoneNumber"
//             className="mt-1 block w-full text-xs focus:outline-none rounded-md border-gray-300 shadow-sm sm:text-xs"
//             placeholder="Type here"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Status
//           </label>
//           <select
//             name="status"
//             className="mt-1 block w-full text-sm rounded-md focus:outline-none border-gray-300 shadow-sm sm:text-xs"
//           >
//             <option>Choose</option>
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//         </div>
//       </div>

//       {/* Button Section */}
//       <div className="mt-6 flex flex-row">
//         <div>
//         <button
//             onClick={handleBack}
//             className={"px-4 py-2 text-xs flex items-center disabled:cursor-not-allowed font-semibold text-customTextGrey1"}
//           >
//             <BsChevronLeft className="mr-1" /> Back
//             </button>
//         </div>

//         <div>
//           <button
//             onClick={handleAdd}
//             className="px-14 mx-5 py-2 text-xs font-semibold text-white bg-customNavy rounded-md"
//           >
//             Add
//           </button>
//         </div>
//       </div>

//       {/* Success Popup */}
//       {showPopup && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-md flex flex-col items-center justify-center shadow-md text-center">
//           <FcApproval className='text-5xl text-center'/>
//                       <p className="text-lg font-semibold">
//               New user added <br /> <span className="font-bold">successfully</span>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddNewCompany;


// // import React from 'react'

// // const AddNewCompany = () => {
// //   return (
// //     <div>
// //       add new user
// //     </div>
// //   )
// // }

// // export default AddNewCompany


import React from 'react'

const AddNewCompany = () => {
  return (
    <div>
      add new Franchise
    </div>
  )
}

export default AddNewCompany