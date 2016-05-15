import React, { Component } from 'react';
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
  }
];

@themeable
class Skills extends Component {
  getLevelValue(level) {
    let value;
    let i=0;
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

  renderSkill(skill) {
    return (
      <li>
        <div>
          <div>
            <span>{skill.name}</span>
            <span>{this.getLevelValue(skill.level)}</span>
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
    let skillsMarkup;
    const skills = [];

    skills.push({
      name: 'Javascript',
      level: 0.75,
    });

    if (skills) {
      skillsMarkup = (
        <ul>
          {skills.map(skill => this.renderSkill(skill))}
        </ul>
      );
    }

    return (
      <Paper>
        {skillsMarkup}
      </Paper>
    );
  }
}

export default Skills;
