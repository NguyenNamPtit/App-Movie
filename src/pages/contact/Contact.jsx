import React from 'react';
import BannerContact from './bannercontact/BannerContact';
import ContactForm from './contactform/ContactForm';
/*import scss*/
import '../contact/Contact.scss';

const Contact = () => {
  return (
    <div>
      <section className='banner-contact'>
        <BannerContact/>
      </section>
      <section className='form-contact'>
        <ContactForm/>
      </section>
    </div>
  );
}

export default Contact;
 