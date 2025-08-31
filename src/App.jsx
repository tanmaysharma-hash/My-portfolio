import { useState, useEffect, useRef } from 'react';
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
import { Mail, Github, Linkedin, Download, Loader2, Code, Database, TrendingUp, Cpu, Laptop, Phone, Tablet, Cloud, Briefcase, Bot, SendHorizonal } from 'lucide-react';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const canvasRef = useRef(null);

  useEffect(() => {
    let camera, scene, renderer, particles;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    const canvas = canvasRef.current;

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = () => {
      init();
      animate();
    };
    document.body.appendChild(script);

    const init = () => {
      if (!canvas || !window.THREE) return;

      camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 400;

      scene = new window.THREE.Scene();

      const particleCount = 2000;
      const geometry = new window.THREE.BufferGeometry();
      const positions = [];
      const colors = [];
      const color = new window.THREE.Color();
      const scale = 5;

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * 1000 - 500;
        const y = Math.random() * 1000 - 500;
        const z = Math.random() * 1000 - 500;
        positions.push(x, y, z);

        const vx = (x / 500) + 0.5;
        const vy = (y / 500) + 0.5;
        const vz = (z / 500) + 0.5;
        color.setRGB(vx, vy, vz);
        colors.push(color.r, color.g, color.b);
      }

      geometry.setAttribute('position', new window.THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('color', new window.THREE.Float32BufferAttribute(colors, 3));

      const material = new window.THREE.PointsMaterial({
        size: scale,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
      });

      particles = new window.THREE.Points(geometry, material);
      scene.add(particles);

      renderer = new window.THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      document.body.appendChild(renderer.domElement);
    };

    const onDocumentMouseMove = (event) => {
      mouseX = (event.clientX - windowHalfX) * 0.25;
      mouseY = (event.clientY - windowHalfY) * 0.25;
    };

    const onWindowResize = () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      camera.position.x += (mouseX - camera.position.x) * .05;
      camera.position.y += (-mouseY - camera.position.y) * .05;
      camera.lookAt(scene.position);
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);

    return () => {
      window.removeEventListener('resize', onWindowResize, false);
      document.removeEventListener('mousemove', onDocumentMouseMove, false);
      if (renderer && renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      document.body.removeChild(script);
    };
  }, []);

  const handleMouseMove = (event) => {
    const glow = document.querySelector('.radial-glow');
    if (glow) {
      glow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    }
  };

  const skills = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg' },
    { name: 'SQL', icon: 'https://placehold.co/48x48/000000/FFFFFF?text=SQL' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'REST API', icon: 'https://placehold.co/48x48/000000/FFFFFF?text=API' },
    { name: 'Blockchain', icon: 'https://placehold.co/48x48/000000/FFFFFF?text=BC' },
    { name: 'AI/ML', icon: <Cpu size={48} className="text-[#34D399]" /> },
    { name: 'Data Analysis', icon: <Database size={48} className="text-[#60A5FA]" /> },
    { name: 'UI/UX Design', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'CLI', icon: <Code size={48} className="text-[#FDE047]" /> },
  ];

  const allProjects = [
    { name: 'WEB my-portfolio', domain: 'Web Development', icon: '🌐', githubUrl: '#' },
    { name: 'WEB ecommerceFinal', domain: 'Web Development', icon: '🌐', githubUrl: '#' },
    { name: 'WEB chat-app', domain: 'Web Development', icon: '🌐', githubUrl: '#' },
    { name: 'SE StudentManagementSystem', domain: 'Software Engineering', icon: '⚙️', githubUrl: '#' },
    { name: 'SE MiniWordApp', domain: 'Software Engineering', icon: '⚙️', githubUrl: '#' },
    { name: 'SE MiniNotionApp', domain: 'Software Engineering', icon: '⚙️', githubUrl: '#' },
    { name: 'DA OpenStream Analytics', domain: 'Data Analyst', icon: '📊', githubUrl: '#' },
    { name: 'DA LocalScope API', domain: 'Data Analyst', icon: '📊', githubUrl: '#' },
    { name: 'DA InsightXL', domain: 'Data Analyst', icon: '📊', githubUrl: '#' },
    { name: 'CLI 2 files bank', domain: 'Software Engineering', icon: '⚙️', githubUrl: '#' },
    { name: 'CLI 1 files SmartFileOrganizer', domain: 'Software Engineering', icon: '⚙️', githubUrl: '#' },
    { name: 'BC rental-blockchain', domain: 'Blockchain', icon: '🔗', githubUrl: '#' },
    { name: 'BC nft-marketplace', domain: 'Blockchain', icon: '🔗', githubUrl: '#' },
    { name: 'BC FileUploadProject', domain: 'Blockchain', icon: '🔗', githubUrl: '#' },
    { name: 'APP C Notely', domain: 'Software Engineering', icon: '⚙️', githubUrl: '#' },
    { name: 'APP C Foodly', domain: 'Software Engineering', icon: '⚙️', githubUrl: '#' },
    { name: 'APP A Tunez', domain: 'Software Engineering', icon: '⚙️', githubUrl: '#' },
    { name: 'APP A RideX', domain: 'Software Engineering', icon: '⚙️', githubUrl: '#' },
    { name: 'AM order-app', domain: 'AI/Automation', icon: '🤖', githubUrl: '#' },
    { name: 'AM autoapply-demo', domain: 'AI/Automation', icon: '🤖', githubUrl: '#' },
    { name: 'AI VoiceAssistant', domain: 'AI/Automation', icon: '🤖', githubUrl: '#' },
    { name: 'AI resume-tailor', domain: 'AI/Automation', icon: '🤖', githubUrl: '#' },
    { name: 'AI offline-chatbot', domain: 'AI/Automation', icon: '🤖', githubUrl: '#' },
  ];

  const projectCategories = [...new Set(allProjects.map(p => p.domain))].sort();
  const filteredProjects = activeFilter === 'All' ? allProjects : allProjects.filter(p => p.domain === activeFilter);

  const certificates = [
    { title: 'Java Bootcamp Winner', issuedBy: 'Upgrad-Bootcamp', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Certificate' },
    { title: 'Blockchain Developer', issuedBy: 'Upgrad-Campus', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Certificate' },
    { title: 'Backend Developer', issuedBy: 'Upgrad-Campus', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Certificate' },
    { title: 'Modules World Hackathon', issuedBy: 'Hackathon', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Certificate' },
    { title: 'Internship Certificate', issuedBy: 'Hackathon', img: 'https://placehold.co/300x200/4B5563/E5E7EB?text=Certificate' },
  ];

  const resumes = [
    { name: 'Software & App Development', url: '#' },
    { name: 'Web Dev & Blockchain', url: '#' },
    { name: 'AI/ML Developer', url: '#' },
    { name: 'Data Analyst', url: '#' },
  ];

  const resumeMap = {
    'Web Development': resumes[1],
    'Software Engineering': resumes[0],
    'Blockchain': resumes[1],
    'AI/Automation': resumes[2],
    'Data Analyst': resumes[3],
  };
  
  const getResumeButtonContent = () => {
    if (activeFilter !== 'All' && resumeMap[activeFilter]) {
      const resume = resumeMap[activeFilter];
      return (
        <a href={resume.url} className="inline-flex items-center px-6 py-3 bg-[#4285F4] text-white font-bold rounded-lg hover:bg-[#3479E0] transition-colors duration-300">
          <Download size={20} className="mr-2" /> Download {resume.name} Resume
        </a>
      );
    }
    return null;
  };
  
  return (
    <div className="relative bg-[#12141c] text-white font-sans overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="radial-glow fixed w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 transition-transform duration-100 ease-out z-0 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(105, 12, 255, 0.6) 0%, rgba(105, 12, 255, 0) 70%)' }}></div>
      <canvas ref={canvasRef} className="fixed inset-0 z-0"></canvas>
      <div className="relative z-10 min-h-screen">
        <nav className="fixed top-0 left-0 w-full bg-[#12141c] bg-opacity-30 backdrop-blur-md z-50 shadow-lg transition-all duration-300">
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
          <section id="about" className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-2">
                Tanmay Sharma
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-400 font-light mb-4">
                Full-Stack Developer | Software Engineer
              </p>
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 mb-6">
                A passionate and results-driven developer with a strong foundation in Java, Python, and C#. Experienced in building robust full-stack applications and creating scalable software solutions. Eager to take on new challenges and contribute to impactful projects.
              </p>
              <div className="relative inline-block text-left">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-bold rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  <Download size={20} className="mr-2" /> Download Resume
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#6c3d90] shadow-2xl transition-all duration-500 hover:scale-105">
                <img src="https://placehold.co/320x320/4B5563/E5E7EB?text=Profile" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          <section id="skills" className="py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-xl ring-1 ring-inset ring-white/10 transition-transform transform hover:scale-105 duration-300">
                  <span className="w-12 h-12 mb-2 flex items-center justify-center">
                    {typeof skill.icon === 'string' ? (
                      <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                    ) : (
                      skill.icon
                    )}
                  </span>
                  <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Projects</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveFilter('All')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/10 backdrop-blur-sm hover:bg-white/20 ${activeFilter === 'All' ? 'text-white' : 'text-gray-300'}`}
              >
                All
              </button>
              {projectCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/10 backdrop-blur-sm hover:bg-white/20 ${activeFilter === category ? 'text-white' : 'text-gray-300'}`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-xl ring-1 ring-inset ring-white/10 transition-all duration-300 relative overflow-hidden
                hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl transition-transform duration-300 group-hover:rotate-12">{project.icon}</span>
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-200 transition-colors">{project.domain}</h3>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 rounded-md p-3 mb-4 transition-colors duration-300 group-hover:bg-white/10">
                    <span className="text-sm text-gray-300">{project.name}</span>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center flex-1 px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
                      <Github size={16} className="mr-2" /> GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              {getResumeButtonContent()}
            </div>
          </section>
          
          <section id="certificates" className="py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Certificates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-xl ring-1 ring-inset ring-white/10 transition-all transform hover:scale-[1.02] duration-300">
                  <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                    <img src={cert.img} alt={cert.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">Issued by: {cert.issuedBy}</p>
                  <a href="#" className="block w-full text-center px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">View Certificate</a>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Contact Me
            </h2>
            <form className="max-w-lg mx-auto bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-xl ring-1 ring-inset ring-white/10">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </section>
        </main>

        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-16">
          &copy; {new Date().getFullYear()} Tanmay Sharma. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
