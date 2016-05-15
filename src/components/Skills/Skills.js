import React, { PropTypes, Component } from 'react';
import { themeable } from 'rethemeable';

import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';

const levels = [
  {
    level: 0.75,
    value: 'Expert',
  }, {
    level: 0.5,
    value: 'Intermediate',
  }, {
    level: 0,
    value: 'Beginner',
  },
];

function getLevelValue(level) {
  let value;
  let i = 0;
  let found = false;

  do {
    if (level >= levels[i].level) {
      value = levels[i].value;
      found = true;
    }
    i++;
  } while (found === false && levels[i] !== undefined);

  return value;
}

@themeable
class Skills extends Component {
  static propTypes = {
    skills: PropTypes.array.isRequired,
  };

  renderSkill(skill) {
    return (
      <li key={`${skill.name}_${skill.level}`}>
        <div>
          <div>
            <span>{skill.name}</span>
            <span>{getLevelValue(skill.level)}</span>
          </div>
          <LinearProgress
            mode="determinate"
            value={skill.level * 100}
          />
        </div>
      </li>
    );
  }

  render() {
    const theme = this.theme;
    const { skills } = this.props;
    let skillsMarkup = null;

    if (skills) {
      skillsMarkup = (
        <Paper>
          <ul>
            {skills.map(skill => this.renderSkill(skill))}
          </ul>
        </Paper>
      );
    }
    return skillsMarkup;
  }
}

export default Skills;
