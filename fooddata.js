const fooddata = require('./food.json');
//console.log(fooddata);

//list all the food items
        function listfooditems(foodInfo){
            return foodInfo.map(function (food){
                return food.foodname;
            });
        }

        // Assuming 'fooddata' is loaded from 'fooddata.js'
        const fooditems = listfooditems(fooddata);
        console.log(fooditems);

//list all the food items with category vegetables
function listvegetables(foodInfo){
    return foodInfo.filter(function(food){
        return food.category=="Vegetable";
    }).map(function (food){
        return food.foodname;
    })
}
const vegetableArray=listvegetables(fooddata);
console.log(vegetableArray);

//list all the food items with category fruit
const listfruits=(foodInfo)=>foodInfo.filter((food)=>
food.category==="Fruit").map((food)=>food.foodname);

const fruitArray=listfruits(fooddata);
console.log(fruitArray);

//list all the food items with category protien
const listprotiens=(foodInfo)=>foodInfo.filter((food)=>
food.category==="Protein").map((food)=>food.foodname);

const protienArray=listprotiens(fooddata);
console.log(protienArray);

//list all the food items with category nuts
const listnuts=(foodInfo)=>foodInfo.filter((food)=>
food.category==="Nuts").map((food)=>food.foodname);

const nutsArray=listnuts(fooddata);
console.log(nutsArray);

//list all the food items with category grains
const listgrains=(foodInfo)=>foodInfo.filter((food)=>
food.category==="Grain").map((food)=>food.foodname);

const grainArray=listgrains(fooddata);
console.log(grainArray);

//list all the food items with category dairy
const listdairy=(foodInfo)=>foodInfo.filter((food)=>
food.category==="Dairy").map((food)=>food.foodname);

const dairyArray=listdairy(fooddata);
console.log(dairyArray);

//list all the food items with calorie above 100
const calorieabove=(foodInfo)=>foodInfo.filter((food)=>
food.calorie>100).map((food)=>food.foodname);

const calorieArray1=calorieabove(fooddata);
console.log(calorieArray1);

//list all the food items with calorie below 100
const caloriebelow=(foodInfo)=>foodInfo.filter((food)=>
food.calorie<100).map((food)=>food.foodname);

const calorieArray2=caloriebelow(fooddata);
console.log(calorieArray2);

//list all the food items with highest protien content to lowest
const sortprotien=(foodInfo)=>foodInfo.sort((food1,food2)=>food1.protiens-food2.protiens).map((food)=>
food.foodname);

const sortArray1=sortprotien(fooddata);
console.log(sortArray1);

//list all the food items with lowest cab content to highest
const sortcab=(foodInfo)=>foodInfo.sort((food1,food2)=>food1.cab-food2.cab).map((food)=>
food.foodname);

const sortArray2=sortcab(fooddata);
console.log(sortArray2);