global.document = require('jsdom').jsdom(
  '<html><head>' +
  '</head><body>' +
  '<div id="root"></div>' +
  '</body></html>'
)
global.window = document.defaultView
global.navigator = window.navigator
