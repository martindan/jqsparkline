Package.describe({
  name: "martindan:sparkline",
  summary: "Simple jquery.sparkline package",
  version: "1.3.1",
  git:"https://github.com/martindan/jqsparkline.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.6.1');
  api.use(['jquery','underscore']);
  api.addAssets('sparkline.html','client');
  api.addFiles('lib/jquery.sparkline.js','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rollypolly:sparkline');
  api.addFiles('rollypolly:sparkline-tests.js');
});
