document.getElementById("createAppBtn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      chrome.runtime.sendMessage({ action: "createApp", url: currentTab.url });
    });
  });
  