import { useState } from 'react'
import { SearchIcon, FilterIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Sample products data
  const products = [
    { id: 1, title: "Vintage Camera", price: "$150", category: "Electronics", image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-1.png" },
    { id: 2, title: "Designer Jacket", price: "$85", category: "Fashion", image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-2.png" },
    { id: 3, title: "Mountain Bike", price: "$300", category: "Sports", image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-3.png" },
    { id: 4, title: "Coffee Maker", price: "$45", category: "Home", image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-4.png" },
    { id: 5, title: "Gaming Chair", price: "$200", category: "Electronics", image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-5.png" },
    { id: 6, title: "Art Supplies", price: "$35", category: "Crafts", image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-6.png" },
  ]

  const categories = ['all', 'Electronics', 'Fashion', 'Sports', 'Home', 'Crafts']

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-white text-4xl font-bold mb-4">Explore Marketplace</h1>
          <p className="text-[#99999b] text-lg">Discover amazing products and services from our community</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <SearchIcon className="w-5 h-5 text-[#595d62] absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Input
              className="pl-10 bg-[#1f1f1f] border-[#444444] text-white"
              placeholder="Search products..."
            />
          </div>
          <Button variant="outline" className="border-[#444444] text-white">
            <FilterIcon className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-[#5648ff] text-white" 
                : "border-[#444444] text-white hover:bg-[#2a2a2a]"
              }
            >
              {category === 'all' ? 'All Categories' : category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-[#1f1f1f] border-none overflow-hidden hover:bg-[#2a2a2a] transition-colors">
              <CardContent className="p-0">
                <div className="aspect-square w-full bg-[#2a2a2a] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white text-base font-medium mb-1">{product.title}</h3>
                  <p className="text-[#99999b] text-sm mb-2">{product.category}</p>
                  <p className="text-[#5648ff] font-semibold text-lg">{product.price}</p>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link to={`/product/${product.id}`} className="w-full">
                  <Button className="w-full bg-[#5648ff] hover:bg-[#4a3bdb]">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Explore 