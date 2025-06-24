import { Link } from 'react-router-dom'
import { ArrowLeft, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const ProfileReviews = () => {
  const reviews = [
    {
      id: 1,
      reviewer: "Alice Johnson",
      avatar: "/figmaAssets/avatar-picture.png",
      rating: 5,
      date: "2 weeks ago",
      comment: "Great seller! Item was exactly as described and shipped quickly.",
      product: "Vintage Camera"
    },
    {
      id: 2,
      reviewer: "Mike Chen",
      avatar: "/figmaAssets/avatar-picture.png",
      rating: 4,
      date: "1 month ago",
      comment: "Good quality item. Minor wear but well within expectations.",
      product: "Designer Jacket"
    },
    {
      id: 3,
      reviewer: "Sarah Williams",
      avatar: "/figmaAssets/avatar-picture.png",
      rating: 5,
      date: "2 months ago",
      comment: "Excellent condition! Very happy with the purchase.",
      product: "Coffee Maker"
    }
  ]

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
      <div className="max-w-[800px] mx-auto">
        <Link to="/profile" className="inline-flex items-center text-[#5648ff] hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Profile
        </Link>

        <div className="mb-8">
          <h1 className="text-white text-3xl font-bold mb-2">Reviews</h1>
          <p className="text-[#99999b]">See what buyers are saying about John Doe</p>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-[#1f1f1f] border-none">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img 
                    src={review.avatar} 
                    alt={review.reviewer}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-medium">{review.reviewer}</h3>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-[#99999b] text-sm">{review.date}</span>
                    </div>
                    <p className="text-[#99999b] text-sm mb-2">Purchased: {review.product}</p>
                    <p className="text-white">{review.comment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileReviews 