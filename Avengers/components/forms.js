import React from "react";

// Basic submit event handler and console.log to confirm form submitted
  const formSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

// Create state for the form values. We will want to update state later on, but for now... empty strings!
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    website: "",
    password: ""
  });

// Define form elements: email, password and terms/conditions

function LoginForm() {
  return (
    <form>
     <label htmlFor="name">
        Name
      <input type="email" name="email" placeholder="Email" />
      />
      <label htmlFor="email">
      <input type="password" name="password" placeholder="Password" />
       <label htmlFor="terms">
        Do you agree to the terms and conditions?
      <input type="checkbox">
      <button>Submit!</button>
      />
    </form>
  );
}