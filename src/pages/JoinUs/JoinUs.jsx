import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo1.png";
import ApplicationImg from "../../assets/therapistSignUp.png";
import "./index.scss";
// import {TiArrowSortedDown} from "react-icons/ti"

const JoinUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    age: "",
    gender: "",
    state: "",
    localGovernmentArea: "",
  });
  const [states, setStates] = useState([]);
  const [localGovernments, setLocalGovernments] = useState([]);

  useEffect(() => {
    axios.get("https://tinyurl.com/state-lga-api").then((response) => {
      setStates(response.data);
    });
  }, []);

  const handleStateChange = (event) => {
    setFormData({ ...formData, state: event.target.value });
    const selectedState = states.find(
      (state) => state.state === event.target.value
    );
    if (selectedState) {
      setLocalGovernments(selectedState.lgas);
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {};
    axios
      .post("https://jsonplaceholder.typicode.com/comments", formData)
      .then((response) => {
        // navigate to the next phase of signup
        navigate("/therapist-registration");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="signupWrapper">
        <div className="leftContent">
          <div className="logoContainer" to="/">
            <img src={Logo} alt="logo" />
          </div>
          <p>
            Are you a massage therapist? send in your application now to join
            zenrapy’s network{" "}
          </p>
          <p className="already">
            Already registered and got approved? <Link to="/sign-in">Sign-In</Link>
          </p>
          <h5>Register</h5>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="test"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                id="test"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="age">Age</label>
              <input
                type="number"
                name="age"
                id="test"
                value={formData.age}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="state">State</label>
              <select
                name="state"
                id="test"
                value={formData.state}
                onChange={handleStateChange}
                required
              >
                <option value="">--Select State--</option>
                {states.map((state) => (
                  <option key={state.state} value={state.state}>
                    {state.state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="localGovernmentArea">Local Govt (LGA)</label>
              <select
                name="localGovernmentArea"
                id="test"
                value={formData.localGovernmentArea}
                onChange={handleInputChange}
                required
              >
                <option value="">--Select Local Government Area--</option>
                {localGovernments.map((localGovernment) => (
                  <option key={localGovernment} value={localGovernment}>
                    {localGovernment}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="test"
                value={formData.gender}
                onChange={handleInputChange}
                required
              >
                <option value="">--Select Gender--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="submit-btn">
              <button type="submit">Next</button>
            </div>
          </form>
        </div>
        <div className="rightContent">
          <img src={ApplicationImg} alt="" to="/"/>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
// import React, { useState, useEffect } from "react";

// const JoinUs = () => {
//     const [fullName, setFullName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [selectedState, setSelectedState] = useState('');
//   const [localGovernmentArea, setLocalGovernmentArea] = useState('');

//   const handleFullNameChange = (event) => setFullName(event.target.value);
//   const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
//   const handleAgeChange = (event) => setAge(event.target.value);
//   const handleGenderChange = (event) => setGender(event.target.value);
//   const handleStateChange = (event) => setSelectedState(event.target.value);
//   const handleLocalGovernmentAreaChange = (event) => setLocalGovernmentArea(event.target.value);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Here you would send a POST request to your API endpoint with the form data

//     console.log('Submitting form: ', { fullName, phoneNumber, age, gender, selectedState, localGovernmentArea });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//         <label htmlFor="fullName">Full Name:</label>
//       <input
//         type="text"
//         id="fullName"
//         name="fullName"
//         value={fullName}
//         onChange={handleFullNameChange}
//         required
//       />

// <label htmlFor="phoneNumber">Phone Number:</label>
//       <input
//         type="text"
//         id="phoneNumber"
//         name="phoneNumber"
//         value={phoneNumber}
//         onChange={handlePhoneNumberChange}
//         required
//       />

// <label htmlFor="age">Age:</label>
//       <input
//         type="number"
//         id="age"
//         name="age"
//         value={age}
//         onChange={handleAgeChange}
//         required
//       />

// <label htmlFor="gender">Gender:</label>
//       <select
//         id="gender"
//         name="gender"
//         value={gender}
//         onChange={handleGenderChange}
//         required
//       >
//         <option value="">Select Gender</option>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//       </select>

//       <label htmlFor="state">State:</label>
//       <select
//         id="state"
//         name="state"
//         value={selectedState}
//         onChange={handleStateChange}
//         required
//       >
//         <option value="">Select a state</option>
//         <option value="Lagos">Lagos</option>
//         <option value="Abuja">Abuja</option>
//       </select>

//       <label htmlFor="local">Local Government Area:</label>
//       <input
//         type="text"
//         id="local"
//         name="local"value={localGovernmentArea}
//         onChange={handleLocalGovernmentAreaChange}
//         required
//       />
//       <button type="submit">Next</button>
//     </form>
//   )
// }

// export default JoinUs

// const JoinUs = () => {
//   const [fullName, setFullName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedLocal, setSelectedLocal] = useState("");
//   const [states, setStates] = useState([]);
//   const [locals, setLocals] = useState([]);

//   useEffect(() => {
//     fetch(
//       "https://gist.githubusercontent.com/segebee/7dde9de8e70a207e6e19/raw/90c91f7318d67c9534e3a4d74e4bd755b144e01e/gistfile1.txt"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setStates(data);
//       });
//   }, []);

//   const handleStateChange = (event) => {
//     const selectedState = states.find(
//       (state) => state.state.name === event.target.value
//     );
//     setSelectedState(selectedState);
//     setLocals(selectedState.state.locals);
//   };

//   const handleLocalChange = (event) => {
//     const selectedLocal = locals.find(
//       (local) => local.name === event.target.value
//     );
//     setSelectedLocal(selectedLocal);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = {
//       fullName,
//       phoneNumber,
//       age,
//       gender,
//       selectedState,
//       selectedLocal,
//     };
//     fetch("api/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="fullName">Full Name:</label>
//       <input
//         type="text"
//         id="fullName"
//         value={fullName}
//         onChange={(event) => setFullName(event.target.value)}
//         required
//       />

//       <label htmlFor="phoneNumber">Phone Number:</label>
//       <input
//         type="tel"
//         id="phoneNumber"
//         value={phoneNumber}
//         onChange={(event) => setPhoneNumber(event.target.value)}
//         required
//       />

//       <label htmlFor="age">Age:</label>
//       <input
//         type="number"
//         id="age"
//         value={age}
//         onChange={(event) => setAge(event.target.value)}
//         required
//       />

// <label htmlFor="gender">Gender:</label>
// <select
//   id="gender"
//   value={gender}
//   onChange={event => setGender(event.target.value)}
//   required
// >
//   <option value="" disabled>Select your gender</option>
//   <option value="male">Male</option>
//   <option value="female">Female</option>
// </select>

//       <label htmlFor="state">State:</label>
//       <select
//         name="state"
//         id="state"
//         value={selectedState}
//         onChange={handleStateChange}
//         required
//       >
//         <option value="" disabled>
//           Select a state
//         </option>
//         {states.map((state) => (
//           <option key={state.state.id} value={state.state.name}>
//             {state.state.name}
//           </option>
//         ))}
//       </select>

//       <label htmlFor="local">Local Government Area:</label>
//       <select
//         name="local"
//         id="local"
//         value={selectedLocal}
//         onChange={handleLocalChange}
//         required
//       >
//         <option value="" disabled>
//           Select a local government area
//         </option>
//         {locals.map((local) => (
//           <option key={local.id} value={local.name}>
//             {local.name}
//           </option>
//         ))}
//       </select>

//       <button type="submit">Next</button>
//     </form>
//   );
// };

// export default JoinUs;

// import React, { useState, useEffect } from "react";
// import "./index.scss";
// import Logo from "../../assets/logo1.png";
// import SignupImg from "../../assets/therapistSignUp.png";

// const JoinUs = () => {
//   return (
//     <div className="signupWrapper">
//       <div className="leftContent">
//         <div className="logoContainer">
//           <img src={Logo} alt="" />
//         </div>
//         <p>
//           Are you a massage therapist? send in your application now to join
//           zenrapy’s network{" "}
//         </p>

//         <form action="">
//           <div className="form-group">
//             <div>
//               <label htmlFor="name">Full Name</label>
//             </div>
//             <div className="input-group">
//               <input type="text" name="name" id="name" required />
//             </div>
//           </div>

//           <div className="form-group">
//             <div>
//               <label htmlFor="number">Number</label>
//             </div>
//             <div className="input-group">
//               <input type="number" name="phone" id="phone" required />
//             </div>
//           </div>

//           <div className="form-group">
//             <div>
//               <label htmlFor="age">Age</label>
//             </div>
//             <div className="input-group">
//               <input type="number" name="age" id="age" required />
//             </div>
//           </div>

//           <div class="form-group">
//             <div>
//               <label htmlFor="gender">Gender</label>
//             </div>
//             <div className="input-group">
//             <select name="" id="" style={{ width: "200px" }}></select>
//             </div>
//           </div>

//           <div className="form-group">
//             <div>
//               <label htmlFor="state">State</label>
//             </div>
//             <div className="input-group">
//               <select name="" id="" style={{ width: "200px" }}></select>
//             </div>
//           </div>

//           <div className="form-group">
//             <div>
//               <label htmlFor="lga">Local Govt</label>
//             </div>
//             <div className="input-group">
//               <select name="" id="" style={{ width: "200px" }}></select>
//             </div>
//           </div>

//           <div>
//             <button>Next</button>
//           </div>
//         </form>
//       </div>

//       <div className="rightContent">
//         <img src={SignupImg} alt="" />
//       </div>
//     </div>
//   );
// };

// export default JoinUs;

// END

// const [states, setStates] = useState([]);
//   const [selectedState, setSelectedState] = useState(null);
//   const [locals, setLocals] = useState([]);
//   const [selectedLocal, setSelectedLocal] = useState(null);

//   useEffect(() => {
//     fetch(
//       "https://gist.githubusercontent.com/segebee/7dde9de8e70a207e6e19/raw/90c91f7318d67c9534e3a4d74e4bd755b144e01e/gistfile1.txt"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setStates(data);
//       });
//   }, []);

//   const handleStateChange = (event) => {
//     const selectedState = states.find(
//       (state) => state.state.name === event.target.value
//     );
//     setSelectedState(selectedState);
//     setLocals(selectedState.state.locals);
//   };

//   const handleLocalChange = (event) => {
//     const selectedLocal = locals.find(
//       (local) => local.name === event.target.value
//     );
//     setSelectedLocal(selectedLocal);
//   };

// <div>
//     <select onChange={handleStateChange}>
//         <option value="">Select a state</option>
//         {states.map(state => (
//             <option key={state.state.id} value={state.state.name}>
//                 {state.state.name}
//             </option>
//         ))}
//     </select>
//     {selectedState && (
//         <select onChange={handleLocalChange}>
//             <option value="">Select a local government area</option>
//             {locals.map(local => (
//                 <option key={local.id} value={local.name}>
//                     {local.name}
//                 </option>
//             ))}
//         </select>
//     )}
//     {selectedLocal && <p>Selected local government area: {selectedLocal.name}</p>}
// </div>
