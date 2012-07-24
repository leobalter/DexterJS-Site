jQuery(function($) {
  $.ajax( 'https://api.github.com/repos/leobalter/DexterJS', {
    dataType: 'JSONP',
    success: function ( data ) {
               var repo = data.data,
                   repoElem = $( '#repoInfo' ),
                   repoDl = repoElem.children( 'ul' );
                   d = new Date( repo.created_at );
             
               repoDl.append( '<li><b>Created: </b>' + d.getFullYear() + '/' + d.getMonth() + '/' + d.getDate() + '</li>' );
               console.dir( data.data );                                                     
               repoElem.show();
             }  
  });

});


// Twitter Button
(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.async=true;js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs"));

