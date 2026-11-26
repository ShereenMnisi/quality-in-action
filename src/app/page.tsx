
"use client";

import { useState } from "react";

const chapters = [
  {
    number: "01",
    title: "Understanding Quality",
    subtitle: "The foundations of quality management",
    duration: "5 MIN",
    description:
      "Discover what quality management means, why it matters, and how it shapes the way organisations work.",
  },
  {
    number: "02",
    title: "Identifying the Problem",
    subtitle: "Recognising non-conformance",
    duration: "7 MIN",
    description:
      "Explore a workplace scenario and learn to recognise when a process or outcome does not meet requirements.",
  },
  {
    number: "03",
    title: "Finding the Root Cause",
    subtitle: "Investigation and corrective action",
    duration: "8 MIN",
    description:
      "Follow the investigation process, identify underlying causes and explore how corrective actions are selected.",
  },
  {
    number: "04",
    title: "Putting Knowledge to Work",
    subtitle: "Test what you have learned",
    duration: "5 MIN",
    description:
      "Apply your knowledge through a short interactive assessment and receive immediate feedback.",
  },
];

export default function Home() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [exploredChapters, setExploredChapters] = useState<number[]>([]);

  const exploreChapter = (index: number) => {
    setActiveChapter(activeChapter === index ? null : index);

    setExploredChapters((previous) =>
      previous.includes(index) ? previous : [...previous, index]
    );
  };

  const progress = (exploredChapters.length / chapters.length) * 100;

  return (
    <main className="min-h-screen overflow-hidden bg-[#101214] text-[#F4F0E8]">
      {/* NAVIGATION */}
      <nav className="relative z-20 flex items-center justify-between border-b border-white/[0.08] bg-[#101214]/90 px-6 py-5 backdrop-blur-md md:px-16">
        <a
          href="/"
          aria-label="SM Lab home"
          className="text-xl font-semibold tracking-[0.2em]"
        >
          <span className="text-[#C9A96E]">SM</span> LAB
        </a>

        <div className="hidden items-center gap-10 text-[10px] tracking-[0.2em] text-white/55 md:flex">
          <a href="#experience" className="transition hover:text-[#C9A96E]">
            THE EXPERIENCE
          </a>
          <a href="#chapters" className="transition hover:text-[#C9A96E]">
            LEARNING JOURNEY
          </a>
          <a href="#about" className="transition hover:text-[#C9A96E]">
            ABOUT
          </a>
        </div>

        <span className="hidden text-[10px] tracking-[0.2em] text-[#C9A96E] sm:block">
          AN INTERACTIVE CONCEPT
        </span>

        <a
          href="/learning"
          className="text-[10px] tracking-[0.15em] text-[#C9A96E] transition hover:text-[#E0C28A] md:hidden"
        >
          ENTER →
        </a>
      </nav>

      {/* HERO */}
      <section
        id="experience"
        className="relative flex min-h-[680px] items-center overflow-hidden md:min-h-[820px]"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 animate-slow-zoom bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101214] via-[#101214]/85 to-[#101214]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101214] via-transparent to-[#101214]/45" />
        <div className="absolute inset-0 bg-[#101214]/10" />

        {/* Gold atmospheric detail */}
        <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#C9A96E]/[0.06] blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 md:px-16 md:py-36">
          <div className="max-w-4xl">
            <div className="animate-fade-up mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C9A96E]" />
              <span className="text-[10px] tracking-[0.4em] text-[#C9A96E]">
                SM LAB PRESENTS
              </span>
            </div>

            <p className="animate-fade-up mb-6 text-[10px] tracking-[0.35em] text-white/55">
              AN INTERACTIVE LEARNING EXPERIENCE
            </p>

            <h1 className="font-editorial animate-fade-up text-7xl font-normal leading-[0.88] tracking-tight md:text-9xl">
              QUALITY
              <br />
              <span className="italic text-[#C9A96E]">IN ACTION.</span>
            </h1>

            <div className="mt-10 h-px w-24 bg-[#C9A96E]/70" />

            <p className="mt-8 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              The difference between finding a problem and fixing it.
              Discover how quality management transforms workplace
              challenges into opportunities for improvement.
            </p>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
              <a
                href="/learning"
                className="group inline-flex items-center justify-center gap-5 border border-[#C9A96E] bg-[#C9A96E] px-8 py-5 text-[10px] font-semibold tracking-[0.2em] text-[#101214] transition duration-300 hover:border-[#E0C28A] hover:bg-[#E0C28A]"
              >
                BEGIN YOUR LEARNING JOURNEY
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>

              <span className="text-[10px] tracking-[0.2em] text-white/45">
                APPROX. 25 MINUTES
              </span>
            </div>
          </div>
        </div>

        {/* Hero metadata */}
        <div className="absolute bottom-12 right-8 hidden text-right md:block">
          <p className="text-[9px] tracking-[0.35em] text-white/40">
            LEARN. APPLY. IMPROVE.
          </p>
          <p className="mt-3 font-editorial text-2xl text-[#C9A96E]">
            01 <span className="text-white/30">/ 04</span>
          </p>
        </div>

        <div className="absolute bottom-12 left-8 hidden items-center gap-3 md:flex">
          <span className="h-10 w-px bg-[#C9A96E]/60" />
          <span className="text-[9px] tracking-[0.3em] text-white/40">
            SCROLL TO EXPLORE
          </span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:px-16 md:py-36">
        <div className="animate-fade-up">
          <p className="mb-8 flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#C9A96E]">
            <span className="h-px w-8 bg-[#C9A96E]" />
            THE BIGGER PICTURE
          </p>

          <h2 className="font-editorial text-5xl font-normal leading-[1.1] md:text-6xl">
            Quality is not an accident.
            <br />
            <span className="italic text-[#C9A96E]">
              It is a process.
            </span>
          </h2>
        </div>

        <div className="flex flex-col justify-center gap-6 md:pl-10">
          <p className="text-sm leading-8 text-white/60 md:text-base">
            Every organisation depends on processes, people and decisions.
            But what happens when something does not go according to plan?
          </p>

          <p className="text-sm leading-8 text-white/60 md:text-base">
            In this experience, you will explore how quality management
            helps identify problems, understand their causes and create
            meaningful improvements.
          </p>

          <div className="mt-3 flex items-center gap-4">
            <span className="h-px w-10 bg-[#C9A96E]" />
            <span className="text-[9px] tracking-[0.25em] text-[#C9A96E]">
              UNDERSTAND THE PROCESS
            </span>
          </div>
        </div>
      </section>

      {/* LEARNING CHAPTERS */}
      <section
        id="chapters"
        className="border-y border-white/[0.08] bg-[#171A1C] px-6 py-24 md:px-16 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-7 flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#C9A96E]">
                <span className="h-px w-8 bg-[#C9A96E]" />
                YOUR LEARNING JOURNEY
              </p>

              <h2 className="font-editorial text-5xl font-normal leading-[1.05] md:text-7xl">
                Four chapters.
                <br />
                <span className="italic text-white/40">
                  One continuous improvement.
                </span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-white/45">
              Explore each chapter to discover the concepts, scenarios and
              activities within this learning experience.
            </p>
          </div>

          {/* Chapter cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.number}
                onClick={() => exploreChapter(index)}
                aria-expanded={activeChapter === index}
                className={`group relative overflow-hidden border p-7 text-left transition duration-500 md:p-10 ${
                  activeChapter === index
                    ? "border-[#C9A96E]/70 bg-[#202326]"
                    : "border-white/10 bg-[#101214]/30 hover:border-[#C9A96E]/50 hover:bg-[#202326]"
                }`}
              >
                {/* Subtle gold accent */}
                <div
                  className={`absolute left-0 top-0 h-full w-[2px] bg-[#C9A96E] transition-transform duration-500 ${
                    activeChapter === index
                      ? "scale-y-100"
                      : "scale-y-0 group-hover:scale-y-100"
                  }`}
                />

                <div className="mb-10 flex items-center justify-between">
                  <span className="font-editorial text-5xl text-[#C9A96E]/70">
                    {chapter.number}
                  </span>

                  <span className="text-[9px] tracking-[0.2em] text-white/40">
                    {chapter.duration}
                  </span>
                </div>

                <h3 className="font-editorial text-3xl font-medium md:text-4xl">
                  {chapter.title}
                </h3>

                <p className="mt-3 text-xs tracking-wide text-white/45">
                  {chapter.subtitle}
                </p>

                <div className="mt-9 flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.2em] text-[#C9A96E]">
                    {activeChapter === index
                      ? "CLOSE CHAPTER"
                      : "EXPLORE CHAPTER"}
                  </span>

                  <span className="text-xl text-[#C9A96E] transition duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>

                {activeChapter === index && (
                  <div className="animate-fade-in mt-7 border-t border-white/10 pt-6">
                    <p className="text-sm leading-7 text-white/65">
                      {chapter.description}
                    </p>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Exploration progress */}
          <div className="mt-14 border-t border-white/10 pt-7">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[9px] tracking-[0.25em] text-white/40">
                CHAPTER EXPLORATION
              </span>

              <span className="text-[10px] tracking-[0.15em] text-[#C9A96E]">
                {exploredChapters.length} / 4 EXPLORED
              </span>
            </div>

            <div
              className="mt-5 h-[2px] w-full bg-white/10"
              role="progressbar"
              aria-label="Chapters explored"
              aria-valuemin={0}
              aria-valuemax={4}
              aria-valuenow={exploredChapters.length}
            >
              <div
                className="h-full bg-[#C9A96E] transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="/learning"
              className="group inline-flex items-center gap-5 border border-white/20 px-8 py-5 text-[10px] tracking-[0.2em] transition duration-300 hover:border-[#C9A96E] hover:text-[#C9A96E]"
            >
              ENTER THE LEARNING EXPERIENCE
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section
        id="about"
        className="relative overflow-hidden px-6 py-28 text-center md:px-16 md:py-40"
      >
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A96E]/[0.04] blur-[100px]" />

        <div className="relative mx-auto max-w-4xl">
          <p className="mb-8 text-[10px] tracking-[0.35em] text-[#C9A96E]">
            THE PURPOSE OF QUALITY
          </p>

          <h2 className="font-editorial text-5xl font-normal leading-[1.1] md:text-7xl">
            Don&apos;t just identify the problem.
            <span className="mt-3 block italic text-[#C9A96E]">
              Understand how to improve it.
            </span>
          </h2>

          <p className="mt-10 text-[9px] tracking-[0.35em] text-white/35">
            LEARN <span className="text-[#C9A96E]">·</span> APPLY{" "}
            <span className="text-[#C9A96E]">·</span> IMPROVE
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col justify-between gap-5 border-t border-white/10 px-6 py-8 text-[9px] tracking-[0.15em] text-white/35 md:flex-row md:px-16">
        <a href="/" className="tracking-[0.2em]">
          <span className="text-[#C9A96E]">SM</span> LAB
        </a>

        <span>AN INDEPENDENT MULTIMEDIA CONCEPT PROJECT</span>

        <span>© 2026 · QUALITY IN ACTION</span>
      </footer>
    </main>
  );
}
