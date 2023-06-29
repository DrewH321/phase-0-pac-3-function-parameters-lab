function introduction(fname) {
    return `Hi, my name is ${fname}.`; 
}
console.log(introduction("sarah"));

function introductionWithLanguage(name, language){
     return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
