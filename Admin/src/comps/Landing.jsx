import React from 'react'
import "./Landing.css"
export default function Landing() {
   
  return (
    < div className='home' >
   
    <div className="landing pt-5 " >
        <div className="landingInside mx-2 text-wrap">
            <h1>Employee Management System</h1>
            <p>We helps your employees to give their best efforts every day to achieve the goals of your organization.
                It guides and manages employees efforts in the right direction. It also securely stores and manages
                personal and other work-related details for your employees.</p>
                <div className='float-end mx-5'>
                  <button style={{background:"#ee9ca7",border:"none",color:"white"}}>Read More</button>
                </div>
          
        </div>
      <img className='w-50 rounded-circle' style={{marginTop:"-50px"}} src="https://github.com/bmanishjyala/collegeManagementSystemWebApp/blob/main/public/emsHome.png?raw=true" alt="" />

    </div>
    </div>
  )
}
