import MessageDialog from './components/MessageDialog';

const commandsModule = ({ servicesManager }) => {
  const actions = {
    // Store Contexts + Options
    helloWorld: ({ title, content }) => {
      const { UIDialogService } = servicesManager.services;

      if (!UIDialogService) {
        console.warn('Unable to show dialog; no UI Dialog Service available.');
        return;
      }

      UIDialogService.dismiss({ id: 'hello-world' });
      UIDialogService.create({
        id: 'hello-world',
        centralize: true,
        isDraggable: false,
        showOverlay: true,
        content: MessageDialog,
        contentProps: {
          messageTitle: title,
          messageContent: content,
          dialogCloseCallback: () =>
            UIDialogService.dismiss({ id: 'hello-world' }),
        },
      });
    },
  };

  return {
    actions,
    definitions: {
      helloWorld: {
        commandFn: actions.helloWorld,
        storeContexts: ['viewports'],
        options: {
          title: 'Hello World!',
          content:
            'This is the Exercise 1 that was proposed by Igor Octaviano and was done by Vinícius Alves.',
        },
      },
    },
  };
};

export default commandsModule;
