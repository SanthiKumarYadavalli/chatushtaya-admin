"use client";
import React, { useEffect, useState } from "react";

import TopReports from "./topReports";
import LineChartComponent from "./LineChart";
import PendingReports from "./pendingReports";

import { fetchAllReports, fetchAllUsers } from "@/backend/utils";
import Loading from "../loading";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const [lineChartData, setLineChartData] = useState([]);
  const [topReportsData, setTopReportsData] = useState([]);
  const [superReportsData, setSuperReportsData] = useState([]);
  const [pendingReportsData, setPendingReportsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);
  const {user} = useAuth();

  function addUsers(reports) {
    return reports.map((report) => ({
      ...report,
      username: report.isAnonymous
        ? "Anonymous"
        : users.find((user) => user.id === report.userId)?.username || "Anonymous"
    }));
  }

  function fetchLineChartData() {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const data = months.map(month => ({ month, count: 0 }));
    
    reports.forEach((report) => {
      const idx = new Date(report.createdAt).getUTCMonth();
      data[idx].count += 1;
    });
    
    return data;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const [reportsResponse, usersResponse] = await Promise.all([
          fetchAllReports(),
          fetchAllUsers()
        ]);
        setReports(reportsResponse);
        setUsers(usersResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (reports.length > 0 && users.length > 0) {
      const selectedReports = reports.filter((report) => report.status == 'unreviewed');
      setTopReportsData(addUsers(selectedReports));
      setLineChartData(fetchLineChartData());
      setPendingReportsData(reports.filter((report) => report.status == 'pending'));
      setSuperReportsData(reports.filter((report) => report.isSuperReport === true));
      setIsLoading(false);
    }
  }, [reports, users]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col w-full mt-[-64] min-h-screen h-full p-4 space-y-8">
      <div className="w-full flex-grow overflow-y-auto border-none">
      {user.role=="super-admin"?<TopReports reports={superReportsData} />:<TopReports reports={topReportsData} />}
      </div>
      
      <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 h-full">
          <LineChartComponent reports={lineChartData} />
        </div>
        <div className="w-full md:w-1/2 h-full">
          <PendingReports reports={pendingReportsData} />
        </div>
      </div>
    </div>
  );
}

