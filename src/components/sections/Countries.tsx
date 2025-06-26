import { Card, CardContent } from "../ui/card";

const countries = [
  {
    name: "United States",
    universities: "500+ Universities",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
    flag: "🇺🇸"
  },
  {
    name: "United Kingdom",
    universities: "200+ Universities",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
    flag: "🇬🇧"
  },
  {
    name: "Canada",
    universities: "150+ Universities",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    flag: "🇨🇦"
  },
  {
    name: "Australia",
    universities: "120+ Universities",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80",
    flag: "🇦🇺"
  },
  {
    name: "Germany",
    universities: "100+ Universities",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    flag: "🇩🇪"
  },
  {
    name: "New Zealand",
    universities: "50+ Universities",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    flag: "🇳🇿"
  }
];

export const Countries = () => {
  return (
    <section id="countries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Study Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore top study destinations around the world with our expert guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              <div className="relative">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 text-3xl">{country.flag}</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{country.name}</h3>
                <p className="text-gray-600">{country.universities}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
