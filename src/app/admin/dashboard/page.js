"use client";
import React, { useEffect, useState } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import TopReports from "./topReports";
import LineChartComponent from "./LineChart";
import CompletedReports from './completedReports'

import { fetchAllReports, fetchAllUsers } from "@/backend/utils";
import Loading from "../loading";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
export default function page() {
  const [lineChartData, setLineChartData] = useState([]);
  const [topReportsData, setTopReportsData] = useState([]);
  const [superReportsData, setSuperReportsData] = useState([]);
  const [completedReportsData, setCompletedReportsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);

  function addUsers(reports) {
    reports.forEach((report) => {
      if (report.isAnonymous == true)
        report.username = "Anonymous";
      else {
        const user = users.find(user => user.id == report.userId);
        if (!user) {
          report.username = "Anonymous";
        } else {
          report.username = user.username;
        }
      }
    })
    return reports;
  }

  function fetchLineChartData() {
    const data = [
      { month: "January", count: 0 },
      { month: "February", count: 0 },
      { month: "March", count: 0 },
      { month: "April", count: 0 },
      { month: "May", count: 0 },
      { month: "June", count: 0 },
      { month: "July", count: 0 },
      { month: "August", count: 0 },
      { month: "September", count: 0 },
      { month: "October", count: 0 },
      { month: "November", count: 0 },
      { month: "December", count: 0 },
    ]
    reports.forEach((report) => {
      let idx = new Date(report.createdAt).getUTCMonth();
      data[idx].count += 1;
    })
    console.log(data);
    return data;
  }

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await fetchAllReports();
        setReports(response);
        const usersReports = await fetchAllUsers();
        setUsers(usersReports);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
    fetchReports();
  }, [])

  useEffect(() => {
    if (reports.length > 0) {
      const statusOrder = ["unreviewed", "pending"];
      const selectedReports = reports.filter((report) => { return report.status == 'unreviewed' || report.status == 'pending' });
      const filteredReports = selectedReports.sort((a, b) => {
        return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
      });
      setTopReportsData(addUsers(filteredReports));
    }
    setIsLoading(false);
  }, [reports, users]);

  useEffect(() => {
    if (reports.length > 0) {
      setLineChartData(fetchLineChartData());

      //completed Reports 
      const completedReports = [...reports].filter((report)=>{
        return report.status == 'resolved'
      });
      setCompletedReportsData(completedReports);
      
      //Super Admin Reports
      const superReports = [...reports].filter((report) =>{
        return report.isSuperReport == true;
      });
      console.log(superReports);
      setSuperReportsData(superReports);
    }
  }, [reports]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full h-full rounded-lg border mt-[-62]"
    >
      <ResizablePanel defaultSize={50} className="h-[600px] border-none bg-gray">
        <div className="flex h-full items-center justify-center border-none bg-gray overflow-y-auto">
          <TopReports reports={topReportsData} />
          {/* <TopReports reports={superReportsData} /> */}
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} className="h-[600]">
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={60}>
            <div className="flex justify-center items-center">
              <LineChartComponent reports = {lineChartData}/>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={40}>
            <CompletedReports reports={completedReportsData}/>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}