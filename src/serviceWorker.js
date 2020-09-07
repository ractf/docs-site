const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

const log = window.console.log.bind(window.console, "%c[serviceWorker]", "color: #d3d; font-weight: 800");

export function register(config) {
  if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
          return;
      }

      window.addEventListener("load", () => {
          const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

          if (isLocalhost) {
              checkValidServiceWorker(swUrl, config);
          } else {
              registerValidSW(swUrl, config);
          }
      });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
      registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
              return;
          }
          installingWorker.onstatechange = () => {
              if (installingWorker.state === "installed") {
                  if (navigator.serviceWorker.controller) {
                      log("You are seeing an old version of the site.");

                      if (config && config.onUpdate) {
                          config.onUpdate(registration);
                      }
                  } else {
                      log("Site ready to operate offline");

                      if (config && config.onSuccess) {
                          config.onSuccess(registration);
                      }
                  }
              }
          };
      };
  }).catch(error => {
      log("Error during service worker registration:", error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl).then(response => {
      const contentType = response.headers.get("content-type");
      if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf("javascript") === -1)
      ) {
          navigator.serviceWorker.ready.then(registration => {
              registration.unregister().then(() => {
                  window.location.reload();
              });
          });
      } else {
          registerValidSW(swUrl, config);
      }
  }).catch(() => {
      log("No internet connection found. App is running in offline mode.");
  });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(registration => {
          registration.register();
      });
  }
}
