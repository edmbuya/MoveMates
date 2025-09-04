import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="outline" className="mb-4" data-testid="button-back-home">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Homepage
              </Button>
            </Link>
          </div>

          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8"><strong>Last updated: December 2024</strong></p>
            
            <div className="text-foreground space-y-6">
              <p>This website <strong>Move Mates</strong> ("Website") is made available to you by <strong>Move Mates</strong>, hereinafter referred to as <strong>"Move Mates"</strong>, "we" or "us". We comply with data protection legislation such as the EU General Data Protection Regulation which regulates the processing of personal data relating to you and grants you various rights in respect of your personal data.</p>
              
              <p>The aim of this Privacy Policy is to inform you about how we will use your personal data you provide to us through this Website, in connection with services provided by <strong>Move Mates</strong>, as well as personal data provided and/or collected by us through other channels. We also inform you about your rights under applicable data protection law with respect to the handling of your Personal Data by us. Before providing us with Personal Data we recommend that you read this Privacy Policy which also forms part of our Terms and Conditions that govern our services.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. What is Personal Data?</h3>
              <p>For the purposes of this Privacy Policy, "Personal Data" means any information provided by you when interacting with us, for example through our Website or when calling us, or data collected about you through your use of our Website, allowing you to be identified personally, either directly (e.g. your name) or indirectly, because the data references an identifier such as your name, an identification number, location data, or an online identifier (e.g. telephone number). We may also collect personal data about you in other instances which relate to your interactions with <strong>Move Mates</strong>.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. When is what kind of data stored and processed for what reason?</h3>
              
              <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">Use of the Website</h4>
              <p>Whenever you navigate our Website, data is collected and processed about you. We collect the following data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Information related to the browser or device you use to access our Website</li>
                <li>IP address</li>
                <li>Country you are browsing from</li>
                <li>Browsing habits, including sites visited</li>
                <li>Other demographics and statistical information</li>
              </ul>
              
              <p>The data is collected through the session cookies (see section 8 below). It is anonymised before we use it to build anonymous utilisation profiles, for marketing purposes and to optimise our Website and the services we provide. This data shall not be used to identify visitors of this Website personally.</p>
              
              <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">Interacting with us</h4>
              
              <h5 className="text-lg font-semibold text-foreground mt-4 mb-2">a. Booking Services</h5>
              <p>When you book or request a service through our Website, we collect Personal Data, which may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your selected service</li>
                <li>Selected dates</li>
                <li>Number of people involved</li>
                <li>Contact information (full name, address, city, country, email, phone)</li>
                <li>Payment details (credit card where applicable)</li>
                <li>Optional information such as preferences</li>
              </ul>
              
              <p>We use this Personal Data to handle your reservation and to establish and fulfil our contract with you. This includes verifying your identity, taking guarantee and/or payment information, and sending service-related and/or marketing communication.</p>
              
              <p>We take the protection of your Personal Data very seriously and therefore have kept the mandatory required fields to a minimum.</p>
              
              <h5 className="text-lg font-semibold text-foreground mt-4 mb-2">b. Newsletter and Special Offers</h5>
              <p>If you provide your contact information to us (e.g. when booking a service with us or when signing up for our newsletter via our Website), we may use this Personal Data to send you our newsletters and details of special offers which may be of interest to you.</p>
              
              <p>You may revoke your consent and opt out of receiving the newsletter at any time by clicking on the unsubscribe link included in every newsletter.</p>
              
              <h5 className="text-lg font-semibold text-foreground mt-4 mb-2">c. "Contact Us" Functionality</h5>
              <p>You can get in contact with us via our Website or by telephone. To contact us you may be required to provide:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Telephone number</li>
                <li>Your enquiry</li>
              </ul>
              
              <p>We use your information to reply to your enquiry.</p>
              
              <div className="mt-12 pt-8 border-t border-border">
                <p>For any enquiries about your Personal Data, please contact us at:</p>
                <p><strong>Email:</strong> <a href="mailto:privacy@movemates1.gmail.com" className="text-primary hover:underline">privacy@movemates1.gmail.com</a></p>
                <p><strong>Address:</strong> Westlands, Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
