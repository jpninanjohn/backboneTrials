var UserCollectionView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list',

  initialize:function(){
    this.collection.on('add', this.render, this);
  },

  render: function(){
    this.collection.each(this.addUserToList, this);
    return this;
  },

  addUserToList: function(user){
    var singleUserView = new SingleUserView({
      model: user
    });
    this.$el.append(singleUserView.render().el);
  }
});
