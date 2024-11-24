const mdns = require('mdns');

const ad = mdns.createAdvertisement(mdns.tcp('TESTANDO'), 4321, {
  name: 'TESTANDO',
  txtRecord: {
    foo: 'bar'
  }
});
ad.start();