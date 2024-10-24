import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, Menu, Home, Settings, HelpCircle } from "lucide-react"

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
    { text: "Hi! I have a question about your services.", sender: "user" },
    { text: "Of course! I'd be happy to help. What would you like to know?", sender: "bot" },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { text: inputMessage, sender: "user" }])
      setInputMessage("")
      // Simulate bot response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: "Thank you for your message. How else can I help you?", sender: "bot" }])
      }, 1000)
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-4">
          <h1 className="text-2xl font-bold flex items-center">
            <MessageCircle className="mr-2" />
            ChatBot
          </h1>
        </div>
        <nav className="mt-8">
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-200">
            <Home className="mr-2" />
            Home
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <Settings className="mr-2" />
            Settings
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
            <HelpCircle className="mr-2" />
            Help
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b p-4 flex items-center">
          <Button variant="ghost" size="icon" className="md:hidden mr-2">
            <Menu />
          </Button>
          <h2 className="text-xl font-semibold">Chat with AI Assistant</h2>
        </header>

        {/* Chat area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-sm rounded-lg p-3 ${
                    message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message input */}
        <div className="border-t p-4">
          <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex space-x-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}