export function NumberFormat(value:bigint){
    return  new Intl.NumberFormat('fr-FR', { style:'currency', currency : 'Eur'}).format(Number(value) / 100)
}