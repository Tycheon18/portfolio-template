import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Palette, Smartphone, ExternalLink, X, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import FooterWithLinks from './components/FooterWithLinks';

const NAV_LINKS = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'contact', href: '#contact' },
];

const FOOTER_LINKS = [
  { title: '섹션', items: [{ label: '소개', href: '#about' }, { label: '프로젝트', href: '#projects' }, { label: '스킬', href: '#skills' }, { label: '문의', href: '#contact' }] },
  { title: '더 보기', items: [{ label: 'GitHub', href: 'https://github.com' }, { label: 'LinkedIn', href: 'https://linkedin.com' }, { label: '이력서', href: '#' }] },
];

const projects = [
  { id: 1, title: '이커머스 플랫폼', category: '웹 개발', image: '/images/projects/project1.jpg', description: 'React와 Node.js를 활용한 풀스택 이커머스 플랫폼. 결제, 재고관리, 인증 구현.', tech: ['React', 'Node.js', 'MongoDB', 'Stripe'], link: '#' },
  { id: 2, title: '부동산 관리 시스템', category: '웹 앱', image: '/images/projects/project2.jpg', description: '부동산 중개사를 위한 관리 시스템. 매물, 고객, 계약 관리 기능.', tech: ['Vue.js', 'Firebase', 'Tailwind CSS'], link: '#' },
  { id: 3, title: '헬스케어 모바일 앱', category: '모바일', image: '/images/projects/project3.jpg', description: 'React Native로 개발한 건강 관리 앱. 운동 기록, 식단 관리, 목표 설정.', tech: ['React Native', 'Redux', 'API Integration'], link: '#' },
  { id: 4, title: '레스토랑 예약 시스템', category: '웹 개발', image: '/images/projects/project4.jpg', description: '레스토랑 예약 및 테이블 관리. 실시간 예약, 웨이팅 기능.', tech: ['Next.js', 'PostgreSQL', 'Socket.io'], link: '#' },
  { id: 5, title: '교육 플랫폼 LMS', category: '웹 앱', image: '/images/projects/project5.jpg', description: '온라인 강의 플랫폼. 영상 강의, 과제, 성적 관리.', tech: ['React', 'Django', 'AWS S3'], link: '#' },
  { id: 6, title: '부동산 검색 앱', category: '모바일', image: '/images/projects/project6.jpg', description: '지도 기반 부동산 검색 앱. 위치 기반 검색, 필터링.', tech: ['Flutter', 'Google Maps API', 'Firebase'], link: '#' },
];

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript/TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Next.js', level: 75 },
  { name: 'MongoDB', level: 70 },
  { name: 'Git/GitHub', level: 85 },
  { name: 'Figma/Design', level: 65 },
];

const IMG_FALLBACK = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239CA3AF"%3EProject Image%3C/text%3E%3C/svg%3E';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar logo="Portfolio" links={NAV_LINKS} />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
              <Code className="w-16 h-16 text-navy-950" />
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-bold mb-4 text-white">김철수</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-2xl md:text-3xl text-gold-400 mb-6">풀스택 웹 개발자</motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">사용자 경험을 최우선으로 생각하며, 아름답고 기능적인 웹 애플리케이션을 만듭니다.</motion.p>
          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">프로젝트 보기</motion.button>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-16"><ChevronDown className="w-8 h-8 mx-auto animate-bounce text-gray-500" /></motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">About <span className="gradient-text">Me</span></motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-gray-400 space-y-4 mb-8">
            <p className="text-lg leading-relaxed">안녕하세요! 3년 경력의 풀스택 웹 개발자 김철수입니다. 사용자 중심의 인터랙티브한 웹 애플리케이션을 만드는 것을 즐깁니다.</p>
            <p className="text-lg leading-relaxed">React, Node.js, TypeScript를 주로 사용하며, 최신 웹 기술과 디자인 트렌드를 빠르게 습득하고 적용합니다.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-3">
            {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'MongoDB', 'AWS', 'Git'].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-navy-800 text-gold-400 rounded-full text-sm font-medium">{tag}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 bg-navy-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">Featured <span className="gradient-text">Projects</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-gray-400 text-center mb-12 text-lg">최근 작업한 프로젝트들입니다</motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} onClick={() => setSelectedProject(project)} className="bg-navy-800 rounded-xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-all duration-300">
                <div className="relative h-64 overflow-hidden bg-navy-700">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.src = IMG_FALLBACK; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <p className="text-gold-400 text-sm font-medium mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 line-clamp-2 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">{project.tech.slice(0, 3).map((tech) => <span key={tech} className="px-3 py-1 bg-navy-700 text-gray-300 rounded-full text-xs">{tech}</span>)}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-navy-800 rounded-2xl max-w-3xl w-full my-8">
              <div className="relative h-96 overflow-hidden bg-navy-700 rounded-t-2xl">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" onError={(e) => { e.target.src = IMG_FALLBACK; }} />
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-navy-900/80 hover:bg-navy-900 p-2 rounded-full transition-colors"><X className="w-6 h-6 text-white" /></button>
              </div>
              <div className="p-8">
                <p className="text-gold-400 text-sm font-medium mb-2">{selectedProject.category}</p>
                <h3 className="text-3xl font-bold mb-4 text-white">{selectedProject.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{selectedProject.description}</p>
                <div className="mb-6"><h4 className="text-lg font-semibold mb-3 text-white">사용 기술</h4><div className="flex flex-wrap gap-2">{selectedProject.tech.map((tech) => <span key={tech} className="px-4 py-2 bg-navy-700 text-gold-400 rounded-full text-sm font-medium">{tech}</span>)}</div></div>
                <a href={selectedProject.link} className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-950 px-6 py-3 rounded-full font-semibold transition-colors">프로젝트 보기 <ExternalLink className="w-4 h-4" /></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skills */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-12 text-center"><span className="gradient-text">Skills</span></motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="flex justify-between mb-2"><span className="font-medium text-white">{skill.name}</span><span className="text-gold-400">{skill.level}%</span></div>
                <div className="h-3 bg-navy-800 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: index * 0.1 }} className="h-full bg-gradient-to-r from-gold-400 to-gold-600" /></div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 grid md:grid-cols-3 gap-8">
            {[{ Icon: Code, title: 'Clean Code', desc: '유지보수가 쉬운 깔끔한 코드를 작성합니다' }, { Icon: Palette, title: 'Modern Design', desc: '최신 디자인 트렌드를 반영한 UI/UX' }, { Icon: Smartphone, title: 'Responsive', desc: '모든 기기에서 완벽하게 작동합니다' }].map(({ Icon, title, desc }) => (
              <div key={title} className="text-center"><Icon className="w-12 h-12 text-gold-400 mx-auto mb-4" /><h3 className="text-xl font-bold mb-2 text-white">{title}</h3><p className="text-gray-400">{desc}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-navy-900/50">
        <div className="max-w-2xl mx-auto"><ContactForm submitButtonText="메시지 보내기" /></div>
      </section>

      <FooterWithLinks companyName="김철수" description={`풀스택 웹 개발자\n사용자 경험을 최우선으로 생각합니다.`} links={FOOTER_LINKS} socialLinks={[{ platform: 'github', href: 'https://github.com' }, { platform: 'linkedin', href: 'https://linkedin.com' }, { platform: 'mail', href: 'mailto:contact@example.com' }]} copyright="© 2026 Portfolio Template. All rights reserved." />
    </div>
  );
}

export default App;
