import Link from "next/link";
import SearchField from "./SearchField";
import UserButton from "./UserButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tighter text-primary"
        >
          Real
          <span className="text-secondary-foreground/80">Media</span>
        </Link>

        <SearchField />

        <UserButton className="sm:ms-auto" />
      </div>
    </header>
  );
}
