import { Metadata } from "next";
import signupImage from "@/assets/signup-image.jpg";
import SignUpForm from "./SignUpForm";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <main className="flex h-screen items-center justify-center p-10">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-bold leading-none tracking-tight">
              Sign up to RealMedia
            </h1>
            <p className="text-sm tracking-tight text-muted-foreground">
              A place where even <span className="italic">you</span> can find a
              friend.
            </p>
          </div>
          <div className="space-y-5">
            <SignUpForm />
            <Link
              href="/login"
              className="block text-center text-sm hover:underline"
            >
              Already have an account? Log in
            </Link>
          </div>
        </div>
        <Image
          src={signupImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
