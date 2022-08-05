import Image from 'next/image';

import Bubble from './components/Bubble';
import Shield from './components/Shield';
import AnimatedBubble from './components/AnimatedBubble';

import { urlForImage } from 'lib/sanity';

export default function TextImgSesction({ title, text, image }) {
  return (
    <section className="timection">
      <div className="container">
        <div className="timection__inner">
          <div className="timection__left">
            <div className="timection__icon">
              <Bubble className="timection__icon__bubble" color="#fff" />
              <Shield className="timection__icon__shield" />
            </div>
            <h2 className="timection__title">{title}</h2>
            <p className="timection__text">{text}</p>
          </div>
          <div className="timection__right">
            <div className="timection__preview">
              <Image
                className="timection__preview__img"
                width={550}
                height={550}
                src={urlForImage(image).url()}
                alt="img"
              />
            </div>
            <AnimatedBubble className="timection__right__bubble" />
          </div>
        </div>
      </div>
    </section>
  );
}
