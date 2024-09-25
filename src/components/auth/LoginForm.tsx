"use client";

import { useForm } from "react-hook-form";
import CardWrapper from "../CardWrapper";
import {
  logInSchema,
  LogInValues,
  signUpSchema,
  SignUpValues,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { login } from "@/app/(auth)/login/actions";
import LoadingButton from "../LoadingButton";
import { PasswordInput } from "../PasswordInput";

export default function LoginForm() {
  const [error, setError] = useState<string>();

  const [isPending, startTransition] = useTransition();

  const form = useForm<LogInValues>({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: LogInValues) => {
    setError(undefined);
    startTransition(async () => {
      const { error } = await login(values);
      if (error) {
        setError(error);
      }
    });
  };
  return (
    <CardWrapper
      label="Log into an existing account"
      title="Log in"
      backButtonHref="/signup"
      backButtonLabel="Don't have an account? Sign up."
      className="w-[300px] xl:w-[400px]"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {error && (
            <p className="text-center text-destructive text-xs">{error}</p>
          )}
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="doomslayer" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput {...field} placeholder="********" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <LoadingButton loading={isPending} type="submit" className="w-full">
            Log in
          </LoadingButton>
        </form>
      </Form>
    </CardWrapper>
  );
}
