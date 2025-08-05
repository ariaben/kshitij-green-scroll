import { Leaf, DollarSign, Recycle, Flame, Droplets, Shield } from "lucide-react";
import biomassPellets from "@/assets/biomass-pellets.jpg";

const benefits = [
  {
    icon: Leaf,
    title: "Renewable & Sustainable",
    description: "Made from renewable biomass sources, reducing carbon footprint"
  },
  {
    icon: DollarSign,
    title: "Cost-Effective for Industries",
    description: "Lower fuel costs compared to traditional fossil fuels"
  },
  {
    icon: Recycle,
    title: "Low Emissions & Environment Friendly",
    description: "Clean burning with minimal harmful emissions"
  },
  {
    icon: Flame,
    title: "High Calorific Value (4500 GCV)",
    description: "Exceptional energy output for industrial applications"
  },
  {
    icon: Droplets,
    title: "Moisture Content: <8%",
    description: "Optimal moisture levels for efficient combustion"
  },
  {
    icon: Shield,
    title: "Ash Content: <5%",
    description: "Minimal ash residue for cleaner operation"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Biomass Pellets?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl shadow-soft hover-lift transition-smooth hover:shadow-medium"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="circle-accent mb-4">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-primary-light transition-smooth">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Image */}
        <div className="relative max-w-4xl mx-auto">
          <img 
            src={biomassPellets}
            alt="High-quality biomass pellets"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-medium"
          />
          <div className="absolute inset-0 gradient-primary opacity-20 rounded-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">Premium Quality</div>
              <div className="text-lg">Industrial Grade Biomass Pellets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;