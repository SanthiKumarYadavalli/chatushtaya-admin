/* eslint-disable react/prop-types */
export default function ReportDetails({ report, onBack }) {
    return (
        <div className="p-4 bg-white rounded-lg shadow">
        <button className="mb-4 text-blue-500 hover:underline" onClick={onBack}>
            &larr; Back to Reports
        </button>
        <h2 className="text-2xl font-bold mb-4">Report Details</h2>
        <p><strong>Type:</strong> {report.type.join(", ")}</p>
        <p><strong>Location:</strong> {report.location}</p>
        <p><strong>Date:</strong> {report.date}</p>
        <p><strong>Time:</strong> {report.time}</p>
        <p><strong>Reported by:</strong> {report.isAnonymous ? "Anonymous" : report.user}</p>
        <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Evidence:</h3>
            <div className="grid grid-cols-1 gap-4">
            {report.evidenceurls.map((url, index) => (
                <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                View Evidence {index + 1}
                </a>
            ))}
            </div>
        </div>
        </div>
  );
}
