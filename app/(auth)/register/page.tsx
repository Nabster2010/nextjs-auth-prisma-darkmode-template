import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { SignUpForm } from "@/components/signup-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function RegisterPage() {
  return (
    <div className="container relative flex flex-col items-center justify-center w-screen h-screen">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-8 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="w-4 h-4 mr-2" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="w-6 h-6 mx-auto" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">Signup</p>
        </div>
        <SignUpForm />
        <p className="px-8 text-sm text-center text-muted-foreground">
          <Link
            href="/login"
            className="underline hover:text-brand underline-offset-4"
          >
            have an account? Login
          </Link>
        </p>
      </div>
    </div>
  );
}
