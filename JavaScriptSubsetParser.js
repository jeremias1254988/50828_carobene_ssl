// Generated from JavaScriptSubset.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JavaScriptSubsetListener from './JavaScriptSubsetListener.js';
const serializedATN = [4,1,18,91,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,1,1,1,
1,1,3,1,28,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,37,8,2,10,2,12,2,40,9,2,1,
2,1,2,1,3,1,3,1,3,1,3,5,3,48,8,3,10,3,12,3,51,9,3,1,4,1,4,1,4,5,4,56,8,4,
10,4,12,4,59,9,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,
1,7,1,7,5,7,77,8,7,10,7,12,7,80,9,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,89,8,
8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,0,92,0,21,1,0,0,0,2,27,1,0,0,0,4,29,
1,0,0,0,6,43,1,0,0,0,8,52,1,0,0,0,10,60,1,0,0,0,12,65,1,0,0,0,14,73,1,0,
0,0,16,88,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,
0,21,22,1,0,0,0,22,1,1,0,0,0,23,21,1,0,0,0,24,28,3,4,2,0,25,28,3,10,5,0,
26,28,3,12,6,0,27,24,1,0,0,0,27,25,1,0,0,0,27,26,1,0,0,0,28,3,1,0,0,0,29,
30,5,1,0,0,30,31,5,2,0,0,31,32,3,14,7,0,32,33,5,3,0,0,33,38,5,4,0,0,34,37,
3,6,3,0,35,37,3,8,4,0,36,34,1,0,0,0,36,35,1,0,0,0,37,40,1,0,0,0,38,36,1,
0,0,0,38,39,1,0,0,0,39,41,1,0,0,0,40,38,1,0,0,0,41,42,5,5,0,0,42,5,1,0,0,
0,43,44,5,6,0,0,44,45,3,14,7,0,45,49,5,7,0,0,46,48,3,2,1,0,47,46,1,0,0,0,
48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,7,1,0,0,0,51,49,1,0,0,0,52,
53,5,8,0,0,53,57,5,7,0,0,54,56,3,2,1,0,55,54,1,0,0,0,56,59,1,0,0,0,57,55,
1,0,0,0,57,58,1,0,0,0,58,9,1,0,0,0,59,57,1,0,0,0,60,61,5,16,0,0,61,62,5,
9,0,0,62,63,3,14,7,0,63,64,5,10,0,0,64,11,1,0,0,0,65,66,5,11,0,0,66,67,5,
12,0,0,67,68,5,13,0,0,68,69,5,2,0,0,69,70,3,14,7,0,70,71,5,3,0,0,71,72,5,
10,0,0,72,13,1,0,0,0,73,78,3,16,8,0,74,75,5,14,0,0,75,77,3,16,8,0,76,74,
1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,15,1,0,0,0,80,78,1,
0,0,0,81,89,5,16,0,0,82,89,5,17,0,0,83,84,5,2,0,0,84,85,3,14,7,0,85,86,5,
3,0,0,86,89,1,0,0,0,87,89,5,15,0,0,88,81,1,0,0,0,88,82,1,0,0,0,88,83,1,0,
0,0,88,87,1,0,0,0,89,17,1,0,0,0,8,21,27,36,38,49,57,78,88];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JavaScriptSubsetParser extends antlr4.Parser {

    static grammarFileName = "JavaScriptSubset.g4";
    static literalNames = [ null, "'switch'", "'('", "')'", "'{'", "'}'", 
                            "'case'", "':'", "'default'", "'='", "';'", 
                            "'console'", "'.'", "'log'", "'+'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "STRING", 
                             "IDENTIFIER", "NUMBER", "WS" ];
    static ruleNames = [ "program", "statement", "switchStatement", "caseClause", 
                         "defaultClause", "assignmentStatement", "consoleStatement", 
                         "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JavaScriptSubsetParser.ruleNames;
        this.literalNames = JavaScriptSubsetParser.literalNames;
        this.symbolicNames = JavaScriptSubsetParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JavaScriptSubsetParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67586) !== 0)) {
	            this.state = 18;
	            this.statement();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JavaScriptSubsetParser.RULE_statement);
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.switchStatement();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this.assignmentStatement();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 26;
	            this.consoleStatement();
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



	switchStatement() {
	    let localctx = new SwitchStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JavaScriptSubsetParser.RULE_switchStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(JavaScriptSubsetParser.T__0);
	        this.state = 30;
	        this.match(JavaScriptSubsetParser.T__1);
	        this.state = 31;
	        this.expression();
	        this.state = 32;
	        this.match(JavaScriptSubsetParser.T__2);
	        this.state = 33;
	        this.match(JavaScriptSubsetParser.T__3);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===8) {
	            this.state = 36;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 6:
	                this.state = 34;
	                this.caseClause();
	                break;
	            case 8:
	                this.state = 35;
	                this.defaultClause();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 41;
	        this.match(JavaScriptSubsetParser.T__4);
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



	caseClause() {
	    let localctx = new CaseClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JavaScriptSubsetParser.RULE_caseClause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(JavaScriptSubsetParser.T__5);
	        this.state = 44;
	        this.expression();
	        this.state = 45;
	        this.match(JavaScriptSubsetParser.T__6);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67586) !== 0)) {
	            this.state = 46;
	            this.statement();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	defaultClause() {
	    let localctx = new DefaultClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JavaScriptSubsetParser.RULE_defaultClause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(JavaScriptSubsetParser.T__7);
	        this.state = 53;
	        this.match(JavaScriptSubsetParser.T__6);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 67586) !== 0)) {
	            this.state = 54;
	            this.statement();
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JavaScriptSubsetParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(JavaScriptSubsetParser.IDENTIFIER);
	        this.state = 61;
	        this.match(JavaScriptSubsetParser.T__8);
	        this.state = 62;
	        this.expression();
	        this.state = 63;
	        this.match(JavaScriptSubsetParser.T__9);
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



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JavaScriptSubsetParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(JavaScriptSubsetParser.T__10);
	        this.state = 66;
	        this.match(JavaScriptSubsetParser.T__11);
	        this.state = 67;
	        this.match(JavaScriptSubsetParser.T__12);
	        this.state = 68;
	        this.match(JavaScriptSubsetParser.T__1);
	        this.state = 69;
	        this.expression();
	        this.state = 70;
	        this.match(JavaScriptSubsetParser.T__2);
	        this.state = 71;
	        this.match(JavaScriptSubsetParser.T__9);
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JavaScriptSubsetParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.term();
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 74;
	            this.match(JavaScriptSubsetParser.T__13);
	            this.state = 75;
	            this.term();
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JavaScriptSubsetParser.RULE_term);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 81;
	            this.match(JavaScriptSubsetParser.IDENTIFIER);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 82;
	            this.match(JavaScriptSubsetParser.NUMBER);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 83;
	            this.match(JavaScriptSubsetParser.T__1);
	            this.state = 84;
	            this.expression();
	            this.state = 85;
	            this.match(JavaScriptSubsetParser.T__2);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 87;
	            this.match(JavaScriptSubsetParser.STRING);
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


}

