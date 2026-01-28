({
  name: { type: 'string', unique: true },
  owner: 'Author',
  icon: '?string',
  description: '?string',
  created: 'datetime',
  lastActivity: 'datetime',
  members: { many: 'Author' },
  admins: { many: 'Author' },
  moderators: { many: 'Author' },
  mute: { many: 'Author' },
  ban: { many: 'Author' },
  pinned: { many: 'Message' },
});
