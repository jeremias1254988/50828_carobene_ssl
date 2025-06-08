import * as antlr4 from 'antlr4';
import fs from 'fs';
import readline from 'readline';
// Importa los módulos completos
import migramaticaLexerModule from './generated/migramaticaLexer.js';
import migramaticaParserModule from './generated/migramaticaParser.js';
import CustomVisitor from './CustomVisitor.js';

// Accede a las clases directamente desde los módulos
const migramaticaLexer = migramaticaLexerModule.migramaticaLexer;
const migramaticaParser = migramaticaParserModule.migramaticaParser;

// Resto del código...
const leerCadena = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => {
        rl.question('Ingrese el código a analizar: ', answer => {
            rl.close();
            resolve(answer);
        });
    });
};

const main = async () => {
    let input;
    try {
        input = fs.readFileSync('input.txt', 'utf8');
        console.log("Procesando ejemplos desde input.txt...\n");
    } catch (err) {
        input = await leerCadena();
    }

    const codeBlocks = input.split('%%!%%');

    codeBlocks.forEach((block, index) => {
        if (block.trim().length === 0) return;

        console.log(`\n================== Analizando Bloque #${index + 1} ==================`);
        console.log(block.trim());
        console.log("-----------------------------------------------------------");

        const chars = new antlr4.InputStream(block);
        const lexer = new migramaticaLexer(chars); // Usa la clase directamente
        const tokens = new antlr4.CommonTokenStream(lexer);
        
        const parser = new migramaticaParser(tokens);
        parser.buildParseTrees = true;

        console.log("Tabla de Lexemas-Tokens:");
        tokens.fill();
        const tokenList = tokens.getTokens(0, tokens.size);
        tokenList.forEach(token => {
            if (token.type !== antlr4.Token.EOF) {
                const tokenName = parser.symbolicNames[token.type];
                console.log(`  - Lexema: '${token.text}', Token: ${tokenName}`);
            }
        });
        console.log("-----------------------------------------------------------");

        const tree = parser.programa();

        if (parser.getNumberOfSyntaxErrors() > 0) {
            console.error("Resultado: Error sintactico, El bloque es Erroneo.\n");
        } else {
            console.log("Resultado: El bloque es sintácticamente Valido.");

            const arbolTexto = tree.toStringTree(parser.ruleNames);
            console.log("\nÁrbol de Análisis Sintáctico (Texto):");
            console.log(arbolTexto);

            console.log("\nTraduciendo a JavaScript...");
            const visitor = new CustomVisitor();
            const jsCode = visitor.visit(tree);

            console.log("\n--- Código JavaScript Generado ---");
            console.log(jsCode);
            console.log("---------------------------------");
            
            console.log("\n--- Ejecutando Código... ---");
            try {
                const mi_variable = 1;
                const otra_variable = 10;
                eval(jsCode);
            } catch (e) {
                console.error("Error al ejecutar el código traducido:", e);
            }
            console.log("----------------------------\n");
        }
    });
};

main();