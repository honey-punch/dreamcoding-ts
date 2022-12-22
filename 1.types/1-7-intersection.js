"use strict";
{
    function internWork(person) {
        console.log(person.name, person.id, person.work());
    }
    internWork({
        name: 'jicheol',
        score: 1,
        id: 123,
        work: () => { },
    });
}
