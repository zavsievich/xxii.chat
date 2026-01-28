({
  name: 'string',
  owner: 'Author',
  folder: 'Folder',
  icon: '?string',
  description: '?string',
  mime: 'string',
  size: 'number',
  checksum: { type: 'string', length: 64, comment: 'sha256' },
  created: 'datetime',
  modified: 'datetime',
  visibility: { enum: ['public', 'unlisted'], default: 'unlisted' },
});
