"use client";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowDownWideNarrow, ArrowUp, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import Table from './table';

export default function TopReports({ reports }) {
  const [data,setData] = useState([]);

  useEffect(() => {
    setData([...reports]);
  }, [reports]);

  const [order, setOrder] = useState([
    "Verbal Abuse",
    "Sexual Harassment",
    "Bullying",
    "Stalking",
    "Cyber Harassment",
    "Discrimination",
    "Abuse of Authority by Staff or Faculty",
  ]);
  
  const getPriorityIndex = (types) => {
    // Find the minimum index of any type in the `types` array within the `order` list
    const indices = types.map(type => order.indexOf(type)).filter(index => index !== -1);
    return Math.min(...indices);
  };

  function fetchTopReportsData(){
    // Sort the objects based on the order array
    const sortedObjects = [...reports].sort((a, b) => {
      const aPriority = getPriorityIndex(a.types);
      const bPriority = getPriorityIndex(b.types);
      if(aPriority === bPriority){
        const aTime = new Date(a.createdAt);
        const bTime = new Date(b.createdAt);
        return bTime - aTime;
      }
      return aPriority - bPriority;
    });
    return sortedObjects;
  }

    useEffect(()=>{
      if (reports.length > 0 || order.length > 0) {
        const newReports = fetchTopReportsData();
        // Only setData if the data has actually changed
        if (JSON.stringify(newReports) !== JSON.stringify(data)) {
          setData(newReports);
        }
      }
    },[reports, order]);


  const moveItemUp = (index) => {
    if (index === 0) return;
    const newOrder = [...order];
    [newOrder[index], newOrder[index - 1]] = [
      newOrder[index - 1],
      newOrder[index],
    ];
    setOrder(newOrder);
  };

  const moveItemDown = (index) => {
    if (index === order.length - 1) return;
    const newOrder = [...order];
    [newOrder[index], newOrder[index + 1]] = [
      newOrder[index + 1],
      newOrder[index],
    ];
    setOrder(newOrder);
  };

  return (
    <Card className="col-span-1 flex flex-col h-[575] shadow-md border-none bg-gray">
      <CardDescription className="flex flex-col h-[560] p-4 bg-black/[.05] rounded-lg bg-gray">
        <div className="flex justify-between items-center scrollable">
          <CardTitle className="text-xl font-semibold">Top Reports</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ArrowDownWideNarrow />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="align-right">
              {order.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center justify-between gap-4"
                >
                  <DropdownMenuLabel>{item}</DropdownMenuLabel>
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => moveItemUp(index)}
                      className="border-0 bg-neutral-500 h-4"
                    >
                      <ArrowUp />
                    </Button>
                    <Button
                      onClick={() => moveItemDown(index)}
                      className="border-0 bg-neutral-500 h-4"
                    >
                      <ArrowDown />
                    </Button>
                  </div>
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Table data={data}/>
      </CardDescription>
    </Card>
  );
}

