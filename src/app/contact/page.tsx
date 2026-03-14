import { ContactForm } from "./contact-form";
import { Mail, MapPin } from "lucide-react";

export const metadata = {
  title: 'Contact | Rimsha\'s Tech Blogs',
  description: 'Get in touch with Rimsha. Ask questions, provide feedback, or collaborate.',
};

export default function ContactPage() {
  return (
    <div className="container max-w-4xl mx-auto py-12 md:py-20 px-4">
      <section className="w-full pt-12 pb-8 md:pt-20 md:pb-16 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          Have a question, a project idea, or just want to talk about tech? I'd love to hear from you.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-2xl font-headline font-semibold text-primary">Contact Information</h2>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-md text-primary">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-muted-foreground">For any inquiries, feel free to email me directly.</p>
              <a href="mailto:cu240251326@coeruniversity.ac.in" className="text-accent hover:underline mt-1 block">
                cu240251326@coeruniversity.ac.in
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-md text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-muted-foreground">COER University, Roorkee, Uttarakhand, India</p>
            </div>
          </div>
        </div>
        
        <div>
           <h2 className="text-2xl font-headline font-semibold text-primary mb-8">Send a Message</h2>
           <ContactForm />
        </div>
      </div>
    </div>
  );
}
