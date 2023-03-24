const displayFunction = data => {
  return data.text || '';
};

export const textType = {
  id: 'TextType',
  name: 'TextType',
  toolGroup: 'allTools',
  cornerstoneToolType: 'TextType',
  options: {
    measurementTable: {
      displayFunction,
    },
    caseProgress: {
      include: true,
      evaluate: true,
    },
  },
};
