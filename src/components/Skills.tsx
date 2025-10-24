import { Card, CardContent } from "./ui/card";
import {
  Lightbulb,
  FileText,
  Wrench,
  LineChart,
  Shield,
  Laptop
} from "lucide-react";

export function Skills() {
  const skills = [
    {
      icon: Lightbulb,
      title: "System Design",
      items: ["Rooftop Solar Systems", "Ground-Mounted Solar Power Plants", "PV Array Configuration", "Inverter Room Design"],
    },
    {
      icon: FileText,
      title: "Engineering & Planning",
      items: ["Project Management", "Budget Management", "Permitting", "Time Management"],
    },
    {
      icon: Wrench,
      title: "Technical Expertise",
      items: ["PV Selection", "Inverter Selection", "Grid Integration", "MPPT Optimization"],
    },
    {
      icon: LineChart,
      title: "Performance Analysis",
      items: ["Energy Production Analysis", "Shading Analysis", "Inverter Load Analysis"],
    },
    {
      icon: Shield,
      title: "Standards & Safety",
      items: ["IP Ratings", "IEEE Standards", "Safety Protocols"],
    },
    {
      icon: Laptop,
      title: "Software Proficiency",
      items: ["AutoCad", "PVsol", "PVsyst", "Solidworks", "SketchUp"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-600">
            Comprehensive skills in solar design, engineering, and project management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <skill.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3>{skill.title}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
