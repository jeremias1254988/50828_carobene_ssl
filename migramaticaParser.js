// Generated from migramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import migramaticaVisitor from './migramaticaVisitor.js';

const serializedATN = [4,1,15,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,1,4,1,24,8,1,11,1,12,1,
25,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,4,4,39,8,4,11,4,12,4,40,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,50,8,5,1,6,4,6,53,8,6,11,6,12,6,54,1,7,1,7,
3,7,59,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,
14,16,18,0,0,64,0,20,1,0,0,0,2,23,1,0,0,0,4,27,1,0,0,0,6,29,1,0,0,0,8,38,
1,0,0,0,10,49,1,0,0,0,12,52,1,0,0,0,14,58,1,0,0,0,16,60,1,0,0,0,18,66,1,
0,0,0,20,21,3,2,1,0,21,1,1,0,0,0,22,24,3,4,2,0,23,22,1,0,0,0,24,25,1,0,0,
0,25,23,1,0,0,0,25,26,1,0,0,0,26,3,1,0,0,0,27,28,3,6,3,0,28,5,1,0,0,0,29,
30,5,1,0,0,30,31,5,2,0,0,31,32,5,13,0,0,32,33,5,3,0,0,33,34,5,4,0,0,34,35,
3,8,4,0,35,36,5,5,0,0,36,7,1,0,0,0,37,39,3,10,5,0,38,37,1,0,0,0,39,40,1,
0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,9,1,0,0,0,42,43,5,6,0,0,43,44,5,14,
0,0,44,45,5,7,0,0,45,50,3,12,6,0,46,47,5,8,0,0,47,48,5,7,0,0,48,50,3,12,
6,0,49,42,1,0,0,0,49,46,1,0,0,0,50,11,1,0,0,0,51,53,3,14,7,0,52,51,1,0,0,
0,53,54,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,13,1,0,0,0,56,59,3,16,8,0,
57,59,3,18,9,0,58,56,1,0,0,0,58,57,1,0,0,0,59,15,1,0,0,0,60,61,5,9,0,0,61,
62,5,2,0,0,62,63,5,12,0,0,63,64,5,3,0,0,64,65,5,10,0,0,65,17,1,0,0,0,66,
67,5,11,0,0,67,68,5,10,0,0,68,19,1,0,0,0,5,25,40,49,54,58];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class migramaticaParser extends antlr4.Parser {

    static grammarFileName = "migramatica.g4";
    static literalNames = [ null, "'switch'", "'('", "')'", "'{'", "'}'", 
                            "'case'", "':'", "'default'", "'printf'", "';'", 
                            "'break'" ];
    static symbolicNames = [ null, "SWITCH", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "CASE", "COLON", "DEFAULT", "PRINTF", 
                             "SEMICOLON", "BREAK", "CADENA", "IDENTIFICADOR", 
                             "NUMERO", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "seleccion", 
                         "cases", "case", "sentencias", "sentencia", "salida", 
                         "terminar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = migramaticaParser.ruleNames;
        this.literalNames = migramaticaParser.literalNames;
        this.symbolicNames = migramaticaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, migramaticaParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.instrucciones();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, migramaticaParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 22;
	            this.instruccion();
	            this.state = 25; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, migramaticaParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.seleccion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seleccion() {
	    let localctx = new SeleccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, migramaticaParser.RULE_seleccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(migramaticaParser.SWITCH);
	        this.state = 30;
	        this.match(migramaticaParser.LPAREN);
	        this.state = 31;
	        this.match(migramaticaParser.IDENTIFICADOR);
	        this.state = 32;
	        this.match(migramaticaParser.RPAREN);
	        this.state = 33;
	        this.match(migramaticaParser.LBRACE);
	        this.state = 34;
	        this.cases();
	        this.state = 35;
	        this.match(migramaticaParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cases() {
	    let localctx = new CasesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, migramaticaParser.RULE_cases);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 37;
	            this.case_();
	            this.state = 40; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===6 || _la===8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	case_() {
	    let localctx = new CaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, migramaticaParser.RULE_case);
	    try {
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.match(migramaticaParser.CASE);
	            this.state = 43;
	            this.match(migramaticaParser.NUMERO);
	            this.state = 44;
	            this.match(migramaticaParser.COLON);
	            this.state = 45;
	            this.sentencias();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.match(migramaticaParser.DEFAULT);
	            this.state = 47;
	            this.match(migramaticaParser.COLON);
	            this.state = 48;
	            this.sentencias();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencias() {
	    let localctx = new SentenciasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, migramaticaParser.RULE_sentencias);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 51;
	            this.sentencia();
	            this.state = 54; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===9 || _la===11);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, migramaticaParser.RULE_sentencia);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.salida();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, migramaticaParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(migramaticaParser.PRINTF);
	        this.state = 61;
	        this.match(migramaticaParser.LPAREN);
	        this.state = 62;
	        this.match(migramaticaParser.CADENA);
	        this.state = 63;
	        this.match(migramaticaParser.RPAREN);
	        this.state = 64;
	        this.match(migramaticaParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, migramaticaParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(migramaticaParser.BREAK);
	        this.state = 67;
	        this.match(migramaticaParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

migramaticaParser.EOF = antlr4.Token.EOF;
migramaticaParser.SWITCH = 1;
migramaticaParser.LPAREN = 2;
migramaticaParser.RPAREN = 3;
migramaticaParser.LBRACE = 4;
migramaticaParser.RBRACE = 5;
migramaticaParser.CASE = 6;
migramaticaParser.COLON = 7;
migramaticaParser.DEFAULT = 8;
migramaticaParser.PRINTF = 9;
migramaticaParser.SEMICOLON = 10;
migramaticaParser.BREAK = 11;
migramaticaParser.CADENA = 12;
migramaticaParser.IDENTIFICADOR = 13;
migramaticaParser.NUMERO = 14;
migramaticaParser.WS = 15;

migramaticaParser.RULE_programa = 0;
migramaticaParser.RULE_instrucciones = 1;
migramaticaParser.RULE_instruccion = 2;
migramaticaParser.RULE_seleccion = 3;
migramaticaParser.RULE_cases = 4;
migramaticaParser.RULE_case = 5;
migramaticaParser.RULE_sentencias = 6;
migramaticaParser.RULE_sentencia = 7;
migramaticaParser.RULE_salida = 8;
migramaticaParser.RULE_terminar = 9;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = migramaticaParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof migramaticaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = migramaticaParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof migramaticaVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = migramaticaParser.RULE_instruccion;
    }

	seleccion() {
	    return this.getTypedRuleContext(SeleccionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof migramaticaVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeleccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = migramaticaParser.RULE_seleccion;
    }

	SWITCH() {
	    return this.getToken(migramaticaParser.SWITCH, 0);
	};

	LPAREN() {
	    return this.getToken(migramaticaParser.LPAREN, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(migramaticaParser.IDENTIFICADOR, 0);
	};

	RPAREN() {
	    return this.getToken(migramaticaParser.RPAREN, 0);
	};

	LBRACE() {
	    return this.getToken(migramaticaParser.LBRACE, 0);
	};

	cases() {
	    return this.getTypedRuleContext(CasesContext,0);
	};

	RBRACE() {
	    return this.getToken(migramaticaParser.RBRACE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof migramaticaVisitor ) {
	        return visitor.visitSeleccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CasesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = migramaticaParser.RULE_cases;
    }

	case_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseContext);
	    } else {
	        return this.getTypedRuleContext(CaseContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof migramaticaVisitor ) {
	        return visitor.visitCases(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = migramaticaParser.RULE_case;
    }

	CASE() {
	    return this.getToken(migramaticaParser.CASE, 0);
	};

	NUMERO() {
	    return this.getToken(migramaticaParser.NUMERO, 0);
	};

	COLON() {
	    return this.getToken(migramaticaParser.COLON, 0);
	};

	sentencias() {
	    return this.getTypedRuleContext(SentenciasContext,0);
	};

	DEFAULT() {
	    return this.getToken(migramaticaParser.DEFAULT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof migramaticaVisitor ) {
	        return visitor.visitCase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = migramaticaParser.RULE_sentencias;
    }

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof migramaticaVisitor ) {
	        return visitor.visitSentencias(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = migramaticaParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof migramaticaVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = migramaticaParser.RULE_salida;
    }

	PRINTF() {
	    return this.getToken(migramaticaParser.PRINTF, 0);
	};

	LPAREN() {
	    return this.getToken(migramaticaParser.LPAREN, 0);
	};

	CADENA() {
	    return this.getToken(migramaticaParser.CADENA, 0);
	};

	RPAREN() {
	    return this.getToken(migramaticaParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(migramaticaParser.SEMICOLON, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof migramaticaVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = migramaticaParser.RULE_terminar;
    }

	BREAK() {
	    return this.getToken(migramaticaParser.BREAK, 0);
	};

	SEMICOLON() {
	    return this.getToken(migramaticaParser.SEMICOLON, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof migramaticaVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




migramaticaParser.ProgramaContext = ProgramaContext; 
migramaticaParser.InstruccionesContext = InstruccionesContext; 
migramaticaParser.InstruccionContext = InstruccionContext; 
migramaticaParser.SeleccionContext = SeleccionContext; 
migramaticaParser.CasesContext = CasesContext; 
migramaticaParser.CaseContext = CaseContext; 
migramaticaParser.SentenciasContext = SentenciasContext; 
migramaticaParser.SentenciaContext = SentenciaContext; 
migramaticaParser.SalidaContext = SalidaContext; 
migramaticaParser.TerminarContext = TerminarContext; 
