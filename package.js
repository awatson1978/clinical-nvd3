Package.describe({
  summary: 'Reusable D3 graphs.',
  version: '0.0.1',
  name: 'clinical:nvd3',
  git: 'http://github.com/awatson1978/clinical-nvd3.git'
});

Package.on_use(function (api) {
  api.versionsFrom('1.0');

  api.use('d3js:d3');
  api.use('less');

  api.addFiles('nvd3.js', 'client');
  api.addFiles('nvd3.less', 'client');
  api.addFiles('nvd3.colorbrewer.less', 'client');
});
