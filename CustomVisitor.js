import migramaticaVisitor from './generated/migramaticaVisitor.js'; // Corrección a importación predeterminada

export default class CustomVisitor extends migramaticaVisitor {
    visitPrograma(ctx) {
        return this.visit(ctx.instrucciones());
    }

    visitInstrucciones(ctx) {
        let instructionsCode = '';
        for (const instructionNode of ctx.instruccion()) {
            instructionsCode += this.visit(instructionNode) + '\n';
        }
        return instructionsCode;
    }

    visitSeleccion(ctx) {
        const identificador = ctx.IDENTIFICADOR().getText();
        const cases = this.visit(ctx.cases());
        return `switch (${identificador}) {\n${cases}}`;
    }

    visitCases(ctx) {
        let casesCode = '';
        for (const caseNode of ctx.case_()) {
            casesCode += this.visit(caseNode);
        }
        return casesCode;
    }

    visitCase(ctx) {
        const sentencias = this.visit(ctx.sentencias());
        if (ctx.NUMERO()) {
            const numero = ctx.NUMERO().getText();
            return `  case ${numero}:\n${sentencias}`;
        } else {
            return `  default:\n${sentencias}`;
        }
    }

    visitSentencias(ctx) {
        let sentenciasCode = '';
        for (const sentenciaNode of ctx.sentencia()) {
            sentenciasCode += `    ${this.visit(sentenciaNode)}\n`;
        }
        return sentenciasCode;
    }

    visitSalida(ctx) {
        const cadena = ctx.CADENA().getText();
        return `console.log(${cadena});`;
    }

    visitTerminar(ctx) {
        return 'break;';
    }
}