export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-emirgai-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI-Powered Marketing That Delivers <span className="text-ai-accent">Real ROI</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            We don't just use AI - we ARE AI. Manchester's first AI-powered marketing agency delivering 300% average ROI improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-ai-accent hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Get Free ROI Analysis
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-emirgai-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-success-green mb-2">300%</div>
              <div className="text-lg font-semibold mb-2">Average ROI Improvement</div>
              <p className="text-gray-600">Our AI-first approach delivers measurable results that traditional agencies simply can't match.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-ai-accent mb-2">90%</div>
              <div className="text-lg font-semibold mb-2">Less Manual Work</div>
              <p className="text-gray-600">Google Workspace automation eliminates repetitive tasks, freeing you to focus on growth.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-emirgai-blue mb-2">24/7</div>
              <div className="text-lg font-semibold mb-2">AI Marketing Machine</div>
              <p className="text-gray-600">Our AI agents work around the clock optimizing your campaigns and nurturing leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your AI Marketing Package
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            From automation basics to full AI transformation
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <div className="text-3xl font-bold text-ai-accent mb-4">£1,500<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-left space-y-3 mb-6">
                <li>✅ Email Marketing Automation</li>
                <li>✅ Social Media Management</li>
                <li>✅ Basic Analytics Dashboard</li>
                <li>✅ Google Workspace Setup</li>
              </ul>
              <button className="w-full bg-ai-accent text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all">
                Get Started
              </button>
            </div>

            {/* Growth Package */}
            <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-ai-accent relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-success-green text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
              <div className="text-3xl font-bold text-ai-accent mb-4">£3,500<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-left space-y-3 mb-6">
                <li>✅ Everything in Starter</li>
                <li>✅ Advanced AI Content Creation</li>
                <li>✅ Custom Automation Workflows</li>
                <li>✅ Predictive Analytics</li>
              </ul>
              <button className="w-full bg-ai-accent text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all">
                Get Started
              </button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-ai-accent mb-4">£7,500<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-left space-y-3 mb-6">
                <li>✅ Everything in Growth</li>
                <li>✅ Custom AI Solutions</li>
                <li>✅ Dedicated Account Manager</li>
                <li>✅ White-Glove Service</li>
              </ul>
              <button className="w-full bg-ai-accent text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emirgai-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Dominate Manchester with AI Marketing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the AI revolution. Get your free ROI analysis and see what's possible.
          </p>
          <button className="bg-success-green hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
            Book Free Consultation → Manchester's AI Marketing Leader
          </button>
        </div>
      </section>
    </main>
  )
}