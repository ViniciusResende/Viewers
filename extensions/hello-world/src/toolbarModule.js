const TOOLBAR_BUTTON_TYPES = {
  COMMAND: 'command',
  SET_TOOL_ACTIVE: 'setToolActive',
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
  {
    id: 'Text',
    label: 'Text',
    icon: 'type',
    //
    type: TOOLBAR_BUTTON_TYPES.SET_TOOL_ACTIVE,
    commandName: 'setToolActive',
    commandOptions: { toolName: 'TextType' },
  },
];

export default {
  definitions,
  defaultContext: 'ACTIVE_VIEWPORT::CORNERSTONE',
};
