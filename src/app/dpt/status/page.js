"use client";
import BaseLayout_departemen from "@/components/BaseLayout/BaseLayout_departemen";

import React from "react";

export default function RekapPkl() {
  return (
    <BaseLayout_departemen>
      <h1 className="text-4xl font-semibold text-[#183D3D] mt-5 mb-7">
        Rekap Status
        <span className="px-2 py-1 bg-[#183d3d] rounded text-[#f5f5f5] ml-2">
          Mahasiswa
        </span>
      </h1>
    </BaseLayout_departemen>
  );
}
