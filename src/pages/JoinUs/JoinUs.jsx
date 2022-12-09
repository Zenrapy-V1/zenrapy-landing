import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
import { BsChevronDown } from 'react-icons/bs'
import Logo from "../../assets/logo2.png"
import Upload from "../../assets/upload.png"
import SubmitMark from "../../assets/submitMark.png"
import Footer from '../../components/Footer'
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
import Select from 'react-select'
import axios from "axios"
import {useNavigate} from 'react-router-dom';
import Uploader from "./Uploader"

const JoinUs = () => {
    const [active, setActive] = useState(1)
    const [interest, setInterest] = useState([])  
    const [value, setvalue] = useState('')
    const [label, setLabel] = useState('')
    const [activeBut, setActiveBut] = useState(0)
    const [email, setEmail] = useState("")
    const [fullName, setName] = useState("")
    const [phoneNumber, setPhone] = useState("")
    const [gender, setGender] = useState("")    
    const [state, setState] = useState("")
    const [services, setServiceType] = useState([])
    const [feedback, setFeedback] = useState("")
    const [licence, setLincese] = useState("")
    const [experience, setExperience] = useState("")
    const [tools, setTools] = useState([])
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [imageLoading, setImageLoading] = useState("Upload a file")
     const [submitState, setSubmitState] = useState("Submit applicaiton")

    const [data, setData] = useState({
       fullName: "",
        email: "",
        gender: "Male",
        phoneNumber: "",
        services: [],
        experience: "",
        state: "",
        facebook_profile_url: "",
        instagram_profile_url: "",
        feedback: "",
        tools: "",
                

    })

    const navigate = useNavigate();

    const  options  = [
    { label:  'Swedish massage', value: ' Swedish massage'  },
    { label:  'Hot stone massage', value: ' Hot stone massage'  },
    { label:  'Deep tissue massage', value: ' Deep tissue massage'  },
    { label:  'Relaxation massage', value: ' Relaxation massage'  },  
    { label:  'Sports massage', value: ' Sports massage'  },
    { label:  'Tigger point massage', value: ' Tigger point massage'  },
    { label:  'Reflexology', value: ' Reflexology'  },
    { label:  'Shiatsu massage', value: ' Shiatsu massage'  },
    { label:  'Thai massage', value: ' Thai massage'  },
    { label:  'Pre-natal massage', value: ' Pre-natal massage'  },
    { label:  'Massage by chair', value: ' Massage by chair'  },
  ]

  const experienceOptions = [
  { value: '0 - 1', label: '0 - 1' },
  { value: '1 - 2', label: '1 - 2' },
  { value: '2 - 4', label: '2 - 4' },
  { value: '5 - Above', label: '5 - Above' }
]

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

  const handleOnchange  =  e  => {  
    setServiceType([e])        
  }

const handleSubmitting = () => {
      setSubmitState("Submitting...")
  }
  
  
   const handleUpload = (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'zenrapy-upload')
        setImageLoading("Uploading...")
        axios.post('https://api.cloudinary.com/v1_1/zenrapy-cloud/image/upload',data)
        .then(res=>{
           setImageLoading("Uploaded")
            setLincese(res.data.secure_url)
        })
       }


  const submitForm = async (e) => {
            e.preventDefault();

            const phone_number = phoneNumber
            const facebook_profile_url = facebook
            const instagram_profile_url = instagram

            const submitData = {
            email,
            fullName,
            phone_number,
            state,
            feedback,
            gender,
            services,
            licence,
            experience,
            tools,
            facebook_profile_url,
            instagram_profile_url

            }
        axios.post("http://zenrapy.up.railway.app/landing_page/newsletter_subscription/",  submitData,{
             headers: {
                'Content-Type': 'application/json'
            }
            }).then((response) => {
            console.log("Therapist registered")
            setActive(5)
                
            }).catch(error => {
            console.log(error)
            }) 

            console.log(submitData)
           
        }
            console.log(email)
            console.log(fullName)

          // drag state
    const [dragActive, setDragActive] = useState(false);
    
    // handle drag events
    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
        } else if (e.type === "dragleave") {
        setDragActive(false);
        }
    };

       const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // at least one file has been dropped so do something
            // handleFiles(e.dataTransfer.files);
        }
        };

    const handleImageChange = (e) => {
        setLincese(e.target.files[0]);
    };
    
    console.log(services)
    console.log(licence)
    console.log(experience.value)

    return (
        <>  
        {active === 1 && 
        <div className='therapist_join' id='no-background'>
            <div className='join-form'>
                <div className='left-text'>
                    <Link to="/" >
                         <img src={Logo} />
                    </Link>
                    <div className='logo-text'>
                        <h3>Are you a massage Therapist?</h3>
                        <p>Send in your application now to join zenrapy</p>
                    </div>                    
                </div>
                <form className='form' onSubmit={submitForm} onDragEnter={handleDrag}>
                    <h3>Sign Up</h3>
                    <div>
                        <p>Full Name</p>
                         <input 
                         type="text" 
                         placeholder=''  
                         onChange={(e)=>setName(e.target.value)}
                         value={fullName}

                         />
                    </div>

                    <div>
                        <p>Email</p>
                         <input 
                         type="text" placeholder='' 
                         placeholder=''  
                         onChange={(e)=>setEmail(e.target.value)}
                         value={email}
                         
                         />
                    </div>
                     <div>
                        <p>Phone</p>
                         <input 
                         type="text" 
                         placeholder=''
                         placeholder=''  
                         onChange={(e)=>setPhone(e.target.value)}
                         value={phoneNumber} 
                         />
                    </div>
                     <div className='gender'>
                            <p>Gender</p>
                            <select className='select'
                            placeholder=''  
                            onChange={(e)=>setGender(e.target.value)}
                            value={gender}
                            >
                                <option>Your Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>                                
                            </select>
                        </div>
                    <div>
                        <p>State</p>
                         <input 
                         type="text" 
                         placeholder=''                         
                         onChange={(e)=>setState(e.target.value)}
                         value={state}
                         />
                    </div>
                    <button
                    onClick={() => setActive(2)}
                    > Next </button>
                </form>
                
            </div>          
                 
        </div>
    }
    {active === 2 &&
     <>
     <div className='therapist_join'>
        <div className='page2'>
             <img src={Logo} />
            <div className='page2-form'>
                <h3>Sign Up</h3>
                 <div className='multiple-select'>
                    <p>Massage service types you do</p>
                    <MultiSelect
                        className="select"
                        onChange={handleOnchange}
                        options={options}
                        value={services}
                        placeholder="You can select multiple service types"
                    />
                </div>
               
                <div className='radio-section'>
                     <p>Are you lincesed? if yes upload your lincese copy/CV of where you worked previously </p>
                     <div className='radios'>
                        <div>
                            <p>Yes</p>
                            <input type="radio" checked={activeBut===0} onClick={() => setActiveBut(0)} />
                        </div>
                        
                        <div>
                            <p>No</p>
                            <input type="radio" checked={activeBut===1} onClick={() => setActiveBut(1)} />
                        </div>                        
                     </div>
                    <Uploader 
                        dragActive={dragActive} 
                        setDragActive={setDragActive} 
                        handleDrag={handleDrag} 
                        handleDrop={handleDrop} 
                        licence={licence}
                        setLincese={setLincese}
                        handleImageChange={handleImageChange}
                        handleUpload={handleUpload}
                        imageLoading={imageLoading}
                        />
                </div>
                <div className='footer'>
                    <p onClick={() => setActive(1)}>Back</p>
                    <button onClick={() => setActive(3)}>Next</button>

                </div>
            </div>
        </div>
       
     </div>
      </>
    
    }
     {active === 3 &&
        <div className='therapist_join'>
             <div className='page2'>
                  <img src={Logo} />
                    <div className='page2-form'>
                        <h3>Sign Up</h3>
                        <div className='experience'>
                            <p>Years of experience</p>
                            <Select 
                                className='select' 
                                classNamePrefix="react-select"
                                options={experienceOptions} 
                                value={experience}
                                 onChange={(e)=>setExperience(e)}
                                // styles={customStyles}
                                
                            />
                        </div>
                       <div className='text'>
                        <p>Do you have any message for us? Type it here </p>
                        <textarea value={feedback} 
                         onChange={(e)=>setFeedback(e.target.value)}
                        >

                        </textarea>
                       </div>

                        <div className='text'>
                        <p>Please list your home massage tools (Separate by enter key or comma)</p>
                        <textarea value={tools}  
                        onChange={(e)=>setTools(e.target.value)} 
                        >

                        </textarea>
                       </div>

                       <div className='links'>
                        <div>
                            <p>Facebook profile Link</p>
                            <input type="text" value={facebook}  onChange={(e)=>setFacebook(e.target.value)} />

                        </div>
                        <div>
                            <p>Instagram profile Link</p>
                            <input type="text" value={instagram}  onChange={(e)=>setInstagram(e.target.value)} />
                        </div>
                       </div>
                         <div className='footer'>
                            <p onClick={() => setActive(2)}>Back</p>
                            <button onClick={() => setActive(4)}>Next</button>

                        </div>
                        
                    </div>

              </div>
        </div>
      }
       {active === 4 &&
       <div className='therapist_join'>
             <div className='page2'>
                  <img src={Logo} />
                    <div className='page2-form'>
                       <h3>Review your application</h3>
                       <div className='preview'>
                            <h4>Name</h4>
                            <p>{fullName ? fullName : ""}</p>
                       </div>
                        <div className='preview'>
                            <h4>Email</h4>
                            <p>{email ? email : ""} </p>
                       </div>
                        <div className='preview'>
                            <h4>Mobile Number</h4>
                            <p>{phoneNumber ? phoneNumber : ""}</p>
                       </div>
                        <div className='preview'>
                            <h4>Skills Services</h4>
                            <p>{services ? services: ""} </p>
                       </div>
                        <div className='preview'>
                            <h4>Experience</h4>
                            <p>{experience.label ? experience.label : ""} </p>
                       </div>
                        <div className='preview'>
                            <h4>Tools</h4>
                            <p>{tools ? tools : ""} </p>
                       </div>
                        <form className='footer-preview' onSubmit={submitForm}>
                            <button className='back' onClick={() => setActive(3)}>Back</button>
                            <button 
                            className='next' 
                            onClick={handleSubmitting}
                            >
                                {submitState}
                            </button>

                        </form>
                    </div>
                    
             </div>
        </div>
       }
       {active === 5 &&
       <div className='therapist_join'>
             <div className='page2'>
                 <div className='submit-page'>
                    <div className='submit-item'>
                       <img src={SubmitMark} />
                     </div>
                     <div className='submit-item'>
                      <h5>We have received your Application </h5>
                        
                    </div>
                     <div className='submit-item'>
                       <p>We will get back to you shortly, please check your mail</p>
                    </div>
                     <div className='submit-item'>
                      <Link to="/">
                         <button>Done</button>
                      </Link>
                    </div>
                    
                 </div>
                               
              </div>  
        </div>
       }
    </>
    );
}
 
export default JoinUs;