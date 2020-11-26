import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUsers, updateUser } from 'modules/users';

export const mapStateToProps = state => ({
  list: state.users.list,
  loading: state.users.loading,
});

export const mapDispatchToProps = {
  onFetchUsers: fetchUsers,
  onUpdateUser: updateUser,
};

const UserPage = ({ onFetchUsers, list }) => {
  useEffect(() => onFetchUsers(), [onFetchUsers]);

  return (
    <>
      <div>User List</div>
      {list.map(user => (
        <div key={user.id}>{`${user.id} ${user.firstName} ${user.lastName}`}</div>
      ))}
    </>
  );
};

UserPage.propTypes = {
  onFetchUsers: PropTypes.func,
  list: PropTypes.arrayOf({}),
};

UserPage.defaultProps = {
  onFetchUsers: () => {},
  list: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
