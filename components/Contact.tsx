"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

function useSubmitContact() {
  return useMutation({
    mutationFn: async ({ data }: { data: { name: string; email: string; service: string; message: string } }) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Failed to submit contact form");
      }
      return res.json();
    },
  });
}

const serviceOptions = [
  "Personal Tax Returns",
  "Corporate Tax",
  "Bookkeeping & Financial Statements",
  "Payroll",
  "Incorporated Medical Professionals",
  "Accounting & Financial Advisory",
  "General Inquiry",
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const { toast } = useToast();
  const mutation = useSubmitContact();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "General Inquiry",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(
      { data: values },
      {
        onSuccess: () => {
          toast({
            title: "Message received",
            description: "We'll review your message and follow up within one business day.",
            variant: "default",
          });
          form.reset();
        },
        onError: () => {
          toast({
            title: "Something went wrong",
            description: "We couldn't send your message. Please try again or call us directly.",
            variant: "destructive",
          });
        },
      }
    );
  }

  const isSubmitting = mutation.isPending;

  return (
    <section id="contact" className="py-24 bg-zinc-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-5">Get in touch</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Use the form below to send us a message. Briefly describe what you
              need help with and we'll get back to you within one business day.
              There's no obligation.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl">

          {/* Contact Info */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-sm border border-border h-full">
              <h4 className="font-serif text-xl font-bold text-primary mb-8">Our Office</h4>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/5 text-primary rounded-sm shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Address</h5>
                    <a
                      href="https://maps.google.com/?q=4155+Fairview+St,+Unit+21,+Burlington,+ON+L7N+2G1,+Canada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="not-italic text-muted-foreground hover:text-secondary transition-colors leading-relaxed block"
                    >
                      4155 Fairview St, Unit 21<br />
                      Burlington, ON L7N 2G1
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/5 text-primary rounded-sm shrink-0 mt-0.5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Phone</h5>
                    <a
                      href="tel:+12892082087"
                      className="text-muted-foreground hover:text-secondary transition-colors font-medium"
                    >
                      (289) 208-2087
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/5 text-primary rounded-sm shrink-0 mt-0.5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-2">Hours</h5>
                    <p className="text-muted-foreground leading-relaxed">
                      Monday – Friday<br />
                      10:00 AM – 3:00 PM<br />
                      <span className="text-sm">Evenings and weekends available by appointment.</span>
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We reply to all messages within one business day. For urgent
                    matters, please note that in your message.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-border/50">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="bg-background border-border focus-visible:ring-secondary rounded-sm h-12"
                              data-testid="input-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="you@example.com"
                              type="email"
                              className="bg-background border-border focus-visible:ring-secondary rounded-sm h-12"
                              data-testid="input-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Service</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background border-border focus-visible:ring-secondary rounded-sm h-12">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {serviceOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">How can we help?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe what you're looking for help with — e.g. personal tax return, corporate bookkeeping, payroll setup, etc."
                            className="bg-background border-border focus-visible:ring-secondary rounded-sm min-h-[160px] resize-y"
                            data-testid="textarea-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="button-submit-contact"
                    className="w-full bg-primary hover:bg-secondary text-white font-bold h-14 text-base rounded-sm transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

        </div>

        {/* Google Maps Embed */}
        <motion.div
          className="max-w-6xl mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-sm overflow-hidden border border-border shadow-sm">
            <iframe
              title="Accounting Masters Group Inc. — Office Location"
              src="https://maps.google.com/maps?q=4155+Fairview+St,+Burlington,+ON+L7N+2G1,+Canada&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="iframe-office-map"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2">
            <MapPin size={14} className="text-secondary shrink-0" />
            4155 Fairview St, Unit 21, Burlington, ON L7N 2G1 —
            <a
              href="https://maps.google.com/?q=4155+Fairview+St,+Burlington,+ON+L7N+2G1,+Canada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline font-medium"
              data-testid="link-get-directions"
            >
              Get directions
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
