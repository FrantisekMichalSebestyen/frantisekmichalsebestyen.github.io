import { forwardRef } from "react";

interface PortfolioCardProps extends React.HTMLAttributes<HTMLButtonElement> {
  src: string;
  style?: React.CSSProperties;
}

const PortfolioCard = forwardRef<HTMLButtonElement, PortfolioCardProps>(
  ({ style, ...props }, ref) => {
    return (
      <div className="relative">
        <button
          ref={ref}
          className="touch-non rounded-3xl bg-white overflow-hidden px-1 shadow-white/50 shadow-md drop-shadow-md will-change-transform inline-block"
          style={style}
          {...props}
        >
          <video width="320" height="240" controls={false} autoPlay>
            <source src="/portfolio/atlas.mp4" type="video/mp4"></source>
          </video>
        </button>
        <span className="text-5xl absolute -left-4 -bottom-4 drop-shadow-2xl z-10 font-gothic">
          Atlas SNG
        </span>
      </div>
    );
  },
);

PortfolioCard.displayName = "Portfolio";

export default PortfolioCard;
