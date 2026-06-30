"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactDealerFormProps {
  dealerId: string;
}

export function ContactDealerForm({ dealerId }: ContactDealerFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const data = {
      dealerId,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required placeholder="Your name" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required placeholder="you@example.com" />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" placeholder="+91 98765 43210" />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell the dealer what you are looking for..."
        />
      </div>
      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[#0A2540] text-white hover:bg-[#0A2540]/90"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
      {status === "success" && (
        <p className="text-center text-sm text-emerald-600">
          Message sent successfully.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-destructive">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
}
