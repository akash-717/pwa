self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
  
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((response) => {
          return caches.open('dynamic-cache').then((cache) => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        });
      })
    );
  });
  