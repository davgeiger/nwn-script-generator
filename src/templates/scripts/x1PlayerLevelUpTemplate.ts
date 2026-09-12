export const x1PlayerLevelUpTemplate = `//::///////////////////////////////////////////////
//:: x1_playerlevelup.nss
//:: Copyright (c) 2001 Bioware Corp.
//:://////////////////////////////////////////////
/*
    Originale BioWare-LevelUp-Logik für Begleiter
    + Aktualisierung unserer Leveling-Ausrüstung.
*/
//::///////////////////////////////////////////////

#include "x0_i0_henchman"

void main()
{
    object oPC = GetPCLevellingUp();

    if (!GetIsObjectValid(oPC))
        return;

    // Originale BioWare-Logik
    LevelUpXP1Henchman(oPC);

    // Unsere Leveling-Ausrüstung
    ExecuteScript("__UPDATE_ITEMS_SCRIPT__", oPC);
}
`
