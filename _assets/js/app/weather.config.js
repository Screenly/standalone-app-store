(function($) {
    function set_url() {
        var data = Object.entries(params);
        data = data.map(function(val) {
            if (val[1]){
                return val[0] + '=' + val[1]
            }
        });
        var query = data.filter(Boolean).join('&');
        if (query){
            input.val(url + '?' + query);
        } else {
            input.val(url);
        }

    }

    var input = $("#app-form-url");
    var url = input.attr('data-url');
    var params = {
        "lat": "",
        "lng": "",
        "lang": "",
        "24h": "",
    };

    var mapel = $('#config-map');
    if (mapel.length > 0) {
        if ('google' in window === false) {
            $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD4xizgVnzfyTQgM15V3tvihZxQDAdUuAg")
                .done(function(script, textStatus) {
                    var map = new google.maps.Map(mapel[0], {
                        zoom: 16,
                        scrollwheel: false,
                        center: new google.maps.LatLng(51.5287718, -0.2417001),
                        styles: [{ "featureType": "administrative", "elementType": "all", "stylers": [{ "lightness": -100 }, { "visibility": "off" }, { "saturation": "-77" }, { "color": "#000000" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "visibility": "on" }, { "color": "#737880" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "saturation": "-70" }, { "lightness": "0" }, { "visibility": "on" }, { "color": "#e4e8ee" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "hue": "#0066ff" }, { "saturation": "0" }, { "lightness": "0" }] }, { "featureType": "landscape", "elementType": "labels", "stylers": [{ "saturation": "-80" }, { "lightness": "-90" }, { "visibility": "off" }, { "color": "#737880" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "saturation": "-80" }, { "lightness": "-70" }, { "visibility": "off" }, { "gamma": "1" }, { "color": "#c0ccdf" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "color": "#737880" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "saturation": "-85" }, { "lightness": "60" }, { "visibility": "on" }, { "color": "#f5f9ff" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "saturation": "-70" }, { "lightness": "50" }, { "visibility": "off" }, { "color": "#737880" }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "saturation": "0" }, { "lightness": "-11" }, { "visibility": "on" }, { "color": "#f5f9ff" }] }, { "featureType": "road.local", "elementType": "labels", "stylers": [{ "color": "#61656b" }] }, { "featureType": "road.local", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }, { "lightness": "0" }, { "saturation": "0" }, { "color": "#f5f9ff" }] }, { "featureType": "transit", "elementType": "labels", "stylers": [{ "lightness": -100 }, { "visibility": "off" }, { "color": "#737880" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "saturation": "0" }, { "lightness": 100 }, { "visibility": "on" }, { "color": "#c6daf8" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "saturation": -100 }, { "lightness": -100 }, { "visibility": "off" }, { "color": "#e4e8ee" }] }]
                    });
                    google.maps.event.addListener(map, 'dragend', function() {
                        var center = map.getCenter();
                        params.lat = center.lat().toFixed(2);
                        params.lng = center.lng().toFixed(2);
                        set_url();
                    });
                });
        }
    }
    $('#clockformat-select').change(function() {
        params['24h'] = $("#clockformat-select option:selected").val();
        set_url();
    });
    $('#language-select').change(function() {
        params.lang = $("#language-select option:selected").val();
        set_url();
    });
})(jQuery);
