'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan!",res)
};


//menampilkan semua data siswa
exports.tampilsemuasiswa = function(req,res){
    connection.query('SELECT * FROM siswa', function (error,rows,fields){
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
        function(error,rows,fields){
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
        function (error,rows,fields){
            if (error){
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};


//mengubah data berdasarkan id
exports.ubahsiswa = function(req,res){
    var id = req.body.id;
    var nama = req.body.nama;
    var kelas = req.body.kelas;
    var alamat = req.body.alamat;

    connection.query('UPDATE siswa Set nama=?, kelas=?, alamat=? WHERE id=?',[nama,kelas,alamat,id],
    function (error,rows,fields){
        if (error){
            console.log(error);
        } else {
            response.ok("Berhasil Ubah Data", res )
        }
    });
};


//menghapus data berdasarkan id
exports.hapussiswa = function(req,res){
    var id = req.body.id;
    connection.query('DELETE FROM siswa WHERE id=?',[id],
    function (error,rows,fields){
        if (error){
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data", res )
        }
    });
};


//menampilkan matapelajaran group
exports.tampilgroupmatapelajaran = function(req, res){
    connection.query('SELECT siswa.id, siswa.nama, siswa.kelas, siswa.alamat, matapelajaran.matapelajaran, matapelajaran.sks from krs JOIN matapelajaran JOIN siswa WHERE krs.id_mapel = matapelajaran.id_mapel AND krs.id = siswa.id ORDER BY siswa.id;',
    function (error,rows,fields){
        if(error){
            console.log(error);
        } else {
            response.oknested(rows, res);
        }
    });
};