import { useRouter } from "next/router";

const Page404 = () => {
  const router = useRouter();

  return (
    <section className="errorktion">
      <div className="errorktion__center">
      <div className="errorktion__content">      
        <div className="errorktion__icon">
          <div className="errorktion__close"></div>
        </div>
        <h2 className="errorktion__title">404</h2>
        <p className="errorktion__subtitle">Page Not Found</p>
          <a className="errorktion__link" onClick={() => router.push("/")}>
            Back to homepage
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
        <div className="errorktion__images">
          <div className="errorktion__img1"></div>
          <div className="errorktion__img2"></div>
          <div className="errorktion__shape1"></div>
          <div className="errorktion__shape2"></div>          
        </div>
      </div>
    </section>
  );
};

export default Page404;
