import Image from 'next/image';
import getImg from '../../../utils/getImg';
import arrowRight from '../../../assets/images/arrowRight.svg';
import mail from '../../../assets/images/mail.svg';
import { useState, useRef } from 'react';
import axios from 'axios';

const InvolvedForm = ({data}) => {
  const {involvedFormImage, involvedFormTitle} = data;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [select, setSelect] = useState("");

  const modal = useRef();
  
  const modalVisible = () => {
    modal.current.classList.add('visible');
  }
  
  const modalHide = () => {
    modal.current.classList.remove('visible');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!firstName || !lastName || !company || !email || !select) return;
    const response = await submit_hubspot_form(firstName, lastName, company, email, select);
    if(response.status == 200) {
      modalVisible();
    }
  }

  const submit_hubspot_form = async (firstName, lastName, company, email, select) => {
    const portalId = process.env.NEXT_PUBLIC_PORTAL_ID;
    const formGuid = process.env.NEXT_PUBLIC_CONTACT_FORM_GUID;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },  
    }
    const response = await axios.post(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        portalId,
        formGuid,
        fields: [
          {
            name: 'firstname',
            value: firstName,
          },
          {
            name: 'lastname',
            value: lastName,
          },
          {
            name: 'company',
            value: company,
          },
          {
            name: 'email',
            value: email,
          },
          {
            name: '0-2/which_group_do_you_best_represent_',
            value: select,
          }
        ],
      },
      config
    );
    return response;
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
        <form className="ifktion__form" onSubmit={handleSubmit}>
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
            value={email} onChange={e => setEmail(e.target.value)} />
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
