import React, { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore";

export default function Search() {
  const userCollectionRef = collection(db, "details");
  const [Record, setRecord] = useState([])
  const [error, setError] = useState(false)
  const[value,setValue]=useState(null);
  const[searchBy,setSearchBy]=useState(null);
 const search=()=> {
   
    if(value && searchBy){
        const q = query(userCollectionRef, where(searchBy, "==", value));
   onSnapshot(q,(snapshot)=>{
       let books=[]
       snapshot.docs.forEach((doc)=>{
           books.push({...doc.data(),id:doc.id})
       })
       setRecord(books)
   })
  }
  else{
    setError(true)
  }
    }
 
  return (
    <div className="home mt-3">
        <p className="text-center"><span className="text-success">Note:-</span>You can Search Record By Name,Age,Address etc. and without selecting search By option This Page Won't Work..</p>
      <div class=" mt-5 d-flex justify-content-center">
      <select     style={{width:"100px"}}
                  class="form-control mx-2  shadow-none "
                  onChange={(e)=>{
                    setSearchBy(e.target.value)
                  }}
                  required="required"
                >
                  <option value="default">Search By</option>
                  <option value="name">Name</option>
                  <option value="position">Post</option>
                  <option value="contact">Contact</option>
                  <option value="address">Address</option>
                  <option value="age">Age</option>
                 
                </select>
        <input
          type="text"
          class="form-control "
          style={{ width: "60%" }}
          onChange={(e) => { setValue(e.target.value)}}
          required="required"
          placeholder="Search Staff Data"
        />
        <button
          className="mx-2 "
          onClick={(e) => {
            e.preventDefault();
            search();
          }}
          style={{ background: "#ee9ca7", border: "none", color: "white" }}
        >
          Search
        </button>
      </div>
      <div className="row">
      {
          Record ?Record.map((dox)=>{
            return(<div className='col-sm-6'>
            <div class="card  m-3">
             <div class="card-header d-flex">
               <img src="https://www.svgrepo.com/show/9695/avatar.svg" alt="avatar" style={{width:"45px",height:"45px",borderRadius:"50%"}} />
               <h2 className='pt-3 lead'>{dox.name}</h2>
             </div>
             <div class="card-body">
               <h5 class="card- text-secondary">{dox.department}{dox.position}</h5>
               <p class="card-text">{dox.contact}</p>
              
               <div className='float-end'>
                   <p>{dox.email}</p>
               </div>
             </div>
           </div>
          
             </div>)
          }): <div className="d-flex justify-content-center align-items-center">
              <h1 className="lead">Please Fill the Above Details</h1>
          </div>
      }
      </div>
      {error && <div className="d-flex justify-content-center w-100 fixed-bottom">
        <div class="alert alert-danger w-50 alert-dismissible fade show " role="alert">
    <strong>Search Properly!</strong> You should check in on some of those fields above.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div></div>
  }
    </div>
  );
}
