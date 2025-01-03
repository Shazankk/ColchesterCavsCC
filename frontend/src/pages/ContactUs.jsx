// src/pages/ContactUs.jsx
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Alert } from "flowbite-react";

function ContactUs() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(null);
  const [isError, setIsError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_4uypwbc",
        "template_h96jp0g",
        templateParams,
        "PE-6o7hUNLFylBtbq"
      )
      .then(() => {
        setIsSuccess(true);
        setIsError(false);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      })
      .catch(() => {
        setIsError(true);
        setIsSuccess(false);
      });
  };

  return (
    <div className="container mx-auto px-6 py-12" id="contact-us">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          New players are always welcome! Become a part of the Cavaliers family
          and join us today.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12 rounded-lg">
        {/* Section 1: Contact Form */}
        <div className="lg:w-1/2 bg-gray-200 hover:scale-105 ease-in-out transition-all overflow-hidden dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-10 lg:mb-0">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>

          {/* Alerts for success and error */}
          {isSuccess && (
            <Alert color="green">
              Your message has been successfully sent!
            </Alert>
          )}
          {isError && (
            <Alert color="red">
              There was an error sending your message. Please try again.
            </Alert>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Section 2: Contact Information */}
        <div className="lg:w-1/2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:scale-105 ease-in-out transition-all overflow-hidden shadow-xl p-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Our Contact Information
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <strong>Phone:</strong> 0785786879
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <strong>Email:</strong> info@colchestercavscc.com
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong>Address:</strong> Mile End Recreation Ground Fords Lane
            Colchester Essex CO4 5FS
          </p>

          {/* Google Map Embed */}
          <div className="w-full h-64 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2461.1698501053447!2d0.885644176644414!3d51.91261217190822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDU0JzQ1LjQiTiAwwrA1MycxNy42IkU!5e0!3m2!1sen!2suk!4v1728756858258!5m2!1sen!2suk"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
          {/* Button to Open Google Maps */}
          <div className="text-center">
            <a
              href="https://maps.app.goo.gl/f4LRj1KX228WsZFs6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
