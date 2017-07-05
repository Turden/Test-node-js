const squel = require('squel');

class showSql{
    insert(req){
      return squel.insert()
          .into("weather")
          .setFieldsRows([
              {city:req.city,temp_lo:req.temp_lo,temp_hi:req.temp_hi,date:req.date}
          ])
          .toString();
    };
    select(){
      return squel.select()
          .from("weather")
          .toString();
    };
    delete(){
        return squel.delete()
            .from("weather")
            .toString();
    };
    update(req){
        return squel.update()
            .table("weather")
            .set("city",req.city)
            .where("date = ?",req.date)
            .toString();
    }
}
module.exports = showSql;