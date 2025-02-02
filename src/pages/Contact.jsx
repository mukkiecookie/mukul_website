import React, { useState } from "react";

export const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "cdc093c8-c853-49e6-8444-32c2a9cde0b1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="section-contact">
      <h2 className="contact-title">Contact Me</h2>

    <div className="form-wrappers">
      <form onSubmit={onSubmit}>
        <input 
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button className='submit' type="submit" value="send">
            Send
          </button>

      </form>
      <span>{result}</span>

    </div>
    </section>
  );
}