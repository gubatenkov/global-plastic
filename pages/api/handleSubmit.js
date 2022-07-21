import axios from 'axios';

const handleSubmit = async (event, firstName, lastName, company, email, select, modalVisible) => {
  event.preventDefault();
  if(!firstName || !lastName || !company || !email) return;
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

export default handleSubmit;
