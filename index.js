require('datejs')

function combineUsers(...args){

 const combinedObject ={
  users : []
 } 
 for (let userArray of args) {
    combinedObject.users = [...combinedObject.users, ...userArray];
}
combinedObject.merge_date = Date.today().toString("M/d/yyyy");

return combinedObject;
}

console.log(
    combineUsers(
        ["Bonaya", "John"],
        ["Mary", "Peter"],
        ["James", "Grace"]
    )
);


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};