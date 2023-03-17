jQuery("#step-form-horizontal").validate({
    rules: {
        "nama": {
            required: !0,
            minlength: 3
        },
        "jenis_kelamin": {
            required: !0,
        },
        "password": {
            required: !0,
            minlength: 3
        },
        "cpassword": {
            required: !0,
            equalTo: "#password"
        },
        "tgl_lahir": {
            required: !0,
            numericdot:true
        },
        "pendidikan": {
            required: !0,
            minlength: 2
        },
        "provinsi": {
            required: !0
        },
        "kota": {
            required: !0
        },
        "kecamatan": {
            required: !0
        },
        "kelurahan": {
            required: !0
        },
        "email": {
            required: !0,
            email: !0
        },
        "username": {
            required: !0
        },
        "no_tlpn": {
            required: !0,
            digits: !0
        },
        "val-number": {
            required: !0,
            number: !0
        },
        "val-range": {
            required: !0,
            range: [1, 5]
        },
        "val-terms": {
            required: !0
        }
    },
    messages: {
        "nama": {
            required: "Silahkan input nama karyawan",
            minlength: "Nama karyawan terlalu pendek"
        },
        "jenis_kelamin": "Silahkan pilih jenis kelamin karyawan",
        "val-password": {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long"
        },
        "val-confirm-password": {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long",
            equalTo: "Please enter the same password as above"
        },
        "tgl_lahir": "Masukan tanggal lahir karyawan",
        "pendidikan": "Masukan pendidikan karyawan",
        "provinsi": "Silahkan pilih provinsi",
        "kota": "Silahkan pilih Kota",
        "kecamatan": "Silahkan pilih Kecamatan",
        "kelurahan": "Silahkan pilih Kelurahan",
        "username": "Username di butuhkan untuk login",
        "email": "Masukan email dengan benar",
        "no_tlpn": "Masukan nomor Tlpon!",
        "password": "Masukan password",
        "cpassword": "Ulangi password"
    },

    ignore: [],
    errorClass: "invalid-feedback animated fadeInUp",
    errorElement: "div",
    errorPlacement: function (e, a) {
        jQuery(a).parents(".form-group").append(e)
    },
    highlight: function (e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid").addClass("is-invalid")
    },
    success: function (e) {
        jQuery(e).closest(".form-group").removeClass("is-invalid"), jQuery(e).remove()
    },
});
jQuery.validator.addMethod("numericdot", function (value, element) {
    if (/^[0-9\.]+$/i.test(value)) {
        return true;
    } else {
        return false;
    };
}, "Masukan tanggal");