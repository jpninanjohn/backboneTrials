var SingleUserView = Backbone.View.extend({
  tagName: 'li',
  className: 'user',
  model: new User(),

  events: {
    'click .edit': 'edit',
    'blur .registered-names': 'closeEdit',
    'keypress .registered-names': 'onKeyUpdate',
    'click .delete': 'delete'
  },

  initialize: function(){
    this.template = _.template($("#user-details-template").html());
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  edit: function(ev){
    this.$('.registered-names').attr('contenteditable', true).focus();
  },

  closeEdit: function(ev){
    var newData = this.$('.registered-names').text();
    this.model.set('name', newData);
    this.$('.registered-names').removeAttr('contenteditable')
  },

  onKeyUpdate: function(ev){
    if(ev.keyCode === 13){
      this.closeEdit();
      this.$('.registered-names').blur();
    }
  },

  delete: function(){
    this.model.destroy();
    $(this.el).remove();
  }

});
