export function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-background bg-[radial-gradient(hsl(var(--primary)/0.15)_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,hsl(var(--background))_80%)]"></div>
    </div>
  );
}
