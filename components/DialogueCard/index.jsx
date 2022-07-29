import Image from 'next/image';

import { urlForImage } from 'lib/sanity';

import img from 'assets/images/quotes.svg';

const DialogueCard = ({
  dialogsCardText,
  dialogsCardTitle,
  dialogsCardLink,
  dialogsCardImage,
  dialogsCardAvatar,
}) => {
  return (
    <div className="dialogue-card">
      <Image src={img} alt="icon" />
      <p className="dialogue-card__text">{dialogsCardText}</p>
      <div className="dialogue-card__bottom">
        <div className="dialogue-card__bottom-left">
          {dialogsCardAvatar && (
            <div className="dialogue-card__bottom-avatar">
              <Image
                className="dialogue-card__bottom-avatar__img"
                src={urlForImage(dialogsCardAvatar).url()}
                width="48"
                height="48"
                alt="avatar"
                objectFit="cover"
              />
            </div>
          )}
          <div className="dialogue-card__bottom-text">
            <p className="dialogue-card__bottom-text__title">
              {dialogsCardTitle}
            </p>
            <a
              className="dialogue-card__bottom-text__link"
              href={dialogsCardLink.dialogsCardLinkURL}
            >
              {dialogsCardLink.dialogsCardLinkText}
            </a>
          </div>
        </div>
        <div className="dialogue-card__bottom-imgbox">
          <Image
            src={urlForImage(dialogsCardImage).width(120).url()}
            layout="responsive"
            width={120}
            height={50}
            objectFit="contain"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default DialogueCard;
