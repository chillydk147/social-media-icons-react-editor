import React from 'react';

const CodeReact = ({backgroundColor,borderColor,borderWidth,borderStyle,icon,iconColor,iconSize,roundness,size,url}) => {
    let code = "<SocialMediaIconsReact "
    +"borderColor=\""+borderColor+"\" "
    +"borderWidth=\""+borderWidth+"\" "
    +"borderStyle=\""+borderStyle+"\" "
    +"icon=\""+icon+"\" "
    +"iconColor=\""+iconColor+"\" "
    +"backgroundColor=\""+backgroundColor+"\" "
    +"iconSize=\""+iconSize+"\" "
    +"roundness=\""+roundness+"\" "
    +"url=\""+url+"\" "
    +"size=\""+size+"\" />";
    return (
        <div>                 
            {code} 
        </div>
    );
}    

export default CodeReact;
