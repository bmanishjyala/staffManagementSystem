import React,{useState,useEffect} from 'react'
import { db } from "./firebaseConfig";
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
export default function Details({email,profile}) {
    const userCollectionRef = collection(db, "details");
    const [Record, setRecord] = useState([])
    const [error, setError] = useState(false)
    const[value,setValue]=useState(null);
    const[searchBy,setSearchBy]=useState(null);
 useEffect(() => {
    const q = query(userCollectionRef, where("email", "==", email));
         
    onSnapshot(q,(snapshot)=>{
        let b=[]
        snapshot.docs.forEach((doc)=>{
            b.push({...doc.data(),id:doc.id})
        })
        setRecord(b)
    })
  
 }, [])
 
   
  return (
    <div className='home'>
       { 
           Record ?Record.map((dox)=>{
             return(<div className='col-sm-12'>
             <div class="card  m-3">
              <div class="card-header d-flex">
                <img src={profile} alt="avatar" style={{width:"45px",height:"45px",borderRadius:"50%"}} />
                <h2 className='pt-2 mx-2 '>{dox.name}</h2>
              </div>
              <div class="card-body">
              <form>
            <div class="row">
            <h3 class="card- text-secondary">{dox.position}</h3>
             
            </div>

           
            <div class="row">
              <div class="col-md-6 form-group mb-3">
                <label for="" class="col-form-label">
                  Gender
                </label>
                <br />
                <select
                  class="form-control shadow-none "
                  value={dox.gender}
                >
                  <option value="default">N/A</option>/option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                 
                </select>
              </div>
              <div class="col-md-6 form-group mb-3">
                <label for="" class="col-form-label">
                  Department
                </label>
                <br />
                <select
                  class="form-control shadow-none "
                  value={dox.depart}
                >
                  <option value="None">Choose From The List</option>
                  <option value="Cse">Computer Science</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Civil">Civil</option>
                  <option value="Diploma">Diploma</option>
                  <option value="BioChemical">Bio Chemical</option>
                 
                </select>
              </div>
              
            </div>
            <div class="row">
            <div class="col-md-6 form-group mb-3">
                <label for="" class="col-form-label">
                  Age *
                </label>
                <input
                  type="number"
                  class="form-control"
                  value={dox.age}
                  placeholder="Age"
                  required="required"
                />
              </div>
              <div class="col-md-6 form-group mb-3">
                <label for="" class="col-form-label">
                 Salary *
                </label>
                <input
                  type="number"
                  class="form-control"
                  value={dox.salary}
                  placeholder="Salary"
                  required="required"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 form-group mb-3">
                <label for="" class="col-form-label">
                  Address *
                </label>
                <input
                  type="text"
                  class="form-control"
                  value={dox.address}
                  required="required"
                  placeholder="Full Address"
                />
              </div>
              <div class="col-md-6 form-group mb-3">
                <label for="" class="col-form-label">
                 Contact No. *
                </label>
                <input
                  type="number"
                  class="form-control"
                  value={dox.contact}
                  placeholder="Contact Number"
                  required="required"
                />
              </div>
            </div>
            <div className="row">
            <div class="col-md-6 form-group mb-3">
                <label for="" class="col-form-label">
                 Maritial Status
                </label>
                <br />
                <select
                  class="form-control shadow-none "
                  value={dox.marriage}
                >
                  <option value="default">Choose From The List</option>/option>
                  <option value="married">Married</option>
                  <option value="unmarried">Single</option>
                  <option value="divorced">Divorced</option>
                 
                </select>
              </div>
              <div class="col-md-6 form-group mb-3">
                <label for="" class="col-form-label">
                 Email *
                </label>
                <input
                  type="text"
                  class="form-control"
                  value={dox.email}
                  placeholder="Email Address"
                  required="required"
                />
              </div>
            </div>

           
          </form>
              
               
              </div>
            </div>
          
              </div>)
           }): <div className="d-flex justify-content-center align-items-center">
               <h1 className="lead">Please Fill the Above Details</h1>
           </div>

      }
      </div>
      

  )
    }
