import React from 'react';
/*import scss*/
import '../googlemap/Googlemap.scss';
const Googlemap = () => {
    return (
        <div className='ggmap-box'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.159240229309!2d105.7645838747951!3d20.986252989238118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134533bd5bb18c7%3A0x4e2977ff57fbbf9d!2zTmfDtSA5MSwgbMOgbmcgTmfhu41jIMSQ4bqhaSwgxJDhuqFpIE3hu5csIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1693723526307!5m2!1svi!2s"
                width="100%"
                height="500"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

        </div>
    );
}

export default Googlemap;
