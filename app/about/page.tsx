import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/">
        <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Link>

      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 lg:p-12 shadow-lg max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Bestie Betting Site</h1>

          <p className="text-xl text-gray-700 mb-8 text-center font-medium">
            Your premier destination for Irish bookmaker reviews and analysis
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Purpose</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Bestie Betting Site, we are dedicated to delivering the most thorough, reliable, and current information
            about Ireland's online bookmakers. We recognize that selecting the perfect betting platform can feel
            overwhelming given the numerous available options, which is precisely why we've committed ourselves to
            simplifying this decision-making process.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Evaluate Bookmakers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our evaluation framework is founded on extensive experience and comprehensive understanding of what Irish
            bettors value most. We assess each bookmaker across numerous factors to guarantee our recommendations are
            both trustworthy and applicable.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Assessment Standards</h3>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Authorization & Oversight:</strong> We exclusively feature platforms licensed by recognized
                authorities
              </li>
              <li>
                <strong>Protection & Trust:</strong> Advanced security protocols and responsible gambling initiatives
              </li>
              <li>
                <strong>Market Coverage:</strong> Comprehensive range of sports and wagering possibilities
              </li>
              <li>
                <strong>Price Competitiveness:</strong> Superior odds across major sporting events
              </li>
              <li>
                <strong>Promotional Value:</strong> Fairness and worth of introductory offers
              </li>
              <li>
                <strong>Banking Options:</strong> Diverse deposit and withdrawal alternatives
              </li>
              <li>
                <strong>Support Quality:</strong> Efficiency and standard of assistance services
              </li>
              <li>
                <strong>Mobile Platform:</strong> Standard of applications and mobile websites
              </li>
              <li>
                <strong>Live Wagering:</strong> Real-time betting features and live broadcasts
              </li>
              <li>
                <strong>Platform Design:</strong> Website navigation and overall user-friendliness
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Assessment Approach</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every bookmaker displayed on our site undergoes comprehensive evaluation. Our experienced assessment team
            establishes accounts, processes deposits, places wagers, and evaluates customer service to deliver authentic
            perspectives based on actual user experiences.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-900 mb-3">Our Evaluation Method</h4>
            <ul className="space-y-1 text-blue-800 text-sm">
              <li>• Account creation and identity verification procedures</li>
              <li>• Deposit and withdrawal testing with actual funds</li>
              <li>• Wagering across various sports and markets</li>
              <li>• Customer service efficiency and quality assessment</li>
              <li>• Mobile application and website performance testing</li>
              <li>• Promotional terms and conditions examination</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Our Reviews Matter</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Editorial independence forms the foundation of our operations. While we may earn compensation when you
            access bookmaker platforms through our site, this never impacts our rankings or assessments. Our editorial
            team maintains complete autonomy, and our evaluations are based exclusively on each bookmaker's quality and
            offerings.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Promise to You</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Openness</h4>
              <p className="text-green-800 text-sm">
                Complete disclosure of our assessment process and business relationships
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Precision</h4>
              <p className="text-green-800 text-sm">
                Consistent updates to maintain information accuracy and relevance
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Accountability</h4>
              <p className="text-green-800 text-sm">Advocating for secure and responsible gambling behaviors</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Knowledge</h4>
              <p className="text-green-800 text-sm">Assessments performed by seasoned betting industry specialists</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Safe Gambling Practices</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We champion responsible gambling principles. We maintain that betting should remain enjoyable and never
            result in financial or personal difficulties. All recommended bookmakers must demonstrate dedication to
            responsible gambling through:
          </p>
          <ul className="text-gray-700 space-y-1 mb-6">
            <li>• Self-restriction tools and spending controls</li>
            <li>• Resources for gambling addiction support organizations</li>
            <li>• Age confirmation procedures</li>
            <li>• Transparent terms and policies</li>
            <li>• Clear promotional requirements</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Maintaining Currency</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The online betting industry changes rapidly, with new platforms launching and established operators
            modifying their services regularly. Our team constantly monitors market developments to ensure our
            assessments and rankings accurately reflect each bookmaker's current status.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            We refresh our evaluations whenever major developments occur, whether introducing new payment options,
            revised bonus terms, or licensing changes. This dedication to accuracy ensures you always access the most
            dependable information when selecting your bookmaker.
          </p>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 mt-8">
            <h3 className="text-red-800 font-bold mb-3">Essential Notice</h3>
            <p className="text-red-700 mb-2">
              Gambling should remain enjoyable and entertaining. Never wager beyond your financial means, and always
              maintain responsible gambling habits.
            </p>
            <p className="text-red-700">
              If gambling becomes problematic, please seek assistance from organizations specializing in gambling
              addiction support and counseling services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
