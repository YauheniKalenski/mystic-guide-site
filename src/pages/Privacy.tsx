import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-comfort bg-clip-text text-transparent">
                  Privacy Policy
                </h1>
                <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                  Your privacy and data security are our top priorities
                </p>
              </div>

              <Card className="bg-card/50 border-comfort-sage/20">
                <CardContent className="p-8">
                  <div className="space-y-6 text-foreground/80">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">1. Consent</h3>
                      <p>By using the Aura Tarot app, you agree to this privacy policy and to the processing of your data as described below.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">2. Data Collection</h3>
                      <p>We may collect voluntarily provided data such as name, age, or gender to personalize your experience. No sensitive data is required or collected automatically.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">3. Data Protection</h3>
                      <p>We apply reasonable security measures to safeguard your data against unauthorized access, misuse, or disclosure.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">4. Third-Party Sharing</h3>
                      <p>Your data is never sold. We only share anonymized information when legally required or for refund processing via Apple/Google.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">5. Changes</h3>
                      <p>This policy may change. Continued app usage indicates acceptance of the updated policy.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">6. Disclaimer</h3>
                      <p>This app is not intended for users below a certain age. Use is voluntary and at your own discretion.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">7. Scope & Contact</h3>
                      <p>This privacy policy is specific to the Aura Tarot mobile application. For any questions or additional information, feel free to contact us at:</p>
                      <p className="mt-2">
                        <a 
                          href="mailto:yauheni+privacy@kalenski.dev" 
                          className="text-comfort-sage hover:underline"
                        >
                          📧 yauheni+privacy@kalenski.dev
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy; 