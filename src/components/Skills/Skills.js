// @flow
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import themeInjector from 'containers/themeInjector';

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

/**
 * Matches the level number with the String value
 * @param {number} level
 * @returns {string}
 */
function getLevelValue(level: number): string {
  let value = 'Expert';
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

@themeInjector
class Skills extends Component {
  static propTypes = {
    className: PropTypes.string,
    theme: PropTypes.object.isRequired,
    skills: PropTypes.array.isRequired,
  };

  /**
   * Create the markup up for an individual skill
   * @param {Object} skill
   * @param {string} skill.name
   * @param {number} skill.level
   * @param {Object} [theme={}] Optional overriding theme object
   * @returns {Element}
   */
  renderSkill(skill: Object, theme: Object = {}) {
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

  /**
   * @param {Object} props
   * @param {Array} props.skills Array of skill objects Array<Skill>
   * @param {Object} props.theme Optional theme overrides
   * @returns {Element}
   */
  render() {
    const {
      theme,
      skills,
      className,
    } = this.props;

    let skillsMarkup = null;

    if (Array.isArray(skills) && skills.length > 0) {
      let columns = 1;

      if (className === 'large') {
        columns = 2;
      }

      const skillsClasses = {
        [theme.skills]: true,
        [theme.skillsMultiple]: columns > 1,
      };

      skillsMarkup = (
        <Paper>
          <ul className={classNames(skillsClasses)}>
            {skills.map(skill => this.renderSkill(skill, theme))}
          </ul>
        </Paper>
      );
    }
    return skillsMarkup;
  }
}

export default Skills;
