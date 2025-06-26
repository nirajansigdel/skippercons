import { CheckCircle, Clock, Users2, Trophy } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "15+ years of experience with 98% success rate in student placements."
  },
  {
    icon: Clock,
    title: "Quick Processing",
    description: "Fast-track your applications with our streamlined processes and industry connections."
  },
  {
    icon: Users2,
    title: "Expert Team",
    description: "Certified counselors and former admission officers guide you at every step."
  },
  {
    icon: Trophy,
    title: "Award Winning",
    description: "Recognized as the top education consultancy for three consecutive years."
  }
];

export const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Skipper?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We don't just help you get admitted to universities abroad – we ensure 
              you make the right choice for your future. Our comprehensive approach 
              covers everything from career counseling to post-arrival support.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Students working together"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