JavaScriptSubsetParser.EOF = antlr4.Token.EOF;
JavaScriptSubsetParser.T__0 = 1;
JavaScriptSubsetParser.T__1 = 2;
JavaScriptSubsetParser.T__2 = 3;
JavaScriptSubsetParser.T__3 = 4;
JavaScriptSubsetParser.T__4 = 5;
JavaScriptSubsetParser.T__5 = 6;
JavaScriptSubsetParser.T__6 = 7;
JavaScriptSubsetParser.T__7 = 8;
JavaScriptSubsetParser.T__8 = 9;
JavaScriptSubsetParser.T__9 = 10;
JavaScriptSubsetParser.T__10 = 11;
JavaScriptSubsetParser.T__11 = 12;
JavaScriptSubsetParser.T__12 = 13;
JavaScriptSubsetParser.T__13 = 14;
JavaScriptSubsetParser.STRING = 15;
JavaScriptSubsetParser.IDENTIFIER = 16;
JavaScriptSubsetParser.NUMBER = 17;
JavaScriptSubsetParser.WS = 18;

JavaScriptSubsetParser.RULE_program = 0;
JavaScriptSubsetParser.RULE_statement = 1;
JavaScriptSubsetParser.RULE_switchStatement = 2;
JavaScriptSubsetParser.RULE_caseClause = 3;
JavaScriptSubsetParser.RULE_defaultClause = 4;
JavaScriptSubsetParser.RULE_assignmentStatement = 5;
JavaScriptSubsetParser.RULE_consoleStatement = 6;
JavaScriptSubsetParser.RULE_expression = 7;
JavaScriptSubsetParser.RULE_term = 8;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptSubsetParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptSubsetParser.RULE_statement;
    }

	switchStatement() {
	    return this.getTypedRuleContext(SwitchStatementContext,0);
	};

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.exitStatement(this);
		}
	}


}



class SwitchStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptSubsetParser.RULE_switchStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	caseClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseClauseContext);
	    } else {
	        return this.getTypedRuleContext(CaseClauseContext,i);
	    }
	};

	defaultClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefaultClauseContext);
	    } else {
	        return this.getTypedRuleContext(DefaultClauseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.enterSwitchStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.exitSwitchStatement(this);
		}
	}


}



class CaseClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptSubsetParser.RULE_caseClause;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.enterCaseClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.exitCaseClause(this);
		}
	}


}



class DefaultClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptSubsetParser.RULE_defaultClause;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.enterDefaultClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.exitDefaultClause(this);
		}
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptSubsetParser.RULE_assignmentStatement;
    }

	IDENTIFIER() {
	    return this.getToken(JavaScriptSubsetParser.IDENTIFIER, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptSubsetParser.RULE_consoleStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.exitConsoleStatement(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptSubsetParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.exitExpression(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptSubsetParser.RULE_term;
    }

	IDENTIFIER() {
	    return this.getToken(JavaScriptSubsetParser.IDENTIFIER, 0);
	};

	NUMBER() {
	    return this.getToken(JavaScriptSubsetParser.NUMBER, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	STRING() {
	    return this.getToken(JavaScriptSubsetParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptSubsetListener ) {
	        listener.exitTerm(this);
		}
	}


}




JavaScriptSubsetParser.ProgramContext = ProgramContext; 
JavaScriptSubsetParser.StatementContext = StatementContext; 
JavaScriptSubsetParser.SwitchStatementContext = SwitchStatementContext; 
JavaScriptSubsetParser.CaseClauseContext = CaseClauseContext; 
JavaScriptSubsetParser.DefaultClauseContext = DefaultClauseContext; 
JavaScriptSubsetParser.AssignmentStatementContext = AssignmentStatementContext; 
JavaScriptSubsetParser.ConsoleStatementContext = ConsoleStatementContext; 
JavaScriptSubsetParser.ExpressionContext = ExpressionContext; 
JavaScriptSubsetParser.TermContext = TermContext; 
