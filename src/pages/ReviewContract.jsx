import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, FileText, Calendar, DollarSign, User, Download, Edit, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ReviewContract = () => {
  const { id } = useParams()

  // Mock contract data
  const contract = {
    id: parseInt(id),
    title: "Website Design & Development Project",
    client: "TechCorp Solutions",
    freelancer: "John Smith",
    amount: "$2,500",
    status: "active",
    createdDate: "November 15, 2024",
    deadline: "December 20, 2024",
    progress: 65,
    description: "Design and develop a modern, responsive website for TechCorp Solutions including homepage, about page, services page, and contact form. The website should be built using React and Tailwind CSS with a focus on user experience and mobile responsiveness.",
    terms: `Payment Terms:
- 50% upfront payment upon contract signing
- 25% payment upon design approval
- 25% final payment upon project completion

Revision Policy:
- Up to 3 rounds of revisions included
- Additional revisions charged at $50/hour

Deliverables:
- Fully responsive website
- Source code repository access
- 30 days of post-launch support

Timeline:
- Design mockups: 1 week
- Development: 2 weeks
- Testing & revisions: 1 week`,
    milestones: [
      {
        title: "Project Kickoff & Requirements",
        status: "completed",
        date: "Nov 16, 2024",
        payment: "$1,250"
      },
      {
        title: "Design Mockups Delivery",
        status: "completed",
        date: "Nov 23, 2024",
        payment: "$625"
      },
      {
        title: "Development & Testing",
        status: "in-progress",
        date: "Dec 10, 2024",
        payment: "-"
      },
      {
        title: "Final Delivery & Launch",
        status: "pending",
        date: "Dec 20, 2024",
        payment: "$625"
      }
    ]
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/20'
      case 'in-progress': return 'text-blue-400 bg-blue-400/20'
      case 'pending': return 'text-yellow-400 bg-yellow-400/20'
      case 'active': return 'text-blue-400 bg-blue-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  const getMilestoneIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'in-progress': return <div className="w-4 h-4 rounded-full bg-blue-400" />
      case 'pending': return <div className="w-4 h-4 rounded-full border-2 border-yellow-400" />
      default: return <div className="w-4 h-4 rounded-full border-2 border-gray-400" />
    }
  }

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[1000px] mx-auto">
        <Link to="/contracts" className="inline-flex items-center text-[#5648ff] hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Contracts
        </Link>

        {/* Contract Header */}
        <Card className="bg-[#1f1f1f] border-none mb-6">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(contract.status)}`}>
                    {contract.status.replace('-', ' ')}
                  </span>
                </div>
                <CardTitle className="text-white text-2xl mb-2">{contract.title}</CardTitle>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-[#99999b]">Client:</span>
                    <div className="text-white font-medium">{contract.client}</div>
                  </div>
                  <div>
                    <span className="text-[#99999b]">Amount:</span>
                    <div className="text-[#5648ff] font-bold text-lg">{contract.amount}</div>
                  </div>
                  <div>
                    <span className="text-[#99999b]">Created:</span>
                    <div className="text-white">{contract.createdDate}</div>
                  </div>
                  <div>
                    <span className="text-[#99999b]">Deadline:</span>
                    <div className="text-white">{contract.deadline}</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-[#444444] text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Export PDF
                </Button>
                <Button variant="outline" size="sm" className="border-[#444444] text-white">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Progress Bar */}
        {contract.status === 'active' && (
          <Card className="bg-[#1f1f1f] border-none mb-6">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium">Project Progress</h3>
                <span className="text-white text-sm">{contract.progress}%</span>
              </div>
              <div className="w-full bg-[#0f0f0f] rounded-full h-3">
                <div 
                  className="bg-[#5648ff] h-3 rounded-full transition-all duration-300"
                  style={{ width: `${contract.progress}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Description */}
            <Card className="bg-[#1f1f1f] border-none">
              <CardHeader>
                <CardTitle className="text-white">Project Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#99999b] leading-relaxed">{contract.description}</p>
              </CardContent>
            </Card>

            {/* Terms & Conditions */}
            <Card className="bg-[#1f1f1f] border-none">
              <CardHeader>
                <CardTitle className="text-white">Terms & Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-[#99999b] whitespace-pre-line leading-relaxed font-sans">
                  {contract.terms}
                </pre>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Milestones */}
            <Card className="bg-[#1f1f1f] border-none">
              <CardHeader>
                <CardTitle className="text-white">Project Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contract.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        {getMilestoneIcon(milestone.status)}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm">{milestone.title}</h4>
                        <p className="text-[#99999b] text-xs">{milestone.date}</p>
                        {milestone.payment !== '-' && (
                          <p className="text-[#5648ff] text-xs font-medium">{milestone.payment}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="bg-[#1f1f1f] border-none">
              <CardHeader>
                <CardTitle className="text-white">Contract Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {contract.status === 'active' && (
                  <>
                    <Button className="w-full bg-[#5648ff] hover:bg-[#4a3bdb]">
                      Update Progress
                    </Button>
                    <Button variant="outline" className="w-full border-[#444444] text-white">
                      Request Payment
                    </Button>
                    <Button variant="outline" className="w-full border-[#444444] text-white">
                      Message Client
                    </Button>
                  </>
                )}
                {contract.status === 'pending' && (
                  <>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Accept Contract
                    </Button>
                    <Button variant="outline" className="w-full border-red-600 text-red-400 hover:bg-red-600/10">
                      Decline Contract
                    </Button>
                  </>
                )}
                {contract.status === 'completed' && (
                  <Button variant="outline" className="w-full border-[#444444] text-white">
                    Leave Review
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewContract 