import React, { useState } from 'react';

const CollapsibleFAQ = ({ question, answer }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapsible-faq">
      <div className="questionDiv shakethis" onClick={toggleCollapse}>
        {question}
      </div>
      {!isCollapsed && <div className="" >{answer}</div>}
    </div>
  );
};

export default CollapsibleFAQ;
