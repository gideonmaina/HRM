import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStaff = () => {
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    id_number: "",
    education: null,
  });
  const [educationLevel, setEducationLevel] = useState([]);
  const [Error, setError] = useState("");
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/education_levels")
      .then((res) => {
        if (res) {
          setEducationLevel(res.data.result);
          setFormValues({ ...formValues, education: res.data.result[0].id });
        } else {
          if (res.data.Error) {
            setError(res.data.Error);
          }
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    // navigate("/dashboard/staff");
    axios
      .post("http://localhost:3000/auth/add_staff", formValues)
      .then((res) => {
        if (res.data.result) {
          navigate("/dashboard/staff");
        } else {
          if (res.data.error) {
            setError(res.data.error);
            setTimeout(() => {
              setError("");
            }, 2000);
          }
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="flex items-start justify-center w-full h-full mt-24 ">
      <div className="flex flex-col gap-4 bg-teal-400  px-4 py-8  rounded text-white shadow-lg">
        {Error && (
          <div className="border py-2 px-4 border-rose-500 flex justify-center rounded-sm bg-rose-500 text-white">
            {Error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-start text-xl"
        >
          <div className="flex gap-4 items-center w-full">
            <label htmlFor="first_name" className="min-w-28">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              className="rounded-sm py-1 px-2 border text-black min-w-72"
              required
              onChange={(e) =>
                setFormValues({ ...formValues, first_name: e.target.value })
              }
            ></input>
          </div>
          <div className="flex gap-4 items-center">
            <label htmlFor="last_name" className="min-w-28">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              className="rounded-sm py-1 px-2 border text-black min-w-72"
              required
              onChange={(e) =>
                setFormValues({ ...formValues, last_name: e.target.value })
              }
            ></input>
          </div>
          <div className="flex gap-4 items-center">
            <label htmlFor="id_no" className="min-w-28">
              ID no
            </label>
            <input
              type="text"
              name="id_no"
              className="rounded-sm py-1 px-2 border text-black min-w-72"
              required
              onChange={(e) =>
                setFormValues({ ...formValues, id_number: e.target.value })
              }
            ></input>
          </div>

          <div className="flex gap-4 items-center">
            <label htmlFor="nationality" className="min-w-28">
              Nationality
            </label>
            <input
              type="text"
              name="nationality"
              className="rounded-sm py-1 px-2 border text-black min-w-72"
              required
              onChange={(e) =>
                setFormValues({ ...formValues, nationality: e.target.value })
              }
            ></input>
          </div>
          <div className="flex gap-4 items-center">
            <label htmlFor="email" className="min-w-28">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="rounded-sm py-1 px-2 border text-black min-w-72"
              required
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            ></input>
          </div>
          <div className="flex gap-4 items-center">
            <label htmlFor="education" className="min-w-28">
              Education
            </label>
            <select
              name="education"
              className="rounded-sm py-1 px-2 border text-black min-w-72"
              required
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  education: e.target.value,
                })
              }
            >
              {educationLevel.map((entry) => {
                return (
                  <option key={entry.id} value={entry.id}>
                    {entry.education_level}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <label htmlFor="address" className="min-w-28">
              Address
            </label>
            <input
              type="text"
              name="address"
              className="rounded-sm py-1 px-2 border text-black min-w-72"
              onChange={(e) =>
                setFormValues({ ...formValues, address: e.target.value })
              }
            ></input>
          </div>

          <button
            type="submit"
            className="self-center rounded border px-6 py-1 text-xl"
          >
            Add Staff
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStaff;
