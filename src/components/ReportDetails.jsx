/* eslint-disable react/prop-types */
export default function ReportDetails({ report, onBack }) {
    return (
      <div className="p-7 bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-xl border border-gray-200">
        {/* Back Button */}
        <button
          className="flex items-center gap-2 mb-6 text-blue-600 font-semibold hover:text-blue-800 transition"
          onClick={onBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Reports
        </button>
  
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Report Details</h2>

        <Field label="Type" value={report.type.join(", ")} />
        <Field label="Location" value={report.location} />
        <Field label="Date" value={report.date} />
        <Field label="Time" value={report.time} />
        <Field label="Reported by" value={report.isAnonymous ? "Anonymous" : report.user} />
        <Field label="Harasser Details" value={report.harasserDetails} />
        <Field label="Additional Information" value={report.additionalInfo} />
  
        {/* Evidence Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Evidence</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {report.evidenceurls.map((url, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-blue-600 font-medium hover:underline truncate"
                >
                  View Evidence {index + 1}
                </a>
                {url.match(/\.(jpg|jpeg|png|gif)$/i) && (
                  <img
                    src={url}
                    alt={`Evidence ${index + 1}`}
                    className="mt-4 w-full h-48 object-cover rounded-lg"
                  />
                )}
                {url.match(/\.(mp4|webm|ogg)$/i) && (
                  <video
                    controls
                    className="mt-4 w-full h-48 object-cover rounded-lg"
                  >
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  const Field = ({ label, value }) => (
    <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">{label}</h3>
        <p className="text-gray-800 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
        {value}
        </p>
    </div>
);