"use client";

import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

// Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

type FormState = {
  errors: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
};

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<FormState>({ errors: null });
  const { toast } = useToast();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormState({ errors: null });

    if (!formRef.current) {
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(formRef.current);
    const validatedFields = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!validatedFields.success) {
      setFormState({
        errors: validatedFields.error.flatten().fieldErrors,
      });
      toast({
        title: "Error",
        description: "Please check your input and try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === 'YOUR_SERVICE_ID') {
      toast({
        title: "Configuration Error",
        description: "EmailJS is not configured. Please contact the site administrator.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      toast({
        title: "Success!",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Could not send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your Name" required />
        {formState.errors?.name && <p className="text-sm text-destructive">{formState.errors.name.join(', ')}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
         {formState.errors?.email && <p className="text-sm text-destructive">{formState.errors.email.join(', ')}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Your message..." required minLength={10} className="min-h-[120px]" />
         {formState.errors?.message && <p className="text-sm text-destructive">{formState.errors.message.join(', ')}</p>}
      </div>
       <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        Send Message
      </Button>
    </form>
  );
}
