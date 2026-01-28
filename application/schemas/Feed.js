({
  name: { type: 'string', unique: true },
  owner: 'Author',
  icon: '?string',
  description: '?string',
  created: 'datetime',
  visibility: { enum: ['public', 'private', 'unlisted'], default: 'unlisted' },
  joinPolicy: { enum: ['open', 'invite', 'request'], default: 'open' },
  pinned: { many: 'Message' },
});
