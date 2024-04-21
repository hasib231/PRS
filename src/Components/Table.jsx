import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import MovingComponent from "react-moving-text";
import NavBar from "./NavBar";

const Table = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [requestedProduct, setRequestedProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allRequestProduct")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  
  return (
    <div>
      <>
        <NavBar />
        {/* component */}
        <MovingComponent
          type="fadeInFromLeft"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
          className="tracking-wider text-bold text-white mt-28 mb-5  bg-gray-800 rounded inline-block  px-3 py-1 mx-10"
        >
          Product List
        </MovingComponent>
        <div className="p-0  lg:px-10 md:px-5 sm:px-5">
          <table className="overflow-x-auto w-full min-w-max table-auto text-left border">
            <thead>
              <tr>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Serial{" "}
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Name{" "}
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Date{" "}
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Item Name{" "}
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Req Quantity{" "}
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Unit{" "}
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Unit Price{" "}
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Total Price{" "}
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    Status
                  </p>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                  <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                    PR No{" "}
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex flex-col">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      01
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://www.pngitem.com/pimgs/m/4-40070_user-staff-man-profile-user-account-icon-jpg.png"
                      alt="Alexa Liras"
                      className="inline-block relative object-cover object-center !rounded-full w-9 h-9 rounded-md"
                    />
                    <div className="flex flex-col">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                        
                      </p>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                       
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex flex-col">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      02-04-2024
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex flex-col">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      Keyboard
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex flex-col">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      100
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex flex-col">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      80.00
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <div className="flex flex-col">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      Keyboard
                    </p>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    23/04/18
                  </p>
                </td>

                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <select
                      className={`select select-accent w-full max-w-xs ${
                        selectedOption === "Approve"
                          ? "bg-lime-500 text-white  rounded"
                          : selectedOption === "Reject"
                          ? "bg-red-500 text-white"
                          : ""
                      }`}
                      // Update selected option state
                      onChange={(e) => setSelectedOption(e.target.value)}
                    >
                      <option
                        disabled
                        selected
                        className="placeholder-gray-400"
                        value=""
                      >
                        Approval
                      </option>
                      <option value="Approve">Approve</option>
                      <option value="Reject">Reject</option>
                    </select>
                  </div>
                </td>

                <td className="p-4 border-b border-blue-gray-50">
                  <div className="w-max">
                    <div
                      className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-lime-500 text-white py-1 px-2 text-xs rounded-md"
                      style={{ opacity: 1 }}
                    >
                      <span className="">AQ123we231ww</span>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <button
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                    type="button"
                  >
                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                      </svg>
                    </span>
                  </button>

                  <button
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[7px] h-10 max-h-[70px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-red-500/30"
                    type="button"
                  >
                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <MdDelete />
                    </span>
                  </button>
                </td>
              </tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
        <footer className="relative pt-8 pb-6 mt-16"></footer>
      </>
    </div>
  );
};

export default Table;
