({
  chat: 'Chat',
  author: 'Author',
  content: 'string',
  created: 'datetime',
  edited: '?datetime',
  deleted: '?datetime',
  replyTo: '?Message',
  forwarded: '?Message',
  reactions: { object: { string: { array: 'Author' } }, comment: 'emoji' },
  pinned: { type: 'boolean', default: false },
  attachments: { many: 'File' },
});
