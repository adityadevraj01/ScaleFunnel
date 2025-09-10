import { ApplicationForm } from "@/components/application-form"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, TrendingUp } from "lucide-react"

export default function ApplicationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-4 border-b bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-primary">ScaleFunnel</h1>
            <p className="text-sm text-muted-foreground">Automated Scaling Funnels</p>
          </div>
          <Badge className="bg-primary/10 text-primary border-primary/20">
            <Clock className="w-4 h-4 mr-2" />
            Limited Spots Available
          </Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            <TrendingUp className="w-4 h-4 mr-2" />
            Application for Scaling Funnel System
          </Badge>

          <h1 className="text-3xl md:text-5xl font-bold text-balance mb-6 leading-tight">
            Ready to Scale From <span className="text-primary">$10K to $30K+</span> Per Month?
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
            Complete this application to see if you qualify for our proven "Automated Scaling Funnel" system. We only
            work with 5 serious coaches per month.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg border border-primary/20">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">20+ Qualified Calls Guaranteed</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg border border-primary/20">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">120-Day Scaling Timeline</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg border border-primary/20">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">Custom Funnel Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <ApplicationForm />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">10+ Success Stories</h3>
              <p className="text-sm text-muted-foreground">International coaches who've scaled past $30K/month</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">285% Average Growth</h3>
              <p className="text-sm text-muted-foreground">Average revenue increase within 120 days</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">100% Success Rate</h3>
              <p className="text-sm text-muted-foreground">Every client who follows our system succeeds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-primary">ScaleFunnel</h3>
              <p className="text-sm text-muted-foreground">Automated Scaling Funnels for Coaches</p>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
