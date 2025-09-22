type Props = {
  position: string;
  relativeY: string;
  relativeX: string;
  rotate?: string;
};
const Cubes = ({ position, relativeY, relativeX, rotate }: Props) => {
  return (
    <div className={`${position} ${relativeY} ${relativeX} ${rotate}`}>
      <div
        className="absolute left-0 top-0 h-11 w-11 rounded-[6px] opacity-70"
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className="absolute left-[65px] top-[22px] h-6 w-6 rounded-[3px] opacity-70"
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className="absolute left-[22px] top-[70px] h-9 w-8 rounded-[6px] opacity-60"
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className="absolute left-[90px] top-[62px] h-9 w-9 rounded-[6px] opacity-60"
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className="absolute left-[10px] top-[125px] h-3 w-4 rounded-[3px] opacity-30"
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className="absolute left-[115px] top-[10px] h-5 w-5 rounded-[3px] opacity-70"
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className="absolute left-[68px] top-[90px] h-4 w-4 rounded-[3px] opacity-60"
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className="absolute left-[140px] top-[40px] h-5 w-5 rounded-[3px] opacity-60"
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className="absolute left-[105px] top-[40px] h-4 w-4 rounded-[3px] opacity-60"
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className="absolute left-[2px] top-[55px] h-3 w-3 rounded-[3px] opacity-70"
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className="absolute left-[68px] top-[115px] h-4 w-4 rounded-[3px] opacity-30"
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
      <div
        className="absolute left-[125px] top-[105px] h-5 w-5 rounded-[3px] opacity-60"
        style={{ backgroundColor: 'var(--cubes-orange)' }}
      />
    </div>
  );
};

export default Cubes;
