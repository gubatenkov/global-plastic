import Link from 'next/link';

const LinksSection = ({
  data: { linksSectionTitle, linksSectionCountries },
}) => {
  return (
    <section className="lection">
      <div className="container">
        <h2 className="lection__title">{linksSectionTitle}</h2>
        <ul className="lection__countries">
          {linksSectionCountries?.length &&
            linksSectionCountries.map((cName, idx) => {
              return (
                <li className="lection__countries__item" key={idx}>
                  <p className="lection__countries__item__name">
                    {cName}{' '}
                    <sup className="lection__countries__item__num">
                      {idx + 1}
                    </sup>
                  </p>
                  <Link href={`/country/${cName.toLowerCase()}`}>
                    <div className="lection__countries__item__icon arrow-hover-right">
                      <svg
                        className="arrow-image"
                        width="15"
                        height="10"
                        viewBox="0 0 15 10"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 5L13.7071 4.29289L14.4142 5L13.7071 5.70711L13 5ZM1 6C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4V6ZM9.70711 0.292893L13.7071 4.29289L12.2929 5.70711L8.29289 1.70711L9.70711 0.292893ZM13.7071 5.70711L9.70711 9.70711L8.29289 8.29289L12.2929 4.29289L13.7071 5.70711ZM13 6H1V4H13V6Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default LinksSection;
