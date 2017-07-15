function colorBindDirective() {

  function link(scope, element, attrs) {

      var color = scope[attrs.colorBind+"Color"];
      $("head").append('<style type="text/css"></style>');
      var newStyleElement = $("head").children(':last');
      newStyleElement.html('.'+attrs.colorBind+'{background-color:'+scope[attrs.colorBind+"Color"]+';}');


      scope.$watch(attrs.colorBind+"Color",function() {
        newStyleElement.html('.'+attrs.colorBind+'{background-color:'+scope[attrs.colorBind+"Color"]+';}');
      });


  }

  return {
    link: link
  };
}
