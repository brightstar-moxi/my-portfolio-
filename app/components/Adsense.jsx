
import React from 'react';

const AdSense = ({ pId }) => {
  return (
    <script async src= {`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client==ca-pub-${pId}`}
    crossorigin="anonymous"></script>
    
    
  );
};

export default AdSense;
