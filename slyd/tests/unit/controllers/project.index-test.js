import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:project.index', 'Project.IndexController', {
  // Specify the other units that are required for this test.
   needs: ['controller:application', 'controller:project']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
