"use client";
import React from "react";
import BaseLayout from "@/components/BaseLayout/BaseLayout_mhs";
import Link from "next/link";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Profile() {
  return (
    <BaseLayout>
      <div className="wrapper h-full w-full flex justify-center pt-10 pb-10">
        <div className="box-edit bg-[#f5f5f5] w-3/5 h-auto rounded-xl border-4 border-solid border-[#183D3D]">
          <h1 className="text-center mt-5 text-black font-semibold text-xl">
            Profile Mahasiswa
          </h1>
          <div className="gambar w-full flex justify-center mt-3">
            <img
              className="rounded-full mt-3 justify-center"
              src="https://i.pinimg.com/736x/3d/d4/d0/3dd4d0ebeef9a12a357e269d3b60492b.jpg"
              alt=""
              width="250"
              height="250"
            />
          </div>
          <Link href="/mhs/editprofile">
            <p className="text-center mt-7 mb-7 text-sky-600">Edit Profile</p>
          </Link>
          <div className="form mt-7 flex justify-center w-full">
            <form className="flex max-w-md flex-col gap-4 w-3/4 pb-11">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nama" value="Nama" />
                </div>
                <TextInput
                  id="nama"
                  type="text"
                  placeholder="Nama Mahasiswa"
                  disabled
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="nim" value="NIM" />
                </div>
                <TextInput
                  id="nim"
                  type="text"
                  placeholder="24060121140167"
                  disabled
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="bangkit@example.com"
                  disabled
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="telpon" value="No Telpon" />
                </div>
                <TextInput
                  id="telpon"
                  type="number"
                  placeholder="081234567890"
                  disabled
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="angkatan" value="Angkatan" />
                </div>
                <select
                  id="angkatan"
                  disabled
                  className="border rounded-md p-2 w-full" // Menambahkan kelas w-full
                >
                  <option placeholder="2023" value="" disabled selected hidden>
                    2023
                  </option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  {/* Tambahkan opsi provinsi lainnya sesuai kebutuhan */}
                </select>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="dosenwali" value="Dosen Wali" />
                </div>
                <TextInput
                  id="dosenwali"
                  type="text"
                  placeholder="nama dosen wali"
                  disabled
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="jalurmasuk" value="Jalur Masuk" />
                </div>
                <TextInput
                  id="jalurmasuk"
                  type="text"
                  placeholder="Orang Dalem"
                  disabled
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="provinsi" value="Provinsi" />
                </div>
                <select
                  id="provinsi"
                  disabled
                  className="border rounded-md p-2 w-full" // Menambahkan kelas w-full
                >
                  <option value="" disabled selected hidden>
                    Pilih Provinsi
                  </option>
                  <option value="provinsi1">Provinsi 1</option>
                  <option value="provinsi2">Provinsi 2</option>
                  {/* Tambahkan opsi provinsi lainnya sesuai kebutuhan */}
                </select>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="kabupaten" value="Kabupaten" />
                </div>
                <select
                  id="kabupaten"
                  disabled
                  className="border rounded-md p-2 w-full" // Menambahkan kelas w-full
                >
                  <option value="" disabled selected hidden>
                    Pilih Kabupaten
                  </option>
                  <option value="kabupaten1">Kabupaten 1</option>
                  <option value="kabupaten2">Kabupaten 2</option>
                  {/* Tambahkan opsi kabupaten lainnya sesuai kebutuhan */}
                </select>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="alamat" value="Alamat" />
                </div>
                <textarea
                  id="alamat"
                  disabled
                  className="border rounded-md p-2 w-full"
                  rows="4" // Jumlah baris pada text area
                  placeholder="Masukkan alamat Anda"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
