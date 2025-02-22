import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

const restaurantApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-api',
  })
);

const restaurantImageApi = new Route(
  ({ url }) =>
    url.href.startsWith(
      'https://restaurant-api.dicoding.dev/images/large/<pictureId>'
    ),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-image-api',
  })
);

registerRoute(
  ({ url }) => url.pathname.startsWith('/images/heros/'),
  new StaleWhileRevalidate({
    cacheName: 'hero-images-cache',
  })
);

registerRoute(restaurantApi);
registerRoute(restaurantImageApi);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});
