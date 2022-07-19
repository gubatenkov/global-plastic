import Image from 'next/image';
import getImg from '../../../utils/getImg'

const InvolvedForm = ({data}) => {
  const {involvedFormImage, involvedFormTitle} = data;

  return (
    <section className="ifktion">
      <div className="ifktion__center">
        <h2 className="ifktion__title">{involvedFormTitle}</h2>
        <form className="ifktion__form">
          <input type="text" placeholder="Name"className="ifktion__input ifktion__half--input"/>
          <input type="text" placeholder="Last Name"className="ifktion__input ifktion__half--input"/>
          <input type="email" placeholder="E-mail"className="ifktion__input"/>
          <input type="text" placeholder="Company"className="ifktion__input ifktion__half--input"/>
          <input type="text" placeholder="Job title"className="ifktion__input ifktion__half--input"/> 
          <label htmlFor="group" className="ifktion__label">Which group do you best represent?</label>
          <select name="group" id="group">
            <option value="large">Large Corporation ($1 billion + in revenue)</option>
            <option value="medium">Medium Corporation ($100 000 + in revenue)</option>
            <option value="small">Small Corporation ($10 000 + in revenue)</option>
            <option value="person">Individual person</option>
          </select>
          <h3 className="ifktion__checkbox-title">How did you hoar about us?</h3>
          <div className="ifktion__checkbox-wrapper">
            <label>
              <input type="checkbox" name="info" value="network" />
              Ocean Plastics Leadership Network
            </label>
            <label>
              <input type="checkbox" name="info" value="facebook" />
              Facebook
            </label>
            <label>
              <input type="checkbox" name="info" value="linkedin" />
              Linkedin
            </label>
          </div>
          <div className="ifktion__checkbox-wrapper">
            <label>
              <input type="checkbox" name="info" value="news" />
              News
            </label>
            <label>
              <input type="checkbox" name="info" value="twitter" />
              Twitter
            </label>
            <label>
              <input type="checkbox" name="info" value="other" />
              Other
            </label>
          </div>
          <button type="submit" className="ifktion__submit">
            Submit          
          </button>
        </form>
      </div>
      <div className="ifktion__imgbox">
        <Image className="ifktion__img" src={getImg(involvedFormImage)} alt="img" layout="fill" priority />
      </div>
    </section>
  );
};

export default InvolvedForm;
