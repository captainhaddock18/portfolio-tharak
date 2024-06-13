import React from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 mt-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center mt-20">
        <Title title="Let's connect and explore new possibilities together!" des="Contact Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-center ">
          <ContactLeft />
        </div>
      </div>
    </section>
  );
}

export default Contact;
