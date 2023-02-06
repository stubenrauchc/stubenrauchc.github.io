import React, { useState } from "react";
import { Document, Page } from "react-pdf";

const PDF_URL_MAP = [
  {
    folder: "CyberSecurity",
    files: [
      { name: "advancedpenetrationtesting.pdf", url: "LibraryOfChrisPDF/CyberSecurity/advancedpenetrationtesting.pdf" },
      { name: "attackingnetworkprotocols_ebook.pdf", url: "LibraryOfChrisPDF/CyberSecurity/attackingnetworkprotocols_ebook.pdf" },
    ],
  },
  {
    folder: "Programming",
    files: [
      { name: "GIT-Succinctly.pdf", url: "./LibraryOfChrisPDF/Programming/Git/GIT-Succinctly.pdf" },
      { name: "androidcookbook.pdf", url: "https://stubenrauchc.github.io/TheLibraryOfChris/TheLibraryOfChris/Programming/Java/androidcookbook.pdf" }
      ,
    ],
  },
];

const App = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfUrl, setPdfUrl] = useState("");

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onOpenPdf = (url) => {
    setPdfUrl(url);
  };

  const onClosePdf = () => {
    setPdfUrl("");
  };

  return (
    <div>
      <h1>My PDF Library</h1>
      {PDF_URL_MAP.map((folder) => (
        <div key={folder.folder}>
          <h2>{folder.folder}</h2>
          <div>
            {folder.files.map((file) => (
              <div key={file.name} style={{ display: "inline-block", marginRight: "10px" }}>
                <img
                  src="https://via.placeholder.com/150x150.png?text=PDF"
                  alt={file.name}
                  onClick={() => onOpenPdf(file.url)}
                  style={{ cursor: "pointer" }}
                />
                <br />
                {file.name}
              </div>
            ))}
          </div>
        </div>
      ))}
      {pdfUrl && (
        <div>
          <button onClick={onClosePdf}>Close PDF</button>
          <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      )}
    </div>
  );
};

export default App;
