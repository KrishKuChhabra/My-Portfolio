"use client";


import React, { useState } from "react";
const Rightcontact = () => {
 
    const[userData, setUserData]= useState({
        Name:"",
        PhoneNumber:"",
        Email:"",
        Subject:"",
        Message:"",
    })

       let name, value; 
    const postUser=(e)=>{
        name=e.target.name;
        value=e.target.value;

        setUserData({...userData,[name]:value})
    };

    const SubmitForm=async(e)=>{
          e.preventDefault()

          const { Name,PhoneNumber,Email,Subject,Message}=userData;
          if(Name && PhoneNumber && Email && Subject && Message){

          
       const response=fetch("https://myportfolio-8c7f5-default-rtdb.firebaseio.com/userDataRecord.json",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    Name,
                    PhoneNumber,
                    Email,
                    Subject,
                    Message,
                })
            }
       );
       if(response){
        setUserData({
            Name:"",
            PhoneNumber:"",
            Email:"",
            Subject:"",
            Message:"",
        })
         
       }else{
        alert("plz fill the data")
       }
       }else{
        alert("plz fill the data")
       }
    }

  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
      <div className="p-4">
        <form method="POST">
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Name</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="Name"
                value={userData.Name}
                onChange={postUser}

              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2">Phone Number</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="number"
                name="PhoneNumber"
                value={userData.PhoneNumber}
                onChange={postUser}
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="Email"
              value={userData.Email}
              onChange={postUser}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="Subject"
              value={userData.Subject}
              onChange={postUser}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Meesage</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              rows="10"
              name="Message"
              value={userData.Message}
              onChange={postUser}
            ></textarea>
          </div>
        </form>
        <button onClick={SubmitForm}  className="w-full rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Rightcontact;
