export const nwO0LevelUpTemplate = `//::///////////////////////////////////////////////
//:: nw_O0_LevelUp.nss
//:: Copyright (c) 2001 Bioware Corp.
//:://////////////////////////////////////////////
/*
    Originale BioWare-LevelUp-Logik für Begleiter
    + Aktualisierung unserer Leveling-Ausrüstung.
*/
//::///////////////////////////////////////////////

#include "nw_i0_henchman"
#include "nw_i0_generic"

void main()
{
    object oPC = GetPCLevellingUp();

    if (GetIsObjectValid(oPC) == TRUE)
    {
        // Originale BioWare-Logik
        object oHench = GetHenchman(oPC);

        if (GetIsObjectValid(oHench) == TRUE)
        {
            if (GetCanLevelUp(oPC, oHench) == TRUE)
            {
                object oNew = DoLevelUp(oPC, oHench);

                if (GetIsObjectValid(oNew) == TRUE)
                {
                    DelayCommand(
                        1.0,
                        AssignCommand(
                            oNew,
                            EquipAppropriateWeapons(oPC)
                        )
                    );
                }
            }
        }

        // Unsere Leveling-Ausrüstung
        ExecuteScript("__UPDATE_ITEMS_SCRIPT__", oPC);
    }
}
`
