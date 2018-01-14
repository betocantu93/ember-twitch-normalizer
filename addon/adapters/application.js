import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://api.twitch.tv',
  namespace: "helix",
  headers: {
    'Client-ID': 'e6s7z3s4x3vt4n0adak3hn8ud8ko6c'
  },

});
