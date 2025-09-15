import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Code, Palette, Figma, WholeWord as Wordpress, ExternalLink, ChevronDown, User, Briefcase, MessageSquare, Star, Zap, Rocket, Heart } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'HTML5', icon: Code, level: 90, color: 'from-orange-400 to-red-500' },
    { name: 'CSS', icon: Palette, level: 85, color: 'from-blue-400 to-cyan-500' },
    { name: 'Tailwind CSS', icon: Palette, level: 88, color: 'from-teal-400 to-blue-500' },
    { name: 'JavaScript', icon: Code, level: 82, color: 'from-yellow-400 to-orange-500' },
    { name: 'Figma', icon: Figma, level: 75, color: 'from-purple-400 to-pink-500' },
    { name: 'WordPress', icon: Wordpress, level: 78, color: 'from-indigo-400 to-purple-500' }
  ];

  const projects = [
    {
      title: 'E-commerce Moderno',
      description: 'Tienda online completa con carrito de compras y sistema de pagos',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['HTML5', 'CSS', 'JavaScript'],
      gradient: 'from-pink-500 to-rose-500',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Dashboard Analítico',
      description: 'Panel de control interactivo con gráficos y métricas en tiempo real',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800',
      tech: ['JavaScript', 'Tailwind CSS', 'API'],
      gradient: 'from-cyan-500 to-blue-500',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Landing Page Creativa',
      description: 'Página de aterrizaje con animaciones y diseño responsive',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
      gradient: 'from-emerald-500 to-teal-500',
      liveUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              Mi Portafolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Inicio' },
                { id: 'about', label: 'Sobre Mí' },
                { id: 'skills', label: 'Habilidades' },
                { id: 'projects', label: 'Proyectos' },
                { id: 'contact', label: 'Contacto' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-pink-500 to-violet-500 shadow-lg'
                      : 'text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/20 animate-fade-in bg-black/20 backdrop-blur-md">
              {[
                { id: 'home', label: 'Inicio' },
                { id: 'about', label: 'Sobre Mí' },
                { id: 'skills', label: 'Habilidades' },
                { id: 'projects', label: 'Proyectos' },
                { id: 'contact', label: 'Contacto' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="text-yellow-400 animate-spin" size={24} />
                  <span className="text-cyan-400 font-medium">¡Bienvenido a mi mundo digital!</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Hola, soy
                  <span className="block bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-gradient">
                    Tu Nombre
                  </span>
                </h1>
                <p className="text-xl text-white/80 mt-6 leading-relaxed">
                  Desarrollador Web Frontend especializado en crear 
                  <span className="text-pink-400 font-semibold"> experiencias digitales excepcionales</span> 
                  que cautivan y convierten
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollTo('projects')}
                  className="group px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <Rocket className="group-hover:animate-bounce" size={20} />
                  <span>Ver Proyectos</span>
                </button>
                <button 
                  onClick={() => scrollTo('contact')}
                  className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
                >
                  <Heart className="group-hover:animate-pulse" size={20} />
                  <span>Contáctame</span>
                </button>
              </div>

              <div className="flex space-x-6">
                <a href="#" className="group p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 transform hover:scale-110 transition-all duration-300">
                  <Github className="group-hover:animate-spin" size={24} />
                </a>
                <a href="#" className="group p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transform hover:scale-110 transition-all duration-300">
                  <Linkedin className="group-hover:animate-bounce" size={24} />
                </a>
                <a href="#" className="group p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-teal-500 transform hover:scale-110 transition-all duration-300">
                  <Mail className="group-hover:animate-pulse" size={24} />
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full animate-pulse"></div>
                <img 
                  src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10 inset-4 absolute"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="animate-bounce cursor-pointer" onClick={() => scrollTo('about')}>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
              <ChevronDown size={24} className="mx-auto text-white/70 mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <User className="text-cyan-400" size={32} />
              <h2 className="text-4xl font-bold text-white">
                Sobre Mí
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Descubre la pasión detrás del código
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <p className="text-lg text-white/90 leading-relaxed mb-4">
                  Soy un desarrollador web apasionado por crear soluciones digitales innovadoras y funcionales. 
                  Con experiencia en tecnologías frontend modernas, me especializo en convertir ideas creativas 
                  en experiencias web interactivas y atractivas.
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  Mi enfoque se centra en escribir código limpio, implementar diseños responsivos y optimizar 
                  el rendimiento para ofrecer la mejor experiencia de usuario posible. Siempre estoy aprendiendo 
                  nuevas tecnologías y mejorando mis habilidades.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Code className="text-white" size={32} />
                  </div>
                  <h3 className="font-semibold text-white text-lg">Desarrollo</h3>
                  <p className="text-sm text-white/70">Frontend & Backend</p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Palette className="text-white" size={32} />
                  </div>
                  <h3 className="font-semibold text-white text-lg">Diseño</h3>
                  <p className="text-sm text-white/70">UI/UX Design</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Workspace"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-2xl opacity-30 animate-pulse"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-40 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Zap className="text-yellow-400 animate-pulse" size={32} />
              <h2 className="text-4xl font-bold text-white">
                Habilidades
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Tecnologías y herramientas con las que trabajo para crear experiencias web excepcionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-white/20 rounded-full h-4 mb-3 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70 font-medium">Nivel de experiencia</span>
                    <span className="text-lg text-white font-bold">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Briefcase className="text-emerald-400" size={32} />
              <h2 className="text-4xl font-bold text-white">
                Mis Proyectos
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Algunos de los proyectos que he desarrollado recientemente
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end justify-center pb-6`}>
                    <div className="flex space-x-4">
                      <a href={project.liveUrl} className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors transform hover:scale-110">
                        <ExternalLink size={20} />
                      </a>
                      <a href={project.codeUrl} className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors transform hover:scale-110">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <MessageSquare className="text-pink-400 animate-bounce" size={32} />
              <h2 className="text-4xl font-bold text-white">
                Contáctame
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                  <Heart className="text-pink-400 mr-3" size={24} />
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-lg">Email</p>
                      <p className="text-white/70">tu@email.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-lg">Teléfono</p>
                      <p className="text-white/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-lg">Ubicación</p>
                      <p className="text-white/70">Ciudad, País</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-6">
                <a href="#" className="group w-14 h-14 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-white hover:from-pink-500 hover:to-violet-500 transform hover:scale-110 transition-all duration-300">
                  <Github className="group-hover:animate-spin" size={24} />
                </a>
                <a href="#" className="group w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white hover:from-blue-500 hover:to-cyan-500 transform hover:scale-110 transition-all duration-300">
                  <Linkedin className="group-hover:animate-bounce" size={24} />
                </a>
                <a href="#" className="group w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white hover:from-green-500 hover:to-teal-500 transform hover:scale-110 transition-all duration-300">
                  <Mail className="group-hover:animate-pulse" size={24} />
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Tu Nombre"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-pink-400 focus:bg-white/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Tu Email"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-pink-400 focus:bg-white/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea 
                    rows={5}
                    placeholder="Tu Mensaje"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-pink-400 focus:bg-white/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="group w-full px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-2xl font-medium hover:shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Enviar Mensaje</span>
                  <Rocket className="group-hover:animate-bounce" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70">
            &copy; 2025 Mi Portafolio. Hecho con 
            <Heart className="inline mx-1 text-pink-400" size={16} />
            y mucho código.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;