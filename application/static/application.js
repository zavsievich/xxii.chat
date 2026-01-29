import { Metacom } from './metacom.js';
import { Message } from './message.js';

window.addEventListener('load', async () => {
  const message = new Message({
    id: '1',
    created: new Date(),
    author: {
      id: '1',
      name: 'John Doe',
      avatar: 'https://s3.eu-west-1.amazonaws.com/images.tutorialedge.net/images/node.png',
    },
    content: 'Hello, world!',
    attachments: [],
    reactions: [],
    pinned: false,
    deleted: false,
    edited: null,
    replyTo: null,
    forwarded: null,
  });
  const messageElement = message.render();
  document.body.appendChild(messageElement);
});
