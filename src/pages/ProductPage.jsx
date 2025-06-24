import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Heart, Share, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const ProductPage = () => {
  const { id } = useParams()

  // Mock product data - in real app this would come from API
  const product = {
    id: parseInt(id),
    title: "Vintage Camera Collection",
    price: "$150",
    originalPrice: "$200",
    category: "Electronics",
    location: "New York, NY",
    seller: "John Doe",
    sellerRating: 4.8,
    description: "Beautiful vintage camera in excellent condition. Perfect for photography enthusiasts and collectors. Includes original case and manual.",
    images: [
      "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-1.png",
      "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-2.png",
      "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-3.png",
    ],
    features: [
      "Excellent condition",
      "Original packaging",
      "Manual included",
      "Tested and working"
    ]
  }

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Back Button */}
        <Link to="/explore" className="inline-flex items-center text-[#5648ff] hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Explore
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square w-full bg-[#2a2a2a] rounded-lg overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="w-20 h-20 bg-[#2a2a2a] rounded-lg overflow-hidden">
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#99999b] text-sm">{product.category}</span>
                <span className="text-[#99999b]">•</span>
                <span className="text-[#99999b] text-sm">{product.location}</span>
              </div>
              <h1 className="text-white text-3xl font-bold mb-4">{product.title}</h1>
              <div className="flex items-center gap-3">
                <span className="text-[#5648ff] text-2xl font-bold">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-[#99999b] text-lg line-through">{product.originalPrice}</span>
                )}
              </div>
            </div>

            {/* Seller Info */}
            <Card className="bg-[#1f1f1f] border-none">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">{product.seller}</h3>
                    <p className="text-[#99999b] text-sm">⭐ {product.sellerRating} rating</p>
                  </div>
                  <Link to="/messages">
                    <Button size="sm" variant="outline" className="border-[#444444] text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-3">Description</h3>
              <p className="text-[#99999b] leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-[#99999b] flex items-center">
                    <span className="w-2 h-2 bg-[#5648ff] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="flex-1 bg-[#5648ff] hover:bg-[#4a3bdb]">
                Contact Seller
              </Button>
              <Button variant="outline" size="icon" className="border-[#444444] text-white">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-[#444444] text-white">
                <Share className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage 