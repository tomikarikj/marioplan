import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            necessitatibus iure accusamus exercitationem vel harum voluptatum
            ratione, delectus nam, facere mollitia esse aperiam quidem in, nihil
            facilis eius distinctio libero!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Me</div>
          <div>2nd September, 2AM</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
