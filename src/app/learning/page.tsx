
"use client";

import { useState } from "react";

const questions = [
  {
    question: "What is a non-conformance?",
    options: [
      "A process that exceeds expectations",
      "A failure to meet a specified requirement",
      "A routine quality inspection",
      "A completed corrective action",
    ],
    answer: 1,
    explanation:
      "A non-conformance occurs when a requirement is not fulfilled. It may relate to a product, process, service or system.",
  },
  {
    question: "What should happen after identifying a non-conformance?",
    options: [
      "Ignore it if the impact seems small",
      "Immediately blame the responsible employee",
      "Record and investigate the issue",
      "Close the report without further action",
    ],
    answer: 2,
    explanation:
      "The issue should be documented and investigated so its cause and appropriate response can be determined.",
  },
  {
    question: "What is the purpose of corrective action?",
    options: [
      "To hide the original problem",
      "To address the cause and prevent recurrence",
      "To increase paperwork",
      "To replace every existing process",
    ],
    answer: 1,
    explanation:
      "Corrective action addresses the cause of a non-conformance to help prevent it from happening again.",
  },
];

const steps = [
  {
    title: "Identify",
    number: "01",
    description: "Recognise and document the non-conformance.",
    detail:
      "A non-conformance occurs when a product, process or service fails to meet a specified requirement.",
    example:
      "A quality inspector discovers that a batch of manufactured components does not meet the required measurements.",
    question: "What should happen first?",
  },
  {
    title: "Investigate",
    number: "02",
    description: "Understand what happened and determine the root cause.",
    detail:
      "Investigate the circumstances surrounding the problem. Look beyond the visible defect to understand why it happened.",
    example:
      "The team reviews machine settings, production records and inspection results to identify the source of the measurement error.",
    question: "Why did the problem occur?",
  },
  {
    title: "Correct",
    number: "03",
    description: "Implement an appropriate corrective action.",
    detail:
      "Address the identified cause and put measures in place to prevent the same problem from happening again.",
    example:
      "The machine is recalibrated, and an additional verification step is introduced into the production process.",
    question: "What needs to change?",
  },
  {
    title: "Verify",
    number: "04",
    description: "Check whether the action was effective.",
    detail:
      "Monitor the results to confirm that the corrective action has addressed the cause and that the issue does not recur.",
    example:
      "The next production batches are inspected, and their measurements are confirmed to meet the required specifications.",
    question: "Did the solution work?",
  },
];

const investigationOptions = [
  "The machine was incorrectly recalibrated after servicing.",
  "The factory received too many orders.",
  "The packaging design was recently updated.",
];

const objectives = [
  "Explain the purpose of quality management.",
  "Recognise a non-conformance in a workplace.",
  "Understand the corrective-action process.",
  "Apply your knowledge to a practical scenario.",
];

const principles = [
  {
    title: "Consistency",
    text: "Delivering products and services that meet defined requirements.",
  },
  {
    title: "Accountability",
    text: "Making responsibilities and expectations clear.",
  },
  {
    title: "Prevention",
    text: "Identifying risks and addressing potential issues.",
  },
  {
    title: "Improvement",
    text: "Using evidence and learning to improve processes.",
  },
];

const evidence = [
  {
    label: "OBSERVATION 01",
    detail: "The affected components were produced on Machine B.",
  },
  {
    label: "OBSERVATION 02",
    detail: "Machine B was recently serviced.",
  },
  {
    label: "OBSERVATION 03",
    detail:
      "Inspection records show inconsistent measurements after servicing.",
  },
];

const metrics = [
  { label: "UNITS INSPECTED", value: "1,000" },
  { label: "CONFORMING UNITS", value: "920" },
  { label: "NON-CONFORMING", value: "80" },
];

const optionStyle =
  "w-full border p-4 text-left text-sm leading-6 transition duration-300";

