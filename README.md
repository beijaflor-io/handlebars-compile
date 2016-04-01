# handlebars-compile
Outputs HTML from a handlebars template and some JSON data. Just a tiny script
to use handlebars in UNIX fashion.

## Install
```
npm install -g handlebars-compile
```

## Usage

```

  Usage: handlebars-compile -d <data-file> -t <template-file> [-o <output-file>]

  Options:

    -h, --help                     output usage information
    -d,--data <data-file>          The JSON file with the data
    -t,--template <template-file>  The Handlebars file with the template
    -o,--output <output-file>      An output file; will write to stdout if omitted

```

## Example
```
$ handlebars-compile -d data-file.json -t template-file.hbs -o output-file.html
```

## License
MIT
