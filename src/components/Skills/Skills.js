/* @flow */
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

  theme: Object;

  renderSkill(skill: Object, theme: Object) {
    return (
      <li key={`${skill.name}_${skill.level}`} className={theme.skill}>
        <div className={theme.header}>
          <span className={theme.name}>
            {skill.name}
          </span>
          <span className={theme.level}>
            {getLevelValue(skill.level)}
          </span>
        </div>
        <LinearProgress

          mode="determinate"
          value={skill.level * 100}
        />
      </li>
    );
  }

  render() {
    const theme = this.theme;
    const { skills } = this.props;
    let skillsMarkup = null;

    if (Array.isArray(skills) && skills.length > 0) {
      skillsMarkup = (
        <Paper>
          <ul className={theme.skills}>
            {skills.map(skill => this.renderSkill(skill, theme))}
          </ul>
        </Paper>
      );
    }
    return skillsMarkup;
  }
}

export default Skills;
