import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Addimage.css';
import Footer from '../../Components/Navbar/Home/Foooter/Footer';
import img1 from '../../assets/About.webp'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import imgs from '../../assets/img2.jpg'
const Addimage = () => {
const navigate = useNavigate();
let backendlink = "https://lazy-cyan-cod-slip.cyclic.ap p"
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '300px', // Adjust the width as needed
  // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
};

const imageStyle = {
  width: '270px',
  height: '250px',
  marginBottom: '16px',
};

const buttonStyle = {
  background: 'black',
  color: 'white',
  fontWeight: 'bold',
  padding: '8px 16px',
  marginTop: '12px',
  cursor: 'pointer',
};

  const [products, setProducts] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);
  const [Delete , setdelete] = useState(false);

    const [selectedFiles, setSelectedFiles] = useState(null);
    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
      };

      const getAllimages = async () => {
        try {
          const response = await axios.get(`https://lazy-cyan-cod-slip.cyclic.app/api/v1/Allimage`);
          console.log("response: ", response);
          console.log(products);
          setProducts(response.data.data);
        } catch (error) {
          console.log("error in getting all images", error);
        }
      };
      const deleteData = async (id)=>{
        try {
          const response = await axios.delete(`https://lazy-cyan-cod-slip.cyclic.app/api/v1/imagereq/${id}`)
          console.log("response: ", response.data);
          setdelete(!Delete)
        } catch (error) {
          console.log("error in getting all images", error);
        }
        alert("image Deleted");
      }
 
      const handleUpload = async () => {

      
       
        if (!selectedFiles || selectedFiles.length === 0) {
          return;
        }
    
        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
          formData.append('images', selectedFiles[i]);
        }
    
        try {
          alert('image Added Suceesfully ')
          window.location.reload(false);

          const response = await axios.post('https://lazy-cyan-cod-slip.cyclic.app/Addimage', formData, {
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
      useEffect(() => {
        console.log('asdasd')
        getAllimages()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , productsBoolean ])
    

  return (
    <>
      <div className='rootcontainer'>
    <h3 className='Heading'>Add image</h3>
    <TextField fullWidth name="image" onChange={handleFileChange} type='file'  variant="outlined" />
        <Button fullWidth onClick={handleUpload} variant="contained">Upload</Button>
</div>
<hr/>
<div className='flex  justify-evenly flex-wrap my-4'>

    {products.map((value) => (
      <div style={containerStyle}>
      <img src={value.imageUrl} alt="Fairs" style={imageStyle} />
<button style={buttonStyle} onClick={()=>{deleteData(value._id)}}>delete</button>
    </div>
    ))}  
    </div>

    </>
  );
}

export default Addimage;
