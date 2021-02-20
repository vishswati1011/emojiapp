import React ,{Component, useState} from 'react'
import Emoji from './Emoji';
class Data extends Component {

    constructor(props) {
        super(props);
        this.state = {
             emojidata:[
              { "icon":'😀', "name": 'grinning face',},
              { "icon":'😃', "name": 'smileeyes',},
              { "icon":'😅', "name": 'grinning face with sweat',},
              { "icon":'😂', "name": 'face with tears of joy',},
              { "icon":'🥰', "name": 'smileheart',},
              { "icon":'❤️', "name": 'redheart',},
              { "icon":'🤚', "name": 'raisedhand',},
              { "icon":'🖐️', "name": 'hand',},
              { "icon":'👌', "name": 'okhand',},
              { "icon":'🥵', "name": 'hot face',},
              {"icon":'🥶', "name": 'cold face',},
              {"icon":'☹️', "name": 'slightly frowning face',},
              {"icon":'🙍', "name": 'person frowning',},
              {"icon":'🙍‍♂️', "name": 'man frowning',},
              {"icon":'🙆‍♀️', "name": 'woman gesturing OK',},
              {"icon":'🧑‍🎓', "name": 'mx claus',},
              {"icon":'🧑‍🎄', "name": 'x-mas',},
              {"icon":'🧚', "name": 'fairy',},
             ]
        
        }
      }
      render() {
        return (
          <div>
            {this.state.emojidata.map((item)=>(
                item.name==this.props.emoji?
                <Emoji name={item.name}
                    icon={item.icon}
                />
                :null
            ))}
          </div>
        );
      }
    }
export default Data;