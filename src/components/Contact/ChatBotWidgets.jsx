import { useEffect } from "react";

function ChatBotWidget() {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "gmail-1cyxh",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return null; // widget khud UI me show hoga
}

export default ChatBotWidget;
