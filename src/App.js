import './App.css';
import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";


const drumBank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
]

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      padBank: drumBank,
      selectedDrum: drumBank[0].keyTrigger
    };
    this.handleChange = this.handleChange.bind(this);
  } 

  
  handleChange(drumDrum) {
    this.setState({
      selectedDrum: drumDrum
    })
  }
 
  render () {
    return(
      <div id="drum-machine" className="center">
        <h1 className="text">Drum Machine</h1>
        <div id="display">
          <div className="container">
            <DrumPad drum={this.state.padBank[0]} handler={this.handleChange} />
            <DrumPad drum={this.state.padBank[1]} handler={this.handleChange}/>
            <DrumPad drum={this.state.padBank[2]} handler={this.handleChange}/>
            <DrumPad drum={this.state.padBank[3]} handler={this.handleChange}/>
            <DrumPad drum={this.state.padBank[4]} handler={this.handleChange}/>
            <DrumPad drum={this.state.padBank[5]} handler={this.handleChange}/>
            <DrumPad drum={this.state.padBank[6]} handler={this.handleChange}/>
            <DrumPad drum={this.state.padBank[7]} handler={this.handleChange}/>
            <DrumPad drum={this.state.padBank[8]} handler={this.handleChange}/>
           </div>
           <p className="text" id="display">{this.state.selectedDrum.id}</p>
        </div>
      </div>
    )
  }
}

class DrumPad extends React.Component {
    constructor(props) {
      super(props);
      this.playSound = this.playSound.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
 
      this.state = {
        setDrum: this.props.handler
        
      }
    };
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  handleKeyPress(e, props){
    if (e.keyCode === this.props.drum.keyCode){
      this.playSound(props);
    }
  }
  
  playSound = (props) => {
    const sound = document.getElementById(this.props.drum.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.state.setDrum(this.props.drum);
  }  
  
  render() {
    return (
      <div>
        <button onClick={this.playSound}><audio className='clip' id={this.props.drum.keyTrigger} src={this.props.drum.url}/>{this.props.drum.keyTrigger}</button>
        
      </div>
    );
  }
};

export default App;
