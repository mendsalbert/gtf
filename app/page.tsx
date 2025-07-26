"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Menu,
  User,
  Home,
  Monitor,
  Users,
  Heart,
  TrendingUp,
  Calendar,
  Cross,
  Waves,
  PlayIcon as Pray,
  Building,
  Play,
  MapPin,
  ChevronRight,
  HandHeart,
  Users2,
  Briefcase,
  Globe,
  Baby,
  Music,
} from "lucide-react"

export default function GTFChurch() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "/slide1.jpg",
      title: "Welcome to Growing Together Family",
      subtitle: "See what God can do through you."
    },
    {
      id: 2,
      image: "/slide2.jpg", 
      title: "Join Us for Worship",
      subtitle: "Experience the presence of God in our community"
    },
    {
      id: 3,
      image: "/slide3.jpg",
      title: "Growing Together as Family",
      subtitle: "Building meaningful relationships in Christ"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])



  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-white hover:bg-gray-800"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Image
                src="/GTF-logo.png"
                alt="GTF Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="text-lg font-display">Growing Together Family</div>
                <div className="text-xs text-gray-400 -mt-1 font-ui">FAMILY</div>
              </div>
            </div>
          </div>

          {/* <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search"
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-full"
              />
            </div>
          </div> */}

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-white hover:text-[#f56d24] transition-colors nav-text">
              Give
            </a>
            <a href="#" className="text-white hover:text-[#f56d24] transition-colors nav-text">
              Groups
            </a>
            <a href="#" className="text-white hover:text-[#f56d24] transition-colors nav-text">
              Serve
            </a>
            <a href="#" className="text-white hover:text-[#f56d24] transition-colors nav-text">
              Events
            </a>
            <a href="#" className="text-white hover:text-[#f56d24] transition-colors nav-text">
              About
            </a>
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
              <User className="h-7 w-7" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative w-80 bg-gray-900 h-full overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-6">Get Involved</h2>
              <nav className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Home className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Visit GTF</div>
                    <div className="text-sm text-gray-400">Find a location near you</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Monitor className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Live Streams</div>
                    <div className="text-sm text-gray-400">Join us from anywhere</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Users className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Groups</div>
                    <div className="text-sm text-gray-400">Relationships to grow your faith</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Heart className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Giving</div>
                    <div className="text-sm text-gray-400">Generosity in action</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <TrendingUp className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Volunteer</div>
                    <div className="text-sm text-gray-400">Serve at your local campus</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Calendar className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Events</div>
                    <div className="text-sm text-gray-400">Meaningful experiences</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Cross className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Salvation</div>
                    <div className="text-sm text-gray-400">Receive God&apos;s grace</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Waves className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Baptism</div>
                    <div className="text-sm text-gray-400">Celebrate new beginnings</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Pray className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Need Prayer?</div>
                    <div className="text-sm text-gray-400">Support through faith</div>
                  </div>
                </a>
              </nav>
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Discover</h3>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="pt-16">
        {/* Hero Section with Slideshow */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 transform scale-110 transition-transform duration-1000 hover:scale-100">
                  <Image 
                    src={slide.image} 
                    alt={`Slide ${slide.id}`} 
                    fill 
                    className="object-cover animate-ken-burns" 
                    priority={index === 0}
                    style={{
                      transform: `translateY(${index * 20}px) scale(1.1)`,
                      transition: 'transform 0.3s ease-out'
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/80" />
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-colors backdrop-blur-sm opacity-60 hover:opacity-100"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5 rotate-180" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full transition-colors backdrop-blur-sm opacity-60 hover:opacity-100"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </button> */}

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          

          <div className="relative z-10 text-center max-w-4xl px-6 md:px-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl hero-title mb-6">{slides[currentSlide].title}</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 hero-subtitle">{slides[currentSlide].subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-6 md:px-8 py-3 rounded-full font-ui">
                Get connected
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white hover:bg-white/10 px-6 md:px-8 py-3 rounded-full font-ui"
              >
                Learn more <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* How To Get Involved Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl section-title mb-6">How To Get Involved</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto section-subtitle">
                See how God can use your gifts to make an eternal impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 overflow-hidden group hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center group-hover:bg-blue-500/50 transition-colors duration-300">
                      <HandHeart className="h-8 w-8 text-blue-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Volunteer</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Participate in the mission to advance the gospel by serving on a volunteer team.
                  </p>
                  <Button variant="ghost" className="text-blue-300 hover:text-blue-200 p-0 font-ui">
                    Learn more <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 overflow-hidden group hover:from-purple-500/30 hover:to-purple-600/30 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center group-hover:bg-purple-500/50 transition-colors duration-300">
                      <Users2 className="h-8 w-8 text-purple-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Lead</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Lead an eGroup, host a Watch Party or become a student leader.
                  </p>
                  <Button variant="ghost" className="text-purple-300 hover:text-purple-200 p-0 font-ui">
                    Learn more <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 overflow-hidden group hover:from-emerald-500/30 hover:to-emerald-600/30 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-emerald-500/30 rounded-full flex items-center justify-center group-hover:bg-emerald-500/50 transition-colors duration-300">
                      <Briefcase className="h-8 w-8 text-emerald-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Jobs</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Explore job opportunities to use your gifts in a ministry setting.
                  </p>
                  <Button variant="ghost" className="text-emerald-300 hover:text-emerald-200 p-0 font-ui">
                    Learn more <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ministry Sections */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl section-title mb-6">
                Join small groups, get involved in outreach, and discover ways for your whole family to grow in their
                faith.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 overflow-hidden relative min-h-[300px] group hover:from-blue-500 hover:to-blue-600 transition-all duration-300">
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-sm text-blue-200 font-ui">eGroup Ministry</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Connecting people. Activating faith.</h3>
                  <Button variant="ghost" className="text-white hover:bg-white/10 p-0 font-ui">
                    Learn more <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-600 to-green-700 border-0 overflow-hidden relative min-h-[300px] group hover:from-green-500 hover:to-green-600 transition-all duration-300">
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-sm text-green-200 font-ui">Outreach Ministry</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6 text-white">Making an impact – locally and globally.</h3>
                  <Button variant="ghost" className="text-white hover:bg-white/10 p-0 font-ui">
                    Learn more <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="bg-gradient-to-br from-cyan-500 to-cyan-600 border-0 overflow-hidden relative min-h-[250px] group hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300">
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Baby className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm text-cyan-200 font-ui">Children&apos;s Ministry</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Partnering with parents to develop kids&apos; faith.</h3>
                  <Button variant="ghost" className="text-white hover:bg-white/10 p-0 font-ui">
                    Learn more <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-0 overflow-hidden relative min-h-[250px] group hover:from-gray-700 hover:to-gray-800 transition-all duration-300">
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm text-gray-300 font-ui">Youth Ministry</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Developing youth who influence culture.</h3>
                  <Button variant="ghost" className="text-white hover:bg-white/10 p-0 font-ui">
                    Learn more <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 border-0 overflow-hidden relative min-h-[250px] group hover:from-orange-400 hover:to-orange-500 transition-all duration-300">
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Users2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm text-orange-200 font-ui">Young Adult Ministry</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Building community. Deepening faith.</h3>
                  <Button variant="ghost" className="text-white hover:bg-white/10 p-0 font-ui">
                    Learn more <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-0 overflow-hidden relative group hover:from-purple-500 hover:to-purple-600 transition-all duration-300">
              <CardContent className="p-12 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <Music className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-sm text-purple-200 font-ui">Worship Ministry</div>
                </div>
                <h3 className="text-4xl font-bold mb-6 max-w-3xl text-white">
                  Inspiring your faith and creating an atmosphere of worship to God.
                </h3>
                <Button variant="ghost" className="text-white hover:bg-white/10 p-0 font-ui">
                  Learn more <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Discover Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl section-title mb-6">Discover more ways to connect</h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto section-subtitle">
                There are always new ways to participate in what God is doing through our church, including events,
                tours, worship music, and so much more.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-amber-100 to-amber-200 border-0 overflow-hidden">
                <div className="relative">
                  <Image
                    src="/slide3.jpg"
                    alt="Reflect Event"
                    width={800}
                    height={400}
                    className="w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-black">
                    <div className="text-2xl font-bold font-display">19 SEPT</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Find Experience Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl section-title mb-6">Find the right experience for you.</h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto section-subtitle">
                No matter where you are, online or in person, become a part of all God is doing.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="mb-6">
                  <Building className="h-12 w-12 mx-auto text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 card-title">Physical Campus</h3>
                <p className="text-gray-400 mb-6 card-text">Worship with us in person at one of our physical campuses.</p>
                <Button variant="ghost" className="text-white hover:text-[#f56d24] p-0 font-ui">
                  Find a location <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <Play className="h-12 w-12 mx-auto text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 card-title">Live Streams</h3>
                <p className="text-gray-400 mb-6 card-text">
                  eFam is our online community who stream church from wherever they are.
                </p>
                <Button variant="ghost" className="text-white hover:text-[#f56d24] p-0 font-ui">
                  Find a time <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <Users className="h-12 w-12 mx-auto text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 card-title">Watch Party</h3>
                <p className="text-gray-400 mb-6 card-text">
                  Watch Parties are groups of eFam that stream the worship experience together.
                </p>
                <Button variant="ghost" className="text-white hover:text-[#f56d24] p-0 font-ui">
                  Find a watch party <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="text-center">
                <div className="mb-6">
                  <MapPin className="h-12 w-12 mx-auto text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 card-title">Pop-Up</h3>
                <p className="text-gray-400 mb-6 card-text">
                  A Pop-Up is where we bring church to different cities across the nation.
                </p>
                <Button variant="ghost" className="text-white hover:text-[#f56d24] p-0 font-ui">
                  Find a pop-up <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-full font-ui">
                View locations <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
