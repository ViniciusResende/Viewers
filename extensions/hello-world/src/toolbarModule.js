const TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
};

const definitions = [
  {
    id: 'HelloWorld',
    label: 'Hello World',
    icon: 'star',
    //
    type: TOOLBAR_BUTTON_TYPES.COMMAND,
    commandName: 'helloWorld',
  },
];

export default {
  definitions,
  defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE',
};
