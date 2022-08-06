angular.module('perpustakaan-app', [])
.controller('my-controller', function ($scope) {
    $scope.hello = "Hello World!";

    // 1. Array
    var arr = [1, 2, 'javascript', 'rumah', true];
    
    // Get item of array by index
    // alert(arr[3]);

    // Get size of array
    // alert(arr.length);

    // Add new item to the array
    // arr.push('Ramadhan');

    // 2. Object
    var obj = {
        judul: 'Ayat Ayat Cinta',
        penulis: 'Habiburahman El Shirazy',
        halaman: 800
    };

    // Get property value from Object 
    // alert(obj.judul);

    // Update value of property
    // obj.halaman = 850;
    // alert(obj.halaman);

    // Add new property
    // obj.isbn = 'Abcdefghijkl';
    // console.log(obj);

    // Delete property
    // delete obj.isbn;
    // console.log(obj);

    // List of Object
    var listBuku = [
        {
            judul: 'Ayat Ayat Cinta',
            penulis: 'Habiburahman El Shirazy',
            halaman: 800
        },
        {
            judul: 'Laskar Pelangi',
            penulis: 'Andrea Hiratta',
            halaman: 900
        },
        {
            judul: 'Di Bawah Lindungan Kabah',
            penulis: 'Hamka',
            halaman: 600
        }
    ];
    
    var buku = {
        judul: 'Ayat Ayat Cinta',
        penulis: 'Habiburahman El Shirazy',
        halaman: 800,
        category: ['Islam', 'Novel', 'Fiksi']
    };
});