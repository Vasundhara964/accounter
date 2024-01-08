import React, { useState } from 'react';
//import { useDropzone } from 'react-dropzone';
//import { useDropzone } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';


function FileUpload() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    // Update the state with the uploaded files
    setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
  };

  const filesList = uploadedFiles.map((file, index) => (
    <li key={index}>{file.name}</li>
  ));

  return (
    <div>
      <h2>File Upload</h2>
      <div>
        <h3>Uploaded Files:</h3>
        <ul>{filesList}</ul>
      </div>
      <div>
        <h3>Upload New Files:</h3>
        <div className="dropzone">
          <Dropzone onDrop={onDrop} accept="image/*">
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="dropzone-box">
                <input {...getInputProps()} />
                <p>Drag and drop files here or click to select files</p>
              </div>
            )}
          </Dropzone>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
