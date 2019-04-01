// 6kyu
// Format a string of names like 'Bart, Lisa & Maggie'.
//
// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
//
// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'
//
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'
//
// list([ {name: 'Bart'} ])
// returns 'Bart'
//
// list([])
// returns ''

function list(names){
  const getNameValues = names.map(function(object) {
    const eachName = object.name
    return eachName
   })
    const comma = ', '
    const ampher = ' &'
    if (getNameValues.length > 2) {
      let str = getNameValues.join(comma)
      let i = str.lastIndexOf(comma)
      return str.substring(0, i) + ampher + str.substring(i + 1)
    } else {
     return getNameValues.join(ampher + ' ')
    }
 }