function LearningIllustration({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={`/images/${src}`}
        alt={alt}
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

export default function LearningPage() {
  const [stage, setStage] = useState(0);
  const [scenarioChoice, setScenarioChoice] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [rootCauseChoice, setRootCauseChoice] = useState<number | null>(null);
  const [rootCauseSubmitted, setRootCauseSubmitted] = useState(false);

  const question = questions[questionIndex];
  const progress = [0, 25, 50, 75, 100][stage];

  const submitAnswer = () => {
    if (selectedAnswer === null || answered) return;

    if (selectedAnswer === question.answer) {
      setScore((previous) => previous + 1);
    }

    setAnswered(true);
  };

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((previous) => previous + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setStage(4);
    }
  };

  const restartExperience = () => {
    setStage(0);
    setScenarioChoice(null);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswered(false);
    setActiveStep(0);
    setRootCauseChoice(null);
    setRootCauseSubmitted(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#101214] text-[#F4F0E8]">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -right-60 top-20 h-[500px] w-[500px] rounded-full bg-[#C9A96E]/[0.035] blur-[140px]" />
        <div className="absolute -left-60 top-[55%] h-[450px] w-[450px] rounded-full bg-[#C9A96E]/[0.025] blur-[140px]" />
      </div>

      {/* COURSE HEADER */}
      <header className="sticky top-0 z-30 border-b border-white/[0.08] bg-[#101214]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
          <a href="/" className="shrink-0 text-sm font-semibold tracking-[0.2em]">
            <span className="text-[#C9A96E]">SM</span> LAB
          </a>

          <div className="hidden text-center sm:block">
            <p className="text-[10px] tracking-[0.25em] text-white/55">
              QUALITY IN ACTION
            </p>
            <p className="mt-1 text-[9px] tracking-widest text-white/25">
              INTERACTIVE LEARNING EXPERIENCE
            </p>
          </div>

          <a
            href="/"
            className="shrink-0 text-[10px] tracking-[0.15em] text-white/45 transition hover:text-[#C9A96E]"
          >
            EXIT EXPERIENCE →
          </a>
        </div>

        <div
          className="h-[2px] bg-white/[0.07]"
          role="progressbar"
          aria-label="Learning experience progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div
            className="h-full bg-[#C9A96E] shadow-[0_0_12px_rgba(201,169,110,0.35)] transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* MAIN LEARNING AREA */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-24">

        {/* STAGE 0: INTRODUCTION */}
        {stage === 0 && (
          <section key="intro" className="animate-fade-up">
            <p className="mb-8 flex items-center gap-3 text-[10px] tracking-[0.35em] text-[#C9A96E]">
              YOUR LEARNING JOURNEY · 01
            </p>

            <h1 className="font-editorial text-5xl font-normal leading-[1.05] sm:text-6xl md:text-8xl">
              Understanding
              <br />
              <span className="italic text-[#C9A96E]">
                Quality Management.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
              Quality is more than inspecting the final result. It is about
              understanding processes, identifying problems and creating
              systems that support continuous improvement.
            </p>

            {/* INTRODUCTION ILLUSTRATION */}
            <div className="mt-12 grid items-center gap-8 border-y border-white/10 py-8 sm:grid-cols-2">
              <LearningIllustration
                src="Quiet Reading Inspiration-4.png"
                alt="Illustration representing focused learning"
                className="h-56"
              />
              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#C9A96E]">
                  LEARN WITH PURPOSE
                </p>
                <h3 className="mt-4 font-editorial text-3xl italic">
                  Every improvement begins with understanding.
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  Explore the concepts, examine the evidence and apply your
                  knowledge through practical activities.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-10 border-y border-white/10 py-9 md:grid-cols-[1fr_1.4fr]">
              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#C9A96E]">
                  THE LEARNING OBJECTIVES
                </p>
                <p className="mt-4 font-editorial text-3xl italic text-white/70">
                  What you will take away.
                </p>
              </div>

              <div>
                <p className="mb-5 text-[10px] tracking-[0.2em] text-white/35">
                  BY THE END OF THIS EXPERIENCE, YOU WILL BE ABLE TO:
                </p>

                {objectives.map((objective, index) => (
                  <div
                    key={objective}
                    className="flex gap-4 border-b border-white/[0.06] py-4 last:border-0"
                  >
                    <span className="font-editorial text-xl text-[#C9A96E]">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-6 text-white/65">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <button
                onClick={() => setStage(1)}
                className="group inline-flex items-center gap-5 bg-[#C9A96E] px-9 py-5 text-[10px] font-semibold tracking-[0.2em] text-[#101214] transition duration-300 hover:bg-[#E0C28A]"
              >
                START LESSON
                <span className="text-lg transition-transform group-hover:translate-x-2">
                  →
                </span>
              </button>
              <span className="text-[10px] tracking-[0.15em] text-white/35">
                APPROX. 25 MINUTES
              </span>
            </div>
          </section>
        )}

        {/* STAGE 1: LESSON */}
        {stage === 1 && (
          <section key="lesson" className="animate-fade-up">
            <p className="flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#C9A96E]">
              CHAPTER 01 · THE FUNDAMENTALS
            </p>

            <h2 className="mt-8 font-editorial text-5xl font-normal leading-tight md:text-7xl">
              What is quality
              <br />
              <span className="italic text-[#C9A96E]">management?</span>
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
              Quality management is the coordinated approach organisations
              use to direct and control activities related to quality. It
              involves establishing expectations, managing processes,
              monitoring performance and improving outcomes.
            </p>

            <div className="my-12 grid gap-3 sm:grid-cols-2">
              {principles.map((item, index) => (
                <div
                  key={item.title}
                  className="group border border-white/[0.08] bg-[#171A1C]/80 p-7 transition duration-300 hover:border-[#C9A96E]/50 hover:bg-[#1D2123] md:p-9"
                >
                  <span className="font-editorial text-3xl text-[#C9A96E]/60">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-editorial text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* LEARNING ILLUSTRATION */}
            <div className="my-12 grid items-center gap-8 sm:grid-cols-2">
              <LearningIllustration
                src="Reading Sparks of Inspiration.png"
                alt="Illustration representing learning and inspiration"
                className="h-64"
              />
              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#C9A96E]">
                  THINK BEYOND THE CHECKLIST
                </p>
                <h3 className="mt-4 font-editorial text-3xl">
                  Quality is a mindset.
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  Understanding quality means recognising opportunities to
                  improve how work is performed, not simply checking whether
                  the final result is acceptable.
                </p>
              </div>
            </div>

            <div className="border-l-2 border-[#C9A96E] bg-[#171A1C] p-6 md:p-8">
              <p className="text-[10px] tracking-[0.25em] text-[#C9A96E]">
                A PRINCIPLE TO REMEMBER
              </p>
              <p className="mt-4 font-editorial text-2xl leading-relaxed text-white/85 md:text-3xl">
                Quality management is not simply about finding mistakes. It
                is about creating processes that consistently meet
                requirements and improve over time.
              </p>
            </div>

            <button
              onClick={() => setStage(2)}
              className="group mt-12 inline-flex items-center gap-5 bg-[#C9A96E] px-9 py-5 text-[10px] font-semibold tracking-[0.2em] text-[#101214] transition hover:bg-[#E0C28A]"
            >
              EXPLORE A WORKPLACE SCENARIO
              <span className="text-lg transition-transform group-hover:translate-x-2">
                →
              </span>
            </button>
          </section>
        )}

        {/* STAGE 2: SCENARIO */}
        {stage === 2 && (
          <section key="scenario" className="animate-fade-up">
            <p className="flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#C9A96E]">
              CHAPTER 02 · INTERACTIVE SCENARIO
            </p>

            <h2 className="mt-8 font-editorial text-5xl leading-tight md:text-7xl">
              Something
              <br />
              <span className="italic text-[#C9A96E]">went wrong.</span>
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/60">
              Imagine you are part of a quality team at a manufacturing
              facility. During a routine inspection, you discover that several
              products do not meet the specified dimensions.
            </p>

            {/* SCENARIO ILLUSTRATION */}
            <div className="my-10 grid items-center gap-6 border border-white/10 bg-[#171A1C] p-6 md:grid-cols-2 md:p-8">
              <LearningIllustration
                src="Thoughtful Figure with Warning Magnifier.png"
                alt="Illustration representing identification of a quality concern"
                className="h-64"
              />
              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#C9A96E]">
                  THE SITUATION
                </p>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  The products are already part of the production batch. Your
                  team must decide how to respond to the discovery.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-[10px] tracking-[0.25em] text-[#C9A96E]">
                DECISION POINT · 01
              </p>
              <h3 className="mt-4 font-editorial text-3xl md:text-4xl">
                What should your first response be?
              </h3>
            </div>

            <div className="mt-7 space-y-3">
              {[
                "Ignore the issue because most products appear acceptable.",
                "Document the non-conformance and investigate the issue.",
                "Immediately blame the production operator.",
                "Change the product specifications to match the results.",
              ].map((option, index) => (
                <button
                  key={option}
                  onClick={() => setScenarioChoice(index)}
                  aria-pressed={scenarioChoice === index}
                  className={`${optionStyle} ${
                    scenarioChoice === index
                      ? "border-[#C9A96E] bg-[#C9A96E]/10 text-[#E0C28A]"
                      : "border-white/10 bg-[#171A1C]/80 text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <span className="mr-4 font-editorial text-xl text-[#C9A96E]">
                    0{index + 1}
                  </span>
                  {option}
                </button>
              ))}
            </div>

            {scenarioChoice !== null && (
              <>
                <div className="animate-fade-in mt-6 border-l-2 border-[#C9A96E] bg-[#171A1C] p-6 md:p-8">
                  <p className="text-[10px] tracking-[0.25em] text-[#C9A96E]">
                    {scenarioChoice === 1 ? "GOOD DECISION" : "THINK AGAIN"}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {scenarioChoice === 1
                      ? "Correct. The issue should be documented and investigated. This provides evidence for understanding the problem and deciding what action is appropriate."
                      : "Consider the purpose of quality management. The first response should protect the process, record what happened and establish the facts before deciding on further action."}
                  </p>
                </div>

                <div className="mt-8 flex justify-center">
                  <LearningIllustration
                    src="Thoughtful Woman Examining Warning Symbol-3.png"
                    alt="Illustration representing careful examination of a warning"
                    className="h-48 w-full max-w-xs"
                  />
                </div>
              </>
            )}

            <button
              disabled={scenarioChoice !== 1}
              onClick={() => setStage(3)}
              className="group mt-10 inline-flex items-center gap-5 bg-[#C9A96E] px-9 py-5 text-[10px] font-semibold tracking-[0.2em] text-[#101214] transition hover:bg-[#E0C28A] disabled:cursor-not-allowed disabled:opacity-30"
            >
              CONTINUE TO THE PROCESS
              <span className="text-lg transition-transform group-hover:translate-x-2">
                →
              </span>
            </button>
          </section>
        )}

        {/* STAGE 3: PROCESS, INVESTIGATION AND ASSESSMENT */}
        {stage === 3 && (
          <section key="application" className="animate-fade-up">
            <p className="flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#C9A96E]">
              CHAPTER 03 · KNOWLEDGE APPLICATION
            </p>

            <h2 className="mt-8 font-editorial text-5xl leading-tight md:text-7xl">
              From problem
              <br />
              <span className="italic text-[#C9A96E]">to improvement.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/55">
              Corrective action involves a structured approach to addressing
              the cause of a non-conformance.
            </p>

            {/* PROCESS PROGRESS */}
            <div className="mb-8 mt-14">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[10px] tracking-[0.25em] text-white/40">
                  THE CORRECTIVE ACTION PROCESS
                </p>
                <p className="text-[10px] tracking-widest text-[#C9A96E]">
                  {activeStep + 1} OF 4
                </p>
              </div>

              <div className="flex gap-2">
                {steps.map((step, index) => (
                  <button
                    key={step.title}
                    onClick={() => setActiveStep(index)}
                    aria-label={`Go to ${step.title} stage`}
                    aria-pressed={activeStep === index}
                    className={`h-[3px] flex-1 transition-all duration-500 ${
                      index <= activeStep
                        ? "bg-[#C9A96E]"
                        : "bg-white/10 hover:bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-4 flex justify-between text-[8px] tracking-[0.12em] text-white/35 sm:text-[9px] sm:tracking-widest">
                <span>IDENTIFY</span>
                <span>INVESTIGATE</span>
                <span>CORRECT</span>
                <span>VERIFY</span>
              </div>
            </div>

            {/* INTERACTIVE PROCESS */}
            <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
              <div className="grid gap-3">
                {steps.map((step, index) => (
                  <button
                    key={step.title}
                    onClick={() => setActiveStep(index)}
                    aria-pressed={activeStep === index}
                    className={`w-full border p-5 text-left transition-all duration-300 ${
                      activeStep === index
                        ? "border-[#C9A96E]/70 bg-[#C9A96E]/[0.07]"
                        : "border-white/[0.08] bg-[#171A1C]/80 hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center gap-4 sm:gap-5">
                      <span
                        className={`font-editorial text-3xl ${
                          activeStep === index
                            ? "text-[#C9A96E]"
                            : "text-white/25"
                        }`}
                      >
                        {step.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-editorial text-2xl">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-white/40">
                          {step.description}
                        </p>
                      </div>

                      <span className="text-lg text-[#C9A96E]">
                        {activeStep === index ? "—" : "+"}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div
                key={activeStep}
                className="animate-fade-in flex min-h-[370px] flex-col justify-between border border-white/10 bg-[#171A1C] p-7 md:p-10"
              >
                <div>
                  <p className="text-[9px] tracking-[0.25em] text-[#C9A96E]">
                    STAGE {steps[activeStep].number} · QUALITY IN ACTION
                  </p>

                  <h3 className="mt-8 font-editorial text-5xl">
                    {steps[activeStep].title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/60">
                    {steps[activeStep].detail}
                  </p>
                </div>

                <div className="mt-10 border-l border-[#C9A96E] pl-5">
                  <p className="text-[9px] tracking-[0.2em] text-[#C9A96E]">
                    WORKPLACE SCENARIO
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {steps[activeStep].example}
                  </p>

                  <p className="mt-5 font-editorial text-2xl italic text-white">
                    {steps[activeStep].question}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between gap-4">
                  <span className="text-[9px] tracking-widest text-white/30">
                    {steps[activeStep].number} / 04
                  </span>

                  <button
                    onClick={() =>
                      setActiveStep((activeStep + 1) % steps.length)
                    }
                    className="border border-[#C9A96E]/60 px-5 py-3 text-[9px] tracking-[0.15em] text-[#C9A96E] transition hover:bg-[#C9A96E] hover:text-[#101214]"
                  >
                    NEXT STAGE →
                  </button>
                </div>
              </div>
            </div>

            {/* ROOT CAUSE INVESTIGATION LAB */}
            <div className="mt-24 border-t border-white/10 pt-14">
              <p className="text-[10px] tracking-[0.3em] text-[#C9A96E]">
                INTERACTIVE INVESTIGATION · FIELD LAB 01
              </p>

              <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
                <div>
                  <h3 className="font-editorial text-5xl leading-tight md:text-6xl">
                    Find the
                    <br />
                    <span className="italic text-[#C9A96E]">root cause.</span>
                  </h3>

                  <p className="mt-6 text-sm leading-7 text-white/50">
                    A manufacturing team has identified a batch of components
                    that do not meet the required dimensions. Examine the
                    evidence and determine the most likely cause.
                  </p>

                  <div className="mt-8 overflow-hidden border border-white/10">
                    <LearningIllustration
                      src="Magnifying Glass Root Cause Diagram (1).png"
                      alt="Magnifying glass and root cause analysis illustration"
                      className="h-64 w-full bg-[#101214] p-4"
                    />
                    <p className="bg-[#171A1C] px-4 py-4 text-[9px] tracking-[0.2em] text-white/40">
                      CASE FILE 001 · PRODUCTION QUALITY
                    </p>
                  </div>
                </div>

                <div className="border border-white/[0.08] bg-[#171A1C]/90 p-6 sm:p-8">
                  <p className="text-[9px] tracking-[0.25em] text-[#C9A96E]">
                    INVESTIGATION EVIDENCE
                  </p>

                  <div className="mt-7 space-y-6">
                    {evidence.map((item) => (
                      <div
                        key={item.label}
                        className="border-l border-[#C9A96E]/50 pl-4"
                      >
                        <p className="text-[9px] tracking-[0.2em] text-white/35">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/70">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-9 border-t border-white/10 pt-7">
                    <p className="text-[9px] tracking-[0.2em] text-white/35">
                      YOUR INVESTIGATION
                    </p>

                    <h4 className="mt-3 font-editorial text-3xl">
                      What is the most likely root cause?
                    </h4>

                    <div className="mt-6 space-y-3">
                      {investigationOptions.map((option, index) => (
                        <button
                          key={option}
                          disabled={rootCauseSubmitted}
                          onClick={() => setRootCauseChoice(index)}
                          aria-pressed={rootCauseChoice === index}
                          className={`${optionStyle} ${
                            rootCauseChoice === index
                              ? "border-[#C9A96E] bg-[#C9A96E]/10 text-[#E0C28A]"
                              : "border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                          } disabled:cursor-default`}
                        >
                          <span className="mr-3 text-[#C9A96E]">
                            0{index + 1}
                          </span>
                          {option}
                        </button>
                      ))}
                    </div>

                    {!rootCauseSubmitted ? (
                      <button
                        disabled={rootCauseChoice === null}
                        onClick={() => setRootCauseSubmitted(true)}
                        className="mt-6 w-full bg-[#C9A96E] px-6 py-4 text-[9px] font-semibold tracking-[0.2em] text-[#101214] transition hover:bg-[#E0C28A] disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        SUBMIT INVESTIGATION →
                      </button>
                    ) : (
                      <div className="animate-fade-in mt-6 border border-[#C9A96E]/30 bg-[#C9A96E]/[0.04] p-5">
                        <p className="text-[9px] tracking-[0.2em] text-[#C9A96E]">
                          INVESTIGATION FEEDBACK
                        </p>

                        <p className="mt-3 text-sm leading-7 text-white/70">
                          {rootCauseChoice === 0
                            ? "Correct. The evidence suggests that the machine may not have been calibrated correctly after servicing. Further investigation would be needed to confirm this cause."
                            : "Not quite. Review the evidence again. The inconsistent measurements began after Machine B was serviced, making its calibration the strongest lead to investigate."}
                        </p>

                        <button
                          onClick={() => {
                            setRootCauseChoice(null);
                            setRootCauseSubmitted(false);
                          }}
                          className="mt-5 text-[9px] tracking-[0.2em] text-[#C9A96E] transition hover:text-white"
                        >
                          TRY AGAIN →
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* QUALITY PERFORMANCE DASHBOARD */}
            <div className="mt-24 border-t border-white/10 pt-14">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-[#C9A96E]">
                    PRODUCTION INTELLIGENCE · DATA LAB 01
                  </p>
                  <h3 className="mt-5 font-editorial text-5xl md:text-6xl">
                    Quality at a glance.
                  </h3>
                  <p className="mt-4 text-sm text-white/40">
                    Explore the performance of a fictional production batch.
                  </p>
                </div>

                <span className="text-[9px] tracking-[0.2em] text-white/30">
                  SAMPLE DATA · BATCH 001
                </span>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="border border-white/[0.08] bg-[#171A1C] p-6 transition duration-300 hover:border-[#C9A96E]/40 md:p-7"
                  >
                    <p className="text-[9px] tracking-[0.18em] text-white/40">
                      {metric.label}
                    </p>
                    <p className="mt-6 font-editorial text-5xl text-[#C9A96E]">
                      {metric.value}
                    </p>
                    <div className="mt-5 h-px bg-white/10">
                      <div
                        className="h-px bg-[#C9A96E]"
                        style={{ width: `${[100, 92, 8][index]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-8 border border-white/[0.08] bg-[#171A1C] p-6 sm:p-8 md:grid-cols-2 md:p-10">
                <div>
                  <p className="text-[9px] tracking-[0.2em] text-white/40">
                    PRODUCTION CONFORMANCE RATE
                  </p>

                  <div className="mt-7 flex items-end gap-3">
                    <span className="font-editorial text-7xl text-[#C9A96E]">
                      92%
                    </span>
                    <span className="mb-3 text-[9px] tracking-[0.15em] text-white/40">
                      PASS RATE
                    </span>
                  </div>

                  <div className="mt-7 h-2 overflow-hidden bg-white/10">
                    <div className="h-full w-[92%] bg-[#C9A96E]" />
                  </div>

                  <p className="mt-4 text-xs leading-6 text-white/40">
                    92% of inspected units met the specified requirements.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-7 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  <p className="text-[9px] tracking-[0.2em] text-white/40">
                    WHAT DOES THE DATA TELL US?
                  </p>

                  <div className="mt-7 space-y-6">
                    <div>
                      <div className="flex justify-between text-xs">
                        <span className="text-white/65">Conforming</span>
                        <span className="text-[#C9A96E]">92%</span>
                      </div>
                      <div className="mt-3 h-2 bg-white/10">
                        <div className="h-full w-[92%] bg-[#C9A96E]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs">
                        <span className="text-white/65">Non-conforming</span>
                        <span className="text-white/50">8%</span>
                      </div>
                      <div className="mt-3 h-2 bg-white/10">
                        <div className="h-full w-[8%] bg-white/50" />
                      </div>
                    </div>
                  </div>

                  <p className="mt-8 border-l border-[#C9A96E] pl-4 text-sm leading-7 text-white/50">
                    Even a small percentage of non-conforming products
                    deserves investigation. The goal is not simply to detect
                    defects, but to prevent them from recurring.
                  </p>
                </div>
              </div>
            </div>

            {/* ASSESSMENT INTRODUCTION ILLUSTRATION */}
            <div className="my-16 grid items-center gap-8 border-y border-white/10 py-10 sm:grid-cols-2">
              <LearningIllustration
                src="Calm Checklist and Achievement Badge-1.png"
                alt="Illustration representing assessment and achievement"
                className="h-56"
              />
              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#C9A96E]">
                  READY TO APPLY YOUR KNOWLEDGE?
                </p>
                <h3 className="mt-4 font-editorial text-3xl">
                  Let's see what you've learned.
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  Complete the knowledge check to reflect on your
                  understanding of quality management.
                </p>
              </div>
            </div>

            {/* KNOWLEDGE CHECK */}
            <div className="mt-24 border-t border-white/10 pt-14">
              <p className="text-[10px] tracking-[0.3em] text-[#C9A96E]">
                FINAL KNOWLEDGE CHECK
              </p>

              <h3 className="mt-5 font-editorial text-4xl md:text-5xl">
                Put your knowledge to work.
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                Test your understanding of the concepts explored throughout
                this experience.
              </p>

              <div className="mt-9">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.2em] text-white/40">
                    ASSESSMENT PROGRESS
                  </span>
                  <span className="text-[10px] tracking-widest text-[#C9A96E]">
                    {questionIndex + 1} / {questions.length}
                  </span>
                </div>

                <div className="flex gap-2">
                  {questions.map((item, index) => (
                    <div
                      key={item.question}
                      className={`h-[3px] flex-1 transition-all duration-500 ${
                        index <= questionIndex
                          ? "bg-[#C9A96E]"
                          : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-10 border border-white/[0.08] bg-[#171A1C]/80 p-6 sm:p-8 md:p-10">
                <p className="text-[9px] tracking-[0.2em] text-white/35">
                  QUESTION {questionIndex + 1} OF {questions.length}
                </p>

                <h4 className="mt-5 font-editorial text-3xl leading-snug md:text-4xl">
                  {question.question}
                </h4>

                <div className="mt-8 space-y-3">
                  {question.options.map((option, index) => (
                    <button
                      key={option}
                      disabled={answered}
                      onClick={() => setSelectedAnswer(index)}
                      aria-pressed={selectedAnswer === index}
                      className={`${optionStyle} ${
                        answered && index === question.answer
                          ? "border-emerald-600/70 bg-emerald-900/20 text-emerald-300"
                          : answered && index === selectedAnswer
                            ? "border-red-500/70 bg-red-900/20 text-red-300"
                            : selectedAnswer === index
                              ? "border-[#C9A96E] bg-[#C9A96E]/10 text-[#E0C28A]"
                              : "border-white/10 bg-[#101214]/50 text-white/55 hover:border-white/30 hover:text-white"
                      } disabled:cursor-default`}
                    >
                      <span className="mr-4 font-editorial text-xl text-[#C9A96E]">
                        0{index + 1}
                      </span>
                      {option}
                    </button>
                  ))}
                </div>

                {answered && (
                  <div className="animate-fade-in mt-6 border-l-2 border-[#C9A96E] bg-[#101214] p-6">
                    <p className="text-[9px] tracking-[0.2em] text-[#C9A96E]">
                      {selectedAnswer === question.answer
                        ? "CORRECT ANSWER"
                        : "LEARNING FEEDBACK"}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/65">
                      {question.explanation}
                    </p>
                  </div>
                )}

                {!answered ? (
                  <button
                    disabled={selectedAnswer === null}
                    onClick={submitAnswer}
                    className="mt-8 bg-[#C9A96E] px-9 py-5 text-[10px] font-semibold tracking-[0.2em] text-[#101214] transition hover:bg-[#E0C28A] disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    SUBMIT ANSWER →
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="group mt-8 inline-flex items-center gap-5 bg-[#C9A96E] px-9 py-5 text-[10px] font-semibold tracking-[0.2em] text-[#101214] transition hover:bg-[#E0C28A]"
                  >
                    {questionIndex === questions.length - 1
                      ? "VIEW MY RESULTS"
                      : "NEXT QUESTION"}
                    <span className="text-lg transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </button>
                )}
              </div>
            </div>
          </section>
        )}

        {/* STAGE 4: COMPLETION */}
        {stage === 4 && (
          <section key="completion" className="animate-fade-up py-10 text-center">
            <div className="mx-auto flex h-56 max-w-sm items-center justify-center">
              <LearningIllustration
                src="Confident Woman with Checklist and Badge.png"
                alt="Achievement illustration celebrating learning completion"
                className="h-full w-full"
              />
            </div>

            <p className="mt-10 text-[10px] tracking-[0.3em] text-[#C9A96E]">
              LEARNING EXPERIENCE COMPLETED
            </p>

            <h2 className="mt-7 font-editorial text-6xl font-normal leading-[1.05] md:text-8xl">
              Knowledge
              <br />
              <span className="italic text-[#C9A96E]">in action.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/50">
              You have completed the Quality in Action learning experience.
              Take a moment to reflect on what you have learned and how these
              principles can be applied in the workplace.
            </p>

            <div className="mx-auto mt-12 max-w-sm border border-white/10 bg-[#171A1C] p-8 sm:p-10">
              <p className="text-[9px] tracking-[0.25em] text-white/40">
                YOUR KNOWLEDGE CHECK
              </p>

              <p className="mt-6 font-editorial text-7xl text-[#C9A96E]">
                {score}/{questions.length}
              </p>

              <p className="mt-3 text-xs tracking-widest text-white/45">
                {Math.round((score / questions.length) * 100)}% CORRECT
              </p>

              <div className="mt-8 h-[3px] bg-white/10">
                <div
                  className="h-full bg-[#C9A96E] transition-all duration-700"
                  style={{
                    width: `${(score / questions.length) * 100}%`,
                  }}
                />
              </div>

              <p className="mt-6 text-xs leading-6 text-white/35">
                Assessment result based on your answers to the three
                knowledge-check questions.
              </p>
            </div>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={restartExperience}
                className="border border-[#C9A96E] px-8 py-5 text-[10px] tracking-[0.2em] text-[#C9A96E] transition hover:bg-[#C9A96E] hover:text-[#101214]"
              >
                RESTART EXPERIENCE
              </button>

              <a
                href="/"
                className="border border-white/15 px-8 py-5 text-[10px] tracking-[0.2em] text-white/55 transition hover:border-white/40 hover:text-white"
              >
                RETURN TO HOME
              </a>
            </div>
          </section>
        )}
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/[0.08] px-5 py-8 text-center">
        <p className="text-[9px] tracking-[0.2em] text-white/35">
          <span className="text-[#C9A96E]">SM</span> LAB
          {" · "}INDEPENDENT CONCEPT PROJECT{" · "}QUALITY IN ACTION
        </p>
        <p className="mt-3 text-[9px] text-white/20">
          Educational concept demonstration. Not an official ISO certification
          course.
        </p>
      </footer>
    </main>
  );
}
