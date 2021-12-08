/////////////////////////////////////////////////////////
//          ACTIVE OFFICE - SERVICE WORKER             //
/////////////////////////////////////////////////////////

// Arreglo para indicar los archivos en cache 
var cacheName = 'ao_pwa_v1';
var contentToCache = [
  '/active_office_pwa/',
  '/active_office_pwa/index.html',
  '/active_office_pwa/2_nosotros.html',
  '/active_office_pwa/script.js',
  '/active_office_pwa/assets/js/main.js',
  '/active_office_pwa/assets/css/style.css',
  '/active_office_pwa/assets/vendor/bootstrap/css/bootstrap.min.css',
  '/active_office_pwa/assets/vendor/icofont/icofont.min.css',
  '/active_office_pwa/assets/vendor/owl.carousel/assets/owl.carousel.min.css',
  '/active_office_pwa/assets/vendor/venobox/venobox.css',
  '/active_office_pwa/assets/vendor/aos/aos.css',
  '/active_office_pwa/assets/img/hero-bg.jpg',
  '/active_office_pwa/assets/img/2.1.jpg',
  '/active_office_pwa/assets/img/16.png',
  '/active_office_pwa/assets/img/logo.png',
  '/active_office_pwa/assets/img/1024.png',
  '/active_office_pwa/assets/img/512.png',
  '/active_office_pwa/assets/img/256.png',
  '/active_office_pwa/assets/img/196.png',
  '/active_office_pwa/assets/img/128.png',
  '/active_office_pwa/assets/img/100.png',
  '/active_office_pwa/assets/img/64.png',
  '/active_office_pwa/assets/img/32.png',
  'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i'
];

// Instalación del SW
self.addEventListener('install', (e) => {
  // Mensaje en consola
  console.log('[Service Worker] Install');
  // Espera hasta que..
  e.waitUntil(
    // Se abra el caché
    caches.open(cacheName).then((cache) => {
          // En consola
          console.log('[Servicio Worker] Almacena todo en caché: contenido e intérprete de la aplicación');
      // Añadir todo el arreglo
      return cache.addAll(contentToCache);
    })
  );
});

// Evento Fetch
self.addEventListener('fetch', (e) => {
  // Respuesta
  e.respondWith(
    // Obtener recursos necesarios
    caches.match(e.request).then((r) => {
          console.log('[Servicio Worker] Obteniendo recurso: '+e.request.url);
      return r || fetch(e.request).then((response) => {
                // Abrir el cache 
                return caches.open(cacheName).then((cache) => {
          // Almacenar nuevo recurso
          console.log('[Servicio Worker] Almacena el nuevo recurso: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});

// Versión 2 del cache 
self.addEventListener('install', (e) => {
  e.waitUntil(
    // Abrir segunda versión 
    caches.open('ao_pwa_v2').then((cache) => {
      // Añadir al cache
      return cache.addAll(contentToCache);
    })
  );
});

// Activación
self.addEventListener('activate', (e) => {
  e.waitUntil(
    // Verificar llaves de elementos del cache
    caches.keys().then((keyList) => {
          // Retornar lista de llaves
          return Promise.all(keyList.map((key) => {
        // Eliminar si no coincide
        if(key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
});











