import { Metacom } from './metacom.js';
import { Message } from './message.js';

const pendingMessages = [
  {
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
  },
];

const messages = [
  {
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
  },
  {
    id: '3',
    created: new Date(),
    author: {
      id: '1',
      name: 'John Doe',
      avatar: 'https://s3.eu-west-1.amazonaws.com/images.tutorialedge.net/images/node.png',
    },
    content: 'lorem askjndja asjoinda hdsaijdb asd ashibdias',
    attachments: [],
    reactions: ["😍"],
    pinned: true,
    deleted: false,
    edited: null,
    replyTo: null,
    forwarded: null,
    status: "confirmed"
  },
  {
    id: "4",
    created: new Date() - 1000 * 60 * 60, // 1 hour ago
    author: {
      id: '2',
      name: 'Jane Smith',
      avatar: 'https://s3.eu-west-1.amazonaws.com/images.tutorialedge.net/images/node.png',
    },
    content: 'This message is deleted.',
    attachments: [],
    reactions: [],
    pinned: false,
    deleted: true,
    edited: null,
    replyTo: null,
    forwarded: null,
    status: "confirmed"
  },
  {
    id: "5",
    created: new Date() - 1000 * 60 * 60 * 2, // 2 hours ago
    author: {
      id: '3',
      name: 'Alice Johnson',
      avatar: 'https://s3.eu-west-1.amazonaws.com/images.tutorialedge.net/images/node.png',
    },
    content: 'This message was edited.',
    attachments: [],
    reactions: [],
    pinned: false,
    deleted: false,
    edited: new Date() - 1000 * 60 * 30, // Edited 30 minutes ago
    replyTo: null,
    forwarded: null,
    status: "confirmed"
  },
  {
    id: "6",
    created: new Date() - 1000 * 60 * 60 * 3, // 3 hours ago
    author: {
      id: '4',
      name: 'Bob Brown',
      avatar: 'https://s3.eu-west-1.amazonaws.com/images.tutorialedge.net/images/node.png',
    },
    content: 'This is a reply.',
    attachments: [],
    reactions: ["👍", "✌️", "❤️"],
    pinned: false,
    deleted: false,
    edited: new Date() - 1000 * 60 * 60 * 2, // Edited 2 hours ago
    replyTo: "1",
    forwarded: null,
    status: "confirmed"
  }
]

window.addEventListener('load', async () => {
  const messagesContainer = document.createElement('div');
  const messagesHeader = document.createElement('h2');
  messagesHeader.textContent = 'Messages';
  messagesContainer.appendChild(messagesHeader);
  messagesContainer.classList.add('messages-container');
  document.body.appendChild(messagesContainer);
  for (const messageData of messages) {
    const message = Message.create(messageData);
    const messageElement = message.render();
    messagesContainer.appendChild(messageElement);
  };

  const pendingMessageContainer = document.createElement('div');
  pendingMessageContainer.classList.add('pending-message-container');
  const pendingMessageHeader = document.createElement('h2');
  pendingMessageHeader.textContent = 'Pending Messages';
  pendingMessageContainer.appendChild(pendingMessageHeader);
  document.body.appendChild(pendingMessageContainer);
  for (const pendingMessageData of pendingMessages) {
    const pendingMessage = Message.create(pendingMessageData);
    const pendingMessageElement = pendingMessage.render();
    pendingMessageContainer.appendChild(pendingMessageElement);
  };
});
