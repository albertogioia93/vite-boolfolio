# CRONOSTORIA DEL MIO OPERATO DI GIO 25/05/2023: ESERCIZIO Laravel Boolfolio - API

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

-----------------------------------------------------------------------------------------------------------------------------------
# CRONOSTORIA DEL MIO OPERATO DI VEN 26/05/2023: ESERCIZIO Laravel Boolfolio - API

(VS CODE LARAVEL)
resources/views/partials creo 2 file errors.blade.php e message.blade.php (scrivo codici dentro)
app/Http/Controllers/Api/ProjectController.php (scrivo codice)

(VS CODE VITE)
src/components/AppMain.vue (scrivo codice)

(VS CODE LARAVEL)
app/Models/Post.php (aggiungo funzioni che rendono il titolo del post in maiuscolo e restituiscono img anche qualora cambiasse la loro url)

(VS CODE LARAVEL)
routes/api.php (scrivo codice)
app/Http/Controllers/Api/ProjectController.php (scrivo codice)

(VS CODE VITE)
(terminale) npm install vue-router@4
src/App.vue (scrivo codice)
dentro src creo cartella pages e dentro questa cartella creo file AppHome.vue (scrivo codice)
src/pages creo file AboutPage.vue (scrivo codice)
src/pages creo file BlogPage.vue (scrivo codice)
src/pages creo file PostPage.vue (scrivo codice)
dentro src creo file router.js (scrivo codice)
src/main.js (scrivo codice)
src/components/AppHeader.vue (scrivo codice)
src/components rinomino AppMain.vue in CardPost.vue (scrivo codice)

DA CHIEDERE LUNEDì A LEZIONE:
QUANDO CLICCO SUL BOTTONE 'Leggi descrizione progetto' dalla card OTTENGO IL SEGUENTE ERRORE= Request failed with status code 500

