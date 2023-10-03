// GLOBAL VARIABLE
let lang

// PROMPT USER FOR LANGUAGE CHOICE
lang = prompt('Please choose a language: (es/de/en/fr)')

if (lang === 'es') {
    console.log('Hello World translated in Spanish is: Hola mundo')
} else if (lang === 'de'){
    console.log('Hello World translated in German is: Hallo welt')
}
else if (lang === 'en'){
    console.log('Hello World translated in English is: Hello world')
}
else if (lang === 'fr'){
    console.log('Hello World translated in French is: Bonjour le monde')
}
else{
    console.log('Hello World translated in English is: Hello World')
}