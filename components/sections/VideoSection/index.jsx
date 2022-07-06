import Image from 'next/image';

import img from 'assets/images/author.png';
import img2 from 'assets/images/video.png';

const VideoSection = () => {
  return (
    <section className="vection">
      <div className="container">
        <div className="vection__inner">
          <div className="vection__left">
            <h2 className="vection__title">
              Peter Thomson Addresses the Chile Dialogues
            </h2>
            <p className="vection__text">
              I commend all of you for coming together today for the Chile
              Country Dialogues to ensure that national action on plastics
              begins immediately. We cannot afford to wait until the end of the
              negotiation process to start having these important conversations.
            </p>
            <div className="vection__author">
              <div className="vection__author-avatar">
                <Image
                  className="vection__author-avatar__img"
                  src={img}
                  alt="img"
                  layout="fill"
                />
              </div>
              <div className="vection__author-bio">
                <div className="vection__author-bio__name">Peter Thomson</div>
                <div className="vection__author-bio__text">
                  The United Nations Secretary-General`s Special Envoy for the
                  Ocean
                </div>
              </div>
            </div>
          </div>
          <div className="vection__right">
            <Image src={img2} alt="video" />
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
    </section>
  );
};

export default VideoSection;
