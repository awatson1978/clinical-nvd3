Package.describe({
  summary: 'Reusable D3 graphs.',
  version: '0.0.1',
  name: 'clinical:nvd3',
  git: 'http://github.com/awatson1978/clinical-nvd3.git'
});

Package.on_use(function (api) {
  api.addFiles('nvd3.js', 'client');
});
