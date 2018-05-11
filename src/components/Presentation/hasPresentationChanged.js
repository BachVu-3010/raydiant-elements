export default function hasPresentationChanged(prevPres, nextPres, appVersion) {
  // Enable save when new application version is released.
  if (appVersion.id !== nextPres.application_deployment_id) {
    return true;
  }
  // There are no changes, no need to compare.
  if (!prevPres) {
    return false;
  }
  // Check if presentation name or duration has changed.
  if (
    prevPres.name !== nextPres.name ||
    prevPres.duration !== nextPres.duration ||
    prevPres.theme_id !== nextPres.theme_id
  ) {
    return true;
  }
  // Check if app vars have changed.
  const hasAppVarChanges = appVersion.presentation_properties.some(prop => {
    const prevAppVar = prevPres.application_vars[prop.name];
    const nextAppVar = nextPres.application_vars[prop.name];

    // For file types, check for pending uploads.
    if (prevAppVar && nextAppVar && prop.type === 'file') {
      return prevAppVar.url !== nextAppVar.url;
    }

    return prevAppVar !== nextAppVar;
  });

  return hasAppVarChanges;
}
