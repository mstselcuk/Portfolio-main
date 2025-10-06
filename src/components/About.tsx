import { Award, BellElectric, Target, Users, ZapIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: Award,
      title: "3+ Years Experience",
      description: "Designing and delivering solar systems across residential and commercial projects",
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
            As a certified Solar Design Engineer, I specialize in creating efficient,
            cost-effective photovoltaic systems that harness the power of the sun.
            My expertise spans from initial site assessment to final system optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card key={index} className="border-2 hover:border-yellow-500 transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <item.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
