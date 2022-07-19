import Image from 'next/image';
import getImg from '../../../utils/getImg'

const InvolvedForm = ({data}) => {
  const {involvedFormImage, involvedFormTitle} = data;

  return (
    <section className="ifktion">
      <div className="ifktion__center">
        <h2 className="ifktion__title">{involvedFormTitle}</h2>
      </div>
      <div className="ifktion__imgbox">
        <Image className="ifktion__img" src={getImg(involvedFormImage)} alt="img" layout="fill" priority />
      </div>
    </section>
  );
};

export default InvolvedForm;
