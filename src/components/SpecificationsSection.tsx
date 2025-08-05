import { Button } from "@/components/ui/button";
import { Download, Ruler, Flame, Droplets, Shield, Package } from "lucide-react";

const specifications = [
  {
    icon: Ruler,
    label: "Size",
    value: "6–10mm",
    description: "Optimal pellet diameter for efficient combustion"
  },
  {
    icon: Flame,
    label: "GCV",
    value: "4500 kcal/kg",
    description: "High gross calorific value for maximum energy output"
  },
  {
    icon: Droplets,
    label: "Moisture",
    value: "<8%",
    description: "Low moisture content ensures clean burning"
  },
  {
    icon: Shield,
    label: "Ash Content",
    value: "<5%",
    description: "Minimal ash residue for reduced maintenance"
  },
  {
    icon: Package,
    label: "Bulk Density",
    value: "On Request",
    description: "Customized density specifications available"
  },
  {
    icon: Package,
    label: "Packaging",
    value: "Available",
    description: "Flexible packaging options to meet your needs"
  }
];

const SpecificationsSection = () => {
  const handleDownloadSpec = () => {
    // In a real application, this would trigger a PDF download
    alert("Specification sheet download would be implemented here");
  };

  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Product Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our biomass pellets are engineered to meet the highest industry standards 
            for performance, efficiency, and environmental responsibility.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {specifications.map((spec, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-soft hover-lift transition-smooth group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                  <spec.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                  <div className="text-2xl font-bold text-primary mb-2">{spec.value}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {spec.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download CTA */}
        <div className="text-center">
          <div className="bg-white p-8 rounded-2xl shadow-soft max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Detailed Specifications
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the complete technical specification sheet with all product details
            </p>
            <Button 
              onClick={handleDownloadSpec}
              className="gradient-primary hover:opacity-90 transition-smooth"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Spec Sheet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecificationsSection;