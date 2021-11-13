import {exercises} from "objects.js";


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

//Create an addExercise() function to add html below current form

export default {sortExercises};