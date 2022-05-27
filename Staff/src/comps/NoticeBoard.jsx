import React,{useEffect,useState} from 'react'
import { db } from "./firebaseConfig";
import {
    query,
    collection,
    orderBy,
    onSnapshot
   } from "firebase/firestore";

export default function() {
   
    const [not, setNot] = useState([]);
  
    const noticeCollectionRef=collection(db,"notice")
    useEffect(() => {
        const unsub = onSnapshot(query(noticeCollectionRef, orderBy("timeStamp", "desc")),
          (snap) => {
            let documents = [];
            snap.forEach((doc) => {
              documents.push({ ...doc.data(), id: doc.id });
            });
            setNot(documents);
          }
        );
        return () => {
          unsub();
        };
      }, [collection])
       
  return (
    <div className='px-3 pt-3 home' >
      
       

<div className='pt-3'>
    <div className='row'>
    {not.map((e)=>{
 

  return(<div className='col-sm-6' >
 <div class="card  m-2">
  <div class="card-header d-flex">
    <img src="https://www.svgrepo.com/show/9695/avatar.svg" alt="avatar" style={{width:"45px",height:"45px",borderRadius:"50%"}} />
    <h2 className='pt-3 lead'>Admin</h2>
  </div>
  <div class="card-body">
    <h5 class="card- text-secondary">{e.title}</h5>
    <p class="card-text">{e.notice}</p>
    <div className='float-end'>
        <p>{e.date}</p>
    </div>
  </div>
</div>
  </div>)
})

}
    </div>
</div>

    </div>
  )
}
