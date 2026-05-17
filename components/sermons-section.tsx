"use client"

import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import type { SermonEpisode } from "@/lib/sermons"

export function SermonsSection() {
  const [episodes, setEpisodes] = useState<SermonEpisode[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [playingId, setPlayingId] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    fetch("/api/sermons")
      .then((res) => res.json())
      .then((data) => {
        if (data.episodes?.length) {
          setEpisodes(data.episodes)
        } else if (data.error) {
          setError(data.error)
        }
      })
      .catch(() => setError("Unable to load sermons right now."))
      .finally(() => setLoading(false))
  }, [])

  const stopAudio = useCallback(() => {
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }
    setPlayingId(null)
  }, [])

  const togglePlay = useCallback(
    (episode: SermonEpisode) => {
      const audio = audioRef.current
      if (!audio) return

      if (playingId === episode.id) {
        stopAudio()
        return
      }

      audio.src = episode.audioUrl
      audio.play().catch(() => setError("Playback failed. Try again."))
      setPlayingId(episode.id)
    },
    [playingId, stopAudio]
  )

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onEnded = () => setPlayingId(null)
    audio.addEventListener("ended", onEnded)
    return () => audio.removeEventListener("ended", onEnded)
  }, [])

  return (
    <section id="sermons" className="py-24 bg-white scroll-mt-20 lg:scroll-mt-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#f56d24] font-display text-xs font-bold tracking-widest uppercase">
                Messages
              </span>
              <span className="text-gray-300 text-xs">·</span>
              <span className="text-gray-400 font-display text-xs font-bold tracking-widest uppercase">
                Pastor Benjamin Odei Nyarko
              </span>
            </div>
            <div className="w-10 h-0.5 bg-[#f56d24] mb-4"></div>
            <h2 className="font-display text-5xl md:text-6xl font-black uppercase text-gray-900 leading-none">
              Latest Sermons
            </h2>
          </div>
          <Link
            href="https://wearegtf.podbean.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#111111] text-white font-display text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#f56d24] transition-all duration-300"
          >
            ALL SERMONS
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>

        {loading && (
          <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-12 text-center">
            <p className="font-body text-gray-500">Loading sermons from Podbean…</p>
          </div>
        )}

        {error && !loading && (
          <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-12 text-center">
            <p className="font-body text-gray-500 mb-4">{error}</p>
            <Link
              href="https://wearegtf.podbean.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#111111] text-white font-display text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#f56d24] transition-all"
            >
              Listen on Podbean
            </Link>
          </div>
        )}

        {!loading && !error && episodes.length > 0 && (
          <>
            <div className="mb-8 rounded-2xl overflow-hidden border border-gray-100 bg-[#0d1b2a]">
              <div className="p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-6">
                <button
                  type="button"
                  onClick={() => togglePlay(episodes[0])}
                  className="w-16 h-16 bg-[#f56d24] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#e55a1a] transition-colors"
                  aria-label={playingId === episodes[0].id ? "Pause sermon" : "Play latest sermon"}
                >
                  {playingId === episodes[0].id ? (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <p className="text-[#f56d24] font-display text-xs font-bold tracking-widest uppercase mb-2">
                    Latest message
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white leading-tight mb-2">
                    {episodes[0].title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-gray-400 font-body text-sm">
                    {episodes[0].dateLabel && <span>{episodes[0].dateLabel}</span>}
                    {episodes[0].durationLabel && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span>{episodes[0].durationLabel}</span>
                      </>
                    )}
                  </div>
                </div>
                <Link
                  href={episodes[0].pageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors whitespace-nowrap"
                >
                  Open on Podbean →
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
              {episodes.slice(1).map((episode) => {
                const isPlaying = playingId === episode.id
                return (
                  <div
                    key={episode.id}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => togglePlay(episode)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isPlaying ? "bg-[#f56d24]" : "bg-[#111111] hover:bg-[#f56d24]"
                      }`}
                      aria-label={isPlaying ? `Pause ${episode.title}` : `Play ${episode.title}`}
                    >
                      {isPlaying ? (
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg className="w-3.5 h-3.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => togglePlay(episode)}
                      className="flex-1 min-w-0 text-left"
                    >
                      <p
                        className={`font-display text-lg font-black uppercase leading-tight transition-colors ${
                          isPlaying ? "text-[#f56d24]" : "text-gray-900 hover:text-[#f56d24]"
                        }`}
                      >
                        {episode.title}
                      </p>
                      <div className="flex items-center gap-3 mt-0.5">
                        {episode.dateLabel && (
                          <span className="font-body text-xs text-gray-400">{episode.dateLabel}</span>
                        )}
                        {episode.durationLabel && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span className="font-body text-xs text-gray-400">{episode.durationLabel}</span>
                          </>
                        )}
                      </div>
                    </button>
                    <Link
                      href={episode.pageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#f56d24] transition-colors flex-shrink-0 p-1"
                      aria-label={`Open ${episode.title} on Podbean`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                )
              })}
            </div>
          </>
        )}

        <audio ref={audioRef} preload="none" className="hidden" />
      </div>
    </section>
  )
}
