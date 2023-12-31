"use client";

import BaseLayout from "@/components/BaseLayout/BaseLayout_mhs";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

const Irs = () => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["token"]);
  const [formData, setFormData] = useState({
    semester: "",
    sks: "",
    file: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const formData = new FormData();
    // formData.append("semester", formData.semester);
    // formData.append("sks", formData.sks);
    // formData.append("file", formData.file);

    try {
      const res = await axios.post("http://localhost:4000/irs", {
        semester: formData.semester,
        sks: formData.sks,
        file: formData.file,},
        {headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      console.log("Response:", res);

      if (res.status === 201) {
        // Show success alert
        alert("IRS entry successful!");
        router.push("/mhs/irs");
      } else {
        // Show error alert
        alert("Failed to save IRS entry. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      // Show error alert
      alert("An error occurred. Please try again.");
    }
  };

  const handleChange = (event, field) => {
    if (field === "file") {
      const file = event.target.files[0];
      setFormData({ ...formData, [field]: file });
    } else {
      const value = event.target.value;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [field]: value,
      }));
    }
  };

    return (
      <BaseLayout>
        <div
          className="container pl-3  justify-left h-auto pr-10 "
          style={{ backgroundColor: "#f5f5f5cf" }}
        >
          <main>
            <div className="m-10 container mx-auto bg-gray">
              <h1 className="text-4xl font-semibold text-[#183D3D] mt-5">
                Entry
                <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
                  IRS
                </span>
              </h1>
              <p className="mt-2">Masukkan semester dan jumlah SKS yang diambil</p>
              <div className="hasil justify-end flex">
                <Link href="/mhs/irs/hasilirs">
                  <p className="mt-5 mr-2 text-[#183d3d] font-semibold items-end">
                    Hasil IRS
                  </p>
                </Link>
              </div>
              <div className="flex mt-2 gap-10   ">
                <div className="flex grow gap-10 bg-white shadow-lg rounded-lg p-6">
                  <div className="w-full h-full">
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-4">
                      <label className="label" htmlFor="semester">
                        <span className="label-text text-black text">
                          Semester
                        </span>
                      </label>
                      <div className="input-box">
                        <select
                          id="semester"
                          value={formData.semester}
                          onChange={(event) => handleChange(event, "semester")}
                          className="input input-bordered text-gray-700 bg-white shadow-md w-full"
                        >
                          <option value="" disabled selected>
                            Masukkan Semester Anda
                          </option>
                          <option value="1">Semester 1</option>
                          <option value="2">Semester 2</option>
                          <option value="3">Semester 3</option>
                          <option value="4">Semester 4</option>
                          <option value="5">Semester 5</option>
                          <option value="6">Semester 6</option>
                          <option value="7">Semester 7</option>
                          <option value="8">Semester 8</option>
                          <option value="9">Semester 9</option>
                          <option value="10">Semester 10</option>
                          <option value="11">Semester 11</option>
                          <option value="12">Semester 12</option>
                          <option value="13">Semester 13</option>
                          <option value="14">Semester 14</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="label" htmlFor="sks">
                        <span className="label-text text-black text">SKS</span>
                      </label>
                      <div className="input-box">
                        <select
                          id="sks"
                          value={formData.sks}
                          onChange={(event) => handleChange(event, "sks")}
                          className="input  text-gray-700 before:input-bordered bg-white shadow-md w-full"
                        >
                          <option value="" disabled selected>
                            Masukkan Jumlah SKS yang diambil
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="23">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-10"> </div>
                    <div className="flex mb-4 items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            PDF,PNG, JPG, or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          className="block w-min mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="default_size"
                          type="file"
                          onChange={(event) => handleFileChange(event, "file")}
                          
                        ></input>
                      </label>
                    </div>
                    <div className="mb-1">
                      <button type="submit" className="m-1 ml-0 bg-[#183d3d] rounded-md text-white w-20 h-10 ">
                        Simpan
                      </button>
                      <button type="cancel" className="m-1 bg-[#d40808] rounded-md text-white w-20 h-10 ">Batal</button>
                    </div>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </BaseLayout>
    );
  };

  export default Irs;

