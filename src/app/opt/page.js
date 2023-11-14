"use client";
import React from "react";
import Image from "next/image";
import BaseLayout_dpt from "@/components/BaseLayout/BaseLayout_opt";
import { PiStudentFill } from "react-icons/pi";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { FaSchool } from "react-icons/fa";
import CountUp, { Number } from "@/components/Number";

export default function page() {
  return (
    <BaseLayout_dpt>
      <h1 className="text-2xl font-bold text-gray-700 mb-3">DASHBOARD</h1>
      <div className="profil_dashboard-container1">
        <Image   
          src="/profil_photo.jpg" 
          width={80} height={80} className="dashboard_profil-img"
          alt="profil"
        />
        <h1 className="text-2xl font-semibold text-white">REFIOLA JULIETA</h1>
      </div>
      <div className="profil_dashboard-container2">
        <h1 className="text-lg text-black">NIP : 19821462187921389119</h1>
      </div>

      <div className="count_member_container">
        <div className="count_member">
          <div className="count_member-icon">
            <PiStudentFill />
          </div>
          <div class="flex-row justify-end">
            <div className="count_member-name">MAHASISWA</div>
            <div className="count_member-count">
              <CountUp end={780} />
            </div>
          </div>
        </div>

        <div className="count_member">
          <div className="count_member-icon">
            <PiChalkboardTeacherFill />
          </div>
          <div class="flex-row justify-end">
            <div className="count_member-name">DOSEN</div>
            <div className="count_member-count">
              <CountUp end={75} />
            </div>
          </div>
        </div>

        <div className="count_member">
          <div className="count_member-icon">
            <FaSchool />
          </div>
          <div class="flex-row justify-end">
            <div className="count_member-name">DEPARTEMEN</div>
            <div className="count_member-count">
              <CountUp end={7} />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout_dpt>
  );
}