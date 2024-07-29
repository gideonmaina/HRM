import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Staff = () => {
  const data = [
    {
      first_name: "John",
      last_name: "Doe",
      id: 138314,
      email: "don@doe.com",
      status: "on leave",
    },
    {
      first_name: "Jane",
      last_name: "Doe",
      id: 4245534,
      email: "don@doe.com",
      status: "working",
    },
    {
      first_name: "Bradley",
      last_name: "Cooper",
      id: 367388928,
      email: "don@doe.com",
      status: "working",
    },
    {
      first_name: "Bradley",
      last_name: "Cooper",
      id: 367388929,
      email: "don@doe.com",
      status: "working",
    },
    {
      first_name: "Bradley",
      last_name: "Cooper",
      id: 367388930,
      email: "don@doe.com",
      status: "working",
    },
    {
      first_name: "Bradley",
      last_name: "Cooper",
      id: 367388931,
      email: "don@doe.com",
      status: "working",
    },
    {
      first_name: "Bradley",
      last_name: "Cooper",
      id: 367388932,
      email: "don@doe.com",
      status: "working",
    },
    {
      first_name: "Bradley",
      last_name: "Cooper",
      id: 367388933,
      email: "don@doe.com",
      status: "working",
    },
    {
      first_name: "Bradley",
      last_name: "Cooper",
      id: 367388934,
      email: "don@doe.com",
      status: "working",
    },
    {
      first_name: "Bradley",
      last_name: "Cooper",
      id: 367388935,
      email: "don@doe.com",
      status: "working",
    },
    {
      first_name: "Bradley",
      last_name: "Cooper",
      id: 367388936,
      email: "don@doe.com",
      status: "working",
    },
    {
      first_name: "Bradley",
      last_name: "Cooper",
      id: 367388937,
      email: "don@doe.com",
      status: "working",
    },
    {
      first_name: "Bradley",
      last_name: "Cooper",
      id: 367388938,
      email: "don@doe.com",
      status: "working",
    },
    {
      first_name: "Bradley",
      last_name: "Cooper",
      id: 367388939,
      email: "don@doe.com",
      status: "working",
    },
  ];

  return (
    <>
      <h1 className="mb-4 text-xl">All Employees</h1>
      <Link
        to="add-staff"
        className="rounded-md bg-teal-500 px-4 py-2 text-white  text-xl"
      >
        Add staff
      </Link>

      {/* Employees Table */}

      <div className="mt-8 w-full">
        {/* Search options */}
        <div></div>
        <p className="mt-1 mb-1"> Showing {data.length} employees</p>
        <table className="min-w-[80%] shadow-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-[#04AA6D] text-white">Avator</th>
              <th className="py-2 px-4 bg-[#04AA6D] text-white">First Name</th>
              <th className="py-2 px-4 bg-[#04AA6D] text-white">Second Name</th>
              <th className="py-2 px-4 bg-[#04AA6D] text-white">ID </th>
              <th className="py-2 px-4 bg-[#04AA6D] text-white">Email </th>
              <th className="py-2 px-4 bg-[#04AA6D] text-white">Status </th>
              <th className="py-2 px-4 bg-[#04AA6D] text-white">Action </th>
            </tr>
          </thead>
          {data.map((employee) => (
            <tr
              key={employee.id}
              className="text-center odd:bg-gray-100 cursor-pointer"
            >
              <td className="py-1 ">
                <FontAwesomeIcon icon="fa-solid fa-user" />
              </td>
              <td className="py-1 "> {employee.first_name} </td>
              <td className="px-4"> {employee.last_name}</td>
              <td className="px-4"> {employee.id}</td>
              <td className="px-4"> {employee.email}</td>
              <td className="px-4"> {employee.status}</td>
              <td className="px-4">action</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Staff;
