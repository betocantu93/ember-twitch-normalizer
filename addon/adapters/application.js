import DS from 'ember-data';
import config from 'ember-get-config';
import { getWithDefault } from '@ember/object';
import { assert } from '@ember/debug';

export default DS.JSONAPIAdapter.extend({
  init(){
    this._super(...arguments);
    if(!config['ember-twitch-normalizer']['Client-ID']){
      assert('You must supply an "ENV[ember-twitch-normalizer].Client-ID in your "config/environment"');
    }
  },
  host: 'https://api.twitch.tv',
  namespace: "helix",
  headers: getWithDefault(config, 'ember-twitch-normalizer', {})
});
