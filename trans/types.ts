module types

type rules // statements

  Return(e) :-
  where e : t
    and "this" : t_r else error "no return type" on e
    and t == t_r else error "return type expected" on e
    
  If(e, s1, s2) :-
  where e : t
    and t == BoolType() 
        else error "Boolean expression expected" on e
    
  Assign(e1, e2) :-
  where e1 : t1
    and e2 : t2
    and t2 == t1 
        else error "types not compatible" on e2
    
  VarDecl(t, name) : t
  
  VarDeclInit(t, name, e) : t
  where e : t_e
    and t_e == t else error "types not compatible" on e
    
type rules // expressions

  Var(name) : t
  where definition of name : t
  
  Param(t, name) : t

type rules
  
  Call(name, exp*) : t
  where definition of name : (t*, t)
    and exp* : t_exp*
    and t_exp* == t* else error "argument types do not match" on exp*

type rules // literals
     
  Int(x)  : IntType()
  Char(x) : CharType()
  True()  : BoolType()
  False() : BoolType()
  
type rules // binary operators

  Mul(e1, e2) : IntType()
  where e1 : IntType() else error "int expression expected" on e1
    and e2 : IntType() else error "int expression expected" on e2

  Add(e1, e2) : IntType()
  where e1 : IntType() else error "int expression expected" on e1
    and e2 : IntType() else error "int expression expected" on e2
    
  Sub(e1, e2) : IntType()
  where e1 : IntType() else error "int expression expected" on e1
    and e2 : IntType() else error "int expression expected" on e2
    
  Mod(e1, e2) : IntType()
  where e1 : IntType() else error "int expression expected" on e1
    and e2 : IntType() else error "int expression expected" on e2
        
  Leq(e1, e2) : BoolType()
  where e1 : IntType() else error "int expression expected" on e1
    and e2 : IntType() else error "int expression expected" on e2

  Eq(e1, e2) : BoolType()
  where e1 : IntType() else error "int expression expected" on e1
    and e2 : IntType() else error "int expression expected" on e2    

      