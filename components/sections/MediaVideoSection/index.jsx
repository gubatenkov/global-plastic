import Image from 'next/image';
import { useState } from 'react';
import getYouTubeID from 'get-youtube-id';

import Bubble from './components/Bubble';
import { VideoPopup } from 'components';

export default function MediaVideoSection({
  data: { title, country, region, link, subtitle, video },
}) {
  const [isVideoPopupShown, setVideoPopupShown] = useState(false);
  const vidId = getYouTubeID(video?.url);

  return (
    <section className="mevidection">
      <div className="container">
        <div className="mevidection__inner">
          <div className="mevidection__left">
            <p className="mevidection__suptitle">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.39654 13.1324C9.52503 12.5236 12.6654 10.5412 12.6654 7.33317C12.6654 4.75584 10.576 2.6665 7.9987 2.6665C5.42137 2.6665 3.33203 4.75584 3.33203 7.33317C3.33203 10.5412 6.47236 12.5236 7.60086 13.1324C7.85156 13.2676 8.14584 13.2676 8.39654 13.1324ZM8 9.33319C9.10457 9.33319 10 8.43776 10 7.33319C10 6.22862 9.10457 5.33319 8 5.33319C6.89543 5.33319 6 6.22862 6 7.33319C6 8.43776 6.89543 9.33319 8 9.33319Z"
                  fill="#F9B131"
                />
              </svg>
              {region} &#x2022; {country}
            </p>
            <h2 className="mevidection__title">{title}</h2>
            <p className="mevidection__text">{subtitle}</p>
            <a className="mevidection__link arrow-hover-right" href={link}>
              Read more
              <svg
                className="arrow-image"
                width="15"
                height="11"
                fill="none"
                viewBox="0 0 15 11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 5.5L13.7071 4.79289L14.4142 5.5L13.7071 6.20711L13 5.5ZM1 6.5C0.447715 
                  6.5 0 6.05228 0 5.5C0 4.94772 0.447715 4.5 1 4.5V6.5ZM9.70711 0.792893L13.7071 
                  4.79289L12.2929 6.20711L8.29289 2.20711L9.70711 0.792893ZM13.7071 6.20711L9.70711 
                  10.2071L8.29289 8.79289L12.2929 4.79289L13.7071 6.20711ZM13 6.5H1V4.5H13V6.5Z"
                  fill="#F9B131"
                />
              </svg>
            </a>
          </div>
          <div className="mevidection__right">
            <div
              className="mevidection__videopreview"
              onClick={() => setVideoPopupShown(true)}
            >
              {typeof vidId === 'string' ? (
                <Image
                  src={`https://img.youtube.com/vi/${vidId}/0.jpg`}
                  alt="YouTube video thumbnail"
                  layout="responsive"
                  width={530}
                  height={530}
                  objectFit="cover"
                  style={{ transform: 'scale(1.2)' }}
                />
              ) : (
                <div />
              )}
              <div className="vection__center__video__play" />
            </div>
            <Bubble className="mevidection__right__bubble" />
          </div>
        </div>
      </div>
      {isVideoPopupShown && (
        <VideoPopup videoId={vidId} onClose={() => setVideoPopupShown(false)} />
      )}
    </section>
  );
}
