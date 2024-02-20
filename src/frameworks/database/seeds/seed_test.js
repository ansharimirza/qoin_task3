/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Test01').del()
  await knex('Test01').insert([
    {id: 18, nama: 'dvd', status:1},
    {id: 19, nama: 'sv',status:1},
    {id: 20, nama: 'srf',status:1},
    {id: 21, nama: 'srf',status:1},
    {id: 22, nama: 'srf',status:1},
    {id: 23, nama: 'srf',status:1},
    {id: 24, nama: 'srf',status:1},
    {id: 25, nama: 'srf',status:1},
    {id: 26, nama: 'srf',status:1},
    {id: 27, nama: 'srf',status:1},
    {id: 28, nama: 'srf',status:1},
    {id: 29, nama: 'srf',status:1},
    {id: 30, nama: 'srf',status:1},
    {id: 31, nama: 'srf',status:1},
    {id: 32, nama: 'srf',status:1},
    {id: 33, nama: 'srf',status:1},
  ]);
};
