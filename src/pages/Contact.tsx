
import { useState } from "react";
import SectionHeader from "@/components/ui/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import AnimatedButton from "@/components/ui/shared/AnimatedButton";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible!",
        duration: 5000,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const handleWhatsAppContact = () => {
    const whatsappUrl = `https://wa.me/263771234567`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-32 pb-20">
      <section className="container-padding mx-auto">
        <SectionHeader
          title="Contact Us"
          subtitle="Have questions about our products or mission? Want to partner with us or place an order? We'd love to hear from you!"
          centered
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="glass-card p-8 md:p-10 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Product Inquiry"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4 ml-1" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="heading-md mb-6">Get in Touch</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Our Location</p>
                    <p className="text-muted-foreground">123 Green Street, Harare, Zimbabwe</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+263 77 123 4567</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@mckingtorch.co.zw</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <h3 className="heading-md mb-4">Contact via WhatsApp</h3>
              <p className="text-muted-foreground mb-6">
                Need a quicker response? Message us directly on WhatsApp for immediate assistance with your inquiries.
              </p>
              <Button
                onClick={handleWhatsAppContact}
                className="w-full flex items-center justify-center gap-2 rounded-full"
                variant="outline"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                Chat on WhatsApp
              </Button>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <h3 className="heading-md mb-4">Visit Our Showroom</h3>
              <p className="text-muted-foreground mb-2">
                Want to see our products in person? Visit our showroom in Harare:
              </p>
              <p className="mb-6">
                <strong>Hours:</strong> Monday - Friday: 9am - 5pm<br />
                Saturday: 10am - 2pm
              </p>
              <AnimatedButton
                text="Get Directions"
                externalLink
                href="https://maps.google.com"
                variant="subtle"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="container-padding mx-auto mt-16">
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="h-[400px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711153445!2d31.022734957716793!3d-17.82508103085671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706b17161%3A0xa3c3e6c9dadcb815!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1686764791475!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mckingtorch Zimbabwe Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
