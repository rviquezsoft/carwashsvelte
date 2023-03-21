<script>
	import "./styles.css";
	import { onMount } from "svelte";
	import { db } from "../js/firebase";
	import Swal from "sweetalert2/dist/sweetalert2.js";
	import "sweetalert2/dist/sweetalert2.css";

	let isDisabled = false;

	let datos = [];

	onMount(() => {
		db.ref("requests").on("value", (snapshot) => {
			datos = Object.keys(snapshot.val() || {}).map((id) => ({
				id,
				...snapshot.val()[id],
			}));
		});
	});

	async function showMessage(title, text, icon) {
		await Swal.fire({
			title: title,
			text: text,
			icon: icon,
		});
	}
	async function aprobar(event) {
		isDisabled = true;
		try {
			const id = event.target.closest("tr").dataset.id;
			const emailtr = event.target.closest("tr").dataset.email;
			const desctr = event.target.closest("tr").dataset.desc;
			const placatr = event.target.closest("tr").dataset.placa;
			await Swal.fire({
				title: "¿Estás seguro que desea aprobar esta solicitud?",
				text: "Esta acción no se puede deshacer",
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Sí, aprobar",
				cancelButtonText: "Cancelar",
			}).then(async(result)=>{
				if (result.isConfirmed) {
					let mes=await patchRequest(emailtr,desctr,placatr);
					let correct=mes.includes('aceptada');
					await showMessage('Proceso',correct?'La solicitud fue procesada correctamente':mes,'success');
					if (correct) {
						const itemRef = db.ref(`requests/${id}`);
						itemRef.remove();
					}else{
						await showMessage('Error','Un error desconocido se produjo al intentar realizar el proceso, por favor revise su conexión a internet','error');
					}
					
				}
			});
		} catch (error) {
			await showMessage("Error", error, "error");
		}
		isDisabled = false;
	}

	async function rechazar(event) {
		isDisabled = true;
		try {
			const id = event.target.closest("tr").dataset.id;
			const emailtr = event.target.closest("tr").dataset.email;
			const placatr = event.target.closest("tr").dataset.placa;

			await Swal.fire({
				title: "¿Estás seguro que desea rechazar la solicitud?",
				text: "Esta acción no se puede deshacer",
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Sí, rechazar",
				cancelButtonText: "Cancelar",
			}).then(async (result) => {
				if (result.isConfirmed) {
					const itemRef = db.ref(`requests/${id}`);
					itemRef.remove();
					let mes=await patchRequest(emailtr,'rechazar',placatr);
					let correct=mes.includes('rechazada');
					await showMessage('Proceso',correct?'La solicitud fue rechazada correctamente':mes,'success');
					if (!correct) {
						await showMessage('Error','Un error desconocido se produjo al intentar realizar el proceso, por favor revise su conexión a internet','error');
					}
				}
			});
		} catch (error) {
			await showMessage("Error", error, "error");
		}
		isDisabled = false;
	}
	async function patchRequest(email,description,placa){
		try {
			const url = "http://201.237.248.191:45054/user/transaction";
					const apiKey =
						"F4E4D4F2A2AB7F06AB2C30A006DFCE9A23E7246F1C6E33D7F8A3BCF5F5FC2CBF";
					const data = {
						'email': email,
						'description': description,
						'placa': placa,
					};

					let apibody=JSON.stringify(data);
					
					const response = await fetch(url, {
						method: "PATCH",
						body: apibody,
						headers: {
							"Content-Type": "application/json",
							"X-Api-Key": apiKey
						},
					});
					return await response.text();
		} catch (error) {
			return 'error'
		}
	}
</script>

<div class="app mt-4 px-4">
	<div class="text-center">
		<h1 class="text-3xl font-bold">Lista de Solicitudes</h1>
	</div>
	<table class="mx-auto min-w-full divide-y divide-gray-200">
		<thead class="bg-gray-200">
			<tr>
				<th
					class="px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"
					>Correo electrónico</th
				>
				<th
					class="px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"
					>Descripción</th
				>
				<th
					class="px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"
					># Placa</th
				>
				<th
					class="px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"
					>Aprobar</th
				>
				<th
					class="px-6 py-3 text-left text-1.5xl font-medium text-gray-500 uppercase tracking-wider"
					>Rechazar</th
				>
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-200">
			{#each datos as dato}
				<tr data-id={dato.id} data-email={dato.email} data-desc={dato.description} data-placa={dato.placa}>
					<td class="px-6 py-4 whitespace-nowrap">{dato.email}</td>
					<td class="px-6 py-4 whitespace-nowrap">
						{#if dato.description === "Puntos"}
							<span
								class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
								>{dato.description}</span
							>
						{:else}
							<span
								class="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"
								>{dato.description}</span
							>
						{/if}
					</td>
					<td class="px-6 py-4 whitespace-nowrap">{dato.placa}</td>
					<td class="px-6 py-4 whitespace-nowrap">
						<button
							on:click={aprobar}
							disabled={isDisabled}
							class="{!isDisabled
								? 'bg-[#1e3a8a]'
								: 'bg-[#f3f4f6]'}  text-white font-bold py-2 px-4 rounded inline-flex"
						>
							<svg
								class="fill-current w-4 h-4 mr-2 check-icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path
									d="M17.293 4.293a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414l3.293 3.293 8-8z"
								/>
							</svg>
							<span>Aprobar</span>
						</button></td
					>
					<td class="px-6 py-4 whitespace-nowrap">
						<button
							on:click={rechazar}
							disabled={isDisabled}
							class="{!isDisabled
								? 'bg-[#f43f5e]'
								: 'bg-[#f3f4f6]'}  text-white font-bold py-2 px-4 rounded inline-flex"
						>
							<svg
								class="fill-current w-4 h-4 mr-2 reject-icon"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path
									d="M17.707 2.293a1 1 0 0 1 0 1.414L3.414 18.707a1 1 0 1 1-1.414-1.414L16.293 1.293a1 1 0 0 1 1.414 0z"
								/>
								<path
									d="M2.293 2.293a1 1 0 0 1 0-1.414L18.707 17.293a1 1 0 0 1-1.414 1.414L.879 1.879a1 1 0 0 1 0-1.414z"
								/>
							</svg>
							<span>Rechazar</span>
						</button></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
