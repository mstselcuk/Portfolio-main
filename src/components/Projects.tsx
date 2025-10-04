import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Zap, Home, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Residential Solar Array - 15kW",
      description: "Complete rooftop installation with battery storage system for suburban home",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNzU5MzU5MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      capacity: "15kW",
      type: "Residential",
      location: "California",
      icon: Home,
      tags: ["Rooftop", "Battery Storage", "Grid-Tied"],
    },
    {
      title: "Residential Solar Array - 15kW",
      description: "Complete rooftop installation with battery storage system for suburban home",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNzU5MzU5MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      capacity: "15kW",
      type: "Residential",
      location: "California",
      icon: Home,
      tags: ["Rooftop", "Battery Storage", "Grid-Tied"],
    },
    {
      title: "Residential Solar Array - 15kW",
      description: "Complete rooftop installation with battery storage system for suburban home",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNzU5MzU5MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      capacity: "15kW",
      type: "Residential",
      location: "California",
      icon: Home,
      tags: ["Rooftop", "Battery Storage", "Grid-Tied"],
    },
    {
      title: "Commercial Office Complex - 250kW",
      description: "Large-scale solar installation reducing operational costs by 60%",
      image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwc29sYXIlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzU5NDEwNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      capacity: "250kW",
      type: "Commercial",
      location: "Texas",
      icon: Building2,
      tags: ["Commercial", "Cost Reduction", "High Efficiency"],
    },
    {
      title: "Solar Farm Development - 5MW",
      description: "Utility-scale solar farm powering over 1,000 homes annually",
      image: "https://images.unsplash.com/photo-1709142221189-5d480a848c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMHN5c3RlbXxlbnwxfHx8fDE3NTk0MTA0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      capacity: "5MW",
      type: "Utility",
      location: "Arizona",
      icon: Zap,
      tags: ["Utility Scale", "Ground Mount", "Community Power"],
    },
    {
      title: "Residential Solar Array - 15kW",
      description: "Complete rooftop installation with battery storage system for suburban home",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNzU5MzU5MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      capacity: "15kW",
      type: "Residential",
      location: "California",
      icon: Home,
      tags: ["Rooftop", "Battery Storage", "Grid-Tied"],
    },
    {
      title: "Residential Solar Array - 15kW",
      description: "Complete rooftop installation with battery storage system for suburban home",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNzU5MzU5MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      capacity: "15kW",
      type: "Residential",
      location: "California",
      icon: Home,
      tags: ["Rooftop", "Battery Storage", "Grid-Tied"],
    },
    {
      title: "Residential Solar Array - 15kW",
      description: "Complete rooftop installation with battery storage system for suburban home",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNzU5MzU5MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      capacity: "15kW",
      type: "Residential",
      location: "California",
      icon: Home,
      tags: ["Rooftop", "Battery Storage", "Grid-Tied"],
    },
    {
      title: "Commercial Office Complex - 250kW",
      description: "Large-scale solar installation reducing operational costs by 60%",
      image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwc29sYXIlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzU5NDEwNDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      capacity: "250kW",
      type: "Commercial",
      location: "Texas",
      icon: Building2,
      tags: ["Commercial", "Cost Reduction", "High Efficiency"],
    },
    {
      title: "Solar Farm Development - 5MW",
      description: "Utility-scale solar farm powering over 1,000 homes annually",
      image: "https://images.unsplash.com/photo-1709142221189-5d480a848c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMHN5c3RlbXxlbnwxfHx8fDE3NTk0MTA0NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      capacity: "5MW",
      type: "Utility",
      location: "Arizona",
      icon: Zap,
      tags: ["Utility Scale", "Ground Mount", "Community Power"],
    },
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
          <h2 className="text-4xl mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">
            A selection of solar installations showcasing innovation and efficiency
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
                    onClick={() => setActiveIndex(index)}
                  >
                    <Card className={`overflow-hidden ${isActive ? "w-[420px]" : "w-[380px]"} shadow-2xl`}>
                      <div className="relative h-64 overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full">
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
        </div>
      </div>
    </section>
  );
}
