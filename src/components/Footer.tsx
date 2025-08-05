import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xl font-bold">Kshitij Green Fuels</div>
            </div>
            <p className="text-green-100 leading-relaxed">
              Leading manufacturer of premium biomass pellets, providing sustainable 
              energy solutions for modern industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-green-100">
              <li>
                <a href="#about" className="hover:text-white transition-smooth">About Us</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-smooth">Why Biomass Pellets</a>
              </li>
              <li>
                <a href="#specifications" className="hover:text-white transition-smooth">Product Features</a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-smooth">Industries We Serve</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-smooth">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-green-100">
              <p>Ready to switch to sustainable energy?</p>
              <p>Contact us for competitive pricing and reliable supply.</p>
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-block bg-white text-primary px-6 py-2 rounded-full font-medium hover:bg-green-50 transition-smooth"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light/30 mt-8 pt-8 text-center text-green-100">
          <p>&copy; 2024 Kshitij Green Fuels Pvt. Ltd. All rights reserved.</p>
          <p className="text-sm mt-2">Fueling Progress, Sustainably.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;