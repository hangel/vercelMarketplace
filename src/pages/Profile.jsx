import { Link } from 'react-router-dom'
import { Edit, MapPin, Star, Package, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Profile = () => {
  const user = {
    name: "John Doe",
    avatar: "/figmaAssets/avatar-picture.png",
    location: "New York City, NY",
    joinDate: "Member since January 2023",
    rating: 4.8,
    totalReviews: 127,
    description: "Passionate collector and seller of vintage items. Always looking for unique pieces and helping others find what they're looking for."
  }

  const stats = [
    { label: "Items Sold", value: "45", icon: Package },
    { label: "Average Rating", value: "4.8", icon: Star },
    { label: "Total Reviews", value: "127", icon: MessageSquare },
  ]

  const recentListings = [
    { id: 1, title: "Vintage Camera", price: "$150", status: "Active", image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-1.png" },
    { id: 2, title: "Designer Jacket", price: "$85", status: "Sold", image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-2.png" },
    { id: 3, title: "Mountain Bike", price: "$300", status: "Active", image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-3.png" },
  ]

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Profile Header */}
        <Card className="bg-[#1f1f1f] border-none mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-white text-2xl font-bold mb-2">{user.name}</h1>
                    <div className="flex items-center text-[#99999b] text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {user.location}
                    </div>
                    <p className="text-[#99999b] text-sm">{user.joinDate}</p>
                  </div>
                  <Button variant="outline" className="border-[#444444] text-white">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                <p className="text-[#99999b] mb-4">{user.description}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-white font-medium">{user.rating}</span>
                    <span className="text-[#99999b] ml-1">({user.totalReviews} reviews)</span>
                  </div>
                  <Link to="/profile/reviews" className="text-[#5648ff] hover:text-white transition-colors">
                    View all reviews
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-[#1f1f1f] border-none">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-[#5648ff] mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[#99999b] text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Listings */}
        <Card className="bg-[#1f1f1f] border-none">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">Recent Listings</CardTitle>
              <Button variant="outline" size="sm" className="border-[#444444] text-white">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentListings.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-[#0f0f0f] rounded-lg">
                  <div className="flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-[#99999b] text-sm">{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {item.status}
                    </span>
                    <Button variant="ghost" size="sm" className="text-[#5648ff]">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Profile 