/*import React, { useState } from 'react';
import LivePhotoCapture from './photocap';

function TemporaryPhotoTable() {
  const [capturedPhotos, setCapturedPhotos] = useState([]);

  const handlePhotoCapture = blob => {
    setCapturedPhotos([...capturedPhotos, blob]);
  };

  const photoRows = capturedPhotos.map((blob, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>
        <img src={URL.createObjectURL(blob)} alt={`Captured ${index + 1}`} width="100" />
      </td>
    </tr>
  ));

  return (
    <div>
      <h2>Temporary Photo Table</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>{photoRows}</tbody>
      </table>
      <LivePhotoCapture onSave={handlePhotoCapture} />
    </div>
  );
}

export default TemporaryPhotoTable;*/

/*import React, { useState } from 'react';
import LivePhotoCapture from './photocap';
import { Card } from '@mui/material';

function TemporaryPhotoTable() {
  const [capturedPhotos, setCapturedPhotos] = useState([]);
  const [photoName, setPhotoName] = useState('');

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedItem, setSearchedItem] = useState(null);

  const handlePhotoCapture = blob => {
    if (photoName.trim() !== '') {
      setCapturedPhotos([...capturedPhotos, { blob, name: photoName }]);
      setPhotoName('');
    }
  };

  const photoRows = capturedPhotos.map((item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>
        <img src={URL.createObjectURL(item.blob)} alt={`Captured ${index + 1}`} width="100" />
      </td>
      <td>{item.name}</td>
    </tr>
  ));




  return (
    <Card sx={{m:2,p:10,color:'black'} } style={{padding:20,height:900,backgroundColor:'d6b8a2'}} variant='outlined'>
    <div>
      <h2 style={{paddingLeft:5,fontFamily:'bold'}}>STOCK IMAGES</h2>
      <div>
        <label style={{paddingLeft:5,paddingTop:10}}>
          Name of the particular:
          <input
            type="text"
            value={photoName}
            onChange={event => setPhotoName(event.target.value)}
          />
          <LivePhotoCapture onSave={handlePhotoCapture} />
        </label>
        <input
        type="text"
        placeholder="Search by name or category"
        value={searchTerm}
        onChange={handleSearch}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Photo</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {photoRows}
        </tbody>
      </table>
    </div>
    </Card>
  );
}

export default TemporaryPhotoTable;*/

import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { Card } from '@mui/material';
import { FaSearch } from 'react-icons/fa';

function TemporaryPhotoTable() {
  const [photoRows, setPhotoRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const webcamRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCapture = () => {
    const capturedImage = webcamRef.current.getScreenshot();
    const newPhotoRow = {
      id: photoRows.length + 1,
      image: capturedImage,
      title: '',
      description: '',
    };
    setPhotoRows([...photoRows, newPhotoRow]);
    setIsCameraActive(false);
  };

  const handleStartCamera = () => {
    setIsCameraActive(true);
  };

  const handleStopCamera = () => {
    setIsCameraActive(false);
  };

  const handleTitleChange = (id, newTitle) => {
    const updatedPhotoRows = photoRows.map((photoRow) =>
      photoRow.id === id ? { ...photoRow, title: newTitle } : photoRow
    );
    setPhotoRows(updatedPhotoRows);
  };

  const handleDescriptionChange = (id, newDescription) => {
    const updatedPhotoRows = photoRows.map((photoRow) =>
      photoRow.id === id ? { ...photoRow, description: newDescription } : photoRow
    );
    setPhotoRows(updatedPhotoRows);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  const handleDeleteRow = (id) => {
    const updatedPhotoRows = photoRows.filter((photoRow) => photoRow.id !== id);
    setPhotoRows(updatedPhotoRows);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPhotoRows = photoRows.filter(
    (photoRow) =>
      photoRow.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photoRow.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card sx={{m:2,p:10,color:'black'} } style={{padding:20,height:1900,backgroundColor:'d6b8a2'}} variant='outlined'>
    <div>
    <h2 style={{paddingLeft:5,fontFamily:'bold',color:'orange'}}>STOCK IMAGES</h2>
      <h3 style={{color:'green',paddingTop:20,paddingLeft:10}}>Capture Stock images Live:</h3>
      <div style={{paddingTop:40,paddingRight:10,paddingLeft:10}}> 
        {isCameraActive ? (
          <>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <div style={{paddingLeft:10}}>
            <button onClick={handleCapture}>Capture Photo</button>
            </div>
            <div style={{paddingLeft:10,paddingTop:10}}>
            <button onClick={handleStopCamera}>Stop Camera</button>
            </div>
          </>
        ) : (
          <button onClick={handleStartCamera} style={{color:'blue'}}>Start Camera</button>
        )}
      </div>
      <div style={{paddingTop:10,paddingLeft:750}}> 
      <FaSearch/>
      <input
        type="text"
        placeholder="Search by title or description"
        style={{ width:200}}
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPhotoRows.map((photoRow) => (
            <tr key={photoRow.id}>
              <td>{photoRow.id}</td>
              <td>
                <img
                  src={photoRow.image}
                  alt={`Photo ${photoRow.id}`}
                  style={{ cursor: 'pointer', maxWidth: '50px' }}
                  onClick={() => handleImageClick(photoRow.image)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={photoRow.title}
                  required
                  onChange={(e) => handleTitleChange(photoRow.id, e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={photoRow.description}
                  onChange={(e) =>
                    handleDescriptionChange(photoRow.id, e.target.value)
                  }
                />
              </td>
              <td>
                <button onClick={() => handleDeleteRow(photoRow.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedImage && (
        <div>
          <h3>Detailed View of Image:</h3>
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%' }} />
          <div style={{paddingTop:20,paddingLeft:300}}>
          <button onClick={handleCloseImage}>Close Image</button>
          </div>
          

        </div>
      )}
    </div>
    </Card>
  );
}

export default TemporaryPhotoTable;
