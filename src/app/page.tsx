"use client";

import { useEffect, useState } from "react";
import { Button, Card, Badge, Footer, FooterCopyright } from "flowbite-react";
import AppNavbar from "@/components/Navbar";
import { DATA } from "@/constants/data";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <div className="min-h-screen transition-colors duration-300">
      <AppNavbar />

      <main>
        <section id="home" className="pt-20 pb-20 px-4 flex flex-col items-center text-center">
          {/* FOTO PROFILE */}
          <img
            src={DATA.profile.photo}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-[center_10%] border-4 border-white shadow-lg mb-6"          />
            <h1 className="text-lg md:text-6xl font-extrabold mb-2">
            Halo, Saya <span className="text-primary-600">{DATA.profile.name}</span>
            </h1>
          <p className="text-1lg md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mt-5 mb-8">
            {DATA.profile.role}
          </p>
          <div className="flex gap-4">
          <Button
            href="#projects"
            color="blue"
            className="relative group"
          >
            <span className="relative">
              Lihat Proyek
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Button>            
          <Button href="#contact" color="blue" outline className="rounded-full px-6 py-2 hover:bg-gray-600 hover:text-white dark:hover:bg-blue-600">Hubungi Saya</Button>  </div>
        </section>
        <section id="about" className="py-5 px-4 max-w-4xl mx-auto">
          <h2 className="scroll-mt-10 py-15 px-4 max-w-4xl mx-auto font-bold text-3xl text-center">Tentang Saya</h2>
          <div className="p-8 mb-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 bg-[var(--site-bg)]">
            <p className="text-lg leading-relaxed text-justify">
              {DATA.profile.about}
            </p>
          </div>
        </section>
        
        {/* Skills Section - PERBAIKAN: Tambahkan !bg-white pada Card */}
        <section id="skills" className="py-10 bg-gray-50/50 dark:bg-gray-800/30">
          <div className="scroll-mt-5 py-10 max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Keahlian & Kompetensi
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 top-0">
              {DATA.skills.map((category, index) => (
              <Card
                key={index}
                className="!p-4 h-full flex flex-col justify-start rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 bg-[var(--site-bg)]"
              >

                <h3 className="top-0 text-lg font-bold text-primary-600 dark:text-primary-400 mb-4 uppercase tracking-wider">
                  {category.name}
                </h3>

                <div className="grid grid-cols-1 gap-2">
                  {category.items.map((skill, sIndex) => (
                    <Badge
                      key={sIndex}
                      color="blue"
                      size="sm"
                      className="px-3 py-1 font-medium w-fit"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

              </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="py-5 px-4 max-w-6xl mx-auto mb-10">
          <h2 className="scroll-mt-10 py-15 text-3xl font-bold text-center mb-12">Proyek Pilihan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2.5 gap-8">
            {DATA.projects.map((project, index) => (
              <Card
                key={index}
                imgAlt={project.title}
                imgSrc={project.image}
                className="p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 bg-[var(--site-bg)]"
              >
                <h5 className="pt-2 text-2xl font-bold tracking-tight">
                  {project.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 text-justify leading-relaxed mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="text-xs font-semibold text-primary-600 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
        <section id="contact" className="py-24 bg-gray-50/50 dark:bg-gray-800/30">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Mari Berdiskusi</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
              Saya terbuka untuk peluang kerja, kolaborasi proyek, atau sekadar berbagi pengalaman mengenai teknis dokumentasi dan front-end.
            </p>
            <div className="flex justify-center gap-4">
              <Button color="blue" href="mailto:emailanda@gmail.com">
                mnsimron@gmail.com
              </Button>
              <Button color="gray" outline href="https://linkedin.com">
                LinkedIn
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer container className="rounded-none border-t border-gray-200 dark:border-gray-700 !bg-white dark:!bg-gray-900">
        <div className="w-full text-center">
          <FooterCopyright 
            href="#" 
            by={` ${DATA.profile.name}`} 
            year={new Date().getFullYear()} 
          />
        </div>
      </Footer>
    </div>
  );
}
