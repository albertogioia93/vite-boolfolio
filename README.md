# Vue Template

Template di partenza per progetti Vue con option API

Per installare il progetto:
- npm install
- npm run dev

# Cronostoria del mio operato

LARAVEL API IN PROGETTO BACKEND COMUNICANO CON PROGETTO VITE FRONTEND:

(VS CODE LARAVEL)
Sto usando il database di phpMyAdmin 'esercizio_laravel_auth'
(terminale laravel) php artisan make:controller Api/ProjectController
app/Http/Controllers/Api/ProjectController.php (scrivo codice per passare la lista dei miei post del database in formato json)
routes/api.php --- scrivo codice: Route::get('test', [ProjectController::class, 'index']); NOTA:ProjectController scelgo quello di Api, non Admin

(VS CODE VITE)
(terminale vite) npm install
src/components creo i file AppHeader.vue, AppMain.vue e AppFooter.vue (dentro questi 3 file scrivo codice)
src/App.vue importo e registro quei file appena creati

importo bootstrap
(terminale vite) stoppo server ctrl+c, npm install bootstrap@5.3.0-alpha3
src/main.js scrivo: import * as bootstrap from 'bootstrap';
src/assets/scss/main.scss scrivo: @import "bootstrap/scss/bootstrap";

src/assets/scss/_partial creo file _header.scss
src/assets/scss/main.scss importo il file appena creato: @import "_partial/header";

importo axios
(terminale vite) stoppo server ctrl+c, npm install axios
src/App.vue importo axios scrivendo: import axios from 'axios';

