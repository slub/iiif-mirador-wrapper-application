import Mirador from 'mirador';

/** create mirador here with e.g. plugins */
export default function renderViewer(config, viewerId) {
  // update the config id with mirador component id to prevent rendering to the application component
  const miradorConfig = { ...config };
  miradorConfig.id = viewerId;

  return Mirador.viewer(miradorConfig);
};
