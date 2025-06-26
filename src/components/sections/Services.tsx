// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
// import { FileText, Users, BookOpen, Award, Plane, DollarSign } from "lucide-react";
// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";

// const services = [
//   {
//     icon: FileText,
//     title: "Admission Guidance",
//     description: "Complete assistance with university applications, essay writing, and documentation preparation."
//   },
//   {
//     icon: Users,
//     title: "Career Counseling",
//     description: "Personalized counseling to help you choose the right course and university for your career goals."
//   },
//   {
//     icon: BookOpen,
//     title: "Test Preparation",
//     description: "Comprehensive coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests."
//   },
//   {
//     icon: Award,
//     title: "Scholarship Assistance",
//     description: "Expert guidance on scholarships and financial aid opportunities to reduce your education costs."
//   },
//   {
//     icon: Plane,
//     title: "Visa Support",
//     description: "End-to-end visa processing support with document preparation and interview coaching."
//   },
//   {
//     icon: DollarSign,
//     title: "Education Loans",
//     description: "Assistance with education loan applications and connecting with financial institutions."
//   }
// ];

// const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
//         <CardHeader className="text-center">
//           <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
//             <service.icon className="h-8 w-8 text-blue-600" />
//           </div>
//           <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <CardDescription className="text-gray-600 text-center">
//             {service.description}
//           </CardDescription>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

// export const Services = () => {
//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our Services
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive support for every step of your international education journey
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <ServiceCard key={index} service={service} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { FileText, Users, BookOpen, Award, Plane, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: FileText,
    title: "Admission Guidance",
    description: "Complete assistance with university applications, essay writing, and documentation preparation."
  },
  {
    icon: Users,
    title: "Career Counseling",
    description: "Personalized counseling to help you choose the right course and university for your career goals."
  },
  {
    icon: BookOpen,
    title: "Test Preparation",
    description: "Comprehensive coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests."
  },
  {
    icon: Award,
    title: "Scholarship Assistance",
    description: "Expert guidance on scholarships and financial aid opportunities to reduce your education costs."
  },
  {
    icon: Plane,
    title: "Visa Support",
    description: "End-to-end visa processing support with document preparation and interview coaching."
  },
  {
    icon: DollarSign,
    title: "Education Loans",
    description: "Assistance with education loan applications and connecting with financial institutions."
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
            <service.icon className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 text-center">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for every step of your international education journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
