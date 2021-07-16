import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHandPointRight} from "@fortawesome/free-solid-svg-icons";
import {HAND_AND_FOOT_RULES} from "../util/constants";

const HandFootRules = () => {

  return (
      <React.Fragment>
        <div className="hand-foot-rules">
          {HAND_AND_FOOT_RULES.map((rule, index) => {
            return (
                <React.Fragment key={index}>
                  <span className="title">{rule.title}</span>
                  <div className="rules-subsection">
                    {rule.subRules.map((sub, subIndex) => {
                      return (
                          <React.Fragment key={subIndex}>
                            <div className="rule">
                              <FontAwesomeIcon className="rule-icon" icon={faHandPointRight}/>{sub}
                            </div>
                          </React.Fragment>
                      );
                    })}
                  </div>
                </React.Fragment>
            );
          })}
        </div>
      </React.Fragment>
  );
};

export default HandFootRules;