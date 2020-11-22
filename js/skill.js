$(function () {
    $(".skill__card>li").each(function () {

        let $this = $(this);

        $this.waypoint(function () {
            $this.addClass("active");
        }, {
            offset: '80%'
        });
    })
})