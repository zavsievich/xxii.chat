({
  name: { type: 'string', unique: true },
  domain: { type: 'string', unique: true },
  ip: { type: 'ip', unique: true },
  ports: { array: 'number' },
});
