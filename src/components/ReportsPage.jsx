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
          evidenceurls: [
            "https://i.pinimg.com/474x/c1/15/a4/c115a45d05dedc3cf4f674ab8ff1b0d4.jpg",
            "https://videos.pexels.com/video-files/5538137/5538137-hd_1920_1080_25fps.mp4",
            "https://sample-videos.com/img/Sample-jpg-image-500kb.jpg",
          ],
          isAnonymous: true,
          user: "Anonymous",
          harasserDetails: "Male, mid-30s, wearing a blue shirt",
          additionalInfo: "Incident occurred near the main entrance of the building."
        },
        {
          type: ["vandalism"],
          location: "Parking Lot",
          date: "2024-12-02",
          time: "2:00 PM",
          evidenceurls: [
            "https://via.placeholder.com/200",
          ],
          isAnonymous: false,
          user: "John Doe",
          harasserDetails: "Group of teenagers, possibly students, with backpacks.",
          additionalInfo: "Spray paint was used on the walls."
        },
        {
          type: ["theft"],
          location: "Library",
          date: "2024-12-03",
          time: "11:15 AM",
          evidenceurls: [
            "https://via.placeholder.com/300",
            "https://sample-videos.com/img/Sample-png-image-1mb.png"
          ],
          isAnonymous: true,
          user: "Anonymous",
          harasserDetails: "Unknown individual, seen wearing a cap and hoodie.",
          additionalInfo: "Laptop and books stolen from the study desk."
        },
        {
          type: ["physical assault"],
          location: "Cafeteria",
          date: "2024-12-04",
          time: "1:45 PM",
          evidenceurls: [
            "https://via.placeholder.com/250",
            "https://sample-videos.com/img/Sample-jpg-image-1mb.jpg"
          ],
          isAnonymous: false,
          user: "Jane Smith",
          harasserDetails: "Two individuals involved, one tall and the other shorter, both male.",
          additionalInfo: "Fight started over a seating dispute."
        },
        {
          type: ["cyberbullying"],
          location: "Online",
          date: "2024-12-05",
          time: "9:00 PM",
          evidenceurls: [
            "https://via.placeholder.com/400",
            "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_10mb.mp4"
          ],
          isAnonymous: true,
          user: "Anonymous",
          harasserDetails: "Unknown, online alias: 'CyberWarrior99'.",
          additionalInfo: "Threatening messages sent through social media platforms."
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
