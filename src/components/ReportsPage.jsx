import {useState} from 'react';
import AllReports from './AllReports';
import ReportDetails from './ReportDetails';

export default function ReportsPage() {
    const [selectedReport, setSelectedReport] = useState(null);
    const reports = [
        {
          type: ["verbal abuse", "harassment"],
          location: "Building A",
          date: "2024-12-01",
          time: "10:30 AM",
          evidenceurls: ["https://example.com/photo1.jpg", "https://example.com/video1.mp4"],
          isAnonymous: true,
          user: "Anonymous"
        },
        {
          type: ["vandalism"],
          location: "Parking Lot",
          date: "2024-12-02",
          time: "2:00 PM",
          evidenceurls: ["https://example.com/photo2.jpg"],
          isAnonymous: false,
          user: "John Doe"
        }
      ];

  return (
    <div>
        {(selectedReport ? (
          <ReportDetails report={selectedReport} onBack={() => setSelectedReport(null)} />
        ) : (
          <AllReports reports={reports} setSelectedReport={setSelectedReport} />
        ))}
    </div>
  )
}
