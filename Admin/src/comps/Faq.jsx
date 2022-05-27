import React from 'react'

export default function () {
  return (
    <div className='w-100 home d-flex flex-column align-items-center pt-4 h-100'>
  <img className='w-25' src="https://raw.githubusercontent.com/bmanishjyala/covid19-tracking-app/7dca1d9fa86f6a0394c4b09baf60c4909bd985bc/img/4.svg" alt="" />
  <h1>FAQ?</h1>
  <div class="accordion accordion-flush w-100 px-3 mt-3" id="accordionFlushExample">
  <div class="accordion-item mb-2">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        What Technology Used
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><ul><li>Html</li><li>Css</li><li>JavaScript</li><li>Firebase</li><li>React</li><li>BootStrap</li></ul></div>
    </div>
  </div>
  <div class="accordion-item mb-2">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       Future Updates
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><ul><li>Client & Admin Side</li><li>Attendance Management System</li><li>Task Assign System</li></ul></div>
    </div>
  </div>
  <div class="accordion-item mb-2">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       Contact
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Email:-<a href="mailto://ragnorlorthbrook@gmail.com">ragnorlorthbrook@gmail.com</a></div>
    </div>
  </div>
  <div class="accordion-item mb-2">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
       Hosted on
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><ul><li>FrontEnd:-Netlify</li><li>Backend:-Firebase</li></ul>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
