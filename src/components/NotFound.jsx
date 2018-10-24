import React from 'react'

// class NotFound extends React.Component {
//     render() {
//         return (
//             <div className="not-found">该页面不存在{location.pathname}</div>
//         )
//     }
// }

const NotFound = ({ location }) => (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
export default NotFound