import { HeroPanel } from 'components';

export default function MissionHero({
  title,
  suptitle,
  panelBoldText,
  panelText,
  panelLinkUrl,
}) {
  return (
    <section className="mihero">
      <div className="container">
        <div className="mihero__inner">
          <p className="mihero__suptitle">{suptitle}</p>
          <h1 className="mihero__title">{title}</h1>
          <HeroPanel
            linkURL={panelLinkUrl}
            leftText={panelBoldText}
            centerText={panelText}
          />
        </div>
      </div>
    </section>
  );
}
