const exercises = {
    chest: {
        barbellChestPress: {
            description: " "
        }
    },
    back: {
        bentOverRow: {
            description: " "
        }
    },
    shoulders: {
        dumbbellFrontRaise: {
            description: " "
        }
    },
    biceps: {
        dumbbellCurl: {
            description: " "
        }
    },
    triceps:{
        pullDowns: {
            description: " "
        }
    },
    abs: {
        crunches: {
            description: " "
        }
    },
    legs: {
        squat: {
            description: " "
        }
    }
};

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