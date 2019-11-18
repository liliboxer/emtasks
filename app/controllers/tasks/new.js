import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTask: function() {
      let title = this.get('title');

      // create new task
      alert(title);
    }
  }
});
