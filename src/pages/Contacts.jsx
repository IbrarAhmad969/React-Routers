import React from "react";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-indigo-800 p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-500 text-center mb-6">
          We would love to hear from you!
        </p>

        <form className="space-y-4">
          <motion.div whileFocus={{ scale: 1.05 }} className="flex flex-col">
            <label className="text-gray-600 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.05 }} className="flex flex-col">
            <label className="text-gray-600 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.05 }} className="flex flex-col">
            <label className="text-gray-600 font-medium">Your Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            ></textarea>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contacts;
