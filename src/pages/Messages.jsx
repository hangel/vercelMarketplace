import { useState } from 'react'
import { Search, MoreVertical, Send, Paperclip } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1)
  const [newMessage, setNewMessage] = useState('')

  const conversations = [
    {
      id: 1,
      name: "Alice Johnson",
      avatar: "/figmaAssets/avatar-picture.png",
      lastMessage: "Is the camera still available?",
      time: "2 min ago",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "/figmaAssets/avatar-picture.png",
      lastMessage: "Thanks for the quick delivery!",
      time: "1 hour ago",
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: "Sarah Williams",
      avatar: "/figmaAssets/avatar-picture.png",
      lastMessage: "Can you send more photos?",
      time: "Yesterday",
      unread: 1,
      online: true
    }
  ]

  const messages = [
    {
      id: 1,
      sender: "Alice Johnson",
      content: "Hi! I'm interested in your vintage camera.",
      time: "10:30 AM",
      isMe: false
    },
    {
      id: 2,
      sender: "You",
      content: "Hello! Yes, it's still available. Would you like to see more details?",
      time: "10:32 AM",
      isMe: true
    },
    {
      id: 3,
      sender: "Alice Johnson",
      content: "Is the camera still available?",
      time: "10:35 AM",
      isMe: false
    }
  ]

  const selectedConversation = conversations.find(c => c.id === selectedChat)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('')
    }
  }

  return (
    <div className="w-full h-[calc(100vh-90px)] flex">
      {/* Conversations List */}
      <div className="w-80 bg-[#1f1f1f] border-r border-[#444444] flex flex-col">
        <div className="p-4 border-b border-[#444444]">
          <h2 className="text-white text-xl font-bold mb-4">Messages</h2>
          <div className="relative">
            <Search className="w-4 h-4 text-[#595d62] absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Input
              className="pl-10 bg-[#0f0f0f] border-[#444444] text-white"
              placeholder="Search conversations..."
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedChat(conversation.id)}
              className={`p-4 border-b border-[#444444] cursor-pointer hover:bg-[#2a2a2a] transition-colors ${
                selectedChat === conversation.id ? 'bg-[#2a2a2a]' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src={conversation.avatar} 
                    alt={conversation.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {conversation.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#1f1f1f]"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-medium truncate">{conversation.name}</h3>
                    <span className="text-[#99999b] text-xs">{conversation.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[#99999b] text-sm truncate">{conversation.lastMessage}</p>
                    {conversation.unread > 0 && (
                      <span className="bg-[#5648ff] text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {conversation.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-[#1f1f1f] border-b border-[#444444] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src={selectedConversation.avatar} 
                  alt={selectedConversation.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-white font-medium">{selectedConversation.name}</h3>
                  <p className="text-[#99999b] text-sm">
                    {selectedConversation.online ? 'Online' : 'Last seen recently'}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-[#99999b]">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] p-3 rounded-lg ${
                    message.isMe 
                      ? 'bg-[#5648ff] text-white' 
                      : 'bg-[#1f1f1f] text-white'
                  }`}>
                    <p>{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.isMe ? 'text-blue-100' : 'text-[#99999b]'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 bg-[#1f1f1f] border-t border-[#444444]">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="text-[#99999b]">
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 bg-[#0f0f0f] border-[#444444] text-white"
                  placeholder="Type a message..."
                />
                <Button onClick={handleSendMessage} className="bg-[#5648ff] hover:bg-[#4a3bdb]">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white text-xl font-medium mb-2">Select a conversation</h3>
              <p className="text-[#99999b]">Choose from your existing conversations or start a new one</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Messages 