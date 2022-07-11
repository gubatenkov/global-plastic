import { useState, useEffect } from 'react'

const EcoSentiment = ({data}) => {
  const {ecoSentimentTitle, ecoSentimentDescriptionPart1, ecoSentimentDescriptionPart2, ecoSentimentLinkName, ecoSentimentLinkHref, ecoSentimentDiagramData, ecoSentimentDiagramDescription } = data;

  const [temperatureHeight, setTemperatureHeight] = useState(528);
  const [scaleHeight, setScaleHeight] = useState(425);
  const [textHeight, setTextHeight] = useState(80);

  const getResizeHeight = () => {
    if (typeof window !== 'undefined' && window.screen.width <= 480) {
      setTemperatureHeight(400);
      setScaleHeight(320);
      setTextHeight(60);
    } else if (typeof window !== 'undefined' && window.screen.width > 480) {
      setTemperatureHeight(528);
      setScaleHeight(425);
      setTextHeight(80);
    } 
  };

  useEffect(() => {
    getResizeHeight();
    if (window) {
      const listener = window.addEventListener('resize', getResizeHeight);
      return () => window.removeEventListener('resize', listener);
    }
  }, []);

  const valueHeight = scaleHeight * ecoSentimentDiagramData / 10 + (temperatureHeight-scaleHeight) / 2;
  const dataHeight = scaleHeight - valueHeight + textHeight;

  return (
    <section className="ecosektion">
        <div className="ecosektion__center">
        <div className="ecosektion__content">
          <h2 className="ecosektion__title">{ecoSentimentTitle}</h2>
          <div className="ecosektion__description">
            <p>{ecoSentimentDescriptionPart1}</p>
            <p>{ecoSentimentDescriptionPart2}</p>
          </div>
          <a href={ecoSentimentLinkHref} className="ecosektion__link" >
            {ecoSentimentLinkName}
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
              />
            </svg>
          </a>
        </div>
        <div className="ecosektion__diagram">
          <div className="ecosektion__diagram--image">
            <div className="ecosektion__temperature">
              <div className="ecosektion__value" style={{height: `${valueHeight}px`}}></div>
            </div>            
            <div className="ecosektion__scale"></div>
          </div>
          <div className="ecosektion__diagram--data" style={{paddingTop: `${dataHeight}px`}}>
            <div className="ecosektion__diagram--number">{ecoSentimentDiagramData}</div>
            <div className="ecosektion__diagram--description">{ecoSentimentDiagramDescription}</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EcoSentiment;