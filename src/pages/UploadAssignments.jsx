import React, { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './uploadAssignment.css';

// Mock JSON data to simulate a backend response
const mockJsonFile = {
  uploadedFiles: [],
};

const UploadAssignments = () => {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState('No file chosen');
    const [selectedFile, setSelectedFile] = useState(null);
    const [mockFiles, setMockFiles] = useState(mockJsonFile.uploadedFiles);

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
    } else {
      setFileName('No file chosen');
      setSelectedFile(null);
    }
  };


const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const fileData = {
        fileName: selectedFile.name,
        fileSize: selectedFile.size,
      };

      const updatedFiles = [...mockFiles, fileData];
      setMockFiles(updatedFiles);

      setFileName('No file chosen');
      setSelectedFile(null);

      alert('File uploaded successfully! Check the mock data below.');
    } else {
      alert('No file selected');
    }
  };

  
  return (
    <div className='app__upload padding__section'>
      <div className='app__upload-container'>
        <h1 className='headtext'>Upload Your Assignment</h1>
        
        <FaPlus 
          className='app__upload-icon' 
          color='#455' 
          size={50} 
          onClick={handleIconClick} 
        />

        <input
          ref={fileInputRef}
          className='app__upload-input'
          id='upload-file'
          type="file"
          onChange={handleFileChange}
        />

        <h3>{fileName}</h3>
        <h3>or drop file</h3>

        {/* Upload button */}
        <button onClick={handleFileUpload} className='custom__button'>
          Upload File
        </button>

        <div className="app__upload-mock-data">
          <h2>Uploaded Files (Mock Data):</h2>
          {mockFiles.length > 0 ? (
            <ul>
              {mockFiles.map((file, index) => (
                <li key={index}>
                  {file.fileName} - {Math.round(file.fileSize / 1024)} KB
                </li>
              ))}
            </ul>
          ) : (
            <p>No files uploaded yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadAssignments;
