"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function SearchField() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const query = (form.q as HTMLInputElement).value.trim();
    if (!query) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <form onSubmit={handleSubmit} method="GET" action="/search">
      <div className="relative">
        <Input type="search" name="q" placeholder="Search" className="pe-10" />
        <SearchIcon
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 transform text-muted-foreground"
        />
      </div>
    </form>
  );
}
