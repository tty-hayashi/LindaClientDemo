define([
    'amber/devel',
    './deploy',
    // --- packages used only during development begin here ---
    'amber-lindaclient/LindaClient-Tests',
    'amber/legacy/Benchfib',
    'amber/legacy/Examples',
    'amber/legacy/IDE'
    // --- packages used only during development end here ---
], function (amber) {
    return amber;
});
