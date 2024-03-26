/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/shared/Container";
import Image from "next/image";
import contactImg from "/public/contact.jpg";

const Contact = () => {
  return (
    <Container className="flex flex-col lg:flex-row items-center justify-center my-12">
      <div className="lg:w-1/2 px-3 mb-6 lg:mb-0">
        <h2 className="text-2xl lg:text-4xl text-gray-800  font-bold leading-tight mb-4">
          Let's talk about everything!
        </h2>
        <Image
          src={contactImg}
          alt="Placeholder"
          className="md:w-3/4 "
          placeholder="blur"
        />
      </div>
      <div className="lg:w-1/2 px-3">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6 md:space-y-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Full Name
              </label>
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:border-blue-500 border border-gray-300"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                className="w-full bg-slate-100 text-slate-900 mt-2 p-3 rounded-lg focus:outline-none border focus:border-blue-500 "
                type="email"
                placeholder="your email"
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2">
                Message
              </label>
              <textarea
                className="w-full bg-slate-100 text-slate-900 mt-2 p-3 rounded-lg focus:outline-none border focus:border-blue-500  resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="uppercase text-sm font-bold tracking-wide bg-blue-500 text-gray-100 p-3 rounded-lg w-full lg:w-auto focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
