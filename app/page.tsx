"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { AlignJustify, Apple, Play } from "lucide-react"

const NAV_LINKS = ["About", "Connect", "Sermons", "Bible Study", "Devotional", "Give"]

const FEATURES = [
  { id: 0, label: "Join a small group and grow in community" },
  { id: 1, label: "Access sermons and devotions anytime" },
  { id: 2, label: "Serve and make a difference locally" },
  { id: 3, label: "Stay connected with church messaging" },
  { id: 4, label: "Find programs for every age and stage" },
]

const TESTIMONIALS = [
  {
    text: "GTF has made such a huge impact on our family. We've grown so much in our faith and found a real home here.",
    author: "Sarah M.",
  },
  {
    text: "Growing Together Family has been a pivotal part of our week-to-week discipleship. The community is incredible.",
    author: "James & Linda K.",
  },
  {
    text: "We went from strangers to family. The small groups changed our lives and brought us closer to God.",
    author: "David T.",
  },
]

const WORDS = ["FAMILY", "FAITH", "PURPOSE"]

export default function GTFHome() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [currentWord, setCurrentWord] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % WORDS.length)
        setIsAnimating(false)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white font-body">

      {/* ── TOP BANNER ── */}
      <div className="bg-[#f56d24] text-white text-center py-2.5 px-4">
        <p className="text-sm font-medium tracking-wide">
          Join us this Sunday and experience the love of God with our community!{" "}
          <Link href="#" className="underline underline-offset-2 font-semibold">
            Plan Your Visit →
          </Link>
        </p>
      </div>

      {/* ── NAVIGATION ── */}
      <header className="bg-[#111111] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] gap-8">

            {/* Logo + name */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/GTF-logo.png"
                alt="GTF Logo"
                width={56}
                height={56}
                className="object-contain"
              />
              <div className="hidden sm:block">
                <p className="font-display text-sm font-black uppercase text-white leading-tight tracking-wide">Growing Together Family</p>
                <p className="font-body text-[10px] text-[#f56d24] tracking-widest uppercase leading-none">GTF Church · Ghana</p>
              </div>
            </Link>

            {/* Center Nav */}
            <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors duration-200 whitespace-nowrap"
                >
                  {link}
                </Link>
              ))}
            </nav>

            {/* Right — single CTA */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="#"
                className="hidden lg:inline-block bg-[#f56d24] text-white text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full hover:bg-[#e55a1a] transition-all duration-200"
              >
                PLAN A VISIT
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white p-1"
                aria-label="Menu"
              >
                <AlignJustify className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-[#1a1a1a] border-t border-white/10 px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link}
                href="#"
                className="block text-gray-300 text-xs font-semibold tracking-widest uppercase py-1.5"
              >
                {link}
              </Link>
            ))}
            <Link
              href="#"
              className="inline-block mt-2 bg-[#f56d24] text-white text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full"
            >
              PLAN A VISIT
            </Link>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 items-stretch py-10">

            {/* Left: Text */}
            <div className="flex flex-col justify-center py-4">
              <p className="font-display text-xs font-bold tracking-widest uppercase text-[#f56d24] mb-4">
                Welcome to Growing Together Family
              </p>
              <h1 className="font-display font-black uppercase leading-[0.88] text-gray-900 mb-5">
                <span className="block text-[14vw] sm:text-[9vw] lg:text-[5.5vw]">GROWING</span>
                <span className="block text-[14vw] sm:text-[9vw] lg:text-[5.5vw]">TOGETHER</span>
                <span className="block text-[14vw] sm:text-[9vw] lg:text-[5.5vw] text-[#f56d24]">
                  AS{" "}
                  <span className={`inline-block transition-all duration-300 ${isAnimating ? "opacity-0 -translate-y-2 blur-sm" : "opacity-100 translate-y-0 blur-none"}`}>
                    {WORDS[currentWord]}
                  </span>
                </span>
              </h1>

              <p className="font-display text-sm font-bold uppercase text-gray-700 mb-1 tracking-wide">
                Free Resources for kids, youth, adults &amp; families
              </p>
              <p className="font-body text-gray-500 text-base leading-relaxed max-w-md mb-8">
                A church family that grows in faith together, worships God wholeheartedly, serves our community, and builds meaningful relationships in Christ.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="#"
                  className="bg-[#111111] text-white font-display text-xs font-bold tracking-widest uppercase px-7 py-3.5 rounded-full hover:bg-[#f56d24] transition-all duration-300"
                >
                  PLAN YOUR VISIT
                </Link>
                <Link
                  href="#"
                  className="border-2 border-gray-200 text-gray-700 font-display text-xs font-bold tracking-widest uppercase px-7 py-3.5 rounded-full hover:border-[#f56d24] hover:text-[#f56d24] transition-all duration-300"
                >
                  GET INVOLVED
                </Link>
              </div>

              <div>
                <p className="font-body text-xs text-gray-400 uppercase tracking-widest mb-3">Mobile App Available On</p>
                <div className="flex items-center gap-5">
                  <Link href="#" className="flex items-center gap-1.5 text-gray-600 hover:text-[#f56d24] transition-colors">
                    <Apple className="h-5 w-5" />
                    <span className="font-body text-sm font-medium">App Store</span>
                  </Link>
                  <Link href="#" className="flex items-center gap-1.5 text-gray-600 hover:text-[#f56d24] transition-colors">
                    <Play className="h-4 w-4 fill-current" />
                    <span className="font-body text-sm font-medium">Google Play</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Framed image + floating cards */}
            <div className="relative min-h-[460px] lg:min-h-0 lg:h-auto self-stretch">
              {/* Background floating image — top left, behind everything */}
              <div className="absolute -left-10 -top-6 w-[190px] h-[210px] rounded-2xl overflow-hidden shadow-lg border-3 border-white/80 z-0 opacity-70">
                <Image src="/families.jpg" alt="Families" fill className="object-cover" />
              </div>

              {/* Gradient border frame — fills full column height */}
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-orange-300 via-[#f56d24]/50 to-purple-300/80 p-2.5 z-10">
                {/* Main image */}
                <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-[0_0_50px_20px_rgba(245,109,36,0.3)]">
                  <Image
                    src="/hero.jpg"
                    alt="GTF Church Family"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating card — top center */}
              <div className="absolute left-1/2 -top-10 transform -translate-x-1/2 w-[190px] h-[210px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
                <Image src="/kids.jpg" alt="Kids" fill className="object-cover" />
              </div>

              {/* Floating card — bottom left */}
              <div className="absolute -left-8 -bottom-10 w-[200px] h-[230px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20">
                <Image src="/youth.jpg" alt="Youth" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTENTIONAL DISCIPLESHIP SECTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-gray-900 mb-4">
              Intentionally grow your{" "}
              <span className="text-[#f56d24]">faith</span>
            </h2>
            <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">
              Every program, every group, and every service at GTF works together providing you with
              an intentional discipleship strategy for all ages.
            </p>
            <Link
              href="#"
              className="inline-block mt-8 bg-[#111111] text-white font-display text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-[#f56d24] transition-all duration-300"
            >
              EXPLORE OUR COMMUNITY
            </Link>
          </div>

          {/* Two-column cards — full image covers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Small Groups */}
            <div className="relative rounded-3xl overflow-hidden min-h-[420px] group">
              <Image
                src="/grow-together-comm.jpg"
                alt="Small groups"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <span className="inline-block self-start bg-white/15 backdrop-blur-sm border border-white/20 text-white font-display text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                  Small Groups
                </span>
                <div>
                  <h3 className="font-display text-4xl font-black uppercase text-white leading-tight mb-4">
                    Grow Together<br />in Community
                  </h3>
                  <div className="space-y-2 mb-6">
                    {["3-year scope and growing", "Available in English & Spanish", "For all ages — kids, youth, adults"].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#f56d24] flex-shrink-0"></div>
                        <p className="font-body text-sm text-white/80">{item}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="#"
                    className="inline-block bg-[#f56d24] text-white font-display text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#e55a1a] transition-all duration-300"
                  >
                    FIND A GROUP
                  </Link>
                </div>
              </div>
            </div>

            {/* Sunday Services */}
            <div className="relative rounded-3xl overflow-hidden min-h-[420px] group">
              <Image
                src="/worship.jpg"
                alt="Sunday services"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <span className="inline-block self-start bg-white/15 backdrop-blur-sm border border-white/20 text-white font-display text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                  Sunday Services
                </span>
                <div>
                  <h3 className="font-display text-4xl font-black uppercase text-white leading-tight mb-4">
                    Worship With<br />Your Family
                  </h3>
                  <p className="font-body text-white/75 text-sm leading-relaxed mb-6 max-w-xs">
                    Messages focused on particular topics, special events, and seasonal series for every age.
                  </p>
                  <Link
                    href="#"
                    className="inline-block bg-white text-gray-900 font-display text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#f56d24] hover:text-white transition-all duration-300"
                  >
                    JOIN US SUNDAY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES LIST SECTION ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Interactive list */}
            <div>
              <p className="text-[#f56d24] font-display text-sm font-bold tracking-widest uppercase mb-4">
                Everything you need
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-gray-900 mb-10 leading-none">
                Our community
                <br />
                resources
              </h2>
              <div className="divide-y divide-gray-200">
                {FEATURES.map((f, idx) => (
                  <button
                    key={f.id}
                    onMouseEnter={() => setActiveFeature(idx)}
                    onClick={() => setActiveFeature(idx)}
                    className={`w-full text-left py-5 transition-all duration-200 group ${activeFeature === idx ? "" : ""
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <p
                        className={`font-body text-lg transition-all duration-200 ${activeFeature === idx
                          ? "text-gray-900 font-semibold"
                          : "text-gray-500 font-normal"
                          }`}
                      >
                        {f.label}
                      </p>
                      <div
                        className={`w-2 h-2 rounded-full transition-all duration-200 flex-shrink-0 ml-4 ${activeFeature === idx ? "bg-[#f56d24] scale-125" : "bg-gray-300"
                          }`}
                      />
                    </div>
                    {activeFeature === idx && (
                      <div className="mt-1 h-0.5 bg-[#f56d24] rounded-full w-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Image mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#f56d24]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <Image
                  src="/ourcommunityreseource.jpg"
                  alt="Community resources"
                  width={480}
                  height={400}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl relative z-10"
                />
                {/* Feature label */}
                <div className="mt-6 bg-white rounded-2xl p-4 shadow-md relative z-10">
                  <p className="font-display text-lg font-bold uppercase text-gray-900">
                    {FEATURES[activeFeature].label}
                  </p>
                  <p className="font-body text-sm text-gray-500 mt-1">
                    Available for all members of our GTF family free, always.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GET ALL AGES SECTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-gray-900 mb-4">
              Get all ages on the{" "}
              <span className="text-[#f56d24]">same page</span>
            </h2>
            <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">
              Each age level follows the same scope and sequence so everyone in your family is
              growing in faith together at the same time.
            </p>
          </div>

          {/* 4-image collage */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/kids.jpg", label: "Kids" },
              { src: "/youth.jpg", label: "Youth" },
              { src: "/adults.jpg", label: "Adults" },
              { src: "/families.jpg", label: "Families" },
            ].map((item, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-2xl group aspect-[3/4]">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="font-display text-xl font-black uppercase text-white">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-gray-900 mb-4">
              What people are saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <p className="font-body text-gray-700 text-lg leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#f56d24]/20 flex items-center justify-center">
                    <span className="font-display text-sm font-bold text-[#f56d24]">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                  <span className="font-body text-sm font-semibold text-gray-900">{t.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVAILABLE / PARTNERS SECTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Two dedicated images stacked */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 relative rounded-2xl overflow-hidden h-72">
                <Image src="/available-for-free-.jpg" alt="Available for free" fill className="object-cover object-top" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-52">
                <Image src="/availableforfree2.jpg" alt="Community giving" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-52 bg-[#111111] flex items-end p-5">
                <div>
                  <p className="font-display text-3xl font-black uppercase text-white leading-none mb-1">Free<br/>Always</p>
                  <p className="font-body text-white/50 text-xs leading-relaxed">For every family, every age.</p>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-gray-900 leading-none mb-6">
                Available for free
                <br />
                because of our{" "}
                <span className="text-[#f56d24]">generous</span>
                <br />
                community
              </h2>
              <p className="font-body text-gray-500 text-lg leading-relaxed mb-8">
                GTF resources are free to every family because our generous church partners and
                donors make it possible. Every gift helps us reach more people with the Gospel.
              </p>
              <Link
                href="#"
                className="inline-block bg-[#111111] text-white font-display text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-[#f56d24] transition-all duration-300"
              >
                GIVE NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAMILY DEVOTIONS CTA ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-gray-900 leading-none mb-6">
                Equip families to
                <br />
                lead faith conversations
                <br />
                <span className="text-[#f56d24]">at home</span>
              </h2>
              <p className="font-body text-gray-500 text-lg leading-relaxed mb-8">
                Our family devotions align with our Sunday curriculum and equip parents to have an
                active role in their kids&apos; faith journey with discussion questions and
                scripture-reading prompts.
              </p>
              <Link
                href="#"
                className="inline-block bg-[#f56d24] text-white font-display text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-[#e55a1a] transition-all duration-300"
              >
                CREATE A FREE ACCOUNT
              </Link>
            </div>

            {/* Right: 3 photos */}
            <div className="grid grid-cols-3 gap-4">
              {["/families.jpg", "/kids.jpg", "/youth.jpg"].map((src, i) => (
                <div key={i} className={`relative rounded-2xl overflow-hidden ${i === 1 ? "mt-6" : ""}`} style={{ height: "280px" }}>
                  <Image src={src} alt="Family" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST SERMONS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#f56d24] font-display text-xs font-bold tracking-widest uppercase">Messages</span>
                <span className="text-gray-300 text-xs">·</span>
                <span className="text-gray-400 font-display text-xs font-bold tracking-widest uppercase">Pastor Benjamin Odei Nyarko</span>
              </div>
              <div className="w-10 h-0.5 bg-[#f56d24] mb-4"></div>
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-gray-900 leading-none">
                Latest Sermons
              </h2>
            </div>
            <Link
              href="#"
              className="hidden md:inline-flex items-center gap-2 bg-[#111111] text-white font-display text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#f56d24] transition-all duration-300"
            >
              ALL SERMONS
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          </div>

          {/* Top 3 sermon cards — clean, no coloured borders */}

          {/* Recent sermon list */}
          <div className="rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {[
              { title: "Torchbearers I: In the Palace", date: "Feb 3, 2026", plays: "3.9K plays" },
              { title: "The Entrance of Light", date: "Jan 28, 2026", plays: "3.7K plays" },
              { title: "Walking in Greater Light", date: "Jan 21, 2026", plays: "2.8K plays" },
            ].map((s) => (
              <div key={s.title} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer group bg-white">
                <button className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#f56d24] transition-colors">
                  <svg className="w-3.5 h-3.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div className="flex-1 min-w-0">
                  <p className="font-display text-lg font-black uppercase text-gray-900 group-hover:text-[#f56d24] transition-colors">{s.title}</p>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="font-body text-xs text-gray-400">{s.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <div className="flex items-center gap-1 text-gray-400">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="font-body text-xs">{s.plays}</span>
                    </div>
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#f56d24] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIG INTO THE WORD ── */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header — left-aligned editorial style */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#f56d24] font-display text-xs font-bold tracking-widest uppercase">Bible Studies</span>
                <span className="text-gray-300 text-xs">·</span>
                <span className="text-gray-400 font-display text-xs font-bold tracking-widest uppercase">MTE 2025</span>
              </div>
              <div className="w-10 h-0.5 bg-[#f56d24] mb-5"></div>
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-gray-900 leading-none">
                Dig into<br />the Word
              </h2>
            </div>
            <p className="font-body text-gray-500 text-base leading-relaxed lg:pb-2">
              These studies come from our Mountain Top Experience program — rich teachings designed to help you grow deeper in your understanding of God.
            </p>
          </div>

          {/* Study cards — horizontal wide layout */}
          <div className="space-y-6">
            {[
              {
                tag: "Bible Study I",
                num: "01",
                title: "The Hope of God's Children",
                verse: "Romans 8:18–25",
                memory: "\"For the earnest expectation of the creature waiteth for the manifestation of the sons of God.\" (Romans 8:19 KJV)",
                body: "Biblical hope is central to faith. Paul places present suffering in contrast with future glory. The sufferings of this present time are not worth comparing with the glory that will be revealed.",
                question: "How is biblical hope different from worldly hope? (Romans 8:24–25, Hebrews 11:1)",
              },
              {
                tag: "Bible Study II",
                num: "02",
                title: "Identity: Lost & Found",
                verse: "Luke 15:11–32 & Galatians 4:1–7",
                memory: "\"For this my son was dead, and is alive again: he was lost, and is found.\" (Luke 15:24 KJV)",
                body: "The prodigal son parable contrasts two distorted views of identity. Identity is never earned — it is bestowed by a Father who has always loved us as His own.",
                question: "How does God define who we are? (Psalm 139:13–14, 1 John 3:1)",
              },
            ].map((study) => (
              <div key={study.tag} className="grid grid-cols-1 lg:grid-cols-[280px_1fr] rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 group">
                {/* Left panel — dark */}
                <div className="bg-[#0d1b2a] p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-[#f56d24] font-display text-xs font-bold tracking-widest uppercase mb-4">{study.tag}</p>
                    <p className="font-display text-[4rem] font-black text-white/10 leading-none mb-4 select-none">{study.num}</p>
                    <h3 className="font-display text-2xl font-black uppercase text-white leading-tight mb-2">{study.title}</h3>
                    <p className="font-body text-white/40 text-xs italic">{study.verse}</p>
                  </div>
                  <Link href="#" className="mt-8 inline-flex items-center gap-2 text-[#f56d24] font-display text-xs font-bold tracking-widest uppercase group-hover:gap-3 transition-all duration-200">
                    Read Full Study
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </Link>
                </div>

                {/* Right panel — content */}
                <div className="p-8 flex flex-col justify-center space-y-5">
                  <p className="font-body text-gray-600 text-sm leading-relaxed">{study.body}</p>
                  <div className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#f56d24]/10 text-[#f56d24] font-display text-xs font-black rounded-full flex items-center justify-center mt-0.5">Q</span>
                    <p className="font-body text-gray-500 text-sm leading-relaxed">{study.question}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GENEROSITY ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image card */}
            <div className="relative rounded-2xl overflow-hidden min-h-[440px]">
              <Image src="/worship.jpg" alt="Generosity" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[#f56d24] font-display text-xs font-bold tracking-widest uppercase mb-2">Support the Mission</p>
                <h3 className="font-display text-3xl font-black uppercase text-white leading-tight mb-5">Give with a Cheerful Heart</h3>
                <Link
                  href="#"
                  className="inline-block bg-[#f56d24] text-white font-display text-sm font-bold tracking-widest uppercase px-8 py-3.5 rounded-full hover:bg-[#e55a1a] transition-all duration-300"
                >
                  GIVE ONLINE
                </Link>
              </div>
            </div>

            {/* Right */}
            <div>
              <p className="text-[#f56d24] font-display text-xs font-bold tracking-widest uppercase mb-3">Generosity</p>
              <div className="w-10 h-0.5 bg-[#f56d24] mb-6"></div>
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-gray-900 leading-none mb-5">
                Your giving
                <br />
                changes lives
              </h2>
              <p className="font-body text-gray-500 text-base leading-relaxed mb-10">
                We believe generosity is an act of worship. Here is how your contributions make a real difference.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Community Outreach",
                    desc: "Supporting local families through food programs, practical aid, and compassionate ministry.",
                    bg: "bg-[#f56d24]/10",
                    icon: (
                      <svg className="w-5 h-5 text-[#f56d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Youth & Kids Ministry",
                    desc: "Investing in the next generation with faith-filled programs that shape character and purpose.",
                    bg: "bg-blue-50",
                    icon: (
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    ),
                  },
                  {
                    title: "Missions & Evangelism",
                    desc: "Spreading the Gospel locally and globally through partnerships and mission initiatives.",
                    bg: "bg-green-50",
                    icon: (
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                ].map((area) => (
                  <div key={area.title} className="flex items-start gap-4">
                    <div className={`${area.bg} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-black uppercase text-gray-900 mb-1">{area.title}</h4>
                      <p className="font-body text-gray-500 text-sm leading-relaxed">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#111111] py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#f56d24] font-display text-sm font-bold tracking-widest uppercase mb-4">
            You belong here
          </p>
          <h2 className="font-display text-6xl md:text-8xl font-black uppercase text-white leading-none mb-6">
            Join our
            <br />
            <span className="text-[#f56d24]">family</span>
            <br />
            today
          </h2>
          <p className="font-body text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you&apos;re new to faith or looking to go deeper we have a place for you.
            No pressure, no commitment. Just come as you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="bg-[#f56d24] text-white font-display text-sm font-bold tracking-widest uppercase px-10 py-4 rounded-full hover:bg-[#e55a1a] transition-all duration-300"
            >
              START YOUR JOURNEY
            </Link>
            <Link
              href="#"
              className="border-2 border-white/30 text-white font-display text-sm font-bold tracking-widest uppercase px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              PLAN A VISIT
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a0a0a] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <Image src="/GTF-logo.png" alt="GTF Logo" width={48} height={48} className="object-contain" />
                <div>
                  <p className="font-display text-base font-black uppercase text-white leading-tight">Growing Together Family</p>
                  <p className="font-body text-gray-500 text-xs tracking-widest uppercase">GTF Church · Ghana</p>
                </div>
              </div>
              <p className="font-body text-gray-500 text-sm leading-relaxed mt-4">
                A church family growing in faith, worshipping God, and serving our community together.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-display text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">Quick Links</p>
              <ul className="space-y-3">
                {["About Us", "Get Involved", "Sermons", "Bible Study", "Devotional", "Give", "Plan a Visit"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="font-body text-gray-400 text-sm hover:text-white transition-colors duration-200">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ministries */}
            <div>
              <p className="font-display text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">Ministries</p>
              <ul className="space-y-3">
                {["Small Groups", "Kids Ministry", "Youth Group", "Worship Team", "Prayer Ministry"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="font-body text-gray-400 text-sm hover:text-white transition-colors duration-200">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Social */}
            <div>
              <p className="font-display text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">Contact</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#f56d24] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-body text-gray-400 text-sm leading-relaxed">123 Faith Avenue,<br />Our City, Ghana</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#f56d24] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-body text-gray-400 text-sm">+233 000 000 000</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#f56d24] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <Link href="mailto:hello@gtfchurch.org" className="font-body text-gray-400 text-sm hover:text-white transition-colors">hello@gtfchurch.org</Link>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#f56d24] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-body text-gray-400 text-sm">Sundays: 9 AM & 11 AM</span>
                </li>
              </ul>

              <p className="font-display text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Follow Us</p>
              <div className="flex items-center gap-3 mb-4">
                {[
                  { icon: "f", label: "Facebook" },
                  { icon: "in", label: "LinkedIn" },
                  { icon: "ig", label: "Instagram" },
                  { icon: "yt", label: "YouTube" },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f56d24] flex items-center justify-center transition-colors duration-200"
                  >
                    <span className="font-display text-xs font-black text-white">{s.icon}</span>
                  </Link>
                ))}
              </div>
              <Link href="#" className="font-body text-[#f56d24] text-sm hover:text-white transition-colors">@weare_gtf</Link>
            </div>
          </div>

          {/* Bottom row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-gray-600 text-xs">
              © {new Date().getFullYear()} Growing Together Family. All rights reserved.
            </p>
            <p className="font-body text-gray-600 text-xs flex items-center gap-1.5">
              Made with
              <svg className="w-3.5 h-3.5 text-[#f56d24]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              for the GTF Family
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
