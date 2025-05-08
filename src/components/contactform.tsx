"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "emailjs-com";

import {
  Card,
  CardContent,
} from "@/components/ui";
import {
  Input,
  Textarea,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

// ✅ Validation schema
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  contactNumber: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    const formData = {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      contactNumber: data.contactNumber,
      enquiry: data.message,
    };

    try {
      const response = await emailjs.send(
        "service_gwpucnn",       // Your service ID
        "template_v63kzyk",      // Your template ID
        formData,                // The actual message
        "dRiThizR9J649hAZh"      // Your public key
      );

      console.log("EmailJS Success:", response);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message.",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center font-serif">
          <span className="border-b-4 border-[#d4a7ff] pb-2">Feel Free to Contact Me :)</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          <Card className="bg-[#1e2130]/60 border-[#f5f0e0]/10 backdrop-blur-sm">
            <CardContent className="p-4 md:p-6 lg:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-serif">Send Me a Message</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="John"
                              className="bg-[#2a2d3d] border-[#f5f0e0]/20 focus:border-[#d4a7ff]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Doe"
                              className="bg-[#2a2d3d] border-[#f5f0e0]/20 focus:border-[#d4a7ff]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="you@example.com"
                            className="bg-[#2a2d3d] border-[#f5f0e0]/20 focus:border-[#d4a7ff]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Number (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="+60123456789"
                            className="bg-[#2a2d3d] border-[#f5f0e0]/20 focus:border-[#d4a7ff]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Your message here..."
                            rows={5}
                            className="bg-[#2a2d3d] border-[#f5f0e0]/20 focus:border-[#d4a7ff]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#7a9bff] to-[#d4a7ff] text-[#1e2130] hover:opacity-90"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
