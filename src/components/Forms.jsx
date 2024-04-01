import React, {useState} from "react";
import './style.css'


 const Forms = () => {
    const [formData, setFormData] = useState ({
     email:'',
     password:'',
     password1:'', 
     joinedNewsletter:true
      })
 function validateEmail(email){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) && email.endsWith('@gmail.com')

 }     

function handleChange (event){
  const {name,type, checked,value} = event.target;
    setFormData (prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox'? checked : value
 
    }));
  }

function handleSubmit (event){
      event.preventDefault()
    if(formData.password === formData.password1 ){
      if(validateEmail(formData.email)){
      alert("Successfully signed up")
      } else{
      alert("Enter a valid email address");
      }
    } else{
      alert("passwords do not match")
    }

     if(formData.joinedNewsletter){
      alert("Thanks for signing up for our newsletter")
    }
   

    }


      
  return (
  <form onSubmit= {handleSubmit}> 
    <div>    
        <input
        type = 'email'
        placeholder = 'email'
        name = 'email'
        value = {formData.email}
        onChange={handleChange}
        />
        <input
        type = 'password'
        placeholder = 'password'
        name= 'password'
        value = {formData.password}
        onChange= {handleChange}
        />
        <input
        type = 'password'
        placeholder = 'Renter password'
        name="password1"
        value= {formData.password1}
        onChange={handleChange}
        />
        <input
        type= 'checkbox'
        id = 'NewsLetter'
        name="joinedNewsletter"
        checked={formData.Newsletter}
        onChange={handleChange}
        />
        <label htmlFor="Newsletter">I want to join a Newsletter</label>
        <br/>
        <br/>
        <button>Submit</button>

    </div>
    </form>
  )
}
 export default Forms;