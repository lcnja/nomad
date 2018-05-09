import Fragment from 'ember-data-model-fragments/fragment';
import { computed } from '@ember/object';
import attr from 'ember-data/attr';
import { fragmentOwner } from 'ember-data-model-fragments/attributes';
import { fragment } from 'ember-data-model-fragments/attributes';

export default Fragment.extend({
  node: fragmentOwner(),

  attributes: fragment('node-attributes'),
  name: attr('string'),
  detected: attr('boolean', { defaultValue: false }),
  healthy: attr('boolean', { defaultValue: false }),
  healthDescription: attr('string'),
  updateTime: attr('date'),

  healthClass: computed('healthy', function() {
    return this.get('healthy') ? 'running' : 'failed';
  }),
});
