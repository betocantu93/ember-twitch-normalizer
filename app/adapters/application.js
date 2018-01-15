import { getWithDefault } from '@ember/object';
import TwitchAdapter from 'ember-twitch-normalizer/adapters/application';
import cfg from '../config/environment';

export default TwitchAdapter.extend({
  headers: getWithDefault(cfg, 'ember-twitch-normalizer', {})
});
