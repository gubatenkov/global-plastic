export default function MediaHero({
  data: {
    title,
    suptitle,
    link: { linkText, linkUrl },
  },
}) {
  return (
    <section className="mhero">
      <div className="container">
        <div className="mhero__inner">
          <p className="mhero__date">{suptitle}</p>
          <h1 className="mhero__title">{title}</h1>
          <a className="mhero__link arrow-hover-right" href={linkUrl}>
            {linkText}
            <svg
              className="arrow-image"
              width="15"
              height="11"
              fill="none"
              viewBox="0 0 15 11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 5.5L13.7071 4.79289L14.4142 5.5L13.7071 6.20711L13 5.5ZM1 6.5C0.447715 6.5 0 6.05228 0 5.5C0 4.94772 0.447715 4.5 1 4.5V6.5ZM9.70711 0.792893L13.7071 4.79289L12.2929 6.20711L8.29289 2.20711L9.70711 0.792893ZM13.7071 6.20711L9.70711 10.2071L8.29289 8.79289L12.2929 4.79289L13.7071 6.20711ZM13 6.5H1V4.5H13V6.5Z"
                fill="#F9B131"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
