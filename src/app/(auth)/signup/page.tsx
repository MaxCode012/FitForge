import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function SignUpPage() {
  return (
    <main>
      <SignUpForm />
    </main>
  );
}
