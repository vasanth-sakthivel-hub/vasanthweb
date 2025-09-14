import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { TypewriterText } from "@/components/TypewriterText";
import { SkillChip } from "@/components/SkillChip";
import { ProjectCard } from "@/components/ProjectCard";
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Database, Server, Wrench } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";
import emailjs from '@emailjs/browser';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
    // Initialize EmailJS
    emailjs.init("uBEdU3WcoFYZzOtr3");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      await emailjs.send(
        "service_zi4yteh",
        "template_default", // You may need to create a template in EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Portfolio Owner",
        }
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const skills = {
    backend: [
      { name: 'Java', category: 'backend' as const },
      { name: 'Spring Boot', category: 'backend' as const },
      { name: 'REST API', category: 'backend' as const },
      { name: 'Spring MVC', category: 'backend' as const },
    ],
    frontend: [
      { name: 'Thymeleaf', category: 'frontend' as const },
      { name: 'HTML', category: 'frontend' as const },
      { name: 'CSS', category: 'frontend' as const },
      { name: 'JavaScript', category: 'frontend' as const },
    ],
    database: [
      { name: 'MySQL', category: 'database' as const },
      { name: 'MongoDB', category: 'database' as const },
      { name: 'JPA', category: 'database' as const },
    ],
    tools: [
      { name: 'Git', category: 'tools' as const },
      { name: 'Maven', category: 'tools' as const },
      { name: 'IntelliJ', category: 'tools' as const },
      { name: 'Docker', category: 'tools' as const },
    ]
  };

  const projects = [
    {
      title: "Hospital Management System",
      description: "Doctor & Patient registration, Appointment booking, Admin module, Thymeleaf UI, Spring Boot + MySQL.",
      tags: [
        { name: 'Spring Boot', category: 'backend' as const },
        { name: 'Thymeleaf', category: 'frontend' as const },
        { name: 'MySQL', category: 'database' as const },
      ],
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-username/hospital-management",
    },
    {
      title: "Bus Ticket Reservation System",
      description: "Passenger & Operator roles, Ticket booking & history, Search & filter buses, Spring Boot + Thymeleaf.",
      tags: [
        { name: 'Spring Boot', category: 'backend' as const },
        { name: 'Thymeleaf', category: 'frontend' as const },
        { name: 'JPA', category: 'database' as const },
      ],
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-username/bus-booking",
    },
    {
      title: "Employee Management System",
      description: "CRUD + pagination, REST APIs, Spring MVC + MongoDB or MySQL.",
      tags: [
        { name: 'REST API', category: 'backend' as const },
        { name: 'MongoDB', category: 'database' as const },
        { name: 'Spring MVC', category: 'backend' as const },
      ],
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-username/employee-management",
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-primary/30 animate-float">
                <img 
                  src={profilePicture} 
                  alt="Vasanth - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Hi — I'm <span className="text-primary">Vasanth</span>,
                </h1>
                <div className="text-2xl lg:text-4xl font-semibold text-muted-foreground min-h-[2.5rem]">
                  <TypewriterText 
                    text="Full-Stack Developer"
                    className="block"
                  />
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                I build end-to-end web solutions that combine strong backend logic with engaging user experiences. My projects include
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('projects')}
                  className="bg-primary hover:bg-primary/80 text-primary-foreground animate-pulse-glow"
                >
                  View Projects
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <a 
                  href="https://github.com/your-username" 
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/your-profile"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              About <span className="text-primary">Me</span>
            </h2>
            
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I build full-stack web applications using Java + Spring Boot on the backend, 
                  Thymeleaf or custom HTML/CSS/JS frontends, and relational/non-relational DBs (MySQL, MongoDB). 
                  I prefer clean code, simple UX, and reusing existing modules to ship faster.
                </p>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Tech Stack:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Languages:</strong> Java, SQL, JavaScript</li>
                    <li><strong>Frameworks:</strong> Spring Boot, Thymeleaf</li>
                    <li><strong>Databases:</strong> MySQL, MongoDB</li>
                    <li><strong>Tools:</strong> Git, Maven, IntelliJ</li>
                  </ul>
                </div>
                
                {/* Tech Snapshot Code Block */}
                <div className="bg-black/20 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary">Tech Snapshot</span>
                  </div>
                  <pre className="text-sm text-muted-foreground">
{`Backend: Java + Spring Boot + REST APIs
Frontend: Thymeleaf + HTML/CSS/JavaScript  
Database: MySQL / MongoDB with JPA`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <div className={`space-y-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-center">
              Skills & <span className="text-primary">Technologies</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Backend */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Server className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <div className="space-y-2">
                  {skills.backend.map((skill) => (
                    <SkillChip key={skill.name} name={skill.name} category={skill.category} className="block mb-2" />
                  ))}
                </div>
              </div>
              
              {/* Frontend */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <div className="space-y-2">
                  {skills.frontend.map((skill) => (
                    <SkillChip key={skill.name} name={skill.name} category={skill.category} className="block mb-2" />
                  ))}
                </div>
              </div>
              
              {/* Database */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Database className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold">Database</h3>
                </div>
                <div className="space-y-2">
                  {skills.database.map((skill) => (
                    <SkillChip key={skill.name} name={skill.name} category={skill.category} className="block mb-2" />
                  ))}
                </div>
              </div>
              
              {/* Tools */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-semibold">Dev Tools</h3>
                </div>
                <div className="space-y-2">
                  {skills.tools.map((skill) => (
                    <SkillChip key={skill.name} name={skill.name} category={skill.category} className="block mb-2" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className={`space-y-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-center">
              Featured <span className="text-primary">Projects</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={project.title} style={{ animationDelay: `${index * 0.2}s` }}>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white/[0.02]">
        <div className="container mx-auto max-w-4xl">
          <div className={`space-y-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-center">
              Experience & <span className="text-primary">Highlights</span>
            </h2>
            
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
              <CardContent className="p-8">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-2xl">•</span>
                    <span>Built full-stack web applications end-to-end using modern Java ecosystem</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-2xl">•</span>
                    <span>Focus on reusable modules and clean code architecture for maintainability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-2xl">•</span>
                    <span>Comfortable with unit testing, version control, and basic CI/CD practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className={`space-y-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-center">
              Get In <span className="text-primary">Touch</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name" 
                        className="bg-white/5 border-white/10"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com" 
                        className="bg-white/5 border-white/10"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message here..." 
                        rows={4}
                        className="bg-white/5 border-white/10"
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary hover:bg-primary/80"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                  <p className="text-muted-foreground text-lg">
                    I'm always interested in discussing new opportunities, 
                    technical challenges, or just chatting about web development.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:your.email@example.com"
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-primary/10"
                  >
                    <Mail className="w-6 h-6 text-primary" />
                    <span>your.email@example.com</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-primary/10"
                  >
                    <Linkedin className="w-6 h-6 text-primary" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                  
                  <a 
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:bg-primary/10"
                  >
                    <Github className="w-6 h-6 text-primary" />
                    <span>GitHub Profile</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © 2024 Vasanth. Built with React + TypeScript
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/your-username" 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/your-profile"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
