import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTask: function() {
      let title = this.get('title');
      let description = this.get('description');
      let date = this.get('date');

      // create new task
      console.log('title', title);
      console.log('description', description);
      console.log('date', date)
    }
  }
});
