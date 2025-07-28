type Props = {
        position: string;
        relativeY: string;
        relativeX: string;
        rotate?: string;
}
const Cubes = ({ position, relativeY, relativeX, rotate }: Props) => {
        return (
            <div className={`${position} ${relativeY} ${relativeX} ${rotate}`}>
                    <div
                        className="w-11 h-11 left-0 top-0 absolute rounded-[6px] opacity-70"
                        style={{ backgroundColor: "var(--cubes-orange)" }}
                    />
                    <div
                        className="w-6 h-6 left-[65px] top-[22px] absolute rounded-[3px] opacity-70"
                        style={{ backgroundColor: "var(--cubes-orange)" }}
                    />
                    <div
                        className="w-8 h-9 left-[22px] top-[70px] absolute rounded-[6px] opacity-60"
                        style={{ backgroundColor: "var(--cubes-orange)" }}
                    />
                    <div
                        className="w-9 h-9 left-[90px] top-[62px] absolute rounded-[6px] opacity-60"
                        style={{ backgroundColor: "var(--cubes-orange)" }}
                    />
                    <div
                        className="w-4 h-3 left-[10px] top-[125px] absolute rounded-[3px] opacity-30"
                        style={{ backgroundColor: "var(--cubes-orange)" }}
                    />
                    <div
                        className="w-5 h-5 left-[115px] top-[10px] absolute rounded-[3px] opacity-70"
                        style={{ backgroundColor: "var(--cubes-orange)" }}
                    />
                    <div
                        className="w-4 h-4 left-[68px] top-[90px] absolute rounded-[3px] opacity-60"
                        style={{ backgroundColor: "var(--cubes-orange)" }}
                    />
                    <div
                        className="w-5 h-5 left-[140px] top-[40px] absolute rounded-[3px] opacity-60"
                        style={{ backgroundColor: "var(--cubes-orange)" }}
                    />
                    <div
                        className="w-4 h-4 left-[105px] top-[40px] absolute rounded-[3px] opacity-60"
                        style={{ backgroundColor: "var(--cubes-orange)" }}
                    />
                    <div
                        className="w-3 h-3 left-[2px] top-[55px] absolute rounded-[3px] opacity-70"
                        style={{ backgroundColor: "var(--cubes-orange)" }}
                    />
                    <div
                        className="w-4 h-4 left-[68px] top-[115px] absolute rounded-[3px] opacity-30"
                        style={{ backgroundColor: "var(--cubes-orange)" }}
                    />
                    <div
                        className="w-5 h-5 left-[125px] top-[105px] absolute rounded-[3px] opacity-60"
                        style={{ backgroundColor: "var(--cubes-orange)" }}
                    />
            </div>
        );
};

export default Cubes;