// Write a function that returns the character from a string at a given position
function letterAtPosition(str, position) {
    return (str.charAt(position))
}


// Write a function that will join two strings with an optional separating character 
function concat(str1, str2, separator = " ") {
    return(str1 + separator + str2)
}


// Write a function that will capitalize the letter at a given position and return it
function capitalizer(str, position) {
    return(str.charAt(position).toUpperCase())
}
