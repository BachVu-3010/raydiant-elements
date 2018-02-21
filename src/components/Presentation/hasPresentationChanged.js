export default function hasPresentationChanged(
  prevPres,
  nextPres,
  application
) {
  if (!prevPres || !application) {
    return false;
  }

  if (
    prevPres.name !== nextPres.name ||
    prevPres.duration !== nextPres.duration ||
    // Enable save when new application version is released.
    prevPres.application_deployment_id !== nextPres.application_deployment_id
  ) {
    return true;
  }

  const hasAppVarChanges = application.presentation_properties.some(prop => {
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
