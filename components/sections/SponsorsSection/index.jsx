import Image from 'next/image';

import { urlForImage } from 'lib/sanity';

const SponsorsSection = ({ data: { sponsorsTitle, sponsorsImages } }) => {
  const duration = 24;
  const delayFn = (idx) => (idx + 1) * (duration / sponsorsImages.length);

  return (
    <section className="spection">
      <h2 className="spection__title">{sponsorsTitle}</h2>
      <ul className="spection__sponsors">
        {sponsorsImages?.length ? (
          sponsorsImages.map((img, idx) => {
            return (
              <li
                className="spection__sponsors-item"
                key={idx}
                style={{
                  '--distance-to-right': `${
                    (sponsorsImages.length - idx) * 100
                  }%`,
                  '--distance-to-left': `${(idx + 1) * -100}%`,
                  animation: `running-start ${delayFn(idx)}s linear,
                  running-left ${duration}s linear ${delayFn(idx)}s infinite`,
                }}
              >
                <Image
                  className="spection__sponsors-item__img"
                  src={urlForImage(img).fit('crop').url()}
                  layout="responsive"
                  width={160}
                  height={65}
                  objectFit="contain"
                  alt="img"
                />
              </li>
            );
          })
        ) : (
          <li>There is no items yet. Start to add in admin page :)</li>
        )}
      </ul>
    </section>
  );
};

export default SponsorsSection;
