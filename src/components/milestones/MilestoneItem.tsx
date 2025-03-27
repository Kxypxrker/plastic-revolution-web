
interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  image?: string;
}

interface MilestoneItemProps {
  milestone: Milestone;
  index: number;
}

const MilestoneItem = ({ milestone, index }: MilestoneItemProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`md:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} mb-16 last:mb-0`}>
      {/* Year Column */}
      <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
        <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-display font-bold text-primary">{milestone.year}</span>
        </div>
      </div>
      
      {/* Content Column */}
      <div className="md:w-3/4 md:px-8">
        <div className="glass-card p-6 md:p-8 rounded-xl">
          {milestone.image && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src={milestone.image} 
                alt={milestone.title} 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          )}
          <h3 className="heading-md mb-3">{milestone.title}</h3>
          <p className="text-muted-foreground">{milestone.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MilestoneItem;
