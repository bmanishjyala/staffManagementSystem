import React,{useEffect,useState} from 'react'
import { db } from "./firebaseConfig";
import {
    query,
    collection,
    orderBy,
    onSnapshot
   } from "firebase/firestore";
export default function Query() {
    const [not, setNot] = useState([]);
  
    const noticeCollectionRef=collection(db,"query")
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
      
    <div class="card shadow-sm  mb-3 bg-body rounded" style={{width:"100%",height:"100px"}} >
<div class="card-body">
<h5 className='text-center'>Notice Count</h5>
<p className='text-center fs-2 fw-bold'>{not.length}</p>

</div>
</div>

<div className='pt-3'>
<div className='row'>
{not.map((e)=>{


return(<div className='col-sm-6' >
<div class="card  m-2">
<div class="card-header d-flex">
<img src={e.profile} alt="avatar" style={{width:"45px",height:"45px",borderRadius:"50%"}} />
<h2 className='pt-3 lead'>{e.user}</h2>
</div>
<div class="card-body">
<h5 class="card- text-secondary">{e.title}</h5>
<p class="card-text">{e.query}</p>
<div className='d-flex justify-content-between'>
    <p>{e.date}</p>
    <p className='text-danger'>{e.status}</p>
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
