<template lang="">
<div>
<div>
    <h1 style="margin-left:-1000px">Crear Personaje</h1>
    
    <h2 style="margin-left:110px">Detalles del personaje</h2>
    <h6 style="margin-left:110px; color:red">Algunas de casillas son obligatorias</h6>
</div> 
<div class="imgBox">
    <img src="../assets/Bardo.png" class="clase">
</div>
<div style="margin-left:-1000px">
    <label>Nombre</label>
    
</div>
<div style="margin-left:-1000px">
    <input type="text">
</div>
    <div class="form" name="formulario">
        <div name="form-1">
            <label> Raza </label>
            <select class="form-select" aria-label="Default select example">
                <option selected>- Raza -</option>
                <option value="Elfo">Elfo</option>
                <option value="Enano">Enano</option>
                <option value="Humano">Humano</option>
                <option value="Orco">Orco</option>
                <option value="Dragonborn">Dragonborn</option>
            </select>
        </div>
        <div name ="form-2" style="margin-top:50px">
            <label> Clase </label>
            <select class="form-select" aria-label="Default select example">
                <option selected>- Clase - </option>
                <option value="Bardo">Bardo</option>
                <option value="Picaro">Picaro</option>
                <option value="Guerrero">Guerrero</option>
                <option value="Mago">Mago</option>
                <option value="Brujo">Brujo</option>
                <option value="Barbaro">Barbaro</option>
            </select>
        </div>
        <div name ="form-3" style="margin-top:50px">
            <label> Género </label>
            <select class="form-select" aria-label="Default select example">
                <option selected>- Género - </option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="otro">Otro</option>
            </select>
        </div>
    </div>
    <!-- Texto Proveniente de la base de datos --> 
    <div class="espace-text">
        <h4>Elfos</h4>
        <h6>Con su gracilidad sobrenatural y rasgos refinados, los elfos son inquietantemente bellos a los ojos de los humanos y 
            muchas otras razas. Son ligeramente más bajos que los humanos, midiendo entre menos de 5 pies (1,5 m) a más de 6 pies 
            (1,8 m). También son más ligeros que los humanos, pesando solo entre 100 y 145 libras (45 a 67 kg). Los varones y las 
            mujeres son más o menos de la misma altura, pero los hombres son marginalmente más pesados que las mujeres.
            La coloración de los elfos abarca el mismo rango que la de los humanos, incluyendo también pieles con tonos de cobre, 
            bronce y blanco azulado, cabellos verdes o azules, y ojos como estanques de oro o plata líquidos. Los elfos no tienen 
            vello facial, y poco vello corporal. Prefieren los ropajes elegantes de vibrantes colores, y disfrutan la joyería simple 
            pero hermosa.
        </h6>
    </div>
    <div>
        <button type="button" class="btn btn-danger">Crear</button>
    </div>
</div>


</template>
<style>
    .imgBox{
        margin-top: -80px;
        margin-left: -1000px;
    }
      .form{
    margin-top: -600px;
    margin-left: 500px;
  padding: 60px;
  max-width: 400px;
  background-color: #E7E7E7;
}
.btn{
    margin-top: 10px;
    margin-left: 80px;
}
.espace-text{
    margin-top: -400px;
    margin-left: 1000px;
}

</style>