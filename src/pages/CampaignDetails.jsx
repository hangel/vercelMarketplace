import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Target, Calendar, Users, DollarSign, Share, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CampaignDetails = () => {
  const { id } = useParams()

  const campaign = {
    id: parseInt(id),
    title: "Clean Water Initiative for Rural Communities",
    organizer: "Water For All Foundation",
    category: "Social Impact",
    goal: 50000,
    raised: 32500,
    backers: 267,
    daysLeft: 18,
    description: "Help us bring clean, safe drinking water to rural communities that lack access to this basic necessity. Your contribution will fund wells, water purification systems, and educational programs.",
    story: "Access to clean water shouldn't be a privilege. In many rural communities around the world, families walk miles every day just to collect water that may not even be safe to drink. Our initiative aims to change this by implementing sustainable water solutions that will serve these communities for generations to come.",
    images: [
      "/figmaAssets/campaign-1.png",
      "/figmaAssets/campaign-2.png",
      "/figmaAssets/campaign-3.png"
    ],
    updates: [
      {
        date: "Dec 10, 2024",
        title: "50% Funding Milestone Reached!",
        content: "Thanks to your amazing support, we've reached 50% of our funding goal..."
      },
      {
        date: "Dec 5, 2024",
        title: "First Well Construction Begins",
        content: "Construction has begun on our first well in the Makeni region..."
      }
    ],
    rewards: [
      {
        amount: 25,
        title: "Thank You Card",
        description: "Receive a personalized thank you card from the community",
        claimed: 45,
        available: 155
      },
      {
        amount: 100,
        title: "Photo Package",
        description: "Thank you card + exclusive photos of the project progress",
        claimed: 23,
        available: 77
      },
      {
        amount: 500,
        title: "Community Visit",
        description: "All above + invitation to visit the community (travel not included)",
        claimed: 5,
        available: 15
      }
    ]
  }

  const progressPercentage = (campaign.raised / campaign.goal) * 100

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <Link to="/explore" className="inline-flex items-center text-[#5648ff] hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Campaigns
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Campaign Header */}
            <Card className="bg-[#1f1f1f] border-none">
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-[#2a2a2a] rounded-t-lg overflow-hidden">
                  <img
                    src={campaign.images[0]}
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-[#5648ff]/20 text-[#5648ff] text-xs rounded-full">
                      {campaign.category}
                    </span>
                  </div>
                  <h1 className="text-white text-2xl font-bold mb-2">{campaign.title}</h1>
                  <p className="text-[#99999b] mb-4">by {campaign.organizer}</p>
                  
                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#99999b]">Progress</span>
                      <span className="text-white">${campaign.raised.toLocaleString()} / ${campaign.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-[#0f0f0f] rounded-full h-3">
                      <div 
                        className="bg-[#5648ff] h-3 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-white text-lg font-bold">{Math.round(progressPercentage)}%</div>
                      <div className="text-[#99999b] text-sm">Funded</div>
                    </div>
                    <div>
                      <div className="text-white text-lg font-bold">{campaign.backers}</div>
                      <div className="text-[#99999b] text-sm">Backers</div>
                    </div>
                    <div>
                      <div className="text-white text-lg font-bold">{campaign.daysLeft}</div>
                      <div className="text-[#99999b] text-sm">Days Left</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="bg-[#1f1f1f] border-none">
              <CardHeader>
                <CardTitle className="text-white">About This Campaign</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#99999b] leading-relaxed mb-4">{campaign.description}</p>
                <p className="text-[#99999b] leading-relaxed">{campaign.story}</p>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card className="bg-[#1f1f1f] border-none">
              <CardHeader>
                <CardTitle className="text-white">Campaign Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaign.updates.map((update, index) => (
                    <div key={index} className="p-4 bg-[#0f0f0f] rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-medium">{update.title}</h3>
                        <span className="text-[#99999b] text-sm">{update.date}</span>
                      </div>
                      <p className="text-[#99999b]">{update.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Support This Campaign */}
            <Card className="bg-[#1f1f1f] border-none">
              <CardHeader>
                <CardTitle className="text-white">Support This Campaign</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-[#5648ff] hover:bg-[#4a3bdb]">
                  Back This Campaign
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="border-[#444444] text-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-[#444444] text-white">
                    <Share className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Rewards */}
            <Card className="bg-[#1f1f1f] border-none">
              <CardHeader>
                <CardTitle className="text-white">Choose a Reward</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaign.rewards.map((reward, index) => (
                    <div key={index} className="p-4 bg-[#0f0f0f] rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[#5648ff] font-bold">${reward.amount}</h3>
                        <span className="text-[#99999b] text-xs">
                          {reward.available - reward.claimed} left
                        </span>
                      </div>
                      <h4 className="text-white font-medium mb-2">{reward.title}</h4>
                      <p className="text-[#99999b] text-sm mb-3">{reward.description}</p>
                      <Button size="sm" className="w-full bg-[#5648ff] hover:bg-[#4a3bdb]">
                        Select Reward
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails 