        var link = document.querySelector(".write-us");
        var popup = document.querySelector(".modal-content");
        var close = document.querySelector(".js-close-popup");
        var closeButton = document.querySelector(".js-close-popup-button");

        link.addEventListener("click", function (event) {
            event.preventDefault();
            popup.classList.add("modal-content-show");
        });
        close.addEventListener("click", function (event) {
            event.preventDefault();
            popup.classList.remove("modal-content-show");
        });

        closeButton.addEventListener("click", function (event) {
            event.preventDefault();
            popup.classList.remove("modal-content-show");
        });