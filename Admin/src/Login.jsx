import React,{useState} from 'react'

export default function Login({Show,setShow}) {
  const [D, setD] = useState(null)

    const confirm=()=>{
    
        if(D==="12345"){
          setShow(true)
          
    
        }
      }
  return (<>{!Show && <form  id="password">
    <div className='border p-5 '>
    <div class="  form-group mb-3 m-3">
            
            <input
              type="text"
              class="form-control px-5"
              onChange={(e) => {
                setD(e.target.value);
              }}
              required="required"
              placeholder="Type Your Password...."
            />
          </div>
          <div class="d-flex justify-content-evenly mt-4" > 
          <div class=" form-group">
           
           <input
              type="submit"
              value="Login"
              class="  rounded-0 py-2 px-4 mx-2"
              style={{background:"#ee9ca7",border:"none",color:"white"}}
              onClick={(e)=>{
                e.preventDefault();
                confirm()
              }}
            />
           </div>
           <div class=" form-group">
           <input
              id="reset"
              type="reset"
              value="Reset "
              class="rounded-0 py-2 px-4 mx-2"
              style={{background:"#ee9ca7",border:"none",color:"white"}}

            />
          </div>
         
            
        
        </div>
    </div>
  </form> }
  </>
 )
}

