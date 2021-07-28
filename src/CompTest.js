import React from 'react';
import SocialMediaIconsReact from './social-media-icons-react';

class CompTest extends React.Component {
  render(){   
    return (
      <div>        
        <SocialMediaIconsReact icon="twitter" url="https://twitter.com/your-twitter-handle" iconSize="5" size="100"/>
      </div>
    );
  }
}

export default CompTest;
