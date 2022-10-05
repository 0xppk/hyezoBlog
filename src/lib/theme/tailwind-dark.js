export const theme = {
  name: "Tailwind - Dark",
  type: "dark",
  semanticHighlighting: true,
  semanticTokenColors: {
    enumMember: {
      foreground: "#94a3b8",
    },
    "variable.constant": {
      foreground: "#7dd3fc",
    },
    "variable.defaultLibrary": {
      foreground: "#f472b6",
    },
  },
  tokenColors: [
    {
      name: "unison punctuation",
      scope:
        "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "Object from object property",
      scope: "variable.other.object.property",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "Variables",
      scope: "variable.other.object",
      settings: {
        foreground: "#CBD5E1",
      },
    },
    {
      name: "If/while/for",
      scope:
        "keyword.control.conditional, keyword.control.trycatch, keyword.control.loop",
      settings: {
        foreground: "#F472B6",
      },
    },
    {
      name: "haskell variable generic-type",
      scope: "variable.other.generic-type.haskell",
      settings: {
        foreground: "#000000",
      },
    },
    {
      name: "haskell storage type",
      scope: "storage.type.haskell",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "support.variable.magic.python",
      scope: "support.variable.magic.python",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "punctuation.separator.parameters.python",
      scope:
        "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "variable.parameter.function.language.special.self.python",
      scope: "variable.parameter.function.language.special.self.python",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "storage.modifier.lifetime.rust",
      scope: "storage.modifier.lifetime.rust",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "support.function.std.rust",
      scope: "support.function.std.rust",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "entity.name.lifetime.rust",
      scope: "entity.name.lifetime.rust",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "variable.language.rust",
      scope: "variable.language.rust",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "support.constant.edge",
      scope: "support.constant.edge",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "regexp constant character-class",
      scope: "constant.other.character-class.regexp",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "regexp operator.quantifier",
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "punctuation.definition",
      scope: "punctuation.definition.string.begin,punctuation.definition.string.end",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "Text",
      scope: "variable.parameter.function",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "Comment Markup Link",
      scope: "comment markup.link",
      settings: {
        foreground: "#7f848e",
      },
    },
    {
      name: "markup diff",
      scope: "markup.changed.diff",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "diff",
      scope:
        "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "inserted.diff",
      scope: "markup.inserted.diff",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "deleted.diff",
      scope: "markup.deleted.diff",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "c++ function",
      scope: "meta.function.c,meta.function.cpp",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "c++ block",
      scope:
        "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "js/ts punctuation separator key-value",
      scope: "punctuation.separator.key-value",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "js/ts import keyword",
      scope: "keyword.operator.expression.import",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "math js/ts",
      scope: "support.constant.math",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "math property js/ts",
      scope: "support.constant.property.math",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "js/ts variable.other.constant",
      scope: "variable.other.constant",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "variable.other.constant.property",
      scope: "variable.other.constant.property",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "java type",
      scope: ["storage.type.annotation.java", "storage.type.object.array.java"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "java source",
      scope: "source.java",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "java modifier.import",
      scope:
        "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "java modifier.import",
      scope: "meta.method.java",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "java modifier.import",
      scope: "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "java instanceof",
      scope: "keyword.operator.instanceof.java",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "java variable.name",
      scope: "meta.definition.variable.name.java",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "operator logical",
      scope: "keyword.operator.logical",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "operator bitwise",
      scope: "keyword.operator.bitwise",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "operator channel",
      scope: "keyword.operator.channel",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "support.constant.property-value.scss",
      scope: "support.constant.property-value.scss,support.constant.property-value.css",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "CSS/SCSS/LESS Operators",
      scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "css color standard name",
      scope:
        "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss, constant.other.color",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "css comma",
      scope: "punctuation.separator.list.comma.css",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "css property-name",
      scope: "support.type.vendored.property-name.css",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "js/ts module",
      scope: "support.module.node,support.type.object.module,support.module.node",
      settings: {
        foreground: "#e2e8f0",
      },
    },
    {
      name: "entity.name.type.module",
      scope: "entity.name.type.module",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "meta.object-literal.key",
      scope: "meta.object-literal.key",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "variable.other.readwrite",
      scope: "variable.other.readwrite",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "booleans",
      scope: "  constant.language.boolean",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "js variables",
      scope:
        "meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "js/ts json",
      scope: "support.constant.json",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "js/ts Keyword",
      scope: [
        "keyword.operator.expression.instanceof",
        "keyword.operator.new",
        "keyword.operator.ternary",
        "keyword.operator.optional",
        "keyword.operator.expression.keyof",
      ],
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "js/ts console",
      scope: "support.type.object.console",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "js/ts support.variable.property.process",
      scope: "support.variable.property.process",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "js console function",
      scope: "entity.name.function,support.function.console",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "keyword.operator.misc.rust",
      scope: "keyword.operator.misc.rust",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "keyword.operator.sigil.rust",
      scope: "keyword.operator.sigil.rust",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "operator",
      scope: "keyword.operator.delete",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "js dom",
      scope: "support.type.object.dom",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "js dom variable",
      scope: "support.variable.dom,support.variable.property.dom",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "keyword.operator",
      scope:
        "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "C operator assignment",
      scope:
        "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "Punctuation/Operators",
      scope:
        "punctuation.separator.delimiter, punctuation.separator.comma, keyword.operator.arithmetic, keyword.operator.bitwise, keyword.operator.relational, keyword.operator.comparison, keyword.operator.logical",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "Other punctuation .c",
      scope: "punctuation.separator.c,punctuation.separator.cpp",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "C type posix-reserved",
      scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "keyword.operator.sizeof.c",
      scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "python parameter",
      scope: "variable.parameter.function.language.python",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "python type",
      scope: "support.type.python",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "python logical",
      scope: "keyword.operator.logical.python",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "pyCs",
      scope: "variable.parameter.function.python",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "python block",
      scope:
        "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "python function-call.generic",
      scope: "meta.function-call.generic.python",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "python placeholder reset to normal string",
      scope: "constant.character.format.placeholder.other.python",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "Operators",
      scope: "keyword.operator",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "Compound Assignment Operators",
      scope: "keyword.operator.assignment.compound",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "Compound Assignment Operators js/ts",
      scope:
        "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "Keywords",
      scope: "keyword",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "Namespaces",
      scope: "entity.name.namespace",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Variables",
      scope: "variable",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "Variables",
      scope: "variable.c",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "Language variables",
      scope: "variable.language",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Java Variables",
      scope: "token.variable.parameter.java",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "Java Imports",
      scope: "import.storage.java",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Packages",
      scope: "token.package.keyword",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "Packages",
      scope: "token.package",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "Functions",
      scope: [
        "entity.name.function",
        "meta.require",
        "support.function.any-method",
        "variable.function",
      ],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Classes",
      scope: "entity.name.type.namespace",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Classes",
      scope: "support.class, entity.name.type.class",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Class name",
      scope: "entity.name.class.identifier.namespace.type",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Class name",
      scope: ["entity.name.class", "variable.other.class.js", "variable.other.class.ts"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Class name php",
      scope: "variable.other.class.php",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "Type Name",
      scope: "entity.name.type",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Keyword Control",
      scope: "keyword.control",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "Control Elements",
      scope: "control.elements, keyword.operator.less",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "Methods",
      scope: "keyword.other.special-method",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: "#cbd5e1",
      },
    },
    {
      name: "Storage JS TS",
      scope: "token.storage",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
      scope:
        "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "Java Storage",
      scope: "token.storage.type.java",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Storage type",
      scope: "storage.type",
      settings: {
        foreground: "#94A3B8",
      },
    },
    {
      name: "Support",
      scope: "support.function",
      settings: {
        foreground: "#99f6e4",
      },
    },
    {
      name: "Support type",
      scope: "support.type.property-name",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "Support type",
      scope: "support.constant.property-value",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "Support type",
      scope: "support.constant.font-name",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "begin and end of meta tag",
      scope: "punctuation.definition.tag.begin, punctuation.definition.tag.end",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "Meta tag",
      scope: "meta.tag, text.html.derivative",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "Strings",
      scope: "string",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "Inherited Class",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Constant other symbol",
      scope: "constant.other.symbol",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "Integers",
      scope: "constant.numeric",
      settings: {
        foreground: "#e2e8f0",
      },
    },
    {
      name: "Constants",
      scope: "constant",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "punctuations",
      scope: "punctuation.accessor, punctuation.definition.block",
      settings: {
        foreground: "#64748B",
      },
    },
    {
      name: "Constants",
      scope: "punctuation.definition.constant",
      settings: {
        foreground: "#EFEFF1",
      },
    },
    {
      name: "Tags",
      scope: "entity.name.tag",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Attributes",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: "#cbd5e1",
      },
    },
    {
      name: "Attribute IDs",
      scope: "entity.other.attribute-name.id",
      settings: {
        fontStyle: "normal",
        foreground: "#f472b6",
      },
    },
    {
      name: "Attribute class",
      scope: "entity.other.attribute-name.class.css",
      settings: {
        fontStyle: "normal",
        foreground: "#f472b6",
      },
    },
    {
      name: "Selector",
      scope: "meta.selector",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "Headings",
      scope: "markup.heading",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "Headings",
      scope: "markup.heading punctuation.definition.heading, entity.name.section",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Units",
      scope: "keyword.other.unit",
      settings: {
        foreground: "#99f6e4",
      },
    },
    {
      name: "Bold",
      scope: "markup.bold,todo.bold",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "Bold",
      scope: "punctuation.definition.bold",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "markup Italic",
      scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "emphasis md",
      scope: "emphasis md",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown headings",
      scope: "entity.name.section.markdown",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
      scope: "punctuation.definition.heading.markdown",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "punctuation.definition.list.begin.markdown",
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown heading setext",
      scope: "markup.heading.setext",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
      scope: "punctuation.definition.bold.markdown",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Inline Raw",
      scope: "markup.inline.raw.markdown",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Inline Raw",
      scope: "markup.inline.raw.string.markdown",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
      scope: "punctuation.definition.list.markdown",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
      scope: [
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "punctuation.definition.metadata.markdown",
      ],
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "beginning.punctuation.definition.list.markdown",
      scope: ["beginning.punctuation.definition.list.markdown"],
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
      scope: "punctuation.definition.metadata.markdown",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
      scope: "markup.underline.link.markdown,markup.underline.link.image.markdown",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
      scope: "string.other.link.title.markdown,string.other.link.description.markdown",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Regular Expressions",
      scope: "string.regexp",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "Escape Characters",
      scope: "constant.character.escape",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "Embedded",
      scope: "punctuation.section.embedded, variable.interpolation",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "Embedded",
      scope: "punctuation.section.embedded.begin,punctuation.section.embedded.end",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "illegal",
      scope: "invalid.illegal",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "illegal",
      scope: "invalid.illegal.bad-ampersand.html",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "Broken",
      scope: "invalid.broken",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Deprecated",
      scope: "invalid.deprecated",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Unimplemented",
      scope: "invalid.unimplemented",
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > String Quoted Json",
      scope: "source.json meta.structure.dictionary.json > string.quoted.json",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
      scope:
        "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
      scope:
        "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
      scope:
        "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "[VSCODE-CUSTOM] JSON Property Name",
      scope: "support.type.property-name.json",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
      scope: "support.type.property-name.json punctuation",
      settings: {
        foreground: "#64748B",
      },
    },
    {
      name: "laravel blade tag",
      scope:
        "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "laravel blade @",
      scope:
        "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "use statement for other classes",
      scope:
        "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "error suppression",
      scope: "keyword.operator.error-control.php",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "php instanceof",
      scope: "keyword.operator.type.php",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "style double quoted array index normal begin",
      scope: "punctuation.section.array.begin.php",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "style double quoted array index normal end",
      scope: "punctuation.section.array.end.php",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "php illegal.non-null-typehinted",
      scope: "invalid.illegal.non-null-typehinted.php",
      settings: {
        foreground: "#f44747",
      },
    },
    {
      name: "php types",
      scope:
        "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "php call-function",
      scope:
        "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "php function-resets",
      scope:
        "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "support php constants",
      scope: "support.constant.core.rust",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "support php constants",
      scope:
        "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "php goto",
      scope: "entity.name.goto-label.php,support.other.php",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "php logical/bitwise operator",
      scope:
        "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "php regexp operator",
      scope: "keyword.operator.regexp.php",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "php comparison",
      scope: "keyword.operator.comparison.php",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "php heredoc/nowdoc",
      scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "python function decorator @",
      scope: "meta.function.decorator.python",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "python function support",
      scope: "support.token.decorator.python,meta.function.decorator.identifier.python",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "parameter function js/ts",
      scope: "function.parameter",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "brace function",
      scope: "function.brace",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "parameter function ruby cs",
      scope: "function.parameter.ruby, function.parameter.cs",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "constant.language.symbol.ruby",
      scope: "constant.language.symbol.ruby",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "rgb-value",
      scope: "rgb-value",
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "rgb value",
      scope: "inline-color-decoration rgb-value",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "rgb value less",
      scope: "less rgb-value",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "sass selector",
      scope: "selector.sass",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "round/terminator",
      scope: "meta.brace.round, punctuation.terminator.statement",
      settings: {
        foreground: "#64748B",
      },
    },
    {
      name: "ts primitive/builtin types",
      scope:
        "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "block scope",
      scope: "block.scope.end,block.scope.begin",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "cs storage type",
      scope: "storage.type.cs",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "cs local variable",
      scope: "entity.name.variable.local.cs",
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: "#f44747",
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "String interpolation",
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded",
      ],
      settings: {
        foreground: "#64748B",
      },
    },
    {
      name: "Reset JavaScript string interpolation expression",
      scope: ["meta.template.expression"],
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "Import module JS",
      scope: ["keyword.operator.module"],
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "js Flowtype",
      scope: ["support.type.type.flowtype"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "js Flow",
      scope: ["support.type.primitive"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "js class prop",
      scope: ["meta.property.object"],
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "js func parameter",
      scope: ["variable.parameter.function.js"],
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "js template literals begin",
      scope: ["keyword.other.template.begin"],
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "js template literals end",
      scope: ["keyword.other.template.end"],
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "js template literals variable braces begin",
      scope: ["keyword.other.substitution.begin"],
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "js template literals variable braces end",
      scope: ["keyword.other.substitution.end"],
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "js operator.assignment",
      scope: ["keyword.operator.assignment"],
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "go operator",
      scope: ["keyword.operator.assignment.go"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "go operator",
      scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "Go package name",
      scope: ["entity.name.package.go"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "elm prelude",
      scope: ["support.type.prelude.elm"],
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "elm constant",
      scope: ["support.constant.elm"],
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "template literal",
      scope: ["punctuation.quasi.element"],
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "html/pug (jade) escaped characters and entities",
      scope: ["constant.character.entity"],
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
      scope: [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class",
      ],
      settings: {
        foreground: "#cbd5e1",
      },
    },
    {
      name: "Clojure globals",
      scope: ["entity.global.clojure"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Clojure symbols",
      scope: ["meta.symbol.clojure"],
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "Clojure constants",
      scope: ["constant.keyword.clojure"],
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "CoffeeScript Function Argument",
      scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "Ini Default Text",
      scope: ["source.ini"],
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "Makefile prerequisities",
      scope: ["meta.scope.prerequisites.makefile"],
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "Makefile text colour",
      scope: ["source.makefile"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Groovy import names",
      scope: ["storage.modifier.import.groovy"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Groovy Methods",
      scope: ["meta.method.groovy"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Groovy Variables",
      scope: ["meta.definition.variable.name.groovy"],
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "Groovy Inheritance",
      scope: ["meta.definition.class.inherited.classes.groovy"],
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "HLSL Semantic",
      scope: ["support.variable.semantic.hlsl"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "HLSL Types",
      scope: [
        "support.type.texture.hlsl",
        "support.type.sampler.hlsl",
        "support.type.object.hlsl",
        "support.type.object.rw.hlsl",
        "support.type.fx.hlsl",
        "support.type.object.hlsl",
      ],
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "SQL Variables",
      scope: ["text.variable", "text.bracketed"],
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "types",
      scope: ["support.type.swift", "support.type.vb.asp"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "heading 1, keyword",
      scope: ["entity.name.function.xi"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "heading 2, callable",
      scope: ["entity.name.class.xi"],
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "heading 3, property",
      scope: ["constant.character.character-class.regexp.xi"],
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "heading 4, type, class, interface",
      scope: ["constant.regexp.xi"],
      settings: {
        foreground: "#adb6c4",
      },
    },
    {
      name: "heading 5, enums, preprocessor, constant, decorator",
      scope: ["keyword.control.xi"],
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "heading 6, number",
      scope: ["invalid.xi"],
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "string",
      scope: ["beginning.punctuation.definition.quote.markdown.xi"],
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "comments",
      scope: ["beginning.punctuation.definition.list.markdown.xi"],
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "link",
      scope: ["constant.character.xi"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "accent",
      scope: ["accent.xi"],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "wikiword",
      scope: ["wikiword.xi"],
      settings: {
        foreground: "#7dd3fc",
      },
    },
    {
      name: "language operators like '+', '-' etc",
      scope: ["constant.other.color.rgb-value.xi"],
      settings: {
        foreground: "#ffffff",
      },
    },
    {
      name: "elements to dim",
      scope: ["punctuation.definition.tag.xi"],
      settings: {
        foreground: "#7f848e",
      },
    },
    {
      name: "C++/C#",
      scope: [
        "entity.name.label.cs",
        "entity.name.scope-resolution.function.call",
        "entity.name.scope-resolution.function.definition",
      ],
      settings: {
        foreground: "#f472b6",
      },
    },
    {
      name: "Markdown underscore-style headers",
      scope: [
        "entity.name.label.cs",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown",
      ],
      settings: {
        foreground: "#efeff1",
      },
    },
    {
      name: "meta.brace.square",
      scope: [" meta.brace.square"],
      settings: {
        foreground: "#64748b",
      },
    },
    {
      name: "Comments",
      scope: "comment, punctuation.definition.comment",
      settings: {
        fontStyle: "italic",
        foreground: "#7f848e",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Quote",
      scope: "markup.quote.markdown",
      settings: {
        foreground: "#7f848e",
      },
    },
    {
      name: "punctuation.definition.block.sequence.item.yaml",
      scope: "punctuation.definition.block.sequence.item.yaml",
      settings: {
        foreground: "#64748b",
      },
    },
    {
      scope: ["constant.language.symbol.elixir"],
      settings: {
        foreground: "#94a3b8",
      },
    },
    {
      name: "js/ts italic",
      scope:
        "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
      settings: {
        foreground: "#cbd5e1",
      },
    },
    {
      name: "comment",
      scope: "comment.line.double-slash,comment.block.documentation",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Python Keyword Control",
      scope: "keyword.control.import.python,keyword.control.flow.python",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "markup.italic.markdown",
      scope: "markup.italic.markdown",
      settings: {
        fontStyle: "italic",
      },
    },
  ],
  colors: {
    foreground: "#cccccc",
    focusBorder: "#007fd4",
    "selection.background": "#256aa7",
    "scrollbar.shadow": "#000000",
    "activityBar.foreground": "#38bdf8",
    "activityBar.background": "#0f172a",
    "activityBar.inactiveForeground": "#ffffff66",
    "activityBarBadge.foreground": "#38bdf8",
    "activityBarBadge.background": "#15334f",
    "activityBar.border": "#1e293b",
    "sideBar.background": "#0f172a",
    "sideBar.foreground": "#cccccc",
    "sideBarSectionHeader.background": "#00000000",
    "sideBarSectionHeader.foreground": "#cccccc",
    "sideBarSectionHeader.border": "#cccccc33",
    "sideBarTitle.foreground": "#ffffff",
    "sideBar.border": "#1e293b",
    "list.inactiveSelectionBackground": "#1e293b",
    "list.inactiveSelectionForeground": "#cccccc",
    "list.hoverBackground": "#1e293b",
    "list.hoverForeground": "#cccccc",
    "list.activeSelectionBackground": "#1e293b",
    "list.activeSelectionForeground": "#ffffff",
    "tree.indentGuidesStroke": "#585858",
    "list.dropBackground": "#1e293b",
    "list.highlightForeground": "#0097fb",
    "list.focusBackground": "#062f4a",
    "list.focusForeground": "#cccccc",
    "listFilterWidget.background": "#15334e",
    "listFilterWidget.outline": "#00000000",
    "listFilterWidget.noMatchesOutline": "#be1100",
    "statusBar.foreground": "#ffffff",
    "statusBar.background": "#1e293b",
    "statusBarItem.hoverBackground": "#ffffff1f",
    "statusBar.debuggingBackground": "#cc6633",
    "statusBar.debuggingForeground": "#ffffff",
    "statusBar.noFolderBackground": "#68217a",
    "statusBar.noFolderForeground": "#ffffff",
    "statusBarItem.remoteBackground": "#16825d",
    "statusBarItem.remoteForeground": "#ffffff",
    "titleBar.activeBackground": "#0f172a",
    "titleBar.activeForeground": "#cccccc",
    "titleBar.inactiveBackground": "#12192a",
    "titleBar.inactiveForeground": "#cccccc99",
    "titleBar.border": "#00000000",
    "menubar.selectionForeground": "#cccccc",
    "menubar.selectionBackground": "#ffffff1a",
    "menu.foreground": "#cccccc",
    "menu.background": "#0f172a",
    "menu.selectionForeground": "#ffffff",
    "menu.selectionBackground": "#094771",
    "menu.selectionBorder": "#1e293b",
    "menu.separatorBackground": "#bbbbbb",
    "menu.border": "#1e293b",
    "button.background": "#0ea5e9",
    "button.foreground": "#ffffff",
    "button.hoverBackground": "#38bdf8",
    "button.secondaryForeground": "#94a3b8",
    "button.secondaryBackground": "#1e293b",
    "button.secondaryHoverBackground": "#334155",
    "input.background": "#0f172a",
    "input.border": "#00000000",
    "input.foreground": "#cccccc",
    "inputOption.activeBackground": "#007fd466",
    "inputOption.activeBorder": "#007acc00",
    "inputOption.activeForeground": "#ffffff",
    "input.placeholderForeground": "#a6a6a6",
    "textLink.foreground": "#3794ff",
    "editor.background": "#1e293b",
    "editor.foreground": "#64748b",
    "editorLineNumber.foreground": "#475569",
    "editorCursor.foreground": "#aeafad",
    "editorCursor.background": "#000000",
    "editor.selectionBackground": "#2d4358",
    "editor.inactiveSelectionBackground": "#264f7890",
    "editorWhitespace.foreground": "#e3e4e229",
    "editor.selectionHighlightBackground": "#add6ff26",
    "editor.selectionHighlightBorder": "#495F77",
    "editor.findMatchBackground": "#515c6a",
    "editor.findMatchBorder": "#74879f",
    "editor.findMatchHighlightBackground": "#ea5c0055",
    "editor.findMatchHighlightBorder": "#ffffff00",
    "editor.findRangeHighlightBackground": "#3a3d4166",
    "editor.findRangeHighlightBorder": "#ffffff00",
    "editor.rangeHighlightBackground": "#ffffff0b",
    "editor.rangeHighlightBorder": "#ffffff00",
    "editor.hoverHighlightBackground": "#264f7840",
    "editor.wordHighlightStrongBackground": "#004972b8",
    "editor.wordHighlightBackground": "#575757b8",
    "editor.lineHighlightBackground": "#ffffff0A",
    "editor.lineHighlightBorder": "#2a3143",
    "editorLineNumber.activeForeground": "#c6c6c6",
    "editorLink.activeForeground": "#4e94ce",
    "editorIndentGuide.background": "#ffffff0f",
    "editorIndentGuide.activeBackground": "#707070",
    "editorRuler.foreground": "#5a5a5a",
    "editorBracketMatch.background": "#0064001a",
    "editorBracketMatch.border": "#888888",
    "editor.foldBackground": "#264f784d",
    "editorOverviewRuler.background": "#25252500",
    "editorOverviewRuler.border": "#7f7f7f4d",
    "editorError.foreground": "#f48771",
    "editorError.background": "#B73A3400",
    "editorError.border": "#ffffff00",
    "editorWarning.foreground": "#cca700",
    "editorWarning.background": "#A9904000",
    "editorWarning.border": "#ffffff00",
    "editorInfo.foreground": "#75beff",
    "editorInfo.background": "#4490BF00",
    "editorInfo.border": "#4490BF00",
    "editorGutter.background": "#1e293b",
    "editorGutter.modifiedBackground": "#0c7d9d",
    "editorGutter.addedBackground": "#587c0c",
    "editorGutter.deletedBackground": "#94151b",
    "editorGutter.foldingControlForeground": "#c5c5c5",
    "editorCodeLens.foreground": "#999999",
    "editorGroup.border": "#151515",
    "diffEditor.insertedTextBackground": "#9bb95530",
    "diffEditor.removedTextBackground": "#ff000033",
    "diffEditor.border": "#444444",
    "panel.background": "#131c30",
    "panel.border": "#1e293b",
    "panelTitle.activeBorder": "#38bdf8",
    "panelTitle.activeForeground": "#e7e7e7",
    "panelTitle.inactiveForeground": "#748296",
    "badge.background": "#15334f",
    "badge.foreground": "#38bdf8",
    "terminal.foreground": "#cccccc",
    "terminal.selectionBackground": "#ffffff10",
    "terminalCursor.background": "#0087FF",
    "terminalCursor.foreground": "#ffffff",
    "terminal.border": "#1e293b",
    "terminal.ansiBlack": "#000000",
    "terminal.ansiBlue": "#2472c8",
    "terminal.ansiBrightBlack": "#666666",
    "terminal.ansiBrightBlue": "#3b8eea",
    "terminal.ansiBrightCyan": "#29b8db",
    "terminal.ansiBrightGreen": "#23d18b",
    "terminal.ansiBrightMagenta": "#d670d6",
    "terminal.ansiBrightRed": "#f14c4c",
    "terminal.ansiBrightWhite": "#e5e5e5",
    "terminal.ansiBrightYellow": "#f5f543",
    "terminal.ansiCyan": "#11a8cd",
    "terminal.ansiGreen": "#0dbc79",
    "terminal.ansiMagenta": "#bc3fbc",
    "terminal.ansiRed": "#cd3131",
    "terminal.ansiWhite": "#e5e5e5",
    "terminal.ansiYellow": "#e5e510",
    "breadcrumb.background": "#1e293b",
    "breadcrumb.foreground": "#cccccccc",
    "breadcrumb.focusForeground": "#e0e0e0",
    "editorGroupHeader.border": "#1e293b",
    "editorGroupHeader.tabsBackground": "#283447",
    "tab.activeForeground": "#7dd3fc",
    "tab.border": "#1e293b",
    "tab.activeBackground": "#1e293b",
    "tab.activeBorder": "#00000000",
    "tab.activeBorderTop": "#00000000",
    "tab.inactiveBackground": "#283447",
    "tab.inactiveForeground": "#ffffff80",
    "tab.hoverBackground": "#1e293b90",
    "tab.hoverBorder": "#1e293b",
    "scrollbarSlider.background": "#676767",
    "scrollbarSlider.hoverBackground": "#7b7b7b",
    "scrollbarSlider.activeBackground": "#a1a1a1",
    "progressBar.background": "#0e70c0",
    "widget.shadow": "#0000005c",
    "editorWidget.foreground": "#cccccc",
    "editorWidget.background": "#0f172a",
    "editorWidget.resizeBorder": "#38bdf8",
    "pickerGroup.border": "#1e293b",
    "pickerGroup.foreground": "#3794ff",
    "debugToolBar.background": "#0f172a",
    "debugToolBar.border": "#1e293b",
    "notifications.foreground": "#cccccc",
    "notifications.background": "#0f172a",
    "notificationToast.border": "#1e293b",
    "notificationsErrorIcon.foreground": "#f48771",
    "notificationsWarningIcon.foreground": "#cca700",
    "notificationsInfoIcon.foreground": "#75beff",
    "notificationCenter.border": "#1e293b",
    "notificationCenterHeader.foreground": "#cccccc",
    "notificationCenterHeader.background": "#1e293b",
    "notifications.border": "#1e293b",
    "gitDecoration.addedResourceForeground": "#81b88b",
    "gitDecoration.conflictingResourceForeground": "#6c6cc4",
    "gitDecoration.deletedResourceForeground": "#c74e39",
    "gitDecoration.ignoredResourceForeground": "#8c8c8c",
    "gitDecoration.modifiedResourceForeground": "#e2c08d",
    "gitDecoration.stageDeletedResourceForeground": "#c74e39",
    "gitDecoration.stageModifiedResourceForeground": "#e2c08d",
    "gitDecoration.submoduleResourceForeground": "#8db9e2",
    "gitDecoration.untrackedResourceForeground": "#73c991",
    "editorMarkerNavigation.background": "#0f172a",
    "editorMarkerNavigationError.background": "#f4877199",
    "editorMarkerNavigationWarning.background": "#cca70099",
    "editorMarkerNavigationInfo.background": "#75beff99",
    "merge.currentHeaderBackground": "#367366",
    "merge.currentContentBackground": "#27403B",
    "merge.incomingHeaderBackground": "#395F8F",
    "merge.incomingContentBackground": "#28384B",
    "merge.commonHeaderBackground": "#383838",
    "merge.commonContentBackground": "#282828",
    "editorSuggestWidget.background": "#334155",
    "editorSuggestWidget.border": "#334155",
    "editorSuggestWidget.foreground": "#efeff1",
    "editorSuggestWidget.highlightForeground": "#7dd3fc",
    "editorSuggestWidget.selectedBackground": "#475569",
    "editorHoverWidget.foreground": "#e2e8f0",
    "editorHoverWidget.background": "#1e293b",
    "editorHoverWidget.border": "#0e131b",
    "peekView.border": "#353f4f",
    "peekViewEditor.background": "#1e293b",
    "peekViewEditorGutter.background": "#001f33",
    "peekViewEditor.matchHighlightBackground": "#283447",
    "peekViewEditor.matchHighlightBorder": "#566377",
    "peekViewResult.background": "#283447",
    "peekViewResult.fileForeground": "#cdcdcd",
    "peekViewResult.lineForeground": "#bbbbbb",
    "peekViewResult.matchHighlightBackground": "#ea5c004d",
    "peekViewResult.selectionBackground": "#3399ff33",
    "peekViewResult.selectionForeground": "#ffffff",
    "peekViewTitle.background": "#283447",
    "peekViewTitleDescription.foreground": "#ccccccb3",
    "peekViewTitleLabel.foreground": "#7dd3fc",
    "icon.foreground": "#cccccc",
    "checkbox.background": "#2b3447",
    "checkbox.foreground": "#cccccc",
    "checkbox.border": "#00000000",
    "dropdown.background": "#0f172a",
    "dropdown.foreground": "#cccccc",
    "dropdown.border": "#00000000",
    "minimapGutter.addedBackground": "#587c0c",
    "minimapGutter.modifiedBackground": "#0c7d9d",
    "minimapGutter.deletedBackground": "#94151b",
    "minimap.findMatchHighlight": "#515c6a",
    "minimap.selectionHighlight": "#2d4358",
    "minimap.errorHighlight": "#f48771",
    "minimap.warningHighlight": "#cca700",
    "minimap.background": "#0d1628",
    "sideBar.dropBackground": "#1e293b",
    "editorGroup.emptyBackground": "#0d1628",
    "panelSection.border": "#1e293b",
    "statusBarItem.activeBackground": "#FFFFFF25",
    "settings.headerForeground": "#cccccc",
    "settings.focusedRowBackground": "#ffffff07",
    "walkThrough.embeddedEditorBackground": "#00000050",
    "breadcrumb.activeSelectionForeground": "#e0e0e0",
    "editorGutter.commentRangeForeground": "#c5c5c5",
    "debugExceptionWidget.background": "#0f172a",
    "debugExceptionWidget.border": "#1e293b",
  },
};