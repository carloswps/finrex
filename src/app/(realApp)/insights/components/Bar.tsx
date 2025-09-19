type Props = {
  width: string;
};
const Bar = ({ width }: Props) => {
  return <div className={`${width} mx-7 h-1 bg-[var(--red-theme)]`}></div>;
};

export default Bar;
