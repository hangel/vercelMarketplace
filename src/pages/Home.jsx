import { SearchIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { FaBox, FaHome, FaUser, FaTools, FaUsers, FaBriefcase, FaCalendarAlt, FaHeart, FaBullhorn } from 'react-icons/fa'

const iconMap = {
  'For Sale': FaBox,
  'Housing': FaHome,
  'Jobs': FaUser,
  'Services': FaTools,
  'Community': FaUsers,
  'Gigs': FaBriefcase,
  'Events': FaCalendarAlt,
  'Dating': FaHeart,
  'Campaigns': FaBullhorn,
}

const Home = () => {
  const navigate = useNavigate();
  // Product data for the "Explore HOT Ads" section
  const hotAds = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit",
      price: "$500",
      category: "Electronics",
      image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-1.png",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit",
      price: "$600",
      category: "Electronics",
      image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-2.png",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit",
      price: "$450",
      category: "Fashion",
      image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-3.png",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit",
      price: "$700",
      category: "Electronics",
      image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-4.png",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit",
      price: "$800",
      category: "Accessories",
      image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-5.png",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit",
      price: "$450",
      category: "Fashion",
      image: "https://c.animaapp.com/mc1tzyqd09Ckxt/img/product-6.png",
    },
  ]

  // Category data for the marketplace sections
  const categories = [
    { id: 1, name: "For Sale", icon: "shopping-bag" },
    { id: 2, name: "Housing", icon: "home" },
    { id: 3, name: "Jobs", icon: "briefcase" },
    { id: 4, name: "Services", icon: "tool" },
    { id: 5, name: "Community", icon: "users" },
    { id: 6, name: "Gigs", icon: "music" },
    { id: 7, name: "Events", icon: "calendar" },
    { id: 8, name: "Dating", icon: "heart" },
    { id: 9, name: "Campaigns", icon: "megaphone" },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative pt-20 pb-32 px-4"
        style={{
          backgroundImage: "url('/figmaAssets/herobackground.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative text-center mx-auto max-w-[849px] z-10">
          <h1 className="text-white text-[56px] font-normal tracking-[-1.5px] leading-[64px] mb-16">
            Welcome to Global Board - Your Gateway to Infinite Possibilities!
          </h1>
        </div>

        <div className="relative max-w-[500px] mx-auto z-10">
          <div className="relative bg-[#1f1f1f] rounded-xl shadow-[0px_8px_24px_-8px_#00000029]">
            <div className="flex h-14 items-center gap-3 p-4">
              <SearchIcon className="w-6 h-6 text-[#595d62]" />
              <Input
                className="border-0 bg-transparent text-[#595d62] text-base font-normal leading-6 placeholder:text-[#595d62] focus-visible:ring-0 focus-visible:ring-offset-0 flex-1"
                placeholder="Type here to find your answers ..."
              />
            </div>
          </div>
        </div>

        {/* Background gradient */}
        <div className="absolute w-full h-[300px] bottom-0 left-0 bg-[linear-gradient(180deg,rgba(1,1,1,0)_0%,rgba(11,11,11,1)_100%)] z-10" />
      </section>

      {/* Product Listings Section */}
      <section className="py-12 px-4">
        <div className="max-w-[1075px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-2xl font-medium">
              Explore HOT Ads
            </h2>
            <div className="flex gap-2">
              <Link to="/explore">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-[#444444]"
                >
                  See All
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hotAds.map((ad) => (
              <Card
                key={ad.id}
                className="bg-[#1f1f1f] border-none overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="aspect-video w-full bg-[#2a2a2a] overflow-hidden">
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white text-base font-medium mb-1">
                      {ad.title}
                    </h3>
                    <p className="text-[#99999b] text-sm">{ad.category}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-4 pt-0">
                  <span className="text-white font-medium">{ad.price}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#5648ff]"
                    onClick={() => navigate('/products')}
                  >
                    Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="text-white border-[#444444]" onClick={() => navigate('/products')}>
              See all ads
            </Button>
          </div>
        </div>
      </section>

      {/* Marketplace Info Section */}
      <section className="py-20 px-4 bg-[#0f0f0f]">
        <div className="max-w-[1075px] mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img
              src="/figmaAssets/marketplace-image.png"
              alt="Person using Global Board"
              className="rounded-2xl w-full max-w-[500px] mx-auto shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-white text-4xl font-medium leading-tight">
              Global Board World is a marketplace for all walks of life to
              offer up goods and services
            </h2>
            <p className="text-[#99999b] text-lg leading-relaxed">
              At GBW, we unite members of living areas that can share their
              skills, sell their goods, and create community around passions
              they want to progress collectively, collaboratively, and create
              value beyond the norm.
            </p>
            <Link to="/how-it-works">
              <Button className="bg-[#5648ff] text-white px-8 py-3 text-lg font-semibold hover:bg-[#4a3bdb] transition-colors">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-[1075px] mx-auto">
          <h2 className="text-white text-3xl font-medium mb-8 text-center">
            Global Board World is a marketplace for all walks of life to offer
            up goods and services
          </h2>

          <div className="grid grid-cols-3 gap-4 max-w-[600px] mx-auto">
            {categories.map((category) => {
              const Icon = iconMap[category.name] || FaBox;
              return (
                <Card
                  key={category.id}
                  className="bg-[#1f1f1f] border-none hover:bg-[#2a2a2a] transition-colors cursor-pointer"
                >
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-white text-sm font-medium">{category.name}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-white text-2xl font-medium mb-4">
            If you have any questions, feel free to contact us
          </h2>
          <p className="text-[#99999b] mb-6">
            Feel free to reach out to us for any inquiries, feedback, or
            support - our team is here to help!
          </p>
          <Button className="bg-[#5648ff] text-white">Contact Us</Button>
        </div>
      </section>
    </div>
  )
}

export default Home 