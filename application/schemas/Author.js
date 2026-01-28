({
  nick: { type: 'string', unique: true },
  name: 'string',
  bio: 'string',
  icon: 'string',
  photo: 'File',
  status: {
    enum: ['online', 'away', 'dnd', 'offline', 'unknown'],
    default: 'offline',
  },
  created: 'datetime',
  updated: 'datetime',
  settings: 'json',
  nodes: { many: 'Node' },
});
