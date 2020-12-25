import React from 'react';

const Table = ({ userlist }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th><center>ID</center></th>
        <th><center>NAME</center></th>
        <th><center>BlOOD GROUP</center></th>
        <th><center>CONTACT</center></th>
        <th><center>MAIL</center></th>
        <th><center>LOCATION</center></th>
      </tr>
    </thead>
    <tbody>
      {(userlist.length > 0) ? userlist.map(user => (
        <tr key={user.id}>
          <td><center>{user.id}</center></td>
          <td><center>{user.name}</center></td>
          <td><center>{user.bloodGroup}</center></td>
          <td><center>{user.phone_number}</center></td>
          <td><center>{user.email}</center></td>
          <td><center>{user.location}</center></td>
        </tr>
      )) : <tr><td colSpan="6"><center>No donors found</center></td></tr>}
    </tbody>
  </table>
);

export default Table;
