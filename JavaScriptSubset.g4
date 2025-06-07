grammar JavaScriptSubset;

program: statement*;

statement
    : switchStatement
    | assignmentStatement
    | consoleStatement
    ;

switchStatement
    : 'switch' '(' expression ')' '{' (caseClause | defaultClause)* '}'
    ;

caseClause
    : 'case' expression ':' statement*
    ;

defaultClause
    : 'default' ':' statement*
    ;

assignmentStatement
    : IDENTIFIER '=' expression ';'
    ;

consoleStatement
    : 'console' '.' 'log' '(' expression ')' ';'
    ;

expression
    : term ('+' term)*
    ;

term
    : IDENTIFIER
    | NUMBER
    | '(' expression ')'
    | STRING
    ;

STRING: '"' ~["\r\n]* '"';

IDENTIFIER: [a-zA-Z_] [a-zA-Z0-9_]*;

NUMBER: [0-9]+;

WS: [ \t\r\n]+ -> skip;
