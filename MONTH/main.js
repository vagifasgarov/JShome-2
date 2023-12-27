let month = {
    name: prompt('Write month name ')

}
function monthInfo(){
if (month.name == 'January') {
    alert('January is first month in a year')
}
else if (month.name == 'February'){
    alert('February is a second month in a year')
}
else if (month.name == 'march'){
    alert('March is a 3rd month in a year')
}
else if (month.name == 'April'){
    alert('April is a 4th month in a year')
}
else if (month.name == 'may'){
    alert('May is a 5th month in a year')
}
else if (month.name == 'June'){
    alert('June is a 6th month in a year')
}
else if (month.name == 'July'){
    alert('July is a 7th month in a year')
}
else if (month.name == 'August'){
    alert('August is a 8th month in a year')
}
else if (month.name == 'September'){
    alert('September is a 9th month in a year')
}
else if (month.name == 'October'){
    alert('October is a 10th month in a year')
}
else if (month.name == 'November'){
    alert('November is a 11th month in a year')
}
else if (month.name == 'December'){
    alert('December is a last month in a year')
}
else{
    alert(`${month.name} isnt a month`)
}
}
monthInfo()
