export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-[88vh] flex-col items-center justify-center py-12 text-center"
    >
      <div className="mx-auto w-full max-w-4xl space-y-6">

        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/70">
          Hi, I am
        </p>

        {/* Display name */}
        <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-bold leading-[1.0] tracking-tight text-white">
          Shashikanth<br className="hidden sm:block" />{" "}
          <span className="text-[#c8e6f5]">Guduri</span>
        </h1>

        {/* Role */}
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm">
          Junior Developer &nbsp;·&nbsp; Full Stack &nbsp;·&nbsp; AI &nbsp;·&nbsp; AWS
        </p>

        {/* Short bio */}
        <p className="mx-auto max-w-lg text-base leading-8 text-slate-400 sm:text-lg">
          Building scalable full-stack applications with{" "}
          <strong className="font-semibold text-white">React</strong>,{" "}
          <strong className="font-semibold text-white">Node.js</strong>,{" "}
          <strong className="font-semibold text-white">Python (FastAPI)</strong>, and{" "}
          <strong className="font-semibold text-white">AWS</strong>.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 hover:shadow-[0_0_28px_rgba(103,232,249,0.4)]"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/[0.18] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:text-cyan-200"
          >
            Let's Talk
          </a>
        </div>

      </div>
    </section>
  );
}
