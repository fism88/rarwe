import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    willTransition (transition) {
      var controller = this.get('controller'),
          leave;

      if (controller.get('isEditing')) {
        leave = window.confirm("You have unsaved changes. Are you sure you want to leave?");

        if (leave) {
          controller.set('isEditing', false);
        } else {
          transition.abort();
        }
      }
    },

    save () {
      var controller = this.get('controller'),
        band = controller.get('model');

      return band.save();
    }
  }
});
