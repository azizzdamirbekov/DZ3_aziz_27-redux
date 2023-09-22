import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserGetAction, fetchUserOneInfo, fetchUsersAction } from '../redux/actions';
import GetMore from './GetMore';

function User({ userInfo }) {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersReducer);

  const [showMore, setShowMore] = useState(false);

  const getOneUser = () => {
    dispatch(fetchUserOneInfo());
    setShowMore(true);  };

  return (
    <ul>
      <li>name {userInfo.name}</li>
      <li>email {userInfo.email}</li>
      <div>
      <button onClick={getOneUser}>get users</button>
      {users.map(user => showMore && <GetMore userInfo={user}/>)}
    </div>
    </ul>
  );
}

export default User;
