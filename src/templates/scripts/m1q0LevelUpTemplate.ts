export const m1q0LevelUpTemplate = `#include "nw_i0_plot"

void main()
{
    object oPC = GetPCLevellingUp();

    if (!GetIsObjectValid(oPC))
        return;

    // Originale Prelude-Logik
    if (GetLocalInt(oPC, "NW_JOURNAL_ENTRYJOUR_M1Q0Training") == 50)
    {
        AddJournalQuestEntry(
            "JOUR_M1Q0Training",
            60,
            oPC
        );
    }

    // Unsere Erweiterung
    ExecuteScript("__UPDATE_ITEMS_SCRIPT__", oPC);
}
`
