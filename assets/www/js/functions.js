var HELPER = (function () {
    var HELPER = function() {}

    HELPER.prototype.serializeObject = function(a) {
        var o = {};
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    HELPER.prototype.getLocalListParams = function() {
        var listParams = window.localStorage.getItem("list-params");
        if(!listParams){ $.mobile.changePage( "#index"); }
        var c = JSON.parse(listParams);
        return c;
    };

    HELPER.prototype.getLocalUser = function() {
        var user = jQuery.parseJSON(window.localStorage.getItem('user'));
        if(typeof(user) === "string"){
            var user = jQuery.parseJSON(user);
        }
        return user;
    };

    HELPER.prototype.isEmpty = function(obj) {
        if (obj === null || obj === undefined) return true;
        if (obj.length && obj.length > 0)    return false;
        if (obj.length === 0)  return true;

        for (var key in obj) {
            if (hasOwnProperty.call(obj, key))    return false;
        }
        return true;
    };

    HELPER.prototype.logout = function() {
        var loggedin = window.localStorage.getItem('loggedin');
        if(loggedin){
            $.mobile.changePage( "main.html" );
        } else {
            $.mobile.changePage( "index.html" );
        }
    };

    HELPER.prototype.checkConnection = function() {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN]  = 'UNKNOWN';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.NONE]     = 'NONE';
        return states[networkState];
    };

    return HELPER;
})();

