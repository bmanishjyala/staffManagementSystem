import React,{useEffect, useState} from 'react'
import { db } from "./firebaseConfig";
import { collection,  getDocs } from "firebase/firestore";
export default function ShowAllEmp() {
   const [dataes, setData] = useState([]);
  const userCollectionRef = collection(db, "details");
  var a=''
 
    
   useEffect(() => {
     const getData = async () => {
       const datas = await getDocs(userCollectionRef);
       setData(datas.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     
     };
     getData();
   }, []);
  return (
    <div className='w-100 h-100 home  py-3 table-responsive' >
      <h1 className='text-center mb-3'>Show All Records</h1>
     <table id="dtBasicExample" className="table  table-hover" cellspacing="0" width="100%">
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
     
      
      <th className="th-sm">Contact
      </th>
      
      <th className="th-sm">Address
      </th>
      <th className="th-sm">Maritial
      </th>
    </tr>
  </thead>
  <tbody id='tbody'>
    {dataes.forEach((e)=>{
     
    a+=`
    <tr>
       <td>${e.name}</td>
       <td>${e.age}</td>
       <td>${e.gender}</td>
       <td>${e.depart}</td>
       <td>${e.position}</td>
       <td>${e.contact}</td>
       <td>${e.address}</td>
       <td>${e.marriage}</td>
     </tr>`   
   document.getElementById("tbody").innerHTML=a;
    })

    }
  
  </tbody>
     
  </table>
    </div>
  )
}


