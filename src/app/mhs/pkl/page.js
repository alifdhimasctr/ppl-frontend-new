"use client";

import BaseLayout from "@/components/BaseLayout/BaseLayout_mhs";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

const Pkl = () => {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["token"]);
  const [formData, setFormData] = useState({
    semester: "",
    nilaipkl: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/pkl",
        {
          semester: formData.semester,
          nilaipkl: formData.nilaipkl,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      );
      console.log("Response:", res);

      if (res) {
        router.push("/mhs/pkl");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
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
                PKL
              </span>
            </h1>
            <p className="mt-2">
              Masukkan semester selesai PKL, dan nilai PKL
            </p>
            <div className="hasil justify-end flex">
              <Link href="/mhs/pkl/hasilpkl">
                <p className="mt-5 mr-2 text-[#183d3d] font-semibold items-end">
                  Hasil PKL
                </p>
              </Link>
            </div>
            <div className="flex mt-2 gap-10">
              <div className="flex grow gap-10 bg-white shadow-lg rounded-lg p-6">
                <div className="w-full h-full">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="label" htmlFor="statuspkl">
                        <span className="label-text text-gray-600 text">
                          Semester
                        </span>
                      </label>
                      <div className="input-box">
                        <select
                          id="statuspkl"
                          className="input input-bordered bg-white shadow-md w-full"
                          value={formData.semester}
                          onChange={(event) =>
                            setFormData({
                              ...formData,
                              semester: event.target.value,
                            })
                          }
                        >
                          <option value="" disabled selected>
                            Input Semester Selesai PKL
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
                      <label className="label" htmlFor="nilaipkl">
                        <span className="label-text">Nilai PKL</span>
                      </label>
                      <div className="input-box">
                        <select
                          id="nilaipkl"
                          className="input input-bordered bg-white shadow-md w-full"
                          value={formData.nilaipkl}
                          onChange={(event) =>
                            setFormData({
                              ...formData,
                              nilaipkl: event.target.value,
                            })
                          }
                        >
                          <option value="" disabled selected>
                            Pilih Nilai PKL
                          </option>
                          <option value="4.00">A</option>
                          <option value="3.00">B</option>
                          <option value="2.00">C</option>
                          <option value="1.00">D</option>
                          <option value="0.00">E</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-10"> </div>
                    <div className="flex mb-4 items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        {/* ... tampilan dropzone ... */}
                        <input
                          className="block w-min mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="default_size"
                          type="file"
                        ></input>
                      </label>
                    </div>
                    <div className="mb-1">
                      <button
                        type="submit"
                        className="m-1 ml-0 bg-[#183d3d] rounded-md text-white w-20 h-10 "
                      >
                        Simpan
                      </button>
                      <button
                        className="m-1 bg-[#d40808] rounded-md text-white w-20 h-10 "
                      >
                        Batal
                      </button>
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

export default Pkl;
