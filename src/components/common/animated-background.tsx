export function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute left-0 top-0 h-full w-full bg-background">
        <div className="absolute h-full w-full bg-[radial-gradient(hsl(var(--primary)/0.1)_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,hsl(var(--background))_80%)]"></div>
        <div
          className="absolute inset-0 animate-aurora [background-image:radial-gradient(ellipse_at_100%_0%,hsl(var(--primary)/0.2)_0%,transparent_50%),radial-gradient(ellipse_at_0%_100%,hsl(var(--accent)/0.2)_0%,transparent_50%)] [background-size:200%_100%,200%_100%] [background-position:100%_0,0%_0] [background-repeat:no-repeat,no-repeat]"
        ></div>
      </div>
    </div>
  );
}
