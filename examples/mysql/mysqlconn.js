const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1", // use ip if you dont know much about node mysql
  user: "root",
  password: "Miao1990$",
  port: 3306,
  database: "demo",
});

connection.connect(function (err) {
  if (err) {
    console.error("error happened during connection", err.stack);
    return;
  }
  console.log("connected - thread ID:" + connection.threadId);

  //query

  /**
   * 
   * mysql> desc tb_admin_user ;
+--------------+-----------------+------+-----+-------------------+-------------------+
| Field        | Type            | Null | Key | Default           | Extra             |
+--------------+-----------------+------+-----+-------------------+-------------------+
| id           | bigint unsigned | NO   | PRI | NULL              | auto_increment    |
| user_name    | varchar(20)     | NO   |     |                   |                   |
| password_md5 | varchar(50)     | NO   |     |                   |                   |
| user_token   | varchar(50)     | NO   |     |                   |                   |
| is_deleted   | tinyint         | NO   |     | 0                 |                   |
| create_time  | datetime        | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |
+--------------+-----------------+------+-----+-------------------+-------------------+
   * 
   * 
   * ***/
  connection.query(
    "SELECT id, user_name from tb_admin_user",
    function (err, rows) {
      if (err) {
        console.log(err);
      } else {
        console.log(rows, typeof rows);
        // after query, destroy connection
        connection.destroy();
      }
    }
  );
});
