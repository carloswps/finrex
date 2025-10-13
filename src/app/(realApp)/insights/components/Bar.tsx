type Props = {
  width: string;
  barColor: string;
};
const Bar = ({ width, barColor }: Props) => {
  return <div style={{ backgroundColor: `var(--${barColor})` }} className={`${width} mx-7 h-1`}></div>;
};

export default Bar;
