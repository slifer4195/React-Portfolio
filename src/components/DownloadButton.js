import React from 'react';
import "./DownloadButton.css"

function DownloadButton({ onClick }) {
  return (
    <button className="download-button" onClick={onClick}>
      PDF
    </button>
  );
}

export default DownloadButton;
