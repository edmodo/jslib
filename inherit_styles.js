// This JS needs to be imported by iframe (before </body>)
// to allow the iframe inherit all CSS styles from the parent page
//
// Usage:
//     <script src="REPOSITORY/inherit_styles.js"></script>
(function() {
    var parentStyleSheets = parent.document.styleSheets;
    var cssString = "";
    for (var i = 0, count = parentStyleSheets.length; i < count; ++i) {
        if (parentStyleSheets[i].cssRules) {
            var cssRules = parentStyleSheets[i].cssRules;
            for (var j = 0, countJ = cssRules.length; j < countJ; ++j) {
                cssString += cssRules[j].cssText;
            }
        } else {
            cssString += parentStyleSheets[i].cssText;  // IE8 and earlier
        }
    }
    var style = document.createElement("style");
    style.type = "text/css";
    try {
        style.innerHTML = cssString;
    } catch (ex) {
        style.styleSheet.cssText = cssString;  // IE8 and earlier
    }
    document.getElementsByTagName("head")[0].appendChild(style);
}) ();
