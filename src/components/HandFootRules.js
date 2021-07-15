import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHandPointRight} from "@fortawesome/free-solid-svg-icons";

const HandFootRules = () => {
  const rules = [{title: 'Hello', subRules: ['Dogs', 'Cats']},
    {title: 'Goodbye', subRules: ['frogs', 'kids']},
    {title: 'Alligator', subRules: ['brokles', 'turtles']}]

  return (
      <React.Fragment>
        {rules.map((rule, index) => {
          return (
              <React.Fragment key={index}>
                <div className="hand-foot-rules">
                  <div className="rules-subsection">
                    <FontAwesomeIcon className="rule-icon" icon={faHandPointRight}/>{rule.title}
                  </div>
                </div>
              </React.Fragment>
          );
        })}
      </React.Fragment>
  );
};

export default HandFootRules;