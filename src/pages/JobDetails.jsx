import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Clock, DollarSign, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const JobDetails = () => {
  const { id } = useParams()

  const job = {
    id: parseInt(id),
    title: "Senior React Developer",
    company: "TechCorp Solutions",
    location: "New York, NY",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    posted: "2 days ago",
    applicants: 23,
    description: "We are looking for an experienced React developer to join our growing team. You will be responsible for developing user interface components and implementing them following well-known React.js workflows.",
    requirements: [
      "3+ years of React.js experience",
      "Strong JavaScript and TypeScript skills",
      "Experience with state management (Redux/Context)",
      "Knowledge of modern frontend build tools",
      "Bachelor's degree in Computer Science or equivalent"
    ],
    benefits: [
      "Health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work schedule",
      "Remote work options",
      "Professional development budget"
    ]
  }

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[800px] mx-auto">
        <Link to="/explore" className="inline-flex items-center text-[#5648ff] hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Jobs
        </Link>

        <Card className="bg-[#1f1f1f] border-none mb-6">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <CardTitle className="text-white text-2xl mb-2">{job.title}</CardTitle>
                <p className="text-[#5648ff] text-lg font-medium mb-4">{job.company}</p>
                <div className="flex flex-wrap gap-4 text-[#99999b] text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {job.salary}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {job.applicants} applicants
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#99999b] text-sm mb-4">Posted {job.posted}</p>
                <Button className="bg-[#5648ff] hover:bg-[#4a3bdb]">
                  Apply Now
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="space-y-6">
          <Card className="bg-[#1f1f1f] border-none">
            <CardHeader>
              <CardTitle className="text-white">Job Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#99999b] leading-relaxed">{job.description}</p>
            </CardContent>
          </Card>

          <Card className="bg-[#1f1f1f] border-none">
            <CardHeader>
              <CardTitle className="text-white">Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="text-[#99999b] flex items-start">
                    <span className="w-2 h-2 bg-[#5648ff] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1f1f1f] border-none">
            <CardHeader>
              <CardTitle className="text-white">Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="text-[#99999b] flex items-start">
                    <span className="w-2 h-2 bg-[#5648ff] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-[#1f1f1f] rounded-lg">
          <h3 className="text-white text-lg font-medium mb-4">Ready to Apply?</h3>
          <p className="text-[#99999b] mb-4">
            Join our team and help us build amazing products that make a difference.
          </p>
          <div className="flex gap-3">
            <Button className="bg-[#5648ff] hover:bg-[#4a3bdb]">
              Apply Now
            </Button>
            <Button variant="outline" className="border-[#444444] text-white">
              Save Job
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails 