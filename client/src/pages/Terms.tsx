import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Terms() {
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
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-8"><strong>Last updated: December 2024</strong></p>
            
            <div className="text-foreground space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h3>
              <p>By using our website and services, you agree to these Terms and Conditions. If you do not agree, please do not use our services.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Booking and Reservations</h3>
              <p>All bookings are subject to availability and confirmation. Payment is required to secure your reservation. We reserve the right to cancel bookings in exceptional circumstances.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Cancellation Policy</h3>
              <p>Cancellations must be made at least 24 hours before check-in for a full refund. Cancellations within 24 hours may incur charges. Refund policies vary by property and will be clearly stated at the time of booking.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Guest Responsibilities</h3>
              <p>Guests are responsible for the property during their stay and must respect house rules and local regulations. Any damage to the property will be charged to the guest. Maximum occupancy limits must be respected.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Payment Terms</h3>
              <p>Full payment is required at the time of booking unless otherwise specified. We accept major credit cards, M-Pesa, and bank transfers. All prices are subject to applicable taxes.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Property Standards</h3>
              <p>While we strive to ensure all properties meet our high standards, descriptions and photos are provided by property owners. We cannot guarantee exact matches to descriptions or photos.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Limitation of Liability</h3>
              <p>Move Mates's liability is limited to the value of your booking. We are not responsible for personal belongings, injuries, or indirect damages. Guests are advised to have appropriate travel insurance.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Force Majeure</h3>
              <p>We are not liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including natural disasters, government actions, or pandemics.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Dispute Resolution</h3>
              <p>Any disputes will be resolved through negotiation first. If unresolved, disputes will be subject to mediation and, if necessary, arbitration under Kenyan law.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Governing Law</h3>
              <p>These terms are governed by the laws of Kenya. Any legal proceedings will be conducted in Kenyan courts.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Changes to Terms</h3>
              <p>We may update these terms periodically. Continued use of our services after changes constitutes acceptance of the new terms.</p>
              
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h3>
                <p>For questions about these terms, contact us at:</p>
                <p><strong>Email:</strong> <a href="mailto:legal@movemates1.gmail.com" className="text-primary hover:underline">legal@movemates1.gmail.com</a></p>
                <p><strong>Address:</strong> Westlands, Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
