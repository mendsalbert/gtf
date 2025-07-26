"use client"

import { Button } from "@/components/ui/button"
import { AlignJustify } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Component() {
  const [currentWord, setCurrentWord] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const words = ["FAMILY", "FAITH", "LOVE"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-[#f56d24] text-white text-center py-3 px-4">
        <p className="text-sm">
          Join us for our Sunday service and experience the love of God in our community!{" "}
          <Link href="#" className="underline font-medium">
            Plan Your Visit
          </Link>
        </p>
      </div>

      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/GTF-logo.png"
                alt="GTF Logo"
                width={60}
                height={60}
                className="w-18 h-18 object-contain"
              />
            </div>

            {/* Centered Navigation Menu */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                <Link href="#" className="text-gray-700 hover:text-[#f56d24] font-medium">
                  About
                </Link>
                <Link href="#" className="text-gray-700 hover:text-[#f56d24] font-medium">
                  Connect
                </Link>
                <Link href="#" className="text-gray-700 hover:text-[#f56d24] font-medium">
                  Sermons
                </Link>
                <Link href="#" className="text-gray-700 hover:text-[#f56d24] font-medium">
                  Give
                </Link>
                <Button variant="outline" className="border-[#f56d24] rounded-full text-[#f56d24] hover:bg-orange-50 bg-transparent">
                  VISIT
                </Button>
              </div>
            </nav>

            {/* Right side - Menu button (Desktop) */}
            <div className="hidden md:flex items-center">
              <Button variant="ghost" className="text-gray-700 hover:bg-gray-50">
                <span className="mr-2 text-sm font-medium">MENU</span>
                <AlignJustify className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile - only show VISIT and MENU */}
            <div className="md:hidden flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-[#f56d24] text-[#f56d24] rounded-full hover:bg-orange-50 bg-transparent"
              >
                VISIT
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-700">
                <span className="mr-1 text-sm font-medium">MENU</span>
                <AlignJustify className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative bg-white overflow-hidden">
        {/* Texture Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100"></div>
        </div>
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-transparent to-orange-50/30"></div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-gray-300 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-gray-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-gray-300 rounded-full"></div>
        </div>

        {/* Additional Texture Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 right-40 w-16 h-16 border border-gray-400 rounded-full"></div>
          <div className="absolute bottom-40 left-40 w-20 h-20 border border-gray-400 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 border border-gray-400 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-[#f56d24] font-medium text-sm tracking-wider uppercase mb-6">GROWING TOGETHER FAMILY</p>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            GROWING TOGETHER
            <br />
            AS{" "}
            <span className="relative inline-block">
              <span 
                className={`text-[#f56d24] transition-all duration-300 ease-in-out ${
                  isAnimating ? 'opacity-0 blur-sm -translate-y-2' : 'opacity-100 blur-0 translate-y-0'
                }`}
              >
                {words[currentWord]}
              </span>
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            GTF is a church family that grows in faith together, worships God, serves our community, and builds meaningful relationships in Christ.
          </p>

          <Button className="bg-[#f56d24] hover:bg-[#e55a1a] text-white px-8 py-6 text-xl font-semibold rounded-full">
            VISIT
          </Button>
        </div>

        {/* Dynamic Community Gallery */}
        <div className="relative py-16 bg-gradient-to-br from-orange-50/30 via-transparent to-orange-50/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-[#f56d24]">Family</span> in Action
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                See how we&apos;re growing together, serving together, and celebrating life together
              </p>
            </div>

            {/* Gallery Container */}
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-4 h-4 bg-[#f56d24]/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-6 h-6 bg-[#f56d24]/15 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[#f56d24]/25 rounded-full animate-pulse delay-500"></div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Large Featured Image */}
                <div className="lg:col-span-2 relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">
                    <Image
                      src="/slide1.jpg"
                      alt="Church community celebration"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Sunday Worship</h3>
                      <p className="text-white/90">Celebrating together in unity</p>
                    </div>
                  </div>
                </div>

                {/* Medium Image */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                    <Image
                      src="/slide2.jpg"
                      alt="Small group discussion"
                      width={400}
                      height={300}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-lg font-semibold mb-1">Small Groups</h3>
                      <p className="text-white/90 text-sm">Growing in faith together</p>
                    </div>
                  </div>
                </div>

                {/* Small Image 1 */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
                    <Image
                      src="/slide3.jpg"
                      alt="Children's ministry"
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-base font-semibold">Kids Ministry</h3>
                    </div>
                  </div>
                </div>

                {/* Small Image 2 */}
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
                    <Image
                      src="/slide1.jpg"
                      alt="Youth group"
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-base font-semibold">Youth Group</h3>
                    </div>
                  </div>
                </div>

                {/* Medium Image 2 */}
                <div className="lg:col-span-2 relative group">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                    <Image
                      src="/slide2.jpg"
                      alt="Community outreach"
                      width={600}
                      height={300}
                      className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Community Outreach</h3>
                      <p className="text-white/90">Serving our neighbors with love</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <Button className="bg-[#f56d24] hover:bg-[#e55a1a] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Join Our Family
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Get Involved Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How to Get <span className="text-[#f56d24]">Involved</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Join small groups, get involved in outreach, and discover ways for your whole family to grow in their faith.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Small Groups */}
              <div className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f56d24]/20 to-[#f56d24]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#f56d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Small Groups</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Connect deeply with others in intimate settings where you can share life, study God&apos;s Word, and grow together in faith.
                  </p>
                  <Button variant="outline" className="border-[#f56d24] text-[#f56d24] hover:bg-[#f56d24] hover:text-white transition-all duration-300">
                    Find a Group
                  </Button>
                </div>
              </div>

              {/* Outreach */}
              <div className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f56d24]/20 to-[#f56d24]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#f56d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Community Outreach</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Serve our neighbors with love through various outreach programs, food drives, and community service initiatives.
                  </p>
                  <Button variant="outline" className="border-[#f56d24] text-[#f56d24] hover:bg-[#f56d24] hover:text-white transition-all duration-300">
                    Serve Together
                  </Button>
                </div>
              </div>

              {/* Family Ministry */}
              <div className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f56d24]/20 to-[#f56d24]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#f56d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Family Ministry</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Strengthen your family bonds through dedicated programs for parents, children, and youth that nurture faith at every age.
                  </p>
                  <Button variant="outline" className="border-[#f56d24] text-[#f56d24] hover:bg-[#f56d24] hover:text-white transition-all duration-300">
                    Family Programs
                  </Button>
                </div>
              </div>

              {/* Worship Team */}
              <div className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f56d24]/20 to-[#f56d24]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#f56d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Worship Team</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Use your musical gifts to lead our congregation in worship through singing, playing instruments, or technical support.
                  </p>
                  <Button variant="outline" className="border-[#f56d24] text-[#f56d24] hover:bg-[#f56d24] hover:text-white transition-all duration-300">
                    Join Worship
                  </Button>
                </div>
              </div>

              {/* Prayer Ministry */}
              <div className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f56d24]/20 to-[#f56d24]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#f56d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Prayer Ministry</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Intercede for others through our prayer team, prayer chains, and dedicated prayer times that strengthen our community.
                  </p>
                  <Button variant="outline" className="border-[#f56d24] text-[#f56d24] hover:bg-[#f56d24] hover:text-white transition-all duration-300">
                    Pray Together
                  </Button>
                </div>
              </div>

              {/* Welcome Team */}
              <div className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#f56d24]/20 to-[#f56d24]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#f56d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Welcome Team</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Be the first friendly face visitors see by greeting, ushering, and helping create a warm, welcoming environment.
                  </p>
                  <Button variant="outline" className="border-[#f56d24] text-[#f56d24] hover:bg-[#f56d24] hover:text-white transition-all duration-300">
                    Welcome Others
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-16 shadow-2xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-[#f56d24] rounded-full blur-xl"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#f56d24] rounded-full blur-xl"></div>
                  <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#f56d24] rounded-full blur-xl"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f56d24] rounded-full mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Join Our <span className="text-[#f56d24]">Family</span> Today
                  </h3>
                  
                  <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                    Ready to take the next step? Whether you&apos;re new to faith or looking to deepen your involvement, 
                    we have a place for you in our growing family.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="w-12 h-12 bg-[#f56d24] rounded-lg flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="text-white font-semibold mb-2">Connect</h4>
                      <p className="text-gray-300 text-sm">Meet new friends and build meaningful relationships</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="w-12 h-12 bg-[#f56d24] rounded-lg flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h4 className="text-white font-semibold mb-2">Grow</h4>
                      <p className="text-gray-300 text-sm">Deepen your faith through study and community</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <div className="w-12 h-12 bg-[#f56d24] rounded-lg flex items-center justify-center mb-4 mx-auto">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="text-white font-semibold mb-2">Serve</h4>
                      <p className="text-gray-300 text-sm">Use your gifts to bless others and make a difference</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-[#f56d24] hover:bg-[#e55a1a] text-white px-10 py-5 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-[#f56d24] hover:border-[#e55a1a]">
                      Start Your Journey
                    </Button>
                    {/* <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-10 py-5 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                      Schedule a Visit
                    </Button> */}
                  </div>
                  
                  <p className="text-gray-400 text-sm mt-6">
                    No pressure, no commitment. Just come as you are.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
