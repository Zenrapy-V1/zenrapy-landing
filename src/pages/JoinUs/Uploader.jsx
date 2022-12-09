import React, { useState, useRef } from 'react'
import "./index.scss"
import ContactBg from "../../assets/contactBg.png"
import { BsChevronDown } from 'react-icons/bs'
import Upload from "../../assets/upload.png"

const Uploader = ({dragActive, setDragActive, handleDrag, handleDrop, licence, handleImageChange, handleUpload, imageLoading}) => {
    const inputRef = useRef(null);

    const onButtonClick = () => {
    inputRef.current.click();
    };
    

    return (  
        <div className='uploader'>
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
                         <input 
                            accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
                            ref={inputRef} 
                            type="file" 
                            name='licence'
                            id="input-file-upload" 
                            multiple={true} 
                            onChange={handleUpload}
                            // value={lincese}
                         />
                        {/* <label id="label-file-upload" htmlFor="input-file-upload"> */}
                            <div className='upload-content'>
                                <img src={Upload} />
                                {/* <p>Drag and drop your file here or</p> */}
                                <button className="upload-button" onClick={onButtonClick}>{imageLoading}</button>
                            </div> 
                            { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
                        {/* </label> */}
                        {/* <div className='lincence-uploaded'>
                             {licence ? licence: ""}
                        </div> */}
                       
                     </label>
           
        </div>
    );
}
 
export default Uploader;