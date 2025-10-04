import { Button } from "./ui/button";
import { Sun, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="\pictures\commercial-solar-power-plant--an-engineer-who-is-m.png"
          alt="Solar panels installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="flex justify-center mb-6">
          <Sun className="w-16 h-16 text-yellow-400" />
        </div>
        <h1 className="text-5xl md:text-6xl mb-6">
          Mesut Selcuk
        </h1>
        <h2 className="text-1xl md:text-3xl font-semibold text-gray-100">
          Solar Design Engineer
        </h2>
        <br></br>
        <p className="mt-2 text-lg md:text-xl mb-8 text-gray-300">
          Explore my portfolio to see utility-scale and rooftop
          PV designs, AutoCAD & PVSOL samples, and as-built
          documentation.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black cursor-pointer"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-gray-700 border-white hover:bg-gray-300 hover:text-black cursor-pointer"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}