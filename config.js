// ============================================================
//  PHOTO BOOTH — CONFIGURACION DEL EVENTO
//  Edita este archivo para personalizar cada evento
// ============================================================

const BOOTH_CONFIG = {

  // --- EVENTO ---
    eventName: "Party Cam",           // Nombre del evento (aparece en la tira)
      eventSubtitle: "Escanea y aparece en pantalla",  // Subtitulo debajo del nombre
        eventDate: "2026",                // Fecha o año del evento
          hashtag: "#PartyCam",             // Hashtag del evento

            // --- CAMARA ---
              totalPhotos: 3,                   // Cuantas fotos por sesion (1-6)
                countdownSeconds: 5,              // Segundos de cuenta regresiva por foto
                  delayBetweenPhotos: 1500,         // Milisegundos entre foto y foto
                    mirrorCamera: true,               // true = espejo (recomendado para selfie)
                      cameraFacing: "user",             // "user" = frontal | "environment" = trasera

                        // --- DISENO DE LA TIRA ---
                          stripWidth: 600,                  // Ancho del canvas en px (no tocar si no sabes)
                            photoAspectRatio: 4/3,            // Relacion aspecto de cada foto (4/3 o 16/9)
                              stripBgColor: "#1a0033",          // Color de fondo de la tira (hex)
                                stripBgImage: "",                 // Ruta a imagen de fondo (ej: "fondo.jpg") o "" para color solido
                                  overlayImage: "",                 // PNG con transparencia encima de todo (marco decorativo) o ""
                                    logoImage: "logo.png",            // Logo arriba de la tira o "" para ninguno
                                      logoHeight: 120,                  // Alto del logo en px en la tira impresa

                                        // Colores del texto en la tira
                                          textColor: "#ffffff",             // Color del nombre del evento
                                            subtitleColor: "#ff66cc",         // Color del subtitulo/hashtag
                                              accentColor: "#ff66cc",           // Color de lineas decorativas

                                                // Espaciado interno de la tira (px)
                                                  paddingTop: 40,                   // Espacio arriba (donde va el logo)
                                                    paddingBottom: 40,                // Espacio abajo (donde va el texto)
                                                      paddingX: 24,                     // Espacio a los costados
                                                        gapBetweenPhotos: 16,             // Espacio entre fotos

                                                          // --- PANTALLA DE BIENVENIDA ---
                                                            welcomeTitle: "Photo Booth",      // Titulo grande en pantalla de inicio
                                                              welcomeSubtitle: "Presiona el boton y sonrie!", // Subtitulo
                                                                welcomeBgColor: "#0d0d1a",        // Color de fondo pantalla bienvenida
                                                                  welcomeAccent: "#ff66cc",         // Color principal de la pantalla

                                                                    // --- IMPRESION ---
                                                                      autoPrint: false,                 // true = imprimir automatico sin preguntar
                                                                        printDelay: 2000,                 // ms antes de mostrar boton de impresion
                                                                          returnDelay: 15000,               // ms en pantalla resultado antes de volver al inicio

                                                                            // --- FLASH ---
                                                                              flashColor: "#ffffff",            // Color del flash al tomar foto
                                                                                flashDuration: 120,               // ms que dura el flash

                                                                                };
                                                                                