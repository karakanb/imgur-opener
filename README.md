# Imgur Opener

This is an extension to display Imgur based images on Google Chrome, which are not available in Turkey. All the image request for `*.imgur.com` are proxied to `https://image-proxy.now.sh` address, which is a simple proxy server.

The script that powers the extension is a simple URL listener only, which can be seen in `js/redirect.js` file:

```js
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
```

## License

This extension is released under the MIT Licence. For further information, see the [LICENSE.md](LICENSE.md).
