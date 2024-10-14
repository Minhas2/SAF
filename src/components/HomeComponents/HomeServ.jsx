import React from 'react';
import './HomeServ.css';

export default function HomeServ() {
  // Array of service data based on the image content
  const services = [
    {
      title: 'WEB COPY',
      description: 'Copywriting and SEO services. Turn a standard website into a valuable brand experience.',
    },
    {
      title: 'DIRECT RESPONSE',
      description: 'Emails, newsletters, and direct mail. Use language guaranteed to deliver action.',
    },
    {
      title: 'FILM & TV SCRIPTS',
      description: 'Laugh. Cry. Buy. Whatever you need from a film, start with a script that puts less pressure on production.',
    },
    {
      title: 'RADIO',
      description: 'Cut through the noise with a script that embraces the unique intimacy of radio.',
    },
    {
      title: 'ADVERTISING IDEAS',
      description: 'Ideas big enough to be executed across media. Award-winning concept development for any kind of client.',
    },
    {
      title: 'NAMES, TAGLINES & SLOGANS',
      description: 'Crystallize your brand promise into a name and a line that will remain stuck in the mind.',
    },
    {
      title: 'BRAND DEVELOPMENT',
      description: 'Help your brand find a tone of voice, sharpen positioning, or craft a compelling brand story.',
    },
    {
      title: 'CONTENT CREATION',
      description: 'White papers, blogs, and articles. Researched brand journalism on any topic under the sun.',
    },
    {
      title: 'SOCIAL MEDIA',
      description: 'Build differentiation and personality for social media assets with tone guidelines and example content.',
    },
    {
      title: 'PRESS & PRINT',
      description: 'Headlines that demand attention. Writing that draws you in. Ads that don’t read like you’re being sold to.',
    },
    {
      title: 'BROCHURES & CATALOGUES',
      description: 'Turn a brochure into a brand statement. Make your catalogue clear and compelling.',
    },
    {
      title: 'PRESENTATIONS & PITCHES',
      description: 'Create context and craft a story to show your ideas and thinking in the best possible light.',
    },
  ];

  return (
    <div className="container py-5">
      <h1 className='mb-5 text-center'>My Services</h1>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-lg-6 col-6 mb-4" key={index}>
            <h3 className="mb-3">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
