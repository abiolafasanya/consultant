import React, { useState } from "react";

export function useForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selection, setSelection] = useState("Select Option");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Convert form data to JSON
    const jsonObject = {};
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });
    const jsonString = JSON.stringify({...jsonObject, selection});
    console.log(jsonString);
    if (jsonString) {
      setSuccess("Consultation booked successfully");
    } else setError('An Error Occured, please try again')
  }
  return {handleSubmit, success, error, selection, setSelection};
}
