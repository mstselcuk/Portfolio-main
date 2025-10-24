import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Zap, Home, Building2, ChevronLeft, ChevronRight, Building, Factory, Filter, LinkedinIcon } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Dynamic Heat Pv System",
      description: "Design and Legal Process - Dynamic Heat (Client name censored to protect confidentiality.)",
      image: "https://r.resimlink.com/W4Xh_xK91ufU.webp",
      capacity: "4,553.64 kWp",
      type: "Commercial",
      location: "Izmir, Turkiye",
      icon: Factory,
      tags: ["Conseco Energy", "On-Grid", "Rooftop"],
      link: "https://www.conseco.com.tr/Home/Referances",
    },
    {
      title: "Igciler Pv System Fase 1-2",
      description: "Design and Legal Process - Igciler Tarim Urunleri Ltd. Sti.",
      image: "https://r.resimlink.com/DLJcy-bAiK.webp",
      capacity: "4,176.00 kWp",
      type: "Commercial",
      location: "Izmir, Turkiye",
      icon: Factory,
      tags: ["Conseco Energy", "On-Grid", "Rooftop"],
      link: "https://www.conseco.com.tr/Home/Referances",
    },
    {
      title: "Semsioglu Mobilya Pv System Fase 1-2",
      description: "Design and Legal Process - Semsioglu Mobilya San. ve Tic. Ltd. Sti.",
      image: "https://r.resimlink.com/tTydAj-chrE.webp",
      capacity: "2,404.80 kWp",
      type: "Commercial",
      location: "Izmir, Turkiye",
      icon: Factory,
      tags: ["Conseco Energy", "On-Grid", "Rooftop"],
      link: "https://www.conseco.com.tr/Home/Referances",
    },
    {
      title: "Meditera Pv System",
      description: "Design and Legal Process - Meditera (Client name censored to protect confidentiality.)",
      image: "https://r.resimlink.com/B_Ffg.webp",
      capacity: "2,389.00 kWp",
      type: "Commercial",
      location: "Izmir, Turkiye",
      icon: Factory,
      tags: ["Conseco Energy", "On-Grid", "Rooftop"],
      link: "https://www.conseco.com.tr/Home/Referances",
    },
    {
      title: "Turkuaz Kablo Pv System",
      description: "Design and Legal Process - Turkuaz Kablo Taahhüt Tic. Ve San. A.S.",
      image: "https://r.resimlink.com/DVqeN.webp",
      capacity: "1,530.00 kWp",
      type: "Commercial",
      location: "Kocaeli, Turkiye",
      icon: Factory,
      tags: ["Conseco Energy", "On-Grid", "Rooftop"],
      link: "https://www.conseco.com.tr/Home/Referances",
    },
    {
      title: "Ata Reduktor Pv System",
      description: "Design and Legal Process - Ata Reduktor Motor Ltd. Sti.",
      image: "https://r.resimlink.com/_VE-PDFJmnbg.webp",
      capacity: "1,131.84 kWp",
      type: "Commercial",
      location: "Izmir, Turkiye",
      icon: Factory,
      tags: ["Conseco Energy", "On-Grid", "Rooftop"],
      link: "https://www.conseco.com.tr/Home/Referances",
    },
    {
      title: "Irak Plastik Pv System",
      description: "Design and Legal Process - Irak Plastik San. Ve Tic. A.S.",
      image: "https://ardenenerji.com/wp-content/webp-express/webp-images/uploads/2024/11/IRAK-PLASTIK-570x380.png.webp",
      capacity: "1,128.00 kWp",
      type: "Commercial",
      location: "Izmir, Turkiye",
      icon: Factory,
      tags: ["Arden Solar Energy", "On-Grid", "Rooftop"],
      link: "https://ardenenerji.com/referanslar/",
    },
    {
      title: "Öz Özbulutlar Pv System",
      description: "Full Process (Design-Mounting-Comissioning) - Öz Özbulutlar Ltd. Sti.",
      image: "https://ardenenerji.com/wp-content/webp-express/webp-images/uploads/2024/11/OZOZBULUTLAR-TARIM-570x380.png.webp",
      capacity: "284.90 kWp",
      type: "Commercial",
      location: "Yozgat, Turkiye",
      icon: Factory,
      tags: ["Arden Solar Energy", "On-Grid", "Rooftop"],
      link: "https://ardenenerji.com/referanslar/",
    },
    {
      title: "Huntas Pv System",
      description: "Full Process (Design-Mounting-Comissioning) - Huntas Insaat San. ve Tic. Ltd. Sti.",
      image: "https://ardenenerji.com/wp-content/webp-express/webp-images/uploads/2024/11/HUN-TAS-570x380.jpg.webp",
      capacity: "240.89 kWp",
      type: "Commercial",
      location: "Balikesir, Turkiye",
      icon: Factory,
      tags: ["Arden Solar Energy", "On-Grid", "Rooftop"],
      link: "https://ardenenerji.com/referanslar/",
    },
    {
      title: "Bildikler Pv System",
      description: "Full Process (Design-Mounting-Comissioning) - Bildikler Tarim Ltd. Sti.",
      image: "https://ardenenerji.com/wp-content/webp-express/webp-images/uploads/2024/11/BILDIKLER-TARIM-570x380.png.webp",
      capacity: "150.42 kWp",
      type: "Commercial",
      location: "Yozgat, Turkiye",
      icon: Factory,
      tags: ["Arden Solar Energy", "On-Grid", "Rooftop"],
      link: "https://ardenenerji.com/referanslar/",
    },
  ];

  // Aktifken blur uygulanacak projelerin başlık listesi (istediğini ekleyip çıkar)
  const blurredProjects = [
    "Dynamic Heat Pv System",
    "Meditera Pv System",
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // Sağ/sol geçişler için gecikme fix'li stil hesaplayıcı
  const getCardStyle = (index: number) => {
    const STEP = 300;     // yatay adım
    const EDGE = 2.15;    // ikinci halkanın hemen dışı (bekleme pozisyonu)
    let diff = index - activeIndex;

    // dairesel fark düzeltmesi
    if (diff > projects.length / 2) diff -= projects.length;
    else if (diff < -projects.length / 2) diff += projects.length;

    const isActive = index === activeIndex;
    const baseOffset = diff * STEP;

    // merkeze yakın olan daha üstte görünür
    const z = 10 - Math.min(Math.abs(diff), 10);

    // 2'den uzak olanlar: DOM'da kalsın; ikinci halkanın hemen dışında gizli beklesin
    if (Math.abs(diff) > 2) {
      const direction = Math.sign(diff) || 1;
      const hiddenOffset = direction * EDGE * STEP; // ± ~645px
      return {
        offset: hiddenOffset,
        scale: 0.72,
        opacity: 0,
        zIndex: 0,
        filter: "blur(2px) grayscale(70%)",
        pointerEvents: "none" as const,
      };
    }

    if (isActive) {
      return {
        offset: baseOffset,
        scale: 1,
        opacity: 1,
        zIndex: z,
        filter: "blur(0px) grayscale(0)",
        pointerEvents: "auto" as const,
      };
    } else if (Math.abs(diff) === 1) {
      return {
        offset: baseOffset,
        scale: 0.85,
        opacity: 1,
        zIndex: z,
        filter: "blur(1px) grayscale(30%)",
        pointerEvents: "auto" as const,
      };
    } else {
      // diff === ±2
      return {
        offset: baseOffset,
        scale: 0.76,
        opacity: 1,
        zIndex: z,
        filter: "blur(2px) grayscale(70%)",
        pointerEvents: "auto" as const,
      };
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Selected Solar Projects</h2>
          <p className="text-xl text-gray-600">
            A selection of solar power systems I’ve contributed to — <br></br>
            showcasing key designs and installations from my professional portfolio.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all cursor-pointer"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all cursor-pointer"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="relative h-[600px] flex items-center justify-center overflow-hidden px-4">
            <div className="relative w-full flex items-center justify-center">
              {projects.map((project, index) => {
                const style = getCardStyle(index);
                const isActive = index === activeIndex;

                // aktif + listede ise blur/etiket
                const shouldBlur = isActive && blurredProjects.includes(project.title);

                return (
                  <div
                    key={index}
                    className="absolute cursor-pointer"
                    style={{
                      left: "50%",
                      transform: `translateX(calc(-50% + ${style.offset}px)) translateZ(0) scale(${style.scale})`,
                      opacity: style.opacity,
                      zIndex: style.zIndex,
                      filter: style.filter,
                      pointerEvents: style.pointerEvents,
                      transition: "transform 450ms ease, opacity 350ms ease, filter 350ms ease",
                      willChange: "transform, opacity, filter",
                      transformOrigin: "center",
                      backfaceVisibility: "hidden",
                      transformStyle: "preserve-3d",
                    }}

                    onClick={() => {
                      if (isActive && project.link) window.open(project.link, "_blank");
                      else setActiveIndex(index);
                    }}
                  >
                    <Card className={`overflow-hidden ${isActive ? "w-[420px]" : "w-[380px]"} shadow-2xl`}>
                      <div className="relative h-64 overflow-hidden">
                        {/* Görsel */}
                        <div
                          className="w-full h-full"
                          style={{ filter: shouldBlur ? "blur(4px)" : undefined }}
                        >
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Alt yazı şeriti (yalnızca aktif + listedekiler) */}
                        {shouldBlur && (
                          <div
                            className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            style={{ zIndex: 10 }}
                          >
                            <div className="w-full bg-black/60 text-yellow-400 text-[12px] text-center py-3">
                              Visual content blurred to protect client data.
                            </div>
                          </div>
                        )}

                        {/* Kapasite rozeti */}
                        <div
                          className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full"
                          style={{ zIndex: 20 }}
                        >
                          {project.capacity}
                        </div>
                      </div>

                      {isActive ? (
                        <>
                          <CardHeader>
                            <div className="flex items-start gap-3 mb-2">
                              <div className="p-2 bg-yellow-100 rounded-lg">
                                <project.icon className="w-5 h-5 text-yellow-600" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-lg">{project.title}</CardTitle>
                                <CardDescription className="mt-1">
                                  {project.location} • {project.type}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </>
                      ) : (
                        <>
                          <CardHeader className="opacity-50">
                            <div className="flex items-start gap-3 mb-2">
                              <div className="p-2 bg-yellow-100 rounded-lg">
                                <project.icon className="w-5 h-5 text-yellow-600" />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-lg">{project.title}</CardTitle>
                                <CardDescription className="mt-1">
                                  {project.location} • {project.type}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="opacity-50">
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="secondary">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </>
                      )}
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${index === activeIndex ? "bg-yellow-500 w-8" : "bg-gray-300 hover:bg-gray-400"}`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
          <br></br>
          {/* 💡 Info text */}
          <p className="text-center text-m text-gray-500 italic mt-2">
            💡 Click the center card to explore the reference project on the partner company’s website.
          </p>
        </div>
      </div>
    </section>
  );
}
