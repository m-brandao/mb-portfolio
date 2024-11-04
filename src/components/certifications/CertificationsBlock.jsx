import certificationsData from '../../assets/data/certifications.json';
import { FiExternalLink } from "react-icons/fi";

export default function CertificationsBlock() {
  return (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificationsData['certifications'].map((certification, index) => (
        <a
          href={certification.credentialURL}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="relative bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:bg-gray-700"
        >
          <FiExternalLink className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 transition-colors duration-200" />
          <div className="flex flex-col items-start mb-4">
            <h3 className="text-2xl font-semibold text-white mb-2">{certification.title}</h3>
            <p className="text-gray-400">{certification.issuer}</p>
            <p className="text-xs text-gray-400">{certification.issueDate}</p>
          </div>
        </a>
      ))}
    </div>
  </>
  )
}
