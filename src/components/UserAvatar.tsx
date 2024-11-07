import avatarPlaceholder from "@/assets/avatar-placeholder.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface UserAvatarProps {
  className?: string;
  avatarUrl: string | null | undefined;
  size?: number;
}

export default function UserAvatar({
  className,
  avatarUrl,
  size,
}: UserAvatarProps) {
  return (
    <Image
      src={avatarUrl || avatarPlaceholder}
      alt="User avatar"
      width={size ?? 48}
      height={size ?? 48}
      className={cn(
        "aspect-square h-fit flex-none rounded-full bg-secondary object-cover",
        className,
      )}
    />
  );
}
