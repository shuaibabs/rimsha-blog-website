export function GridAnimation() {
    return (
        <div
            className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
            aria-hidden="true"
        >
            <div className="absolute h-full w-full bg-[linear-gradient(to_right,hsl(var(--primary)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] animate-grid [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]">
            </div>
        </div>
    )
}
