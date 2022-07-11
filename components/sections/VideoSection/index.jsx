import Image from 'next/image';
import { useState } from 'react';
import getYouTubeId from 'get-youtube-id';

import { VideoPopup } from 'components';
import { urlForImage } from 'lib/sanity';

const VideoSection = ({
  data: {
    videoSectionTitle,
    videoSectionVideo,
    videoSectionQuote,
    videoSectionAuthorName,
    videoSectionAuthorJob,
    videoSectionAuthorImage,
  },
}) => {
  const [isVideoPopupShown, setVideoPopupShown] = useState(false);
  const vidId = getYouTubeId(videoSectionVideo?.url);

  return (
    <section className="vection">
      <div className="container">
        <div className="vection__inner">
          <div className="vection__left">
            <h2 className="vection__title">{videoSectionTitle}</h2>
            <div className="vection__center">
              <p className="vection__center__text">{videoSectionQuote}</p>
              <div
                className="vection__center__video"
                onClick={() => setVideoPopupShown(true)}
              >
                {typeof vidId === 'string' ? (
                  <Image
                    src={`https://img.youtube.com/vi/${vidId}/0.jpg`}
                    alt="YouTube video thumbnail"
                    layout="responsive"
                    width={276}
                    height={276}
                    objectFit="cover"
                    style={{ transform: 'scale(1.2)' }}
                  />
                ) : (
                  <div />
                )}
                <div className="vection__center__video__play" />
              </div>
            </div>
            <div className="vection__author">
              <div className="vection__author-avatar">
                <Image
                  className="vection__author-avatar__img"
                  src={urlForImage(videoSectionAuthorImage).url()}
                  alt="img"
                  layout="fill"
                />
              </div>
              <div className="vection__author-bio">
                <div className="vection__author-bio__name">
                  {videoSectionAuthorName}
                </div>
                <div className="vection__author-bio__text">
                  {videoSectionAuthorJob}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="vection__egg1"
        width="72"
        height="71"
        viewBox="0 0 72 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.192198 46.0374C3.69946 8.52089 22.4049 -4.57999 48.4331 1.37488C73.8446 10.903 78.217 46.4424 63.9074 56.161C39.3568 72.835 -3.20983 82.4282 0.192198 46.0374Z"
          fill="#F9B131"
        />
      </svg>
      <svg
        className="vection__egg2"
        width="47"
        height="47"
        viewBox="0 0 47 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-2.38691e-06 31.331C-3.05744e-06 23.661 6.61301 19.0479 11.7895 16.065C17.9582 12.5102 32 17.9085 32 31.331C32 42.0691 26.9804 46.0319 24.4706 46.6711C15.5789 48.9356 -1.71637e-06 39.0011 -2.38691e-06 31.331Z"
          fill="#F9B131"
        />
        <path
          d="M47 7.9003C47 11.7745 42.6078 12.7431 40.4118 12.7431C37.7368 12.7426 31 14.6802 31 7.9003C31 2.47635 33.5098 0.474651 34.7647 0.151797C39 -0.937836 47 4.02605 47 7.9003Z"
          fill="#F9B131"
        />
      </svg>
      {isVideoPopupShown && (
        <VideoPopup videoId={vidId} onClose={() => setVideoPopupShown(false)} />
      )}
    </section>
  );
};

export default VideoSection;
