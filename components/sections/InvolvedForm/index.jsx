import Image from 'next/image';
import getImg from '../../../utils/getImg';
import arrowRight from '../../../assets/images/arrowRight.svg';

const InvolvedForm = ({data}) => {
  const {involvedFormImage, involvedFormTitle} = data;

  return (
    <section className="ifktion">
      <div className="ifktion__center">
        <h2 className="ifktion__title">{involvedFormTitle}</h2>
        <form className="ifktion__form">
          <input type="text" placeholder="First Name *"className="ifktion__input ifktion__half--input" name="firstname" required/>
          <input type="text" placeholder="Last Name *"className="ifktion__input ifktion__half--input" name="lastname" required/>
          <input type="text" placeholder="Company *"className="ifktion__input" name="company" required/>
          <input type="email" placeholder="E-mail *"className="ifktion__input" name="email" required/>     
          <label htmlFor="group" className="ifktion__form-subtitle">Which group do you best represent?</label>
          <select name="0-2/which_group_do_you_best_represent_" id="group" className="ifktion__select">
            <option value="large">Large Corporation ($1 billion + in revenue)</option>
            <option value="medium">Medium Corporation ($10million - $1billion)</option>
            <option value="small">Small Corporation ($10million or less)</option>
            <option value="largeNGO">Large NGO (100+ employees)</option>
            <option value="smallNGO">Small NGO (less than 100 employees)</option>
            <option value="government">Government & Academia</option>
          </select>          
          <button type="submit" className="ifktion__submit">
            Submit
            <Image src={arrowRight} alt="black arrow" />
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
