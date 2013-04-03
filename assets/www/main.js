(function ($){
    $(document).ajaxSend(function() {$.mobile.loading( 'show');});
    $(document).ajaxComplete(function() {$('.loader').hide();});

    $(document).on( "pagebeforeshow", "#index", function() {
        var helper = new HELPER();
        helper.logout();
    });

    $(document).on( "pagebeforecreate", "#index", function( e, data ) {
        console.log('1 pagebeforecreate');
    });
    $(document).on( "pagecreate", "#index", function( e, data ) {
        console.log('2 pagecreate');
    });
    $(document).on( "pageinit", "#index", function( e, data ) {
        $('.loader').hide();
        console.log('3 pageinit');
    });
    $(document).on( "pageshow", "#index", function( e, data ) {
        console.log('4 pageshow');
    });


    $(document).on( "pagebeforecreate", "#test", function( e, data ) {
        console.log('%c 1 pagebeforecreate', 'background: #222; color: #bada55');
    });
    $(document).on( "pagecreate", "#test", function( e, data ) {
        console.log('%c 2 pagecreate', 'background: #222; color: #bada55');
    });
    $(document).on( "pageinit", "#test", function( e, data ) {
        $('.loader').hide();
        console.log('%c 3 pageinit', 'background: #222; color: #bada55');
    });
    $(document).on( "pageshow", "#test", function( e, data ) {
        console.log('%c 4 pageshow', 'background: #222; color: #bada55');
    });

})(jQuery);