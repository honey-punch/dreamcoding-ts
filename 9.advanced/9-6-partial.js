"use strict";
{
    function updateToDo(todo, fieldsToUpdate) {
        return Object.assign(Object.assign({}, todo), fieldsToUpdate);
    }
    const todo = {
        title: 'learn TypeScript',
        description: 'study hard',
        label: 'study',
        priority: 'high',
    };
    const undated = updateToDo(todo, { priority: 'low' });
    console.log(undated);
}
