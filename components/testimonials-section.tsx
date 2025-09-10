"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, DollarSign, Users, Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface TestimonialProps {
  name: string
  role: string
  company?: string
  image?: string
  quote: string
  results: {
    before: string
    after: string
    timeframe: string
  }
  verified?: boolean
}

const testimonials: TestimonialProps[] = [
  {
    name: "Michael Johnson",
    role: "Business Coach",
    company: "Growth Accelerator Coaching",
    quote:
      "ScaleFunnel completely transformed my business. I went from struggling to find clients to having a waitlist. The automated funnel system is incredible - I now get 25+ qualified calls monthly without any cold outreach. My revenue has tripled in just 90 days.",
    results: {
      before: "$8K/month",
      after: "$35K/month",
      timeframe: "90 days",
    },
    verified: true,
  },
  {
    name: "Sarah Rodriguez",
    role: "Life Coach",
    company: "Mindful Success Coaching",
    quote:
      "I was skeptical at first, but the results speak for themselves. The funnel brought me 30 qualified leads in my first month alone. I've already booked $45K worth of coaching packages. The design and copy are phenomenal - it converts like crazy!",
    results: {
      before: "$12K/month",
      after: "$42K/month",
      timeframe: "120 days",
    },
    verified: true,
  },
  {
    name: "David Kim",
    role: "Marketing Coach",
    company: "Digital Growth Solutions",
    quote:
      "From struggling at $12K/month to consistently hitting $40K+. The funnel design and copy are phenomenal. Best investment I've ever made. My clients now come to me instead of me chasing them. The system works 24/7.",
    results: {
      before: "$12K/month",
      after: "$40K/month",
      timeframe: "105 days",
    },
    verified: true,
  },
  {
    name: "Jennifer Walsh",
    role: "Executive Coach",
    company: "Leadership Excellence",
    quote:
      "The ScaleFunnel team delivered exactly what they promised. My conversion rate increased by 300% and I'm now booking high-ticket clients consistently. The automated system has given me my life back while growing my business.",
    results: {
      before: "$15K/month",
      after: "$48K/month",
      timeframe: "95 days",
    },
    verified: true,
  },
  {
    name: "Robert Chen",
    role: "Sales Coach",
    company: "Peak Performance Sales",
    quote:
      "I've tried other funnel builders before, but nothing comes close to ScaleFunnel's results. The quality of leads is incredible - these are serious buyers, not tire kickers. My close rate has doubled since implementing their system.",
    results: {
      before: "$9K/month",
      after: "$32K/month",
      timeframe: "110 days",
    },
    verified: true,
  },
  {
    name: "Amanda Foster",
    role: "Health Coach",
    company: "Wellness Transformation",
    quote:
      "The funnel system has been a game-changer for my coaching practice. I went from inconsistent income to predictable $30K+ months. The team's attention to detail and understanding of the coaching industry is exceptional.",
    results: {
      before: "$7K/month",
      after: "$31K/month",
      timeframe: "118 days",
    },
    verified: true,
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: TestimonialProps; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100) // Staggered animation delay
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`} // Added slide-up animation with opacity
    >
      <Card className="h-full border-primary/20 bg-gradient-to-b from-background to-primary/5 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:-translate-y-2">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3 hover:bg-primary/20 transition-colors duration-300">
                <span className="font-bold text-primary text-sm">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                {testimonial.company && (
                  <p className="text-xs text-muted-foreground font-medium">{testimonial.company}</p>
                )}
              </div>
            </div>
            {testimonial.verified && (
              <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20 animate-pulse">
                <Star className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>

          {/* Quote */}
          <blockquote className="text-sm mb-6 italic leading-relaxed text-foreground/90">
            "{testimonial.quote}"
          </blockquote>

          {/* Results */}
          <div className="bg-muted/50 rounded-lg p-4 space-y-3 hover:bg-muted/70 transition-colors duration-300">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Before:</span>
              <span className="font-semibold text-destructive">{testimonial.results.before}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">After:</span>
              <span className="font-semibold text-primary">{testimonial.results.after}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Timeframe:</span>
              <span className="font-semibold">{testimonial.results.timeframe}</span>
            </div>
            <div className="pt-2 border-t border-border/50">
              <div className="flex items-center justify-center text-xs text-primary font-semibold">
                <TrendingUp className="w-3 h-3 mr-1 animate-bounce" />
                {Math.round(
                  (Number.parseInt(testimonial.results.after.replace(/[^0-9]/g, "")) /
                    Number.parseInt(testimonial.results.before.replace(/[^0-9]/g, "")) -
                    1) *
                    100,
                )}
                % Increase
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function TestimonialsSection() {
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary text-primary-foreground border-primary hover:bg-primary/90 animate-pulse">
            <Users className="w-4 h-4 mr-2" />
            10+ International Success Stories
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Real Coaches, Real Results, Real Transformations
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
            See how our "Automated Scaling Funnel" system has helped coaches across the globe break through the
            $30K/month barrier in 120 days or less
          </p>
        </div>

        {/* Stats Banner */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 ease-out ${
            statsVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`} // Added slide-up animation for stats banner
        >
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary">$2.1M+</div>
            <div className="text-sm text-muted-foreground">Additional Revenue Generated</div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary">285%</div>
            <div className="text-sm text-muted-foreground">Average Revenue Increase</div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary">105</div>
            <div className="text-sm text-muted-foreground">Average Days to $30K+</div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
              <Star className="w-8 h-8 text-primary animate-spin" style={{ animationDuration: "3s" }} />
            </div>
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6 text-balance">
            Ready to join these successful coaches and scale your business to $30K+/month?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Badge
              variant="outline"
              className="text-primary border-primary bg-primary/5 hover:bg-primary/10 animate-pulse"
            >
              <Star className="w-4 h-4 mr-2" />
              Limited to 5 new clients per month
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
