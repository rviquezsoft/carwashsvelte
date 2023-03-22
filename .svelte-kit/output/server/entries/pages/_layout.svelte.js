import { c as create_ssr_component, e as each, a as add_attribute, b as escape } from "../../chunks/index3.js";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "sweetalert2/dist/sweetalert2.js";
const styles = "";
const firebaseConfig = {
  apiKey: "AIzaSyA6nAQ1xgsCY6w1jgS_TpbcRAvRiPV0d4A",
  authDomain: "carwashcentercr-c70c7.firebaseapp.com",
  databaseURL: "https://carwashcentercr-c70c7-default-rtdb.firebaseio.com",
  projectId: "carwashcentercr-c70c7",
  storageBucket: "carwashcentercr-c70c7.appspot.com",
  messagingSenderId: "311324575522",
  appId: "1:311324575522:web:840bf6e4d3944ffc0f477b",
  measurementId: "G-CENRR12RF4"
};
firebase.initializeApp(firebaseConfig);
firebase.database();
const sweetalert2 = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let datos = [];
  return `<div class="${"app mt-4 px-4"}"><div class="${"text-center"}"><h1 class="${"text-3xl font-bold"}">Lista de Solicitudes</h1></div>
	<table class="${"mx-auto min-w-full divide-y divide-gray-200"}"><thead class="${"bg-gray-200"}"><tr><th class="${"px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"}">Correo electrónico</th>
				<th class="${"px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"}">Descripción</th>
				<th class="${"px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"}"># Placa</th>
				<th class="${"px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"}">Aprobar</th>
				<th class="${"px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"}">Rechazar</th></tr></thead>
		<tbody class="${"divide-y divide-gray-200"}">${each(datos, (dato) => {
    return `<tr${add_attribute("data-id", dato.id, 0)}${add_attribute("data-email", dato.email, 0)}${add_attribute("data-desc", dato.description, 0)}${add_attribute("data-placa", dato.placa, 0)}><td class="${"px-6 py-4 whitespace-nowrap"}">${escape(dato.email)}</td>
					<td class="${"px-6 py-4 whitespace-nowrap"}">${dato.description === "Puntos" ? `<span class="${"bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"}">${escape(dato.description)}</span>` : `<span class="${"bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"}">${escape(dato.description)}</span>`}</td>
					<td class="${"px-6 py-4 whitespace-nowrap"}">${escape(dato.placa)}</td>
					<td class="${"px-6 py-4 whitespace-nowrap"}"><button ${""} class="${escape("bg-[#1e3a8a]", true) + " text-white font-bold py-2 px-4 rounded inline-flex"}"><svg class="${"fill-current w-4 h-4 mr-2 check-icon"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}"><path d="${"M17.293 4.293a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414l3.293 3.293 8-8z"}"></path></svg>
							<span>Aprobar</span>
						</button></td>
					<td class="${"px-6 py-4 whitespace-nowrap"}"><button ${""} class="${escape("bg-[#f43f5e]", true) + " text-white font-bold py-2 px-4 rounded inline-flex"}"><svg class="${"fill-current w-4 h-4 mr-2 reject-icon"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}"><path d="${"M17.707 2.293a1 1 0 0 1 0 1.414L3.414 18.707a1 1 0 1 1-1.414-1.414L16.293 1.293a1 1 0 0 1 1.414 0z"}"></path><path d="${"M2.293 2.293a1 1 0 0 1 0-1.414L18.707 17.293a1 1 0 0 1-1.414 1.414L.879 1.879a1 1 0 0 1 0-1.414z"}"></path></svg>
							<span>Rechazar</span>
						</button></td>
				</tr>`;
  })}</tbody></table></div>`;
});
export {
  Layout as default
};
