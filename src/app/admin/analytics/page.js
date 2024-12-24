"use client"
import AreaChart from "./areaChart";
import BarChart from "./barChart";
import PieChart from "./pieChart";
import LineChart from "./lineChart";
import Loading from "../loading";
import { fetchAllReports } from '@/backend/utils';
import { useEffect, useState } from "react";

export default function Analytics() {
  const [reports, setReports] = useState([]);
  const [areaChartData, setAreaChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //function to fetch area chart data
  function fetchAreaChartData() {
    const response = [];
    reports.forEach((report) => {
      const date = new Date(report.createdAt).toLocaleDateString('en-CA');
      
      //check for existing report
      let existingReport = response.find(item => item.date === date);
      if (existingReport){
        if (report.status === 'unreviewed') {
          existingReport.unreviewed += 1;
        }else if(report.status ==='pending'){
          existingReport.pending += 1;
        }else if(report.status ==='resolved'){
          existingReport.resolved += 1;
        }else if(report.status ==='deleted'){
          existingReport.deleted += 1;
        }
      } else {
        const reportData = {
          date,
          unreviewed: report.status === 'unreviewed' ? 1 : 0,
          pending: report.status === 'pending' ? 1 : 0,
          resolved: report.status === 'resolved' ? 1 : 0,
          deleted: report.status === 'deleted' ? 1 : 0,
        };
        response.push(reportData);
      }
    });
    return response;
  }

  //function to fetch bar chart data
  function fetchBarChartData(){
    const response = [
      { type:"Verbal Abuse", count:0},
      { type:"Bullying", count:0 },
      { type:"Sexual Harassment", count:0 },
      { type:"Stalking", count:0},
      { type:"Cyber harassment", count:0 },
      { type:"Discrimination", count:0 },
      { type:"Abuse of Authority by Staff or Faculty", count:0 }
    ];

    reports.forEach((report)=>{
      report.types.forEach((type)=>{
        const record = response.find(item => item.type === type);
        record.count+=1;
      })
    })
    return response;
  }

  //function to fetch pie chart dara
  function fetchPieChartData(){
    const response = [
      { status: "unreviewed", count: 0, fill: "var(--color-unreviewed)" },
      { status: "pending", count: 0, fill: "var(--color-pending)" },
      { status: "resolved", count: 0, fill: "var(--color-completed)" },
      { status: "deleted", count: 0, fill: "var(--color-deleted)" },
    ]

    reports.forEach((report)=>{
      const record = response.find(item => item.status === report.status);
      record.count+=1;
    });

    console.log(response);
    return response;
  }

  function fetchLineChartData(){
    const response = [];
    reports.forEach((report)=>{
      const date = new Date(report.createdAt).toLocaleDateString('en-CA');
      
      //check for existing report
      let existingReport = response.find(item => item.date === date);
      if(!existingReport){
        const reportData = {
          date,
          "Verbal Abuse":0,
          "Bullying":0,
          "Sexual Harassment":0,
          "Stalking":0,
          "Cyber harassment":0,
          "Discrimination":0,
          "Abuse of Authority by Staff or Faculty":0
        }
        response.push(reportData);
      }
      existingReport = response.find(item => item.date === date);
      report.types.forEach((type)=>{
        existingReport[type]+=1;
      });
    })
    console.log(response);
    return response;
  }


  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await fetchAllReports();
        setReports(response);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
    fetchReports();
  }, []);

  useEffect(()=>{
    if(reports.length >0){
      setAreaChartData(fetchAreaChartData());
      setBarChartData(fetchBarChartData());
      setPieChartData(fetchPieChartData());
      setLineChartData(fetchLineChartData());
      setIsLoading(false);
    }
  },[reports]);

  if(isLoading){
    return <Loading />
  }
  return (
    <div className="grid grid-rows-3 gap-4 h-[1200px] mt-[-64]">
      {/* First row: One chart taking full width */}
      <div className="row-span-1 h-[400]">
        <AreaChart chartData={areaChartData}/>
      </div>

      {/* Second row: Two columns with 60% space for the second column */}
      <div className="grid grid-cols-2 gap-4 h-full">
        <div className="col-span-1 h-full">
          <BarChart chartData={barChartData} />
        </div>
        <div className="col-span-1 h-full">
        <PieChart chartData={pieChartData}/>
        </div>
      </div>

      {/* Third row: One chart taking full width */}
      <div className="row-span-1 h-[400] bg-transparent border-none">
        <LineChart chartData={lineChartData} />
      </div>

    </div>
  );
}
