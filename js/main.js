lightbox.option({
    'resizeDuration': 200,
    'wraAround': true,
    maxWidth: 900,
    showImageNumberLabel: false
})

$(document).ready(function () {
    var images = document.getElementsByTagName('a');
    $('#search').on('keyup', function () {

        var $search = $(this).val().toLowerCase(); // make the input case insensitive 

        for (var i = 0; i < images.length; i++) {

            textVal = images[i].getAttribute('data-title');

            if (textVal.indexOf($search) > -1) {
                images[i].style.display = '';
            } else {
                images[i].style.display = 'none';
            }

        }
    }
    )
}
)
