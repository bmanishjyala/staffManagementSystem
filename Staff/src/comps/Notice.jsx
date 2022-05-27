import React,{useState} from 'react'
import './Notice.css'
import { db } from "./firebaseConfig";
import { collection, addDoc,  } from "firebase/firestore";

export default function Notice({name,profile}) {
    const userCollectionRef = collection(db, "query");
    let serverTimestamp=new Date()
    
    const [notice, setnotice] = useState("")
    const [title, settitle] = useState("")
  
  const add = () => {
  if(notice){
   
    addDoc(userCollectionRef, {
     user:name,
     profile:profile,
     title:title,
     query:notice,
     timeStamp:serverTimestamp,
     status:"Pending",
     date: new Date().toLocaleDateString('en-US'),
    });
    setnotice('')
  }}
  return (
    <div className='w-100 home px-3 pb-5' >
        <h1 className=' mb-5'>Query</h1>
        <p className='mx-5'><span className='text-danger'>Note:-</span> Notice will be Shown To All Staff Member Who Have Access to the Client Side and Notice One Generated Can't be Deleted..</p>
        <div className='d-flex justify-content-center'>
        <form className=' w-75'> 
      
         
      <div class="col ">
         
           <div class=" form-group mb-3">
             <label for="" class="col-form-label">
               Title
             </label>
             <input
               type="text"
               class="form-control reset"
               onChange={(e)=>{
                 settitle(e.target.value)
               }}
               required="required"
               placeholder="Title"
             />
           </div>
           <div class="form-group mb-3">
             <label for="" class="col-form-label">
               Query *
             </label>
             <textarea
               
               class="form-control reset"
               onChange={(e) => {
                 setnotice(e.target.value)
               }}
               placeholder="Please Type Message Here"
               required="required"
             />
           </div>
         </div>
         <div class="d-flex justify-content-center mt-5">
           <div class=" form-group">
            
            <input
               type="submit"
               value="Submit Data"
               class="rounded-0 py-2  mx-4 px-4"
               onClick={(e)=>{
                 e.preventDefault();
                 document.getElementById('reset').click()
                 add()
                
               }}
               style={{background:"#ee9ca7",border:"none",color:"white"}}
             />
            </div>
            <div class=" form-group">
            <input
               id="reset"
               type="reset"
               value="Reset Data"
               class="rounded-0 py-2 mx-4 reset  px-4"
               style={{background:"#ee9ca7",border:"none",color:"white"}}
             />
           </div>
     </div>
   
    </form>
        </div>

   </div>
  )
}
