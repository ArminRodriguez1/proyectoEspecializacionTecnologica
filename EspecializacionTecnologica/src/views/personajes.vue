<template>
    <div>
          <form>
		<div class="row">
             <h2>Buscar NPCs</h2>
			<div class="col">
				<input type="text" class="form-control" id="idName" placeholder="Buscar por Nombre">
			</div>
			<div class="col">
				<select id="idRaza" class=form-control>
                     <option selected>- Raza -</option>
					<option>Elfo</option>
					<option>Humano</option>
					<option>Enano</option>
					<option>Orco</option>
					<option>Dragonborn</option>
				</select>
			</div>
			<div class="col">
				<button type="button"  class="btn btn-danger">Buscar</button>
			</div>
            <div class="col">
                 <router-link to="/crear_personaje"><button type="button"  class="btn btn-danger">Crear</button> </router-link>				
			</div>
		</div>
	</form>
    </div>
</template>