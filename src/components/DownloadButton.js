import React from 'react';
import './DownloadButton.css'; // Import your CSS file for styling

function DownloadButton({ pdfUrl, filename }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = filename;
    link.click();
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      Download PDF
    </button>
  );
}

export default DownloadButton;
