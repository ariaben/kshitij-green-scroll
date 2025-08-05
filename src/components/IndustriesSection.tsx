import { Building2, Hospital, Factory, Beaker } from "lucide-react";
import industrialBoiler from "@/assets/industrial-boiler.jpg";

const industries = [
  {
    icon: Building2,
    title: "Hotels",
    description: "Efficient heating solutions for hospitality industry with consistent hot water and space heating",
    features: ["Hot Water Systems", "Space Heating", "Cost Savings", "Eco-Friendly"]
  },
  {
    icon: Hospital,
    title: "Hospitals",
    description: "Reliable energy source for healthcare facilities requiring 24/7 heating and hot water",
    features: ["Continuous Operation", "Medical Grade Heating", "Emergency Backup", "Low Emissions"]
  },
  {
    icon: Factory,
    title: "Food Manufacturing",
    description: "Clean burning fuel for food processing plants with stringent hygiene requirements",
    features: ["Process Heating", "Steam Generation", "Food Safe", "Quality Control"]
  },
  {
    icon: Beaker,
    title: "Chemical Industries",
    description: "High-temperature applications for chemical processing with consistent heat output",
    features: ["High Temperature", "Consistent Heat", "Process Reliability", "Reduced Costs"]
  }
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our high-quality biomass pellets power diverse industries, 
            providing sustainable energy solutions across multiple sectors.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl shadow-soft hover-lift transition-smooth hover:shadow-medium bg-gradient-to-br from-white to-secondary/30"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-light transition-smooth">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {industry.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-success mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Image */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-medium">
            <img 
              src={industrialBoiler}
              alt="Industrial biomass pellet boiler system"
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 gradient-primary opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Industrial Grade Solutions
                </h3>
                <p className="text-lg md:text-xl opacity-90">
                  Powering industries with clean, efficient biomass energy
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-primary/20" />
          <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-success/30" />
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;