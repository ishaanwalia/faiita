"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegisterPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      businessName: formData.get("businessName") as string,
      phone: formData.get("phone") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
    };

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-md">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-[#0A2540]">Join FAIITA</CardTitle>
          </CardHeader>
          <CardContent>
            {status === "success" ? (
              <div className="text-center">
                <p className="text-emerald-600">Registration submitted for review.</p>
                <Link href="/login" className="mt-4 inline-block text-[#0A2540] hover:underline">
                  Go to login
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" required />
                </div>
                <div>
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input id="businessName" name="businessName" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" required />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" name="state" required />
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#FF9933] text-white hover:bg-[#FF9933]/90"
                >
                  {status === "submitting" ? "Submitting..." : "Register"}
                </Button>
                {status === "error" && (
                  <p className="text-center text-sm text-destructive">
                    Registration failed. Please try again.
                  </p>
                )}
                <p className="text-center text-sm text-muted-foreground">
                  Already a member?{" "}
                  <Link href="/login" className="text-[#0A2540] hover:underline">
                    Login
                  </Link>
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
