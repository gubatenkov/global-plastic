import { HeroPanel } from 'components';

export default function MissionHero(props) {
  return (
    <section className="mihero">
      <div className="container">
        <div className="mihero__inner">
          <p className="mihero__suptitle">Global Treaty for Plastics</p>
          <h1 className="mihero__title">
            The most important climate deal since the Paris Agreement
          </h1>
          <HeroPanel
            linkURL="#"
            leftText="656 days"
            centerText="till UNEA 6 2024"
          />
        </div>
      </div>
    </section>
  );
}
