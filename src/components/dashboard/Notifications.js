import React from 'react';
import moment from 'moment';

const Notifications = props => {
  const { notifications } = props;

  return (
    <div className="section">
      <div className="card blue-grey darken-2 z-depth-0">
        <div className="card-content">
          <span className="card-title white-text">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(notification => {
                return (
                  <li key={notification.id}>
                    <span className="grey-text text-lighten-3">
                      {notification.user} {''}
                    </span>
                    <span className="indigo-text text-lighten-3">
                      {notification.content}
                    </span>
                    <div className="grey-text note-date">
                      {moment(notification.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
