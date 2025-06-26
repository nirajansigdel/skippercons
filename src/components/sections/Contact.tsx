import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState, FormEvent } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleBooking = () => {
    // Implement booking logic here
    console.log("Booking consultation...");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your international education journey? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Enter your full name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        placeholder="Enter your phone number" 
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Preferred Country</Label>
                      <Input 
                        id="country" 
                        placeholder="Where do you want to study?" 
                        value={formData.country}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your study abroad goals..." 
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-blue-600">+91 98765 43210</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:info@skipper.com" className="text-gray-600 hover:text-blue-600">info@skipper.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">Office</div>
                    <div className="text-gray-600">123 Education Hub, New Delhi, India</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-gray-600">Mon-Sat: 9AM-6PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-blue-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
                <p className="mb-4">Book a free 30-minute consultation with our experts</p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white text-black hover:bg-neutral-100"
                  onClick={handleBooking}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};