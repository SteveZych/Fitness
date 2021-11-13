const chest = false;
const back = false;
const shoulders = false;
const biceps = false;
const triceps = false; 
const abs = false;
const legs = false;

//maybe create an onload dom to make sure all variables are reset to false

//Event listeners change variable to true when clicked
document.getElementById('chest').addEventListener('click', chest = true);
document.getElementById('back').addEventListener('click', back = true);
document.getElementById('shoulders').addEventListener('click', shoulders = true);
document.getElementById('biceps').addEventListener('click', biceps = true);
document.getElementById('triceps').addEventListener('click', triceps = true);
document.getElementById('abs').addEventListener('click', abs = true);
document.getElementById('legs').addEventListener('click', legs = true);

