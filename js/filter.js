(function($) {
    $(function() {
        var moreDown = $('.more-down');
        var filterItem = $('.filter-layer-item a');
        var filterList = $('.filter-layer-list');

        moreDown.click(function(e){
            e.preventDefault();
            var status = $(this).find('a').data('status');
            var filterSub = $(this).closest('div.filter-layer').find('.filter-sub');
            if(!status){
                $(this).addClass('active-down');
                filterSub.css({
                    display: 'inline-block'
                });
                $(this).find('a').data('status', true);
            }
            else{
                $(this).removeClass('active-down');
                filterSub.hide();
                $(this).find('a').data('status', false);
            }
        });

        filterItem.click(function(e){
            e.preventDefault();
            if(!$(this).parent().is('.more-down'))
            {
                filterList.find('.active-filter-item').removeClass('active-filter-item');
                $(this).addClass('active-filter-item');
            }

            //console.log($(this).parents(filterList).children('.filter-layer-item').length);
        })

    });
})(jQuery);