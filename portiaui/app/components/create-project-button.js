import Ember from 'ember';

export default Ember.Component.extend({
    dispatcher: Ember.inject.service(),
    capabilities: Ember.inject.service(),
    tagName: '',

    createProjects: Ember.computed.readOnly('capabilities.capabilities.create_projects'),
    projectName: null,

    actions: {
        addProject() {
            this.get('dispatcher').addProject(this.get('projectName'), /* redirect = */true);
        }
    }
});
