import React from 'react'

const UserInfo = props => {
  const { showing, firstName, lastName, email, date, location, phone, username } = props;
  return (
    <>
      { showing === 'profile' && (
        <>
          <p>Hi, My name is</p>
          <h3 className='capital-letters'>{firstName} {lastName}</h3>
        </>
      )}
      { showing === 'email' && (
        <>
          <p>My email is</p>
          <h4>{email}</h4>
        </>
      )}
      { showing === 'calendar' && (
        <>
          <p>My barthday is</p>
          <h3>{date}</h3>
        </>
      )}
      { showing === 'pointer' && (
        <>
          <p>My city is</p>
          <h3 className='capital-letters'>{location}</h3>
        </>
      )}
      { showing === 'phone' && (
        <>
          <p>My cell number is</p>
          <h3>{phone}</h3>
        </>
      )}
      { showing === 'lock' && (
        <>
          <p>My username is</p>
          <h3>{username}</h3>
        </>
      )}
    </>
  )
}

export default UserInfo
