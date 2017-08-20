var userGroup = new UserCollection();

$(document).ready(function(){
  $("#trialForm").submit(function(ev){
    var newUser = new User({
      name: $('#username').val(),
      email: $('#email').val(),
    });
    userGroup.add(newUser);
    show();
    return false;
  });

  function show(){
    var userListView = new UserCollectionView({
      collection: userGroup
    });

    $("#userList").html(userListView.render().el);
  }

});
