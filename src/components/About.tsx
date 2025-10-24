import { Award, Users, ZapIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: Award,
      title: "3+ Years Experience",
      description:
        "Designing and delivering solar systems across residential and commercial projects",
    },
    {
      icon: Users,
      title: "50+ Projects",
      description: "Client-Focused Solar Solutions",
    },
    {
      icon: ZapIcon,
      title: "40+ MW",
      description: "Mainly Focused on Commercial Rooftop Solar Projects",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I’m a passionate Solar Project Engineer with a strong focus on delivering high-performance and sustainable energy solutions.
            Over the past few years, I’ve been involved in designing and optimizing solar systems across residential, commercial, and utility-scale projects.
            <br />
            <br />
            My goal is to create efficient designs that not only meet technical standards but also make solar energy more accessible and reliable for everyone.
            Now based in Melbourne, I’m continuing to expand my expertise in renewable technologies and support the transition toward a cleaner, smarter energy future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="
                bg-gradient-to-br from-gray-50 to-white 
                border border-gray-200 
                rounded-xl 
                hover:shadow-lg hover:scale-[1.02] 
                hover:border-yellow-400 
                transition-all duration-300 ease-out
                cursor-default
              "
            >
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-yellow-100 rounded-full shadow-sm">
                    <item.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                <h3 className="text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-m">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
