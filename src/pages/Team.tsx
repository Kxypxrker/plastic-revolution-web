import SectionHeader from "@/components/ui/shared/SectionHeader";
import TeamCard from "@/components/team/TeamCard";
import AnimatedButton from "@/components/ui/shared/AnimatedButton";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Charlene Muguti",
      role: "CEO & Co-Founder",
      bio: "Charlene founded Mckingtorch Zimbabwe with a vision to transform plastic waste into sustainable products that benefit local communities.",
      image: "public/lovable-uploads/6bf92264-53e0-4d4d-abb8-302864c32df8.png"
    },
    {
      id: 2,
      name: "Makafui Kojo Awuku",
      role: "Co-Founder & Product Innovator",
      bio: "With expertise in product development, Makafui leads our innovation team and creates sustainable applications for recycled plastic.",
      image: "public/lovable-uploads/f138276f-d16b-442c-a3ed-32ac5ceb99c6.png"
    },
    {
      id: 3,
      name: "Vaida F. Munengwa",
      role: "Content & Community Engagement Manager",
      bio: "Vaida leads our community outreach initiatives and develops engaging content to promote our mission and environmental education.",
      image: "public/lovable-uploads/b35ae621-6d6d-4f73-8416-70ede5c3ccbc.png"
    },
    {
      id: 4,
      name: "Precious T. Zvimba",
      role: "Administrative Operations",
      bio: "Precious manages our day-to-day operations, ensuring efficiency and organization across all departments.",
      image: "public/lovable-uploads/JCIZimbabwe2024NatConGalaDInner-189.jpg"
    },
    {
      id: 5,
      name: "Omega M. Taisirevepi",
      role: "Administrative Assistant",
      bio: "Omega provides essential support to our administrative team, helping to coordinate projects and maintain smooth operations.",
      image: "public/lovable-uploads/ef105c16-f0c4-448c-8da9-1b5391bf0ccc.png"
    },
    {
      id: 6,
      name: "Charles Kudzi Muguti",
      role: "IT",
      bio: "Charles oversees our technological infrastructure, ensuring our systems run smoothly and developing tech solutions to support our mission.",
      image: "public/lovable-uploads/b7b49677-46e5-4451-b9c0-990dcff3f93b.png" // This seems to be missing, using another image as placeholder
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="container-padding mx-auto">
        <SectionHeader
          title="Meet Our Team"
          subtitle="Our diverse team brings together expertise in design, engineering, community development, and environmental science to tackle plastic pollution in Zimbabwe."
          centered
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 mt-12 bg-primary/5">
        <div className="container-padding mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-xl mb-6">Our Values</h2>
            <p className="body-lg text-muted-foreground">
              The core principles that guide our team's work and decision-making process:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 22a5 5 0 0 1-2-4"/>
                  <path d="M3.3 14A6.8 6.8 0 0 0 2 18"/>
                  <path d="M7 2c-1.7 1-3 2.4-3 4a1 1 0 0 0 2 0c0-.5.9-1 2-1a1 1 0 0 0 0-2"/>
                  <path d="M21 7c-1.4 0-2.5-1.1-2.5-2.5S19.6 2 21 2a1 1 0 0 0 0-2C17.9 0 16 2.2 16 4.5c0 .6.1 1.2.4 1.7A5.5 5.5 0 0 0 12 2a1 1 0 0 0 0 2c1.9 0 3.5 1.6 3.5 3.5a1 1 0 0 0 2 0c0-.5.2-.9.6-1.3.4.7 1.2 1.3 2.1 1.3a1 1 0 0 0 .8-1.6"/>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Environmental Integrity</h3>
              <p className="text-muted-foreground">
                We place the well-being of our environment at the center of every decision, seeking to maximize positive environmental impact through our work.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Community-Centered</h3>
              <p className="text-muted-foreground">
                We believe in working collaboratively with communities, respecting local knowledge and creating opportunities that benefit those most affected by plastic pollution.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Quality & Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in our products and operations, proving that environmentally friendly solutions can also be superior in quality and design.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously explore new ideas and approaches to plastic waste management, embracing creativity and technological advancement in our quest for solutions.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                We operate with openness and honesty, sharing our processes, challenges, and impacts with stakeholders and the wider community.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M16 12h-6.5a2 2 0 1 0 0 4H12"/>
                  <path d="M12 8h3.5a2 2 0 1 1 0 4H8"/>
                </svg>
              </div>
              <h3 className="heading-md mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe that addressing plastic pollution requires collective action, and we actively seek partnerships with other organizations, businesses, and government agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-20">
        <div className="container-padding mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=3270" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <h2 className="heading-lg mb-4">Join Our Team</h2>
                <p className="text-muted-foreground mb-6">
                  We're always looking for passionate individuals who share our vision for a cleaner, more sustainable Zimbabwe. Whether you're a designer, engineer, community organizer, or simply passionate about the environment, there might be a place for you on our team.
                </p>
                <div>
                  <AnimatedButton text="Contact Us" href="/contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
