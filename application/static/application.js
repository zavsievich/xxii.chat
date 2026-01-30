import { Metacom } from './metacom.js';
import { MessageTimeline, MessageComposer } from './message.js';

window.addEventListener('load', async () => {
  const messageConfirmed = new MessageTimeline({
    id: '1',
    created: new Date(),
    author: {
      id: '1',
      name: 'John Doe',
      avatar: 'https://s3.eu-west-1.amazonaws.com/images.tutorialedge.net/images/node.png',
    },
    content: 'Hello, confirmed!',
    attachments: [],
    reactions: [],
    pinned: false,
    deleted: false,
    edited: null,
    replyTo: null,
    forwarded: null,
    status: "confirmed"
  });

  const messagePending = new MessageComposer({
    id: '2',
    created: new Date(),
    author: {
      id: '1',
      name: 'John Doe',
      avatar: 'https://s3.eu-west-1.amazonaws.com/images.tutorialedge.net/images/node.png',
    },
    content: 'Hello, pending!',
    attachments: [],
    reactions: [],
    pinned: false,
    deleted: false,
    edited: null,
    replyTo: null,
    forwarded: null,
    status: "pending"
  })
  const confirmedMessageElement = messageConfirmed.render();
  const pendingMessageElement = messagePending.render();
  document.body.appendChild(confirmedMessageElement);
  document.body.appendChild(pendingMessageElement);
});
