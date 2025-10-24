import { Sun } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sun className="w-6 h-6 text-yellow-400" />
            <span className="font-medium">Solar Project Engineer</span>
          </div>
          <p className="text-gray-400">
            © 2025 Solar Project Engineer. Powering a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  );
}
