// $ANTLR 3.3 Nov 30, 2010 12:50:56 .\\RLexer.g 2011-09-01 10:03:12

var RLexer = function(input, state) {
// alternate constructor @todo
// public RLexer(CharStream input)
// public RLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa6 = new RLexer.DFA6(this);
    this.dfa7 = new RLexer.DFA7(this);
    this.dfa10 = new RLexer.DFA10(this);
    this.dfa14 = new RLexer.DFA14(this);
    this.dfa44 = new RLexer.DFA44(this);
    RLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(RLexer, {
    EOF: -1,
    ABS: 4,
    AD: 5,
    ABSURDUM: 6,
    ALL: 7,
    ALTERS: 8,
    ALTERNATIVE: 9,
    AND: 10,
    ARRAY: 11,
    ASSUME: 12,
    AUX_CODE: 13,
    AUX_VAR: 14,
    AUX_VARS: 15,
    AUXILIARY: 16,
    AXIOM: 17,
    BOOLEAN: 18,
    BASECASE: 19,
    BY: 20,
    CARTPROD: 21,
    CATEGORICAL: 22,
    CASE: 23,
    CHANGING: 24,
    CLEARS: 25,
    COMMON: 26,
    CONCLUSION: 27,
    COMMUTATIVITY: 28,
    COMPLEMENT: 29,
    CONCEPT: 30,
    MODULE_CONCEPT: 31,
    CONFIRM: 32,
    CONJUNCT: 33,
    CONSTRAINT: 34,
    CONTRADICTION: 35,
    CONVENTION: 36,
    COROLLARY: 37,
    CORR: 38,
    DECREASING: 39,
    DEDUCTION: 40,
    DEFINES: 41,
    DEFINITION: 42,
    DISTRIBUTION: 43,
    DIV: 44,
    DO: 45,
    ELSE: 46,
    ELIMINATION: 47,
    END: 48,
    ENHANCED: 49,
    ENHANCEMENT: 50,
    MODULE_ENHANCEMENT: 51,
    ENSURES: 52,
    EQUALITY: 53,
    EVALUATES: 54,
    EXCLUDED: 55,
    EXEMPLAR: 56,
    EXISTENTIAL: 57,
    EXISTS: 58,
    EXIT: 59,
    FACILITY: 60,
    FAC_FINAL: 61,
    FAC_INIT: 62,
    FAMILY: 63,
    FINALIZATION: 64,
    FROM: 65,
    FOR: 66,
    FORGET: 67,
    GENERALIZATION: 68,
    IF: 69,
    IFF: 70,
    IMPLICIT: 71,
    IMPLIES: 72,
    INDUCTIVE: 73,
    INDUCTIVECASE: 74,
    INITIALIZATION: 75,
    INSTANTIATION: 76,
    INTERSECT: 77,
    INTRODUCES: 78,
    IS: 79,
    IN: 80,
    NOT_IN: 81,
    NOT_PROP_SUBSET: 82,
    NOT_SUBSET: 83,
    NOT_SUBSTR: 84,
    PROP_SUBSET: 85,
    SUBSET: 86,
    SUBSTR: 87,
    ITERATE: 88,
    LAMBDA: 89,
    LEMMA: 90,
    LOCAL: 91,
    MAINTAINING: 92,
    MATH: 93,
    MIDDLE: 94,
    MOD: 95,
    MODELED: 96,
    MODUS: 97,
    NOT: 98,
    CAT: 99,
    OF: 100,
    OPERATION: 101,
    OR: 102,
    OTHERWISE: 103,
    PONENS: 104,
    POWERSET: 105,
    PRESERVES: 106,
    PROCEDURE: 107,
    PROOF: 108,
    PROOFS_FOR: 109,
    PROPERTY: 110,
    QED: 111,
    QUANTIFIER: 112,
    REALIZATION: 113,
    MODULE_REALIZATION: 114,
    REALIZED: 115,
    REASSIGNS: 116,
    RECORD: 117,
    RECURSIVE: 118,
    REDUCTIO: 119,
    RELATED: 120,
    REM: 121,
    REMEMBER: 122,
    REPEAT: 123,
    REPLACES: 124,
    REPRESENTED: 125,
    REQUIRES: 126,
    RESPECTS: 127,
    RESTORES: 128,
    RULE: 129,
    SELF: 130,
    SSET: 131,
    STATIC: 132,
    SUBTYPE: 133,
    SUCH: 134,
    SUPPOSITION: 135,
    THAT: 136,
    THEN: 137,
    THEOREM: 138,
    THEORY: 139,
    THERE: 140,
    TIMES: 141,
    TYPE: 142,
    TYPE_FAMILY: 143,
    UNION: 144,
    UNIQUE: 145,
    UNIT: 146,
    UNIVERSAL: 147,
    UPDATES: 148,
    USES: 149,
    VAR: 150,
    VARIABLES: 151,
    WHEN: 152,
    WHERE: 153,
    WHILE: 154,
    WITHOUT: 155,
    LETTER: 156,
    ALPHABETIC: 157,
    IDENTIFIER: 158,
    WS: 159,
    SL_COMMENT: 160,
    ML_COMMENT: 161,
    DIGIT: 162,
    DIGITS: 163,
    DOT: 164,
    REAL: 165,
    NUMERIC_LITERAL: 166,
    ESC: 167,
    CHARACTER_LITERAL: 168,
    COMMA: 169,
    LPAREN: 170,
    RPAREN: 171,
    LBRACE: 172,
    RBRACE: 173,
    DBL_LBRACE: 174,
    DBL_RBRACE: 175,
    LSQBRACK: 176,
    RSQBRACK: 177,
    HASH: 178,
    CARAT: 179,
    PLUS: 180,
    MINUS: 181,
    AMPERSAND: 182,
    MULTIPLY: 183,
    DIVIDE: 184,
    EXP: 185,
    RANGE: 186,
    NOT_EQL: 187,
    GT_EQL: 188,
    LT_EQL: 189,
    EQL: 190,
    LT: 191,
    GT: 192,
    LL: 193,
    GG: 194,
    FUNCARROW: 195,
    COLON: 196,
    SEMICOLON: 197,
    SWAP_OP: 198,
    ASSIGN_OP: 199,
    BAR: 200,
    DBL_BAR: 201,
    DQUOTE: 202,
    TILDE: 203,
    STRING_LITERAL: 204,
    USABLE: 205,
    FREE_OPERATOR: 206,
    REQUIRED_SYMBOLIC: 207
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(RLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    ABS : 4,
    AD : 5,
    ABSURDUM : 6,
    ALL : 7,
    ALTERS : 8,
    ALTERNATIVE : 9,
    AND : 10,
    ARRAY : 11,
    ASSUME : 12,
    AUX_CODE : 13,
    AUX_VAR : 14,
    AUX_VARS : 15,
    AUXILIARY : 16,
    AXIOM : 17,
    BOOLEAN : 18,
    BASECASE : 19,
    BY : 20,
    CARTPROD : 21,
    CATEGORICAL : 22,
    CASE : 23,
    CHANGING : 24,
    CLEARS : 25,
    COMMON : 26,
    CONCLUSION : 27,
    COMMUTATIVITY : 28,
    COMPLEMENT : 29,
    CONCEPT : 30,
    MODULE_CONCEPT : 31,
    CONFIRM : 32,
    CONJUNCT : 33,
    CONSTRAINT : 34,
    CONTRADICTION : 35,
    CONVENTION : 36,
    COROLLARY : 37,
    CORR : 38,
    DECREASING : 39,
    DEDUCTION : 40,
    DEFINES : 41,
    DEFINITION : 42,
    DISTRIBUTION : 43,
    DIV : 44,
    DO : 45,
    ELSE : 46,
    ELIMINATION : 47,
    END : 48,
    ENHANCED : 49,
    ENHANCEMENT : 50,
    MODULE_ENHANCEMENT : 51,
    ENSURES : 52,
    EQUALITY : 53,
    EVALUATES : 54,
    EXCLUDED : 55,
    EXEMPLAR : 56,
    EXISTENTIAL : 57,
    EXISTS : 58,
    EXIT : 59,
    FACILITY : 60,
    FAC_FINAL : 61,
    FAC_INIT : 62,
    FAMILY : 63,
    FINALIZATION : 64,
    FROM : 65,
    FOR : 66,
    FORGET : 67,
    GENERALIZATION : 68,
    IF : 69,
    IFF : 70,
    IMPLICIT : 71,
    IMPLIES : 72,
    INDUCTIVE : 73,
    INDUCTIVECASE : 74,
    INITIALIZATION : 75,
    INSTANTIATION : 76,
    INTERSECT : 77,
    INTRODUCES : 78,
    IS : 79,
    IN : 80,
    NOT_IN : 81,
    NOT_PROP_SUBSET : 82,
    NOT_SUBSET : 83,
    NOT_SUBSTR : 84,
    PROP_SUBSET : 85,
    SUBSET : 86,
    SUBSTR : 87,
    ITERATE : 88,
    LAMBDA : 89,
    LEMMA : 90,
    LOCAL : 91,
    MAINTAINING : 92,
    MATH : 93,
    MIDDLE : 94,
    MOD : 95,
    MODELED : 96,
    MODUS : 97,
    NOT : 98,
    CAT : 99,
    OF : 100,
    OPERATION : 101,
    OR : 102,
    OTHERWISE : 103,
    PONENS : 104,
    POWERSET : 105,
    PRESERVES : 106,
    PROCEDURE : 107,
    PROOF : 108,
    PROOFS_FOR : 109,
    PROPERTY : 110,
    QED : 111,
    QUANTIFIER : 112,
    REALIZATION : 113,
    MODULE_REALIZATION : 114,
    REALIZED : 115,
    REASSIGNS : 116,
    RECORD : 117,
    RECURSIVE : 118,
    REDUCTIO : 119,
    RELATED : 120,
    REM : 121,
    REMEMBER : 122,
    REPEAT : 123,
    REPLACES : 124,
    REPRESENTED : 125,
    REQUIRES : 126,
    RESPECTS : 127,
    RESTORES : 128,
    RULE : 129,
    SELF : 130,
    SSET : 131,
    STATIC : 132,
    SUBTYPE : 133,
    SUCH : 134,
    SUPPOSITION : 135,
    THAT : 136,
    THEN : 137,
    THEOREM : 138,
    THEORY : 139,
    THERE : 140,
    TIMES : 141,
    TYPE : 142,
    TYPE_FAMILY : 143,
    UNION : 144,
    UNIQUE : 145,
    UNIT : 146,
    UNIVERSAL : 147,
    UPDATES : 148,
    USES : 149,
    VAR : 150,
    VARIABLES : 151,
    WHEN : 152,
    WHERE : 153,
    WHILE : 154,
    WITHOUT : 155,
    LETTER : 156,
    ALPHABETIC : 157,
    IDENTIFIER : 158,
    WS : 159,
    SL_COMMENT : 160,
    ML_COMMENT : 161,
    DIGIT : 162,
    DIGITS : 163,
    DOT : 164,
    REAL : 165,
    NUMERIC_LITERAL : 166,
    ESC : 167,
    CHARACTER_LITERAL : 168,
    COMMA : 169,
    LPAREN : 170,
    RPAREN : 171,
    LBRACE : 172,
    RBRACE : 173,
    DBL_LBRACE : 174,
    DBL_RBRACE : 175,
    LSQBRACK : 176,
    RSQBRACK : 177,
    HASH : 178,
    CARAT : 179,
    PLUS : 180,
    MINUS : 181,
    AMPERSAND : 182,
    MULTIPLY : 183,
    DIVIDE : 184,
    EXP : 185,
    RANGE : 186,
    NOT_EQL : 187,
    GT_EQL : 188,
    LT_EQL : 189,
    EQL : 190,
    LT : 191,
    GT : 192,
    LL : 193,
    GG : 194,
    FUNCARROW : 195,
    COLON : 196,
    SEMICOLON : 197,
    SWAP_OP : 198,
    ASSIGN_OP : 199,
    BAR : 200,
    DBL_BAR : 201,
    DQUOTE : 202,
    TILDE : 203,
    STRING_LITERAL : 204,
    USABLE : 205,
    FREE_OPERATOR : 206,
    REQUIRED_SYMBOLIC : 207,
    getGrammarFileName: function() { return ".\\RLexer.g"; }
});
org.antlr.lang.augmentObject(RLexer.prototype, {
    // $ANTLR start ABS
    mABS: function()  {
        try {
            var _type = this.ABS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:8:3: ( 'abs' )
            // .\\RLexer.g:8:5: 'abs'
            this.match("abs"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ABS",

    // $ANTLR start AD
    mAD: function()  {
        try {
            var _type = this.AD;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:12:3: ( 'ad' )
            // .\\RLexer.g:12:5: 'ad'
            this.match("ad"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AD",

    // $ANTLR start ABSURDUM
    mABSURDUM: function()  {
        try {
            var _type = this.ABSURDUM;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:16:3: ( 'absurdum' )
            // .\\RLexer.g:16:5: 'absurdum'
            this.match("absurdum"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ABSURDUM",

    // $ANTLR start ALL
    mALL: function()  {
        try {
            var _type = this.ALL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:20:3: ( 'all' )
            // .\\RLexer.g:20:5: 'all'
            this.match("all"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ALL",

    // $ANTLR start ALTERS
    mALTERS: function()  {
        try {
            var _type = this.ALTERS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:24:3: ( 'alt' | 'alters' )
            var alt1=2;
            var LA1_0 = this.input.LA(1);

            if ( (LA1_0=='a') ) {
                var LA1_1 = this.input.LA(2);

                if ( (LA1_1=='l') ) {
                    var LA1_2 = this.input.LA(3);

                    if ( (LA1_2=='t') ) {
                        var LA1_3 = this.input.LA(4);

                        if ( (LA1_3=='e') ) {
                            alt1=2;
                        }
                        else {
                            alt1=1;}
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 1, 2, this.input);

                        throw nvae;
                    }
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 1, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 1, 0, this.input);

                throw nvae;
            }
            switch (alt1) {
                case 1 :
                    // .\\RLexer.g:24:5: 'alt'
                    this.match("alt"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:24:13: 'alters'
                    this.match("alters"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ALTERS",

    // $ANTLR start ALTERNATIVE
    mALTERNATIVE: function()  {
        try {
            var _type = this.ALTERNATIVE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:28:3: ( 'alternative' )
            // .\\RLexer.g:28:5: 'alternative'
            this.match("alternative"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ALTERNATIVE",

    // $ANTLR start AND
    mAND: function()  {
        try {
            var _type = this.AND;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:32:3: ( 'and' )
            // .\\RLexer.g:32:5: 'and'
            this.match("and"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AND",

    // $ANTLR start ARRAY
    mARRAY: function()  {
        try {
            var _type = this.ARRAY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:36:3: ( 'Array' )
            // .\\RLexer.g:36:5: 'Array'
            this.match("Array"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ARRAY",

    // $ANTLR start ASSUME
    mASSUME: function()  {
        try {
            var _type = this.ASSUME;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:40:3: ( 'assume' )
            // .\\RLexer.g:40:5: 'assume'
            this.match("assume"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ASSUME",

    // $ANTLR start AUX_CODE
    mAUX_CODE: function()  {
        try {
            var _type = this.AUX_CODE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:44:3: ( 'Aux_Code' )
            // .\\RLexer.g:44:5: 'Aux_Code'
            this.match("Aux_Code"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AUX_CODE",

    // $ANTLR start AUX_VAR
    mAUX_VAR: function()  {
        try {
            var _type = this.AUX_VAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:48:3: ( 'Aux_Var' )
            // .\\RLexer.g:48:5: 'Aux_Var'
            this.match("Aux_Var"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AUX_VAR",

    // $ANTLR start AUX_VARS
    mAUX_VARS: function()  {
        try {
            var _type = this.AUX_VARS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:52:3: ( 'Aux_Vars' )
            // .\\RLexer.g:52:5: 'Aux_Vars'
            this.match("Aux_Vars"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AUX_VARS",

    // $ANTLR start AUXILIARY
    mAUXILIARY: function()  {
        try {
            var _type = this.AUXILIARY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:56:3: ( 'Aux' | 'Auxiliary' )
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0=='A') ) {
                var LA2_1 = this.input.LA(2);

                if ( (LA2_1=='u') ) {
                    var LA2_2 = this.input.LA(3);

                    if ( (LA2_2=='x') ) {
                        var LA2_3 = this.input.LA(4);

                        if ( (LA2_3=='i') ) {
                            alt2=2;
                        }
                        else {
                            alt2=1;}
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 2, 2, this.input);

                        throw nvae;
                    }
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 2, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 2, 0, this.input);

                throw nvae;
            }
            switch (alt2) {
                case 1 :
                    // .\\RLexer.g:56:5: 'Aux'
                    this.match("Aux"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:56:13: 'Auxiliary'
                    this.match("Auxiliary"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AUXILIARY",

    // $ANTLR start AXIOM
    mAXIOM: function()  {
        try {
            var _type = this.AXIOM;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:60:3: ( 'Axiom' )
            // .\\RLexer.g:60:5: 'Axiom'
            this.match("Axiom"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AXIOM",

    // $ANTLR start BOOLEAN
    mBOOLEAN: function()  {
        try {
            var _type = this.BOOLEAN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:64:3: ( 'B' | 'false' | 'true' )
            var alt3=3;
            switch ( this.input.LA(1) ) {
            case 'B':
                alt3=1;
                break;
            case 'f':
                alt3=2;
                break;
            case 't':
                alt3=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 3, 0, this.input);

                throw nvae;
            }

            switch (alt3) {
                case 1 :
                    // .\\RLexer.g:64:5: 'B'
                    this.match('B'); if (this.state.failed) return ;


                    break;
                case 2 :
                    // .\\RLexer.g:64:11: 'false'
                    this.match("false"); if (this.state.failed) return ;



                    break;
                case 3 :
                    // .\\RLexer.g:64:21: 'true'
                    this.match("true"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BOOLEAN",

    // $ANTLR start BASECASE
    mBASECASE: function()  {
        try {
            var _type = this.BASECASE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:68:3: ( 'Base_Case' )
            // .\\RLexer.g:68:5: 'Base_Case'
            this.match("Base_Case"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BASECASE",

    // $ANTLR start BY
    mBY: function()  {
        try {
            var _type = this.BY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:72:3: ( 'By' | 'by' )
            var alt4=2;
            var LA4_0 = this.input.LA(1);

            if ( (LA4_0=='B') ) {
                alt4=1;
            }
            else if ( (LA4_0=='b') ) {
                alt4=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 4, 0, this.input);

                throw nvae;
            }
            switch (alt4) {
                case 1 :
                    // .\\RLexer.g:72:5: 'By'
                    this.match("By"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:72:12: 'by'
                    this.match("by"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BY",

    // $ANTLR start CARTPROD
    mCARTPROD: function()  {
        try {
            var _type = this.CARTPROD;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:76:3: ( 'Cart_Prod' )
            // .\\RLexer.g:76:5: 'Cart_Prod'
            this.match("Cart_Prod"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CARTPROD",

    // $ANTLR start CATEGORICAL
    mCATEGORICAL: function()  {
        try {
            var _type = this.CATEGORICAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:80:3: ( 'Categorical' )
            // .\\RLexer.g:80:5: 'Categorical'
            this.match("Categorical"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CATEGORICAL",

    // $ANTLR start CASE
    mCASE: function()  {
        try {
            var _type = this.CASE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:84:3: ( 'Case' )
            // .\\RLexer.g:84:5: 'Case'
            this.match("Case"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CASE",

    // $ANTLR start CHANGING
    mCHANGING: function()  {
        try {
            var _type = this.CHANGING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:88:3: ( 'changing' )
            // .\\RLexer.g:88:5: 'changing'
            this.match("changing"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CHANGING",

    // $ANTLR start CLEARS
    mCLEARS: function()  {
        try {
            var _type = this.CLEARS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:92:3: ( 'clr' | 'clears' )
            var alt5=2;
            var LA5_0 = this.input.LA(1);

            if ( (LA5_0=='c') ) {
                var LA5_1 = this.input.LA(2);

                if ( (LA5_1=='l') ) {
                    var LA5_2 = this.input.LA(3);

                    if ( (LA5_2=='r') ) {
                        alt5=1;
                    }
                    else if ( (LA5_2=='e') ) {
                        alt5=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 5, 2, this.input);

                        throw nvae;
                    }
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 5, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 5, 0, this.input);

                throw nvae;
            }
            switch (alt5) {
                case 1 :
                    // .\\RLexer.g:92:5: 'clr'
                    this.match("clr"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:92:13: 'clears'
                    this.match("clears"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CLEARS",

    // $ANTLR start COMMON
    mCOMMON: function()  {
        try {
            var _type = this.COMMON;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:96:3: ( 'common' )
            // .\\RLexer.g:96:5: 'common'
            this.match("common"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMON",

    // $ANTLR start CONCLUSION
    mCONCLUSION: function()  {
        try {
            var _type = this.CONCLUSION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:100:3: ( 'conclusion' )
            // .\\RLexer.g:100:5: 'conclusion'
            this.match("conclusion"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CONCLUSION",

    // $ANTLR start COMMUTATIVITY
    mCOMMUTATIVITY: function()  {
        try {
            var _type = this.COMMUTATIVITY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:104:3: ( 'Commutativity' )
            // .\\RLexer.g:104:5: 'Commutativity'
            this.match("Commutativity"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMUTATIVITY",

    // $ANTLR start COMPLEMENT
    mCOMPLEMENT: function()  {
        try {
            var _type = this.COMPLEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:108:3: ( 'complement' )
            // .\\RLexer.g:108:5: 'complement'
            this.match("complement"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMPLEMENT",

    // $ANTLR start CONCEPT
    mCONCEPT: function()  {
        try {
            var _type = this.CONCEPT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:112:3: ( 'concept' )
            // .\\RLexer.g:112:5: 'concept'
            this.match("concept"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CONCEPT",

    // $ANTLR start MODULE_CONCEPT
    mMODULE_CONCEPT: function()  {
        try {
            var _type = this.MODULE_CONCEPT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:116:3: ( 'Concept' )
            // .\\RLexer.g:116:5: 'Concept'
            this.match("Concept"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MODULE_CONCEPT",

    // $ANTLR start CONFIRM
    mCONFIRM: function()  {
        try {
            var _type = this.CONFIRM;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:120:3: ( 'Confirm' )
            // .\\RLexer.g:120:5: 'Confirm'
            this.match("Confirm"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CONFIRM",

    // $ANTLR start CONJUNCT
    mCONJUNCT: function()  {
        try {
            var _type = this.CONJUNCT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:124:3: ( 'conjunct' )
            // .\\RLexer.g:124:5: 'conjunct'
            this.match("conjunct"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CONJUNCT",

    // $ANTLR start CONSTRAINT
    mCONSTRAINT: function()  {
        try {
            var _type = this.CONSTRAINT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:128:3: ( 'Constraint' | 'Constraints' | 'constraint' | 'constraints' )
            var alt6=4;
            alt6 = this.dfa6.predict(this.input);
            switch (alt6) {
                case 1 :
                    // .\\RLexer.g:128:5: 'Constraint'
                    this.match("Constraint"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:128:20: 'Constraints'
                    this.match("Constraints"); if (this.state.failed) return ;



                    break;
                case 3 :
                    // .\\RLexer.g:128:36: 'constraint'
                    this.match("constraint"); if (this.state.failed) return ;



                    break;
                case 4 :
                    // .\\RLexer.g:128:51: 'constraints'
                    this.match("constraints"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CONSTRAINT",

    // $ANTLR start CONTRADICTION
    mCONTRADICTION: function()  {
        try {
            var _type = this.CONTRADICTION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:132:3: ( 'contradiction' )
            // .\\RLexer.g:132:5: 'contradiction'
            this.match("contradiction"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CONTRADICTION",

    // $ANTLR start CONVENTION
    mCONVENTION: function()  {
        try {
            var _type = this.CONVENTION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:136:3: ( 'Convention' | 'Conventions' | 'convention' | 'conventions' )
            var alt7=4;
            alt7 = this.dfa7.predict(this.input);
            switch (alt7) {
                case 1 :
                    // .\\RLexer.g:136:5: 'Convention'
                    this.match("Convention"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:136:20: 'Conventions'
                    this.match("Conventions"); if (this.state.failed) return ;



                    break;
                case 3 :
                    // .\\RLexer.g:136:36: 'convention'
                    this.match("convention"); if (this.state.failed) return ;



                    break;
                case 4 :
                    // .\\RLexer.g:136:51: 'conventions'
                    this.match("conventions"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CONVENTION",

    // $ANTLR start COROLLARY
    mCOROLLARY: function()  {
        try {
            var _type = this.COROLLARY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:140:3: ( 'Corollary' )
            // .\\RLexer.g:140:5: 'Corollary'
            this.match("Corollary"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COROLLARY",

    // $ANTLR start CORR
    mCORR: function()  {
        try {
            var _type = this.CORR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:144:3: ( 'Correspondence' | 'correspondence' )
            var alt8=2;
            var LA8_0 = this.input.LA(1);

            if ( (LA8_0=='C') ) {
                alt8=1;
            }
            else if ( (LA8_0=='c') ) {
                alt8=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 8, 0, this.input);

                throw nvae;
            }
            switch (alt8) {
                case 1 :
                    // .\\RLexer.g:144:5: 'Correspondence'
                    this.match("Correspondence"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:144:24: 'correspondence'
                    this.match("correspondence"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CORR",

    // $ANTLR start DECREASING
    mDECREASING: function()  {
        try {
            var _type = this.DECREASING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:148:3: ( 'decreasing' )
            // .\\RLexer.g:148:5: 'decreasing'
            this.match("decreasing"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DECREASING",

    // $ANTLR start DEDUCTION
    mDEDUCTION: function()  {
        try {
            var _type = this.DEDUCTION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:152:3: ( 'Deduction' )
            // .\\RLexer.g:152:5: 'Deduction'
            this.match("Deduction"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DEDUCTION",

    // $ANTLR start DEFINES
    mDEFINES: function()  {
        try {
            var _type = this.DEFINES;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:156:3: ( 'Defines' | 'defines' )
            var alt9=2;
            var LA9_0 = this.input.LA(1);

            if ( (LA9_0=='D') ) {
                alt9=1;
            }
            else if ( (LA9_0=='d') ) {
                alt9=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 9, 0, this.input);

                throw nvae;
            }
            switch (alt9) {
                case 1 :
                    // .\\RLexer.g:156:5: 'Defines'
                    this.match("Defines"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:156:17: 'defines'
                    this.match("defines"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DEFINES",

    // $ANTLR start DEFINITION
    mDEFINITION: function()  {
        try {
            var _type = this.DEFINITION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:160:3: ( 'Def' | 'def' | 'Definition' | 'definition' )
            var alt10=4;
            alt10 = this.dfa10.predict(this.input);
            switch (alt10) {
                case 1 :
                    // .\\RLexer.g:160:5: 'Def'
                    this.match("Def"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:160:13: 'def'
                    this.match("def"); if (this.state.failed) return ;



                    break;
                case 3 :
                    // .\\RLexer.g:160:21: 'Definition'
                    this.match("Definition"); if (this.state.failed) return ;



                    break;
                case 4 :
                    // .\\RLexer.g:160:36: 'definition'
                    this.match("definition"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DEFINITION",

    // $ANTLR start DISTRIBUTION
    mDISTRIBUTION: function()  {
        try {
            var _type = this.DISTRIBUTION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:164:3: ( 'distribution' )
            // .\\RLexer.g:164:5: 'distribution'
            this.match("distribution"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DISTRIBUTION",

    // $ANTLR start DIV
    mDIV: function()  {
        try {
            var _type = this.DIV;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:168:3: ( 'div' )
            // .\\RLexer.g:168:5: 'div'
            this.match("div"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DIV",

    // $ANTLR start DO
    mDO: function()  {
        try {
            var _type = this.DO;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:172:3: ( 'do' )
            // .\\RLexer.g:172:5: 'do'
            this.match("do"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DO",

    // $ANTLR start ELSE
    mELSE: function()  {
        try {
            var _type = this.ELSE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:176:3: ( 'else' )
            // .\\RLexer.g:176:5: 'else'
            this.match("else"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ELSE",

    // $ANTLR start ELIMINATION
    mELIMINATION: function()  {
        try {
            var _type = this.ELIMINATION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:180:3: ( 'elimination' )
            // .\\RLexer.g:180:5: 'elimination'
            this.match("elimination"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ELIMINATION",

    // $ANTLR start END
    mEND: function()  {
        try {
            var _type = this.END;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:184:3: ( 'end' )
            // .\\RLexer.g:184:5: 'end'
            this.match("end"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "END",

    // $ANTLR start ENHANCED
    mENHANCED: function()  {
        try {
            var _type = this.ENHANCED;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:188:3: ( 'enhanced' )
            // .\\RLexer.g:188:5: 'enhanced'
            this.match("enhanced"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ENHANCED",

    // $ANTLR start ENHANCEMENT
    mENHANCEMENT: function()  {
        try {
            var _type = this.ENHANCEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:192:3: ( 'enhancement' )
            // .\\RLexer.g:192:5: 'enhancement'
            this.match("enhancement"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ENHANCEMENT",

    // $ANTLR start MODULE_ENHANCEMENT
    mMODULE_ENHANCEMENT: function()  {
        try {
            var _type = this.MODULE_ENHANCEMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:196:3: ( 'Enhancement' )
            // .\\RLexer.g:196:5: 'Enhancement'
            this.match("Enhancement"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MODULE_ENHANCEMENT",

    // $ANTLR start ENSURES
    mENSURES: function()  {
        try {
            var _type = this.ENSURES;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:200:3: ( 'ensures' )
            // .\\RLexer.g:200:5: 'ensures'
            this.match("ensures"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ENSURES",

    // $ANTLR start EQUALITY
    mEQUALITY: function()  {
        try {
            var _type = this.EQUALITY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:204:3: ( 'equality' )
            // .\\RLexer.g:204:5: 'equality'
            this.match("equality"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EQUALITY",

    // $ANTLR start EVALUATES
    mEVALUATES: function()  {
        try {
            var _type = this.EVALUATES;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:208:3: ( 'eval' | 'evaluates' )
            var alt11=2;
            var LA11_0 = this.input.LA(1);

            if ( (LA11_0=='e') ) {
                var LA11_1 = this.input.LA(2);

                if ( (LA11_1=='v') ) {
                    var LA11_2 = this.input.LA(3);

                    if ( (LA11_2=='a') ) {
                        var LA11_3 = this.input.LA(4);

                        if ( (LA11_3=='l') ) {
                            var LA11_4 = this.input.LA(5);

                            if ( (LA11_4=='u') ) {
                                alt11=2;
                            }
                            else {
                                alt11=1;}
                        }
                        else {
                            if (this.state.backtracking>0) {this.state.failed=true; return ;}
                            var nvae =
                                new org.antlr.runtime.NoViableAltException("", 11, 3, this.input);

                            throw nvae;
                        }
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 11, 2, this.input);

                        throw nvae;
                    }
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 11, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 11, 0, this.input);

                throw nvae;
            }
            switch (alt11) {
                case 1 :
                    // .\\RLexer.g:208:5: 'eval'
                    this.match("eval"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:208:14: 'evaluates'
                    this.match("evaluates"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EVALUATES",

    // $ANTLR start EXCLUDED
    mEXCLUDED: function()  {
        try {
            var _type = this.EXCLUDED;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:212:3: ( 'excluded' )
            // .\\RLexer.g:212:5: 'excluded'
            this.match("excluded"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EXCLUDED",

    // $ANTLR start EXEMPLAR
    mEXEMPLAR: function()  {
        try {
            var _type = this.EXEMPLAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:216:3: ( 'exemplar' )
            // .\\RLexer.g:216:5: 'exemplar'
            this.match("exemplar"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EXEMPLAR",

    // $ANTLR start EXISTENTIAL
    mEXISTENTIAL: function()  {
        try {
            var _type = this.EXISTENTIAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:220:3: ( 'existantial' )
            // .\\RLexer.g:220:5: 'existantial'
            this.match("existantial"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EXISTENTIAL",

    // $ANTLR start EXISTS
    mEXISTS: function()  {
        try {
            var _type = this.EXISTS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:224:3: ( 'exists' )
            // .\\RLexer.g:224:5: 'exists'
            this.match("exists"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EXISTS",

    // $ANTLR start EXIT
    mEXIT: function()  {
        try {
            var _type = this.EXIT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:228:3: ( 'exit' )
            // .\\RLexer.g:228:5: 'exit'
            this.match("exit"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EXIT",

    // $ANTLR start FACILITY
    mFACILITY: function()  {
        try {
            var _type = this.FACILITY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:232:3: ( 'Facility' )
            // .\\RLexer.g:232:5: 'Facility'
            this.match("Facility"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FACILITY",

    // $ANTLR start FAC_FINAL
    mFAC_FINAL: function()  {
        try {
            var _type = this.FAC_FINAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:236:3: ( 'Facility_Finalization' )
            // .\\RLexer.g:236:5: 'Facility_Finalization'
            this.match("Facility_Finalization"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FAC_FINAL",

    // $ANTLR start FAC_INIT
    mFAC_INIT: function()  {
        try {
            var _type = this.FAC_INIT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:240:3: ( 'Facility_Initialization' )
            // .\\RLexer.g:240:5: 'Facility_Initialization'
            this.match("Facility_Initialization"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FAC_INIT",

    // $ANTLR start FAMILY
    mFAMILY: function()  {
        try {
            var _type = this.FAMILY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:244:3: ( 'Family' )
            // .\\RLexer.g:244:5: 'Family'
            this.match("Family"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FAMILY",

    // $ANTLR start FINALIZATION
    mFINALIZATION: function()  {
        try {
            var _type = this.FINALIZATION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:248:3: ( 'finalization' )
            // .\\RLexer.g:248:5: 'finalization'
            this.match("finalization"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FINALIZATION",

    // $ANTLR start FROM
    mFROM: function()  {
        try {
            var _type = this.FROM;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:252:3: ( 'from' )
            // .\\RLexer.g:252:5: 'from'
            this.match("from"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FROM",

    // $ANTLR start FOR
    mFOR: function()  {
        try {
            var _type = this.FOR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:256:3: ( 'For' | 'for' )
            var alt12=2;
            var LA12_0 = this.input.LA(1);

            if ( (LA12_0=='F') ) {
                alt12=1;
            }
            else if ( (LA12_0=='f') ) {
                alt12=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 12, 0, this.input);

                throw nvae;
            }
            switch (alt12) {
                case 1 :
                    // .\\RLexer.g:256:5: 'For'
                    this.match("For"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:256:13: 'for'
                    this.match("for"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FOR",

    // $ANTLR start FORGET
    mFORGET: function()  {
        try {
            var _type = this.FORGET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:260:3: ( 'Forget' )
            // .\\RLexer.g:260:5: 'Forget'
            this.match("Forget"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FORGET",

    // $ANTLR start GENERALIZATION
    mGENERALIZATION: function()  {
        try {
            var _type = this.GENERALIZATION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:264:3: ( 'generalization' )
            // .\\RLexer.g:264:5: 'generalization'
            this.match("generalization"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GENERALIZATION",

    // $ANTLR start IF
    mIF: function()  {
        try {
            var _type = this.IF;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:268:3: ( 'If' | 'if' )
            var alt13=2;
            var LA13_0 = this.input.LA(1);

            if ( (LA13_0=='I') ) {
                alt13=1;
            }
            else if ( (LA13_0=='i') ) {
                alt13=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 13, 0, this.input);

                throw nvae;
            }
            switch (alt13) {
                case 1 :
                    // .\\RLexer.g:268:5: 'If'
                    this.match("If"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:268:12: 'if'
                    this.match("if"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IF",

    // $ANTLR start IFF
    mIFF: function()  {
        try {
            var _type = this.IFF;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:272:3: ( 'iff' )
            // .\\RLexer.g:272:5: 'iff'
            this.match("iff"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IFF",

    // $ANTLR start IMPLICIT
    mIMPLICIT: function()  {
        try {
            var _type = this.IMPLICIT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:276:3: ( 'Inplicit' )
            // .\\RLexer.g:276:5: 'Inplicit'
            this.match("Inplicit"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IMPLICIT",

    // $ANTLR start IMPLIES
    mIMPLIES: function()  {
        try {
            var _type = this.IMPLIES;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:280:3: ( 'implies' )
            // .\\RLexer.g:280:5: 'implies'
            this.match("implies"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IMPLIES",

    // $ANTLR start INDUCTIVE
    mINDUCTIVE: function()  {
        try {
            var _type = this.INDUCTIVE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:284:3: ( 'Inductive' )
            // .\\RLexer.g:284:5: 'Inductive'
            this.match("Inductive"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INDUCTIVE",

    // $ANTLR start INDUCTIVECASE
    mINDUCTIVECASE: function()  {
        try {
            var _type = this.INDUCTIVECASE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:288:3: ( 'Inductive_case' )
            // .\\RLexer.g:288:5: 'Inductive_case'
            this.match("Inductive_case"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INDUCTIVECASE",

    // $ANTLR start INITIALIZATION
    mINITIALIZATION: function()  {
        try {
            var _type = this.INITIALIZATION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:292:3: ( 'initialization' )
            // .\\RLexer.g:292:5: 'initialization'
            this.match("initialization"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INITIALIZATION",

    // $ANTLR start INSTANTIATION
    mINSTANTIATION: function()  {
        try {
            var _type = this.INSTANTIATION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:296:3: ( 'instantiation' )
            // .\\RLexer.g:296:5: 'instantiation'
            this.match("instantiation"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INSTANTIATION",

    // $ANTLR start INTERSECT
    mINTERSECT: function()  {
        try {
            var _type = this.INTERSECT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:300:3: ( 'intersection' )
            // .\\RLexer.g:300:5: 'intersection'
            this.match("intersection"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INTERSECT",

    // $ANTLR start INTRODUCES
    mINTRODUCES: function()  {
        try {
            var _type = this.INTRODUCES;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:304:3: ( 'introduces' )
            // .\\RLexer.g:304:5: 'introduces'
            this.match("introduces"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INTRODUCES",

    // $ANTLR start IS
    mIS: function()  {
        try {
            var _type = this.IS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:308:3: ( 'is' )
            // .\\RLexer.g:308:5: 'is'
            this.match("is"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IS",

    // $ANTLR start IN
    mIN: function()  {
        try {
            var _type = this.IN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:312:3: ( 'is_in' )
            // .\\RLexer.g:312:5: 'is_in'
            this.match("is_in"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IN",

    // $ANTLR start NOT_IN
    mNOT_IN: function()  {
        try {
            var _type = this.NOT_IN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:316:3: ( 'is_not_in' )
            // .\\RLexer.g:316:5: 'is_not_in'
            this.match("is_not_in"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NOT_IN",

    // $ANTLR start NOT_PROP_SUBSET
    mNOT_PROP_SUBSET: function()  {
        try {
            var _type = this.NOT_PROP_SUBSET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:320:3: ( 'is_not_proper_subset_of' )
            // .\\RLexer.g:320:5: 'is_not_proper_subset_of'
            this.match("is_not_proper_subset_of"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NOT_PROP_SUBSET",

    // $ANTLR start NOT_SUBSET
    mNOT_SUBSET: function()  {
        try {
            var _type = this.NOT_SUBSET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:324:3: ( 'is_not_subset_of' )
            // .\\RLexer.g:324:5: 'is_not_subset_of'
            this.match("is_not_subset_of"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NOT_SUBSET",

    // $ANTLR start NOT_SUBSTR
    mNOT_SUBSTR: function()  {
        try {
            var _type = this.NOT_SUBSTR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:328:3: ( 'is_not_substring_of' )
            // .\\RLexer.g:328:5: 'is_not_substring_of'
            this.match("is_not_substring_of"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NOT_SUBSTR",

    // $ANTLR start PROP_SUBSET
    mPROP_SUBSET: function()  {
        try {
            var _type = this.PROP_SUBSET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:332:3: ( 'is_proper_subset_of' )
            // .\\RLexer.g:332:5: 'is_proper_subset_of'
            this.match("is_proper_subset_of"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PROP_SUBSET",

    // $ANTLR start SUBSET
    mSUBSET: function()  {
        try {
            var _type = this.SUBSET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:336:3: ( 'is_subset_of' )
            // .\\RLexer.g:336:5: 'is_subset_of'
            this.match("is_subset_of"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SUBSET",

    // $ANTLR start SUBSTR
    mSUBSTR: function()  {
        try {
            var _type = this.SUBSTR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:340:3: ( 'is_substring_of' )
            // .\\RLexer.g:340:5: 'is_substring_of'
            this.match("is_substring_of"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SUBSTR",

    // $ANTLR start ITERATE
    mITERATE: function()  {
        try {
            var _type = this.ITERATE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:344:3: ( 'Iterate' )
            // .\\RLexer.g:344:5: 'Iterate'
            this.match("Iterate"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ITERATE",

    // $ANTLR start LAMBDA
    mLAMBDA: function()  {
        try {
            var _type = this.LAMBDA;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:348:3: ( 'lambda' )
            // .\\RLexer.g:348:5: 'lambda'
            this.match("lambda"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LAMBDA",

    // $ANTLR start LEMMA
    mLEMMA: function()  {
        try {
            var _type = this.LEMMA;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:352:3: ( 'Lemma' )
            // .\\RLexer.g:352:5: 'Lemma'
            this.match("Lemma"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LEMMA",

    // $ANTLR start LOCAL
    mLOCAL: function()  {
        try {
            var _type = this.LOCAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:356:3: ( 'Local' )
            // .\\RLexer.g:356:5: 'Local'
            this.match("Local"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LOCAL",

    // $ANTLR start MAINTAINING
    mMAINTAINING: function()  {
        try {
            var _type = this.MAINTAINING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:360:3: ( 'maintaining' )
            // .\\RLexer.g:360:5: 'maintaining'
            this.match("maintaining"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MAINTAINING",

    // $ANTLR start MATH
    mMATH: function()  {
        try {
            var _type = this.MATH;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:364:3: ( 'Math' )
            // .\\RLexer.g:364:5: 'Math'
            this.match("Math"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MATH",

    // $ANTLR start MIDDLE
    mMIDDLE: function()  {
        try {
            var _type = this.MIDDLE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:368:3: ( 'middle' )
            // .\\RLexer.g:368:5: 'middle'
            this.match("middle"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MIDDLE",

    // $ANTLR start MOD
    mMOD: function()  {
        try {
            var _type = this.MOD;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:372:3: ( 'mod' )
            // .\\RLexer.g:372:5: 'mod'
            this.match("mod"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MOD",

    // $ANTLR start MODELED
    mMODELED: function()  {
        try {
            var _type = this.MODELED;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:376:3: ( 'modeled' )
            // .\\RLexer.g:376:5: 'modeled'
            this.match("modeled"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MODELED",

    // $ANTLR start MODUS
    mMODUS: function()  {
        try {
            var _type = this.MODUS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:380:3: ( 'modus' )
            // .\\RLexer.g:380:5: 'modus'
            this.match("modus"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MODUS",

    // $ANTLR start NOT
    mNOT: function()  {
        try {
            var _type = this.NOT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:384:3: ( 'not' )
            // .\\RLexer.g:384:5: 'not'
            this.match("not"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NOT",

    // $ANTLR start CAT
    mCAT: function()  {
        try {
            var _type = this.CAT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:388:3: ( 'o' )
            // .\\RLexer.g:388:5: 'o'
            this.match('o'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CAT",

    // $ANTLR start OF
    mOF: function()  {
        try {
            var _type = this.OF;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:392:3: ( 'of' )
            // .\\RLexer.g:392:5: 'of'
            this.match("of"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "OF",

    // $ANTLR start OPERATION
    mOPERATION: function()  {
        try {
            var _type = this.OPERATION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:396:3: ( 'oper' | 'operation' | 'Oper' | 'Operation' )
            var alt14=4;
            alt14 = this.dfa14.predict(this.input);
            switch (alt14) {
                case 1 :
                    // .\\RLexer.g:396:5: 'oper'
                    this.match("oper"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:396:14: 'operation'
                    this.match("operation"); if (this.state.failed) return ;



                    break;
                case 3 :
                    // .\\RLexer.g:396:28: 'Oper'
                    this.match("Oper"); if (this.state.failed) return ;



                    break;
                case 4 :
                    // .\\RLexer.g:396:37: 'Operation'
                    this.match("Operation"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "OPERATION",

    // $ANTLR start OR
    mOR: function()  {
        try {
            var _type = this.OR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:400:3: ( 'or' )
            // .\\RLexer.g:400:5: 'or'
            this.match("or"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "OR",

    // $ANTLR start OTHERWISE
    mOTHERWISE: function()  {
        try {
            var _type = this.OTHERWISE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:404:3: ( 'otherwise' )
            // .\\RLexer.g:404:5: 'otherwise'
            this.match("otherwise"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "OTHERWISE",

    // $ANTLR start PONENS
    mPONENS: function()  {
        try {
            var _type = this.PONENS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:408:3: ( 'ponens' )
            // .\\RLexer.g:408:5: 'ponens'
            this.match("ponens"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PONENS",

    // $ANTLR start POWERSET
    mPOWERSET: function()  {
        try {
            var _type = this.POWERSET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:412:3: ( 'Powerset' | 'powerset' )
            var alt15=2;
            var LA15_0 = this.input.LA(1);

            if ( (LA15_0=='P') ) {
                alt15=1;
            }
            else if ( (LA15_0=='p') ) {
                alt15=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 15, 0, this.input);

                throw nvae;
            }
            switch (alt15) {
                case 1 :
                    // .\\RLexer.g:412:5: 'Powerset'
                    this.match("Powerset"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:412:18: 'powerset'
                    this.match("powerset"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "POWERSET",

    // $ANTLR start PRESERVES
    mPRESERVES: function()  {
        try {
            var _type = this.PRESERVES;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:416:3: ( 'preserves' | 'pres' )
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( (LA16_0=='p') ) {
                var LA16_1 = this.input.LA(2);

                if ( (LA16_1=='r') ) {
                    var LA16_2 = this.input.LA(3);

                    if ( (LA16_2=='e') ) {
                        var LA16_3 = this.input.LA(4);

                        if ( (LA16_3=='s') ) {
                            var LA16_4 = this.input.LA(5);

                            if ( (LA16_4=='e') ) {
                                alt16=1;
                            }
                            else {
                                alt16=2;}
                        }
                        else {
                            if (this.state.backtracking>0) {this.state.failed=true; return ;}
                            var nvae =
                                new org.antlr.runtime.NoViableAltException("", 16, 3, this.input);

                            throw nvae;
                        }
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 16, 2, this.input);

                        throw nvae;
                    }
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 16, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 16, 0, this.input);

                throw nvae;
            }
            switch (alt16) {
                case 1 :
                    // .\\RLexer.g:416:5: 'preserves'
                    this.match("preserves"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:416:19: 'pres'
                    this.match("pres"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PRESERVES",

    // $ANTLR start PROCEDURE
    mPROCEDURE: function()  {
        try {
            var _type = this.PROCEDURE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:420:3: ( 'Procedure' | 'Proc' )
            var alt17=2;
            var LA17_0 = this.input.LA(1);

            if ( (LA17_0=='P') ) {
                var LA17_1 = this.input.LA(2);

                if ( (LA17_1=='r') ) {
                    var LA17_2 = this.input.LA(3);

                    if ( (LA17_2=='o') ) {
                        var LA17_3 = this.input.LA(4);

                        if ( (LA17_3=='c') ) {
                            var LA17_4 = this.input.LA(5);

                            if ( (LA17_4=='e') ) {
                                alt17=1;
                            }
                            else {
                                alt17=2;}
                        }
                        else {
                            if (this.state.backtracking>0) {this.state.failed=true; return ;}
                            var nvae =
                                new org.antlr.runtime.NoViableAltException("", 17, 3, this.input);

                            throw nvae;
                        }
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 17, 2, this.input);

                        throw nvae;
                    }
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 17, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 17, 0, this.input);

                throw nvae;
            }
            switch (alt17) {
                case 1 :
                    // .\\RLexer.g:420:5: 'Procedure'
                    this.match("Procedure"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:420:19: 'Proc'
                    this.match("Proc"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PROCEDURE",

    // $ANTLR start PROOF
    mPROOF: function()  {
        try {
            var _type = this.PROOF;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:424:3: ( 'Proof' | 'proof' )
            var alt18=2;
            var LA18_0 = this.input.LA(1);

            if ( (LA18_0=='P') ) {
                alt18=1;
            }
            else if ( (LA18_0=='p') ) {
                alt18=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 18, 0, this.input);

                throw nvae;
            }
            switch (alt18) {
                case 1 :
                    // .\\RLexer.g:424:5: 'Proof'
                    this.match("Proof"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:424:15: 'proof'
                    this.match("proof"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PROOF",

    // $ANTLR start PROOFS_FOR
    mPROOFS_FOR: function()  {
        try {
            var _type = this.PROOFS_FOR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:428:3: ( 'Proofs_for' )
            // .\\RLexer.g:428:5: 'Proofs_for'
            this.match("Proofs_for"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PROOFS_FOR",

    // $ANTLR start PROPERTY
    mPROPERTY: function()  {
        try {
            var _type = this.PROPERTY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:432:3: ( 'Property' | 'Pty' )
            var alt19=2;
            var LA19_0 = this.input.LA(1);

            if ( (LA19_0=='P') ) {
                var LA19_1 = this.input.LA(2);

                if ( (LA19_1=='r') ) {
                    alt19=1;
                }
                else if ( (LA19_1=='t') ) {
                    alt19=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 19, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 19, 0, this.input);

                throw nvae;
            }
            switch (alt19) {
                case 1 :
                    // .\\RLexer.g:432:5: 'Property'
                    this.match("Property"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:432:18: 'Pty'
                    this.match("Pty"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PROPERTY",

    // $ANTLR start QED
    mQED: function()  {
        try {
            var _type = this.QED;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:436:3: ( 'QED' )
            // .\\RLexer.g:436:5: 'QED'
            this.match("QED"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "QED",

    // $ANTLR start QUANTIFIER
    mQUANTIFIER: function()  {
        try {
            var _type = this.QUANTIFIER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:440:3: ( 'quantifier' )
            // .\\RLexer.g:440:5: 'quantifier'
            this.match("quantifier"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "QUANTIFIER",

    // $ANTLR start REALIZATION
    mREALIZATION: function()  {
        try {
            var _type = this.REALIZATION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:444:3: ( 'realization' )
            // .\\RLexer.g:444:5: 'realization'
            this.match("realization"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "REALIZATION",

    // $ANTLR start MODULE_REALIZATION
    mMODULE_REALIZATION: function()  {
        try {
            var _type = this.MODULE_REALIZATION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:448:3: ( 'Realization' )
            // .\\RLexer.g:448:5: 'Realization'
            this.match("Realization"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MODULE_REALIZATION",

    // $ANTLR start REALIZED
    mREALIZED: function()  {
        try {
            var _type = this.REALIZED;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:452:3: ( 'realized' )
            // .\\RLexer.g:452:5: 'realized'
            this.match("realized"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "REALIZED",

    // $ANTLR start REASSIGNS
    mREASSIGNS: function()  {
        try {
            var _type = this.REASSIGNS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:456:3: ( 'reassigns' | 'res' )
            var alt20=2;
            var LA20_0 = this.input.LA(1);

            if ( (LA20_0=='r') ) {
                var LA20_1 = this.input.LA(2);

                if ( (LA20_1=='e') ) {
                    var LA20_2 = this.input.LA(3);

                    if ( (LA20_2=='a') ) {
                        alt20=1;
                    }
                    else if ( (LA20_2=='s') ) {
                        alt20=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 20, 2, this.input);

                        throw nvae;
                    }
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 20, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 20, 0, this.input);

                throw nvae;
            }
            switch (alt20) {
                case 1 :
                    // .\\RLexer.g:456:5: 'reassigns'
                    this.match("reassigns"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:456:19: 'res'
                    this.match("res"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "REASSIGNS",

    // $ANTLR start RECORD
    mRECORD: function()  {
        try {
            var _type = this.RECORD;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:460:3: ( 'Record' )
            // .\\RLexer.g:460:5: 'Record'
            this.match("Record"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RECORD",

    // $ANTLR start RECURSIVE
    mRECURSIVE: function()  {
        try {
            var _type = this.RECURSIVE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:464:3: ( 'Recursive' | 'recursive' )
            var alt21=2;
            var LA21_0 = this.input.LA(1);

            if ( (LA21_0=='R') ) {
                alt21=1;
            }
            else if ( (LA21_0=='r') ) {
                alt21=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 21, 0, this.input);

                throw nvae;
            }
            switch (alt21) {
                case 1 :
                    // .\\RLexer.g:464:5: 'Recursive'
                    this.match("Recursive"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:464:19: 'recursive'
                    this.match("recursive"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RECURSIVE",

    // $ANTLR start REDUCTIO
    mREDUCTIO: function()  {
        try {
            var _type = this.REDUCTIO;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:468:3: ( 'reductio' )
            // .\\RLexer.g:468:5: 'reductio'
            this.match("reductio"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "REDUCTIO",

    // $ANTLR start RELATED
    mRELATED: function()  {
        try {
            var _type = this.RELATED;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:472:3: ( 'related' )
            // .\\RLexer.g:472:5: 'related'
            this.match("related"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RELATED",

    // $ANTLR start REM
    mREM: function()  {
        try {
            var _type = this.REM;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:476:3: ( 'rem' )
            // .\\RLexer.g:476:5: 'rem'
            this.match("rem"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "REM",

    // $ANTLR start REMEMBER
    mREMEMBER: function()  {
        try {
            var _type = this.REMEMBER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:480:3: ( 'Remember' )
            // .\\RLexer.g:480:5: 'Remember'
            this.match("Remember"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "REMEMBER",

    // $ANTLR start REPEAT
    mREPEAT: function()  {
        try {
            var _type = this.REPEAT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:484:3: ( 'repeat' )
            // .\\RLexer.g:484:5: 'repeat'
            this.match("repeat"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "REPEAT",

    // $ANTLR start REPLACES
    mREPLACES: function()  {
        try {
            var _type = this.REPLACES;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:488:3: ( 'replaces' | 'rpl' )
            var alt22=2;
            var LA22_0 = this.input.LA(1);

            if ( (LA22_0=='r') ) {
                var LA22_1 = this.input.LA(2);

                if ( (LA22_1=='e') ) {
                    alt22=1;
                }
                else if ( (LA22_1=='p') ) {
                    alt22=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 22, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 22, 0, this.input);

                throw nvae;
            }
            switch (alt22) {
                case 1 :
                    // .\\RLexer.g:488:5: 'replaces'
                    this.match("replaces"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:488:18: 'rpl'
                    this.match("rpl"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "REPLACES",

    // $ANTLR start REPRESENTED
    mREPRESENTED: function()  {
        try {
            var _type = this.REPRESENTED;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:492:3: ( 'represented' )
            // .\\RLexer.g:492:5: 'represented'
            this.match("represented"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "REPRESENTED",

    // $ANTLR start REQUIRES
    mREQUIRES: function()  {
        try {
            var _type = this.REQUIRES;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:496:3: ( 'requires' )
            // .\\RLexer.g:496:5: 'requires'
            this.match("requires"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "REQUIRES",

    // $ANTLR start RESPECTS
    mRESPECTS: function()  {
        try {
            var _type = this.RESPECTS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:500:3: ( 'respects' )
            // .\\RLexer.g:500:5: 'respects'
            this.match("respects"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RESPECTS",

    // $ANTLR start RESTORES
    mRESTORES: function()  {
        try {
            var _type = this.RESTORES;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:504:3: ( 'restores' | 'rest' )
            var alt23=2;
            var LA23_0 = this.input.LA(1);

            if ( (LA23_0=='r') ) {
                var LA23_1 = this.input.LA(2);

                if ( (LA23_1=='e') ) {
                    var LA23_2 = this.input.LA(3);

                    if ( (LA23_2=='s') ) {
                        var LA23_3 = this.input.LA(4);

                        if ( (LA23_3=='t') ) {
                            var LA23_4 = this.input.LA(5);

                            if ( (LA23_4=='o') ) {
                                alt23=1;
                            }
                            else {
                                alt23=2;}
                        }
                        else {
                            if (this.state.backtracking>0) {this.state.failed=true; return ;}
                            var nvae =
                                new org.antlr.runtime.NoViableAltException("", 23, 3, this.input);

                            throw nvae;
                        }
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 23, 2, this.input);

                        throw nvae;
                    }
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 23, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 23, 0, this.input);

                throw nvae;
            }
            switch (alt23) {
                case 1 :
                    // .\\RLexer.g:504:5: 'restores'
                    this.match("restores"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:504:18: 'rest'
                    this.match("rest"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RESTORES",

    // $ANTLR start RULE
    mRULE: function()  {
        try {
            var _type = this.RULE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:508:3: ( 'rule' )
            // .\\RLexer.g:508:5: 'rule'
            this.match("rule"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RULE",

    // $ANTLR start SELF
    mSELF: function()  {
        try {
            var _type = this.SELF;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:512:3: ( 'self' )
            // .\\RLexer.g:512:5: 'self'
            this.match("self"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SELF",

    // $ANTLR start SSET
    mSSET: function()  {
        try {
            var _type = this.SSET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:516:3: ( 'SSet' )
            // .\\RLexer.g:516:5: 'SSet'
            this.match("SSet"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SSET",

    // $ANTLR start STATIC
    mSTATIC: function()  {
        try {
            var _type = this.STATIC;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:520:3: ( 'Static' )
            // .\\RLexer.g:520:5: 'Static'
            this.match("Static"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STATIC",

    // $ANTLR start SUBTYPE
    mSUBTYPE: function()  {
        try {
            var _type = this.SUBTYPE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:524:3: ( 'Subtype' )
            // .\\RLexer.g:524:5: 'Subtype'
            this.match("Subtype"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SUBTYPE",

    // $ANTLR start SUCH
    mSUCH: function()  {
        try {
            var _type = this.SUCH;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:528:3: ( 'such' )
            // .\\RLexer.g:528:5: 'such'
            this.match("such"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SUCH",

    // $ANTLR start SUPPOSITION
    mSUPPOSITION: function()  {
        try {
            var _type = this.SUPPOSITION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:532:3: ( 'Supposition' )
            // .\\RLexer.g:532:5: 'Supposition'
            this.match("Supposition"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SUPPOSITION",

    // $ANTLR start THAT
    mTHAT: function()  {
        try {
            var _type = this.THAT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:536:3: ( 'that' )
            // .\\RLexer.g:536:5: 'that'
            this.match("that"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "THAT",

    // $ANTLR start THEN
    mTHEN: function()  {
        try {
            var _type = this.THEN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:540:3: ( 'then' )
            // .\\RLexer.g:540:5: 'then'
            this.match("then"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "THEN",

    // $ANTLR start THEOREM
    mTHEOREM: function()  {
        try {
            var _type = this.THEOREM;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:544:3: ( 'Theorem' )
            // .\\RLexer.g:544:5: 'Theorem'
            this.match("Theorem"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "THEOREM",

    // $ANTLR start THEORY
    mTHEORY: function()  {
        try {
            var _type = this.THEORY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:548:3: ( 'Theory' | 'Precis' )
            var alt24=2;
            var LA24_0 = this.input.LA(1);

            if ( (LA24_0=='T') ) {
                alt24=1;
            }
            else if ( (LA24_0=='P') ) {
                alt24=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 24, 0, this.input);

                throw nvae;
            }
            switch (alt24) {
                case 1 :
                    // .\\RLexer.g:548:5: 'Theory'
                    this.match("Theory"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:548:16: 'Precis'
                    this.match("Precis"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "THEORY",

    // $ANTLR start THERE
    mTHERE: function()  {
        try {
            var _type = this.THERE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:552:3: ( 'There' | 'there' )
            var alt25=2;
            var LA25_0 = this.input.LA(1);

            if ( (LA25_0=='T') ) {
                alt25=1;
            }
            else if ( (LA25_0=='t') ) {
                alt25=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 25, 0, this.input);

                throw nvae;
            }
            switch (alt25) {
                case 1 :
                    // .\\RLexer.g:552:5: 'There'
                    this.match("There"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:552:15: 'there'
                    this.match("there"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "THERE",

    // $ANTLR start TIMES
    mTIMES: function()  {
        try {
            var _type = this.TIMES;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:556:3: ( 'times' )
            // .\\RLexer.g:556:5: 'times'
            this.match("times"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TIMES",

    // $ANTLR start TYPE
    mTYPE: function()  {
        try {
            var _type = this.TYPE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:560:3: ( 'Type' | 'type' )
            var alt26=2;
            var LA26_0 = this.input.LA(1);

            if ( (LA26_0=='T') ) {
                alt26=1;
            }
            else if ( (LA26_0=='t') ) {
                alt26=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 26, 0, this.input);

                throw nvae;
            }
            switch (alt26) {
                case 1 :
                    // .\\RLexer.g:560:5: 'Type'
                    this.match("Type"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:560:14: 'type'
                    this.match("type"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TYPE",

    // $ANTLR start TYPE_FAMILY
    mTYPE_FAMILY: function()  {
        try {
            var _type = this.TYPE_FAMILY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:564:3: ( 'Type_Family' )
            // .\\RLexer.g:564:5: 'Type_Family'
            this.match("Type_Family"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TYPE_FAMILY",

    // $ANTLR start UNION
    mUNION: function()  {
        try {
            var _type = this.UNION;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:568:3: ( 'union' )
            // .\\RLexer.g:568:5: 'union'
            this.match("union"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "UNION",

    // $ANTLR start UNIQUE
    mUNIQUE: function()  {
        try {
            var _type = this.UNIQUE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:572:3: ( 'Unique' | 'unique' )
            var alt27=2;
            var LA27_0 = this.input.LA(1);

            if ( (LA27_0=='U') ) {
                alt27=1;
            }
            else if ( (LA27_0=='u') ) {
                alt27=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 27, 0, this.input);

                throw nvae;
            }
            switch (alt27) {
                case 1 :
                    // .\\RLexer.g:572:5: 'Unique'
                    this.match("Unique"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:572:16: 'unique'
                    this.match("unique"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "UNIQUE",

    // $ANTLR start UNIT
    mUNIT: function()  {
        try {
            var _type = this.UNIT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:576:3: ( 'Unit' | 'unit' )
            var alt28=2;
            var LA28_0 = this.input.LA(1);

            if ( (LA28_0=='U') ) {
                alt28=1;
            }
            else if ( (LA28_0=='u') ) {
                alt28=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 28, 0, this.input);

                throw nvae;
            }
            switch (alt28) {
                case 1 :
                    // .\\RLexer.g:576:5: 'Unit'
                    this.match("Unit"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:576:14: 'unit'
                    this.match("unit"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "UNIT",

    // $ANTLR start UNIVERSAL
    mUNIVERSAL: function()  {
        try {
            var _type = this.UNIVERSAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:580:3: ( 'universal' )
            // .\\RLexer.g:580:5: 'universal'
            this.match("universal"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "UNIVERSAL",

    // $ANTLR start UPDATES
    mUPDATES: function()  {
        try {
            var _type = this.UPDATES;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:584:3: ( 'updates' | 'upd' )
            var alt29=2;
            var LA29_0 = this.input.LA(1);

            if ( (LA29_0=='u') ) {
                var LA29_1 = this.input.LA(2);

                if ( (LA29_1=='p') ) {
                    var LA29_2 = this.input.LA(3);

                    if ( (LA29_2=='d') ) {
                        var LA29_3 = this.input.LA(4);

                        if ( (LA29_3=='a') ) {
                            alt29=1;
                        }
                        else {
                            alt29=2;}
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 29, 2, this.input);

                        throw nvae;
                    }
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 29, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 29, 0, this.input);

                throw nvae;
            }
            switch (alt29) {
                case 1 :
                    // .\\RLexer.g:584:5: 'updates'
                    this.match("updates"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:584:17: 'upd'
                    this.match("upd"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "UPDATES",

    // $ANTLR start USES
    mUSES: function()  {
        try {
            var _type = this.USES;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:588:3: ( 'uses' )
            // .\\RLexer.g:588:5: 'uses'
            this.match("uses"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "USES",

    // $ANTLR start VAR
    mVAR: function()  {
        try {
            var _type = this.VAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:592:3: ( 'Variable' | 'Var' )
            var alt30=2;
            var LA30_0 = this.input.LA(1);

            if ( (LA30_0=='V') ) {
                var LA30_1 = this.input.LA(2);

                if ( (LA30_1=='a') ) {
                    var LA30_2 = this.input.LA(3);

                    if ( (LA30_2=='r') ) {
                        var LA30_3 = this.input.LA(4);

                        if ( (LA30_3=='i') ) {
                            alt30=1;
                        }
                        else {
                            alt30=2;}
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 30, 2, this.input);

                        throw nvae;
                    }
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 30, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 30, 0, this.input);

                throw nvae;
            }
            switch (alt30) {
                case 1 :
                    // .\\RLexer.g:592:5: 'Variable'
                    this.match("Variable"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:592:18: 'Var'
                    this.match("Var"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "VAR",

    // $ANTLR start VARIABLES
    mVARIABLES: function()  {
        try {
            var _type = this.VARIABLES;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:596:3: ( 'Variables' | 'Vars' )
            var alt31=2;
            var LA31_0 = this.input.LA(1);

            if ( (LA31_0=='V') ) {
                var LA31_1 = this.input.LA(2);

                if ( (LA31_1=='a') ) {
                    var LA31_2 = this.input.LA(3);

                    if ( (LA31_2=='r') ) {
                        var LA31_3 = this.input.LA(4);

                        if ( (LA31_3=='i') ) {
                            alt31=1;
                        }
                        else if ( (LA31_3=='s') ) {
                            alt31=2;
                        }
                        else {
                            if (this.state.backtracking>0) {this.state.failed=true; return ;}
                            var nvae =
                                new org.antlr.runtime.NoViableAltException("", 31, 3, this.input);

                            throw nvae;
                        }
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 31, 2, this.input);

                        throw nvae;
                    }
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 31, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 31, 0, this.input);

                throw nvae;
            }
            switch (alt31) {
                case 1 :
                    // .\\RLexer.g:596:5: 'Variables'
                    this.match("Variables"); if (this.state.failed) return ;



                    break;
                case 2 :
                    // .\\RLexer.g:596:19: 'Vars'
                    this.match("Vars"); if (this.state.failed) return ;



                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "VARIABLES",

    // $ANTLR start WHEN
    mWHEN: function()  {
        try {
            var _type = this.WHEN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:600:3: ( 'when' )
            // .\\RLexer.g:600:5: 'when'
            this.match("when"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WHEN",

    // $ANTLR start WHERE
    mWHERE: function()  {
        try {
            var _type = this.WHERE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:604:3: ( 'where' )
            // .\\RLexer.g:604:5: 'where'
            this.match("where"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WHERE",

    // $ANTLR start WHILE
    mWHILE: function()  {
        try {
            var _type = this.WHILE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:608:3: ( 'While' )
            // .\\RLexer.g:608:5: 'While'
            this.match("While"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WHILE",

    // $ANTLR start WITHOUT
    mWITHOUT: function()  {
        try {
            var _type = this.WITHOUT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:612:3: ( 'without' )
            // .\\RLexer.g:612:5: 'without'
            this.match("without"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WITHOUT",

    // $ANTLR start IDENTIFIER
    mIDENTIFIER: function()  {
        try {
            var _type = this.IDENTIFIER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:616:3: ( LETTER ( ALPHABETIC )* )
            // .\\RLexer.g:616:5: LETTER ( ALPHABETIC )*
            this.mLETTER(); if (this.state.failed) return ;
            // .\\RLexer.g:616:12: ( ALPHABETIC )*
            loop32:
            do {
                var alt32=2;
                var LA32_0 = this.input.LA(1);

                if ( ((LA32_0>='0' && LA32_0<='9')||(LA32_0>='A' && LA32_0<='Z')||LA32_0=='_'||(LA32_0>='a' && LA32_0<='z')) ) {
                    alt32=1;
                }


                switch (alt32) {
                case 1 :
                    // .\\RLexer.g:616:13: ALPHABETIC
                    this.mALPHABETIC(); if (this.state.failed) return ;


                    break;

                default :
                    break loop32;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IDENTIFIER",

    // $ANTLR start WS
    mWS: function()  {
        try {
            var _type = this.WS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:625:5: ( ( ' ' | '\\t' | '\\f' | ( ( '\\r\\n' )=> '\\r\\n' | '\\r' | '\\n' ) ) )
            // .\\RLexer.g:625:7: ( ' ' | '\\t' | '\\f' | ( ( '\\r\\n' )=> '\\r\\n' | '\\r' | '\\n' ) )
            // .\\RLexer.g:625:7: ( ' ' | '\\t' | '\\f' | ( ( '\\r\\n' )=> '\\r\\n' | '\\r' | '\\n' ) )
            var alt34=4;
            switch ( this.input.LA(1) ) {
            case ' ':
                alt34=1;
                break;
            case '\t':
                alt34=2;
                break;
            case '\f':
                alt34=3;
                break;
            case '\n':
            case '\r':
                alt34=4;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 34, 0, this.input);

                throw nvae;
            }

            switch (alt34) {
                case 1 :
                    // .\\RLexer.g:625:9: ' '
                    this.match(' '); if (this.state.failed) return ;


                    break;
                case 2 :
                    // .\\RLexer.g:625:15: '\\t'
                    this.match('\t'); if (this.state.failed) return ;


                    break;
                case 3 :
                    // .\\RLexer.g:625:22: '\\f'
                    this.match('\f'); if (this.state.failed) return ;


                    break;
                case 4 :
                    // .\\RLexer.g:626:11: ( ( '\\r\\n' )=> '\\r\\n' | '\\r' | '\\n' )
                    // .\\RLexer.g:626:11: ( ( '\\r\\n' )=> '\\r\\n' | '\\r' | '\\n' )
                    var alt33=3;
                    var LA33_0 = this.input.LA(1);

                    if ( (LA33_0=='\r') ) {
                        var LA33_1 = this.input.LA(2);

                        if ( (LA33_1=='\n') && (this.synpred1_RLexer())) {
                            alt33=1;
                        }
                        else {
                            alt33=2;}
                    }
                    else if ( (LA33_0=='\n') ) {
                        alt33=3;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 33, 0, this.input);

                        throw nvae;
                    }
                    switch (alt33) {
                        case 1 :
                            // .\\RLexer.g:626:13: ( '\\r\\n' )=> '\\r\\n'
                            this.match("\r\n"); if (this.state.failed) return ;



                            break;
                        case 2 :
                            // .\\RLexer.g:626:34: '\\r'
                            this.match('\r'); if (this.state.failed) return ;


                            break;
                        case 3 :
                            // .\\RLexer.g:626:41: '\\n'
                            this.match('\n'); if (this.state.failed) return ;


                            break;

                    }

                    if ( this.state.backtracking===0 ) {
                        
                    }


                    break;

            }

            if ( this.state.backtracking===0 ) {
               _channel=HIDDEN; 
            }



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WS",

    // $ANTLR start SL_COMMENT
    mSL_COMMENT: function()  {
        try {
            var _type = this.SL_COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:635:5: ( '--' (~ '\\n' )* '\\n' )
            // .\\RLexer.g:635:8: '--' (~ '\\n' )* '\\n'
            this.match("--"); if (this.state.failed) return ;

            // .\\RLexer.g:635:13: (~ '\\n' )*
            loop35:
            do {
                var alt35=2;
                var LA35_0 = this.input.LA(1);

                if ( ((LA35_0>='\u0000' && LA35_0<='\t')||(LA35_0>='\u000B' && LA35_0<='\uFFFF')) ) {
                    alt35=1;
                }


                switch (alt35) {
                case 1 :
                    // .\\RLexer.g:635:14: ~ '\\n'
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();
                    this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop35;
                }
            } while (true);

            this.match('\n'); if (this.state.failed) return ;
            if ( this.state.backtracking===0 ) {
               _channel=HIDDEN;  
            }



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SL_COMMENT",

    // $ANTLR start ML_COMMENT
    mML_COMMENT: function()  {
        try {
            var _type = this.ML_COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:639:5: ( '(*' ( options {greedy=false; } : . )* '*)' )
            // .\\RLexer.g:639:7: '(*' ( options {greedy=false; } : . )* '*)'
            this.match("(*"); if (this.state.failed) return ;

            // .\\RLexer.g:639:12: ( options {greedy=false; } : . )*
            loop36:
            do {
                var alt36=2;
                var LA36_0 = this.input.LA(1);

                if ( (LA36_0=='*') ) {
                    var LA36_1 = this.input.LA(2);

                    if ( (LA36_1==')') ) {
                        alt36=2;
                    }
                    else if ( ((LA36_1>='\u0000' && LA36_1<='(')||(LA36_1>='*' && LA36_1<='\uFFFF')) ) {
                        alt36=1;
                    }


                }
                else if ( ((LA36_0>='\u0000' && LA36_0<=')')||(LA36_0>='+' && LA36_0<='\uFFFF')) ) {
                    alt36=1;
                }


                switch (alt36) {
                case 1 :
                    // .\\RLexer.g:639:39: .
                    this.matchAny(); if (this.state.failed) return ;


                    break;

                default :
                    break loop36;
                }
            } while (true);

            this.match("*)"); if (this.state.failed) return ;

            if ( this.state.backtracking===0 ) {
              _channel=HIDDEN;
            }



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ML_COMMENT",

    // $ANTLR start ALPHABETIC
    mALPHABETIC: function()  {
        try {
            // .\\RLexer.g:643:5: ( LETTER | '_' | DIGIT )
            // .\\RLexer.g:
            if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();
            this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "ALPHABETIC",

    // $ANTLR start LETTER
    mLETTER: function()  {
        try {
            // .\\RLexer.g:647:5: ( ( 'a' .. 'z' | 'A' .. 'Z' ) )
            // .\\RLexer.g:647:7: ( 'a' .. 'z' | 'A' .. 'Z' )
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();
            this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "LETTER",

    // $ANTLR start DIGIT
    mDIGIT: function()  {
        try {
            // .\\RLexer.g:651:5: ( '0' .. '9' )
            // .\\RLexer.g:651:7: '0' .. '9'
            this.matchRange('0','9'); if (this.state.failed) return ;



        }
        finally {
        }
    },
    // $ANTLR end "DIGIT",

    // $ANTLR start DIGITS
    mDIGITS: function()  {
        try {
            // .\\RLexer.g:655:5: ( ( '0' .. '9' )+ )
            // .\\RLexer.g:655:7: ( '0' .. '9' )+
            // .\\RLexer.g:655:7: ( '0' .. '9' )+
            var cnt37=0;
            loop37:
            do {
                var alt37=2;
                var LA37_0 = this.input.LA(1);

                if ( ((LA37_0>='0' && LA37_0<='9')) ) {
                    alt37=1;
                }


                switch (alt37) {
                case 1 :
                    // .\\RLexer.g:655:8: '0' .. '9'
                    this.matchRange('0','9'); if (this.state.failed) return ;


                    break;

                default :
                    if ( cnt37 >= 1 ) {
                        break loop37;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var eee = new org.antlr.runtime.EarlyExitException(37, this.input);
                        throw eee;
                }
                cnt37++;
            } while (true);




        }
        finally {
        }
    },
    // $ANTLR end "DIGITS",

    // $ANTLR start REAL
    mREAL: function()  {
        try {
            // .\\RLexer.g:659:5: ( DIGITS DOT DIGITS )
            // .\\RLexer.g:659:7: DIGITS DOT DIGITS
            this.mDIGITS(); if (this.state.failed) return ;
            this.mDOT(); if (this.state.failed) return ;
            this.mDIGITS(); if (this.state.failed) return ;



        }
        finally {
        }
    },
    // $ANTLR end "REAL",

    // $ANTLR start NUMERIC_LITERAL
    mNUMERIC_LITERAL: function()  {
        try {
            var _type = this.NUMERIC_LITERAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:667:5: ( ( DIGITS '..' )=> DIGITS | ( DIGITS '.' ~ '.' )=> REAL | DIGITS )
            var alt38=3;
            var LA38_0 = this.input.LA(1);

            if ( ((LA38_0>='0' && LA38_0<='9')) ) {
                var LA38_1 = this.input.LA(2);

                if ( ((LA38_1>='0' && LA38_1<='9')) && (this.synpred3_RLexer())) {
                    alt38=2;
                }
                else if ( (LA38_1=='.') && (this.synpred3_RLexer())) {
                    alt38=2;
                }
                else if ( (this.synpred2_RLexer()) ) {
                    alt38=1;
                }
                else if ( (true) ) {
                    alt38=3;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 38, 1, this.input);

                    throw nvae;
                }
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 38, 0, this.input);

                throw nvae;
            }
            switch (alt38) {
                case 1 :
                    // .\\RLexer.g:667:7: ( DIGITS '..' )=> DIGITS
                    this.mDIGITS(); if (this.state.failed) return ;


                    break;
                case 2 :
                    // .\\RLexer.g:668:7: ( DIGITS '.' ~ '.' )=> REAL
                    this.mREAL(); if (this.state.failed) return ;


                    break;
                case 3 :
                    // .\\RLexer.g:669:7: DIGITS
                    this.mDIGITS(); if (this.state.failed) return ;


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NUMERIC_LITERAL",

    // $ANTLR start CHARACTER_LITERAL
    mCHARACTER_LITERAL: function()  {
        try {
            var _type = this.CHARACTER_LITERAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:677:5: ( '\\'' ( ESC | ~ '\\'' ) '\\'' )
            // .\\RLexer.g:677:7: '\\'' ( ESC | ~ '\\'' ) '\\''
            this.match('\''); if (this.state.failed) return ;
            // .\\RLexer.g:677:12: ( ESC | ~ '\\'' )
            var alt39=2;
            var LA39_0 = this.input.LA(1);

            if ( (LA39_0=='\\') ) {
                var LA39_1 = this.input.LA(2);

                if ( (LA39_1=='\'') ) {
                    var LA39_3 = this.input.LA(3);

                    if ( (LA39_3=='\'') ) {
                        alt39=1;
                    }
                    else {
                        alt39=2;}
                }
                else if ( (LA39_1=='\"'||LA39_1=='\\'||LA39_1=='b'||LA39_1=='f'||LA39_1=='n'||LA39_1=='r'||LA39_1=='t') ) {
                    alt39=1;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 39, 1, this.input);

                    throw nvae;
                }
            }
            else if ( ((LA39_0>='\u0000' && LA39_0<='&')||(LA39_0>='(' && LA39_0<='[')||(LA39_0>=']' && LA39_0<='\uFFFF')) ) {
                alt39=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 39, 0, this.input);

                throw nvae;
            }
            switch (alt39) {
                case 1 :
                    // .\\RLexer.g:677:13: ESC
                    this.mESC(); if (this.state.failed) return ;


                    break;
                case 2 :
                    // .\\RLexer.g:677:19: ~ '\\''
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();
                    this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            this.match('\''); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CHARACTER_LITERAL",

    // $ANTLR start DOT
    mDOT: function()  {
        try {
            var _type = this.DOT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:684:12: ( '.' )
            // .\\RLexer.g:684:14: '.'
            this.match('.'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DOT",

    // $ANTLR start COMMA
    mCOMMA: function()  {
        try {
            var _type = this.COMMA;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:685:12: ( ',' )
            // .\\RLexer.g:685:14: ','
            this.match(','); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMA",

    // $ANTLR start LPAREN
    mLPAREN: function()  {
        try {
            var _type = this.LPAREN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:686:12: ( '(' )
            // .\\RLexer.g:686:14: '('
            this.match('('); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LPAREN",

    // $ANTLR start RPAREN
    mRPAREN: function()  {
        try {
            var _type = this.RPAREN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:687:12: ( ')' )
            // .\\RLexer.g:687:14: ')'
            this.match(')'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RPAREN",

    // $ANTLR start LBRACE
    mLBRACE: function()  {
        try {
            var _type = this.LBRACE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:688:12: ( '{' )
            // .\\RLexer.g:688:14: '{'
            this.match('{'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LBRACE",

    // $ANTLR start RBRACE
    mRBRACE: function()  {
        try {
            var _type = this.RBRACE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:689:12: ( '}' )
            // .\\RLexer.g:689:14: '}'
            this.match('}'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RBRACE",

    // $ANTLR start DBL_LBRACE
    mDBL_LBRACE: function()  {
        try {
            var _type = this.DBL_LBRACE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:690:12: ( '{{' )
            // .\\RLexer.g:690:14: '{{'
            this.match("{{"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DBL_LBRACE",

    // $ANTLR start DBL_RBRACE
    mDBL_RBRACE: function()  {
        try {
            var _type = this.DBL_RBRACE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:691:12: ( '}}' )
            // .\\RLexer.g:691:14: '}}'
            this.match("}}"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DBL_RBRACE",

    // $ANTLR start LSQBRACK
    mLSQBRACK: function()  {
        try {
            var _type = this.LSQBRACK;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:692:12: ( '[' )
            // .\\RLexer.g:692:14: '['
            this.match('['); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LSQBRACK",

    // $ANTLR start RSQBRACK
    mRSQBRACK: function()  {
        try {
            var _type = this.RSQBRACK;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:693:12: ( ']' )
            // .\\RLexer.g:693:14: ']'
            this.match(']'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RSQBRACK",

    // $ANTLR start HASH
    mHASH: function()  {
        try {
            var _type = this.HASH;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:694:12: ( '#' )
            // .\\RLexer.g:694:14: '#'
            this.match('#'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "HASH",

    // $ANTLR start CARAT
    mCARAT: function()  {
        try {
            var _type = this.CARAT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:695:12: ( '^' )
            // .\\RLexer.g:695:14: '^'
            this.match('^'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CARAT",

    // $ANTLR start PLUS
    mPLUS: function()  {
        try {
            var _type = this.PLUS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:697:11: ( '+' )
            // .\\RLexer.g:697:13: '+'
            this.match('+'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PLUS",

    // $ANTLR start MINUS
    mMINUS: function()  {
        try {
            var _type = this.MINUS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:698:11: ( '-' )
            // .\\RLexer.g:698:13: '-'
            this.match('-'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MINUS",

    // $ANTLR start AMPERSAND
    mAMPERSAND: function()  {
        try {
            var _type = this.AMPERSAND;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:699:11: ( '&' )
            // .\\RLexer.g:699:13: '&'
            this.match('&'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AMPERSAND",

    // $ANTLR start MULTIPLY
    mMULTIPLY: function()  {
        try {
            var _type = this.MULTIPLY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:700:11: ( '*' )
            // .\\RLexer.g:700:13: '*'
            this.match('*'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MULTIPLY",

    // $ANTLR start DIVIDE
    mDIVIDE: function()  {
        try {
            var _type = this.DIVIDE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:701:11: ( '/' )
            // .\\RLexer.g:701:13: '/'
            this.match('/'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DIVIDE",

    // $ANTLR start EXP
    mEXP: function()  {
        try {
            var _type = this.EXP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:703:11: ( '**' )
            // .\\RLexer.g:703:13: '**'
            this.match("**"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EXP",

    // $ANTLR start RANGE
    mRANGE: function()  {
        try {
            var _type = this.RANGE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:704:11: ( '..' )
            // .\\RLexer.g:704:13: '..'
            this.match(".."); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RANGE",

    // $ANTLR start NOT_EQL
    mNOT_EQL: function()  {
        try {
            var _type = this.NOT_EQL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:706:11: ( '/=' )
            // .\\RLexer.g:706:13: '/='
            this.match("/="); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NOT_EQL",

    // $ANTLR start GT_EQL
    mGT_EQL: function()  {
        try {
            var _type = this.GT_EQL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:707:11: ( '>=' )
            // .\\RLexer.g:707:13: '>='
            this.match(">="); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GT_EQL",

    // $ANTLR start LT_EQL
    mLT_EQL: function()  {
        try {
            var _type = this.LT_EQL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:708:11: ( '<=' )
            // .\\RLexer.g:708:13: '<='
            this.match("<="); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LT_EQL",

    // $ANTLR start EQL
    mEQL: function()  {
        try {
            var _type = this.EQL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:709:11: ( '=' )
            // .\\RLexer.g:709:13: '='
            this.match('='); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EQL",

    // $ANTLR start LT
    mLT: function()  {
        try {
            var _type = this.LT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:710:11: ( '<' )
            // .\\RLexer.g:710:13: '<'
            this.match('<'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LT",

    // $ANTLR start GT
    mGT: function()  {
        try {
            var _type = this.GT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:711:11: ( '>' )
            // .\\RLexer.g:711:13: '>'
            this.match('>'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GT",

    // $ANTLR start LL
    mLL: function()  {
        try {
            var _type = this.LL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:712:11: ( '<<' )
            // .\\RLexer.g:712:13: '<<'
            this.match("<<"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LL",

    // $ANTLR start GG
    mGG: function()  {
        try {
            var _type = this.GG;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:713:11: ( '>>' )
            // .\\RLexer.g:713:13: '>>'
            this.match(">>"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GG",

    // $ANTLR start FUNCARROW
    mFUNCARROW: function()  {
        try {
            var _type = this.FUNCARROW;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:714:11: ( '->' )
            // .\\RLexer.g:714:13: '->'
            this.match("->"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FUNCARROW",

    // $ANTLR start COLON
    mCOLON: function()  {
        try {
            var _type = this.COLON;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:716:11: ( ':' )
            // .\\RLexer.g:716:13: ':'
            this.match(':'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COLON",

    // $ANTLR start SEMICOLON
    mSEMICOLON: function()  {
        try {
            var _type = this.SEMICOLON;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:717:11: ( ';' )
            // .\\RLexer.g:717:13: ';'
            this.match(';'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SEMICOLON",

    // $ANTLR start SWAP_OP
    mSWAP_OP: function()  {
        try {
            var _type = this.SWAP_OP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:718:11: ( ':=:' )
            // .\\RLexer.g:718:13: ':=:'
            this.match(":=:"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SWAP_OP",

    // $ANTLR start ASSIGN_OP
    mASSIGN_OP: function()  {
        try {
            var _type = this.ASSIGN_OP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:719:11: ( ':=' )
            // .\\RLexer.g:719:13: ':='
            this.match(":="); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ASSIGN_OP",

    // $ANTLR start BAR
    mBAR: function()  {
        try {
            var _type = this.BAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:721:11: ( '|' )
            // .\\RLexer.g:721:13: '|'
            this.match('|'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BAR",

    // $ANTLR start DBL_BAR
    mDBL_BAR: function()  {
        try {
            var _type = this.DBL_BAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:722:11: ( '||' )
            // .\\RLexer.g:722:13: '||'
            this.match("||"); if (this.state.failed) return ;




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DBL_BAR",

    // $ANTLR start DQUOTE
    mDQUOTE: function()  {
        try {
            var _type = this.DQUOTE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:723:11: ( '\"' )
            // .\\RLexer.g:723:13: '\"'
            this.match('\"'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DQUOTE",

    // $ANTLR start TILDE
    mTILDE: function()  {
        try {
            var _type = this.TILDE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:724:11: ( '~' )
            // .\\RLexer.g:724:13: '~'
            this.match('~'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TILDE",

    // $ANTLR start STRING_LITERAL
    mSTRING_LITERAL: function()  {
        try {
            var _type = this.STRING_LITERAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:728:5: ( '\"' ( ESC | ~ ( '\"' | '\\\\' ) )* '\"' )
            // .\\RLexer.g:728:7: '\"' ( ESC | ~ ( '\"' | '\\\\' ) )* '\"'
            this.match('\"'); if (this.state.failed) return ;
            // .\\RLexer.g:728:11: ( ESC | ~ ( '\"' | '\\\\' ) )*
            loop40:
            do {
                var alt40=3;
                var LA40_0 = this.input.LA(1);

                if ( (LA40_0=='\\') ) {
                    alt40=1;
                }
                else if ( ((LA40_0>='\u0000' && LA40_0<='!')||(LA40_0>='#' && LA40_0<='[')||(LA40_0>=']' && LA40_0<='\uFFFF')) ) {
                    alt40=2;
                }


                switch (alt40) {
                case 1 :
                    // .\\RLexer.g:728:12: ESC
                    this.mESC(); if (this.state.failed) return ;


                    break;
                case 2 :
                    // .\\RLexer.g:728:16: ~ ( '\"' | '\\\\' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();
                    this.state.failed=false;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop40;
                }
            } while (true);

            this.match('\"'); if (this.state.failed) return ;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRING_LITERAL",

    // $ANTLR start FREE_OPERATOR
    mFREE_OPERATOR: function()  {
        try {
            var _type = this.FREE_OPERATOR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // .\\RLexer.g:734:5: ( '@' ( USABLE )+ ( DOT ( USABLE )+ )? )
            // .\\RLexer.g:734:7: '@' ( USABLE )+ ( DOT ( USABLE )+ )?
            this.match('@'); if (this.state.failed) return ;
            // .\\RLexer.g:734:11: ( USABLE )+
            var cnt41=0;
            loop41:
            do {
                var alt41=2;
                var LA41_0 = this.input.LA(1);

                if ( (LA41_0=='!'||(LA41_0>='#' && LA41_0<='&')||(LA41_0>='(' && LA41_0<='-')||(LA41_0>='/' && LA41_0<='_')||(LA41_0>='a' && LA41_0<='{')||(LA41_0>='}' && LA41_0<='~')) ) {
                    alt41=1;
                }


                switch (alt41) {
                case 1 :
                    // .\\RLexer.g:734:12: USABLE
                    this.mUSABLE(); if (this.state.failed) return ;


                    break;

                default :
                    if ( cnt41 >= 1 ) {
                        break loop41;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return ;}
                        var eee = new org.antlr.runtime.EarlyExitException(41, this.input);
                        throw eee;
                }
                cnt41++;
            } while (true);

            // .\\RLexer.g:734:21: ( DOT ( USABLE )+ )?
            var alt43=2;
            var LA43_0 = this.input.LA(1);

            if ( (LA43_0=='.') ) {
                alt43=1;
            }
            switch (alt43) {
                case 1 :
                    // .\\RLexer.g:734:22: DOT ( USABLE )+
                    this.mDOT(); if (this.state.failed) return ;
                    // .\\RLexer.g:734:26: ( USABLE )+
                    var cnt42=0;
                    loop42:
                    do {
                        var alt42=2;
                        var LA42_0 = this.input.LA(1);

                        if ( (LA42_0=='!'||(LA42_0>='#' && LA42_0<='&')||(LA42_0>='(' && LA42_0<='-')||(LA42_0>='/' && LA42_0<='_')||(LA42_0>='a' && LA42_0<='{')||(LA42_0>='}' && LA42_0<='~')) ) {
                            alt42=1;
                        }


                        switch (alt42) {
                        case 1 :
                            // .\\RLexer.g:734:27: USABLE
                            this.mUSABLE(); if (this.state.failed) return ;


                            break;

                        default :
                            if ( cnt42 >= 1 ) {
                                break loop42;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return ;}
                                var eee = new org.antlr.runtime.EarlyExitException(42, this.input);
                                throw eee;
                        }
                        cnt42++;
                    } while (true);



                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FREE_OPERATOR",

    // $ANTLR start USABLE
    mUSABLE: function()  {
        try {
            // .\\RLexer.g:738:5: ( ( ALPHABETIC | REQUIRED_SYMBOLIC ) )
            // .\\RLexer.g:738:7: ( ALPHABETIC | REQUIRED_SYMBOLIC )
            if ( this.input.LA(1)=='!'||(this.input.LA(1)>='#' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='-')||(this.input.LA(1)>='/' && this.input.LA(1)<='_')||(this.input.LA(1)>='a' && this.input.LA(1)<='{')||(this.input.LA(1)>='}' && this.input.LA(1)<='~') ) {
                this.input.consume();
            this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "USABLE",

    // $ANTLR start REQUIRED_SYMBOLIC
    mREQUIRED_SYMBOLIC: function()  {
        try {
            // .\\RLexer.g:742:5: ( '~' | '!' | '#' | '$' | '%' | '^' | '&' | '(' | ')' | '-' | '+' | '*' | ',' | '/' | ':' | ';' | '<' | '=' | '>' | '?' | '@' | '[' | '\\\\' | ']' | '{' | '}' )
            // .\\RLexer.g:
            if ( this.input.LA(1)=='!'||(this.input.LA(1)>='#' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='-')||this.input.LA(1)=='/'||(this.input.LA(1)>=':' && this.input.LA(1)<='@')||(this.input.LA(1)>='[' && this.input.LA(1)<='^')||this.input.LA(1)=='{'||(this.input.LA(1)>='}' && this.input.LA(1)<='~') ) {
                this.input.consume();
            this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "REQUIRED_SYMBOLIC",

    // $ANTLR start ESC
    mESC: function()  {
        try {
            // .\\RLexer.g:752:5: ( '\\\\' ( 'n' | 'r' | 't' | 'b' | 'f' | '\\'' | '\"' | '\\\\' ) )
            // .\\RLexer.g:752:7: '\\\\' ( 'n' | 'r' | 't' | 'b' | 'f' | '\\'' | '\"' | '\\\\' )
            this.match('\\'); if (this.state.failed) return ;
            if ( this.input.LA(1)=='\"'||this.input.LA(1)=='\''||this.input.LA(1)=='\\'||this.input.LA(1)=='b'||this.input.LA(1)=='f'||this.input.LA(1)=='n'||this.input.LA(1)=='r'||this.input.LA(1)=='t' ) {
                this.input.consume();
            this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return ;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "ESC",

    mTokens: function() {
        // .\\RLexer.g:1:8: ( ABS | AD | ABSURDUM | ALL | ALTERS | ALTERNATIVE | AND | ARRAY | ASSUME | AUX_CODE | AUX_VAR | AUX_VARS | AUXILIARY | AXIOM | BOOLEAN | BASECASE | BY | CARTPROD | CATEGORICAL | CASE | CHANGING | CLEARS | COMMON | CONCLUSION | COMMUTATIVITY | COMPLEMENT | CONCEPT | MODULE_CONCEPT | CONFIRM | CONJUNCT | CONSTRAINT | CONTRADICTION | CONVENTION | COROLLARY | CORR | DECREASING | DEDUCTION | DEFINES | DEFINITION | DISTRIBUTION | DIV | DO | ELSE | ELIMINATION | END | ENHANCED | ENHANCEMENT | MODULE_ENHANCEMENT | ENSURES | EQUALITY | EVALUATES | EXCLUDED | EXEMPLAR | EXISTENTIAL | EXISTS | EXIT | FACILITY | FAC_FINAL | FAC_INIT | FAMILY | FINALIZATION | FROM | FOR | FORGET | GENERALIZATION | IF | IFF | IMPLICIT | IMPLIES | INDUCTIVE | INDUCTIVECASE | INITIALIZATION | INSTANTIATION | INTERSECT | INTRODUCES | IS | IN | NOT_IN | NOT_PROP_SUBSET | NOT_SUBSET | NOT_SUBSTR | PROP_SUBSET | SUBSET | SUBSTR | ITERATE | LAMBDA | LEMMA | LOCAL | MAINTAINING | MATH | MIDDLE | MOD | MODELED | MODUS | NOT | CAT | OF | OPERATION | OR | OTHERWISE | PONENS | POWERSET | PRESERVES | PROCEDURE | PROOF | PROOFS_FOR | PROPERTY | QED | QUANTIFIER | REALIZATION | MODULE_REALIZATION | REALIZED | REASSIGNS | RECORD | RECURSIVE | REDUCTIO | RELATED | REM | REMEMBER | REPEAT | REPLACES | REPRESENTED | REQUIRES | RESPECTS | RESTORES | RULE | SELF | SSET | STATIC | SUBTYPE | SUCH | SUPPOSITION | THAT | THEN | THEOREM | THEORY | THERE | TIMES | TYPE | TYPE_FAMILY | UNION | UNIQUE | UNIT | UNIVERSAL | UPDATES | USES | VAR | VARIABLES | WHEN | WHERE | WHILE | WITHOUT | IDENTIFIER | WS | SL_COMMENT | ML_COMMENT | NUMERIC_LITERAL | CHARACTER_LITERAL | DOT | COMMA | LPAREN | RPAREN | LBRACE | RBRACE | DBL_LBRACE | DBL_RBRACE | LSQBRACK | RSQBRACK | HASH | CARAT | PLUS | MINUS | AMPERSAND | MULTIPLY | DIVIDE | EXP | RANGE | NOT_EQL | GT_EQL | LT_EQL | EQL | LT | GT | LL | GG | FUNCARROW | COLON | SEMICOLON | SWAP_OP | ASSIGN_OP | BAR | DBL_BAR | DQUOTE | TILDE | STRING_LITERAL | FREE_OPERATOR )
        var alt44=196;
        alt44 = this.dfa44.predict(this.input);
        switch (alt44) {
            case 1 :
                // .\\RLexer.g:1:10: ABS
                this.mABS(); if (this.state.failed) return ;


                break;
            case 2 :
                // .\\RLexer.g:1:14: AD
                this.mAD(); if (this.state.failed) return ;


                break;
            case 3 :
                // .\\RLexer.g:1:17: ABSURDUM
                this.mABSURDUM(); if (this.state.failed) return ;


                break;
            case 4 :
                // .\\RLexer.g:1:26: ALL
                this.mALL(); if (this.state.failed) return ;


                break;
            case 5 :
                // .\\RLexer.g:1:30: ALTERS
                this.mALTERS(); if (this.state.failed) return ;


                break;
            case 6 :
                // .\\RLexer.g:1:37: ALTERNATIVE
                this.mALTERNATIVE(); if (this.state.failed) return ;


                break;
            case 7 :
                // .\\RLexer.g:1:49: AND
                this.mAND(); if (this.state.failed) return ;


                break;
            case 8 :
                // .\\RLexer.g:1:53: ARRAY
                this.mARRAY(); if (this.state.failed) return ;


                break;
            case 9 :
                // .\\RLexer.g:1:59: ASSUME
                this.mASSUME(); if (this.state.failed) return ;


                break;
            case 10 :
                // .\\RLexer.g:1:66: AUX_CODE
                this.mAUX_CODE(); if (this.state.failed) return ;


                break;
            case 11 :
                // .\\RLexer.g:1:75: AUX_VAR
                this.mAUX_VAR(); if (this.state.failed) return ;


                break;
            case 12 :
                // .\\RLexer.g:1:83: AUX_VARS
                this.mAUX_VARS(); if (this.state.failed) return ;


                break;
            case 13 :
                // .\\RLexer.g:1:92: AUXILIARY
                this.mAUXILIARY(); if (this.state.failed) return ;


                break;
            case 14 :
                // .\\RLexer.g:1:102: AXIOM
                this.mAXIOM(); if (this.state.failed) return ;


                break;
            case 15 :
                // .\\RLexer.g:1:108: BOOLEAN
                this.mBOOLEAN(); if (this.state.failed) return ;


                break;
            case 16 :
                // .\\RLexer.g:1:116: BASECASE
                this.mBASECASE(); if (this.state.failed) return ;


                break;
            case 17 :
                // .\\RLexer.g:1:125: BY
                this.mBY(); if (this.state.failed) return ;


                break;
            case 18 :
                // .\\RLexer.g:1:128: CARTPROD
                this.mCARTPROD(); if (this.state.failed) return ;


                break;
            case 19 :
                // .\\RLexer.g:1:137: CATEGORICAL
                this.mCATEGORICAL(); if (this.state.failed) return ;


                break;
            case 20 :
                // .\\RLexer.g:1:149: CASE
                this.mCASE(); if (this.state.failed) return ;


                break;
            case 21 :
                // .\\RLexer.g:1:154: CHANGING
                this.mCHANGING(); if (this.state.failed) return ;


                break;
            case 22 :
                // .\\RLexer.g:1:163: CLEARS
                this.mCLEARS(); if (this.state.failed) return ;


                break;
            case 23 :
                // .\\RLexer.g:1:170: COMMON
                this.mCOMMON(); if (this.state.failed) return ;


                break;
            case 24 :
                // .\\RLexer.g:1:177: CONCLUSION
                this.mCONCLUSION(); if (this.state.failed) return ;


                break;
            case 25 :
                // .\\RLexer.g:1:188: COMMUTATIVITY
                this.mCOMMUTATIVITY(); if (this.state.failed) return ;


                break;
            case 26 :
                // .\\RLexer.g:1:202: COMPLEMENT
                this.mCOMPLEMENT(); if (this.state.failed) return ;


                break;
            case 27 :
                // .\\RLexer.g:1:213: CONCEPT
                this.mCONCEPT(); if (this.state.failed) return ;


                break;
            case 28 :
                // .\\RLexer.g:1:221: MODULE_CONCEPT
                this.mMODULE_CONCEPT(); if (this.state.failed) return ;


                break;
            case 29 :
                // .\\RLexer.g:1:236: CONFIRM
                this.mCONFIRM(); if (this.state.failed) return ;


                break;
            case 30 :
                // .\\RLexer.g:1:244: CONJUNCT
                this.mCONJUNCT(); if (this.state.failed) return ;


                break;
            case 31 :
                // .\\RLexer.g:1:253: CONSTRAINT
                this.mCONSTRAINT(); if (this.state.failed) return ;


                break;
            case 32 :
                // .\\RLexer.g:1:264: CONTRADICTION
                this.mCONTRADICTION(); if (this.state.failed) return ;


                break;
            case 33 :
                // .\\RLexer.g:1:278: CONVENTION
                this.mCONVENTION(); if (this.state.failed) return ;


                break;
            case 34 :
                // .\\RLexer.g:1:289: COROLLARY
                this.mCOROLLARY(); if (this.state.failed) return ;


                break;
            case 35 :
                // .\\RLexer.g:1:299: CORR
                this.mCORR(); if (this.state.failed) return ;


                break;
            case 36 :
                // .\\RLexer.g:1:304: DECREASING
                this.mDECREASING(); if (this.state.failed) return ;


                break;
            case 37 :
                // .\\RLexer.g:1:315: DEDUCTION
                this.mDEDUCTION(); if (this.state.failed) return ;


                break;
            case 38 :
                // .\\RLexer.g:1:325: DEFINES
                this.mDEFINES(); if (this.state.failed) return ;


                break;
            case 39 :
                // .\\RLexer.g:1:333: DEFINITION
                this.mDEFINITION(); if (this.state.failed) return ;


                break;
            case 40 :
                // .\\RLexer.g:1:344: DISTRIBUTION
                this.mDISTRIBUTION(); if (this.state.failed) return ;


                break;
            case 41 :
                // .\\RLexer.g:1:357: DIV
                this.mDIV(); if (this.state.failed) return ;


                break;
            case 42 :
                // .\\RLexer.g:1:361: DO
                this.mDO(); if (this.state.failed) return ;


                break;
            case 43 :
                // .\\RLexer.g:1:364: ELSE
                this.mELSE(); if (this.state.failed) return ;


                break;
            case 44 :
                // .\\RLexer.g:1:369: ELIMINATION
                this.mELIMINATION(); if (this.state.failed) return ;


                break;
            case 45 :
                // .\\RLexer.g:1:381: END
                this.mEND(); if (this.state.failed) return ;


                break;
            case 46 :
                // .\\RLexer.g:1:385: ENHANCED
                this.mENHANCED(); if (this.state.failed) return ;


                break;
            case 47 :
                // .\\RLexer.g:1:394: ENHANCEMENT
                this.mENHANCEMENT(); if (this.state.failed) return ;


                break;
            case 48 :
                // .\\RLexer.g:1:406: MODULE_ENHANCEMENT
                this.mMODULE_ENHANCEMENT(); if (this.state.failed) return ;


                break;
            case 49 :
                // .\\RLexer.g:1:425: ENSURES
                this.mENSURES(); if (this.state.failed) return ;


                break;
            case 50 :
                // .\\RLexer.g:1:433: EQUALITY
                this.mEQUALITY(); if (this.state.failed) return ;


                break;
            case 51 :
                // .\\RLexer.g:1:442: EVALUATES
                this.mEVALUATES(); if (this.state.failed) return ;


                break;
            case 52 :
                // .\\RLexer.g:1:452: EXCLUDED
                this.mEXCLUDED(); if (this.state.failed) return ;


                break;
            case 53 :
                // .\\RLexer.g:1:461: EXEMPLAR
                this.mEXEMPLAR(); if (this.state.failed) return ;


                break;
            case 54 :
                // .\\RLexer.g:1:470: EXISTENTIAL
                this.mEXISTENTIAL(); if (this.state.failed) return ;


                break;
            case 55 :
                // .\\RLexer.g:1:482: EXISTS
                this.mEXISTS(); if (this.state.failed) return ;


                break;
            case 56 :
                // .\\RLexer.g:1:489: EXIT
                this.mEXIT(); if (this.state.failed) return ;


                break;
            case 57 :
                // .\\RLexer.g:1:494: FACILITY
                this.mFACILITY(); if (this.state.failed) return ;


                break;
            case 58 :
                // .\\RLexer.g:1:503: FAC_FINAL
                this.mFAC_FINAL(); if (this.state.failed) return ;


                break;
            case 59 :
                // .\\RLexer.g:1:513: FAC_INIT
                this.mFAC_INIT(); if (this.state.failed) return ;


                break;
            case 60 :
                // .\\RLexer.g:1:522: FAMILY
                this.mFAMILY(); if (this.state.failed) return ;


                break;
            case 61 :
                // .\\RLexer.g:1:529: FINALIZATION
                this.mFINALIZATION(); if (this.state.failed) return ;


                break;
            case 62 :
                // .\\RLexer.g:1:542: FROM
                this.mFROM(); if (this.state.failed) return ;


                break;
            case 63 :
                // .\\RLexer.g:1:547: FOR
                this.mFOR(); if (this.state.failed) return ;


                break;
            case 64 :
                // .\\RLexer.g:1:551: FORGET
                this.mFORGET(); if (this.state.failed) return ;


                break;
            case 65 :
                // .\\RLexer.g:1:558: GENERALIZATION
                this.mGENERALIZATION(); if (this.state.failed) return ;


                break;
            case 66 :
                // .\\RLexer.g:1:573: IF
                this.mIF(); if (this.state.failed) return ;


                break;
            case 67 :
                // .\\RLexer.g:1:576: IFF
                this.mIFF(); if (this.state.failed) return ;


                break;
            case 68 :
                // .\\RLexer.g:1:580: IMPLICIT
                this.mIMPLICIT(); if (this.state.failed) return ;


                break;
            case 69 :
                // .\\RLexer.g:1:589: IMPLIES
                this.mIMPLIES(); if (this.state.failed) return ;


                break;
            case 70 :
                // .\\RLexer.g:1:597: INDUCTIVE
                this.mINDUCTIVE(); if (this.state.failed) return ;


                break;
            case 71 :
                // .\\RLexer.g:1:607: INDUCTIVECASE
                this.mINDUCTIVECASE(); if (this.state.failed) return ;


                break;
            case 72 :
                // .\\RLexer.g:1:621: INITIALIZATION
                this.mINITIALIZATION(); if (this.state.failed) return ;


                break;
            case 73 :
                // .\\RLexer.g:1:636: INSTANTIATION
                this.mINSTANTIATION(); if (this.state.failed) return ;


                break;
            case 74 :
                // .\\RLexer.g:1:650: INTERSECT
                this.mINTERSECT(); if (this.state.failed) return ;


                break;
            case 75 :
                // .\\RLexer.g:1:660: INTRODUCES
                this.mINTRODUCES(); if (this.state.failed) return ;


                break;
            case 76 :
                // .\\RLexer.g:1:671: IS
                this.mIS(); if (this.state.failed) return ;


                break;
            case 77 :
                // .\\RLexer.g:1:674: IN
                this.mIN(); if (this.state.failed) return ;


                break;
            case 78 :
                // .\\RLexer.g:1:677: NOT_IN
                this.mNOT_IN(); if (this.state.failed) return ;


                break;
            case 79 :
                // .\\RLexer.g:1:684: NOT_PROP_SUBSET
                this.mNOT_PROP_SUBSET(); if (this.state.failed) return ;


                break;
            case 80 :
                // .\\RLexer.g:1:700: NOT_SUBSET
                this.mNOT_SUBSET(); if (this.state.failed) return ;


                break;
            case 81 :
                // .\\RLexer.g:1:711: NOT_SUBSTR
                this.mNOT_SUBSTR(); if (this.state.failed) return ;


                break;
            case 82 :
                // .\\RLexer.g:1:722: PROP_SUBSET
                this.mPROP_SUBSET(); if (this.state.failed) return ;


                break;
            case 83 :
                // .\\RLexer.g:1:734: SUBSET
                this.mSUBSET(); if (this.state.failed) return ;


                break;
            case 84 :
                // .\\RLexer.g:1:741: SUBSTR
                this.mSUBSTR(); if (this.state.failed) return ;


                break;
            case 85 :
                // .\\RLexer.g:1:748: ITERATE
                this.mITERATE(); if (this.state.failed) return ;


                break;
            case 86 :
                // .\\RLexer.g:1:756: LAMBDA
                this.mLAMBDA(); if (this.state.failed) return ;


                break;
            case 87 :
                // .\\RLexer.g:1:763: LEMMA
                this.mLEMMA(); if (this.state.failed) return ;


                break;
            case 88 :
                // .\\RLexer.g:1:769: LOCAL
                this.mLOCAL(); if (this.state.failed) return ;


                break;
            case 89 :
                // .\\RLexer.g:1:775: MAINTAINING
                this.mMAINTAINING(); if (this.state.failed) return ;


                break;
            case 90 :
                // .\\RLexer.g:1:787: MATH
                this.mMATH(); if (this.state.failed) return ;


                break;
            case 91 :
                // .\\RLexer.g:1:792: MIDDLE
                this.mMIDDLE(); if (this.state.failed) return ;


                break;
            case 92 :
                // .\\RLexer.g:1:799: MOD
                this.mMOD(); if (this.state.failed) return ;


                break;
            case 93 :
                // .\\RLexer.g:1:803: MODELED
                this.mMODELED(); if (this.state.failed) return ;


                break;
            case 94 :
                // .\\RLexer.g:1:811: MODUS
                this.mMODUS(); if (this.state.failed) return ;


                break;
            case 95 :
                // .\\RLexer.g:1:817: NOT
                this.mNOT(); if (this.state.failed) return ;


                break;
            case 96 :
                // .\\RLexer.g:1:821: CAT
                this.mCAT(); if (this.state.failed) return ;


                break;
            case 97 :
                // .\\RLexer.g:1:825: OF
                this.mOF(); if (this.state.failed) return ;


                break;
            case 98 :
                // .\\RLexer.g:1:828: OPERATION
                this.mOPERATION(); if (this.state.failed) return ;


                break;
            case 99 :
                // .\\RLexer.g:1:838: OR
                this.mOR(); if (this.state.failed) return ;


                break;
            case 100 :
                // .\\RLexer.g:1:841: OTHERWISE
                this.mOTHERWISE(); if (this.state.failed) return ;


                break;
            case 101 :
                // .\\RLexer.g:1:851: PONENS
                this.mPONENS(); if (this.state.failed) return ;


                break;
            case 102 :
                // .\\RLexer.g:1:858: POWERSET
                this.mPOWERSET(); if (this.state.failed) return ;


                break;
            case 103 :
                // .\\RLexer.g:1:867: PRESERVES
                this.mPRESERVES(); if (this.state.failed) return ;


                break;
            case 104 :
                // .\\RLexer.g:1:877: PROCEDURE
                this.mPROCEDURE(); if (this.state.failed) return ;


                break;
            case 105 :
                // .\\RLexer.g:1:887: PROOF
                this.mPROOF(); if (this.state.failed) return ;


                break;
            case 106 :
                // .\\RLexer.g:1:893: PROOFS_FOR
                this.mPROOFS_FOR(); if (this.state.failed) return ;


                break;
            case 107 :
                // .\\RLexer.g:1:904: PROPERTY
                this.mPROPERTY(); if (this.state.failed) return ;


                break;
            case 108 :
                // .\\RLexer.g:1:913: QED
                this.mQED(); if (this.state.failed) return ;


                break;
            case 109 :
                // .\\RLexer.g:1:917: QUANTIFIER
                this.mQUANTIFIER(); if (this.state.failed) return ;


                break;
            case 110 :
                // .\\RLexer.g:1:928: REALIZATION
                this.mREALIZATION(); if (this.state.failed) return ;


                break;
            case 111 :
                // .\\RLexer.g:1:940: MODULE_REALIZATION
                this.mMODULE_REALIZATION(); if (this.state.failed) return ;


                break;
            case 112 :
                // .\\RLexer.g:1:959: REALIZED
                this.mREALIZED(); if (this.state.failed) return ;


                break;
            case 113 :
                // .\\RLexer.g:1:968: REASSIGNS
                this.mREASSIGNS(); if (this.state.failed) return ;


                break;
            case 114 :
                // .\\RLexer.g:1:978: RECORD
                this.mRECORD(); if (this.state.failed) return ;


                break;
            case 115 :
                // .\\RLexer.g:1:985: RECURSIVE
                this.mRECURSIVE(); if (this.state.failed) return ;


                break;
            case 116 :
                // .\\RLexer.g:1:995: REDUCTIO
                this.mREDUCTIO(); if (this.state.failed) return ;


                break;
            case 117 :
                // .\\RLexer.g:1:1004: RELATED
                this.mRELATED(); if (this.state.failed) return ;


                break;
            case 118 :
                // .\\RLexer.g:1:1012: REM
                this.mREM(); if (this.state.failed) return ;


                break;
            case 119 :
                // .\\RLexer.g:1:1016: REMEMBER
                this.mREMEMBER(); if (this.state.failed) return ;


                break;
            case 120 :
                // .\\RLexer.g:1:1025: REPEAT
                this.mREPEAT(); if (this.state.failed) return ;


                break;
            case 121 :
                // .\\RLexer.g:1:1032: REPLACES
                this.mREPLACES(); if (this.state.failed) return ;


                break;
            case 122 :
                // .\\RLexer.g:1:1041: REPRESENTED
                this.mREPRESENTED(); if (this.state.failed) return ;


                break;
            case 123 :
                // .\\RLexer.g:1:1053: REQUIRES
                this.mREQUIRES(); if (this.state.failed) return ;


                break;
            case 124 :
                // .\\RLexer.g:1:1062: RESPECTS
                this.mRESPECTS(); if (this.state.failed) return ;


                break;
            case 125 :
                // .\\RLexer.g:1:1071: RESTORES
                this.mRESTORES(); if (this.state.failed) return ;


                break;
            case 126 :
                // .\\RLexer.g:1:1080: RULE
                this.mRULE(); if (this.state.failed) return ;


                break;
            case 127 :
                // .\\RLexer.g:1:1085: SELF
                this.mSELF(); if (this.state.failed) return ;


                break;
            case 128 :
                // .\\RLexer.g:1:1090: SSET
                this.mSSET(); if (this.state.failed) return ;


                break;
            case 129 :
                // .\\RLexer.g:1:1095: STATIC
                this.mSTATIC(); if (this.state.failed) return ;


                break;
            case 130 :
                // .\\RLexer.g:1:1102: SUBTYPE
                this.mSUBTYPE(); if (this.state.failed) return ;


                break;
            case 131 :
                // .\\RLexer.g:1:1110: SUCH
                this.mSUCH(); if (this.state.failed) return ;


                break;
            case 132 :
                // .\\RLexer.g:1:1115: SUPPOSITION
                this.mSUPPOSITION(); if (this.state.failed) return ;


                break;
            case 133 :
                // .\\RLexer.g:1:1127: THAT
                this.mTHAT(); if (this.state.failed) return ;


                break;
            case 134 :
                // .\\RLexer.g:1:1132: THEN
                this.mTHEN(); if (this.state.failed) return ;


                break;
            case 135 :
                // .\\RLexer.g:1:1137: THEOREM
                this.mTHEOREM(); if (this.state.failed) return ;


                break;
            case 136 :
                // .\\RLexer.g:1:1145: THEORY
                this.mTHEORY(); if (this.state.failed) return ;


                break;
            case 137 :
                // .\\RLexer.g:1:1152: THERE
                this.mTHERE(); if (this.state.failed) return ;


                break;
            case 138 :
                // .\\RLexer.g:1:1158: TIMES
                this.mTIMES(); if (this.state.failed) return ;


                break;
            case 139 :
                // .\\RLexer.g:1:1164: TYPE
                this.mTYPE(); if (this.state.failed) return ;


                break;
            case 140 :
                // .\\RLexer.g:1:1169: TYPE_FAMILY
                this.mTYPE_FAMILY(); if (this.state.failed) return ;


                break;
            case 141 :
                // .\\RLexer.g:1:1181: UNION
                this.mUNION(); if (this.state.failed) return ;


                break;
            case 142 :
                // .\\RLexer.g:1:1187: UNIQUE
                this.mUNIQUE(); if (this.state.failed) return ;


                break;
            case 143 :
                // .\\RLexer.g:1:1194: UNIT
                this.mUNIT(); if (this.state.failed) return ;


                break;
            case 144 :
                // .\\RLexer.g:1:1199: UNIVERSAL
                this.mUNIVERSAL(); if (this.state.failed) return ;


                break;
            case 145 :
                // .\\RLexer.g:1:1209: UPDATES
                this.mUPDATES(); if (this.state.failed) return ;


                break;
            case 146 :
                // .\\RLexer.g:1:1217: USES
                this.mUSES(); if (this.state.failed) return ;


                break;
            case 147 :
                // .\\RLexer.g:1:1222: VAR
                this.mVAR(); if (this.state.failed) return ;


                break;
            case 148 :
                // .\\RLexer.g:1:1226: VARIABLES
                this.mVARIABLES(); if (this.state.failed) return ;


                break;
            case 149 :
                // .\\RLexer.g:1:1236: WHEN
                this.mWHEN(); if (this.state.failed) return ;


                break;
            case 150 :
                // .\\RLexer.g:1:1241: WHERE
                this.mWHERE(); if (this.state.failed) return ;


                break;
            case 151 :
                // .\\RLexer.g:1:1247: WHILE
                this.mWHILE(); if (this.state.failed) return ;


                break;
            case 152 :
                // .\\RLexer.g:1:1253: WITHOUT
                this.mWITHOUT(); if (this.state.failed) return ;


                break;
            case 153 :
                // .\\RLexer.g:1:1261: IDENTIFIER
                this.mIDENTIFIER(); if (this.state.failed) return ;


                break;
            case 154 :
                // .\\RLexer.g:1:1272: WS
                this.mWS(); if (this.state.failed) return ;


                break;
            case 155 :
                // .\\RLexer.g:1:1275: SL_COMMENT
                this.mSL_COMMENT(); if (this.state.failed) return ;


                break;
            case 156 :
                // .\\RLexer.g:1:1286: ML_COMMENT
                this.mML_COMMENT(); if (this.state.failed) return ;


                break;
            case 157 :
                // .\\RLexer.g:1:1297: NUMERIC_LITERAL
                this.mNUMERIC_LITERAL(); if (this.state.failed) return ;


                break;
            case 158 :
                // .\\RLexer.g:1:1313: CHARACTER_LITERAL
                this.mCHARACTER_LITERAL(); if (this.state.failed) return ;


                break;
            case 159 :
                // .\\RLexer.g:1:1331: DOT
                this.mDOT(); if (this.state.failed) return ;


                break;
            case 160 :
                // .\\RLexer.g:1:1335: COMMA
                this.mCOMMA(); if (this.state.failed) return ;


                break;
            case 161 :
                // .\\RLexer.g:1:1341: LPAREN
                this.mLPAREN(); if (this.state.failed) return ;


                break;
            case 162 :
                // .\\RLexer.g:1:1348: RPAREN
                this.mRPAREN(); if (this.state.failed) return ;


                break;
            case 163 :
                // .\\RLexer.g:1:1355: LBRACE
                this.mLBRACE(); if (this.state.failed) return ;


                break;
            case 164 :
                // .\\RLexer.g:1:1362: RBRACE
                this.mRBRACE(); if (this.state.failed) return ;


                break;
            case 165 :
                // .\\RLexer.g:1:1369: DBL_LBRACE
                this.mDBL_LBRACE(); if (this.state.failed) return ;


                break;
            case 166 :
                // .\\RLexer.g:1:1380: DBL_RBRACE
                this.mDBL_RBRACE(); if (this.state.failed) return ;


                break;
            case 167 :
                // .\\RLexer.g:1:1391: LSQBRACK
                this.mLSQBRACK(); if (this.state.failed) return ;


                break;
            case 168 :
                // .\\RLexer.g:1:1400: RSQBRACK
                this.mRSQBRACK(); if (this.state.failed) return ;


                break;
            case 169 :
                // .\\RLexer.g:1:1409: HASH
                this.mHASH(); if (this.state.failed) return ;


                break;
            case 170 :
                // .\\RLexer.g:1:1414: CARAT
                this.mCARAT(); if (this.state.failed) return ;


                break;
            case 171 :
                // .\\RLexer.g:1:1420: PLUS
                this.mPLUS(); if (this.state.failed) return ;


                break;
            case 172 :
                // .\\RLexer.g:1:1425: MINUS
                this.mMINUS(); if (this.state.failed) return ;


                break;
            case 173 :
                // .\\RLexer.g:1:1431: AMPERSAND
                this.mAMPERSAND(); if (this.state.failed) return ;


                break;
            case 174 :
                // .\\RLexer.g:1:1441: MULTIPLY
                this.mMULTIPLY(); if (this.state.failed) return ;


                break;
            case 175 :
                // .\\RLexer.g:1:1450: DIVIDE
                this.mDIVIDE(); if (this.state.failed) return ;


                break;
            case 176 :
                // .\\RLexer.g:1:1457: EXP
                this.mEXP(); if (this.state.failed) return ;


                break;
            case 177 :
                // .\\RLexer.g:1:1461: RANGE
                this.mRANGE(); if (this.state.failed) return ;


                break;
            case 178 :
                // .\\RLexer.g:1:1467: NOT_EQL
                this.mNOT_EQL(); if (this.state.failed) return ;


                break;
            case 179 :
                // .\\RLexer.g:1:1475: GT_EQL
                this.mGT_EQL(); if (this.state.failed) return ;


                break;
            case 180 :
                // .\\RLexer.g:1:1482: LT_EQL
                this.mLT_EQL(); if (this.state.failed) return ;


                break;
            case 181 :
                // .\\RLexer.g:1:1489: EQL
                this.mEQL(); if (this.state.failed) return ;


                break;
            case 182 :
                // .\\RLexer.g:1:1493: LT
                this.mLT(); if (this.state.failed) return ;


                break;
            case 183 :
                // .\\RLexer.g:1:1496: GT
                this.mGT(); if (this.state.failed) return ;


                break;
            case 184 :
                // .\\RLexer.g:1:1499: LL
                this.mLL(); if (this.state.failed) return ;


                break;
            case 185 :
                // .\\RLexer.g:1:1502: GG
                this.mGG(); if (this.state.failed) return ;


                break;
            case 186 :
                // .\\RLexer.g:1:1505: FUNCARROW
                this.mFUNCARROW(); if (this.state.failed) return ;


                break;
            case 187 :
                // .\\RLexer.g:1:1515: COLON
                this.mCOLON(); if (this.state.failed) return ;


                break;
            case 188 :
                // .\\RLexer.g:1:1521: SEMICOLON
                this.mSEMICOLON(); if (this.state.failed) return ;


                break;
            case 189 :
                // .\\RLexer.g:1:1531: SWAP_OP
                this.mSWAP_OP(); if (this.state.failed) return ;


                break;
            case 190 :
                // .\\RLexer.g:1:1539: ASSIGN_OP
                this.mASSIGN_OP(); if (this.state.failed) return ;


                break;
            case 191 :
                // .\\RLexer.g:1:1549: BAR
                this.mBAR(); if (this.state.failed) return ;


                break;
            case 192 :
                // .\\RLexer.g:1:1553: DBL_BAR
                this.mDBL_BAR(); if (this.state.failed) return ;


                break;
            case 193 :
                // .\\RLexer.g:1:1561: DQUOTE
                this.mDQUOTE(); if (this.state.failed) return ;


                break;
            case 194 :
                // .\\RLexer.g:1:1568: TILDE
                this.mTILDE(); if (this.state.failed) return ;


                break;
            case 195 :
                // .\\RLexer.g:1:1574: STRING_LITERAL
                this.mSTRING_LITERAL(); if (this.state.failed) return ;


                break;
            case 196 :
                // .\\RLexer.g:1:1589: FREE_OPERATOR
                this.mFREE_OPERATOR(); if (this.state.failed) return ;


                break;

        }

    },

    // $ANTLR start "synpred1_RLexer"
    synpred1_RLexer_fragment: function() {
        // .\\RLexer.g:626:13: ( '\\r\\n' )
        // .\\RLexer.g:626:14: '\\r\\n'
        this.match("\r\n"); if (this.state.failed) return ;



    },
    // $ANTLR end "synpred1_RLexer",

    // $ANTLR start "synpred2_RLexer"
    synpred2_RLexer_fragment: function() {
        // .\\RLexer.g:667:7: ( DIGITS '..' )
        // .\\RLexer.g:667:9: DIGITS '..'
        this.mDIGITS(); if (this.state.failed) return ;
        this.match(".."); if (this.state.failed) return ;



    },
    // $ANTLR end "synpred2_RLexer",

    // $ANTLR start "synpred3_RLexer"
    synpred3_RLexer_fragment: function() {
        // .\\RLexer.g:668:7: ( DIGITS '.' ~ '.' )
        // .\\RLexer.g:668:9: DIGITS '.' ~ '.'
        this.mDIGITS(); if (this.state.failed) return ;
        this.match('.'); if (this.state.failed) return ;
        if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='-')||(this.input.LA(1)>='/' && this.input.LA(1)<='\uFFFF') ) {
            this.input.consume();
        this.state.failed=false;
        }
        else {
            if (this.state.backtracking>0) {this.state.failed=true; return ;}
            var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
            this.recover(mse);
            throw mse;}



    },
    // $ANTLR end "synpred3_RLexer"

    synpred3_RLexer: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred3_RLexer_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred2_RLexer: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred2_RLexer_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred1_RLexer: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred1_RLexer_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    }
}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(RLexer, {
    DFA6_eotS:
        "\u0013\uffff\u0001\u0016\u0001\u0018\u0004\uffff",
    DFA6_eofS:
        "\u0019\uffff",
    DFA6_minS:
        "\u0001\u0043\u0002\u006f\u0002\u006e\u0002\u0073\u0002\u0074\u0002"+
    "\u0072\u0002\u0061\u0002\u0069\u0002\u006e\u0002\u0074\u0002\u0073\u0004"+
    "\uffff",
    DFA6_maxS:
        "\u0001\u0063\u0002\u006f\u0002\u006e\u0002\u0073\u0002\u0074\u0002"+
    "\u0072\u0002\u0061\u0002\u0069\u0002\u006e\u0002\u0074\u0002\u0073\u0004"+
    "\uffff",
    DFA6_acceptS:
        "\u0015\uffff\u0001\u0002\u0001\u0001\u0001\u0004\u0001\u0003",
    DFA6_specialS:
        "\u0019\uffff}>",
    DFA6_transitionS: [
            "\u0001\u0001\u001f\uffff\u0001\u0002",
            "\u0001\u0003",
            "\u0001\u0004",
            "\u0001\u0005",
            "\u0001\u0006",
            "\u0001\u0007",
            "\u0001\u0008",
            "\u0001\u0009",
            "\u0001\u000a",
            "\u0001\u000b",
            "\u0001\u000c",
            "\u0001\u000d",
            "\u0001\u000e",
            "\u0001\u000f",
            "\u0001\u0010",
            "\u0001\u0011",
            "\u0001\u0012",
            "\u0001\u0013",
            "\u0001\u0014",
            "\u0001\u0015",
            "\u0001\u0017",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(RLexer, {
    DFA6_eot:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA6_eotS),
    DFA6_eof:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA6_eofS),
    DFA6_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(RLexer.DFA6_minS),
    DFA6_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(RLexer.DFA6_maxS),
    DFA6_accept:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA6_acceptS),
    DFA6_special:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA6_specialS),
    DFA6_transition: (function() {
        var a = [],
            i,
            numStates = RLexer.DFA6_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA6_transitionS[i]));
        }
        return a;
    })()
});

RLexer.DFA6 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 6;
    this.eot = RLexer.DFA6_eot;
    this.eof = RLexer.DFA6_eof;
    this.min = RLexer.DFA6_min;
    this.max = RLexer.DFA6_max;
    this.accept = RLexer.DFA6_accept;
    this.special = RLexer.DFA6_special;
    this.transition = RLexer.DFA6_transition;
};

org.antlr.lang.extend(RLexer.DFA6, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "127:1: CONSTRAINT : ( 'Constraint' | 'Constraints' | 'constraint' | 'constraints' );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(RLexer, {
    DFA7_eotS:
        "\u0013\uffff\u0001\u0016\u0001\u0018\u0004\uffff",
    DFA7_eofS:
        "\u0019\uffff",
    DFA7_minS:
        "\u0001\u0043\u0002\u006f\u0002\u006e\u0002\u0076\u0002\u0065\u0002"+
    "\u006e\u0002\u0074\u0002\u0069\u0002\u006f\u0002\u006e\u0002\u0073\u0004"+
    "\uffff",
    DFA7_maxS:
        "\u0001\u0063\u0002\u006f\u0002\u006e\u0002\u0076\u0002\u0065\u0002"+
    "\u006e\u0002\u0074\u0002\u0069\u0002\u006f\u0002\u006e\u0002\u0073\u0004"+
    "\uffff",
    DFA7_acceptS:
        "\u0015\uffff\u0001\u0002\u0001\u0001\u0001\u0004\u0001\u0003",
    DFA7_specialS:
        "\u0019\uffff}>",
    DFA7_transitionS: [
            "\u0001\u0001\u001f\uffff\u0001\u0002",
            "\u0001\u0003",
            "\u0001\u0004",
            "\u0001\u0005",
            "\u0001\u0006",
            "\u0001\u0007",
            "\u0001\u0008",
            "\u0001\u0009",
            "\u0001\u000a",
            "\u0001\u000b",
            "\u0001\u000c",
            "\u0001\u000d",
            "\u0001\u000e",
            "\u0001\u000f",
            "\u0001\u0010",
            "\u0001\u0011",
            "\u0001\u0012",
            "\u0001\u0013",
            "\u0001\u0014",
            "\u0001\u0015",
            "\u0001\u0017",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(RLexer, {
    DFA7_eot:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA7_eotS),
    DFA7_eof:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA7_eofS),
    DFA7_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(RLexer.DFA7_minS),
    DFA7_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(RLexer.DFA7_maxS),
    DFA7_accept:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA7_acceptS),
    DFA7_special:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA7_specialS),
    DFA7_transition: (function() {
        var a = [],
            i,
            numStates = RLexer.DFA7_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA7_transitionS[i]));
        }
        return a;
    })()
});

RLexer.DFA7 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 7;
    this.eot = RLexer.DFA7_eot;
    this.eof = RLexer.DFA7_eof;
    this.min = RLexer.DFA7_min;
    this.max = RLexer.DFA7_max;
    this.accept = RLexer.DFA7_accept;
    this.special = RLexer.DFA7_special;
    this.transition = RLexer.DFA7_transition;
};

org.antlr.lang.extend(RLexer.DFA7, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "135:1: CONVENTION : ( 'Convention' | 'Conventions' | 'convention' | 'conventions' );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(RLexer, {
    DFA10_eotS:
        "\u0005\uffff\u0001\u0008\u0001\u000a\u0004\uffff",
    DFA10_eofS:
        "\u000b\uffff",
    DFA10_minS:
        "\u0001\u0044\u0002\u0065\u0002\u0066\u0002\u0069\u0004\uffff",
    DFA10_maxS:
        "\u0001\u0064\u0002\u0065\u0002\u0066\u0002\u0069\u0004\uffff",
    DFA10_acceptS:
        "\u0007\uffff\u0001\u0003\u0001\u0001\u0001\u0004\u0001\u0002",
    DFA10_specialS:
        "\u000b\uffff}>",
    DFA10_transitionS: [
            "\u0001\u0001\u001f\uffff\u0001\u0002",
            "\u0001\u0003",
            "\u0001\u0004",
            "\u0001\u0005",
            "\u0001\u0006",
            "\u0001\u0007",
            "\u0001\u0009",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(RLexer, {
    DFA10_eot:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA10_eotS),
    DFA10_eof:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA10_eofS),
    DFA10_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(RLexer.DFA10_minS),
    DFA10_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(RLexer.DFA10_maxS),
    DFA10_accept:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA10_acceptS),
    DFA10_special:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA10_specialS),
    DFA10_transition: (function() {
        var a = [],
            i,
            numStates = RLexer.DFA10_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA10_transitionS[i]));
        }
        return a;
    })()
});

RLexer.DFA10 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 10;
    this.eot = RLexer.DFA10_eot;
    this.eof = RLexer.DFA10_eof;
    this.min = RLexer.DFA10_min;
    this.max = RLexer.DFA10_max;
    this.accept = RLexer.DFA10_accept;
    this.special = RLexer.DFA10_special;
    this.transition = RLexer.DFA10_transition;
};

org.antlr.lang.extend(RLexer.DFA10, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "159:1: DEFINITION : ( 'Def' | 'def' | 'Definition' | 'definition' );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(RLexer, {
    DFA14_eotS:
        "\u0007\uffff\u0001\u000a\u0001\u000c\u0004\uffff",
    DFA14_eofS:
        "\u000d\uffff",
    DFA14_minS:
        "\u0001\u004f\u0002\u0070\u0002\u0065\u0002\u0072\u0002\u0061\u0004"+
    "\uffff",
    DFA14_maxS:
        "\u0001\u006f\u0002\u0070\u0002\u0065\u0002\u0072\u0002\u0061\u0004"+
    "\uffff",
    DFA14_acceptS:
        "\u0009\uffff\u0001\u0002\u0001\u0001\u0001\u0004\u0001\u0003",
    DFA14_specialS:
        "\u000d\uffff}>",
    DFA14_transitionS: [
            "\u0001\u0002\u001f\uffff\u0001\u0001",
            "\u0001\u0003",
            "\u0001\u0004",
            "\u0001\u0005",
            "\u0001\u0006",
            "\u0001\u0007",
            "\u0001\u0008",
            "\u0001\u0009",
            "\u0001\u000b",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(RLexer, {
    DFA14_eot:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA14_eotS),
    DFA14_eof:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA14_eofS),
    DFA14_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(RLexer.DFA14_minS),
    DFA14_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(RLexer.DFA14_maxS),
    DFA14_accept:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA14_acceptS),
    DFA14_special:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA14_specialS),
    DFA14_transition: (function() {
        var a = [],
            i,
            numStates = RLexer.DFA14_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA14_transitionS[i]));
        }
        return a;
    })()
});

RLexer.DFA14 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 14;
    this.eot = RLexer.DFA14_eot;
    this.eof = RLexer.DFA14_eof;
    this.min = RLexer.DFA14_min;
    this.max = RLexer.DFA14_max;
    this.accept = RLexer.DFA14_accept;
    this.special = RLexer.DFA14_special;
    this.transition = RLexer.DFA14_transition;
};

org.antlr.lang.extend(RLexer.DFA14, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "395:1: OPERATION : ( 'oper' | 'operation' | 'Oper' | 'Operation' );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(RLexer, {
    DFA44_eotS:
        "\u0001\uffff\u0002\u0026\u0001\u004c\u0012\u0026\u0001\u007b\u000f"+
    "\u0026\u0002\uffff\u0001\u0099\u0001\u009b\u0002\uffff\u0001\u009d\u0002"+
    "\uffff\u0001\u009f\u0001\u00a1\u0006\uffff\u0001\u00a3\u0001\u00a5\u0001"+
    "\u00a8\u0001\u00ab\u0001\uffff\u0001\u00ad\u0001\uffff\u0001\u00af\u0001"+
    "\u00b0\u0002\uffff\u0001\u0026\u0001\u00b3\u0007\u0026\u0001\u00bc\u0001"+
    "\uffff\u0008\u0026\u0001\u00bc\u0007\u0026\u0001\u00d6\u000a\u0026\u0001"+
    "\u00e8\u0002\u0026\u0001\u00e8\u0002\u0026\u0001\u00f2\u0008\u0026\u0001"+
    "\u00fb\u0001\u0026\u0001\u00fd\u0001\u0026\u0001\uffff\u001b\u0026\u0015"+
    "\uffff\u0001\u0128\u0005\uffff\u0001\u012a\u0001\uffff\u0001\u012b\u0001"+
    "\u012d\u0001\u012e\u0002\u0026\u0001\u0133\u0002\u0026\u0001\uffff\u0003"+
    "\u0026\u0001\u0139\u000c\u0026\u0001\u014b\u0005\u0026\u0001\u0157\u0001"+
    "\u0026\u0001\u0159\u0001\uffff\u0001\u0026\u0001\u0157\u0002\u0026\u0001"+
    "\u015e\u000a\u0026\u0001\u0139\u0001\u0026\u0001\uffff\u0003\u0026\u0001"+
    "\u016f\u0005\u0026\u0001\uffff\u0005\u0026\u0001\u0180\u0001\u0026\u0001"+
    "\u0182\u0001\uffff\u0001\u0026\u0001\uffff\u0009\u0026\u0001\u018f\u0001"+
    "\u0190\u0002\u0026\u0001\u0196\u0003\u0026\u0001\u019a\u0002\u0026\u0001"+
    "\u019f\u000d\u0026\u0001\u01b3\u0002\u0026\u0001\u01b9\u0003\u0026\u0002"+
    "\uffff\u0001\u0026\u0002\uffff\u0001\u0026\u0002\uffff\u0004\u0026\u0001"+
    "\uffff\u0004\u0026\u0001\u01c9\u0001\uffff\u0001\u004c\u0001\u01ca\u0001"+
    "\u01cb\u0002\u0026\u0001\u01ce\u0002\u0026\u0001\u01d1\u0008\u0026\u0001"+
    "\uffff\u000b\u0026\u0001\uffff\u0001\u0026\u0001\uffff\u0002\u0026\u0001"+
    "\u01e9\u0001\u0026\u0001\uffff\u0003\u0026\u0001\u01ef\u0003\u0026\u0001"+
    "\u01f3\u0008\u0026\u0001\uffff\u0010\u0026\u0001\uffff\u0001\u020c\u0001"+
    "\uffff\u0001\u020e\u0001\u0026\u0001\u020e\u0002\u0026\u0001\u0214\u0002"+
    "\u0026\u0001\u0218\u0003\u0026\u0002\uffff\u0004\u0026\u0001\u0221\u0001"+
    "\uffff\u0003\u0026\u0001\uffff\u0004\u0026\u0001\uffff\u0001\u0229\u0004"+
    "\u0026\u0001\u022e\u0001\u022f\u0001\u0230\u0005\u0026\u0001\u01ce\u0002"+
    "\u0026\u0001\u0239\u0002\u0026\u0001\uffff\u0001\u023c\u0001\u0026\u0001"+
    "\u0239\u0001\u0026\u0001\u023f\u0001\uffff\u0001\u0240\u0006\u0026\u0001"+
    "\u0248\u0003\u0026\u0001\u024c\u0001\u0026\u0001\u004c\u0001\u0026\u0003"+
    "\uffff\u0001\u024f\u0001\u0250\u0001\uffff\u0002\u0026\u0001\uffff\u0017"+
    "\u0026\u0001\uffff\u0005\u0026\u0001\uffff\u0003\u0026\u0001\uffff\u000d"+
    "\u0026\u0001\u0282\u0004\u0026\u0001\u0287\u0001\u0288\u0003\u0026\u0001"+
    "\u028c\u0001\uffff\u0001\u0026\u0001\uffff\u0005\u0026\u0001\uffff\u0001"+
    "\u0293\u0002\u0026\u0001\uffff\u0001\u0293\u0007\u0026\u0001\uffff\u0007"+
    "\u0026\u0001\uffff\u0004\u0026\u0003\uffff\u0004\u0026\u0001\u024f\u0001"+
    "\u0026\u0001\u02af\u0001\u0026\u0001\uffff\u0002\u0026\u0001\uffff\u0002"+
    "\u0026\u0002\uffff\u0001\u02b5\u0001\u0026\u0001\u02b7\u0001\u0026\u0001"+
    "\u012d\u0001\u0026\u0001\u02ba\u0001\uffff\u0003\u0026\u0001\uffff\u0002"+
    "\u0026\u0002\uffff\u000a\u0026\u0001\u014b\u0001\u02ca\u0017\u0026\u0001"+
    "\u02e2\u0002\u0026\u0001\u02e5\u0001\u02e6\u0009\u0026\u0001\uffff\u0003"+
    "\u0026\u0001\u02f3\u0002\uffff\u0001\u0026\u0001\u02f5\u0001\u0026\u0001"+
    "\uffff\u0003\u0026\u0001\u02fa\u0002\u0026\u0001\uffff\u0004\u0026\u0001"+
    "\u0301\u0008\u0026\u0001\u030b\u0004\u0026\u0001\u0310\u0002\u0026\u0001"+
    "\u0313\u0003\u0026\u0001\u0301\u0001\u0026\u0001\uffff\u0001\u0318\u0002"+
    "\u0026\u0001\u0318\u0001\u0026\u0001\uffff\u0001\u0026\u0001\uffff\u0002"+
    "\u0026\u0001\uffff\u0001\u0026\u0001\u0321\u0006\u0026\u0001\u0328\u0001"+
    "\u0329\u0005\u0026\u0001\uffff\u0002\u0026\u0001\u0331\u0006\u0026\u0001"+
    "\u0338\u0003\u0026\u0001\u0338\u0003\u0026\u0001\u0340\u0005\u0026\u0001"+
    "\uffff\u0002\u0026\u0002\uffff\u0003\u0026\u0001\u034b\u0001\u034c\u0007"+
    "\u0026\u0001\uffff\u0001\u0026\u0001\uffff\u0001\u0358\u0003\u0026\u0001"+
    "\uffff\u0006\u0026\u0001\uffff\u0008\u0026\u0001\u036a\u0001\uffff\u0004"+
    "\u0026\u0001\uffff\u0002\u0026\u0001\uffff\u0001\u0371\u0001\u0026\u0001"+
    "\u0373\u0001\u0026\u0001\uffff\u0001\u0026\u0001\u01b3\u0001\u0026\u0001"+
    "\u0377\u0001\u0378\u0001\u0026\u0001\u037a\u0001\u037b\u0001\uffff\u0006"+
    "\u0026\u0002\uffff\u0004\u0026\u0001\u0386\u0002\u0026\u0001\uffff\u0001"+
    "\u0389\u0005\u0026\u0001\uffff\u0005\u0026\u0001\u0394\u0001\u0026\u0001"+
    "\uffff\u0001\u0396\u0001\u0026\u0001\u0398\u0001\u0399\u0002\u0026\u0001"+
    "\u039d\u0001\u0026\u0001\u039f\u0001\u0026\u0002\uffff\u000b\u0026\u0001"+
    "\uffff\u0003\u0026\u0001\u03af\u0001\u0026\u0001\u03af\u0002\u0026\u0001"+
    "\u018f\u0002\u0026\u0001\u03b5\u0001\u0026\u0001\u03b7\u0001\u0221\u0001"+
    "\u0026\u0001\u03b9\u0001\uffff\u0001\u019f\u0001\u0026\u0001\u03bb\u0002"+
    "\u0026\u0001\u03be\u0001\uffff\u0001\u0026\u0001\uffff\u0002\u0026\u0001"+
    "\u01b9\u0002\uffff\u0001\u0026\u0002\uffff\u0001\u0133\u0001\u03c4\u0001"+
    "\u0026\u0001\u03c6\u0004\u0026\u0001\u03cb\u0001\u0026\u0001\uffff\u0002"+
    "\u0026\u0001\uffff\u0007\u0026\u0001\u03d6\u0002\u0026\u0001\uffff\u0001"+
    "\u0026\u0001\uffff\u0001\u01ef\u0002\uffff\u0003\u0026\u0001\uffff\u0001"+
    "\u0026\u0001\uffff\u0001\u03e0\u0004\u0026\u0001\u03e5\u0006\u0026\u0001"+
    "\u020e\u0001\u03ec\u0001\u020e\u0001\uffff\u0001\u0214\u0001\u0218\u0003"+
    "\u0026\u0001\uffff\u0001\u0196\u0001\uffff\u0001\u03f0\u0001\uffff\u0001"+
    "\u0026\u0001\uffff\u0001\u0026\u0001\u03f0\u0001\uffff\u0002\u0026\u0001"+
    "\u03f5\u0001\u023f\u0001\u0026\u0001\uffff\u0001\u0026\u0001\uffff\u0002"+
    "\u0026\u0001\u03fb\u0001\u03fd\u0001\uffff\u0001\u0026\u0001\u03ff\u0001"+
    "\u0400\u0001\u03fb\u0001\u0026\u0001\u03fd\u0001\u0026\u0001\u0405\u0001"+
    "\u0157\u0001\u0026\u0001\uffff\u0001\u0157\u0008\u0026\u0001\uffff\u0003"+
    "\u0026\u0001\u0412\u0001\uffff\u0006\u0026\u0001\uffff\u0001\u0419\u0001"+
    "\u041a\u0001\u0026\u0001\uffff\u0004\u0026\u0001\uffff\u0001\u0420\u0001"+
    "\u0026\u0001\u0422\u0001\u0026\u0001\u03fb\u0001\uffff\u0001\u03fd\u0001"+
    "\uffff\u0001\u0026\u0002\uffff\u0001\u03fb\u0001\u0026\u0001\u03fd\u0001"+
    "\u0026\u0001\uffff\u0001\u0026\u0001\u0428\u0001\u0429\u0001\u042a\u0001"+
    "\u042b\u0007\u0026\u0001\uffff\u0005\u0026\u0001\u0439\u0002\uffff\u0001"+
    "\u043a\u0001\u043b\u0001\u043c\u0001\u043d\u0001\u043e\u0001\uffff\u0001"+
    "\u043f\u0001\uffff\u0004\u0026\u0001\u0444\u0004\uffff\u0006\u0026\u0001"+
    "\u044b\u0004\u0026\u0001\u0450\u0001\u0026\u0007\uffff\u0001\u0452\u0001"+
    "\u0026\u0001\u0454\u0001\u0026\u0001\uffff\u0005\u0026\u0001\u045b\u0001"+
    "\uffff\u0004\u0026\u0001\uffff\u0001\u0026\u0001\uffff\u0001\u0461\u0001"+
    "\uffff\u0001\u0461\u0002\u0026\u0001\u0464\u0001\u0465\u0001\u0466\u0001"+
    "\uffff\u0005\u0026\u0001\uffff\u0002\u0026\u0003\uffff\u0004\u0026\u0001"+
    "\u0472\u0003\u0026\u0001\u0476\u0002\u0026\u0001\uffff\u0003\u0026\u0001"+
    "\uffff\u000a\u0026\u0001\u0486\u0001\u0487\u0003\u0026\u0002\uffff\u0001"+
    "\u048b\u0002\u0026\u0001\uffff\u0002\u0026\u0001\u0490\u0001\u0491\u0002"+
    "\uffff",
    DFA44_eofS:
        "\u0492\uffff",
    DFA44_minS:
        "\u0001\u0009\u0001\u0062\u0001\u0072\u0001\u0030\u0001\u0061\u0001"+
    "\u0068\u0001\u0079\u0001\u0061\u0001\u0068\u0002\u0065\u0001\u006c\u0001"+
    "\u006e\u0001\u0061\u0001\u0065\u0002\u0066\u0001\u0061\u0001\u0065\u0002"+
    "\u0061\u0001\u006f\u0001\u0030\u0001\u0070\u0002\u006f\u0001\u0045\u0001"+
    "\u0075\u0003\u0065\u0001\u0053\u0001\u0068\u0002\u006e\u0001\u0061\u0002"+
    "\u0068\u0002\uffff\u0001\u002d\u0001\u002a\u0002\uffff\u0001\u002e\u0002"+
    "\uffff\u0001\u007b\u0001\u007d\u0006\uffff\u0001\u002a\u0002\u003d\u0001"+
    "\u003c\u0001\uffff\u0001\u003d\u0001\uffff\u0001\u007c\u0001\u0000\u0002"+
    "\uffff\u0001\u0073\u0001\u0030\u0001\u006c\u0001\u0064\u0001\u0073\u0001"+
    "\u0072\u0001\u0078\u0001\u0069\u0001\u0073\u0001\u0030\u0001\uffff\u0001"+
    "\u006c\u0001\u006e\u0001\u006f\u0001\u0072\u0001\u0075\u0001\u0061\u0001"+
    "\u006d\u0001\u0070\u0001\u0030\u0001\u0072\u0001\u006d\u0001\u0061\u0001"+
    "\u0065\u0001\u006d\u0001\u0063\u0001\u0073\u0001\u0030\u0001\u0064\u0001"+
    "\u0069\u0001\u0064\u0001\u0075\u0001\u0061\u0001\u0063\u0001\u0068\u0001"+
    "\u0063\u0001\u0072\u0001\u006e\u0001\u0030\u0001\u0064\u0001\u0065\u0001"+
    "\u0030\u0001\u0070\u0001\u0069\u0001\u0030\u0002\u006d\u0001\u0063\u0001"+
    "\u0069\u0002\u0064\u0002\u0074\u0001\u0030\u0001\u0065\u0001\u0030\u0001"+
    "\u0068\u0001\uffff\u0001\u0065\u0001\u006e\u0001\u0065\u0001\u0077\u0001"+
    "\u0065\u0001\u0079\u0001\u0044\u0002\u0061\u0002\u006c\u0001\u0061\u0001"+
    "\u006c\u0001\u0063\u0001\u0065\u0001\u0061\u0001\u0062\u0001\u0065\u0001"+
    "\u0070\u0001\u0069\u0001\u0064\u0001\u0065\u0001\u0069\u0001\u0072\u0001"+
    "\u0065\u0001\u0074\u0001\u0069\u0015\uffff\u0001\u003a\u0005\uffff\u0001"+
    "\u0030\u0001\uffff\u0003\u0030\u0001\u0075\u0001\u0061\u0001\u0030\u0001"+
    "\u006f\u0001\u0065\u0001\uffff\u0001\u0073\u0001\u0061\u0001\u006d\u0001"+
    "\u0030\u0001\u0065\u0001\u0074\u0001\u006e\u0002\u0065\u0001\u0074\u0002"+
    "\u0065\u0001\u006d\u0001\u0063\u0001\u006f\u0001\u006e\u0001\u0030\u0001"+
    "\u0061\u0001\u006d\u0001\u0063\u0002\u0072\u0001\u0030\u0001\u0074\u0001"+
    "\u0030\u0001\uffff\u0001\u0075\u0001\u0030\u0001\u0065\u0001\u006d\u0001"+
    "\u0030\u0001\u0061\u0001\u0075\u0001\u0061\u0002\u006c\u0001\u006d\u0001"+
    "\u0073\u0001\u0061\u0002\u0069\u0001\u0030\u0001\u0065\u0001\uffff\u0001"+
    "\u006c\u0001\u0075\u0001\u0072\u0001\u0030\u0001\u006c\u0002\u0074\u0001"+
    "\u0065\u0001\u0069\u0001\uffff\u0001\u0062\u0001\u006d\u0001\u0061\u0001"+
    "\u006e\u0001\u0064\u0001\u0030\u0001\u0068\u0001\u0030\u0001\uffff\u0001"+
    "\u0072\u0001\uffff\u0001\u0065\u0001\u0072\u0002\u0065\u0001\u0073\u0001"+
    "\u006f\u0001\u0065\u0002\u0063\u0002\u0030\u0001\u006e\u0001\u006c\u0001"+
    "\u0030\u0002\u0075\u0001\u0061\u0001\u0030\u0001\u0065\u0001\u0075\u0001"+
    "\u0030\u0001\u0065\u0001\u006c\u0001\u006f\u0001\u0065\u0001\u0066\u0001"+
    "\u0068\u0003\u0074\u0001\u0070\u0001\u006f\u0001\u0065\u0001\u006f\u0001"+
    "\u0030\u0001\u0073\u0001\u0071\u0001\u0030\u0001\u006e\u0001\u0068\u0001"+
    "\u006c\u0002\uffff\u0001\u0072\u0002\uffff\u0001\u0072\u0002\uffff\u0001"+
    "\u006d\u0001\u0079\u0001\u0043\u0001\u006c\u0001\uffff\u0001\u006d\u0001"+
    "\u005f\u0001\u0065\u0001\u006c\u0001\u0030\u0001\uffff\u0003\u0030\u0001"+
    "\u0065\u0001\u0073\u0001\u0030\u0001\u005f\u0001\u0067\u0001\u0030\u0001"+
    "\u0075\u0001\u0065\u0001\u0069\u0001\u0074\u0001\u0065\u0001\u006c\u0001"+
    "\u0065\u0001\u0067\u0001\uffff\u0001\u0072\u0001\u006f\u0001\u006c\u0001"+
    "\u0065\u0001\u0075\u0001\u0074\u0001\u0072\u0003\u0065\u0001\u006e\u0001"+
    "\uffff\u0001\u0072\u0001\uffff\u0001\u0063\u0001\u006e\u0001\u0030\u0001"+
    "\u0069\u0001\uffff\u0001\u006e\u0001\u0072\u0001\u006c\u0001\u0030\u0001"+
    "\u0075\u0001\u0070\u0001\u0074\u0001\u0030\u0001\u006e\u0002\u006c\u0001"+
    "\u0065\u0001\u0072\u0001\u0069\u0001\u0063\u0001\u0061\u0001\uffff\u0002"+
    "\u0069\u0001\u0061\u0001\u0072\u0001\u006f\u0001\u006e\u0001\u006f\u0001"+
    "\u0072\u0001\u0075\u0001\u0064\u0001\u0061\u0001\u006c\u0001\u0074\u0002"+
    "\u006c\u0001\u0073\u0001\uffff\u0001\u0030\u0001\uffff\u0001\u0030\u0001"+
    "\u0072\u0001\u0030\u0001\u006e\u0001\u0072\u0001\u0030\u0001\u0066\u0001"+
    "\u0072\u0001\u0030\u0001\u0066\u0001\u0065\u0001\u0069\u0002\uffff\u0001"+
    "\u0074\u0001\u0069\u0001\u0073\u0001\u0065\u0001\u0030\u0001\uffff\u0001"+
    "\u0072\u0001\u0063\u0001\u0074\u0001\uffff\u0002\u0061\u0001\u0065\u0001"+
    "\u0069\u0001\uffff\u0001\u0030\u0001\u0069\u0002\u0072\u0001\u006d\u0003"+
    "\u0030\u0001\u0069\u0001\u0079\u0001\u006f\u0001\u0072\u0001\u0065\u0001"+
    "\u0030\u0001\u006e\u0001\u0075\u0001\u0030\u0001\u0065\u0001\u0074\u0001"+
    "\uffff\u0001\u0030\u0001\u0075\u0001\u0030\u0001\u0061\u0001\u0030\u0001"+
    "\uffff\u0001\u0030\u0001\u0065\u0001\u006f\u0001\u0065\u0001\u0064\u0001"+
    "\u006e\u0001\u0065\u0001\u0030\u0001\u006f\u0001\u0061\u0001\u0069\u0001"+
    "\u0030\u0001\u0043\u0001\u0030\u0001\u0069\u0003\uffff\u0002\u0030\u0001"+
    "\uffff\u0001\u0050\u0001\u006f\u0001\uffff\u0001\u0074\u0001\u0070\u0002"+
    "\u0072\u0001\u006e\u0001\u006c\u0001\u0073\u0001\u0069\u0001\u0073\u0001"+
    "\u006e\u0001\u0065\u0001\u0075\u0001\u0070\u0001\u006e\u0001\u0072\u0001"+
    "\u0061\u0001\u006e\u0001\u0073\u0001\u0061\u0001\u0065\u0001\u0069\u0001"+
    "\u0074\u0001\u0065\u0001\uffff\u0001\u006e\u0001\u0063\u0001\u0065\u0001"+
    "\u0069\u0001\u0061\u0001\uffff\u0001\u0064\u0001\u006c\u0001\u0061\u0001"+
    "\uffff\u0001\u0063\u0001\u0069\u0001\u0079\u0001\u0074\u0001\u0061\u0001"+
    "\u0063\u0002\u0074\u0001\u0065\u0001\u0061\u0001\u006e\u0001\u0073\u0001"+
    "\u0064\u0001\u0030\u0001\u0074\u0001\u006f\u0001\u0062\u0001\u0061\u0002"+
    "\u0030\u0001\u0061\u0002\u0065\u0001\u0030\u0001\uffff\u0001\u0074\u0001"+
    "\uffff\u0001\u0077\u0001\u0074\u0002\u0073\u0001\u0072\u0001\uffff\u0001"+
    "\u0030\u0001\u0073\u0001\u0064\u0001\uffff\u0001\u0030\u0001\u0072\u0001"+
    "\u0073\u0001\u0069\u0001\u007a\u0001\u0069\u0001\u0063\u0001\u0072\u0001"+
    "\uffff\u0001\u0073\u0001\u0074\u0001\u0065\u0001\u0074\u0001\u0063\u0001"+
    "\u0073\u0001\u0072\u0001\uffff\u0001\u007a\u0001\u0064\u0001\u0073\u0001"+
    "\u0062\u0003\uffff\u0001\u0063\u0001\u0070\u0001\u0073\u0001\u0065\u0001"+
    "\u0030\u0001\u0046\u0001\u0030\u0001\u0065\u0001\uffff\u0001\u0072\u0001"+
    "\u0065\u0001\uffff\u0001\u0065\u0001\u0062\u0002\uffff\u0001\u0030\u0001"+
    "\u0075\u0001\u0030\u0001\u0075\u0001\u0030\u0001\u0061\u0001\u0030\u0001"+
    "\uffff\u0001\u0064\u0001\u0072\u0001\u0061\u0001\uffff\u0001\u0061\u0001"+
    "\u007a\u0002\uffff\u0002\u0072\u0001\u0061\u0001\u0074\u0001\u006d\u0001"+
    "\u0061\u0001\u0074\u0001\u0061\u0001\u0070\u0001\u006e\u0002\u0030\u0001"+
    "\u006d\u0001\u0073\u0001\u0074\u0001\u0063\u0001\u0061\u0001\u0064\u0001"+
    "\u0074\u0001\u0070\u0002\u0073\u0001\u0074\u0001\u0062\u0001\u0069\u0001"+
    "\u0073\u0001\u0074\u0001\u0061\u0001\u0065\u0001\u0073\u0002\u0074\u0001"+
    "\u0065\u0001\u0061\u0001\u006e\u0001\u0030\u0001\u0065\u0001\u0074\u0002"+
    "\u0030\u0001\u006c\u0002\u0069\u0001\u0065\u0001\u0073\u0001\u006c\u0001"+
    "\u0074\u0001\u0065\u0001\u0075\u0001\uffff\u0001\u005f\u0001\u0070\u0001"+
    "\u0073\u0001\u0030\u0002\uffff\u0001\u0069\u0001\u0030\u0001\u0064\u0001"+
    "\uffff\u0003\u0069\u0001\u0030\u0001\u0065\u0001\u0076\u0001\uffff\u0001"+
    "\u0065\u0001\u0075\u0001\u005f\u0001\u0074\u0001\u0030\u0001\u0066\u0001"+
    "\u0061\u0001\u0067\u0001\u0074\u0001\u0065\u0002\u0069\u0001\u0064\u0001"+
    "\u0030\u0003\u0065\u0001\u0061\u0001\u0030\u0001\u0069\u0001\u0065\u0001"+
    "\u0030\u0001\u0065\u0001\u0069\u0001\u006d\u0001\u0030\u0001\u0061\u0001"+
    "\uffff\u0001\u0030\u0002\u0073\u0001\u0030\u0001\u006c\u0001\uffff\u0001"+
    "\u0074\u0001\uffff\u0001\u006d\u0001\u0074\u0001\uffff\u0001\u0065\u0001"+
    "\u0030\u0001\u0072\u0001\u0073\u0001\u0061\u0001\u006f\u0001\u0069\u0001"+
    "\u0074\u0002\u0030\u0002\u0069\u0001\u0072\u0001\u006f\u0001\u0067\u0001"+
    "\uffff\u0001\u0065\u0001\u0069\u0001\u0030\u0001\u0074\u0003\u0069\u0001"+
    "\u006f\u0001\u0069\u0001\u0030\u0001\u0069\u0001\u0075\u0001\u006f\u0001"+
    "\u0030\u0001\u0069\u0001\u0074\u0001\u0064\u0001\u0030\u0001\u0079\u0001"+
    "\u0065\u0001\u0064\u0001\u0072\u0001\u0074\u0001\uffff\u0001\u006d\u0001"+
    "\u0079\u0002\uffff\u0001\u0069\u0001\u0074\u0001\u0076\u0002\u0030\u0002"+
    "\u0069\u0002\u0063\u0001\u0069\u0002\u0065\u0001\uffff\u0001\u006e\u0001"+
    "\uffff\u0001\u0030\u0001\u006f\u0001\u0073\u0001\u006f\u0001\uffff\u0001"+
    "\u0074\u0001\u0065\u0001\u0074\u0001\u0072\u0001\u0066\u0001\u0079\u0001"+
    "\uffff\u0001\u0069\u0001\u0074\u0001\u0064\u0001\u006e\u0002\u0073\u0001"+
    "\u0076\u0001\u006f\u0001\u0030\u0001\uffff\u0001\u0073\u0001\u006e\u0001"+
    "\u0073\u0001\u0074\u0001\uffff\u0001\u0076\u0001\u0072\u0001\uffff\u0001"+
    "\u0030\u0001\u0074\u0001\u0030\u0001\u006d\u0001\uffff\u0001\u0061\u0001"+
    "\u0030\u0001\u0065\u0002\u0030\u0001\u0069\u0002\u0030\u0001\uffff\u0001"+
    "\u0079\u0001\u0065\u0001\u0074\u0001\u0064\u0001\u0063\u0001\u0069\u0002"+
    "\uffff\u0001\u006e\u0001\u006f\u0001\u0079\u0001\u006e\u0001\u0030\u0001"+
    "\u006e\u0001\u006f\u0001\uffff\u0001\u0030\u0001\u006e\u0001\u0063\u0001"+
    "\u006f\u0002\u006e\u0001\uffff\u0001\u006f\u0001\u0074\u0001\u006e\u0001"+
    "\u006f\u0001\u0069\u0001\u0030\u0001\u0065\u0001\uffff\u0001\u0030\u0001"+
    "\u0073\u0002\u0030\u0001\u0069\u0001\u0065\u0001\u0030\u0001\u007a\u0001"+
    "\u0030\u0001\u0065\u0002\uffff\u0001\u007a\u0001\u0061\u0001\u0074\u0001"+
    "\u0065\u0001\u006e\u0001\u0072\u0001\u0075\u0001\u0072\u0001\u0074\u0001"+
    "\u0072\u0001\u0069\u0001\uffff\u0001\u006e\u0001\u0065\u0001\u006e\u0001"+
    "\u0030\u0001\u0073\u0001\u0030\u0001\u0065\u0001\u006f\u0001\u0030\u0001"+
    "\u0065\u0001\u0069\u0001\u0030\u0001\u0073\u0002\u0030\u0001\u0065\u0001"+
    "\u0030\u0001\uffff\u0001\u0030\u0001\u0074\u0001\u0030\u0001\u0069\u0001"+
    "\u0065\u0001\u0030\u0001\uffff\u0001\u0069\u0001\uffff\u0001\u0069\u0001"+
    "\u006c\u0001\u0030\u0002\uffff\u0001\u0076\u0002\uffff\u0002\u0030\u0001"+
    "\u0069\u0001\u0030\u0001\u0061\u0001\u0076\u0001\u0074\u0001\u006e\u0001"+
    "\u0030\u0001\u0064\u0001\uffff\u0001\u0074\u0001\u006e\u0001\uffff\u0002"+
    "\u0074\u0001\u006e\u0001\u0064\u0001\u0067\u0001\u006e\u0001\u0069\u0001"+
    "\u0030\u0001\u006e\u0001\u006f\u0001\uffff\u0001\u006e\u0001\uffff\u0001"+
    "\u0030\u0002\uffff\u0001\u0061\u0001\u006e\u0001\u0046\u0001\uffff\u0001"+
    "\u0061\u0001\uffff\u0001\u0030\u0001\u0061\u0001\u0074\u0001\u0069\u0001"+
    "\u0073\u0001\u0030\u0001\u006f\u0001\u0062\u0002\u005f\u0001\u0069\u0001"+
    "\u006e\u0003\u0030\u0001\uffff\u0002\u0030\u0002\u0072\u0001\u006f\u0001"+
    "\uffff\u0001\u0030\u0001\uffff\u0001\u0030\u0001\uffff\u0001\u0065\u0001"+
    "\uffff\u0001\u006f\u0001\u0030\u0001\uffff\u0001\u006f\u0001\u006c\u0002"+
    "\u0030\u0001\u0065\u0001\uffff\u0001\u006f\u0001\uffff\u0001\u006c\u0001"+
    "\u0069\u0002\u0030\u0001\uffff\u0001\u0065\u0003\u0030\u0001\u0069\u0001"+
    "\u0030\u0001\u0065\u0002\u0030\u0001\u006f\u0001\uffff\u0001\u0030\u0001"+
    "\u006e\u0001\u0074\u0001\u006c\u0001\u0074\u0001\u0069\u0001\u006e\u0001"+
    "\u0074\u0001\u0063\u0001\uffff\u0001\u0074\u0001\u0069\u0001\u006f\u0001"+
    "\u0030\u0001\uffff\u0001\u0070\u0002\u0073\u0001\u006f\u0001\u006e\u0001"+
    "\u0067\u0001\uffff\u0002\u0030\u0001\u006e\u0001\uffff\u0001\u0064\u0002"+
    "\u006e\u0001\u0079\u0001\uffff\u0001\u0030\u0001\u006e\u0001\u0030\u0001"+
    "\u0074\u0001\u0030\u0001\uffff\u0001\u0030\u0001\uffff\u0001\u006e\u0002"+
    "\uffff\u0001\u0030\u0001\u006f\u0001\u0030\u0001\u006e\u0001\uffff\u0001"+
    "\u006e\u0004\u0030\u0001\u006e\u0002\u0069\u0001\u0061\u0001\u0069\u0001"+
    "\u006f\u0001\u006e\u0001\uffff\u0002\u0065\u0001\u0075\u0001\u0066\u0001"+
    "\u0067\u0001\u0030\u0002\uffff\u0005\u0030\u0001\uffff\u0001\u0030\u0001"+
    "\uffff\u0001\u0079\u0001\u0063\u0001\u006e\u0001\u0063\u0001\u0030\u0004"+
    "\uffff\u0001\u0061\u0001\u0074\u0001\u006f\u0001\u0073\u0001\u006f\u0001"+
    "\u006e\u0001\u0030\u0001\u0072\u0001\u0074\u0001\u0072\u0001\u0062\u0001"+
    "\u0030\u0001\u005f\u0007\uffff\u0001\u0030\u0001\u0065\u0001\u0030\u0001"+
    "\u0065\u0001\uffff\u0001\u006c\u0001\u0069\u0001\u006e\u0001\u0065\u0001"+
    "\u006e\u0001\u0030\u0001\uffff\u0002\u005f\u0001\u0069\u0001\u0073\u0001"+
    "\uffff\u0001\u006f\u0001\uffff\u0001\u0030\u0001\uffff\u0001\u0030\u0001"+
    "\u0069\u0001\u0061\u0003\u0030\u0001\uffff\u0001\u0073\u0001\u006f\u0001"+
    "\u006e\u0001\u0065\u0001\u0066\u0001\uffff\u0001\u007a\u0001\u006c\u0003"+
    "\uffff\u0001\u0075\u0001\u0066\u0001\u0067\u0001\u0074\u0001\u0030\u0001"+
    "\u0061\u0001\u0069\u0001\u0062\u0001\u0030\u0002\u005f\u0001\uffff\u0001"+
    "\u0074\u0001\u007a\u0001\u0073\u0001\uffff\u0002\u006f\u0001\u0069\u0001"+
    "\u0061\u0001\u0065\u0002\u0066\u0001\u006f\u0002\u0074\u0002\u0030\u0001"+
    "\u006e\u0001\u0069\u0001\u005f\u0002\uffff\u0001\u0030\u0002\u006f\u0001"+
    "\uffff\u0001\u006e\u0001\u0066\u0002\u0030\u0002\uffff",
    DFA44_maxS:
        "\u0001\u007e\u0001\u0073\u0001\u0078\u0001\u007a\u0001\u0072\u0002"+
    "\u0079\u0003\u006f\u0001\u0065\u0001\u0078\u0001\u006e\u0001\u006f\u0001"+
    "\u0065\u0001\u0074\u0001\u0073\u0001\u0061\u0002\u006f\u0001\u0061\u0001"+
    "\u006f\u0001\u007a\u0001\u0070\u0001\u0072\u0001\u0074\u0001\u0045\u0002"+
    "\u0075\u0001\u0065\u0002\u0075\u0001\u0079\u0001\u0073\u0001\u006e\u0001"+
    "\u0061\u0001\u0069\u0001\u0068\u0002\uffff\u0001\u003e\u0001\u002a\u0002"+
    "\uffff\u0001\u002e\u0002\uffff\u0001\u007b\u0001\u007d\u0006\uffff\u0001"+
    "\u002a\u0001\u003d\u0001\u003e\u0001\u003d\u0001\uffff\u0001\u003d\u0001"+
    "\uffff\u0001\u007c\u0001\uffff\u0002\uffff\u0001\u0073\u0001\u007a\u0001"+
    "\u0074\u0001\u0064\u0001\u0073\u0001\u0072\u0001\u0078\u0001\u0069\u0001"+
    "\u0073\u0001\u007a\u0001\uffff\u0001\u006c\u0001\u006e\u0001\u006f\u0001"+
    "\u0072\u0001\u0075\u0001\u0065\u0001\u006d\u0001\u0070\u0001\u007a\u0001"+
    "\u0074\u0001\u0072\u0001\u0061\u0002\u0072\u0001\u0066\u0001\u0076\u0001"+
    "\u007a\u0001\u0066\u0002\u0073\u0001\u0075\u0001\u0061\u0001\u0069\u0001"+
    "\u0068\u0001\u006d\u0001\u0072\u0001\u006e\u0001\u007a\u0001\u0070\u0001"+
    "\u0065\u0001\u007a\u0001\u0070\u0001\u0074\u0001\u007a\u0002\u006d\u0001"+
    "\u0063\u0001\u0069\u0002\u0064\u0002\u0074\u0001\u007a\u0001\u0065\u0001"+
    "\u007a\u0001\u0068\u0001\uffff\u0001\u0065\u0001\u0077\u0001\u006f\u0001"+
    "\u0077\u0001\u006f\u0001\u0079\u0001\u0044\u0001\u0061\u0001\u0073\u0002"+
    "\u006c\u0001\u006d\u0001\u006c\u0001\u0063\u0001\u0065\u0001\u0061\u0001"+
    "\u0070\u0001\u0065\u0001\u0070\u0001\u0069\u0001\u0064\u0001\u0065\u0001"+
    "\u0069\u0001\u0072\u0001\u0065\u0001\u0074\u0001\u0069\u0015\uffff\u0001"+
    "\u003a\u0005\uffff\u0001\u007a\u0001\uffff\u0003\u007a\u0001\u0075\u0001"+
    "\u0061\u0001\u007a\u0001\u006f\u0001\u0065\u0001\uffff\u0001\u0073\u0001"+
    "\u0061\u0001\u006d\u0001\u007a\u0001\u0065\u0001\u0074\u0001\u0072\u0002"+
    "\u0065\u0001\u0074\u0002\u0065\u0001\u006d\u0001\u0076\u0001\u0072\u0001"+
    "\u006e\u0001\u007a\u0001\u0061\u0001\u0070\u0001\u0076\u0002\u0072\u0001"+
    "\u007a\u0001\u0074\u0001\u007a\u0001\uffff\u0001\u0075\u0001\u007a\u0001"+
    "\u0065\u0001\u006d\u0001\u007a\u0001\u0061\u0001\u0075\u0001\u0061\u0002"+
    "\u006c\u0001\u006d\u0001\u0074\u0001\u0061\u0002\u0069\u0001\u007a\u0001"+
    "\u0065\u0001\uffff\u0001\u006c\u0001\u0075\u0001\u0072\u0001\u007a\u0001"+
    "\u006c\u0002\u0074\u0001\u0072\u0001\u0073\u0001\uffff\u0001\u0062\u0001"+
    "\u006d\u0001\u0061\u0001\u006e\u0001\u0064\u0001\u007a\u0001\u0068\u0001"+
    "\u007a\u0001\uffff\u0001\u0072\u0001\uffff\u0001\u0065\u0001\u0072\u0002"+
    "\u0065\u0001\u0073\u0001\u006f\u0001\u0065\u0001\u0070\u0001\u0063\u0002"+
    "\u007a\u0001\u006e\u0001\u0073\u0001\u007a\u0002\u0075\u0001\u0061\u0001"+
    "\u007a\u0001\u0072\u0001\u0075\u0001\u007a\u0001\u0065\u0001\u006c\u0001"+
    "\u0075\u0001\u0065\u0001\u0066\u0001\u0068\u0003\u0074\u0001\u0070\u0001"+
    "\u0072\u0001\u0065\u0001\u0076\u0001\u007a\u0001\u0073\u0001\u0074\u0001"+
    "\u007a\u0001\u0072\u0001\u0068\u0001\u006c\u0002\uffff\u0001\u0072\u0002"+
    "\uffff\u0001\u0072\u0002\uffff\u0001\u006d\u0001\u0079\u0001\u0056\u0001"+
    "\u006c\u0001\uffff\u0001\u006d\u0001\u005f\u0001\u0065\u0001\u006c\u0001"+
    "\u007a\u0001\uffff\u0003\u007a\u0001\u0065\u0001\u0073\u0001\u007a\u0001"+
    "\u005f\u0001\u0067\u0001\u007a\u0001\u0075\u0001\u0065\u0001\u0069\u0001"+
    "\u0074\u0001\u0065\u0001\u006c\u0001\u0065\u0001\u0067\u0001\uffff\u0001"+
    "\u0072\u0001\u006f\u0002\u006c\u0001\u0075\u0001\u0074\u0001\u0072\u0003"+
    "\u0065\u0001\u006e\u0001\uffff\u0001\u0072\u0001\uffff\u0001\u0063\u0001"+
    "\u006e\u0001\u007a\u0001\u0069\u0001\uffff\u0001\u006e\u0001\u0072\u0001"+
    "\u006c\u0001\u007a\u0001\u0075\u0001\u0070\u0001\u0074\u0001\u007a\u0001"+
    "\u006e\u0002\u006c\u0001\u0065\u0001\u0072\u0001\u0069\u0001\u0063\u0001"+
    "\u0061\u0001\uffff\u0002\u0069\u0001\u0061\u0001\u0072\u0001\u006f\u0001"+
    "\u006e\u0001\u006f\u0001\u0072\u0001\u0075\u0001\u0064\u0001\u0061\u0001"+
    "\u006c\u0001\u0074\u0002\u006c\u0001\u0073\u0001\uffff\u0001\u007a\u0001"+
    "\uffff\u0001\u007a\u0001\u0072\u0001\u007a\u0001\u006e\u0001\u0072\u0001"+
    "\u007a\u0001\u0066\u0001\u0072\u0001\u007a\u0001\u0066\u0001\u0065\u0001"+
    "\u0069\u0002\uffff\u0001\u0074\u0001\u0069\u0001\u0073\u0001\u0065\u0001"+
    "\u007a\u0001\uffff\u0001\u0072\u0001\u0063\u0001\u0074\u0001\uffff\u0002"+
    "\u0061\u0001\u0065\u0001\u0069\u0001\uffff\u0001\u007a\u0001\u0069\u0002"+
    "\u0072\u0001\u006d\u0003\u007a\u0001\u0069\u0001\u0079\u0001\u006f\u0001"+
    "\u0072\u0001\u0065\u0001\u007a\u0001\u006e\u0001\u0075\u0001\u007a\u0001"+
    "\u0065\u0001\u0074\u0001\uffff\u0001\u007a\u0001\u0075\u0001\u007a\u0001"+
    "\u0061\u0001\u007a\u0001\uffff\u0001\u007a\u0001\u0065\u0001\u006f\u0001"+
    "\u0065\u0001\u0064\u0001\u0073\u0001\u0065\u0001\u007a\u0001\u006f\u0001"+
    "\u0061\u0001\u0069\u0001\u007a\u0001\u0043\u0001\u007a\u0001\u0069\u0003"+
    "\uffff\u0002\u007a\u0001\uffff\u0001\u0050\u0001\u006f\u0001\uffff\u0001"+
    "\u0074\u0001\u0070\u0002\u0072\u0001\u006e\u0001\u006c\u0001\u0073\u0001"+
    "\u0069\u0001\u0073\u0001\u006e\u0001\u0065\u0001\u0075\u0001\u0070\u0001"+
    "\u006e\u0001\u0072\u0001\u0061\u0001\u006e\u0001\u0073\u0001\u0061\u0002"+
    "\u0069\u0001\u0074\u0001\u0069\u0001\uffff\u0001\u006e\u0001\u0063\u0001"+
    "\u0065\u0001\u0069\u0001\u0061\u0001\uffff\u0001\u0064\u0001\u006c\u0001"+
    "\u0073\u0001\uffff\u0001\u0063\u0001\u0069\u0001\u0079\u0001\u0074\u0001"+
    "\u0061\u0001\u0063\u0002\u0074\u0001\u0065\u0001\u0061\u0001\u006e\u0001"+
    "\u0073\u0001\u0064\u0001\u007a\u0001\u0074\u0001\u006f\u0001\u0062\u0001"+
    "\u0061\u0002\u007a\u0001\u0061\u0002\u0065\u0001\u007a\u0001\uffff\u0001"+
    "\u0074\u0001\uffff\u0001\u0077\u0001\u0074\u0002\u0073\u0001\u0072\u0001"+
    "\uffff\u0001\u007a\u0001\u0073\u0001\u0064\u0001\uffff\u0001\u007a\u0001"+
    "\u0072\u0001\u0073\u0001\u0069\u0001\u007a\u0001\u0069\u0001\u0063\u0001"+
    "\u0072\u0001\uffff\u0001\u0073\u0001\u0074\u0001\u0065\u0001\u0074\u0001"+
    "\u0063\u0001\u0073\u0001\u0072\u0001\uffff\u0001\u007a\u0001\u0064\u0001"+
    "\u0073\u0001\u0062\u0003\uffff\u0001\u0063\u0001\u0070\u0001\u0073\u0001"+
    "\u0079\u0001\u007a\u0001\u0046\u0001\u007a\u0001\u0065\u0001\uffff\u0001"+
    "\u0072\u0001\u0065\u0001\uffff\u0001\u0065\u0001\u0062\u0002\uffff\u0001"+
    "\u007a\u0001\u0075\u0001\u007a\u0001\u0075\u0001\u007a\u0001\u0061\u0001"+
    "\u007a\u0001\uffff\u0001\u0064\u0001\u0072\u0001\u0061\u0001\uffff\u0001"+
    "\u0061\u0001\u007a\u0002\uffff\u0002\u0072\u0001\u0061\u0001\u0074\u0001"+
    "\u006d\u0001\u0061\u0001\u0074\u0001\u0061\u0001\u0070\u0001\u006e\u0002"+
    "\u007a\u0001\u006d\u0001\u0073\u0001\u0074\u0001\u0063\u0001\u0061\u0001"+
    "\u0064\u0001\u0074\u0001\u0070\u0002\u0073\u0001\u0074\u0001\u0062\u0001"+
    "\u0069\u0001\u0073\u0001\u0074\u0001\u0061\u0001\u0065\u0001\u0073\u0002"+
    "\u0074\u0001\u0065\u0001\u0061\u0001\u006e\u0001\u007a\u0001\u0065\u0001"+
    "\u0074\u0002\u007a\u0001\u006c\u0002\u0069\u0001\u0065\u0001\u0073\u0001"+
    "\u006c\u0001\u0074\u0001\u0065\u0001\u0075\u0001\uffff\u0001\u005f\u0001"+
    "\u0070\u0001\u0073\u0001\u007a\u0002\uffff\u0001\u0069\u0001\u007a\u0001"+
    "\u0064\u0001\uffff\u0003\u0069\u0001\u007a\u0001\u0065\u0001\u0076\u0001"+
    "\uffff\u0001\u0065\u0001\u0075\u0001\u005f\u0001\u0074\u0001\u007a\u0001"+
    "\u0066\u0001\u0065\u0001\u0067\u0001\u0074\u0001\u0065\u0002\u0069\u0001"+
    "\u0064\u0001\u007a\u0003\u0065\u0001\u0061\u0001\u007a\u0001\u0069\u0001"+
    "\u0065\u0001\u007a\u0001\u0065\u0001\u0069\u0001\u006d\u0001\u007a\u0001"+
    "\u0061\u0001\uffff\u0001\u007a\u0002\u0073\u0001\u007a\u0001\u006c\u0001"+
    "\uffff\u0001\u0074\u0001\uffff\u0001\u006d\u0001\u0074\u0001\uffff\u0001"+
    "\u0065\u0001\u007a\u0001\u0072\u0001\u0073\u0001\u0061\u0001\u006f\u0001"+
    "\u0069\u0001\u0074\u0002\u007a\u0002\u0069\u0001\u0072\u0001\u006f\u0001"+
    "\u0067\u0001\uffff\u0001\u0065\u0001\u0069\u0001\u007a\u0001\u0074\u0003"+
    "\u0069\u0001\u006f\u0001\u0069\u0001\u007a\u0001\u0069\u0001\u0075\u0001"+
    "\u006f\u0001\u007a\u0001\u0069\u0001\u0074\u0001\u006d\u0001\u007a\u0001"+
    "\u0079\u0001\u0065\u0001\u0064\u0001\u0072\u0001\u0074\u0001\uffff\u0001"+
    "\u006d\u0001\u0079\u0002\uffff\u0001\u0069\u0001\u0074\u0001\u0076\u0002"+
    "\u007a\u0002\u0069\u0002\u0063\u0001\u0073\u0001\u0065\u0001\u0074\u0001"+
    "\uffff\u0001\u006e\u0001\uffff\u0001\u007a\u0001\u006f\u0001\u0073\u0001"+
    "\u006f\u0001\uffff\u0001\u0074\u0001\u0065\u0001\u0074\u0001\u0072\u0001"+
    "\u0066\u0001\u0079\u0001\uffff\u0001\u0069\u0001\u0074\u0001\u0064\u0001"+
    "\u006e\u0002\u0073\u0001\u0076\u0001\u006f\u0001\u007a\u0001\uffff\u0001"+
    "\u0073\u0001\u006e\u0001\u0073\u0001\u0074\u0001\uffff\u0001\u0076\u0001"+
    "\u0072\u0001\uffff\u0001\u007a\u0001\u0074\u0001\u007a\u0001\u006d\u0001"+
    "\uffff\u0001\u0061\u0001\u007a\u0001\u0065\u0002\u007a\u0001\u0069\u0002"+
    "\u007a\u0001\uffff\u0001\u0079\u0001\u0065\u0001\u0074\u0001\u0064\u0001"+
    "\u0063\u0001\u0069\u0002\uffff\u0001\u006e\u0001\u006f\u0001\u0079\u0001"+
    "\u006e\u0001\u007a\u0001\u006e\u0001\u006f\u0001\uffff\u0001\u007a\u0001"+
    "\u006e\u0001\u0063\u0001\u006f\u0002\u006e\u0001\uffff\u0001\u006f\u0001"+
    "\u0074\u0001\u006e\u0001\u006f\u0001\u0069\u0001\u007a\u0001\u0065\u0001"+
    "\uffff\u0001\u007a\u0001\u0073\u0002\u007a\u0001\u0069\u0001\u0065\u0003"+
    "\u007a\u0001\u0065\u0002\uffff\u0001\u007a\u0001\u0061\u0001\u0074\u0001"+
    "\u0065\u0001\u006e\u0001\u0072\u0001\u0075\u0001\u0072\u0001\u0074\u0001"+
    "\u0072\u0001\u0069\u0001\uffff\u0001\u006e\u0001\u0065\u0001\u006e\u0001"+
    "\u007a\u0001\u0073\u0001\u007a\u0001\u0065\u0001\u006f\u0001\u007a\u0001"+
    "\u0065\u0001\u0069\u0001\u007a\u0001\u0073\u0002\u007a\u0001\u0065\u0001"+
    "\u007a\u0001\uffff\u0001\u007a\u0001\u0074\u0001\u007a\u0001\u0069\u0001"+
    "\u0065\u0001\u007a\u0001\uffff\u0001\u0069\u0001\uffff\u0001\u0069\u0001"+
    "\u006c\u0001\u007a\u0002\uffff\u0001\u0076\u0002\uffff\u0002\u007a\u0001"+
    "\u0069\u0001\u007a\u0001\u0061\u0001\u0076\u0001\u0074\u0001\u006e\u0001"+
    "\u007a\u0001\u0064\u0001\uffff\u0001\u0074\u0001\u006e\u0001\uffff\u0002"+
    "\u0074\u0001\u006e\u0001\u0064\u0001\u0067\u0001\u006e\u0001\u0069\u0001"+
    "\u007a\u0001\u006e\u0001\u006f\u0001\uffff\u0001\u006e\u0001\uffff\u0001"+
    "\u007a\u0002\uffff\u0001\u0061\u0001\u006e\u0001\u0049\u0001\uffff\u0001"+
    "\u0061\u0001\uffff\u0001\u007a\u0001\u0061\u0001\u0074\u0001\u0069\u0001"+
    "\u0073\u0001\u007a\u0001\u006f\u0001\u0062\u0002\u005f\u0001\u0069\u0001"+
    "\u006e\u0003\u007a\u0001\uffff\u0002\u007a\u0002\u0072\u0001\u006f\u0001"+
    "\uffff\u0001\u007a\u0001\uffff\u0001\u007a\u0001\uffff\u0001\u0065\u0001"+
    "\uffff\u0001\u006f\u0001\u007a\u0001\uffff\u0001\u006f\u0001\u006c\u0002"+
    "\u007a\u0001\u0065\u0001\uffff\u0001\u006f\u0001\uffff\u0001\u006c\u0001"+
    "\u0069\u0002\u007a\u0001\uffff\u0001\u0065\u0003\u007a\u0001\u0069\u0001"+
    "\u007a\u0001\u0065\u0002\u007a\u0001\u006f\u0001\uffff\u0001\u007a\u0001"+
    "\u006e\u0001\u0074\u0001\u006c\u0001\u0074\u0001\u0069\u0001\u006e\u0001"+
    "\u0074\u0001\u0063\u0001\uffff\u0001\u0074\u0001\u0069\u0001\u006f\u0001"+
    "\u007a\u0001\uffff\u0001\u0070\u0002\u0073\u0001\u006f\u0001\u006e\u0001"+
    "\u0067\u0001\uffff\u0002\u007a\u0001\u006e\u0001\uffff\u0001\u0064\u0002"+
    "\u006e\u0001\u0079\u0001\uffff\u0001\u007a\u0001\u006e\u0001\u007a\u0001"+
    "\u0074\u0001\u007a\u0001\uffff\u0001\u007a\u0001\uffff\u0001\u006e\u0002"+
    "\uffff\u0001\u007a\u0001\u006f\u0001\u007a\u0001\u006e\u0001\uffff\u0001"+
    "\u006e\u0004\u007a\u0001\u006e\u0002\u0069\u0001\u0061\u0001\u0069\u0001"+
    "\u006f\u0001\u006e\u0001\uffff\u0001\u0065\u0001\u0074\u0001\u0075\u0001"+
    "\u0066\u0001\u0067\u0001\u007a\u0002\uffff\u0005\u007a\u0001\uffff\u0001"+
    "\u007a\u0001\uffff\u0001\u0079\u0001\u0063\u0001\u006e\u0001\u0063\u0001"+
    "\u007a\u0004\uffff\u0001\u0061\u0001\u0074\u0001\u006f\u0001\u0073\u0001"+
    "\u006f\u0001\u006e\u0001\u007a\u0001\u0072\u0001\u0074\u0001\u0072\u0001"+
    "\u0062\u0001\u007a\u0001\u005f\u0007\uffff\u0001\u007a\u0001\u0065\u0001"+
    "\u007a\u0001\u0065\u0001\uffff\u0001\u006c\u0001\u0069\u0001\u006e\u0001"+
    "\u0065\u0001\u006e\u0001\u007a\u0001\uffff\u0002\u005f\u0001\u0069\u0001"+
    "\u0073\u0001\uffff\u0001\u006f\u0001\uffff\u0001\u007a\u0001\uffff\u0001"+
    "\u007a\u0001\u0069\u0001\u0061\u0003\u007a\u0001\uffff\u0001\u0073\u0001"+
    "\u006f\u0001\u006e\u0001\u0065\u0001\u0066\u0001\uffff\u0001\u007a\u0001"+
    "\u006c\u0003\uffff\u0001\u0075\u0001\u0066\u0001\u0067\u0001\u0074\u0001"+
    "\u007a\u0001\u0061\u0001\u0069\u0001\u0062\u0001\u007a\u0002\u005f\u0001"+
    "\uffff\u0001\u0074\u0001\u007a\u0001\u0073\u0001\uffff\u0002\u006f\u0001"+
    "\u0069\u0001\u0061\u0001\u0065\u0002\u0066\u0001\u006f\u0002\u0074\u0002"+
    "\u007a\u0001\u006e\u0001\u0069\u0001\u005f\u0002\uffff\u0001\u007a\u0002"+
    "\u006f\u0001\uffff\u0001\u006e\u0001\u0066\u0002\u007a\u0002\uffff",
    DFA44_acceptS:
        "\u0026\uffff\u0001\u0099\u0001\u009a\u0002\uffff\u0001\u009d\u0001"+
    "\u009e\u0001\uffff\u0001\u00a0\u0001\u00a2\u0002\uffff\u0001\u00a7\u0001"+
    "\u00a8\u0001\u00a9\u0001\u00aa\u0001\u00ab\u0001\u00ad\u0004\uffff\u0001"+
    "\u00b5\u0001\uffff\u0001\u00bc\u0002\uffff\u0001\u00c2\u0001\u00c4\u000a"+
    "\uffff\u0001\u000f\u002e\uffff\u0001\u0060\u001b\uffff\u0001\u009b\u0001"+
    "\u00ba\u0001\u00ac\u0001\u009c\u0001\u00a1\u0001\u00b1\u0001\u009f\u0001"+
    "\u00a5\u0001\u00a3\u0001\u00a6\u0001\u00a4\u0001\u00b0\u0001\u00ae\u0001"+
    "\u00b2\u0001\u00af\u0001\u00b3\u0001\u00b9\u0001\u00b7\u0001\u00b4\u0001"+
    "\u00b8\u0001\u00b6\u0001\uffff\u0001\u00bb\u0001\u00c0\u0001\u00bf\u0001"+
    "\u00c1\u0001\u00c3\u0001\uffff\u0001\u0002\u0008\uffff\u0001\u0011\u0019"+
    "\uffff\u0001\u002a\u0011\uffff\u0001\u0042\u0009\uffff\u0001\u004c\u0008"+
    "\uffff\u0001\u0061\u0001\uffff\u0001\u0063\u0029\uffff\u0001\u00bd\u0001"+
    "\u00be\u0001\uffff\u0001\u0001\u0001\u0004\u0001\uffff\u0001\u0005\u0001"+
    "\u0007\u0004\uffff\u0001\u000d\u0005\uffff\u0001\u003f\u0011\uffff\u0001"+
    "\u0016\u000b\uffff\u0001\u0027\u0001\uffff\u0001\u0029\u0004\uffff\u0001"+
    "\u002d\u0010\uffff\u0001\u0043\u0010\uffff\u0001\u005c\u0001\uffff\u0001"+
    "\u005f\u000c\uffff\u0001\u006b\u0001\u006c\u0005\uffff\u0001\u0071\u0003"+
    "\uffff\u0001\u0076\u0004\uffff\u0001\u0079\u0013\uffff\u0001\u0091\u0005"+
    "\uffff\u0001\u0093\u000f\uffff\u0001\u003e\u0001\u0085\u0001\u0086\u0002"+
    "\uffff\u0001\u008b\u0002\uffff\u0001\u0014\u0017\uffff\u0001\u002b\u0005"+
    "\uffff\u0001\u0033\u0003\uffff\u0001\u0038\u0018\uffff\u0001\u005a\u0001"+
    "\uffff\u0001\u0062\u0005\uffff\u0001\u0067\u0003\uffff\u0001\u0068\u0008"+
    "\uffff\u0001\u007d\u0007\uffff\u0001\u007e\u0004\uffff\u0001\u007f\u0001"+
    "\u0083\u0001\u0080\u0008\uffff\u0001\u008f\u0002\uffff\u0001\u0092\u0002"+
    "\uffff\u0001\u0094\u0001\u0095\u0007\uffff\u0001\u0008\u0003\uffff\u0001"+
    "\u000e\u0002\uffff\u0001\u0089\u0001\u008a\u0031\uffff\u0001\u004d\u0004"+
    "\uffff\u0001\u0057\u0001\u0058\u0003\uffff\u0001\u005e\u0006\uffff\u0001"+
    "\u0069\u001b\uffff\u0001\u008d\u0005\uffff\u0001\u0096\u0001\uffff\u0001"+
    "\u0097\u0002\uffff\u0001\u0009\u000f\uffff\u0001\u0017\u0017\uffff\u0001"+
    "\u0037\u0002\uffff\u0001\u003c\u0001\u0040\u000c\uffff\u0001\u0056\u0001"+
    "\uffff\u0001\u005b\u0004\uffff\u0001\u0065\u0006\uffff\u0001\u0088\u0009"+
    "\uffff\u0001\u0078\u0004\uffff\u0001\u0072\u0002\uffff\u0001\u0081\u0004"+
    "\uffff\u0001\u008e\u0008\uffff\u0001\u000b\u0006\uffff\u0001\u001c\u0001"+
    "\u001d\u0007\uffff\u0001\u001b\u0006\uffff\u0001\u0026\u0007\uffff\u0001"+
    "\u0031\u000a\uffff\u0001\u0055\u0001\u0045\u000b\uffff\u0001\u005d\u0011"+
    "\uffff\u0001\u0075\u0006\uffff\u0001\u0082\u0001\uffff\u0001\u0087\u0003"+
    "\uffff\u0001\u0098\u0001\u0003\u0001\uffff\u0001\u000a\u0001\u000c\u000a"+
    "\uffff\u0001\u0015\u0002\uffff\u0001\u001e\u000a\uffff\u0001\u002e\u0001"+
    "\uffff\u0001\u0032\u0001\uffff\u0001\u0034\u0001\u0035\u0003\uffff\u0001"+
    "\u0039\u0001\uffff\u0001\u0044\u000f\uffff\u0001\u0066\u0005\uffff\u0001"+
    "\u0070\u0001\uffff\u0001\u007c\u0001\uffff\u0001\u0074\u0001\uffff\u0001"+
    "\u007b\u0002\uffff\u0001\u0077\u0005\uffff\u0001\u0010\u0001\uffff\u0001"+
    "\u0012\u0004\uffff\u0001\u0022\u000a\uffff\u0001\u0025\u0009\uffff\u0001"+
    "\u0046\u0004\uffff\u0001\u004e\u0006\uffff\u0001\u0064\u0003\uffff\u0001"+
    "\u0073\u0004\uffff\u0001\u0090\u0005\uffff\u0001\u001f\u0001\uffff\u0001"+
    "\u0021\u0001\uffff\u0001\u001a\u0001\u0018\u0004\uffff\u0001\u0024\u000c"+
    "\uffff\u0001\u004b\u0006\uffff\u0001\u006a\u0001\u006d\u0005\uffff\u0001"+
    "\u0006\u0001\uffff\u0001\u0013\u0005\uffff\u0001\u002c\u0001\u002f\u0001"+
    "\u0036\u0001\u0030\u000d\uffff\u0001\u0059\u0001\u006e\u0001\u007a\u0001"+
    "\u006f\u0001\u0084\u0001\u008c\u0001\u003d\u0004\uffff\u0001\u0028\u0006"+
    "\uffff\u0001\u004a\u0004\uffff\u0001\u0053\u0001\uffff\u0001\u0019\u0001"+
    "\uffff\u0001\u0020\u0006\uffff\u0001\u0049\u0005\uffff\u0001\u0023\u0002"+
    "\uffff\u0001\u0041\u0001\u0047\u0001\u0048\u000b\uffff\u0001\u0054\u0003"+
    "\uffff\u0001\u0050\u000f\uffff\u0001\u0051\u0001\u0052\u0003\uffff\u0001"+
    "\u003a\u0004\uffff\u0001\u003b\u0001\u004f",
    DFA44_specialS:
        "\u003f\uffff\u0001\u0000\u0452\uffff}>",
    DFA44_transitionS: [
            "\u0002\u0027\u0001\uffff\u0002\u0027\u0012\uffff\u0001\u0027"+
            "\u0001\uffff\u0001\u003f\u0001\u0033\u0002\uffff\u0001\u0036"+
            "\u0001\u002b\u0001\u0029\u0001\u002e\u0001\u0037\u0001\u0035"+
            "\u0001\u002d\u0001\u0028\u0001\u002c\u0001\u0038\u000a\u002a"+
            "\u0001\u003c\u0001\u003d\u0001\u003a\u0001\u003b\u0001\u0039"+
            "\u0001\uffff\u0001\u0041\u0001\u0002\u0001\u0003\u0001\u0007"+
            "\u0001\u000a\u0001\u000c\u0001\u000d\u0002\u0026\u0001\u000f"+
            "\u0002\u0026\u0001\u0012\u0001\u0014\u0001\u0026\u0001\u0017"+
            "\u0001\u0019\u0001\u001a\u0001\u001d\u0001\u001f\u0001\u0020"+
            "\u0001\u0022\u0001\u0023\u0001\u0025\u0003\u0026\u0001\u0031"+
            "\u0001\uffff\u0001\u0032\u0001\u0034\u0002\uffff\u0001\u0001"+
            "\u0001\u0006\u0001\u0008\u0001\u0009\u0001\u000b\u0001\u0004"+
            "\u0001\u000e\u0001\u0026\u0001\u0010\u0002\u0026\u0001\u0011"+
            "\u0001\u0013\u0001\u0015\u0001\u0016\u0001\u0018\u0001\u001b"+
            "\u0001\u001c\u0001\u001e\u0001\u0005\u0001\u0021\u0001\u0026"+
            "\u0001\u0024\u0003\u0026\u0001\u002f\u0001\u003e\u0001\u0030"+
            "\u0001\u0040",
            "\u0001\u0042\u0001\uffff\u0001\u0043\u0007\uffff\u0001\u0044"+
            "\u0001\uffff\u0001\u0045\u0004\uffff\u0001\u0046",
            "\u0001\u0047\u0002\uffff\u0001\u0048\u0002\uffff\u0001\u0049",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0001\u004a\u0017\u0026\u0001\u004b\u0001\u0026",
            "\u0001\u004d\u0007\uffff\u0001\u004e\u0005\uffff\u0001\u0050"+
            "\u0002\uffff\u0001\u004f",
            "\u0001\u0052\u0001\u0053\u0008\uffff\u0001\u0051\u0006\uffff"+
            "\u0001\u0054",
            "\u0001\u0055",
            "\u0001\u0056\u000d\uffff\u0001\u0057",
            "\u0001\u0058\u0003\uffff\u0001\u0059\u0002\uffff\u0001\u005a",
            "\u0001\u005b\u0003\uffff\u0001\u005c\u0005\uffff\u0001\u005d",
            "\u0001\u005e",
            "\u0001\u005f\u0001\uffff\u0001\u0060\u0002\uffff\u0001\u0061"+
            "\u0004\uffff\u0001\u0062\u0001\uffff\u0001\u0063",
            "\u0001\u0064",
            "\u0001\u0065\u000d\uffff\u0001\u0066",
            "\u0001\u0067",
            "\u0001\u0068\u0007\uffff\u0001\u0069\u0005\uffff\u0001\u006a",
            "\u0001\u006b\u0006\uffff\u0001\u006c\u0001\u006d\u0004\uffff"+
            "\u0001\u006e",
            "\u0001\u006f",
            "\u0001\u0070\u0009\uffff\u0001\u0071",
            "\u0001\u0072\u0007\uffff\u0001\u0073\u0005\uffff\u0001\u0074",
            "\u0001\u0075",
            "\u0001\u0076",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0005\u0026\u0001\u0077\u0009\u0026\u0001\u0078"+
            "\u0001\u0026\u0001\u0079\u0001\u0026\u0001\u007a\u0006\u0026",
            "\u0001\u007c",
            "\u0001\u007d\u0002\uffff\u0001\u007e",
            "\u0001\u007f\u0002\uffff\u0001\u0080\u0001\uffff\u0001\u0081",
            "\u0001\u0082",
            "\u0001\u0083",
            "\u0001\u0084\u000a\uffff\u0001\u0085\u0004\uffff\u0001\u0086",
            "\u0001\u0087",
            "\u0001\u0088\u000f\uffff\u0001\u0089",
            "\u0001\u008a\u0020\uffff\u0001\u008b\u0001\u008c",
            "\u0001\u008d\u0010\uffff\u0001\u008e",
            "\u0001\u008f\u0001\uffff\u0001\u0090\u0002\uffff\u0001\u0091",
            "\u0001\u0092",
            "\u0001\u0093",
            "\u0001\u0094\u0001\u0095",
            "\u0001\u0096",
            "",
            "",
            "\u0001\u0097\u0010\uffff\u0001\u0098",
            "\u0001\u009a",
            "",
            "",
            "\u0001\u009c",
            "",
            "",
            "\u0001\u009e",
            "\u0001\u00a0",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u00a2",
            "\u0001\u00a4",
            "\u0001\u00a6\u0001\u00a7",
            "\u0001\u00aa\u0001\u00a9",
            "",
            "\u0001\u00ac",
            "",
            "\u0001\u00ae",
            "\u0000\u00b1",
            "",
            "",
            "\u0001\u00b2",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u00b4\u0007\uffff\u0001\u00b5",
            "\u0001\u00b6",
            "\u0001\u00b7",
            "\u0001\u00b8",
            "\u0001\u00b9",
            "\u0001\u00ba",
            "\u0001\u00bb",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u00bd",
            "\u0001\u00be",
            "\u0001\u00bf",
            "\u0001\u00c0",
            "\u0001\u00c1",
            "\u0001\u00c2\u0003\uffff\u0001\u00c3",
            "\u0001\u00c4",
            "\u0001\u00c5",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u00c6\u0001\u00c8\u0001\u00c7",
            "\u0001\u00c9\u0001\u00ca\u0003\uffff\u0001\u00cb",
            "\u0001\u00cc",
            "\u0001\u00ce\u000c\uffff\u0001\u00cd",
            "\u0001\u00cf\u0001\u00d0\u0003\uffff\u0001\u00d1",
            "\u0001\u00d2\u0002\uffff\u0001\u00d3",
            "\u0001\u00d4\u0002\uffff\u0001\u00d5",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u00d7\u0001\uffff\u0001\u00d8",
            "\u0001\u00da\u0009\uffff\u0001\u00d9",
            "\u0001\u00db\u0003\uffff\u0001\u00dc\u000a\uffff\u0001\u00dd",
            "\u0001\u00de",
            "\u0001\u00df",
            "\u0001\u00e0\u0001\uffff\u0001\u00e1\u0003\uffff\u0001\u00e2",
            "\u0001\u00e3",
            "\u0001\u00e4\u0009\uffff\u0001\u00e5",
            "\u0001\u00e6",
            "\u0001\u00e7",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u00ea\u000b\uffff\u0001\u00e9",
            "\u0001\u00eb",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0005\u0026\u0001\u00ec\u0014\u0026",
            "\u0001\u00ed",
            "\u0001\u00ee\u0009\uffff\u0001\u00ef\u0001\u00f0",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u00f1"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u00f3",
            "\u0001\u00f4",
            "\u0001\u00f5",
            "\u0001\u00f6",
            "\u0001\u00f7",
            "\u0001\u00f8",
            "\u0001\u00f9",
            "\u0001\u00fa",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u00fc",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u00fe",
            "",
            "\u0001\u00ff",
            "\u0001\u0100\u0008\uffff\u0001\u0101",
            "\u0001\u0102\u0009\uffff\u0001\u0103",
            "\u0001\u0104",
            "\u0001\u0106\u0009\uffff\u0001\u0105",
            "\u0001\u0107",
            "\u0001\u0108",
            "\u0001\u0109",
            "\u0001\u010a\u0001\uffff\u0001\u010c\u0001\u010d\u0007\uffff"+
            "\u0001\u010e\u0001\u010f\u0002\uffff\u0001\u0110\u0001\u0111"+
            "\u0001\uffff\u0001\u010b",
            "\u0001\u0112",
            "\u0001\u0113",
            "\u0001\u0114\u0001\uffff\u0001\u0115\u0009\uffff\u0001\u0116",
            "\u0001\u0117",
            "\u0001\u0118",
            "\u0001\u0119",
            "\u0001\u011a",
            "\u0001\u011b\u000d\uffff\u0001\u011c",
            "\u0001\u011d",
            "\u0001\u011e",
            "\u0001\u011f",
            "\u0001\u0120",
            "\u0001\u0121",
            "\u0001\u0122",
            "\u0001\u0123",
            "\u0001\u0124",
            "\u0001\u0125",
            "\u0001\u0126",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0127",
            "",
            "",
            "",
            "",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0014\u0026\u0001\u0129\u0005\u0026",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0004\u0026\u0001\u012c\u0015\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u012f",
            "\u0001\u0130",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0131"+
            "\u0001\uffff\u0008\u0026\u0001\u0132\u0011\u0026",
            "\u0001\u0134",
            "\u0001\u0135",
            "",
            "\u0001\u0136",
            "\u0001\u0137",
            "\u0001\u0138",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u013a",
            "\u0001\u013b",
            "\u0001\u013c\u0003\uffff\u0001\u013d",
            "\u0001\u013e",
            "\u0001\u013f",
            "\u0001\u0140",
            "\u0001\u0141",
            "\u0001\u0142",
            "\u0001\u0143",
            "\u0001\u0144\u0002\uffff\u0001\u0145\u000c\uffff\u0001\u0146"+
            "\u0002\uffff\u0001\u0147",
            "\u0001\u0148\u0002\uffff\u0001\u0149",
            "\u0001\u014a",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u014c",
            "\u0001\u014d\u0002\uffff\u0001\u014e",
            "\u0001\u014f\u0006\uffff\u0001\u0150\u0008\uffff\u0001\u0151"+
            "\u0001\u0152\u0001\uffff\u0001\u0153",
            "\u0001\u0154",
            "\u0001\u0155",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0008\u0026\u0001\u0156\u0011\u0026",
            "\u0001\u0158",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u015a",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0008\u0026\u0001\u015b\u0011\u0026",
            "\u0001\u015c",
            "\u0001\u015d",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u015f",
            "\u0001\u0160",
            "\u0001\u0161",
            "\u0001\u0162",
            "\u0001\u0163",
            "\u0001\u0164",
            "\u0001\u0165\u0001\u0166",
            "\u0001\u0167",
            "\u0001\u0168",
            "\u0001\u0169",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0006\u0026\u0001\u016a\u0013\u0026",
            "\u0001\u016b",
            "",
            "\u0001\u016c",
            "\u0001\u016d",
            "\u0001\u016e",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0170",
            "\u0001\u0171",
            "\u0001\u0172",
            "\u0001\u0173\u000c\uffff\u0001\u0174",
            "\u0001\u0175\u0004\uffff\u0001\u0176\u0001\uffff\u0001\u0177"+
            "\u0002\uffff\u0001\u0178",
            "",
            "\u0001\u0179",
            "\u0001\u017a",
            "\u0001\u017b",
            "\u0001\u017c",
            "\u0001\u017d",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0004\u0026\u0001\u017e\u000f\u0026\u0001\u017f"+
            "\u0005\u0026",
            "\u0001\u0181",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u0183",
            "",
            "\u0001\u0184",
            "\u0001\u0185",
            "\u0001\u0186",
            "\u0001\u0187",
            "\u0001\u0188",
            "\u0001\u0189",
            "\u0001\u018a",
            "\u0001\u018b\u000b\uffff\u0001\u018c\u0001\u018d",
            "\u0001\u018e",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0191",
            "\u0001\u0192\u0006\uffff\u0001\u0193",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u000f\u0026\u0001\u0194\u0003\u0026\u0001\u0195"+
            "\u0006\u0026",
            "\u0001\u0197",
            "\u0001\u0198",
            "\u0001\u0199",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u019b\u0006\uffff\u0001\u019c\u0005\uffff\u0001\u019d",
            "\u0001\u019e",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u01a0",
            "\u0001\u01a1",
            "\u0001\u01a2\u0005\uffff\u0001\u01a3",
            "\u0001\u01a4",
            "\u0001\u01a5",
            "\u0001\u01a6",
            "\u0001\u01a7",
            "\u0001\u01a8",
            "\u0001\u01a9",
            "\u0001\u01aa",
            "\u0001\u01ab\u0002\uffff\u0001\u01ac",
            "\u0001\u01ad",
            "\u0001\u01ae\u0001\uffff\u0001\u01af\u0002\uffff\u0001\u01b0"+
            "\u0001\uffff\u0001\u01b1",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0001\u01b2\u0019\u0026",
            "\u0001\u01b4",
            "\u0001\u01b5\u0002\uffff\u0001\u01b6",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0008\u0026\u0001\u01b7\u0009\u0026\u0001\u01b8"+
            "\u0007\u0026",
            "\u0001\u01ba\u0003\uffff\u0001\u01bb",
            "\u0001\u01bc",
            "\u0001\u01bd",
            "",
            "",
            "\u0001\u01be",
            "",
            "",
            "\u0001\u01bf",
            "",
            "",
            "\u0001\u01c0",
            "\u0001\u01c1",
            "\u0001\u01c2\u0012\uffff\u0001\u01c3",
            "\u0001\u01c4",
            "",
            "\u0001\u01c5",
            "\u0001\u01c6",
            "\u0001\u01c7",
            "\u0001\u01c8",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u01cc",
            "\u0001\u01cd",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u01cf",
            "\u0001\u01d0",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u01d2",
            "\u0001\u01d3",
            "\u0001\u01d4",
            "\u0001\u01d5",
            "\u0001\u01d6",
            "\u0001\u01d7",
            "\u0001\u01d8",
            "\u0001\u01d9",
            "",
            "\u0001\u01da",
            "\u0001\u01db",
            "\u0001\u01dc",
            "\u0001\u01de\u0006\uffff\u0001\u01dd",
            "\u0001\u01df",
            "\u0001\u01e0",
            "\u0001\u01e1",
            "\u0001\u01e2",
            "\u0001\u01e3",
            "\u0001\u01e4",
            "\u0001\u01e5",
            "",
            "\u0001\u01e6",
            "",
            "\u0001\u01e7",
            "\u0001\u01e8",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u01ea",
            "",
            "\u0001\u01eb",
            "\u0001\u01ec",
            "\u0001\u01ed",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0014\u0026\u0001\u01ee\u0005\u0026",
            "\u0001\u01f0",
            "\u0001\u01f1",
            "\u0001\u01f2",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u01f4",
            "\u0001\u01f5",
            "\u0001\u01f6",
            "\u0001\u01f7",
            "\u0001\u01f8",
            "\u0001\u01f9",
            "\u0001\u01fa",
            "\u0001\u01fb",
            "",
            "\u0001\u01fc",
            "\u0001\u01fd",
            "\u0001\u01fe",
            "\u0001\u01ff",
            "\u0001\u0200",
            "\u0001\u0201",
            "\u0001\u0202",
            "\u0001\u0203",
            "\u0001\u0204",
            "\u0001\u0205",
            "\u0001\u0206",
            "\u0001\u0207",
            "\u0001\u0208",
            "\u0001\u0209",
            "\u0001\u020a",
            "\u0001\u020b",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0001\u020d\u0019\u0026",
            "\u0001\u020f",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0001\u0210\u0019\u0026",
            "\u0001\u0211",
            "\u0001\u0212",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0004\u0026\u0001\u0213\u0015\u0026",
            "\u0001\u0215",
            "\u0001\u0216",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0004\u0026\u0001\u0217\u0015\u0026",
            "\u0001\u0219",
            "\u0001\u021a",
            "\u0001\u021b",
            "",
            "",
            "\u0001\u021c",
            "\u0001\u021d",
            "\u0001\u021e",
            "\u0001\u021f",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u000e\u0026\u0001\u0220\u000b\u0026",
            "",
            "\u0001\u0222",
            "\u0001\u0223",
            "\u0001\u0224",
            "",
            "\u0001\u0225",
            "\u0001\u0226",
            "\u0001\u0227",
            "\u0001\u0228",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u022a",
            "\u0001\u022b",
            "\u0001\u022c",
            "\u0001\u022d",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0231",
            "\u0001\u0232",
            "\u0001\u0233",
            "\u0001\u0234",
            "\u0001\u0235",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0236"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0237",
            "\u0001\u0238",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u023a",
            "\u0001\u023b",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u023d",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u023e",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0241",
            "\u0001\u0242",
            "\u0001\u0243",
            "\u0001\u0244",
            "\u0001\u0246\u0004\uffff\u0001\u0245",
            "\u0001\u0247",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0249",
            "\u0001\u024a",
            "\u0001\u024b",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u024d",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u024e",
            "",
            "",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u0251",
            "\u0001\u0252",
            "",
            "\u0001\u0253",
            "\u0001\u0254",
            "\u0001\u0255",
            "\u0001\u0256",
            "\u0001\u0257",
            "\u0001\u0258",
            "\u0001\u0259",
            "\u0001\u025a",
            "\u0001\u025b",
            "\u0001\u025c",
            "\u0001\u025d",
            "\u0001\u025e",
            "\u0001\u025f",
            "\u0001\u0260",
            "\u0001\u0261",
            "\u0001\u0262",
            "\u0001\u0263",
            "\u0001\u0264",
            "\u0001\u0265",
            "\u0001\u0266\u0003\uffff\u0001\u0267",
            "\u0001\u0268",
            "\u0001\u0269",
            "\u0001\u026a\u0003\uffff\u0001\u026b",
            "",
            "\u0001\u026c",
            "\u0001\u026d",
            "\u0001\u026e",
            "\u0001\u026f",
            "\u0001\u0270",
            "",
            "\u0001\u0271",
            "\u0001\u0272",
            "\u0001\u0273\u0011\uffff\u0001\u0274",
            "",
            "\u0001\u0275",
            "\u0001\u0276",
            "\u0001\u0277",
            "\u0001\u0278",
            "\u0001\u0279",
            "\u0001\u027a",
            "\u0001\u027b",
            "\u0001\u027c",
            "\u0001\u027d",
            "\u0001\u027e",
            "\u0001\u027f",
            "\u0001\u0280",
            "\u0001\u0281",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0283",
            "\u0001\u0284",
            "\u0001\u0285",
            "\u0001\u0286",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0289",
            "\u0001\u028a",
            "\u0001\u028b",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u028d",
            "",
            "\u0001\u028e",
            "\u0001\u028f",
            "\u0001\u0290",
            "\u0001\u0291",
            "\u0001\u0292",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0294",
            "\u0001\u0295",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0012\u0026\u0001\u0296\u0007\u0026",
            "\u0001\u0297",
            "\u0001\u0298",
            "\u0001\u0299",
            "\u0001\u029a",
            "\u0001\u029b",
            "\u0001\u029c",
            "\u0001\u029d",
            "",
            "\u0001\u029e",
            "\u0001\u029f",
            "\u0001\u02a0",
            "\u0001\u02a1",
            "\u0001\u02a2",
            "\u0001\u02a3",
            "\u0001\u02a4",
            "",
            "\u0001\u02a5",
            "\u0001\u02a6",
            "\u0001\u02a7",
            "\u0001\u02a8",
            "",
            "",
            "",
            "\u0001\u02a9",
            "\u0001\u02aa",
            "\u0001\u02ab",
            "\u0001\u02ac\u0013\uffff\u0001\u02ad",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u02ae",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u02b0",
            "",
            "\u0001\u02b1",
            "\u0001\u02b2",
            "",
            "\u0001\u02b3",
            "\u0001\u02b4",
            "",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u02b6",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u02b8",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u02b9",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u02bb",
            "\u0001\u02bc",
            "\u0001\u02bd",
            "",
            "\u0001\u02be",
            "\u0001\u02bf",
            "",
            "",
            "\u0001\u02c0",
            "\u0001\u02c1",
            "\u0001\u02c2",
            "\u0001\u02c3",
            "\u0001\u02c4",
            "\u0001\u02c5",
            "\u0001\u02c6",
            "\u0001\u02c7",
            "\u0001\u02c8",
            "\u0001\u02c9",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u02cb",
            "\u0001\u02cc",
            "\u0001\u02cd",
            "\u0001\u02ce",
            "\u0001\u02cf",
            "\u0001\u02d0",
            "\u0001\u02d1",
            "\u0001\u02d2",
            "\u0001\u02d3",
            "\u0001\u02d4",
            "\u0001\u02d5",
            "\u0001\u02d6",
            "\u0001\u02d7",
            "\u0001\u02d8",
            "\u0001\u02d9",
            "\u0001\u02da",
            "\u0001\u02db",
            "\u0001\u02dc",
            "\u0001\u02dd",
            "\u0001\u02de",
            "\u0001\u02df",
            "\u0001\u02e0",
            "\u0001\u02e1",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u02e3",
            "\u0001\u02e4",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u02e7",
            "\u0001\u02e8",
            "\u0001\u02e9",
            "\u0001\u02ea",
            "\u0001\u02eb",
            "\u0001\u02ec",
            "\u0001\u02ed",
            "\u0001\u02ee",
            "\u0001\u02ef",
            "",
            "\u0001\u02f0",
            "\u0001\u02f1",
            "\u0001\u02f2",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "",
            "\u0001\u02f4",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u02f6",
            "",
            "\u0001\u02f7",
            "\u0001\u02f8",
            "\u0001\u02f9",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u02fb",
            "\u0001\u02fc",
            "",
            "\u0001\u02fd",
            "\u0001\u02fe",
            "\u0001\u02ff",
            "\u0001\u0300",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0302",
            "\u0001\u0303\u0003\uffff\u0001\u0304",
            "\u0001\u0305",
            "\u0001\u0306",
            "\u0001\u0307",
            "\u0001\u0308",
            "\u0001\u0309",
            "\u0001\u030a",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u030c",
            "\u0001\u030d",
            "\u0001\u030e",
            "\u0001\u030f",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0311",
            "\u0001\u0312",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0314",
            "\u0001\u0315",
            "\u0001\u0316",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0317",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0319",
            "\u0001\u031a",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u031b",
            "",
            "\u0001\u031c",
            "",
            "\u0001\u031d",
            "\u0001\u031e",
            "",
            "\u0001\u031f",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0012\u0026\u0001\u0320\u0007\u0026",
            "\u0001\u0322",
            "\u0001\u0323",
            "\u0001\u0324",
            "\u0001\u0325",
            "\u0001\u0326",
            "\u0001\u0327",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u032a",
            "\u0001\u032b",
            "\u0001\u032c",
            "\u0001\u032d",
            "\u0001\u032e",
            "",
            "\u0001\u032f",
            "\u0001\u0330",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0332",
            "\u0001\u0333",
            "\u0001\u0334",
            "\u0001\u0335",
            "\u0001\u0336",
            "\u0001\u0337",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0339",
            "\u0001\u033a",
            "\u0001\u033b",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u033c",
            "\u0001\u033d",
            "\u0001\u033e\u0008\uffff\u0001\u033f",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0341",
            "\u0001\u0342",
            "\u0001\u0343",
            "\u0001\u0344",
            "\u0001\u0345",
            "",
            "\u0001\u0346",
            "\u0001\u0347",
            "",
            "",
            "\u0001\u0348",
            "\u0001\u0349",
            "\u0001\u034a",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u034d",
            "\u0001\u034e",
            "\u0001\u034f",
            "\u0001\u0350",
            "\u0001\u0351\u0006\uffff\u0001\u0352\u0002\uffff\u0001\u0353",
            "\u0001\u0354",
            "\u0001\u0355\u000e\uffff\u0001\u0356",
            "",
            "\u0001\u0357",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0359",
            "\u0001\u035a",
            "\u0001\u035b",
            "",
            "\u0001\u035c",
            "\u0001\u035d",
            "\u0001\u035e",
            "\u0001\u035f",
            "\u0001\u0360",
            "\u0001\u0361",
            "",
            "\u0001\u0362",
            "\u0001\u0363",
            "\u0001\u0364",
            "\u0001\u0365",
            "\u0001\u0366",
            "\u0001\u0367",
            "\u0001\u0368",
            "\u0001\u0369",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u036b",
            "\u0001\u036c",
            "\u0001\u036d",
            "\u0001\u036e",
            "",
            "\u0001\u036f",
            "\u0001\u0370",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0372",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0374",
            "",
            "\u0001\u0375",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0376",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0379",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u037c",
            "\u0001\u037d",
            "\u0001\u037e",
            "\u0001\u037f",
            "\u0001\u0380",
            "\u0001\u0381",
            "",
            "",
            "\u0001\u0382",
            "\u0001\u0383",
            "\u0001\u0384",
            "\u0001\u0385",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0387",
            "\u0001\u0388",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u038a",
            "\u0001\u038b",
            "\u0001\u038c",
            "\u0001\u038d",
            "\u0001\u038e",
            "",
            "\u0001\u038f",
            "\u0001\u0390",
            "\u0001\u0391",
            "\u0001\u0392",
            "\u0001\u0393",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0395",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0397",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u039a",
            "\u0001\u039b",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u039c"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u039e",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03a0",
            "",
            "",
            "\u0001\u03a1",
            "\u0001\u03a2",
            "\u0001\u03a3",
            "\u0001\u03a4",
            "\u0001\u03a5",
            "\u0001\u03a6",
            "\u0001\u03a7",
            "\u0001\u03a8",
            "\u0001\u03a9",
            "\u0001\u03aa",
            "\u0001\u03ab",
            "",
            "\u0001\u03ac",
            "\u0001\u03ad",
            "\u0001\u03ae",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03b0",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03b1",
            "\u0001\u03b2",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03b3",
            "\u0001\u03b4",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03b6",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03b8",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03ba",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03bc",
            "\u0001\u03bd",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u03bf",
            "",
            "\u0001\u03c0",
            "\u0001\u03c1",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0012\u0026\u0001\u03c2\u0007\u0026",
            "",
            "",
            "\u0001\u03c3",
            "",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03c5",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03c7",
            "\u0001\u03c8",
            "\u0001\u03c9",
            "\u0001\u03ca",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03cc",
            "",
            "\u0001\u03cd",
            "\u0001\u03ce",
            "",
            "\u0001\u03cf",
            "\u0001\u03d0",
            "\u0001\u03d1",
            "\u0001\u03d2",
            "\u0001\u03d3",
            "\u0001\u03d4",
            "\u0001\u03d5",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03d7",
            "\u0001\u03d8",
            "",
            "\u0001\u03d9",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "",
            "\u0001\u03da",
            "\u0001\u03db",
            "\u0001\u03dc\u0002\uffff\u0001\u03dd",
            "",
            "\u0001\u03de",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u03df"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03e1",
            "\u0001\u03e2",
            "\u0001\u03e3",
            "\u0001\u03e4",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03e6",
            "\u0001\u03e7",
            "\u0001\u03e8",
            "\u0001\u03e9",
            "\u0001\u03ea",
            "\u0001\u03eb",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03ed",
            "\u0001\u03ee",
            "\u0001\u03ef",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u03f1",
            "",
            "\u0001\u03f2",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u03f3",
            "\u0001\u03f4",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u03f6",
            "",
            "\u0001\u03f7",
            "",
            "\u0001\u03f8",
            "\u0001\u03f9",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0012\u0026\u0001\u03fa\u0007\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0012\u0026\u0001\u03fc\u0007\u0026",
            "",
            "\u0001\u03fe",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0012\u0026\u0001\u0401\u0007\u0026",
            "\u0001\u0402",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u0012\u0026\u0001\u0403\u0007\u0026",
            "\u0001\u0404",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0406",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0407",
            "\u0001\u0408",
            "\u0001\u0409",
            "\u0001\u040a",
            "\u0001\u040b",
            "\u0001\u040c",
            "\u0001\u040d",
            "\u0001\u040e",
            "",
            "\u0001\u040f",
            "\u0001\u0410",
            "\u0001\u0411",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u0413",
            "\u0001\u0414",
            "\u0001\u0415",
            "\u0001\u0416",
            "\u0001\u0417",
            "\u0001\u0418",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u041b",
            "",
            "\u0001\u041c",
            "\u0001\u041d",
            "\u0001\u041e",
            "\u0001\u041f",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0421",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0423",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u0424",
            "",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0425",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0426",
            "",
            "\u0001\u0427",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u042c",
            "\u0001\u042d",
            "\u0001\u042e",
            "\u0001\u042f",
            "\u0001\u0430",
            "\u0001\u0431",
            "\u0001\u0432",
            "",
            "\u0001\u0433",
            "\u0001\u0434\u000e\uffff\u0001\u0435",
            "\u0001\u0436",
            "\u0001\u0437",
            "\u0001\u0438",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u0440",
            "\u0001\u0441",
            "\u0001\u0442",
            "\u0001\u0443",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "",
            "",
            "",
            "\u0001\u0445",
            "\u0001\u0446",
            "\u0001\u0447",
            "\u0001\u0448",
            "\u0001\u0449",
            "\u0001\u044a",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u044c",
            "\u0001\u044d",
            "\u0001\u044e",
            "\u0001\u044f",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0451",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0453",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0455",
            "",
            "\u0001\u0456",
            "\u0001\u0457",
            "\u0001\u0458",
            "\u0001\u0459",
            "\u0001\u045a",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u045c",
            "\u0001\u045d",
            "\u0001\u045e",
            "\u0001\u045f",
            "",
            "\u0001\u0460",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0462",
            "\u0001\u0463",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            "\u0001\u0467",
            "\u0001\u0468",
            "\u0001\u0469",
            "\u0001\u046a",
            "\u0001\u046b",
            "",
            "\u0001\u046c",
            "\u0001\u046d",
            "",
            "",
            "",
            "\u0001\u046e",
            "\u0001\u046f",
            "\u0001\u0470",
            "\u0001\u0471",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0473",
            "\u0001\u0474",
            "\u0001\u0475",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0477",
            "\u0001\u0478",
            "",
            "\u0001\u0479",
            "\u0001\u047a",
            "\u0001\u047b",
            "",
            "\u0001\u047c",
            "\u0001\u047d",
            "\u0001\u047e",
            "\u0001\u047f",
            "\u0001\u0480",
            "\u0001\u0481",
            "\u0001\u0482",
            "\u0001\u0483",
            "\u0001\u0484",
            "\u0001\u0485",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u0488",
            "\u0001\u0489",
            "\u0001\u048a",
            "",
            "",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u0001\u048c",
            "\u0001\u048d",
            "",
            "\u0001\u048e",
            "\u0001\u048f",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "\u000a\u0026\u0007\uffff\u001a\u0026\u0004\uffff\u0001\u0026"+
            "\u0001\uffff\u001a\u0026",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(RLexer, {
    DFA44_eot:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA44_eotS),
    DFA44_eof:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA44_eofS),
    DFA44_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(RLexer.DFA44_minS),
    DFA44_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(RLexer.DFA44_maxS),
    DFA44_accept:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA44_acceptS),
    DFA44_special:
        org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA44_specialS),
    DFA44_transition: (function() {
        var a = [],
            i,
            numStates = RLexer.DFA44_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(RLexer.DFA44_transitionS[i]));
        }
        return a;
    })()
});

RLexer.DFA44 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 44;
    this.eot = RLexer.DFA44_eot;
    this.eof = RLexer.DFA44_eof;
    this.min = RLexer.DFA44_min;
    this.max = RLexer.DFA44_max;
    this.accept = RLexer.DFA44_accept;
    this.special = RLexer.DFA44_special;
    this.transition = RLexer.DFA44_transition;
};

org.antlr.lang.extend(RLexer.DFA44, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( ABS | AD | ABSURDUM | ALL | ALTERS | ALTERNATIVE | AND | ARRAY | ASSUME | AUX_CODE | AUX_VAR | AUX_VARS | AUXILIARY | AXIOM | BOOLEAN | BASECASE | BY | CARTPROD | CATEGORICAL | CASE | CHANGING | CLEARS | COMMON | CONCLUSION | COMMUTATIVITY | COMPLEMENT | CONCEPT | MODULE_CONCEPT | CONFIRM | CONJUNCT | CONSTRAINT | CONTRADICTION | CONVENTION | COROLLARY | CORR | DECREASING | DEDUCTION | DEFINES | DEFINITION | DISTRIBUTION | DIV | DO | ELSE | ELIMINATION | END | ENHANCED | ENHANCEMENT | MODULE_ENHANCEMENT | ENSURES | EQUALITY | EVALUATES | EXCLUDED | EXEMPLAR | EXISTENTIAL | EXISTS | EXIT | FACILITY | FAC_FINAL | FAC_INIT | FAMILY | FINALIZATION | FROM | FOR | FORGET | GENERALIZATION | IF | IFF | IMPLICIT | IMPLIES | INDUCTIVE | INDUCTIVECASE | INITIALIZATION | INSTANTIATION | INTERSECT | INTRODUCES | IS | IN | NOT_IN | NOT_PROP_SUBSET | NOT_SUBSET | NOT_SUBSTR | PROP_SUBSET | SUBSET | SUBSTR | ITERATE | LAMBDA | LEMMA | LOCAL | MAINTAINING | MATH | MIDDLE | MOD | MODELED | MODUS | NOT | CAT | OF | OPERATION | OR | OTHERWISE | PONENS | POWERSET | PRESERVES | PROCEDURE | PROOF | PROOFS_FOR | PROPERTY | QED | QUANTIFIER | REALIZATION | MODULE_REALIZATION | REALIZED | REASSIGNS | RECORD | RECURSIVE | REDUCTIO | RELATED | REM | REMEMBER | REPEAT | REPLACES | REPRESENTED | REQUIRES | RESPECTS | RESTORES | RULE | SELF | SSET | STATIC | SUBTYPE | SUCH | SUPPOSITION | THAT | THEN | THEOREM | THEORY | THERE | TIMES | TYPE | TYPE_FAMILY | UNION | UNIQUE | UNIT | UNIVERSAL | UPDATES | USES | VAR | VARIABLES | WHEN | WHERE | WHILE | WITHOUT | IDENTIFIER | WS | SL_COMMENT | ML_COMMENT | NUMERIC_LITERAL | CHARACTER_LITERAL | DOT | COMMA | LPAREN | RPAREN | LBRACE | RBRACE | DBL_LBRACE | DBL_RBRACE | LSQBRACK | RSQBRACK | HASH | CARAT | PLUS | MINUS | AMPERSAND | MULTIPLY | DIVIDE | EXP | RANGE | NOT_EQL | GT_EQL | LT_EQL | EQL | LT | GT | LL | GG | FUNCARROW | COLON | SEMICOLON | SWAP_OP | ASSIGN_OP | BAR | DBL_BAR | DQUOTE | TILDE | STRING_LITERAL | FREE_OPERATOR );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA44_63 = input.LA(1);

                            s = -1;
                            if ( ((LA44_63>='\u0000' && LA44_63<='\uFFFF')) ) {s = 177;}

                            else s = 176;

                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 44, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 
})();