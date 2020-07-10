import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const About = () => (
  <Layout>
    <h1>About Me</h1>
    <p>Hi there. I'm Richard.</p>

    <p>
      I am a highly driven Full Stack JavaScript Developer from Amsterdam.
      Previously part of the Localization team at SEGA and more recently a
      dialogue editor at Apple Inc. in London on some amazing projects, before
      moving back to Amsterdam.
    </p>

    <p>
      I love meeting new people and learning new things, so please feel free to
      say hello or share a story with me. If you believe I can be of help in any
      way to you or your company, please get in touch or connect.
    </p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);

export default About;
