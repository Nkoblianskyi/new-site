import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="prose max-w-none">
          <h2>Understanding Cookies</h2>
          <p>
            Cookies are small data files stored on your device when you browse our website. These files help websites
            function more efficiently and provide valuable information to site operators about user behavior and
            preferences.
          </p>

          <h2>Our Cookie Usage</h2>
          <p>We utilize cookies for various important functions:</p>
          <ul>
            <li>
              <strong>Necessary cookies:</strong> Required for basic website functionality and navigation
            </li>
            <li>
              <strong>Performance cookies:</strong> Help us analyze visitor interactions and site usage patterns
            </li>
            <li>
              <strong>Marketing cookies:</strong> Used to present targeted advertisements and promotional content
            </li>
            <li>
              <strong>Preference cookies:</strong> Store your customized settings and user preferences
            </li>
          </ul>

          <h2>Cookie Categories We Deploy</h2>
          <h3>Temporary cookies</h3>
          <p>
            These short-term cookies are automatically removed when you exit your browser. They assist in maintaining
            your session state as you navigate between different pages on our site.
          </p>

          <h3>Permanent cookies</h3>
          <p>
            These files remain stored on your device for a predetermined duration or until manually deleted. They help
            us identify returning visitors and personalize their browsing experience accordingly.
          </p>

          <h2>External Cookie Sources</h2>
          <p>We may implement third-party cookies from various partners and service providers, such as:</p>
          <ul>
            <li>Analytics platforms for comprehensive website performance tracking</li>
            <li>Social networking sites for content sharing functionality</li>
            <li>Advertising partners for personalized marketing campaigns</li>
          </ul>

          <h2>Cookie Management Options</h2>
          <p>
            You maintain full control over cookie settings through multiple methods. Most web browsers enable you to:
          </p>
          <ul>
            <li>Review all cookies currently stored on your device</li>
            <li>Remove cookies selectively or completely</li>
            <li>Prevent cookies from specific websites</li>
            <li>Block all cookie installations</li>
            <li>Automatically clear cookies upon browser closure</li>
          </ul>

          <h2>Your Cookie Preferences</h2>
          <p>
            By continuing to browse our website, you acknowledge and accept our cookie usage as outlined in this policy.
            You may modify or withdraw your consent at any time by adjusting your browser's cookie settings or
            preferences.
          </p>
        </div>
      </div>
    </div>
  )
}
