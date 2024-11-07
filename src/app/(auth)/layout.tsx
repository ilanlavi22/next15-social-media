import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // in layout instead of the pages to avoid fetching the current session
  const { user } = await validateRequest();

  if (user) redirect("/");

  return <>{children}</>;
}
