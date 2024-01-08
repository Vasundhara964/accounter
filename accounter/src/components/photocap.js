/*import React, { useState, useRef } from 'react';

function LivePhotoCapture({ onCapture }) {
  const videoRef = useRef(null);
  const [mediaStream, setMediaStream] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setMediaStream(stream);
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
      setMediaStream(null);
    }
  };

  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(blob => {
      onCapture(blob);
      stopCamera();
    }, 'image/jpeg');
  };

  return (
    <div>
      <h2>Live Photo Capture</h2>
      {mediaStream ? (
        <div>
          <video ref={videoRef} autoPlay />
          <button onClick={capturePhoto}>Capture Photo</button>
          <button onClick={stopCamera}>Stop Camera</button>
        </div>
      ) : (
        <button onClick={startCamera}>Start Camera</button>
      )}
    </div>
  );
}

export default LivePhotoCapture;
*/


/*import React, { useState, useRef } from 'react';

function LivePhotoCapture({ onSave }) {
  const videoRef = useRef(null);
  const [mediaStream, setMediaStream] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setMediaStream(stream);
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
      setMediaStream(null);
    }
  };

  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(blob => {
      onSave(blob);
      stopCamera();
    }, 'image/jpeg');
  };

  return (
    <div>
      <h2>Live Photo Capture</h2>
      {mediaStream ? (
        <div>
          <video ref={videoRef} autoPlay />
          <button onClick={capturePhoto}>Capture Photo</button>
          <button onClick={stopCamera}>Stop Camera</button>
        </div>
      ) : (
        <button onClick={startCamera}>Start Camera</button>
      )}
    </div>
  );
}

export default LivePhotoCapture;*/



import React, { useState, useRef } from 'react';

function LivePhotoCapture({ onSave }) {
  const videoRef = useRef(null);
  const [mediaStream, setMediaStream] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setMediaStream(stream);
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
      setMediaStream(null);
    }
  };

  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(blob => {
      stopCamera();
      onSave(blob);
    }, 'image/jpeg');
  };

  return (
    <div>
      <h2 style={{paddingTop:40,paddingLeft:5}}>Capture stock image Live</h2>
      {mediaStream ? (
        <div>
          <video ref={videoRef} autoPlay />
          <button onClick={capturePhoto}>Capture Photo</button>
          <button onClick={stopCamera}>Stop Camera</button>
        </div>
      ) : (
        <div style={{paddingLeft:5}}>
        <button onClick={startCamera} style={{color:'red'}}>Start Camera</button>
        </div>
      )}
    </div>
  );
}

export default LivePhotoCapture;


