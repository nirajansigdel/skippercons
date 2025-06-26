import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    university: "Stanford University, USA",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&q=80",
    text: "Skipper made my dream of studying at Stanford a reality. Their guidance throughout the application process was invaluable."
  },
  {
    name: "Rajesh Kumar",
    university: "University of Toronto, Canada",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=150&q=80",
    text: "The visa process seemed overwhelming, but Skipper's team made it smooth and stress-free. Highly recommended!"
  },
  {
    name: "Anita Patel",
    university: "Oxford University, UK",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&q=80",
    text: "Professional, knowledgeable, and supportive. Skipper helped me secure admission to my dream university with a scholarship."
  },
  {
    name: "Nirajan l",
    university: "Oxford University, UK",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&q=80",
    text: "Professional, knowledgeable, and supportive. Skipper helped me secure admission to my dream university with a scholarship."
  },
  {
    name: "Adevon",
    university: "Oxford University, UK",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&q=80",
    text: "Professional, knowledgeable, and supportive. Skipper helped me secure admission to my dream university with a scholarship."
  }
];

export const Testimonials = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 10000); // 30 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who are now studying at their dream universities
          </p>
        </div>

        <div className="testimonials-slider">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <Card className="bg-white border-0 shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.university}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

