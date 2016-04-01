#!/usr/bin/env node
var Handlebars = require('handlebars');
var fs = require('fs');
var program = require('commander');

program.usage('-d <data-file> -t <template-file> [-o <output-file>]')
  .option('-d,--data <data-file>', 'The JSON file with the data')
  .option('-t,--template <template-file>', 'The Handlebars file with the template')
  .option('-o,--output <output-file>', 'An output file; will write to stdout if omitted')
  .parse(process.argv);

if (!program.data || !program.template) {
  program.help();
}

function loadTemplate(filename) {
  return Handlebars.compile(fs.readFileSync(filename).toString());
}

function loadData(filename) {
  return JSON.parse(fs.readFileSync(filename).toString());
}

function compileHtml(template, data) {
  return template(data);
}

var template = loadTemplate(program.template);
var data = loadData(program.data);
var output = program.output ? fs.createWriteStream(program.output) : process.stdout;
output.write(compileHtml(template, data));
