import React from "react";
import { useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
export default function AddEmp() {
  const [name, setname] = useState("");
  // const [data, setData] = useState([]);
  const [gender, setgender] = useState("");
  const [contact, setcontact] = useState("");
  const [depart, setdepart] = useState("");
  const [ms, setms] = useState("");
  const [address, setaddress] = useState("");
  const [age, setage] = useState("");
  const [sal, setsal] = useState("");
  const [pos, setpos] = useState("");
  const [email, setemail] = useState("");
  const userCollectionRef = collection(db, "details");
  const add = () => {
    if (name && gender && contact && depart && age && sal && pos && email) {
      addDoc(userCollectionRef, {
        name: name,
        address: address,
        gender: gender,
        depart: depart,
        marriage: ms,
        age: age,
        salary: sal,
        position: pos,
        contact: contact,
        email: email,
      });
    }
  };

  return (
    <div className="d-flex w-100 home h-100 justify-content-center mb-5 pt-2 px-3">
      <div class="col-md-8">
        <div class="form h-100">
          <form>
            <div class="row">
              <div class="col-md-6 form-group mb-3">
                <label for="" class="col-form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  required="required"
                  placeholder="Full Name"
                />
              </div>
              <div class="col-md-6 form-group mb-3">
                <label for="" class="col-form-label">
                  Age *
                </label>
                <input
                  type="number"
                  class="form-control"
                  onChange={(e) => {
                    setage(e.target.value);
                  }}
                  placeholder="Age"
                  required="required"
                />
              </div>
            </div>

           
            <div class="row">
              <div class="col-md-6 form-group mb-3">
                <label for="" class="col-form-label">
                  Gender
                </label>
                <br />
                <select
                  class="form-control shadow-none "
                  onChange={(e)=>{
                    setgender(e.target.value)
                  }} 
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
                  onChange={(e) => {
                    setdepart(e.target.value);
                  }}
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
                  Position *
                </label>
                <input
                  type="text"
                  class="form-control"
                  onChange={(e) => {
                    setpos(e.target.value);
                  }}
                  required="required"
                  placeholder="Position"
                />
              </div>
              <div class="col-md-6 form-group mb-3">
                <label for="" class="col-form-label">
                 Salary *
                </label>
                <input
                  type="number"
                  class="form-control"
                  onChange={(e) => {
                    setsal(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setaddress(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setcontact(e.target.value);
                  }}
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
                  onChange={(e)=>{
                    setms(e.target.value)
                  }}
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
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  placeholder="Email Address"
                  required="required"
                />
              </div>
            </div>

            <div class="d-flex justify-content-evenly mt-4" > 
              <div class=" form-group">
               
               <input
                  type="submit"
                  value="Submit Data"
                  class="  rounded-0 py-2 px-4"
                  style={{background:"#ee9ca7",border:"none",color:"white"}}
                  onClick={(e)=>{
                    e.preventDefault();
                    add()
                    document.getElementById("reset").click()
                  }}
                />
               </div>
               <div class=" form-group">
               <input
                  id="reset"
                  type="reset"
                  value="Reset Data"
                  class="rounded-0 py-2 px-4"
                  style={{background:"#ee9ca7",border:"none",color:"white"}}

                />
              </div>
             
                
            
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
