var webjarsRequirejsPluginsChildren = [
    'async',
    'font',
    'goog',
    'image',
    'json',
    'mdown',
    'noext',
    'propertyParser'
];
var webjarsRequirejsPluginsPaths = {};
webjarsRequirejsPluginsChildren.forEach(function (child) {
    webjarsRequirejsPluginsPaths[child] = webjars.path("requirejs-plugins", child);
});
requirejs.config({
    paths: {
        "mustache": webjars.path("mustachejs", "mustache")
    }
});
