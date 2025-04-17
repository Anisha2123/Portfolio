

// import { useState } from 'react';
// import axios from 'axios';
// import { FaPaperPlane } from 'react-icons/fa';
// import "../App.css";

// const Contact = () => {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       await axios.post('https://formspree.io/f/mgvabkgv', form); // Replace with your endpoint
//       alert("Message Sent!");
//       setForm({ name: '', email: '', message: '' });
//     } catch (error) {
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white to-pink-100 dark:from-gray-900 dark:to-black">
//       <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-10 animate-fade-in-up">
//         Contact Me
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-2xl backdrop-blur-md bg-opacity-90 rounded-xl p-8 space-y-6 transition-all duration-500 animate-fade-in-up"
//       >
//        <input
//   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
//   placeholder="Your Name"
//   value={form.name}
//   onChange={(e) => setForm({ ...form, name: e.target.value })}
//   required
// />

// <input
//   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
//   type="email"
//   placeholder="Your Email"
//   value={form.email}
//   onChange={(e) => setForm({ ...form, email: e.target.value })}
//   required
// />

// <textarea
//   className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
//   placeholder="Your Message"
//   rows={5}
//   value={form.message}
//   onChange={(e) => setForm({ ...form, message: e.target.value })}
//   required
// />

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-md transition-transform transform hover:scale-105"
//         >
//           {loading ? 'Sending...' : (
//             <>
//               <FaPaperPlane />
//               Send Message
//             </>
//           )}
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;

import { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentDots, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import "../App.css";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  // @ts-ignore
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    if (!form.name || !form.email || !form.message) {
      setErrorMsg('Please fill in all fields correctly.');
      return;
    }

    try {
      setLoading(true);
      await axios.post('https://formspree.io/f/mgvabkgv', form);
      setSuccessMsg("Your message was sent successfully! 💌");
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white to-pink-100 dark:from-gray-900 dark:to-black">
      <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-fuchsia-600 via-pink-500 to-rose-500 bg-clip-text text-transparent mb-12 animate-fade-in-up">
        Let’s Connect ✨
      </h2>

    

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto glassy-card p-10 space-y-8"
      >
        {/* Name */}
        <InputField
          icon={<FaUser />}
          placeholder="Your Name"
          value={form.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setForm({ ...form, name: e.target.value })}
        />

        {/* Email */}
        <InputField
          icon={<FaEnvelope />}
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, email: e.target.value })}
        />

        {/* Message */}
        <InputField
          icon={<FaCommentDots />}
          placeholder="Your Message"
          isTextArea
          value={form.message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, message: e.target.value })}
        />

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-600 hover:to-fuchsia-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-3 shadow-lg"
        >
          {loading ? 'Sending...' : (
            <>
              <FaPaperPlane className="animate-pulse" />
              Send Message
            </>
          )}
        </motion.button>
      </motion.form>

        {/* Success/Error Toast */}
        <AnimatePresence>
        {successMsg && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    style={{ width: "32rem" }} // 👈 You can change this value
    className="mx-auto bg-white/70 dark:bg-white/10 backdrop-blur-md border border-green-300/30 dark:border-green-500/30 text-green-800 dark:text-green-200 px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg mt-8"
  >
    <FaCheckCircle className="text-green-500 text-xl shrink-0" />
    <span className="text-sm sm:text-base font-medium">
      Thanks for reaching out! I’ll get back to you shortly.
    </span>
  </motion.div>
)}



      </AnimatePresence>
    </section>
  );
};

// Reusable input field with icons and styles
const InputField = ({ icon, placeholder, value, onChange, isTextArea = false, type = "text" }: any) => (
  <div className="relative">
    <div className="absolute left-4 top-4 text-pink-500">{icon}</div>
    {isTextArea ? (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={5}
        className="glassy-input pl-12 pr-4 py-3 resize-none"
        required
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="glassy-input pl-12 pr-4 py-3"
        required
      />
    )}
  </div>
);

export default Contact;


