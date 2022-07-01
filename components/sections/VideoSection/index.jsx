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
    </section>
  );
};

export default VideoSection;
