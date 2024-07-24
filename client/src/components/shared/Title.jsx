// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Helmet } from 'react-helmet-async'

const Title=({
    // eslint-disable-next-line react/prop-types
    title="Chat App",
    // eslint-disable-next-line react/prop-types
    description="this is the chat app called memo"
})=> {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
    </Helmet>
  );
};

export default Title;