const mdns = require('mdns');

const all_the_types = mdns.browseThemAll();

all_the_types.on('serviceUp', function(service) {
  const name = service.type['name'];
  console.log("service up: ", service);
  if (name === 'TESTANDO') {
    console.log("found TESTANDO service at ", service.replyDomain);
  }
});

all_the_types.on('serviceDown', function(service) {
  console.log("service down: ", service);
});

all_the_types.start();