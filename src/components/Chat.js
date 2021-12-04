import React from 'react'

const Chat = () => {
  return (
    <div>
      <ul id="messages"></ul>
      <form id="form" action="" onSubmit={() => event.preventDefault()}>
        <input id="input" autocomplete="off" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Chat
