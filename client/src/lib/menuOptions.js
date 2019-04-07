export default [
  {
    name: 'messages',
    permissionLevel: ['Employee', 'Admin', 'Super'],
    icon: 'envelope outline'
  },
  {
    name: 'employees',
    permissionLevel: ['Admin', 'Super'],
    icon: 'user'
  },
  {
    name: 'jobs',
    permissionLevel: ['Admin', 'Super'],
    icon: 'bolt'
  },
  {
    name: 'requests',
    permissionLevel: ['Employee', 'Admin', 'Super'],
    icon: 'question circle'
  },
  {
    name: 'timecard',
    permissionLevel: ['Employee'],
    icon: 'clock'
  },
  {
    name: 'schedule',
    permissionLevel: ['Employee', 'Super'],
    icon: 'calendar alternate'
  },
  {
    name: 'createUser',
    permissionLevel: ['Super'],
    icon: 'plus'
  }
]
