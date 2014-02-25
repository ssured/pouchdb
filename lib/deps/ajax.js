"use strict";

function ajax(options, callback) {
  var ajaxOptions = {
    type: options.method || "GET",
    url: options.url,
    dataType: 'json',
    contentType: 'application/json',
    data: !options.body ? null : (typeof options.body == 'string' ? options.body : JSON.stringify(options.body))
  };

  $.ajax(ajaxOptions).then(
    function(){
      callback.bind(this, null).apply(this, arguments)
    }
    , function(){
      callback(arguments);
    }
  );
}

module.exports = ajax;
