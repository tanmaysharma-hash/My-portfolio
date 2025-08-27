import { useState } from 'react';
import { Mail, Github, Linkedin, Download } from 'lucide-react';

// Main App component for the portfolio page.
export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  // Example data for the Skills section
  const skills = [
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'REST API', icon: 'https://placehold.co/48x48/000000/FFFFFF?text=API' },
    { name: 'Blockchain', icon: 'https://placehold.co/48x48/000000/FFFFFF?text=BC' },
    { name: 'Solidity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-plain.svg' },
  ];

  // Example data for the Projects section
  const projects = [
    { title: 'G Drive 3.0', description: 'A decentralized file storage dApp managing IPFS file data storage, MetaMask for authentication, and ethereum smart contracts for security.', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Project' },
    { title: 'NFT-Marketplace', description: 'Blockchain-based marketplace to mint, buy, and sell NFTs with IPFS storage and MetaMask integration.', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Project' },
    { title: 'Rent-Rental Project', description: 'Smart contract powered rental system ensuring transparent agreements and secure payments on blockchain.', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Project' },
    { title: 'Real-Time Live Chat App', description: 'Full-stack chat application with real-time messaging, file sharing, and voice notes using WebSockets and secure authentication.', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Project' },
    { title: 'Full-Stack eCommerce Platform', description: 'MERN-based eCommerce system featuring product management, seller/buyer dashboards, JWT authentication, and Tailwind CSS UI.', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Project' },
  ];

  // Example data for the Certificates section
  const certificates = [
    { title: 'Java Bootcamp Winner', issuedBy: 'Upgrad-Bootcamp', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Certificate' },
    { title: 'Blockchain Developer', issuedBy: 'Upgrad-Campus', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Certificate' },
    { title: 'Backend Developer', issuedBy: 'Upgrad-Campus', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Certificate' },
    { title: 'Modules World Hackathon', issuedBy: 'Hackathon', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Certificate' },
    { title: 'Internship Certificate', issuedBy: 'Hackathon', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Certificate' },
  ];

  // Handle input changes for the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    // This is a placeholder for your Vercel Serverless Function.
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-[#12141c] text-white font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-[#12141c] bg-opacity-90 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-white">Your Logo</a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
            <a href="#certificates" className="text-gray-300 hover:text-white transition-colors duration-300">Certificates</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
        {/* Hero Section */}
        <section id="about" className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-2">
              Abhay Singh Shekhawat
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-400 font-light mb-4">
              Blockchain & Software Developer | Java + Backend Enthusiast
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 mb-6">
              Aspiring Blockchain Developer with strong skills in Java, backend systems, and full-stack web development. Experienced in building smart contracts, decentralized apps, scalable APIs, and robust software solutions. Currently pursuing BCA and open to opportunities in blockchain, backend, and software development roles.
            </p>
            <a href="#" className="inline-flex items-center px-6 py-3 bg-[#4285F4] text-white font-bold rounded-lg hover:bg-[#3479E0] transition-colors duration-300">
              <Download size={20} className="mr-2" /> Download Resume
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#4285F4] shadow-lg">
              {/* Replace with your own profile image URL */}
              <img src="https://placehold.co/320x320/4B5563/E5E7EB?text=Profile" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center bg-[#1c1f28] rounded-xl p-4 shadow-md transition-transform transform hover:scale-105 duration-300">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#1c1f28] rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 duration-300">
                <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a href="#" className="px-4 py-2 bg-[#4285F4] text-white rounded-lg text-sm font-medium hover:bg-[#3479E0] transition-colors">Live Demo</a>
                  <a href="#" className="px-4 py-2 bg-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">GitHub Repo</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Certificates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-[#1c1f28] rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 duration-300">
                <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                  <img src={cert.img} alt={cert.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-4">Issued by: {cert.issuedBy}</p>
                <a href="#" className="block w-full text-center px-4 py-2 bg-[#4285F4] text-white rounded-lg text-sm font-medium hover:bg-[#3479E0] transition-colors">View Certificate</a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-[#1c1f28] p-8 rounded-xl shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#272b38] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4285F4] transition-colors"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-[#272b38] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4285F4] transition-colors"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 rounded-lg bg-[#272b38] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4285F4] transition-colors"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#4285F4] text-white font-bold rounded-lg hover:bg-[#3479E0] focus:outline-none focus:ring-4 focus:ring-[#4285F4] focus:ring-opacity-50 transition-colors duration-300"
            >
              Send Message
            </button>
            {formStatus && (
              <p className="mt-4 text-center text-sm font-medium">
                {formStatus}
              </p>
            )}
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-700 mt-16">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

