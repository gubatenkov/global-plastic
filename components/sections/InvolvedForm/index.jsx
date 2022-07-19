import Image from 'next/image';
import getImg from '../../../utils/getImg'

const InvolvedForm = ({data}) => {
  const {involvedFormImage, involvedFormTitle} = data;

  return (
    <section className="ifktion">
      <div className="ifktion__center">
        <h2 className="ifktion__title">{involvedFormTitle}</h2>
        <form className="ifktion__form">
          <input type="text" placeholder="Name *"className="ifktion__input ifktion__half--input"/>
          <input type="text" placeholder="Last Name *"className="ifktion__input ifktion__half--input"/>
          <input type="email" placeholder="E-mail *"className="ifktion__input"/>
          <input type="text" placeholder="Company *"className="ifktion__input ifktion__half--input"/>
          <input type="text" placeholder="Job title *"className="ifktion__input ifktion__half--input"/> 
          <label htmlFor="group" className="ifktion__form-subtitle">Which group do you best represent?</label>
          <select name="group" id="group" className="ifktion__input ifktion__select">
            <option value="large">Large Corporation ($1 billion + in revenue)</option>
            <option value="medium">Medium Corporation ($10million - $1billion)</option>
            <option value="small">Small Corporation ($10million or less)</option>
            <option value="largeNGO">Large NGO (100+ employees)</option>
            <option value="smallNGO">Small NGO (less than 100 employees)</option>
            <option value="government">Government & Academia</option>
          </select>
          <h3 className="ifktion__form-subtitle">How did you hoar about us?</h3>
          <div className="ifktion__checkbox-wide-wrapper">
            <label className="ifktion__label">
              <input type="checkbox" name="info" value="network" className="ifktion__checkbox" />
              Ocean Plastics Leadership Network
            </label>
            <label className="ifktion__label">
              <input type="checkbox" name="info" value="facebook" className="ifktion__checkbox"/>
              Facebook
            </label>
            <label className="ifktion__label">
              <input type="checkbox" name="info" value="linkedin" className="ifktion__checkbox"/>
              Linkedin
            </label>
          </div>
          <div className="ifktion__checkbox-wrapper">
            <label className="ifktion__label">
              <input type="checkbox" name="info" value="news" className="ifktion__checkbox"/>
              News
            </label>
            <label className="ifktion__label">
              <input type="checkbox" name="info" value="twitter" className="ifktion__checkbox"/>
              Twitter
            </label>
            <label className="ifktion__label">
              <input type="checkbox" name="info" value="other" className="ifktion__checkbox"/>
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
