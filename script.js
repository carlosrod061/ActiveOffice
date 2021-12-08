
// Support to ServiceWorker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Registro de SW exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

// Mostrar notificación 
function showNotification() {
  // Solicitar permiso
  Notification.requestPermission(function(result) {
    // Si se otorga..
    if (result === 'granted') {
      // Registrar en el SQ
      navigator.serviceWorker.ready.then(function(registration) {
        // Título
        registration.showNotification('¡Genial, funciona!', {
          // Cuerpo
          body: 'Ahora tu equipo puede recibir notificaciones de Active Office.',
          // Ícono
          icon: 'assets/img/1024.png',
          // Vibración
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          // Etiqueta
          tag: 'vibration-sample'
        });
      });
    }
  });
}