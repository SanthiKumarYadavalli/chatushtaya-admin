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
import { useState } from "react";
import Table from './table';

export default function TopReports({ reports }) {
  const [order, setOrder] = useState([
    "Verbal Abuse",
    "Sexual Harassment",
    "Bullying",
    "Stalking",
    "Cyber Harassment",
    "Discrimination",
    "Abuse of Authority by Staff or Faculty",
  ]);

  const moveItemUp = (index) => {
    if (index === 0) return; // Can't move up if it's the first item
    const newOrder = [...order];
    [newOrder[index], newOrder[index - 1]] = [
      newOrder[index - 1],
      newOrder[index],
    ]; // Swap positions
    setOrder(newOrder);
  };

  const moveItemDown = (index) => {
    if (index === order.length - 1) return; // Can't move down if it's the last item
    const newOrder = [...order];
    [newOrder[index], newOrder[index + 1]] = [
      newOrder[index + 1],
      newOrder[index],
    ]; // Swap positions
    setOrder(newOrder);
  };

  return (
    <Card className="col-span-1 flex flex-col h-[575] shadow-md border-none">
      <CardDescription className="flex flex-col h-[560] p-4 bg-black/[.05] rounded-lg">
        <div className="flex justify-between items-center">
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
        <Table />
      </CardDescription>
    </Card>
  );
}

