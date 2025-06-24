import { UserPlus, Search, MessageCircle, HandHeart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Account",
      description: "Sign up for free and build your profile. Add your skills, interests, and what you're looking to buy or sell.",
      color: "text-blue-400"
    },
    {
      icon: Search,
      title: "Explore & Discover",
      description: "Browse through thousands of listings from your local community. Use filters to find exactly what you need.",
      color: "text-green-400"
    },
    {
      icon: MessageCircle,
      title: "Connect & Communicate",
      description: "Message sellers or buyers directly. Negotiate prices, ask questions, and arrange meetups safely.",
      color: "text-purple-400"
    },
    {
      icon: HandHeart,
      title: "Complete Your Transaction",
      description: "Meet in safe public places, inspect items, and complete your transaction. Leave reviews to build trust.",
      color: "text-orange-400"
    }
  ]

  const features = [
    {
      title: "Safe & Secure",
      description: "Our platform prioritizes user safety with verified profiles and secure messaging.",
      icon: "🔒"
    },
    {
      title: "Local Community",
      description: "Connect with people in your area to reduce shipping costs and build local relationships.",
      icon: "🏘️"
    },
    {
      title: "Wide Variety",
      description: "From housing and jobs to services and products - find everything in one place.",
      icon: "🛍️"
    },
    {
      title: "Easy to Use",
      description: "Simple, intuitive interface designed for users of all technical levels.",
      icon: "✨"
    }
  ]

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-white text-5xl font-bold mb-6">How Global Board Works</h1>
          <p className="text-[#99999b] text-xl max-w-2xl mx-auto">
            Connecting communities through a simple, safe, and powerful marketplace platform
          </p>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h2 className="text-white text-3xl font-bold text-center mb-12">Get Started in 4 Easy Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-[#1f1f1f] border-none text-center">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-[#0f0f0f] rounded-full flex items-center justify-center mb-4">
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <div className="w-8 h-8 mx-auto bg-[#5648ff] rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-[#99999b] leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-white text-3xl font-bold text-center mb-12">Why Choose Global Board?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-[#1f1f1f] border-none">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-[#99999b] leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-16 bg-[#0f0f0f] rounded-2xl p-12">
          <h2 className="text-white text-3xl font-bold text-center mb-8">What Can You Find?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {[
              { name: "For Sale", emoji: "🛒" },
              { name: "Housing", emoji: "🏠" },
              { name: "Jobs", emoji: "💼" },
              { name: "Services", emoji: "🔧" },
              { name: "Community", emoji: "👥" },
              { name: "Events", emoji: "🎉" },
              { name: "Gigs", emoji: "🎵" },
              { name: "Dating", emoji: "💕" },
              { name: "Campaigns", emoji: "📢" },
              { name: "And More!", emoji: "✨" }
            ].map((category, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{category.emoji}</div>
                <div className="text-white font-medium">{category.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-white text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-[#99999b] text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already buying, selling, and connecting in their local communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#5648ff] hover:bg-[#4a3bdb] px-8 py-3 text-lg">
              Sign Up Free
            </Button>
            <Link to="/explore">
              <Button variant="outline" className="border-[#444444] text-white px-8 py-3 text-lg">
                Explore Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks 