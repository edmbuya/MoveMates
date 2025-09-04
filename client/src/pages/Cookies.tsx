import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Cookies() {
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
            <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
            <p className="text-muted-foreground mb-8"><strong>Last updated: December 2024</strong></p>
            
            <div className="text-foreground space-y-6">
              <p>This Cookie Policy explains how <strong>Move Mates</strong> ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">What are cookies?</h3>
              <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why do we use cookies?</h3>
              <p>We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Types of cookies we use</h3>
              
              <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">Essential Cookies</h4>
              <p>These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our site functions.</p>
              
              <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">Analytics Cookies</h4>
              <p>These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</p>
              
              <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">Functional Cookies</h4>
              <p>These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
              
              <h4 className="text-xl font-semibold text-foreground mt-6 mb-3">Marketing/Advertising Cookies</h4>
              <p>These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">How can you control cookies?</h3>
              <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject.</p>
              
              <p>You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Browser settings</h3>
              <p>You can control cookies through your browser settings. Here are links to cookie settings for major browsers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/help/4027947/microsoft-edge-delete-cookies" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>
              
              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Updates to this policy</h3>
              <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
              
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Contact us</h3>
                <p>If you have any questions about our use of cookies or other technologies, please contact us at:</p>
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
