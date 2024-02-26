import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

function Contact() {
  return (
    <>
      <div className="flex justify-around items-center w-full h-full">
        <div className="w-[40%] h-full">
          <h3 className="">Get in touch:</h3>
          <form className="">
            <div className="w-full h-full flex flex-col justify-between items-center">
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                className=""
                name="from_name"
                placeholder="Name:"
              />
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                className=""
                name="email"
                placeholder="Email:"
              />
              <label htmlFor=""></label>
              <textarea
                type="text"
                id="message"
                className="h-40 w-11/12 resize-none p-2 border border-solid border-albastru font-josefin-sans focus:outline-none focus:bg-aliceblue"
                name="message"
                placeholder="Message:"
              />
              <input
                type="submit"
                value="Send"
                id="submit"
                className="text-white bg-albastru w-1/5 h-10"
              />
            </div>
          </form>
          <p>Or send email at chocolatechiphelmet@gmail.com</p>
        </div>
        <div className="max-w-[40%]">
          <img
            src="/contact_sketch.jpg"
            alt=""
            className=""
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
