require(["gitbook","jQuery"],function(gitbook,$){
  function resetTOC(){
    var targetUl = $('.page-inner ul:eq(0)');
    if(targetUl &&  targetUl.children('li').children('a').length > 0 && targetUl.children('li').children('a').attr('href').indexOf('#') === 0 && $('.page-inner').html().indexOf('<!-- toc -->') !== -1) {
      $('.'+className+' .toggle').unbind('click');
      targetUl.before('<div class="' + className + '">' + targetUl.html() + '<div class="toggle"><i class="fa fa-align-justify"></i></div></div>');
      $('.'+className+' .toggle').bind('click',function(){
          $('.'+className+' ul').stop(true,true).slideToggle();
      });
      targetUl.remove();
    }
  }

  gitbook.events.bind("page.change", resetTOC);
});
