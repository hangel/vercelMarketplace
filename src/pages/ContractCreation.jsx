import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, DollarSign, FileText, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const ContractCreation = () => {
  const [contractData, setContractData] = useState({
    title: '',
    client: '',
    amount: '',
    deadline: '',
    description: '',
    terms: ''
  })

  const handleInputChange = (field, value) => {
    setContractData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle contract creation
    console.log('Creating contract:', contractData)
  }

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[800px] mx-auto">
        <Link to="/contracts" className="inline-flex items-center text-[#5648ff] hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Contracts
        </Link>

        <div className="mb-8">
          <h1 className="text-white text-3xl font-bold mb-2">Create New Contract</h1>
          <p className="text-[#99999b]">Set up a new service agreement with clear terms and conditions</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="bg-[#1f1f1f] border-none">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Contract Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Project Title</label>
                <Input
                  value={contractData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="bg-[#0f0f0f] border-[#444444] text-white"
                  placeholder="e.g., Website Design Project"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Client Name</label>
                  <Input
                    value={contractData.client}
                    onChange={(e) => handleInputChange('client', e.target.value)}
                    className="bg-[#0f0f0f] border-[#444444] text-white"
                    placeholder="Enter client name"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Contract Amount</label>
                  <Input
                    value={contractData.amount}
                    onChange={(e) => handleInputChange('amount', e.target.value)}
                    className="bg-[#0f0f0f] border-[#444444] text-white"
                    placeholder="$0.00"
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Deadline</label>
                <Input
                  type="date"
                  value={contractData.deadline}
                  onChange={(e) => handleInputChange('deadline', e.target.value)}
                  className="bg-[#0f0f0f] border-[#444444] text-white"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1f1f1f] border-none">
            <CardHeader>
              <CardTitle className="text-white">Project Description</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                value={contractData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full h-32 p-3 bg-[#0f0f0f] border border-[#444444] rounded-md text-white resize-none focus:outline-none focus:ring-1 focus:ring-[#5648ff]"
                placeholder="Describe the project scope, deliverables, and requirements..."
              />
            </CardContent>
          </Card>

          <Card className="bg-[#1f1f1f] border-none">
            <CardHeader>
              <CardTitle className="text-white">Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea
                value={contractData.terms}
                onChange={(e) => handleInputChange('terms', e.target.value)}
                className="w-full h-32 p-3 bg-[#0f0f0f] border border-[#444444] rounded-md text-white resize-none focus:outline-none focus:ring-1 focus:ring-[#5648ff]"
                placeholder="Define payment terms, revision policies, cancellation terms..."
              />
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button 
              type="submit" 
              className="flex-1 bg-[#5648ff] hover:bg-[#4a3bdb]"
            >
              Create Contract
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              className="border-[#444444] text-white"
            >
              Save as Draft
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContractCreation 