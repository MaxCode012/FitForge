import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}
