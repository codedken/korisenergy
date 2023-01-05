import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  const initialInputData = {
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  };

  const [inputData, setInputData] = useState(initialInputData);
  const [isLoading, setIsLoading] = useState(false);

  const updateInputData = (e) => {
    const { value, name } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(prev => !prev);

    try{
        await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            inputData,
            EMAILJS_USER_ID,
        );
        setInputData(initialInputData);
        alert("Email sent successfully")
    }catch(e){
        alert("An error occured, email not sent")
    }
    setIsLoading(prev => !prev);
  };
  return (
    <form onSubmit={sendEmail} className="max-w-[600px] m-auto">
      <div className="grid sm:grid-cols-2 gap-2">
        <input
          className="border shadow-lg p-3"
          type="text"
          name="from_name"
          value={inputData.from_name}
          required="required"
          onChange={updateInputData}
          placeholder="Your name"
        />
        <input
          className="border shadow-lg p-3"
          type="email"
          name="from_email"
          value={inputData.from_email}
          required="required"
          onChange={updateInputData}
          placeholder="Your email address"
        />
      </div>

      <input
        className="border shadow-lg p-3 w-full my-2"
        type="text"
        name="subject"
        value={inputData.subject}
        required="required"
        onChange={updateInputData}
        placeholder="Subject"
      />
      <textarea
        className="border shadow-lg p-3 w-full rounded-md"
        cols="30"
        rows="10"
        name="message"
        value={inputData.message}
        required="required"
        onChange={updateInputData}
        placeholder="Message"
      ></textarea>
      <button className="flex justify-center items-center border rounded-md bg-blue-700 text-white font-bold tracking-wider h-10 w-full">
        {!isLoading ? <p className="h-5">SEND</p>
        : <div className="animate-spin w-6 h-6 rounded-full border-4 border-white border-r-orange-500"></div>}
      </button>
    </form>
  );
};

export default Contact;
