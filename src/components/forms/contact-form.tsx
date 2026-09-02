import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const projectTypeOptions = [
  "Immersive Experience",
  "Immersive Content",
  "CGI / 3D",
  "Virtual Production",
  "Immersive Dome",
  "Immersive Live Streaming",
  "Experience Design & Consulting",
  "Other",
];

/**
 * Accessible enquiry form. Front-end only for now — wire to a server function
 * or CRM endpoint when the backend is connected.
 */
export function ContactForm() {
  const [projectType, setProjectType] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    // TODO: replace with a real submission endpoint.
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you — your enquiry has been captured.", {
        description: "A member of the AICO team will respond shortly.",
      });
      event.currentTarget?.reset?.();
      setProjectType("");
    }, 600);
  };

  return (
    <form onSubmit={onSubmit} className="surface-panel rounded-xl p-6 sm:p-8" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input id="contact-name" name="name" autoComplete="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-company">Company</Label>
          <Input id="contact-company" name="company" autoComplete="organization" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input id="contact-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone</Label>
          <Input id="contact-phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-industry">Industry</Label>
          <Input id="contact-industry" name="industry" autoComplete="off" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-project-type">Project Type</Label>
          <Select value={projectType} onValueChange={setProjectType} name="projectType" required>
            <SelectTrigger id="contact-project-type" aria-label="Project Type">
              <SelectValue placeholder="Select a project type" />
            </SelectTrigger>
            <SelectContent>
              {projectTypeOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="contact-message">Tell Us About Your Idea</Label>
        <Textarea id="contact-message" name="message" rows={5} required />
      </div>

      <Button type="submit" variant="hero" size="lg" className="mt-7 w-full sm:w-auto" disabled={submitting}>
        {submitting ? "Sending…" : "Send enquiry"}
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">
        Your details are used only to respond to this enquiry.
      </p>
    </form>
  );
}
