import {exercises} from "objects.js";
import {area} from "dom.js";



//Returns list of exercises by using chosen arguments to filter exercise object
function sortExercises(...args){
    let exerciseList = "";
    for (const key in exercises){
        for (const arg of args){ 
            if (arg == key){
                for (const property in key){
                    exerciseList.push(property);
                };
            };
        };
    };
    return exerciseList;
};

//Filter function takes builds list of true body areas and passes it to sortExercises()
function filter(){
    const arguments = "",
    for (const property in area){
        if (area[property] === true){
            arguments.push(area[property]);
        };
    };
    return sortExercises(arguments);
};


//Create an addExercise() function to add html below current form

export default {sortExercises()};