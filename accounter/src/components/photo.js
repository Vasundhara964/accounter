/*import React, { useState } from 'react';
//import LivePhotoCapture from './LivePhotoCapture';
//import FileUpload from './FileUpload';
import LivePhotoCapture from './photocap';
//import FileUpload from './fileupload';
function App() {
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const handlePhotoCapture = blob => {
    setCapturedPhoto(blob);
  };

  return (
    <div className="App">
      <LivePhotoCapture onCapture={handlePhotoCapture} />
    </div>
  );
}

export default App;*/


/*import React from 'react';
//import TemporaryPhotoTable from './TemporaryPhotoTable';
import TemporaryPhotoTable from './phototable';
function App() {
  return (
    <div className="App">
      <TemporaryPhotoTable />
    </div>
  );
}

export default App;*/

import React from 'react';
import TemporaryPhotoTable from './phototable';

function App() {
  return (
    <div className="App">
      <TemporaryPhotoTable />
    </div>
  );
}

export default App;
