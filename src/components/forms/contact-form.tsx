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
import { solutions } from "@/data/solutions";

/**
 * Accessible enquiry form. Front-end only for now — wire to a server function
 * or CRM endpoint when the backend is connected.
 */
export function ContactForm() {
  const [interest, setInterest] = useState("");
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
      setInterest("");
    }, 600);
  };

  return (
    <form onSubmit={onSubmit} className="surface-panel rounded-xl p-6 sm:p-8" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Full name</Label>
          <Input id="contact-name" name="name" autoComplete="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Work email</Label>
          <Input id="contact-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-organisation">Organisation</Label>
          <Input id="contact-organisation" name="organisation" autoComplete="organization" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-interest">Area of interest</Label>
          <Select value={interest} onValueChange={setInterest} name="interest">
            <SelectTrigger id="contact-interest" aria-label="Area of interest">
              <SelectValue placeholder="Select a solution" />
            </SelectTrigger>
            <SelectContent>
              {solutions.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.shortTitle}
                </SelectItem>
              ))}
              <SelectItem value="other">Something else</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="contact-message">How can we help?</Label>
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
