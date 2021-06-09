import { ikrpg } from "./module/config.js";
import IKRPGItemSheet from "./module/sheets/item/item-sheet.js";
import IKRPGActorsSheet from "./module/sheets/actor/actor-sheet.js";

async function preloadHandlebarsTemplate()
{
  const templatePaths = 
  [
    "systems/ikrpg/templates/sheets/actor/partials/character-stat-block.hbs",
    "systems/ikrpg/templates/sheets/actor/partials/character-header-block.hbs",
    "systems/ikrpg/templates/sheets/actor/partials/character-skill-block.hbs"
  ];

  return loadTemplates(templatePaths);
};

Hooks.once('init', function() 
  {
    CONFIG.ikrpg = ikrpg;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("ikrpg", IKRPGItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("ikrpg", IKRPGActorsSheet, { makeDefault: true });

    preloadHandlebarsTemplate();
  }
)