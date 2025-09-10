import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Calendar, Phone, Mail, MessageSquare, ArrowRight, Star, Users } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-4 border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-primary">ScaleFunnel</h1>
            <p className="text-sm text-muted-foreground">Automated Scaling Funnels</p>
          </div>
          <Badge className="bg-primary/10 text-primary border-primary/20">
            <CheckCircle className="w-4 h-4 mr-2" />
            Application Received
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Success Message */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Thank You! Your Application Has Been <span className="text-primary">Successfully Submitted</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
              We've received your application for our "Automated Scaling Funnel" system. Our team is reviewing your
              information and will be in touch within 24 hours.
            </p>

            <Badge className="bg-primary text-primary-foreground px-6 py-2 text-base">
              <Clock className="w-4 h-4 mr-2" />
              Response within 24 hours guaranteed
            </Badge>
          </div>

          {/* Next Steps */}
          <Card className="mb-12 border-2 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">What Happens Next?</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Application Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team reviews your application to ensure you're a perfect fit for our scaling system
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Strategy Call</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll schedule a 30-minute strategy call to discuss your specific scaling goals and challenges
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Custom Proposal</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive a detailed proposal outlining your custom funnel strategy and implementation timeline
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-2" />
                  Urgent Questions?
                </h3>
                <p className="text-muted-foreground mb-4">
                  If you have any urgent questions about your application or our process, don't hesitate to reach out.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-primary mr-2" />
                    <span>support@scalefunnel.com</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 text-primary mr-2" />
                    <span>WhatsApp: +1 (555) 123-4567</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Calendar className="w-5 h-5 text-primary mr-2" />
                  Prepare for Your Call
                </h3>
                <p className="text-muted-foreground mb-4">To make the most of our strategy session, please prepare:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Your current funnel or website (if any)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Revenue goals and timeline</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Questions about our process</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Social Proof Reminder */}
          <Card className="mb-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4">You're in Great Company</h3>
              <p className="text-muted-foreground mb-6">
                Join 10+ international coaches who've already scaled past $30K/month with our proven system
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$2.1M+</div>
                  <div className="text-xs text-muted-foreground">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">285%</div>
                  <div className="text-xs text-muted-foreground">Avg Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">105</div>
                  <div className="text-xs text-muted-foreground">Days to $30K+</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Resources */}
          <Card className="border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-center">While You Wait, Here's What You Can Do</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Users className="w-5 h-5 text-primary mr-2" />
                    Follow Our Success Stories
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Connect with us on social media to see real-time updates from our successful clients.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      Instagram
                    </Button>
                    <Button variant="outline" size="sm">
                      Facebook
                    </Button>
                  </div>
                </div>

                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Star className="w-5 h-5 text-primary mr-2" />
                    Review Our Case Studies
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Read detailed case studies of how we've helped coaches scale their businesses.
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Case Studies
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Message */}
          <div className="text-center mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-lg font-semibold mb-2">We're Excited to Help You Scale!</h3>
            <p className="text-muted-foreground">
              Thank you for taking the first step towards transforming your coaching business. We look forward to
              helping you achieve your $30K+/month goal.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted/30 border-t">
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
          <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
            <p>
              © 2024 ScaleFunnel. All rights reserved. Results may vary based on individual effort and market
              conditions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
