import { useState, useEffect } from "react";

const ContactForm = () => {
  const [captchaCode, setCaptchaCode] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    captcha: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    captcha: false,
    message: false,
  });

  const generateCaptcha = () => {
    const code =
      Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit random number
    setCaptchaCode(code);
  };

  const validateForm = () => {
    const nameValid = /^[a-zA-Z \t]{3,15}$/.test(formData.name);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const captchaValid = formData.captcha === captchaCode;
    const messageValid = formData.message.length > 50;

    setFormErrors({
      name: !nameValid,
      email: !emailValid,
      captcha: !captchaValid,
      message: !messageValid,
    });

    return nameValid && emailValid && captchaValid && messageValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Message Sent!");
      setFormData({
        name: "",
        email: "",
        captcha: "",
        message: "",
      });
      generateCaptcha();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <section id="contact" className="py-10 px-5 bg text-black">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label className="block mb-2 text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md mb-4 ${
              formErrors.name ? "border-red-500" : "border-gray-300"
            }`}
          />

          {/* Email */}
          <label className="block mb-2 text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md mb-4 ${
              formErrors.email ? "border-red-500" : "border-gray-300"
            }`}
          />

          {/* Message */}
          <label className="block mb-2 text-gray-600">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md mb-4 h-28 ${
              formErrors.message ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send E-mail
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
