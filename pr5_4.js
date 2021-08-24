class Movie{
    constructor(name){
        this.name = name;
        //this.directedBy = directedBy;
        //this.onDate = onDate;
    }
}
let input =[
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']
let film =[];
let j = 0
for(let i = 0;i<input.length;i++){
    let arr = input[i].split(' ');
    let str="";
    if(arr[0]==="addMovie"){
        for(let i = 1; i<arr.length;i++){
            str+=arr[i]+" ";
        }
        film[j] = new Movie(str);
        j++;
    }
    if(arr[arr.length-2]=="onDate"){
        for(let i = 0;i<arr.length-2;i++){
            str+=arr[i] + " ";
        }
        for(let i =0;i<film.length;i++){
            if(film[i].name ==str){
                film[i].date = arr[arr.length-1];
            }
        }
    }
    let number = arr.indexOf("directedBy",1)
    if(number>0)
    {
        for(let i = 0;i<number;i++){
            str+=arr[i]+" ";
        }
        let str2 ="";
        for(let i =number+1;i<arr.length;i++){
            str2+=arr[i]+" ";
        }
        for(let i =0;i<film.length;i++){
            if(film[i].name ==str){
                film[i].director = str2;
            }
        }
    } 
}
for(let i = 0;i< film.length;i++){
    let str = JSON.stringify(film[i]);
    console.log(str);
}