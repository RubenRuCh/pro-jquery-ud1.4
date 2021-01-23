$(() => {
  // Create element to travel to
  //$('body').prepend("<span id='start'></span>");

  // Create links after every p to travel to start
  //$('p').after("<a href='#start'>Back to the top</a>");

  // Move footnote before div#footer
  //$('div#footer').before($('.footnote'));

  // Put footnotes inside a numeric ol and put every footnote inside a li
  //$('.footnote').wrapAll('<ol></ol>').wrap('<li></li>');

  // Move footnote before div#footer, put footnotes inside a numeric ol and put every footnote inside a li, all in one sentence
  $('.footnote')
    .insertBefore('div#footer') // Move footnotes before div#footer
    .wrapAll('<ol></ol>') // Put footnotes inside a numeric ol
    .wrap('<li></li>'); // Put every footnote inside a li element

  // Create element to travel to and create links after every p to travel to start, with insertAfter and prependTo
  $("<span id='start'></span>").prependTo('body');
  $("<a href='#start'>Back to the top</a>").insertAfter('p');
});
