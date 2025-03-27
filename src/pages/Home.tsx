
import { useEffect, useRef } from "react";
import AnimatedButton from "@/components/ui/shared/AnimatedButton";
import SectionHeader from "@/components/ui/shared/SectionHeader";

const Home = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const featuresSection = featuresRef.current;
    if (featuresSection) {
      const features = featuresSection.querySelectorAll(".feature-item");
      features.forEach((feature) => {
        observer.observe(feature);
      });
    }

    return () => {
      if (featuresSection) {
        const features = featuresSection.querySelectorAll(".feature-item");
        features.forEach((feature) => {
          observer.unobserve(feature);
        });
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=3270"
            alt="Environmental sustainability"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>
        
        <div className="container-padding mx-auto relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <h5 className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-6 animate-fade-in">
              Environmental Innovation
            </h5>
            <h1 className="hero-text text-white mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Transforming Plastic Waste into Innovative Products
            </h1>
            <p className="body-lg text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Mckingtorch Zimbabwe is committed to combating plastic pollution through
              innovative recycling solutions that protect our environment and create
              sustainable livelihoods.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <AnimatedButton text="Learn More" href="/about" size="lg" />
              <AnimatedButton 
                text="View Our Products" 
                href="/products" 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-white text-white hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 md:py-32 bg-background">
        <div className="container-padding mx-auto">
          <SectionHeader
            title="Our Focus Areas"
            subtitle="We're tackling Zimbabwe's plastic waste problem through innovative solutions that create sustainable products and economic opportunities."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            <div className="feature-item opacity-0">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path d="M5 12h14"/>
                  <path d="M12 5l7 7-7 7"/>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Plastic Waste Collection</h3>
              <p className="text-muted-foreground">
                We've established collection networks throughout Zimbabwe to gather plastic waste that would otherwise end up in landfills or waterways.
              </p>
            </div>

            <div className="feature-item opacity-0">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Community Engagement</h3>
              <p className="text-muted-foreground">
                We work closely with local communities, providing education on waste management and creating income opportunities through our collection programs.
              </p>
            </div>

            <div className="feature-item opacity-0">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.29 7 12 12 20.71 7"/>
                  <line x1="12" y1="22" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Innovative Design</h3>
              <p className="text-muted-foreground">
                Our team of designers transforms plastic waste into beautiful, functional products that combine style with environmental consciousness.
              </p>
            </div>

            <div className="feature-item opacity-0">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3L1 9l11 6 11-6-11-6"/>
                  <path d="M1 9v6l11 6 11-6V9"/>
                  <path d="M12 15v6"/>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Education & Advocacy</h3>
              <p className="text-muted-foreground">
                We conduct workshops in schools and communities to raise awareness about plastic pollution and inspire the next generation of environmental stewards.
              </p>
            </div>

            <div className="feature-item opacity-0">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Quality Standards</h3>
              <p className="text-muted-foreground">
                All our products meet rigorous quality standards, ensuring durability and safety while maximizing environmental benefits through waste reduction.
              </p>
            </div>

            <div className="feature-item opacity-0">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Environment Protection</h3>
              <p className="text-muted-foreground">
                Each product we create represents plastic waste diverted from landfills and waterways, directly contributing to a cleaner environment in Zimbabwe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container-padding mx-auto">
          <div className="glass-card rounded-2xl p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-xl mb-6">Ready to Make a Difference?</h2>
              <p className="body-lg text-muted-foreground mb-8">
                Join us in transforming plastic waste into beautiful, functional products. Whether you're interested in our products or want to contribute to our mission, we'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <AnimatedButton text="View Products" href="/products" size="lg" />
                <AnimatedButton 
                  text="Contact Us" 
                  href="/contact" 
                  variant="outline" 
                  size="lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
