Template.topPanel.pageName = function() {
    return Router.routes[0].name;
}

Template.topPanel.connections = function() {
    _theBrain = TheBrain.findOne("global");
    return _theBrain ? _theBrain.connections : 0;
}
