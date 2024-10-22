import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 bg-background-color">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary-color mb-8">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
            <h3 className="font-semibold mb-2 text-primary-color">Send us a Message</h3>
            <p className="text-text-color mb-4">We'll get back to you within 24 hours</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full mb-4 p-2 border border-gray-300 rounded"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-accent-color text-white font-bold py-2 px-4 rounded hover:bg-opacity-90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-primary-color">Quick Contact</h3>
            <p className="text-text-color">Reach us directly</p>
            <p className="text-text-color">Phone: +1 (246) 832-3860</p>
            <p className="text-text-color">Email: laudablelearning@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;