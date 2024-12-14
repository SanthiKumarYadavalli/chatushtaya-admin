import {useEffect, useState} from 'react';
import AllReports from './AllReports';
import ReportDetails from './ReportDetails';
import { fetchAllReports } from '../../backend/utils';


export default function ReportsPage() {
    const [selectedReport, setSelectedReport] = useState(null);
    const [reports, setReports] = useState([]);

    async function getAllReports() {
        const reports = await fetchAllReports();
        setReports(reports);
    }

    useEffect(() => {
        getAllReports();
    }, []);

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
