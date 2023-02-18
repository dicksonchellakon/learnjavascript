
let User = {
    name : 'Dickson',
    sizes: {
        height: 182,
        width: 50
      }
}

let admin = structuredClone(User)// Object.assign({}, User)


console.log(User.sizes == admin.sizes)

admin.sizes.height = 500
console.log(admin)
console.log(User)



//Object.assign(User, {canView : 1}, { canEdit : 2})
//console.log(User)
/*
let admin = {}; // copy the reference

for(let key in User){
    admin[key] = User[key]
}
console.log(admin)
admin.name = 'John'
console.log(admin)
console.log(User)*/