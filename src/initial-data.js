const initialData = {
    characters: {
        'character-1' : {id : 'character-1', name: 'Harrow', init:'16'},
        'character-2' : {id : 'character-2', name: 'Riley', init:'22'},
        'character-3' : {id : 'character-3', name: 'Ash', init:'19'},
        'character-4' : {id : 'character-4', name: 'Herris', init:'12'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Init List',
            characterIds: ['character-1','character-2','character-3','character-4'],
        }
    },
    //in case i ned it later
    columnOrder: ['column-1'],
};

export default initialData;