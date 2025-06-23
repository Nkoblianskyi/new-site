"use client"

export function InfoSections() {
  return (
    <div className="mt-16">
      {/* Main Guide Section with Background */}
      <section className="relative rounded-lg overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content */}
        <div className="relative z-10 px-4 py-6 lg:py-8 text-white flex flex-col items-center text-center">
          <h2 className="text-xl lg:text-2xl font-bold mb-4 text-yellow-400">
            Your Ultimate Irish Bookmaker Selection Guide
          </h2>

          <div className="space-y-4 w-full">
            <p className="text-gray-200 leading-relaxed text-sm">
              Choosing the ideal bookmaker from Ireland's extensive selection requires careful consideration and expert
              insight. That's precisely why understanding which features align with your betting preferences is
              essential - whether you value superior odds, generous welcome packages, intuitive design, or seamless
              mobile functionality.
            </p>

            <div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">Our rigorous testing methodology</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                We perform detailed evaluations of every bookmaker showcased on our platform. Our specialist team
                personally examines each provider, analyzing critical elements including odds value, platform
                functionality, in-play betting options, streaming capabilities, cash-out features, support team
                responsiveness, banking solutions, and bonus structures.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">Discovering your ideal betting partner</h3>
              <p className="text-gray-200 leading-relaxed text-sm mb-2">
                Each punter has distinct preferences and specific needs. Begin by determining which sports and betting
                markets capture your interest most, then confirm that your selected providers offer extensive coverage
                across those categories.
              </p>
              <p className="text-gray-200 leading-relaxed text-sm">
                Furthermore, examine each provider's pricing structure and return rates carefully. Enhanced odds
                substantially boost your potential returns and overall betting performance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">Capitalizing on bonus opportunities</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Today's competitive betting landscape drives providers to continuously enhance their promotional
                offerings to attract and maintain loyal customers. Welcome packages have evolved significantly,
                delivering exceptional value to newcomers who master the art of strategic bonus utilization.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">Understanding Irish gambling regulations</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Ireland's gambling landscape operates under strict regulatory frameworks designed to protect consumers
                while ensuring fair play across all platforms. Licensed operators must comply with comprehensive
                guidelines covering everything from financial security to customer data protection. This regulatory
                oversight provides peace of mind for Irish players, knowing their chosen platforms meet the highest
                industry standards.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">Advanced betting features and technology</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Modern Irish bookmakers leverage cutting-edge technology to enhance user experience through innovative
                features like live streaming, instant cash-out options, and sophisticated mobile applications. These
                technological advances allow bettors to place wagers seamlessly across multiple devices while accessing
                real-time statistics, live commentary, and comprehensive market analysis tools.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">Building long-term betting success</h3>
              <p className="text-gray-200 leading-relaxed text-sm">
                Successful betting requires more than just luck - it demands strategic thinking, disciplined bankroll
                management, and continuous learning about sports markets and betting patterns. The most profitable
                bettors focus on specific sports or leagues where they can develop expertise, maintain detailed records
                of their betting activity, and consistently apply proven strategies rather than relying on impulse
                decisions.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 pt-4 border-t border-gray-600 w-full">
            <div className="text-xs text-gray-400 leading-relaxed">
              <p className="mb-2">
                THIS MATERIAL IS COPYRIGHT PROTECTED. ALL SERVICES AND PROMOTIONS ARE EXCLUSIVELY FOR IRISH CITIZENS
                AGED 18 AND ABOVE.
              </p>
              <p>
                FURTHER RESTRICTIONS MAY APPLY INCLUDING IDENTITY VERIFICATION, LOCATION RESTRICTIONS, AND CITIZENSHIP
                REQUIREMENTS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
