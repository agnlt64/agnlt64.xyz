import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <Badge variant="outline" className="text-sm px-3 py-1">
      {skill}
    </Badge>
  );
}
