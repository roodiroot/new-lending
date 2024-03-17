import TickerItem from './tisker-item';

const TiskerSection = () => {
  return (
    <div className=" overflow-hidden py-10 lg:py-20">
      <div className="relative">
        <div className="flex rotate-6">
          {new Array(5).fill(0).map((_, i) => (
            <TickerItem key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TiskerSection;
