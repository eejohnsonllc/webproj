$(document).ready(function () {


    // $("#inputname").change(function () {
    //     alert("Handler for .change() called.");
    //     $("#inputname").BulmaValidator({
    //         name: "textValidator",
    //         fields: ["text"],
    //         settings: {
    //             text: {
    //                 regex: "^[A-Za-z ,.'-]{3,35}$"
    //             }
    //         }
    //     })
    // })


    $("form").BulmaValidator({
        name: "BulmaValidator",
        fields: ["text", "email", 'tel'],
        settings: {
            text: {
                regex: "^[A-Za-z ,.'-]{3,35}$"
            },
            email: {
                regex: "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            },
            tel: {
                regex: "^[0-9]{3}-[0-9]{3}-[0-9]{4}"
            },

        }
    });


})