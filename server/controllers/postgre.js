const squel = require('squel');
const date = require('./date');

class showSql{
    insert(req){
      return squel.insert()
          .into("users")
          .setFieldsRows([
              {login:req.login,password:req.password,created:date,updated:date}
          ])
          .toString();
    };
    select(){
      return squel.select()
          .from("users")
          .toString();
    };
    delete(req){
        return squel.delete()
            .from("users")
            .where("login = ?",req.login)
            .toString();
    };
    update(req){
        return squel.update()
            .table("users")
            .set("password",req.password)
            .set("updated",date)
            .where("login = ?",req.login)
            .toString();
    }
}
module.exports = showSql;