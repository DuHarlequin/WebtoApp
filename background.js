chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "createApp") {
      chrome.windows.create({
        url: message.url,
        type: "popup",
        width: 800,
        height: 600
      });
    }
  });
  