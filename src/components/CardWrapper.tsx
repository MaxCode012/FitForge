import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import React from "react";
import AuthHeader from "./auth/AuthHeader";
import { Button } from "./ui/button";
import Link from "next/link";

interface CardWrapperProps {
  label: string;
  title: string;
  backButtonHref: string;
  backButtonLabel: string;
  children: React.ReactNode;
  className: string;
}

export default function CardWrapper({
  label,
  title,
  backButtonHref,
  backButtonLabel,
  children,
  className,
}: CardWrapperProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Button variant="link" className="font-normal w-full" size="sm" asChild>
          <Link href={backButtonHref}>{backButtonLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
