import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Search, Filter, FileText, Clock, CheckCircle, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const Contracts = () => {
  const [selectedStatus, setSelectedStatus] = useState('all')

  const contracts = [
    {
      id: 1,
      title: "Website Design Project",
      client: "TechCorp Solutions",
      amount: "$2,500",
      status: "active",
      deadline: "Dec 15, 2024",
      progress: 65,
      type: "Service"
    },
    {
      id: 2,
      title: "Logo Design Package",
      client: "StartupXYZ",
      amount: "$800",
      status: "completed",
      deadline: "Nov 20, 2024",
      progress: 100,
      type: "Service"
    },
    {
      id: 3,
      title: "Mobile App Development",
      client: "RetailPlus Inc",
      amount: "$5,000",
      status: "pending",
      deadline: "Jan 30, 2025",
      progress: 0,
      type: "Service"
    },
    {
      id: 4,
      title: "Photography Session",
      client: "EventMakers",
      amount: "$400",
      status: "active",
      deadline: "Dec 5, 2024",
      progress: 25,
      type: "Service"
    }
  ]

  const statusOptions = [
    { value: 'all', label: 'All Contracts' },
    { value: 'pending', label: 'Pending' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' }
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />
      case 'active': return <FileText className="w-4 h-4" />
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'cancelled': return <XCircle className="w-4 h-4" />
      default: return <FileText className="w-4 h-4" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'text-yellow-400 bg-yellow-400/20'
      case 'active': return 'text-blue-400 bg-blue-400/20'
      case 'completed': return 'text-green-400 bg-green-400/20'
      case 'cancelled': return 'text-red-400 bg-red-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  const filteredContracts = selectedStatus === 'all' 
    ? contracts 
    : contracts.filter(contract => contract.status === selectedStatus)

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-white text-4xl font-bold mb-2">Contracts</h1>
            <p className="text-[#99999b] text-lg">Manage your service agreements and projects</p>
          </div>
          <Link to="/contract/create">
            <Button className="bg-[#5648ff] hover:bg-[#4a3bdb]">
              <Plus className="w-4 h-4 mr-2" />
              Create Contract
            </Button>
          </Link>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-[#595d62] absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Input
              className="pl-10 bg-[#1f1f1f] border-[#444444] text-white"
              placeholder="Search contracts..."
            />
          </div>
          <div className="flex gap-2">
            {statusOptions.map((status) => (
              <Button
                key={status.value}
                variant={selectedStatus === status.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedStatus(status.value)}
                className={selectedStatus === status.value 
                  ? "bg-[#5648ff] text-white" 
                  : "border-[#444444] text-white hover:bg-[#2a2a2a]"
                }
              >
                {status.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Contracts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContracts.map((contract) => (
            <Card key={contract.id} className="bg-[#1f1f1f] border-none hover:bg-[#2a2a2a] transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white text-lg mb-2">{contract.title}</CardTitle>
                    <p className="text-[#99999b] text-sm">{contract.client}</p>
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(contract.status)}`}>
                    {getStatusIcon(contract.status)}
                    <span className="capitalize">{contract.status}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#99999b] text-sm">Amount</span>
                    <span className="text-[#5648ff] font-semibold text-lg">{contract.amount}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[#99999b] text-sm">Deadline</span>
                    <span className="text-white text-sm">{contract.deadline}</span>
                  </div>

                  {contract.status === 'active' && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#99999b] text-sm">Progress</span>
                        <span className="text-white text-sm">{contract.progress}%</span>
                      </div>
                      <div className="w-full bg-[#0f0f0f] rounded-full h-2">
                        <div 
                          className="bg-[#5648ff] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${contract.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 pt-2">
                    <Link to={`/contract/review/${contract.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full border-[#444444] text-white">
                        View Details
                      </Button>
                    </Link>
                    {contract.status === 'active' && (
                      <Button size="sm" className="bg-[#5648ff] hover:bg-[#4a3bdb]">
                        Update
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredContracts.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-[#444444] mx-auto mb-4" />
            <h3 className="text-white text-xl font-medium mb-2">No contracts found</h3>
            <p className="text-[#99999b] mb-6">
              {selectedStatus === 'all' 
                ? "You haven't created any contracts yet." 
                : `No ${selectedStatus} contracts found.`
              }
            </p>
            <Link to="/contract/create">
              <Button className="bg-[#5648ff] hover:bg-[#4a3bdb]">
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Contract
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contracts 