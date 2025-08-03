import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Обработка якоря в URL при загрузке страницы
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Небольшая задержка для корректной прокрутки
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
