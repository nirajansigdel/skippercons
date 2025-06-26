import { Button } from "../ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Gateway to
                <span className="text-blue-600 block">Global Education</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your dreams of studying abroad into reality. We guide students 
                through every step of their international education journey with expert 
                counseling and personalized support.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 text-white">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-white hover:bg-neutral-100">
                <Play className="mr-2 h-5 w-5" />
                Watch Success Stories
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-gray-600">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Partner Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Students studying abroad"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-indigo-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
