"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Shield } from "lucide-react"

interface FormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string

  // Business Information
  businessName: string
  coachingType: string
  currentRevenue: string
  timeInBusiness: string

  // Current Situation
  biggestChallenge: string
  currentLeadGeneration: string
  monthlyLeads: string
  conversionRate: string

  // Goals & Investment
  revenueGoal: string
  timeline: string
  budget: string
  previousInvestments: string

  // Qualifying Questions
  commitment: boolean
  implementation: boolean
  communication: boolean
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  businessName: "",
  coachingType: "",
  currentRevenue: "",
  timeInBusiness: "",
  biggestChallenge: "",
  currentLeadGeneration: "",
  monthlyLeads: "",
  conversionRate: "",
  revenueGoal: "",
  timeline: "",
  budget: "",
  previousInvestments: "",
  commitment: false,
  implementation: false,
  communication: false,
}

export function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const totalSteps = 4

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to thank you page
    window.location.href = "/thank-you"
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone
      case 2:
        return formData.businessName && formData.coachingType && formData.currentRevenue && formData.timeInBusiness
      case 3:
        return formData.biggestChallenge && formData.currentLeadGeneration && formData.monthlyLeads
      case 4:
        return (
          formData.revenueGoal &&
          formData.timeline &&
          formData.budget &&
          formData.commitment &&
          formData.implementation &&
          formData.communication
        )
      default:
        return false
    }
  }

  return (
    <Card className="border-2 border-primary/20 shadow-2xl">
      <CardHeader className="text-center pb-6">
        <div className="flex justify-center mb-4">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Step {currentStep} of {totalSteps}
          </Badge>
        </div>
        <CardTitle className="text-2xl font-bold">
          {currentStep === 1 && "Personal Information"}
          {currentStep === 2 && "Business Details"}
          {currentStep === 3 && "Current Situation"}
          {currentStep === 4 && "Goals & Commitment"}
        </CardTitle>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2 mt-4">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>
        )}

        {/* Step 2: Business Information */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="businessName">Business/Brand Name *</Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => updateFormData("businessName", e.target.value)}
                placeholder="Your coaching business name"
              />
            </div>

            <div>
              <Label htmlFor="coachingType">Type of Coaching *</Label>
              <Select onValueChange={(value) => updateFormData("coachingType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your coaching niche" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business Coach</SelectItem>
                  <SelectItem value="life">Life Coach</SelectItem>
                  <SelectItem value="executive">Executive Coach</SelectItem>
                  <SelectItem value="health">Health/Wellness Coach</SelectItem>
                  <SelectItem value="marketing">Marketing Coach</SelectItem>
                  <SelectItem value="sales">Sales Coach</SelectItem>
                  <SelectItem value="mindset">Mindset Coach</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="currentRevenue">Current Monthly Revenue *</Label>
              <Select onValueChange={(value) => updateFormData("currentRevenue", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your current monthly revenue" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5k-10k">$5K - $10K</SelectItem>
                  <SelectItem value="10k-15k">$10K - $15K</SelectItem>
                  <SelectItem value="15k-20k">$15K - $20K</SelectItem>
                  <SelectItem value="20k-25k">$20K - $25K</SelectItem>
                  <SelectItem value="25k+">$25K+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="timeInBusiness">How long have you been coaching? *</Label>
              <Select onValueChange={(value) => updateFormData("timeInBusiness", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time in business" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="less-1">Less than 1 year</SelectItem>
                  <SelectItem value="1-2">1-2 years</SelectItem>
                  <SelectItem value="2-5">2-5 years</SelectItem>
                  <SelectItem value="5+">5+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 3: Current Situation */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="biggestChallenge">
                What's your biggest challenge in scaling your coaching business? *
              </Label>
              <Textarea
                id="biggestChallenge"
                value={formData.biggestChallenge}
                onChange={(e) => updateFormData("biggestChallenge", e.target.value)}
                placeholder="Describe your main challenge (e.g., inconsistent lead flow, low conversion rates, etc.)"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="currentLeadGeneration">How do you currently generate leads? *</Label>
              <Textarea
                id="currentLeadGeneration"
                value={formData.currentLeadGeneration}
                onChange={(e) => updateFormData("currentLeadGeneration", e.target.value)}
                placeholder="Describe your current lead generation methods"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="monthlyLeads">How many qualified leads do you get per month? *</Label>
              <Select onValueChange={(value) => updateFormData("monthlyLeads", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select monthly lead volume" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-5">0-5 leads</SelectItem>
                  <SelectItem value="5-10">5-10 leads</SelectItem>
                  <SelectItem value="10-20">10-20 leads</SelectItem>
                  <SelectItem value="20+">20+ leads</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="conversionRate">What's your approximate conversion rate from lead to client?</Label>
              <Select onValueChange={(value) => updateFormData("conversionRate", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select conversion rate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-10">0-10%</SelectItem>
                  <SelectItem value="10-20">10-20%</SelectItem>
                  <SelectItem value="20-30">20-30%</SelectItem>
                  <SelectItem value="30+">30%+</SelectItem>
                  <SelectItem value="unsure">Not sure</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 4: Goals & Commitment */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div>
              <Label htmlFor="revenueGoal">What's your revenue goal? *</Label>
              <Select onValueChange={(value) => updateFormData("revenueGoal", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your revenue goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30k">$30K/month</SelectItem>
                  <SelectItem value="50k">$50K/month</SelectItem>
                  <SelectItem value="100k">$100K/month</SelectItem>
                  <SelectItem value="100k+">$100K+/month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="timeline">When do you want to achieve this goal? *</Label>
              <Select onValueChange={(value) => updateFormData("timeline", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="90-days">Within 90 days</SelectItem>
                  <SelectItem value="120-days">Within 120 days</SelectItem>
                  <SelectItem value="6-months">Within 6 months</SelectItem>
                  <SelectItem value="1-year">Within 1 year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="budget">What's your budget for a complete funnel transformation? *</Label>
              <Select onValueChange={(value) => updateFormData("budget", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1k-2k">$1,000 - $2,000</SelectItem>
                  <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                  <SelectItem value="5k+">$5,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="previousInvestments">Have you invested in marketing/funnels before?</Label>
              <Textarea
                id="previousInvestments"
                value={formData.previousInvestments}
                onChange={(e) => updateFormData("previousInvestments", e.target.value)}
                placeholder="Tell us about any previous investments in marketing, funnels, or coaching programs"
                rows={3}
              />
            </div>

            {/* Commitment Questions */}
            <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold text-lg">Commitment Questions</h4>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="commitment"
                  checked={formData.commitment}
                  onCheckedChange={(checked) => updateFormData("commitment", checked as boolean)}
                />
                <Label htmlFor="commitment" className="text-sm leading-relaxed">
                  I am committed to investing the time and effort required to implement the scaling funnel system and
                  follow the proven process. *
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="implementation"
                  checked={formData.implementation}
                  onCheckedChange={(checked) => updateFormData("implementation", checked as boolean)}
                />
                <Label htmlFor="implementation" className="text-sm leading-relaxed">
                  I understand that results require implementation and I'm ready to take action within 30 days of
                  receiving my funnel. *
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="communication"
                  checked={formData.communication}
                  onCheckedChange={(checked) => updateFormData("communication", checked as boolean)}
                />
                <Label htmlFor="communication" className="text-sm leading-relaxed">
                  I'm available for communication during the funnel development process and understand this is a
                  collaborative effort. *
                </Label>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t">
          {currentStep > 1 && (
            <Button variant="outline" onClick={prevStep}>
              Previous
            </Button>
          )}

          <div className="ml-auto">
            {currentStep < totalSteps ? (
              <Button onClick={nextStep} disabled={!isStepValid()} className="bg-primary hover:bg-primary/90">
                Next Step
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className="bg-primary hover:bg-primary/90 px-8"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Security Notice */}
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-4 border-t">
          <Shield className="w-4 h-4" />
          <span>Your information is secure and will never be shared with third parties</span>
        </div>
      </CardContent>
    </Card>
  )
}
