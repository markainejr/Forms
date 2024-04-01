import React, { useState } from 'react';
import './style.css';

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    FavColor: ""
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  }
  function handleSubmit(event){
    event.preventDefault()
    console.log(formData)

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder='FirstName'
          onChange={handleChange}
          name='firstName'
          value={formData.firstName}
        />

        <input
          type="text"
          placeholder='LastName'
          onChange={handleChange}
          name='lastName'
          value={formData.lastName}
        />

        <input
          type="email"
          placeholder='Email'
          onChange={handleChange}
          name='email'
          value={formData.email}
        />
      </div>

      <textarea
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name='comments'
      />

      <input
        type="checkbox"
        id='isFriendly'
        checked={formData.isFriendly}
        onChange={handleChange}
        name='isFriendly'
      />
      <label htmlFor="isFriendly">Are you Friendly?</label>
      <br />

      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="part-time"
          name="employment"
          value='part-time'
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value='unemployed'
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="Full-time"
          name="employment"
          value='Full-time'
          checked={formData.employment === "Full-time"}
          onChange={handleChange}
        />
        <label htmlFor="Full-time">Full-Time</label>
        <br />
      </fieldset>
      <br />

      <label htmlFor="FavColor">What is your Favorite Color?</label>
      <br />
      <select
        id="FavColor"
        name="FavColor"
        value={formData.FavColor}
        onChange={handleChange}
      >
        <option value="">--Choose--</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
      </select>
      <br/>
      <br/>
      <button>Submit</button>
    </form>
  );
}

export default Form;

      /*

      doesn't work when using checked  inputs
    function handleChange(event) {
            setFormData(function(prevFormData) {
              
              return {
                ...prevFormData,
                [event.target.name]: event.target.value 
              };
            });
      }
      */
