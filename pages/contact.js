import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

function Contact() {
  return (
    <>
      <div className="flex justify-around items-center w-full h-full">
        <div className="xxs:w-[90%] xs:w-[90%] flex flex-col w-[30%] h-full mt-2">
          <h3 className="text-1.1rem">Get in touch:</h3>
          <form className="border border-albastru p-[20px] h-[400px]">
            <div className="w-full h-full flex flex-col justify-between items-center">
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                className="h-[10%] w-[90%] border border-albastru p-[5px] text-1.1rem focus:outline-none focus:bg-aliceblue"
                name="from_name"
                placeholder="Name:"
              />
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                className="h-[10%] w-[90%] border border-albastru p-[5px] text-1.1rem focus:outline-none focus:bg-aliceblue"
                name="email"
                placeholder="Email:"
              />
              <label htmlFor=""></label>
              <textarea
                type="text"
                id="message"
                className="h-40 w-[90%] resize-none p-[5px] border border-solid text-1.1rem border-albastru focus:outline-none focus:bg-aliceblue"
                name="message"
                placeholder="Message:"
              />
              <input
                type="submit"
                value="Send"
                id="submit"
                className="text-white bg-albastru w-1/5 h-10 hover:cursor-pointer hover:text-black"
              />
            </div>
          </form>
          <p className="mt-[5px]">
            Or send email at chocolatechiphelmet@gmail.com
          </p>
        </div>
        <div className="max-w-[30%] xxs:hidden xs:hidden">
          <img src="/contact_sketch.jpg" alt="" className="" />
        </div>
      </div>
    </>
  );
}

export default Contact;
