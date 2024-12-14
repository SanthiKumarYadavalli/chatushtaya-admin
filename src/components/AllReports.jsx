/* eslint-disable react/prop-types */
export default function AllReports({ reports, setSelectedReport }) {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Reports</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer border border-gray-200 hover:border-blue-400"
              onClick={() => setSelectedReport(report)}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Report Type and Location */}
                <div className="flex-grow">
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    <strong>Type:</strong> {report.type.join(", ")}
                  </p>
                  <p className="text-md text-gray-600 mb-4">
                    <strong>Location:</strong> {report.location}
                  </p>
                </div>
  
                {/* Date and Time */}
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <p className="text-md text-gray-500">
                    <strong>{report.date}</strong>
                  </p>
                  <p className="text-md text-gray-500">{report.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  