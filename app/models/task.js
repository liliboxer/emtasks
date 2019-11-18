import Model from '@ember-data/model';

export default Model.extend({
  title: Model.attr('string'),
  description: Model.attr('string'),
  date: Model.attr('date'),
  created: Model.attr('string', {
    default: function() {
      return new Date();
    }
  })
});
