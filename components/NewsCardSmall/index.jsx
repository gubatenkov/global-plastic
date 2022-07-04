import Image from 'next/image';

import img from 'assets/images/newsCardSmallImg.png';

const NewsCardSmall = () => {
  return (
    <div className="ncard-small">
      <div className="ncard-small__preview">
        <Image src={img} alt="img" objectFit="cover" />
      </div>
      <div className="ncard-small__content">
        <h3 className="ncard-small__content__title">
          <a href="#">
            Working together with World Wildlife Fund (WWF) and Greenpeace
          </a>
        </h3>
        <div className="ncard-small__content__bottom">
          <a className="ncard-small__content__bottom__link" href="#">
            Read more
            <svg
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 5L13.7071 4.29289L14.4142 5L13.7071 5.70711L13 5ZM1 6C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4V6ZM9.70711 0.292893L13.7071 4.29289L12.2929 5.70711L8.29289 1.70711L9.70711 0.292893ZM13.7071 5.70711L9.70711 9.70711L8.29289 8.29289L12.2929 4.29289L13.7071 5.70711ZM13 6H1V4H13V6Z"
                fill="#F9B131"
              ></path>
            </svg>
          </a>
          <div className="ncard-small__content__bottom__date">28.05 2021</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCardSmall;
