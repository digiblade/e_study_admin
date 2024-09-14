import { People, PeopleOutline } from "@mui/icons-material";
import React from "react";
import PieChart from "../molecule/pie_chart";
import ColumnChart from "../molecule/column_chart";
import LineChart from "../molecule/line_chart";

function Dashboard_admin() {
  return (
    <div className="h-full ">
      <div class="grid grid-cols-12  gap-4">
        <div className="bg-white shadow-sm col-span-3 rounded-lg p-2 flex items-center gap-4 px-4">
          <div className="h-14 w-14 bg-red-300 rounded-full bg-opacity-50 flex justify-center items-center text-red-700">
            <People></People>
          </div>
          <div className="">
            <div className="text-lg font-extrabold ">75K</div>
            <div className="text-xs text-gray-400">Students</div>
          </div>
        </div>
        <div className="bg-white shadow-sm col-span-3 rounded-lg p-2 flex items-center gap-4 px-4">
          <div className="h-14 w-14 bg-blue-300 rounded-full bg-opacity-50 flex justify-center items-center text-blue-700">
            <People></People>
          </div>
          <div className="">
            <div className="text-lg font-extrabold ">360</div>
            <div className="text-xs text-gray-400">Courses</div>
          </div>
        </div>
        <div className="bg-white shadow-sm col-span-3 rounded-lg p-2 flex items-center gap-4 px-4">
          <div className="h-14 w-14 bg-green-300 rounded-full bg-opacity-50 flex justify-center items-center text-green-700">
            <People></People>
          </div>
          <div className="">
            <div className="text-lg font-extrabold ">920</div>
            <div className="text-xs text-gray-400">Videos</div>
          </div>
        </div>
        <div className="bg-white shadow-sm col-span-3 rounded-lg p-2 flex items-center gap-4 px-4">
          <div className="h-14 w-14 bg-yellow-300 rounded-full bg-opacity-50 flex justify-center items-center text-yellow-700">
            <People></People>
          </div>
          <div className="">
            <div className="text-lg font-extrabold ">INR 1224400</div>
            <div className="text-xs text-gray-400">Earning</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3  mt-4 gap-4">
        <div className=" p-4 rounded-lg bg-white">
          <div className="mb-4">Student Geolocation Rate</div>
          <PieChart></PieChart>
        </div>
        <div className="p-4  col-span-2 rounded-lg bg-white">
          <div className="mb-4">Monthly Sales</div>
          <ColumnChart></ColumnChart>
        </div>
        <div className="p-4  col-span-3 rounded-lg bg-white">
          <div className="mb-4">Monthly Revenue</div>
          <LineChart></LineChart>
        </div>
      </div>
    </div>
  );
}

export default Dashboard_admin;
