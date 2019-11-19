import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTask: function() {
      let title = this.get('title');
      let description = this.get('description');
      let date = this.get('date');

      // create new task
      let newTask = this.store.createRecord('task', {
        title,
        description,
        date: new Date(date)
      })

      // save to fb
      console.log(newTask)
      newTask.save();
    }
  }
});
