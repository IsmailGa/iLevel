import ReactPixel from 'react-facebook-pixel';

const PIXEL_ID = '880165347354430';

const options = {
    autoConfig: true,
    debug: process.env.NODE_ENV !== 'production'
};

export const initFacebookPixel = () => {
    if (typeof window === 'undefined') {
        return;
    }

    ReactPixel.init(PIXEL_ID, undefined, options);
    ReactPixel.pageView();
    
    if (options.debug) {
        console.log('Facebook Pixel initialized with ID:', PIXEL_ID);
    }
};

export const trackCustomEvent = (eventName: string, data = {}) => {
    ReactPixel.track(eventName, data);
};