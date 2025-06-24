import { useState } from 'react'
import { Search, Filter, MapPin, Clock, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const Results = () => {
  const [searchQuery, setSearchQuery] = useState('vintage camera')
  const [sortBy, setSortBy] = useState('relevance')

  // Mock search results data
  const results = [
    {
      id: 1,
      title: "Canon AE-1 Vintage 35mm Film Camera",
      price: "$180",
      location: "Brooklyn, NY",
      posted: "2 hours ago",
      image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-1.png",
      seller: "PhotoCollector",
      rating: 4.8,
      category: "Electronics"
    },
    {
      id: 2,
      title: "Nikon F3 Professional Film Camera",
      price: "$320",
      location: "Manhattan, NY",
      posted: "5 hours ago",
      image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-2.png",
      seller: "RetroTech",
      rating: 4.9,
      category: "Electronics"
    },
    {
      id: 3,
      title: "Polaroid SX-70 Instant Camera",
      price: "$95",
      location: "Queens, NY",
      posted: "1 day ago",
      image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-3.png",
      seller: "VintageFinds",
      rating: 4.6,
      category: "Electronics"
    },
    {
      id: 4,
      title: "Pentax K1000 35mm SLR Camera",
      price: "$140",
      location: "Jersey City, NJ",
      posted: "2 days ago",
      image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-4.png",
      seller: "FilmPhotography",
      rating: 4.7,
      category: "Electronics"
    },
    {
      id: 5,
      title: "Leica M3 Vintage Rangefinder",
      price: "$1,200",
      location: "Hoboken, NJ",
      posted: "3 days ago",
      image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-5.png",
      seller: "PremiumCameras",
      rating: 5.0,
      category: "Electronics"
    },
    {
      id: 6,
      title: "Minolta X-700 Film Camera Kit",
      price: "$220",
      location: "Stamford, CT",
      posted: "4 days ago",
      image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-6.png",
      seller: "CameraStore",
      rating: 4.4,
      category: "Electronics"
    }
  ]

  const sortOptions = [
    { value: 'relevance', label: 'Best Match' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'distance', label: 'Distance' }
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
      />
    ))
  }

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-white text-3xl font-bold mb-2">
            Search Results for "{searchQuery}"
          </h1>
          <p className="text-[#99999b]">{results.length} items found</p>
        </div>

        {/* Search Bar and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-[#595d62] absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-[#1f1f1f] border-[#444444] text-white"
              placeholder="Search for items..."
            />
          </div>
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-[#1f1f1f] border border-[#444444] rounded-md text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5648ff]"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Button variant="outline" className="border-[#444444] text-white">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((item) => (
            <Card key={item.id} className="bg-[#1f1f1f] border-none overflow-hidden hover:bg-[#2a2a2a] transition-colors">
              <CardContent className="p-0">
                <div className="aspect-square w-full bg-[#2a2a2a] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white text-base font-medium mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#5648ff] font-bold text-lg">{item.price}</span>
                    <div className="flex items-center gap-1">
                      {renderStars(item.rating)}
                      <span className="text-[#99999b] text-xs ml-1">({item.rating})</span>
                    </div>
                  </div>
                  <div className="flex items-center text-[#99999b] text-sm mb-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    {item.location}
                  </div>
                  <div className="flex items-center justify-between text-[#99999b] text-sm">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.posted}
                    </div>
                    <span>by {item.seller}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link to={`/product/${item.id}`} className="w-full">
                  <Button className="w-full bg-[#5648ff] hover:bg-[#4a3bdb]">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-[#444444] text-white px-8">
            Load More Results
          </Button>
        </div>

        {/* Search Tips */}
        <Card className="bg-[#1f1f1f] border-none mt-12">
          <CardContent className="p-8">
            <h3 className="text-white text-lg font-semibold mb-4">Search Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#99999b]">
              <div>
                <h4 className="text-white font-medium mb-2">Refine Your Search</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Use specific keywords (brand, model, condition)</li>
                  <li>• Try different spellings or synonyms</li>
                  <li>• Use filters to narrow down results</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Get Better Results</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Save searches to get notified of new listings</li>
                  <li>• Contact sellers directly for more information</li>
                  <li>• Check seller ratings and reviews</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Results 