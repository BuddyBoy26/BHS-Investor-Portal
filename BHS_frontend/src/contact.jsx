import React from 'react';
import { Map, Phone, Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Feature Boxes */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-indigo-500 w-16 h-16 mx-auto mb-4">
              <Map size={64} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Find Us</h3>
            <p className="text-gray-600 text-center">Oﬃce 1420 - JAFZA 1 Tower, P.O. Box 124707 Jebel Ali Freezone, Dubai - U.A.E</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-indigo-500 w-16 h-16 mx-auto mb-4">
              <Phone size={64} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Feel Free to Call Us</h3>
            <p className="text-gray-600 text-center">+971 54 402 2577</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-indigo-500 w-16 h-16 mx-auto mb-4">
              <Mail size={64} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Mail</h3>
            <p className="text-gray-600 text-center">info@bhavya.ae</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 py-16">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div
            className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
          </div>
          <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl">Contact Us!</h1>
              <p className="text-gray-300">
                Fill up the form below to send us a message.
              </p>
            </div>
            <form>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-t-3xl -my-6"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-b-3xl -my-6"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                name="_subject"
              />
              <textarea
                className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type your message here..."
                name="message"
                style={{ height: '121px' }}
              ></textarea>
              <div className="flex justify-between">
                <input
                  className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Send ➤"
                />
                <input
                  className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;