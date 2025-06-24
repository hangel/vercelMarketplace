import { Link } from 'react-router-dom'
import { ArrowLeft, Star, TrendingUp, FileText, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ContractsProfile = () => {
  const stats = [
    { label: "Total Contracts", value: "24", icon: FileText, color: "text-blue-400" },
    { label: "Completed", value: "18", icon: TrendingUp, color: "text-green-400" },
    { label: "Active", value: "4", icon: Clock, color: "text-yellow-400" },
    { label: "Average Rating", value: "4.8", icon: Star, color: "text-orange-400" }
  ]

  const recentContracts = [
    {
      id: 1,
      title: "E-commerce Website",
      client: "TechStart Inc.",
      status: "completed",
      amount: "$3,500",
      completion: "Nov 2024",
      rating: 5
    },
    {
      id: 2,
      title: "Mobile App UI/UX",
      client: "FinanceApp Co.",
      status: "active",
      amount: "$2,800",
      completion: "Dec 2024",
      rating: null
    },
    {
      id: 3,
      title: "Brand Identity Package",
      client: "StartupXYZ",
      status: "completed",
      amount: "$1,200",
      completion: "Oct 2024",
      rating: 4
    }
  ]

  const testimonials = [
    {
      client: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Outstanding work! Delivered exactly what we needed on time and within budget.",
      rating: 5,
      project: "E-commerce Website"
    },
    {
      client: "Mike Chen",
      company: "StartupXYZ",
      text: "Great communication and excellent design skills. Highly recommended!",
      rating: 4,
      project: "Brand Identity Package"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/20'
      case 'active': return 'text-blue-400 bg-blue-400/20'
      case 'pending': return 'text-yellow-400 bg-yellow-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
      />
    ))
  }

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <Link to="/contracts" className="inline-flex items-center text-[#5648ff] hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Contracts
        </Link>

        <div className="mb-8">
          <h1 className="text-white text-3xl font-bold mb-2">Contract Profile</h1>
          <p className="text-[#99999b]">Your contract performance and client feedback</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-[#1f1f1f] border-none">
              <CardContent className="p-6 text-center">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[#99999b] text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Contracts */}
          <Card className="bg-[#1f1f1f] border-none">
            <CardHeader>
              <CardTitle className="text-white">Recent Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentContracts.map((contract) => (
                  <div key={contract.id} className="p-4 bg-[#0f0f0f] rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-medium">{contract.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(contract.status)}`}>
                        {contract.status}
                      </span>
                    </div>
                    <p className="text-[#99999b] text-sm mb-2">{contract.client}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <span className="text-[#5648ff] font-medium">{contract.amount}</span>
                        <span className="text-[#99999b] text-sm">{contract.completion}</span>
                      </div>
                      {contract.rating && (
                        <div className="flex items-center gap-1">
                          {renderStars(contract.rating)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Client Testimonials */}
          <Card className="bg-[#1f1f1f] border-none">
            <CardHeader>
              <CardTitle className="text-white">Client Testimonials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="p-4 bg-[#0f0f0f] rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <span className="text-[#99999b] text-sm">for {testimonial.project}</span>
                    </div>
                    <p className="text-white mb-3">"{testimonial.text}"</p>
                    <div className="text-[#99999b] text-sm">
                      <span className="font-medium">{testimonial.client}</span>
                      <span className="ml-2">{testimonial.company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-[#1f1f1f] border-none mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-white text-xl font-semibold mb-4">Ready for Your Next Project?</h3>
            <p className="text-[#99999b] mb-6">
              Build on your success and take on new challenges with confidence.
            </p>
            <Link to="/contract/create">
              <Button className="bg-[#5648ff] hover:bg-[#4a3bdb]">
                Create New Contract
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ContractsProfile 