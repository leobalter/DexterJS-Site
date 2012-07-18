function init() {
  var pills = document.querySelectorAll( '.pill' ),
      i = 0,
      pillsLength,
      pill;

  for ( pillsLength = pills.length ; i < pillsLength ; i++ ) {
    pill = pills[ i ];
    setEvent( pill, 'DOMActivate', activatePill );
    setEvent( pill, 'touchstart', activatePill );
  }

  function setTabs( showThis, activeRE ) {
    var tabContents = document.querySelectorAll( '.tab_content' ),
        i = 0,
        tabsLength = tabContents.length,
        tab;

    showThis = showThis.replace( '#', '' );

    for ( ; i < tabsLength ; i++ ) {
      tab = tabContents[ i ];
      if ( tab.id === showThis ) {
        tab.className += ' active';
      } else {
        tab.className = tab.className.replace( activeRE, '' ); 
      }
    }
  }

  function activatePill( ev ) {
    var activeRE = /(?:^|\s)active(?!\S)/;
    if ( ev && ev.preventDefault ) {
      ev.preventDefault();
    }

    // do nothing if it's already active
    if ( activeRE.test( this.className ) ) {
      return false;
    }

    for ( i = 0 ; i < pillsLength ; i++ ) {
      pill = pills[ i ];
      pill.className = pill.className.replace( activeRE, '' );
    }

    this.className += ' active';

    setTabs( this.hash, activeRE );

    return false;
  }

  // Twitter Button
  (function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.async=true;js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs"));
}

function setEvent( element, name, callback ) {
  if ( element.addEventListener ) {
    element.addEventListener( name, callback, false );
  } else if ( element.attachEvent ) {
    if ( name === 'DOMContentLoaded' ) {
      name = 'onreadystatechange';
    }
    element.attachEvent( name, callback );
  }  
}

setEvent( document, 'DOMContentLoaded', init );
