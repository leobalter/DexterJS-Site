jQuery(function($) {
  function prettyDate( utc ) {
    var d = new Date( utc ),
        pretty = d.toLocaleDateString() + ' ' + d.toLocaleTimeString();

    return pretty;
  }

  $.ajax( 'https://api.github.com/repos/leobalter/DexterJS', {
    dataType: 'JSONP',
    success : function ( data ) {
      var repo = data.data,
          info = '',
          createdAt = prettyDate( repo.created_at ),
          lastPush = prettyDate( repo.pushed_at ),
          lastUpdate = prettyDate( repo.updated_at );
    
      info += '<li><b>Created at: </b>' + createdAt + '</li>';
      info += '<li><b>Last Push: </b>' + lastPush + '</li>';
      info += '<li><b>Last Update: </b>' + lastUpdate + '</li>';
      info += '<li><b>Open Issues: </b>' + repo.open_issues + '</li>';
      info += '<li><b>Watchers: </b>' + repo.watchers + '</li>';
      info += '<li><b>Forks: </b>' + repo.forks + '</li>';
      // info += '<li><b>Owner: </b><a href="' + repo.owner.url + '">' + repo.owner.login + '</a></li>';

      $( info ).appendTo( '#repoInfo > ul' );
                           
      $( '#repoInfo' ).show();
    }   
  });

  $.ajax( 'https://api.github.com/repos/leobalter/DexterJS/collaborators', {
    dataType: 'JSONP',
    success : function ( data ) {
      var collabs = data.data,
          i = 0,
          l,
          person,
          info = '';

      for ( l = collabs.length ; i < l ; i++ ) {
        person = collabs[ i ];

        info += '<li><a href="' + person.url + '">' + person.login + '</a></li>';
      }

      $( info ).appendTo( '#collaborators ul' );

      $( '#collaborators' ).show();
    }
  });

});


// Twitter Button
(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.async=true;js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs"));

