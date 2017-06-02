import { moduleFor, test } from 'ember-qunit';

moduleFor('route:add', 'Unit | Route | add', {
  // Specify the other units that are required for this test.
  needs: ['service:photo-fetch'],
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
