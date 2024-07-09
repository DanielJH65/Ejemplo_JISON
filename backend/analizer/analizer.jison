//Importaciones
%{

    const Type = require('./symbol/Type');
    const Native = require('./expressions/Native');
    const Print = require('./instructions/Print');

%}

//Lexico

%lex
%options case-insensitive

%%

"print"                             return 'RPRINT';

";"                                 return 'PYC';
"("                                 return 'PARA';
")"                                 return 'PARC';

[0-9]+"."[0-9]+                     return 'DECIMAL';
[0-9]+                              return 'ENTERO';

[\ \r\t\t]                          {};
[\ \n]                              {};

<<EOF>>                             return 'EOF';

//Sintactico

%{

%}

/lex

%start INICIO

%%

INICIO : INSTRUCCIONES EOF                              { return $1; }
;

INSTRUCCIONES : INSTRUCCIONES INSTRUCCION               { $1.push($2); $$=$1; }
            | INSTRUCCION                               { $$ = [$1]; }
;

INSTRUCCION : PRINT                                     { $$ = $1; }
;

PRINT : RPRINT PARA EXPRESION PARC PYC                  { $$ = new Print.Print($3, @1.first_line, @1.first_colum); }
;

EXPRESION : ENTERO                                      { $$ = new Native.Native(new Type.Type(Type.dataType.INTEGER), $1, @1.first_line, @1.first_colum); }
            | DECIMAL                                   { $$ = new Native.Native(new Type.Type(Type.dataType.DOUBLE), $1, @1.first_line, @1.first_colum); }
;