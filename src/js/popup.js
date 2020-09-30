$(function () {
    function tab_url() {
        chrome.tabs.getSelected(null, function (tab) {
            $("#title").text(tab.title).attr("title", tab.title);
            $("#url").text(tab.url).attr("title", tab.url);
            $("#qrcode").qrcode({
                width: 350,
                height: 350,
                text: tab.url
            });
        });
    }
    tab_url();
});