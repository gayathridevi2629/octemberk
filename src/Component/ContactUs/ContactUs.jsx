import React, { useState } from "react";
import "./ContactUs.css";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "8b59d3c1-f9f4-4eee-b61e-73edc7daca84");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Let's Grow Your Business Together, We will Connect You Shortly via Chat/Call!",
          icon: "success",
        });
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to submit your message. Please try again.",
        icon: "error",
      });
    } finally {
      setIsLoading(false);
      event.target.reset();
    }
  };

  return (
    <div className="Contactus" id="contact">
      <section className="contact">
        <form onSubmit={onSubmit}>
          <h2>Contact Us</h2>
          

          <div className="input-box">
            <input
              type="text"
              className="field"
              placeholder="Enter Your Name"
              name="name"
              required
            />
          </div>

          <div className="input-box">
            <input
              type="email"
              className="field"
              placeholder="Enter Your Email"
              name="email"
              required
            />
          </div>

          <div className="input-box">
            <input
              type="tel"
              name="phone"
              className="field"
              placeholder="Enter Your WhatsApp Number"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div className="input-box message">
            <textarea
              name="message"
              className="feild-mess"
              placeholder="Enter Your Business Type and Package You Want"
              required
              cols="30"
               rows="5"
            ></textarea>
            
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
