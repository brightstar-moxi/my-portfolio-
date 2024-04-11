"use client"
import { React, useEffect } from 'react';

const AdBanner = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    return (
        // <!-- money making -->
        <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-7511126905302510"
            data-ad-slot="2669317716"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
    );
};

export default AdBanner;
