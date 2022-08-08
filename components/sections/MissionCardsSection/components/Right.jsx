import Image from 'next/image';
import img from 'assets/images/bubbleBgRight.png';

export default function Right({ activeIndex }) {
  return activeIndex === 2 ? (
    <div className="micarection__schema__top__imgbox">
      <Image className="top" src={img} alt="img" objectFit="cover" />
    </div>
  ) : (
    <svg
      width="168"
      height="174"
      viewBox="0 0 168 174"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M74.6032 1.2055C74.6032 1.2055 19.0307 -8.71287 19.4781 30.4403C19.9474 71.516 -9.36179 81.3454 3.25545 121.884C14.9004 159.299 110.203 194.51 142.873 158.336C175.336 122.391 176.992 60.6988 142.106 34.005C107.221 7.31108 74.6032 1.2055 74.6032 1.2055Z"
        fill="white"
      />
    </svg>
  );
}
