import productionMachinery from "@/assets/production-machinery.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kshitij Green Fuels is committed to revolutionizing industrial fuel by providing 
              clean-burning, efficient biomass pellets. Our mission is to offer a sustainable 
              alternative to traditional fuels without compromising on power or performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our biomass pellets are manufactured from 100% natural agricultural and forestry residues, 
              including sawdust, wood chips, and agricultural waste. Each pellet is compressed under 
              high pressure without any chemical binders, ensuring a pure, consistent fuel source.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With state-of-the-art manufacturing processes and stringent quality controls, 
              we ensure every pellet meets the highest industry standards. Our pellets are uniform 
              in size (6-10mm), have minimal dust content, and provide consistent heat output with 
              significantly lower emissions compared to fossil fuels.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4500+</div>
                <div className="text-sm text-muted-foreground">GCV (kcal/kg)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">&lt;8%</div>
                <div className="text-sm text-muted-foreground">Moisture Content</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="circle-accent">
              <img 
                src={productionMachinery}
                alt="Pellet production machinery"
                className="rounded-2xl shadow-medium hover-lift w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/20" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-success/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;