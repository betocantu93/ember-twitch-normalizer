/* eslint-env node */
module.exports = {
  description: '',
  name: 'ember-twitch-normalizer',
  normalizeEntityName() {
  },

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall(options) {
  //   // Perform extra work here.
  // }
  afterInstall: function(options){
    return this.addPackageToProject('ember-get-config', 'latest');
  }
};
