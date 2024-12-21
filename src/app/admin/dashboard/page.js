"use client";
import React, { useEffect, useState } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import TopReports from "./topReports";
import LineChartComponent from "./LineChart";
import { fetchAllReports } from "../../../../backend/utils";

export default function page() {
  const [areaChartData, setAreaChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);
  const [reports, setReports] = useState([
    {
      types: ["Verbal Abuse", "Bullying"],
      createdAt: 21131231,
    },
    {
      types: ["Sexual Harassment", "Bullying"],
      createdAt: 2121231,
    },
    {
      types: ["Stalking", "Bullying"],
      createdAt: 2121231,
    },
    {
      types: ["Cyber Harassment", "Bullying"],
      createdAt: 2121231,
    },
    {
      types: ["Discrimination", "Bullying", "Sexual Harassment"],
      createdAt: 2121231,
    },
    {
      types: [
        "Abuse of Authority by Staff or Faculty",
        "Bullying",
        "Sexual Harassment",
      ],
      createdAt: 2121231,
    },
  ]);
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative mt-[-40]  ml-10">
      <TopReports reports={reports} />
      <div className="grid grid-rows-2 gap-2 h-full">
        <div>
          <LineChartComponent />
        </div>
        <Card className="col-span-1 flex flex-col shadow-md h-[263] border-none">
          <CardDescription className="flex flex-col p-4 bg-black/[.05] rounded-lg">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-semibold">
                Recent Reports
              </CardTitle>
            </div>
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}
