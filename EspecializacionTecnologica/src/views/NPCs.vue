<template lang="">
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
		</div>
	</form>
    <table class="table" style="margin-top:50px">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Raza</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Giligant</td>
      <td>Dragon de fuego, NVL 15, Hombre</td>
      <td>Dragonborn</td>
      <td><router-link to="/npc/1"> <button type="button" class="btn btn-danger">Usar</button></router-link></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mirela</td>
      <td>Guerrera, NVL 1, Mujer</td>
      <td>Humano</td>
      <td><button type="button" class="btn btn-danger">Usar</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>Paladin, NVL 3, Hombre</td>
      <td>Enano</td>
       <td><button type="button" class="btn btn-danger">Usar</button></td>
    </tr>
  </tbody>
</table>
</div>
</template>