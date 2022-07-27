import Image from 'next/image';
import getImg from '../../../utils/getImg';
import arrowRight from '../../../assets/images/arrowRight.svg';
import mail from '../../../assets/images/mail.svg';
import { useState, useRef } from 'react';
import handleSubmit from '../../../pages/api/handleSubmit';

const InvolvedForm = ({data}) => {
  const {involvedFormImage, involvedFormTitle} = data;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [select, setSelect] = useState("");
  const modal = useRef();
  
  const modalVisible = () => {
    if(modal.current) {
      modal.current.classList.add('visible');
      setFirstName('');
      setLastName('');
      setCompany('');
      setEmail('');
    }    
  }
   
  const modalHide = () => {
    if(modal.current) {
      modal.current.classList.remove('visible');
    }    
  }

  const onBlur = (event) => {
    const isValid = event.target.checkValidity();
    if(!isValid) {
      event.target.classList.add('invalid');
    } else {
      event.target.classList.remove('invalid');
    }
  }

  return (
    <section className="ifktion">
      <div className="ifktion__modal" ref={modal}>
        <div className="ifktion__notification">
          <Image
            src={mail}
            width="46px"
            height="44px"
            alt="mail"
            layout="fixed"
          />
          <div className="ifktion__modal-close" onClick={modalHide}></div>
          <h3 className="ifktion__modal-title">Thank you!</h3>
          <p className="ifktion__modal-description"> We will send all important information to your e-mail address</p>
          <button className="ifktion__modal-button" onClick={modalHide}>Okay</button>
        </div>
      </div>
      <div className="ifktion__center">
        <h2 className="ifktion__title" id="form">{involvedFormTitle}</h2>
        <form className="ifktion__form" onSubmit={(event) => handleSubmit(event, firstName, lastName, company, email, select, modalVisible)}>
          <div className="ifktion__input-wrapper ifktion__half-input">
            <input name="firstname" type="text" maxLength="50" required 
            value={firstName} onChange={e => setFirstName(e.target.value)} />
            <span className="ifktion__placeholder" data-placeholder="First Name"></span>
          </div>
          <div className="ifktion__input-wrapper ifktion__half-input">
            <input name="lastname" type="text" maxLength="50" required 
            value={lastName} onChange={e => setLastName(e.target.value)}/>
            <span className="ifktion__placeholder" data-placeholder="Last Name"></span>
          </div>
          <div className="ifktion__input-wrapper">
            <input name="company" type="text" maxLength="50" required 
            value={company} onChange={e => setCompany(e.target.value)}/>
            <span className="ifktion__placeholder" data-placeholder="Company"></span>
          </div>
          <div className="ifktion__input-wrapper">
            <input name="email" type="email" maxLength="50" required
            value={email} onChange={e => setEmail(e.target.value)} onBlur={onBlur}/>
            <span className="ifktion__placeholder" data-placeholder="E-mail"></span>
          </div>    
          <label htmlFor="group" className="ifktion__form-subtitle">Which group do you best represent?</label>
          <select name="0-2/which_group_do_you_best_represent_" id="group" className="ifktion__select" onChange={e => setSelect(e.target.value)}>
            <option value="Large_Corporation">Large Corporation ($1 billion + in revenue)</option>
            <option value="Medium_Corporation">Medium Corporation ($10million - $1billion)</option>
            <option value="Small_Corporation">Small Corporation ($10million or less)</option>
            <option value="Large_NGO">Large NGO (100+ employees)</option>
            <option value="Small_NGO">Small NGO (less than 100 employees)</option>
            <option value="Government_&_Academia">Government & Academia</option>
          </select>          
          <button type="submit" className="ifktion__submit arrow-hover-right">
            Submit
            <Image src={arrowRight} alt="black arrow" className="arrow-image" />
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
