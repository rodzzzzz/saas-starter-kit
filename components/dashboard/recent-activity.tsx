import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserIcon } from "lucide-react";

const activities = [
  {
    id: 1,
    user: "John Doe",
    action: "Created a new project",
    time: "2 hours ago",
    avatar: "/john-doe.png",
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "Updated billing information",
    time: "4 hours ago",
    avatar: "/jane-smith.png",
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "Invited team member",
    time: "1 day ago",
    avatar: "/mike-johnson.png",
  },
  {
    id: 4,
    user: "Sarah Williams",
    action: "Exported data report",
    time: "2 days ago",
    avatar: "/sarah-williams.png",
  },
];

export function RecentActivity() {
  return (
    <div className="space-y-6">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.avatar} alt={activity.user} />
            <AvatarFallback>
              <UserIcon className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.user}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
