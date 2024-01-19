

/**
 * @param {Array<String>} deck un arreglo de strings
 * @returns {String} Retorna la última carta del deck
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

