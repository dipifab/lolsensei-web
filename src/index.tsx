/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.tsx'

// Cleanup one-release CLR-211: rimuove eventuali residui della sessione admin
// legacy (WP15). Rimuovere in WP22+ quando la base utenti avra completato
// il ciclo di refresh.
try {
  sessionStorage.removeItem('admin_key');
} catch {
  /* no-op: ambienti con storage disabilitato */
}

const root = document.getElementById('root')

render(() => <App />, root!)
