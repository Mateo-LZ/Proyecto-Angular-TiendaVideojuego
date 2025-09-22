import { Injectable } from '@angular/core';

export interface Juego {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
}

@Injectable({ providedIn: 'root' })
export class JuegoService {
  private juegos: Juego[] = [
    // 🎮 PlayStation 5
  { id: 1, nombre: 'Spider-Man 2', precio: 249000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758199995/spiderman_2_mbof9v.avif', categoria: 'PlayStation 5' },
  { id: 2, nombre: 'God of War Ragnarök', precio: 229000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758200685/god_of_war_ragnarok_2_polpzk.jpg', categoria: 'PlayStation 5' },
  { id: 3, nombre: 'Final Fantasy XVI', precio: 239000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758201807/final_yeq8up.jpg', categoria: 'PlayStation 5' },
  { id: 4, nombre: 'Horizon Forbidden West', precio: 219000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758202113/horizon3_rihkik.jpg', categoria: 'PlayStation 5' },
  { id: 5, nombre: 'Demon’s Souls Remake', precio: 209000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758199996/demo_souls_ziigxs.webp', categoria: 'PlayStation 5' },

  // 🎮 Nintendo Switch 2
  { id: 6, nombre: 'The Legend of Zelda: TOTK', precio: 259000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758202491/zelda_iv951p.jpg', categoria: 'Nintendo Switch 2' },
  { id: 7, nombre: 'Mario Kart 8 Deluxe', precio: 179000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758202491/mario_knjh8o.jpg', categoria: 'Nintendo Switch 2' },
  { id: 8, nombre: 'Super Smash Bros. Ultimate', precio: 199000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758202492/smash_bros_fw9uzq.jpg', categoria: 'Nintendo Switch 2' },
  { id: 9, nombre: 'Metroid Prime Remastered', precio: 219000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758202492/metroid_2_srv5cz.jpg', categoria: 'Nintendo Switch 2' },
  { id: 10, nombre: 'Splatoon 3', precio: 199000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758202494/splatoon_eoccty.jpg', categoria: 'Nintendo Switch 2' },

  // 🎮 Xbox Series X/S
  { id: 11, nombre: 'Halo Infinite', precio: 199000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758203006/halo_pmi1bm.jpg', categoria: 'Xbox Series' },
  { id: 12, nombre: 'Forza Horizon 5', precio: 229000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758203009/forza2_es0bjx.jpg', categoria: 'Xbox Series' },
  { id: 13, nombre: 'Gears 5', precio: 179000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758203005/gears_o4xcih.jpg', categoria: 'Xbox Series' },
  { id: 14, nombre: 'Starfield', precio: 259000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758203006/starfield_khtq3f.jpg', categoria: 'Xbox Series' },
  { id: 15, nombre: 'Sea of Thieves', precio: 169000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758203006/piratas22_gd5hr7.jpg', categoria: 'Xbox Series' },

  // 🎮 PlayStation 2 y 3 (Retro)
  { id: 16, nombre: 'Shadow of the Colossus', precio: 99000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758203922/shadow_2_khfcll.jpg', categoria: 'Retro PS2/PS3' },
  { id: 17, nombre: 'Resident Evil 4', precio: 89000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758203920/resident_b7rxsn.jpg', categoria: 'Retro PS2/PS3' },
  { id: 18, nombre: 'Metal Gear Solid 3', precio: 95000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758203920/metal3_zypoze.jpg', categoria: 'Retro PS2/PS3' },
  { id: 19, nombre: 'Gran Turismo 4', precio: 85000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758203920/turismo_bhmjwc.jpg', categoria: 'Retro PS2/PS3' },
  { id: 20, nombre: 'GTA San Andreas', precio: 79000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758203920/san_andreas_ff6uwf.jpg', categoria: 'Retro PS2/PS3' },

  // 🎮 Nintendo 3DS
  { id: 21, nombre: 'Pokémon X', precio: 109000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758204414/pokemon_x_fezavn.jpg', categoria: 'Nintendo 3DS' },
  { id: 22, nombre: 'Pokémon Y', precio: 109000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758204418/pokemon_y_xi1vjd.jpg', categoria: 'Nintendo 3DS' },
  { id: 23, nombre: 'Animal Crossing: New Leaf', precio: 99000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758204417/crossing_a1pdog.jpg', categoria: 'Nintendo 3DS' },
  { id: 24, nombre: 'Fire Emblem: Awakening', precio: 105000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758204415/nintendo_j9hcgq.jpg', categoria: 'Nintendo 3DS' },
  { id: 25, nombre: 'Super Mario 3D Land', precio: 95000, imagen: 'https://res.cloudinary.com/deirol9en/image/upload/v1758204417/mario_kxfeac.webp', categoria: 'Nintendo 3DS' },
  ];

  getJuegos() {
    return this.juegos;
  }

  getJuegosPorCategoria(categoria: string) {
    return this.juegos.filter(juego => juego.categoria === categoria);
  }
}
