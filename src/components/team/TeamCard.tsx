
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  // Get initials for the avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="glass-card rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-md">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="heading-sm">{member.name}</h3>
        <p className="text-primary mt-1 font-medium">{member.role}</p>
        {member.bio && (
          <p className="mt-3 text-muted-foreground">{member.bio}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamCard;
