
import SectionHeader from "@/components/ui/shared/SectionHeader";
import MilestoneItem from "@/components/milestones/MilestoneItem";

interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  image?: string;
}

const Milestones = () => {
  const milestones: Milestone[] = [
    {
      id: 1,
      year: "2018",
      title: "Foundation of Mckingtorch Zimbabwe",
      description: "Mckingtorch Zimbabwe was established as a community initiative to address plastic pollution in Harare, starting with small-scale collection and awareness programs.",
      image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80&w=3270"
    },
    {
      id: 2,
      year: "2019",
      title: "First Production Facility",
      description: "We opened our first small production facility in Harare, developing initial prototype products from recycled plastic waste.",
      image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=3869"
    },
    {
      id: 3,
      year: "2019",
      title: "Community Collection Network",
      description: "Established our first formal waste collection points in five communities, providing income opportunities for local residents while sourcing materials for our products.",
    },
    {
      id: 4,
      year: "2020",
      title: "Launch of School Education Program",
      description: "Began our environmental education program in local schools, reaching over 2,000 students in the first year with hands-on workshops about plastic pollution and recycling.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=3122"
    },
    {
      id: 5,
      year: "2020",
      title: "First Major Product Line",
      description: "Launched our first major product line of outdoor furniture made from 100% recycled plastic, which sold out within three months and established our brand in the market.",
    },
    {
      id: 6,
      year: "2021",
      title: "Expansion to New Cities",
      description: "Extended our collection network and product distribution to Bulawayo and Mutare, Zimbabwe's second and third-largest cities.",
      image: "https://images.unsplash.com/photo-1627646791580-1ffed48d0997?auto=format&fit=crop&q=80&w=3087"
    },
    {
      id: 7,
      year: "2022",
      title: "Government Partnership",
      description: "Signed a formal partnership with the Ministry of Environment to supply recycled plastic building materials for public infrastructure projects.",
    },
    {
      id: 8,
      year: "2022",
      title: "10 Tonnes Milestone",
      description: "Celebrated the recycling of our 10th tonne of plastic waste, marking a significant achievement in our environmental impact goals.",
      image: "https://images.unsplash.com/photo-1542144612-1b3641ec3459?auto=format&fit=crop&q=80&w=3271"
    },
    {
      id: 9,
      year: "2023",
      title: "Innovation Award",
      description: "Received the National Environmental Innovation Award for our work in transforming plastic waste into valuable products and creating sustainable livelihoods.",
    },
    {
      id: 10,
      year: "2023",
      title: "50 Tonnes Milestone",
      description: "Reached the milestone of recycling 50 tonnes of plastic waste, representing a significant acceleration in our collection and processing capacity.",
      image: "https://images.unsplash.com/photo-1604187350596-3ad0e44ef7ca?auto=format&fit=crop&q=80&w=3270"
    },
    {
      id: 11,
      year: "2024",
      title: "Launch of Training Center",
      description: "Opened our first dedicated training center to equip community members with skills in waste collection, sorting, and basic product manufacturing.",
    },
    {
      id: 12,
      year: "2024",
      title: "International Recognition",
      description: "Featured in UN Environment Programme's report on circular economy innovations in Africa, bringing international attention to our work.",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&q=80&w=3270"
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="container-padding mx-auto">
        <SectionHeader
          title="Our Journey"
          subtitle="Since our founding in 2018, Mckingtorch Zimbabwe has grown from a small community initiative to a recognized leader in plastic waste management. Here are some of our key milestones."
          centered
        />

        <div className="mt-16">
          {milestones.map((milestone, index) => (
            <MilestoneItem 
              key={milestone.id}
              milestone={milestone}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 mt-16 bg-primary/5">
        <div className="container-padding mx-auto">
          <SectionHeader
            title="Looking Forward"
            subtitle="As we continue our journey, these are the ambitious goals we're working toward in the coming years:"
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="glass-card p-8 rounded-xl">
              <div className="mb-6">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">01</span>
                </div>
              </div>
              <h3 className="heading-md mb-3">100 Tonnes by 2025</h3>
              <p className="text-muted-foreground">
                We aim to double our impact by recycling 100 tonnes of plastic waste annually by the end of 2025, significantly increasing our environmental contribution.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <div className="mb-6">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">02</span>
                </div>
              </div>
              <h3 className="heading-md mb-3">National Expansion</h3>
              <p className="text-muted-foreground">
                Establish collection networks and processing facilities in all major cities across Zimbabwe, creating a truly nationwide impact on plastic pollution.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <div className="mb-6">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">03</span>
                </div>
              </div>
              <h3 className="heading-md mb-3">Advanced Processing Facility</h3>
              <p className="text-muted-foreground">
                Build a state-of-the-art plastic processing facility that can handle more complex plastic waste streams and create higher-value products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Milestones;
