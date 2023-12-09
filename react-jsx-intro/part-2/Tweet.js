function Tweet({ username, name, date, message }) {
  const tweetStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#f9f9f9'
  };

  const nameStyle = {
    color: '#555',
    fontSize: '1.2em'
  };

  const usernameStyle = {
    color: '#888',
    fontSize: '0.9em'
  };

  const dateStyle = {
    color: '#aaa',
    fontSize: '0.8em'
  };

  const messageStyle = {
    fontSize: '1em',
    lineHeight: '1.4'
  };

  return (
    <div style={tweetStyle}>
      <h3 style={nameStyle}>{name}</h3>
      <p style={usernameStyle}>{username}</p>
      <p style={dateStyle}>{date}</p>
      <p style={messageStyle}>{message}</p>
    </div>
  );
}