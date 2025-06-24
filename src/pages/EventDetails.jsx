import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, MapPin, Clock, Users, Share } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const EventDetails = () => {
  const { id } = useParams()

  const event = {
    id: parseInt(id),
    title: "Tech Meetup: React & Next.js Best Practices",
    organizer: "NYC Tech Community",
    date: "December 15, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "WeWork Times Square, New York, NY",
    attendees: 127,
    capacity: 200,
    price: "Free",
    category: "Technology",
    description: "Join us for an exciting evening discussing the latest React and Next.js best practices. This meetup is perfect for developers of all skill levels who want to stay up-to-date with modern web development trends.",
    agenda: [
      { time: "6:00 PM", activity: "Registration & Networking" },
      { time: "6:30 PM", activity: "Welcome & Introductions" },
      { time: "7:00 PM", activity: "React Performance Optimization" },
      { time: "7:45 PM", activity: "Next.js 14 New Features" },
      { time: "8:30 PM", activity: "Q&A Session" },
      { time: "9:00 PM", activity: "Closing & Networking" }
    ],
    speakers: [
      {
        name: "John Smith",
        title: "Senior React Developer",
        company: "Meta",
        avatar: "/figmaAssets/avatar-picture.png"
      },
      {
        name: "Sarah Johnson",
        title: "Full Stack Engineer",
        company: "Vercel",
        avatar: "/figmaAssets/avatar-picture.png"
      }
    ]
  }

  return (
    <div className="w-full py-8 px-4">
      <div className="max-w-[800px] mx-auto">
        <Link to="/explore" className="inline-flex items-center text-[#5648ff] hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Link>

        {/* Event Header */}
        <Card className="bg-[#1f1f1f] border-none mb-6">
          <CardContent className="p-0">
            <div className="aspect-video w-full bg-[#2a2a2a] rounded-t-lg overflow-hidden">
              <img
                src="/figmaAssets/event-banner.png"
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h1 className="text-white text-2xl font-bold mb-2">{event.title}</h1>
                  <p className="text-[#5648ff] font-medium mb-4">Organized by {event.organizer}</p>
                  <div className="grid grid-cols-2 gap-4 text-[#99999b] text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {event.attendees}/{event.capacity} attending
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#5648ff] text-2xl font-bold mb-4">{event.price}</p>
                  <div className="flex gap-2">
                    <Button className="bg-[#5648ff] hover:bg-[#4a3bdb]">
                      Attend Event
                    </Button>
                    <Button variant="outline" size="icon" className="border-[#444444] text-white">
                      <Share className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Progress bar for capacity */}
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#99999b]">Event Capacity</span>
                  <span className="text-white">{event.attendees}/{event.capacity}</span>
                </div>
                <div className="w-full bg-[#0f0f0f] rounded-full h-2">
                  <div 
                    className="bg-[#5648ff] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {/* Description */}
          <Card className="bg-[#1f1f1f] border-none">
            <CardHeader>
              <CardTitle className="text-white">About This Event</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#99999b] leading-relaxed">{event.description}</p>
            </CardContent>
          </Card>

          {/* Agenda */}
          <Card className="bg-[#1f1f1f] border-none">
            <CardHeader>
              <CardTitle className="text-white">Event Agenda</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {event.agenda.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-20 text-[#5648ff] font-medium text-sm">{item.time}</div>
                    <div className="flex-1 text-white">{item.activity}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Speakers */}
          <Card className="bg-[#1f1f1f] border-none">
            <CardHeader>
              <CardTitle className="text-white">Featured Speakers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-[#0f0f0f] rounded-lg">
                    <img 
                      src={speaker.avatar} 
                      alt={speaker.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-white font-medium">{speaker.name}</h3>
                      <p className="text-[#99999b] text-sm">{speaker.title}</p>
                      <p className="text-[#5648ff] text-sm">{speaker.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default EventDetails 