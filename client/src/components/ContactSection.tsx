import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Save contact message to localStorage
      const contactMessage = {
        ...data,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };

      const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      existingMessages.push(contactMessage);
      localStorage.setItem('contactMessages', JSON.stringify(existingMessages));

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help you plan your perfect stay and adventure in Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium mb-2">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      {...form.register("name")}
                      placeholder="Your full name"
                      className="w-full"
                      data-testid="input-contact-name"
                    />
                    {form.formState.errors.name && (
                      <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium mb-2">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="your@email.com"
                      className="w-full"
                      data-testid="input-contact-email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="text-foreground font-medium mb-2">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    {...form.register("subject")}
                    placeholder="Message subject"
                    className="w-full"
                    data-testid="input-contact-subject"
                  />
                  {form.formState.errors.subject && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.subject.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground font-medium mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    {...form.register("message")}
                    rows={6}
                    placeholder="Your message..."
                    className="w-full"
                    data-testid="textarea-contact-message"
                  />
                  {form.formState.errors.message && (
                    <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
                  data-testid="button-contact-submit"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4" data-testid="contact-address">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                      <p className="text-muted-foreground">
                        Westlands, Nairobi<br />
                        Kenya
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4" data-testid="contact-phone">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                      <p className="text-muted-foreground">+254 11 234 4732</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4" data-testid="contact-email">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                      <p className="text-muted-foreground">movemates1@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
