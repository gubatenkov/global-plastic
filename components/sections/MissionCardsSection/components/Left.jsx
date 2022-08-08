import Image from 'next/image';

import img from 'assets/images/seaBgBottom.png';

export default function Left({ activeIndex }) {
  return activeIndex === 3 ? (
    <div className="micarection__schema__top__imgbox">
      <Image className="top" src={img} alt="img" objectFit="cover" />
    </div>
  ) : (
    <svg
      width="179"
      height="154"
      viewBox="0 0 179 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M163.807 132.96C178.227 119.363 183.877 103.466 173.444 69.7201C163.012 35.9744 137.997 32.1199 105.15 14.1456C72.3038 -3.82858 48.1536 -4.83934 21.2034 12.7779C-24.3191 42.5357 15.0244 128.116 53.1275 145.924C91.2306 163.732 149.386 146.557 163.807 132.96Z"
        fill="white"
      />
    </svg>
  );
}
