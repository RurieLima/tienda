import {reactive} from 'vue'
export const Store = reactive({
    usuario:{},
    filtro: "",
    carrito: [],
    loginUsuario : false,
    productos : [
        {
        id: 1,
        nombre: "Bolsa de viaje",
        imagen: "http://46.101.223.217/pcd/img/bolsa_rosa.png",
        precio: 20
        },
        {
        id: 2,
        nombre: "Maleta Tourister",
        imagen: "http://46.101.223.217/pcd/img/tourister-amarilla.jpg",
        precio: 125
        },
        {
        id: 3,
        nombre: "Laptop",
        imagen: "http://46.101.223.217/pcd/img/laptop1.jpg",
        precio: 799
        },
        {
        id: 4,
        nombre: "Laptop Dell",
        imagen: "http://46.101.223.217/pcd/img/laptop_dell.jpg",
        precio: 699
        },
        {
        id: 5,
        nombre: "Laptop Lenovo",
        imagen: "http://46.101.223.217/pcd/img/laptop_lenovo.jpg",
        precio: 599
        },
        {
        id: 6,
        nombre: "Laptop MacBook",
        imagen: "http://46.101.223.217/pcd/img/laptop_mac.jpg",
        precio: 590
        }
    ],
    usuarios : [
        {
            id: 1,
            nombre: "Deanna Burns",
            direccion: {
            calle: "Calle A, 1-1",
            cp: "08193",
            poblacion: "Bellaterra"
            },
            direccionEntrega: {
            calle: "Calle Primera, 1-1",
            cp: "08001",
            poblacion: "Barcelona"
            }
        },
        {
            id: 2,
            nombre: "Devyn Waller",
            direccion: {
            calle: "Calle B, 1-1",
            cp: "08193",
            poblacion: "Sabadell"
            },
            direccionEntrega: {
            calle: "Calle Segunda 2-2",
            cp: "08002",
            poblacion: "Terrasa"
            }
        },
        {
            id: 3,
            nombre: "Junior Mcgee",
            direccion: {
            calle: "Calle C, 1-1",
            cp: "08193",
            poblacion: "Terrassa"
            },
            direccionEntrega: {
            calle: "Calle Tercera 3-3",
            cp: "08003",
            poblacion: "Sabadell"
            }
        },
        {
            id: 4,
            nombre: "Darwin Holt",
            direccion: {
            calle: "Calle D, 1-1",
            cp: "08193",
            poblacion: "Barcelona"
            },
            direccionEntrega: {
            calle: "Calle Cuarta 4-4",
            cp: "08004",
            poblacion: "Belaterra"
            }
        },
        {
            id: 5,
            nombre: "Rhianna Weber",
            direccion: {
            calle: "Calle A, 1-1",
            cp: "08193",
            poblacion: "Bellaterra"
            },
            direccionEntrega: {
            calle: "Calle Primera, 1-1",
            cp: "08001",
            poblacion: "Barcelona"
            }
        },
        {
            id: 6,
            nombre: "Susan Yang",
            direccion: {
            calle: "Calle A, 1-1",
            cp: "08193",
            poblacion: "Bellaterra"
            },
            direccionEntrega: {
            calle: "Calle Primera, 1-1",
            cp: "08001",
            poblacion: "Barcelona"
            }
        },
        {
            id: 7,
            nombre: "Ronin Rowland",
            direccion: {
            calle: "Calle A, 1-1",
            cp: "08193",
            poblacion: "Bellaterra"
            },
            direccionEntrega: {
            calle: "Calle Primera, 1-1",
            cp: "08001",
            poblacion: "Barcelona"
            }
        },
        {
            id: 8,
            nombre: "Ulises Whitehead",
            direccion: {
            calle: "Calle A, 1-1",
            cp: "08193",
            poblacion: "Bellaterra"
            },
            direccionEntrega: {
            calle: "Calle Primera, 1-1",
            cp: "08001",
            poblacion: "Barcelona"
            }
        },
        {
            id: 9,
            nombre: "Kaitlin Weaver",
            direccion: {
            calle: "Calle A, 1-1",
            cp: "08193",
            poblacion: "Bellaterra"
            },
            direccionEntrega: {
            calle: "Calle Primera, 1-1",
            cp: "08001",
            poblacion: "Barcelona"
            }
        },
        {
            id: 10,
            nombre: "Donald Vincent",
            direccion: {
            calle: "Calle A, 1-1",
            cp: "08193",
            poblacion: "Bellaterra"
            },
            direccionEntrega: {
            calle: "Calle Primera, 1-1",
            cp: "08001",
            poblacion: "Barcelona"
            }
        },
    ]

})