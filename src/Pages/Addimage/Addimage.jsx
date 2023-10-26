import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Addimage.css';
import Footer from '../../Components/Navbar/Home/Foooter/Footer';
import img1 from '../../assets/About.webp'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

const Addimage = () => {

    const [selectedFiles, setSelectedFiles] = useState(null);
    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
      };

 
      const handleUpload = async () => {
        alert('image Added Suceesfully ')

      
       
        if (!selectedFiles || selectedFiles.length === 0) {
          return;
        }
    
        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
          formData.append('images', selectedFiles[i]);
        }
    
        try {
          const response = await axios.post('http://localhost:8000/api/v1/Addimage', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    console.log(response);
          // Handle response from backend if needed
        } catch (error) {
          console.error('Error uploading data:', error);
        }
       
      };

  return (
    <>
      <div className='rootcontainer'>
    <h3 className='Heading'>Your Personal Details</h3>
    <TextField fullWidth name="image" onChange={handleFileChange} type='file'  variant="outlined" />
        <Button fullWidth onClick={handleUpload} variant="contained">Upload</Button>
</div>
    </>
  );
}

export default Addimage;
