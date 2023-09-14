class User{
    constructor(name, username, pass){
        this.name = name
        this.username = username
        this.pass = pass
    }

    isEquals(object) {        
        return JSON.stringify(this) == JSON.stringify(objeto)
    }
}



module.exports = User;