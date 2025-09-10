"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, TrendingUp, Clock, Star } from "lucide-react"
import { TestimonialsSection } from "@/components/testimonials-section"
import { useEffect, useState } from "react"

export default function VSLLandingPage() {
  const [socialProofVisible, setSocialProofVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setSocialProofVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Badge className="mb-6 bg-primary text-primary-foreground border-primary hover:bg-primary/90 animate-bounce">
            <TrendingUp className="w-4 h-4 mr-2" />
            Proven System - 25+ International Clients Scaled
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight animate-fade-in">
            Scale Your Coaching Business From <span className="text-primary animate-pulse">$10K to $30K+</span> Per
            Month in 120 Days
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-4xl mx-auto leading-relaxed">
            Get 20+ qualified calls every month with our proven "Automated Scaling Funnel" system. No more chasing
            clients or struggling with inconsistent income.
          </p>

          {/* Video Section */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="aspect-video bg-card border-2 border-primary/20 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500">
              <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-primary/90 transition-colors duration-300 cursor-pointer group">
                    <svg
                      className="w-8 h-8 text-primary-foreground ml-1 group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-foreground">Watch: How We Scale Coaches to $30K+/Month</p>
                  <p className="text-muted-foreground">Click to play the exclusive case study</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300 animate-pulse"
              onClick={() => (window.location.href = "/apply")}
            >
              Get Your Scaling Funnel Now
            </Button>
            <p className="text-sm text-muted-foreground">
              <Clock className="w-4 h-4 inline mr-1" />
              Limited spots available - Only 5 clients per month
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-primary mr-2" />
              No upfront payment required
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-primary mr-2" />
              Results guaranteed in 120 days
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-primary mr-2" />
              Custom funnel design included
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section
        className={`bg-primary text-primary-foreground py-4 transform transition-all duration-1000 ease-out ${
          socialProofVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center hover:scale-110 transition-transform duration-300">
              <Users className="w-5 h-5 mr-2 animate-pulse" />
              <span className="font-semibold">10+ International Clients</span>
            </div>
            <div className="flex items-center hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-5 h-5 mr-2 animate-bounce" />
              <span className="font-semibold">Average 3x Revenue Increase</span>
            </div>
            <div className="flex items-center hover:scale-110 transition-transform duration-300">
              <Star className="w-5 h-5 mr-2 animate-spin" style={{ animationDuration: "2s" }} />
              <span className="font-semibold">100% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-balance">Stuck at $10K/Month? Here's Why...</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 border-destructive/20">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">😰</span>
                </div>
                <h3 className="font-semibold mb-2">Inconsistent Lead Flow</h3>
                <p className="text-muted-foreground text-sm">
                  You're constantly hunting for new clients instead of having them come to you
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-destructive/20">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📉</span>
                </div>
                <h3 className="font-semibold mb-2">Low-Converting Funnels</h3>
                <p className="text-muted-foreground text-sm">
                  Your current funnel isn't optimized for high-ticket sales
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-destructive/20">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="font-semibold mb-2">Time-Consuming Sales</h3>
                <p className="text-muted-foreground text-sm">You spend hours on sales calls that don't convert</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Sound familiar? You're not alone. Most coaches hit this plateau because they lack a
            <span className="text-primary font-semibold"> systematic approach to scaling</span>.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Introducing the <span className="text-primary">"Automated Scaling Funnel"</span>
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Our proven system that has helped 10+ international coaches break through the $30K/month barrier
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">High-Converting Funnel Design</h3>
                    <p className="text-muted-foreground">
                      Custom-designed funnels with proven sales copy and eye-catching designs that convert visitors into
                      qualified leads
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Automated Lead Generation</h3>
                    <p className="text-muted-foreground">
                      Set up systems that attract 20+ qualified prospects every month without cold outreach
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Clear Call-to-Action Strategy</h3>
                    <p className="text-muted-foreground">
                      Strategic placement of CTAs that guide prospects through your sales process seamlessly
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                <div className="w-full h-full bg-card rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                      <TrendingUp className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Your Scaling Funnel</h4>
                    <p className="text-muted-foreground text-sm">
                      Automated system working 24/7 to bring you qualified leads
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <TestimonialsSection />

      {/* Offer Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Ready to Scale to $30K+/Month?</h2>

          <p className="text-xl text-muted-foreground mb-12 text-balance">
            Get your custom "Automated Scaling Funnel" built by our expert team
          </p>

          <Card className="p-8 border-2 border-primary/20 bg-background shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500">
            <CardContent className="p-0">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Complete Funnel Transformation</h3>
                <div className="space-y-3 text-left max-w-md mx-auto">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Custom funnel design & development</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>High-converting sales copy</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Eye-catching custom design</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>Clear call-to-action strategy</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>20+ qualified calls guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>120-day scaling guarantee</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-bold text-primary mb-2">$1,000 - $2,000</div>
                <p className="text-muted-foreground">One-time investment for lifetime results</p>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-bold mb-4 hover:scale-110 transition-all duration-300 animate-pulse"
                onClick={() => (window.location.href = "/apply")}
              >
                Apply for Your Scaling Funnel
              </Button>

              <p className="text-sm text-muted-foreground">
                <Clock className="w-4 h-4 inline mr-1" />
                Limited to 5 new clients per month - Apply now to secure your spot
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Don't Let Another Month Pass at $10K</h2>
          <p className="text-xl mb-8 opacity-90 text-balance">
            Your competitors are already scaling. Join the coaches who chose to transform their business with
            ScaleFunnel.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90 px-12 py-6 text-xl font-bold"
            onClick={() => (window.location.href = "/apply")}
          >
            Get Started Today
          </Button>
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
