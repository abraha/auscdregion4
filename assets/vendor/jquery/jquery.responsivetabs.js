(function( $ ) {
            
    function storeTabs($tabs, $destination) {
        // measure width
        $tabs.each(function() {
            var width = $(this).outerWidth(true);
            $(this).data('width', width);          
        });
        $tabs.prependTo($destination);
    }
            
    function makeTabsResponsive($element) {

        var $tabs = $element.find('li');
        var $firstTab = $tabs.first();

        var individualTabHeight = $firstTab.outerHeight();
        var tabsHeight = $element.outerHeight();

        if(tabsHeight > individualTabHeight) {
                    
            // get y pos of first tab
            var firstTabPos = $firstTab.offset();

            var thisTabPos;
            $tabs.each(function() {

                var $thisTab = $(this);

                thisTabPos = $thisTab.offset();

                if(thisTabPos.top > firstTabPos.top) {

                    var $dropdown = $element.find('.responsivetabs-more');
                            
                    if(!$dropdown.length) {
                        var dropdownMarkup = '<li class="dropdown responsivetabs-more">'
                        + '<a href="#" class="dropdown-toggle" data-toggle="dropdown">...</a>'
                        + '<ul class="dropdown-menu dropdown-menu-right">'
                        + '</ul></li>';
                        $dropdown = $(dropdownMarkup);
                        $element.append($dropdown);
                                
                    }
                            
                    var $previousTab = $thisTab.prev();
                    var $followingTabs = $thisTab.nextAll().not('.dropdown');

                    var $destination = $('.dropdown-menu', $dropdown);
                            
                    if(!$thisTab.hasClass('dropdown')) {
                        storeTabs($followingTabs, $destination);
                        storeTabs($thisTab, $destination);
                    }
                    storeTabs($previousTab, $destination);
                            
                    return;

                }

            });

        } else {
                

                
            // check if enough space to move a menu item back out of "..."


            // get parent width
            var parentWidth = $element.parent().width();
            var tabSetWidth = 0;
            var xPxAvailable;

            // calculate total width of tab set (can't just use width of ul because it is 100% by default)
            $element.children('li').each(function() {
                tabSetWidth += $(this).outerWidth(true);
            });

            // calculate available horizontal space
            xPxAvailable = parentWidth - tabSetWidth;


                    
            $element.find('.dropdown-menu li').each(function() {
                if($(this).data('width') <= xPxAvailable) {
                    $(this).insertBefore($element.find('.responsivetabs-more')); 
                    xPxAvailable -= $(this).data('width');
                } else {
                    return false;
                } 
            });

            // if no menu items left, remove "..."
            if(!$element.find('.dropdown-menu li').length) {
                $element.find('.responsivetabs-more').remove();
            }
        }

   
    }
  
            
    $.fn.responsiveTabs = function() {
                
        this.each(function() {
            var tabs = $(this);
            makeTabsResponsive(tabs); 
            $(window).resize(function() {
                makeTabsResponsive(tabs); 
            });                    
        });
                
        return this;
                
    };
            
})( jQuery );