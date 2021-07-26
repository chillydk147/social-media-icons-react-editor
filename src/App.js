import React from 'react';

import { withStyles } from '@material-ui/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  app: {
    backgroundColor:"#000",
    padding: "20px;"
  },
  codeDiv:{
    border:"1px solid rgba(0, 0, 0, 0.23)",
    padding: "20px",
    color: "#FFF"
  },
  codeWrapper:{
    padding: "50px"    
  },
  control:{
    marginBottom:"10px"
  },
  controlLabel:{
    color:"#FFF",
    display:"block",
    marginBottom:"5px"
  },
  controlSection:{
    padding:"10px",
    border:"1px solid rgba(0, 0, 0, 0.23)",
    marginBottom:"5px"
  },
  controlSelect:{
    color:"#FFF"
  },  
  description:{
    color:"#FF0"
  },
  header:{
    color: "#fff"
  },
  heading:{
    color: "#40A9F3"
  },
  iconWrapper:{
    textAlign: "center",
    display: "table",
    height: "300px"
  },
  icon: {
    display: "table-cell",
    verticalAlign: "middle"
  },
  link:{
    color: "#40A9F3"
  },
  mainPanel:{
    width: "99%"    
  },
  panel:{
    marginBottom: "10px",
    border:"3px solid rgba(0, 0, 0, 0.23)",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "10px",
    backgroundColor: "#474540",
  },
  textField:{
    '& input[type=text]':{
      color: "#fff"
    }    
  },
  title: {
    color:"#40A9F3",
    display:"block",
    marginBottom:"10px"
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onUpdateBorderColor = this.onUpdateBorderColor.bind(this);
    this.onUpdateBorderStyle = this.onUpdateBorderStyle.bind(this);
    this.onUpdateBorderWidth = this.onUpdateBorderWidth.bind(this);
    this.onUpdateColor = this.onUpdateColor.bind(this);
    this.onUpdateIcon = this.onUpdateIcon.bind(this);
    this.onUpdateIconColor = this.onUpdateIconColor.bind(this);
    this.onUpdateIconSize = this.onUpdateIconSize.bind(this);
    this.onUpdateRoundness = this.onUpdateRoundness.bind(this);
    this.onUpdateSize = this.onUpdateSize.bind(this);
    this.onUpdateUrl = this.onUpdateUrl.bind(this);
    this.updateSvg = this.updateSvg.bind(this);
    this.state = {
      borderColor: "rgba(0,0,0,0.25)",
      borderStyle: "solid",
      borderWidth: 5,
      color: "rgba(28,186,223,1)",
      icon: "twitter",
      iconColor: "rgba(255,255,255,1)",
      iconSize: 5,      
      roundness: 20,
      size:100,
      svgCode: "<b>abc</b>",
      url: "https://some-website.com/my-social-media-url",
    };
  }
  animate(){
    let self = this;
    let icons = ["twitter","facebook","googleplus","instagram","vk","ok","linkedin","aboutme","slideshare","ello","vimeo","youtube","youtube-play","coub","medium","wordpress","tumblr","livejournal","pocket","rss","skype","phone","mail","send","send-light","map","yelp","foursquare","swarm","tripadvisor","pinterest","pinterest-light","behance","dribbble","etsy","etsy-short","flikr","500px","vscogrid","photobucket","quora","stackoverflow","github","codepen","jsfiddle","producthunt","kickstarter","reddit","reddit-light","stumbleupon","delicious","digg","deviantart","slack","messenger","snapchat","line-icon","line","angellist","xing","viadeo","upwork","envato","periscope","bookmate","shopify","favorite","apple","android","googleplay","windows","amazon","dropbox","googledrive","evernote","sketch","web"];
    let index = icons.length-1;
    let max = 200;
    let colors = [max,0,0];
    let colorIndexCount = 0;
    let colorIndex = 1;
    let cutOffs = [28,186,223];
    let directions = [0,1,1];
    let roundness = 50;
    

    let t2 = setInterval(function(){
      let v = colors[colorIndex];
      let next = false;
      if(directions[colorIndex]===1){
        v++;
        if(v>=cutOffs[colorIndex]){
          next = true;
        }        
      }
      else{
        v--;
        if(v<=cutOffs[colorIndex]){
          next = true;
        } 
      }
      colors[colorIndex] = v;

      let red = colors[0];
      let green = colors[1];
      let blue = colors[2];

      let color = "rgba("+red+","+green+","+blue+",1)"
      self.setState({
        color: color
      });

      if(next===true){
        colorIndexCount++;
        if(colorIndexCount>2){
          clearInterval(t2);
        }
        colorIndex--;
        if(colorIndex<0){
          colorIndex = 2;
        }
      }      
    },103);

    let t1 = setInterval(function(){
      self.setState({
        icon: icons[index]
      });
      index--;
      
      if(index===-1){
        clearInterval(t1);
      }
    },780);

    let t3 = setInterval(function(){
      self.setState({
        roundness: roundness
      });
      roundness--;
      
      if(roundness===19){
        clearInterval(t3);
      }
    },2000);
  }
  componentDidMount(){
    //this.updateSvg();
  }
  onUpdateBorderColor(colorCode) {
    this.setState({
      borderColor: colorCode
    });
    this.updateSvg();
  }
  onUpdateBorderWidth(value) {
    this.setState({
      borderWidth: value
    });
    this.updateSvg();
  }
  onUpdateBorderStyle(obj) {
    this.setState({
      borderStyle: obj.target.value
    });
    this.updateSvg();
  }
  onUpdateColor(colorCode) {
    this.setState({
      color: colorCode
    });
    this.updateSvg();
  }
  onUpdateIcon(obj) {
    this.setState({
      icon: obj.target.value
    });

    var self = this;
    setTimeout(() => {
      self.setState({
        svgCode: self.refs.codeReact.innerHTML
      });
    }, 100);
  }
  onUpdateIconColor(colorCode) {
    this.setState({
      iconColor: colorCode
    });
    this.updateSvg();
  }
  onUpdateIconSize(value) {
    this.setState({
      iconSize: value
    });
    this.updateSvg();
  }
  onUpdateRoundness(value) {
    this.setState({
      roundness: value
    });
    this.updateSvg();
  }
  onUpdateSize(value) {
    this.setState({
      size: value
    });
    this.updateSvg();
  }
  onUpdateUrl(obj) {
    this.setState({
      url: obj.target.value
    });
    this.updateSvg();
  }
  updateSvg(){
    var obj = this.refs.codeReact;
    this.setState({
      svgCode: obj.innerHTML
    });
  }
  render(){   
    return (
      <div>        
        abcde
        <FormControl>
                    <Select
                      className="controlSelect"
                    >
                      <MenuItem value="twitter">twitter</MenuItem>
                      <MenuItem value="facebook">facebook</MenuItem>                      
                      <MenuItem value="googleplus">googleplus</MenuItem>
                      <MenuItem value="instagram">instagram</MenuItem>
                      <MenuItem value="vk">vk</MenuItem>
                      <MenuItem value="ok">ok</MenuItem>
                      <MenuItem value="linkedin">linkedin</MenuItem>
                      <MenuItem value="aboutme">aboutme</MenuItem>
                      <MenuItem value="slideshare">slideshare</MenuItem>
                      <MenuItem value="ello">ello</MenuItem>
                      <MenuItem value="vimeo">vimeo</MenuItem>
                      <MenuItem value="youtube">youtube</MenuItem>
                      <MenuItem value="youtube-play">youtube-play</MenuItem>
                      <MenuItem value="coub">coub</MenuItem>
                      <MenuItem value="medium">medium</MenuItem>
                      <MenuItem value="wordpress">wordpress</MenuItem>
                      <MenuItem value="tumblr">tumblr</MenuItem>
                      <MenuItem value="livejournal">livejournal</MenuItem>
                      <MenuItem value="pocket">pocket</MenuItem>
                      <MenuItem value="rss">rss</MenuItem>
                      <MenuItem value="skype">skype</MenuItem>
                      <MenuItem value="phone">phone</MenuItem>
                      <MenuItem value="mail">mail</MenuItem>
                      <MenuItem value="send">send</MenuItem>
                      <MenuItem value="send-light">send-light</MenuItem>
                      <MenuItem value="map">map</MenuItem>
                      <MenuItem value="yelp">yelp</MenuItem>
                      <MenuItem value="foursquare">foursquare</MenuItem>
                      <MenuItem value="swarm">swarm</MenuItem>
                      <MenuItem value="tripadvisor">tripadvisor</MenuItem>
                      <MenuItem value="pinterest">pinterest</MenuItem>
                      <MenuItem value="pinterest-light">pinterest-light</MenuItem>
                      <MenuItem value="behance">behance</MenuItem>
                      <MenuItem value="dribbble">dribbble</MenuItem>
                      <MenuItem value="etsy">etsy</MenuItem>
                      <MenuItem value="etsy-short">etsy-short</MenuItem>
                      <MenuItem value="flikr">flikr</MenuItem>
                      <MenuItem value="500px">500px</MenuItem>
                      <MenuItem value="vscogrid">vscogrid</MenuItem>
                      <MenuItem value="photobucket">photobucket</MenuItem>
                      <MenuItem value="quora">quora</MenuItem>
                      <MenuItem value="stackoverflow">stackoverflow</MenuItem>
                      <MenuItem value="github">github</MenuItem>
                      <MenuItem value="codepen">codepen</MenuItem>
                      <MenuItem value="jsfiddle">jsfiddle</MenuItem>
                      <MenuItem value="producthunt">producthunt</MenuItem>
                      <MenuItem value="kickstarter">kickstarter</MenuItem>
                      <MenuItem value="reddit">reddit</MenuItem>
                      <MenuItem value="reddit-light">reddit-light</MenuItem>
                      <MenuItem value="stumbleupon">stumbleupon</MenuItem>
                      <MenuItem value="delicious">delicious</MenuItem>
                      <MenuItem value="digg">digg</MenuItem>
                      <MenuItem value="deviantart">deviantart</MenuItem>
                      <MenuItem value="slack">slack</MenuItem>
                      <MenuItem value="messenger">messenger</MenuItem>
                      <MenuItem value="snapchat">snapchat</MenuItem>
                      <MenuItem value="line-icon">line-icon</MenuItem>
                      <MenuItem value="line">line</MenuItem>
                      <MenuItem value="angellist">angellist</MenuItem>
                      <MenuItem value="xing">xing</MenuItem>
                      <MenuItem value="viadeo">viadeo</MenuItem>
                      <MenuItem value="upwork">upwork</MenuItem>
                      <MenuItem value="envato">envato</MenuItem>
                      <MenuItem value="periscope">periscope</MenuItem>
                      <MenuItem value="bookmate">bookmate</MenuItem>
                      <MenuItem value="shopify">shopify</MenuItem>
                      <MenuItem value="favorite">favorite</MenuItem>
                      <MenuItem value="apple">apple</MenuItem>
                      <MenuItem value="android">android</MenuItem>
                      <MenuItem value="googleplay">googleplay</MenuItem>
                      <MenuItem value="windows">windows</MenuItem>
                      <MenuItem value="amazon">amazon</MenuItem>
                      <MenuItem value="dropbox">dropbox</MenuItem>
                      <MenuItem value="googledrive">googledrive</MenuItem>
                      <MenuItem value="evernote">evernote</MenuItem>
                      <MenuItem value="sketch">sketch</MenuItem>
                      <MenuItem value="web">web</MenuItem>

                    </Select>
                  </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(App);
