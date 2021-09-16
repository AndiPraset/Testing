'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };

    res.json(data);
    res.end();
};


//response untuk nested matapelajaran
exports.oknested = function(values, res){
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item)=>{
        //tentukan key group
        if(akumulasikan[item.nama]){
            //buat variabel group nama siswa
            const group = akumulasikan[item.nama];
            //cek jika isi array adalah matakuliah
            if(Array.isArray(group.matapelajaran)){
                //tambahkan value ke dalam group matapelajaran
                group.matakuliah.push(item.matakuliah);
            } else {
               group.matapelajaran = [group.matapelajaran, item.matapelajaran];
            }
        } else {
            akumulasikan[item.nama] = item;
        }
            return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    };

    res.json(data);
    res.end;
};