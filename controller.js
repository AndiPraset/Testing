'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan!",res)
};


//menampilkan semua data siswa
exports.tampilsemuasiswa = function(req,res){
    connection.query('SELECT * FROM siswa', function (error,rows,fileds){
        if(error){
            connection.log(error);
        } else {
            response.ok(rows,res)
        }
    });
};