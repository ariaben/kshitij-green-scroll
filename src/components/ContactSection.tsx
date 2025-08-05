import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Send, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would submit to a backend
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Contact & Enquiry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to switch to sustainable biomass pellets? Get in touch with us 
            for pricing, specifications, and delivery options.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-medium">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Send Us an Enquiry
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Phone *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Company
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="transition-smooth focus:ring-2 focus:ring-primary/20"
                    placeholder="Tell us about your requirements, volume needed, delivery location, etc."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full gradient-primary hover:opacity-90 transition-smooth"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Company Information */}
          <div className="space-y-8">
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Company Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Company Name</h4>
                      <p className="text-muted-foreground">Kshitij Green Fuels Pvt. Ltd.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Location</h4>
                      <p className="text-muted-foreground">India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Phone</h4>
                      <p className="text-muted-foreground">Available upon request</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <p className="text-muted-foreground">Available upon request</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Why Choose Kshitij Green Fuels?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-success mr-3" />
                    Premium quality biomass pellets
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-success mr-3" />
                    Consistent supply and delivery
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-success mr-3" />
                    Competitive pricing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-success mr-3" />
                    Expert technical support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;