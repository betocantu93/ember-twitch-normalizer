import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://api.twitch.tv',
  namespace: "helix",
  headers: {
    'Client-ID': 'INSERT YOUR Client-ID HERE'
  },

});
