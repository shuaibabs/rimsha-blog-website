"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function NewsletterForm() {
  return (
    <form className="mt-4 flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Enter your email" className="flex-1" />
      <Button type="submit" size="icon" aria-label="Subscribe">
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  );
}
