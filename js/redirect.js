const imageProxyUrl = 'https://image-proxy.now.sh'
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return {
      redirectUrl: imageProxyUrl + '?url=' + details.url
    };
  }, {
    urls: ["*://*.imgur.com/*"]
  }, ["blocking"]
);