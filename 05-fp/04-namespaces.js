window.cewe ??= {};

(function (root) {
    const internal = function () {};

    const start = function () {
        internal();
    };
    const stop = function () {
        internal();
    };

    root.start = start;
    root.stop = stop;
})(window.cewe);
