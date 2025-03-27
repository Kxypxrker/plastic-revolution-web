
import SectionHeader from "@/components/ui/shared/SectionHeader";
import AnimatedButton from "@/components/ui/shared/AnimatedButton";

const About = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container-padding mx-auto mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h5 className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full mb-6 animate-fade-in">
            Our Mission
          </h5>
          <h1 className="heading-xl mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Transforming Plastic Waste into Opportunity
          </h1>
          <p className="body-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Mckingtorch Zimbabwe is dedicated to creating a sustainable future through innovative plastic waste management solutions that benefit both the environment and communities.
          </p>
        </div>
      </section>

      {/* About Story Section */}
      <section className="container-padding mx-auto py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <SectionHeader 
              title="Our Story" 
              subtitle="Mckingtorch Zimbabwe was founded in 2018 with a clear vision: to address the growing plastic waste problem in Zimbabwe while creating sustainable livelihoods."
            />

            <div className="space-y-4 text-muted-foreground">
              <p>
                What began as a small community initiative has grown into a pioneering organization that collects, processes, and transforms plastic waste into valuable products, from home decor to construction materials.
              </p>
              <p>
                Through partnerships with local communities, businesses, and government agencies, we've established a comprehensive waste management ecosystem that creates value at every stage—from collection to finished products.
              </p>
              <p>
                Our approach not only helps clean up the environment but also creates economic opportunities for marginalized communities, particularly women and youth, who are integral to our collection and production processes.
              </p>
            </div>

            <div className="mt-8">
              <AnimatedButton text="Meet Our Team" href="/team" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&q=80&w=3270"
                alt="Team members working on plastic recycling" 
                className="rounded-xl w-full h-auto shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary/10 rounded-xl p-6 w-48 hidden md:block">
                <div className="text-4xl font-bold text-primary">5+</div>
                <div className="text-sm text-foreground/80">Years of environmental impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-secondary/30 py-20">
        <div className="container-padding mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-10 rounded-xl">
              <div className="mb-6">
                <svg className="h-12 w-12 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="16"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                </svg>
              </div>
              <h3 className="heading-lg mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A Zimbabwe where plastic waste is transformed into value, creating cleaner communities and sustainable livelihoods while protecting the environment for future generations.
              </p>
            </div>
            <div className="glass-card p-10 rounded-xl">
              <div className="mb-6">
                <svg className="h-12 w-12 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="heading-lg mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To reduce plastic pollution in Zimbabwe through innovative recycling solutions that transform waste into sustainable products, while educating communities and creating economic opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="py-20">
        <div className="container-padding mx-auto">
          <SectionHeader
            title="Key Areas of Work"
            subtitle="Our comprehensive approach to plastic waste management encompasses several interconnected areas of focus."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="heading-md mb-4">Waste Collection & Sorting</h3>
              <p className="text-muted-foreground">
                We've established a network of collection points throughout Zimbabwe and trained local community members in waste sorting techniques to ensure quality materials for processing.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h3 className="heading-md mb-4">Product Design & Innovation</h3>
              <p className="text-muted-foreground">
                Our team of skilled designers and artisans continually develop new products and production techniques that maximize both environmental impact and market appeal.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h3 className="heading-md mb-4">Community Development</h3>
              <p className="text-muted-foreground">
                We invest in skills training, provide fair compensation for waste collection, and create employment opportunities along our entire value chain.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h3 className="heading-md mb-4">Environmental Education</h3>
              <p className="text-muted-foreground">
                Through school programs, community workshops, and public campaigns, we raise awareness about plastic pollution and inspire action.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h3 className="heading-md mb-4">Circular Economy Advocacy</h3>
              <p className="text-muted-foreground">
                We work with stakeholders at all levels to promote policies and practices that support a circular economy approach to waste management.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h3 className="heading-md mb-4">Research & Development</h3>
              <p className="text-muted-foreground">
                We continuously research new recycling methods and product applications to maximize the value we can create from different types of plastic waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-primary/5 py-20">
        <div className="container-padding mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-xl mb-6">Our Impact</h2>
            <p className="body-lg text-muted-foreground">
              Every product we create represents plastic waste diverted from landfills and waterways. Here's the impact we've made so far:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <h3 className="heading-sm mb-3">Tonnes of Plastic Recycled</h3>
              <p className="text-muted-foreground">
                Plastic waste diverted from landfills and waterways since 2018.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <h3 className="heading-sm mb-3">Community Members Employed</h3>
              <p className="text-muted-foreground">
                Direct and indirect jobs created through our operations.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <h3 className="heading-sm mb-3">Products Developed</h3>
              <p className="text-muted-foreground">
                Innovative items created from recycled plastic waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-padding mx-auto">
          <div className="glass-card rounded-2xl p-10 md:p-16 bg-gradient-to-br from-primary/10 to-transparent">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-xl mb-6">Join Our Mission</h2>
              <p className="body-lg text-muted-foreground mb-8">
                Whether you're interested in our products, partnership opportunities, or volunteer work, we welcome your support in creating a cleaner, more sustainable Zimbabwe.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <AnimatedButton text="View Our Products" href="/products" size="lg" />
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
    </div>
  );
};

export default About;
