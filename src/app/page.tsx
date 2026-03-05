import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="text-3xl font-bold text-emirgai-blue">EmirGAI</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/services" className="text-base font-medium text-gray-500 hover:text-gray-900 mr-8">
                Services
              </Link>
              <Link href="/case-studies" className="text-base font-medium text-gray-500 hover:text-gray-900 mr-8">
                Case Studies
              </Link>
              <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900 mr-8">
                About
              </Link>
              <Link href="/contact" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emirgai-blue hover:bg-blue-800">
                Book Consultation
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emirgai-blue via-blue-700 to-ai-accent">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Manchester's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                #1 AI Marketing
              </span>
              Agency
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-blue-100 leading-relaxed">
              We don't just use AI tools — we ARE the AI. Delivering 300% average ROI improvement 
              through cutting-edge automation that traditional agencies can't match.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-success-green hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all">
                Get Free ROI Analysis →
              </button>
              <button className="bg-white text-emirgai-blue hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all">
                View Case Studies
              </button>
            </div>
            <div className="mt-8 text-blue-200 text-sm">
              ⚡ Free consultation • 15-minute setup • Results within 30 days
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600 mb-6">TRUSTED BY MANCHESTER BUSINESSES</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="bg-gray-100 h-12 rounded flex items-center justify-center">
                <span className="text-gray-700 font-medium">TechNorth</span>
              </div>
              <div className="bg-gray-100 h-12 rounded flex items-center justify-center">
                <span className="text-gray-700 font-medium">ManUnited</span>
              </div>
              <div className="bg-gray-100 h-12 rounded flex items-center justify-center">
                <span className="text-gray-700 font-medium">Deloitte</span>
              </div>
              <div className="bg-gray-100 h-12 rounded flex items-center justify-center">
                <span className="text-gray-700 font-medium">MediaCityUK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Results That Speak For Themselves
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real Manchester businesses, real AI transformation, real ROI improvements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-success-green mb-2">547%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">ROI Increase</div>
              <div className="text-gray-600">Manchester Tech Startup</div>
              <div className="mt-4 text-sm text-gray-500">"EmirGAI's Google Workspace automation saved us 25 hours per week"</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-ai-accent mb-2">892</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">New Leads Monthly</div>
              <div className="text-gray-600">Didsbury Law Firm</div>
              <div className="mt-4 text-sm text-gray-500">"AI email sequences transformed our client acquisition"</div>
            </div>
            
            <div className="text-5xl font-bold text-emirgai-blue mb-2">£47K</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Monthly Revenue Increase</div>
            <div className="text-gray-600">Altrincham E-commerce</div>
            <div className="mt-4 text-sm text-gray-500">"Automation workflows doubled our conversion rates"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Marketing Packages Built For Growth
            </h2>
            <p className="text-xl text-gray-600">
              No contracts. No setup fees. Just results.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
                <p className="text-gray-600 mt-2">Perfect for growing Manchester businesses</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">£1,500</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-700">
                <li className="flex items-center">
                  <span className="text-success-green mr-3">✓</span>
                  Email marketing automation
                </li>
                <li className="flex items-center">
                  <span className="text-success-green mr-3">✓</span>
                  Google Workspace optimization
                </li>
                <li className="flex items-center">
                  <span className="text-success-green mr-3">✓</span>
                  Basic AI content creation
                </li>
                <li className="flex items-center">
                  <span className="text-success-green mr-3">✓</span>
                  Monthly performance reports
                </li>
              </ul>
              <button className="w-full bg-emirgai-blue text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all">
                Start Growing
              </button>
            </div>

            {/* Growth (Popular) */}
            <div className="bg-gradient-to-br from-emirgai-blue to-ai-accent p-8 rounded-2xl text-white relative transform scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-success-green px-4 py-2 rounded-full text-sm font-bold text-white">
                  MOST POPULAR
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Growth</h3>
                <p className="text-blue-100 mt-2">Scale your Manchester business with AI</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold">£3,500</span>
                <span className="text-blue-200">/month</span>
              </div>
              <ul className="space-y-4 mb-8 text-blue-100">
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Everything in Starter
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Advanced automation workflows
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  AI-powered content strategy
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Predictive analytics dashboard
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-400 mr-3">✓</span>
                  Weekly strategy calls
                </li>
              </ul>
              <button className="w-full bg-white text-emirgai-blue py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                Accelerate Growth
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
                <p className="text-gray-600 mt-2">Complete AI transformation</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">£7,500</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-700">
                <li className="flex items-center">
                  <span className="text-success-green mr-3">✓</span>
                  Everything in Growth
                </li>
                <li className="flex items-center">
                  <span className="text-success-green mr-3">✓</span>
                  Custom AI development
                </li>
                <li className="flex items-center">
                  <span className="text-success-green mr-3">✓</span>
                  Dedicated account manager
                </li>
                <li className="flex items-center">
                  <span className="text-success-green mr-3">✓</span>
                  24/7 priority support
                </li>
                <li className="flex items-center">
                  <span className="text-success-green mr-3">✓</span>
                  White-glove implementation
                </li>
              </ul>
              <button className="w-full bg-emirgai-blue text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition-all">
                Transform Business
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emirgai-blue">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Lead Manchester with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Book a free consultation and see how AI can transform your business in 30 days.
          </p>
          <button className="bg-success-green hover:bg-green-600 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-lg transform hover:scale-105 transition-all">
            Book Free Consultation
          </button>
        </div>
      </section>
    </div>
  )
}