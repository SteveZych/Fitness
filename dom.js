
//maybe create an onload dom to make sure all variables are reset to false

//Event listeners change variable to true when clicked
const area = {
    chest = false,
    back = false,
    shoulders = false,
    biceps = false,
    triceps = false,
    abs = false,
    legs = false
};

document.getElementById('chest').addEventListener('click', area.chest = true);
document.getElementById('back').addEventListener('click', area.back = true);
document.getElementById('shoulders').addEventListener('click', area.shoulders = true);
document.getElementById('biceps').addEventListener('click', area.biceps = true);
document.getElementById('triceps').addEventListener('click', area.triceps = true);
document.getElementById('abs').addEventListener('click', area.abs = true);
document.getElementById('legs').addEventListener('click', area.legs = true);

export default {area};