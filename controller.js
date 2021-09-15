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
            consoles.log(error);
        } else {
            response.ok(rows,res)
        }
    });
};


//meanmpilkan semua data siswa berdasarkan id
exports.tampilberdasarkanid=function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM siswa WHERE id = ?', [id],
        function(error,rows,fileds){
            if (error){
                console.log(error);
            } else {
                response.ok(rows,res);
        }
    });
};


//menambahkan data siswa
exports.tambahsiswa = function(req,res){
    var nama = req.body.nama;
    var kelas = req.body.kelas;
    var alamat = req.body.alamat;

    connection.query('INSERT INTO siswa(nama,kelas,alamat) VALUES(?,?,?)',
    [nama,kelas,alamat],
        function (error,rows,fileds){
            if (error){
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};