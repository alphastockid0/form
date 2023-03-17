(function ($) {
    "use strict"

    var form = $("#step-form-horizontal");
    form.children('div').steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        autoFocus: true,
        transitionEffect: "slideLeft",
        onStepChanging: function (event, currentIndex, newIndex) {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex) {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex) {
            $.ajax({
                url: $(form).attr('action'),
                type: "POST",
                data: $(form).serialize(),
                beforeSend: function () {
                    Swal.fire({
                        title: 'loading data...',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        timer: 2000,
                        onOpen: () => {
                            swal.showLoading();
                        }
                    });
                },
                success: function (data) {
                    Swal.close();
                    window.location.href='rolepetugas-farmasi.html';
                },
                error: function (jXHR, textStatus, errorThrown) {
                    Swal.close();
                    Swal.fire(
                        'Gagal!',
                        errorThrown,
                        'error'
                    );
                }
            });
        }
    });

})(jQuery);