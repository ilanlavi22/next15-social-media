import { Metadata } from "next";
import loginImage from "@/assets/login-image-alt.jpg";
import LoginForm from "./LoginForm";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main className="flex h-screen items-center justify-center p-10">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-bold leading-none tracking-tight">
              Login to RealMedia
            </h1>
          </div>
          <div className="space-y-5">
            <LoginForm />
            <Link
              href="/signup"
              className="block text-center text-sm hover:underline"
            >
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
        <Image
          src={loginImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
