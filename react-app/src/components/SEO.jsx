import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type }) {
  const defaultTitle = 'Citizens Medical Centre (CMC Dhanbad) | Best Hospital in Dhanbad';
  const defaultDescription = 'CMC Dhanbad is a premier multi-specialty hospital offering advanced medical interventions, 24/7 emergency response, and compassionate patient care.';
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | CMC Dhanbad` : defaultTitle}</title>
      <meta name='description' content={description || defaultDescription} />
      
      {/* OpenGraph tags */}
      <meta property='og:type' content={type || 'website'} />
      <meta property='og:title' content={title || defaultTitle} />
      <meta property='og:description' content={description || defaultDescription} />
      <meta property='og:site_name' content='Citizens Medical Centre' />
      
      {/* Twitter tags */}
      <meta name='twitter:creator' content={name || 'CMC Dhanbad'} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title || defaultTitle} />
      <meta name='twitter:description' content={description || defaultDescription} />
    </Helmet>
  );
}
