const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');
const notes = require('./notes.js');
const yargs = require('yargs');
// const getNotes = require('./notes.js');
// const validateemail = require('./notes.js');

// fs.writeFileSync('notes.txt', 'My name is Gurmeet Singh.');
// fs.appendFileSync('notes.txt', 'I live in Jamshedpur, India.');

// console.log(getNotes(' I love Node.js.').toString());

// console.log(validateemail('gsinghs1998@gmail.com'));

// console.log(process.argv);

// console.log(chalk.blue('Gurmeet') + chalk.red.underline.bold('Singh'));
// console.log(chalk.green('Success'));

yargs.version('1.0.1');
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Title of Note',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Body of Note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});
yargs.command({
    command : 'remove',
    describe : 'Remove an existing note',
    builder : {
        title : {
            describe : 'Title of Note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});
yargs.command({
    command : 'read',
    describe : 'Read an existing note',
    builder : {
        title : {
            describe : 'Title of Note',
            demandOption : true,
            type : 'string'
        }   
    },
    handler(argv){
        notes.getNote(argv.title);
        
    }
});
yargs.command({
    command : 'list',
    describe : 'List all notes',
    handler(){
        notes.listNotes();
    }
});
yargs.parse();