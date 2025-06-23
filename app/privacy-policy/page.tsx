import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose max-w-none">
          <h2>1. Data We Gather</h2>
          <p>
            We collect information that you voluntarily provide when registering an account, subscribing to our updates,
            or reaching out for assistance and support services.
          </p>

          <h3>Individual Data</h3>
          <ul>
            <li>Full name and electronic mail address</li>
            <li>Internet protocol address and browser details</li>
            <li>Website usage patterns and user preferences</li>
            <li>Tracking technologies and analytical data</li>
          </ul>

          <h2>2. Information Utilization</h2>
          <p>We utilize collected information for the following purposes:</p>
          <ul>
            <li>Deliver and enhance our platform services</li>
            <li>Distribute newsletters and promotional communications</li>
            <li>Examine user behavior patterns and website trends</li>
            <li>Maintain compliance with regulatory requirements</li>
          </ul>

          <h2>3. Data Sharing Practices</h2>
          <p>
            We do not sell, exchange, or transfer your personal information to external parties without explicit
            consent, except as specifically outlined in this privacy policy.
          </p>

          <h2>4. Cookie Technology</h2>
          <p>
            We employ cookies to improve your browsing experience on our platform. You may disable cookies through your
            browser configuration, though this may impact certain website functionalities.
          </p>

          <h2>5. Information Security</h2>
          <p>
            We maintain robust security protocols to safeguard your personal data against unauthorized access,
            modification, disclosure, or destruction through industry-standard protective measures.
          </p>

          <h2>6. User Rights</h2>
          <p>Under applicable data protection regulations, you possess the right to:</p>
          <ul>
            <li>Review your stored personal information</li>
            <li>Modify incorrect or outdated data</li>
            <li>Request deletion of your information</li>
            <li>Object to specific data processing activities</li>
            <li>Transfer your data to another service provider</li>
          </ul>

          <h2>7. Policy Modifications</h2>
          <p>
            We may periodically update this Privacy Policy to reflect changes in our practices or legal requirements. We
            will inform you of significant changes by posting the revised policy on this page with an updated effective
            date.
          </p>
        </div>
      </div>
    </div>
  )
}
