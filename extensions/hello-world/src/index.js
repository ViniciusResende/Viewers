import toolbarModule from './toolbarModule.js';
import MessageDialog from './components/MessageDialog';

/**
 *
 */
export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id: 'extension-hello-world',

  /**
   * LIFECYCLE HOOKS
   */

  preRegistration({
    servicesManager = {},
    commandsManager = {},
    appConfig = {},
    configuration = {},
  }) {},

  /**
   * MODULE GETTERS
   */
  getViewportModule() {
    return '... react component ...';
  },
  getSopClassHandlerModule() {
    return sopClassHandlerModule;
  },
  getPanelModule() {
    return panelModule;
  },
  getToolbarModule() {
    return toolbarModule;
  },
  getCommandsModule({ servicesManager }) {
    const { UIDialogService } = servicesManager.services;

    const showHelloWorldDialog = (title, content) => {
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
    };

    const actions = {
      // Store Contexts + Options
      helloWorld: ({ title, content }) => {
        showHelloWorldDialog(title, content);
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
  },
};

/**
 *
 */
const sopClassHandlerModule = {
  id: 'OHIFDicomHtmlSopClassHandler',
  sopClassUIDs: Object.values({
    BASIC_TEXT_SR: '1.2.840.10008.5.1.4.1.1.88.11',
    ENHANCED_SR: '1.2.840.10008.5.1.4.1.1.88.22',
    COMPREHENSIVE_SR: '1.2.840.10008.5.1.4.1.1.88.33',
    PROCEDURE_LOG_STORAGE: '1.2.840.10008.5.1.4.1.1.88.40',
    MAMMOGRAPHY_CAD_SR: '1.2.840.10008.5.1.4.1.1.88.50',
    CHEST_CAD_SR: '1.2.840.10008.5.1.4.1.1.88.65',
    X_RAY_RADIATION_DOSE_SR: '1.2.840.10008.5.1.4.1.1.88.67',
  }),
  getDisplaySetFromSeries(series, study, dicomWebClient, authorizationHeaders) {
    const instance = series.getFirstInstance();

    return {
      plugin: 'html',
      displaySetInstanceUID: 0, //utils.guid(),
      wadoRoot: study.getData().wadoRoot,
      wadoUri: instance.getData().wadouri,
      SOPInstanceUID: instance.getSOPInstanceUID(),
      SeriesInstanceUID: series.getSeriesInstanceUID(),
      StudyInstanceUID: study.getStudyInstanceUID(),
      authorizationHeaders,
    };
  },
};

/**
 *
 */
const panelModule = {
  menuOptions: [
    {
      icon: 'th-list',
      label: 'Segments',
      target: 'segment-panel',
      isDisabled: studies => {
        return false;
      },
    },
  ],
  components: [
    {
      id: 'segment-panel',
      component: '... react component ...',
    },
  ],
  defaultContext: ['VIEWER'],
};
