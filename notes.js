const fs = require('fs');
const chalk = require('chalk');
const getNote = (title) => {
    const notes = loadNotes();
    const notepresent = notes.find((note) => note.title === title);
    if(notepresent){
        console.log(chalk.red('Note not found'));
    } else {
        console.log('Title : '+chalk.blue(note[0].title));
        console.log('Body : '+chalk.green(note[0].body));
    }
}
const addNote = (title, body) => {
    const notes = loadNotes();
    // const duplicate = notes.filter((note) => note.title === title);
    const duplicate = notes.find((note) => note.title === title);
    if(!duplicate){
        notes.push({
            title : title,
            body : body
        });
        savenotes(notes);
        console.log(chalk.green('New note added'));
    } else {
        console.log(chalk.red('Title already present'));
    }
}
const loadNotes = () => {
    try{
    const notesJSON = fs.readFileSync('notes.json').toString();
    return JSON.parse(notesJSON);
    } catch(error){
        return [];
    }
}
const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => note.title !== title);
        
    if(newNotes.length === (notes.length - 1)){
        savenotes(newNotes);
        console.log('Note titled \''+chalk.blue(title)+'\' deleted');
    } else {
        console.log(chalk.red('Note does not exist'));
    }
}
const savenotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}
const listNotes = () => {
    const notes = loadNotes();
    // for(let i=0;i<notes.length;i++){
    //     console.log(chalk.blue(notes[i].title) + " : " + chalk.green(notes[i].body) );
    // }
    notes.forEach((note) => {
        console.log(chalk.blue(note.title) + " : " + chalk.green(note.body) );
    });
}
module.exports = {
    getNote : getNote,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes
}
