export function generateUpdateScript(updateItemsScriptName: string): string {
  return [
    "void main()",
    "{",
    "    object oPC = OBJECT_SELF;",
    "",
    `    ExecuteScript("${updateItemsScriptName}", oPC);`,
    "}",
  ].join("\n")
}
