const squel = require('squel');

class showSql{
    insert(req){
      return squel.insert()
          .into("users")
          .setFieldsRows([
              {login:req.login,password:req.password/*,created:,updated:Date()*/}
          ])
          .toString();
    };
    select(){
      return squel.select()
          .from("users")
          .toString();
    };
    delete(){
        return squel.delete()
            .from("users")
            .toString();
    };
    update(req){
        return squel.update()
            .table("users")
            .set("password",req.password)
            .set("updated",Date.now())
            .where("login = ?",req.login)
            .toString();
    }
}
module.exports = showSql;