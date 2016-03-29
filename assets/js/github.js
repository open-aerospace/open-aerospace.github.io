$(document).ready(function () {

    // Loop through githubstatus divs on the page
    $('.githubstatus').each(function(index) {

        var element = $(this);
        var loc = this.dataset.web;  // data-web attribute that should contain the url to the gh-pages publised site

        // get the git.json file for this repo
        $.getJSON( loc + "git.json", function( data ) {

            // most recent update (first on stack)
            var last_update = new Date(data[0].time);
            var now = new Date();
            var age = (now - last_update) / (1000.0 * 60 * 60); // difference in hours

            // switch between showing age in hours or a date, depending on age
            if (age < 48) {
                element.append("<p>Last Updated: " + age.toFixed(0) + " hours ago.</p>");
            }
            else {
                var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][last_update.getMonth()];
                var day = last_update.getDate();
                var year = last_update.getFullYear();
                element.append("<p>Last Updated: " + month + " " + day + ", " + year + ".</p>");
           }
        }).fail(function() {
            // Ignore failures (404, etc.)
        })

    });
});
