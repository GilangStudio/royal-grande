// config/sales.js
export const salesConfig = [
    {
        id: 1521,
        name: 'Mahendra Pratama',
        phone: '088272044307',
        whatsapp: 'https://wa.me/6288272044307',
        route: '/mahendra'
    },
    {
        id: 1522,
        name: 'Aan Supriyadi',
        phone: '082373225077',
        whatsapp: 'https://wa.me/6282373225077',
        route: '/aan'
    },
    {
        id: 1523,
        name: 'Muh Yoga',
        phone: '081222625629',
        whatsapp: 'https://wa.me/6281222625629',
        route: '/yoga'
    },
    {
        id: 1524,
        name: 'Budi Irawan',
        phone: '088287410893',
        whatsapp: 'https://wa.me/6288287410893',
        route: '/budi'
    },
    {
        id: 1525,
        name: 'Nia',
        phone: '08989006055',
        whatsapp: 'https://wa.me/628989006055',
        route: '/nia'
    },
    {
        id: 1526,
        name: 'Alwari',
        phone: '088274311410',
        whatsapp: 'https://wa.me/6288274311410',
        route: '/alwari'
    },
    {
        id: 1527,
        name: 'Khalif Akbar',
        phone: '083180574959',
        whatsapp: 'https://wa.me/6283180574959',
        route: '/khalif'
    },
    {
        id: 1528,
        name: 'Erji',
        phone: '082171189940',
        whatsapp: 'https://wa.me/6282171189940',
        route: '/erji'
    },
    {
        id: 1529,
        name: 'Deni Oktomi',
        phone: '089530613975',
        whatsapp: 'https://wa.me/6289530613975',
        route: '/deni'
    },
    {
        id: 1530,
        name: 'Rosana Stephany',
        phone: '08988937940',
        whatsapp: 'https://wa.me/628988937940',
        route: '/rosana'
    },
    {
        id: 1531,
        name: 'Luis Aleh',
        phone: '081376430588',
        whatsapp: 'https://wa.me/6281376430588',
        route: '/luis'
    },
    // {
    //     id: 1131,
    //     name: 'Gilang',
    //     phone: '08567899900',
    //     whatsapp: 'https://wa.me/08567899900',
    //     route: '/gilang'
    // }
]

// Helper function untuk mendapatkan data sales berdasarkan ID
export function getSalesByRoute(salesRoute) {
    return salesConfig.find(sales => sales.route === `/${salesRoute}`)
}

// Helper function untuk mendapatkan semua route sales
export function getAllSalesRoutes() {
    return salesConfig.map(sales => sales.route)
}