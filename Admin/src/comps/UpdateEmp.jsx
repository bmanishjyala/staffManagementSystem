import React,{useEffect, useState} from 'react'
import { db } from "./firebaseConfig";
import { collection,  getDocs,doc,deleteDoc,updateDoc} from "firebase/firestore";
export default function UpdateEmp() {
   const [dataes, setData] = useState([]);
   const [name, setname] = useState("");
   const [contact, setcontact] = useState("");
   const [address, setaddress] = useState("");
   const [age, setage] = useState("");
   const [sal, setsal] = useState("")
   const [pos, setpos] = useState("")
  const userCollectionRef = collection(db, "details");
  const [banda, setbanda] = useState("")
  const deleteUser =(id) => {
  const userDoc = doc(userCollectionRef, id);
     deleteDoc(userDoc);
  };
 const updateUser=()=>{
  const userDoc = doc(userCollectionRef,banda);

   if(name){
    updateDoc(userDoc,{
      "name":name,})
      setname("")
   }
   if(address){
    updateDoc(userDoc,{
      "address":address,})
      setaddress("")
   }
   if(age){
    updateDoc(userDoc,{
      "age":age,})
      setage("")
   }
 
   if(sal){
    updateDoc(userDoc,{
      "salary":sal,})
      setsal("")
   }
   if(pos){
    updateDoc(userDoc,{
      "position":pos,})
      setpos("")
   }
   if(contact){
    updateDoc(userDoc,{
      "contact":contact,})
      setcontact("")
   }
   
   }

   useEffect(() => {
     const getData = async () => {
       const datas = await getDocs(userCollectionRef);
       setData(datas.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     
     };
     getData();
   }, []);
  return (
    <div className='w-100  home py-3 table-responsive' style={{minHeight:"100vh"}}>
      <h1 className='text-center mb-3'> Delete </h1>
     <table id="dtBasicExample" className="table table-hover  " cellSpacing="0" width="100%">
  <thead style={{background:"#ee9ca7",border:"none",color:"white"}}>
    <tr>
      <th className="th-sm">Name
      </th>
      <th className="th-sm">Age
      </th>
      <th className="th-sm">Gender
      </th>
      <th className="th-sm">Dept.
      </th>
      <th className="th-sm">Position
      </th>
      <th className="th-sm">Salary
      </th>
      
      <th className="th-sm">Contact
      </th>
      
      <th className="th-sm">Address
      </th>
      <th className="th-sm">Maritial
      </th>
      <th className='th-sm'>
           Control
      </th>
    </tr>
    
  </thead>
  <tbody id='tbody'>
    {dataes.map((e)=>{
     
    return (
      <>
      <tr>
         <td>{e.name}</td>
         <td>{e.age}</td>
         <td>{e.gender}</td>
         <td >{e.depart}</td>
         <td>{e.position}</td>
         <td>{e.salary}</td>
         <td>{e.contact}</td>
         <td>{e.address}</td>
         <td>{e.marriage}</td>
         <td>
           <div className="d-flex">
           <p className="mx-2" onClick={() => {
                       deleteUser(e.id);
                    }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                  </svg>  
                    </p>
          
</div>

        </td>
      
       </tr>   
       </>)
    })

    }
 
  </tbody>
     
  </table>
  <h1 className='text-center'>Update</h1>
  <div className='w-100'>
  <select class="form-select" onChange={(e)=>{
    e.preventDefault();
    setbanda(e.target.value)
    
  }} aria-label="Default select example">
  <option selected>Open this select menu</option>
  {dataes.map((e)=>{
 return (
  <option value={e.id}>{e.name}</option>
 )
  })}
</select>
  <div className='mt-4 mx-2'>
 
  <input type="text" contenteditable="true" className="text-center m-2 border-none w-25 
       py-1" placeholder="Full Name" placeholder="Name"  
       autoComplete="off" onChange={(e) => {
         setname(e.target.value);
       }}   required/>

        <input type="number" className=" m-2 text-center w-25 
         py-1" min="18" max="60" placeholder='Age' onChange={(e) => {
           setage(e.target.value);
         }}
         autoComplete="off"  required/>

      
        <input type="text"  className=" m-2 text-center  w-25
         py-1" placeholder='Position'  onChange={(e) => {
           setpos(e.target.value);
         }}
         autoComplete="off" required />

      
       <input type="number" placeholder='contact'  className=" m-2 text-center  w-25 py-1" onChange={(e) => {
                 setcontact(e.target.value);
               }}
               autoComplete="off"  required/>
               
        
         <input type="number" placeholder='salary'  className=" m-2 text-center  w-25 py-1"  
               autoComplete="off" onChange={(e) => {
                 setsal(e.target.value);
               }}  required/>
              
        
       
       <input type="text"  className=" m-2 text-center  w-25" 
               autoComplete="off" placeholder='address' onChange={(e) => {
                 setaddress(e.target.value);
               }}  required/>
                  <br />
             <div className='d-flex justify-content-center' >
             <button style={{background:"#ee9ca7",border:"none",color:"white"}} onClick={(e)=>{
                 e.preventDefault()
                 updateUser()
               }}>Update</button>
             </div>
              
  </div>
  </div>
  
    </div>
  )
}




