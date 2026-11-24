; Zed gives later patterns precedence, so general rules come first and more
; specific ones follow.

(identifier) @variable
(keyword) @keyword
(boolean) @boolean
(null) @constant.builtin
(number) @number
(string) @string
(raw_string) @string
(character) @character
(escape_sequence) @string.escape
(comment) @comment
(operator) @operator
(delimiter) @punctuation.delimiter
["(" ")" "[" "]" "{" "}"] @punctuation.bracket

; Capitalized names are types, unless a later rule finds a call or declaration.
((identifier) @type
 (#match? @type "^[A-Z]"))

; Lowercase names after a dot are fields. Capitalized ones, such as
; Enum.Variant or pkg.Type, stay types.
(_ (delimiter ".") . (identifier) @property
 (#match? @property "^[a-z_]"))

((identifier) @type.builtin
 (#match? @type.builtin "^(int|uint|float|bool|string|i8|i16|i32|i64|u8|u16|u32|u64|f32|f64|varint|varuint|array|buffer|map|void)$"))
(keyword ["any" "mixed"]) @type.builtin
(keyword "import") @keyword.import
(keyword "func") @keyword.function

; Declarations.
(_ (keyword "package") . (identifier) @namespace)
(_ (keyword ["struct" "enum" "type"]) . (identifier) @type.definition)
(_ (keyword "interface") . (identifier) @type.interface)

; Keyed fields in a composite literal, such as Options{AltScreen: true}. The
; type before the literal is captured as @type so that it keeps its color.
((identifier) @type . (block "{" . (identifier) @property . (delimiter ":"))
 (#match? @type "^[A-Z]"))
((identifier) @type . (block (delimiter ",") . (identifier) @property . (delimiter ":"))
 (#match? @type "^[A-Z]"))

; Calls: a name directly followed by an argument list.
(_ (identifier) @function.call . (parenthesized))
(_ (delimiter ".") . (identifier) @function.method.call . (parenthesized))

((identifier) @function.builtin
 (#match? @function.builtin "^(len|sizeof|typeof|zero|make|new|free|delete|recover)$"))

; Function and method declarations.
(_ (keyword "func") . (identifier) @function)
; Receiver methods have a parenthesized receiver before the function name.
(_ (keyword "func") . (parenthesized) . (identifier) @function.method)

; Enum variants: a capitalized name after a capitalized type, such as
; Shape.Circle or Shape.Circle(1.0).
((identifier) @type . (delimiter ".") . (identifier) @variant
 (#match? @type "^[A-Z]")
 (#match? @variant "^[A-Z]"))

; Standard-library package qualifiers, such as io in io.Println.
(_ (identifier) @namespace . (delimiter ".")
 (#match? @namespace "^(io|os|exec|json|http|term|tui|math|mem|time|threads|sync|reflect|testing)$"))
