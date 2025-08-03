import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const AccountDeletion = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-comfort bg-clip-text text-transparent">
                  Account Deletion Request
                </h1>
                <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                  We respect your right to control your personal data
                </p>
              </div>

              <Card className="bg-card/50 border-comfort-sage/20">
                <CardContent className="p-8">
                  <div className="space-y-6 text-foreground/80">
                    <div>
                      <p className="mb-4">
                        If you would like to delete your account and associated data, please contact us by email and include the address you used to register:
                      </p>
                      
                      <div className="bg-comfort-sage/10 p-6 rounded-lg border border-comfort-sage/20">
                        <a 
                          href="mailto:yauheni+accountdeletion@kalenski.dev" 
                          className="text-comfort-sage hover:underline font-medium text-lg"
                        >
                          📧 yauheni+accountdeletion@kalenski.dev
                        </a>
                      </div>
                    </div>
                    
                    <div>
                      <p>We will process your request within 7 days. All data related to your account will be permanently deleted from our systems.</p>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Notice</h4>
                      <p className="text-yellow-700 text-sm">
                        Account deletion is permanent and irreversible. Please make sure you want to delete your account before proceeding. 
                        Consider downloading any important data before requesting deletion.
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

export default AccountDeletion; 