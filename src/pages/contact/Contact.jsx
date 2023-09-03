import React from 'react';
import BannerContact from './bannercontact/BannerContact';
import ContactForm from './contactform/ContactForm';
import Googlemap from './googlemap/Googlemap';
import NewsletterArea from '../home/newsletterarea/NewsletterArea';
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
      <section className='google-map'>
        <Googlemap/>
      </section>
      <section className='news-letter-area'>
        <NewsletterArea/>
      </section>
    </div>
  );
}

export default Contact;
 