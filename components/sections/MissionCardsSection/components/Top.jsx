import img from 'assets/images/Ellipse 7130.png';
import Image from 'next/image';

export default function Top({ activeIndex }) {
  return activeIndex === 1 ? (
    <div className="micarection__schema__top__imgbox">
      <Image className="top" src={img} alt="img" objectFit="cover" />
    </div>
  ) : (
    <svg
      width="166"
      height="123"
      viewBox="0 0 166 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M164.627 79.9551C157.677 116.746 143.165 108.338 97.627 111.455C72.1865 113.197 19.6188 137.961 3.62612 106.461C-12.3666 74.9612 26.5046 1.7084 81.6452 0.243463C134.911 -3.79209 171.577 43.1647 164.627 79.9551Z"
        fill="white"
      />
    </svg>
  );
}
