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

const JoinUs = () => {
    const [active, setActive] = useState(1)
    const [interest, setInterest] = useState([])  
    const [value, setvalue] = useState('')
    const [label, setLabel] = useState('')
    const [activeBut, setActiveBut] = useState(0)

    const  options  = [
    { label:  'Swedish massage', value:  'Swedish massage'  },
    { label:  'Hot stone massage', value:  'Hot stone massage'  },
    { label:  'Deep tissue massage', value:  'Deep tissue massage'  },
    { label:  'Relaxation massage', value:  'Relaxation massage'  },  
    { label:  'Sports massage', value:  'Sports massage'  },
    { label:  'Tigger point massage', value:  'Tigger point massage'  },
    { label:  'Reflexology', value:  'Reflexology'  },
    { label:  'Shiatsu massage', value:  'English and Literature'  },
    { label:  'Thai massage', value:  'Technical Writing'  },
    { label:  'Pre-natal massage', value:  'Technical Writing'  },
    { label:  'Massage by chair', value:  'Technical Writing'  },
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

  const  handleOnchange  =  e  => {
    setvalue(e)  
    setInterest([e])        
  }

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
                <form className='form'>
                    <h3>Sign Up</h3>
                    <div>
                        <p>Full Name</p>
                         <input type="text" placeholder='' />
                    </div>

                    <div>
                        <p>Email</p>
                         <input type="text" placeholder='' />
                    </div>
                     <div>
                        <p>Phone</p>
                         <input type="text" placeholder='' />
                    </div>
                     <div className='gender'>
                            <p>Gender</p>
                            <select className='select'>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>                                
                            </select>
                        </div>
                    <div>
                        <p>State</p>
                         <input type="text" placeholder='' />
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
                     <div className='upload'>
                       <img src={Upload} /> 
                     </div>
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
                                // styles={customStyles}
                            />
                        </div>
                       <div className='text'>
                        <p>Do you have any message for us? Type it here </p>
                        <textarea >

                        </textarea>
                       </div>

                        <div className='text'>
                        <p>Please list your home massage tools (Separate by enter key or comma)</p>
                        <textarea >

                        </textarea>
                       </div>

                       <div className='links'>
                        <div>
                            <p>Facebook profile Link</p>
                            <input type="text" />

                        </div>
                        <div>
                            <p>Instagram profile Link</p>
                            <input type="text" />
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
                            <p>Temidayo Akinbi </p>
                       </div>
                        <div className='preview'>
                            <h4>Email</h4>
                            <p>Temidayo Akinbi </p>
                       </div>
                        <div className='preview'>
                            <h4>Mobile Number</h4>
                            <p>Temidayo Akinbi </p>
                       </div>
                        <div className='preview'>
                            <h4>Skills Services</h4>
                            <p>Temidayo Akinbi </p>
                       </div>
                        <div className='footer-preview'>
                            <button className='back' onClick={() => setActive(3)}>Back</button>
                            <button className='next' onClick={() => setActive(5)}>Submit applicaiton</button>

                        </div>
                    </div>
                    
             </div>
        </div>
       }
       {active === 5 &&
       <div className='therapist_join'>
             <div className='page2'>
                 <div className='submit-page'>
                    <div className='submit-item'>
                       <img src={SubmitMark } />
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