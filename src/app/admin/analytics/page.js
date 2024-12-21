import AreaChart from "./areaChart";
import BarChart from "./barChart";
import PieChart from "./pieChart";
import ToolTip from "./lineChart";

export default function Analytics() {
  return (
    <div className="grid grid-rows-3 gap-4 h-[1200px] mt-[-64]">
      {/* First row: One chart taking full width */}
      <div className="row-span-1 h-[400]">
        <AreaChart />
      </div>

      {/* Second row: Two columns with 60% space for the second column */}
      <div className="grid grid-cols-2 gap-4 h-full">
        <div className="col-span-1 h-full">
          <BarChart />
        </div>
        <div className="col-span-1 h-full">
        <PieChart />
        </div>
      </div>

      {/* Third row: One chart taking full width */}
      <div className="row-span-1 h-[400] bg-transparent border-none">
        <ToolTip />
      </div>

    </div>
  );
}
