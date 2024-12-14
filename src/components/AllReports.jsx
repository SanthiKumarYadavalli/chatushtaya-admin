/* eslint-disable react/prop-types */
export default function AllReports({ reports, setSelectedReport }) {
    return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Reports</h2>
      <div className="grid grid-cols-1 gap-4">
        {reports.map((report, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 cursor-pointer"
            onClick={() => setSelectedReport(report)}
          >
            <p><strong>Type:</strong> {report.type.join(", ")}</p>
            <p><strong>Location:</strong> {report.location}</p>
            <p><strong>Date:</strong> {report.date}</p>
            <p><strong>Time:</strong> {report.time}</p>
          </div>
        ))}
      </div>
    </div>
  );    
}