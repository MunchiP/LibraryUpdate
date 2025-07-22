
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/Catalogo"
  },
  {
    "renderMode": 2,
    "route": "/Servicio"
  },
  {
    "renderMode": 2,
    "route": "/Servicio/HakunaMatata"
  },
  {
    "renderMode": 2,
    "route": "/Servicio/BiblioMovil"
  },
  {
    "renderMode": 2,
    "route": "/Servicio/SordoCiegos"
  },
  {
    "renderMode": 2,
    "route": "/Servicio/AulaVirtual"
  },
  {
    "renderMode": 2,
    "route": "/Servicio/Conferencias"
  },
  {
    "renderMode": 2,
    "route": "/Redes"
  },
  {
    "renderMode": 2,
    "route": "/QuienesSomos"
  },
  {
    "renderMode": 2,
    "route": "/QuienesSomos/Contacto"
  },
  {
    "renderMode": 2,
    "route": "/QuienesSomos/Historia"
  },
  {
    "renderMode": 2,
    "route": "/QuienesSomos/Informacion"
  },
  {
    "renderMode": 2,
    "route": "/QuienesSomos/RedesSociales"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 26988, hash: 'e02ad3780d7f6797a559130ff265326c5b577423d6cc0f1f2af7c6af5d7c19ec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20561, hash: '17c0f45facb0bb923cee197e848b3deef6b70e7fbac6ea256da5a570a08ce668', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Catalogo/index.html': {size: 64609, hash: '89afc9d2f4c02eeaef45efef14b7175b089702bdc9fd352dd03ac3cbeda52d72', text: () => import('./assets-chunks/Catalogo_index_html.mjs').then(m => m.default)},
    'index.html': {size: 58757, hash: 'ca2eb2b8ec4a41539812a8913f75cc91114419ca6f1ecf9e6ee58ef1d6dee382', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'Servicio/BiblioMovil/index.html': {size: 55907, hash: '5c351569bd7851713b60c5ca7002f007bfb5d44c69cb0aeea35350c62238ecc7', text: () => import('./assets-chunks/Servicio_BiblioMovil_index_html.mjs').then(m => m.default)},
    'Servicio/SordoCiegos/index.html': {size: 55907, hash: '54dd46a97d7590b5fc2d853232050dd81481dcb3727026267fbbea5052e223e4', text: () => import('./assets-chunks/Servicio_SordoCiegos_index_html.mjs').then(m => m.default)},
    'Servicio/AulaVirtual/index.html': {size: 55892, hash: '20ead6096516bf38c7b1951bae8d6477ce1a0e02c8a4052ba8f52f9c34d15575', text: () => import('./assets-chunks/Servicio_AulaVirtual_index_html.mjs').then(m => m.default)},
    'Servicio/Conferencias/index.html': {size: 55905, hash: '28de04932fb29e0f3b48ef2d5122f8aa1a91d025694973a3734c790d94c1fe14', text: () => import('./assets-chunks/Servicio_Conferencias_index_html.mjs').then(m => m.default)},
    'Redes/index.html': {size: 65445, hash: 'f58e1e0c5c4bc9e422a2ba7c7d173b0c728fa6cd49b0ad69a3aa1e92fc8ddb62', text: () => import('./assets-chunks/Redes_index_html.mjs').then(m => m.default)},
    'QuienesSomos/index.html': {size: 59734, hash: '8bb4b9e3681f4afc6c5eb75b58b9557ed8f0ab00d85d9dff3e09a47d1f45767d', text: () => import('./assets-chunks/QuienesSomos_index_html.mjs').then(m => m.default)},
    'QuienesSomos/Contacto/index.html': {size: 57514, hash: '14ea5e219f58ae838552514c02adaf6414ab32416f74bea930bdbfac18441751', text: () => import('./assets-chunks/QuienesSomos_Contacto_index_html.mjs').then(m => m.default)},
    'Servicio/index.html': {size: 70546, hash: '5401549cc24dd633af8a5370323885ae72174784a6652587ec055df8e700b17f', text: () => import('./assets-chunks/Servicio_index_html.mjs').then(m => m.default)},
    'Servicio/HakunaMatata/index.html': {size: 56610, hash: 'c212ef59aafe8b68c556036675e10ac291854283857c16e6e645bcc6e2fd5176', text: () => import('./assets-chunks/Servicio_HakunaMatata_index_html.mjs').then(m => m.default)},
    'QuienesSomos/Informacion/index.html': {size: 58835, hash: 'faa1fd3badebbd6ceb3061e88af51a5a2e660cc2dee94ad0eec7a6b5b6541d2d', text: () => import('./assets-chunks/QuienesSomos_Informacion_index_html.mjs').then(m => m.default)},
    'QuienesSomos/Historia/index.html': {size: 62012, hash: 'badb050bbfa1464a6d5d2b7a7d7cb041aa4d131e0f67b6f943f6dcb25cc5688f', text: () => import('./assets-chunks/QuienesSomos_Historia_index_html.mjs').then(m => m.default)},
    'QuienesSomos/RedesSociales/index.html': {size: 65445, hash: 'f58e1e0c5c4bc9e422a2ba7c7d173b0c728fa6cd49b0ad69a3aa1e92fc8ddb62', text: () => import('./assets-chunks/QuienesSomos_RedesSociales_index_html.mjs').then(m => m.default)},
    'styles-QFJB7T2E.css': {size: 6980, hash: '5oKM69/ei9k', text: () => import('./assets-chunks/styles-QFJB7T2E_css.mjs').then(m => m.default)}
  },
};
