define({
  "_widgetLabel": "Suitability Modeler",
  "general": {
    "clear": "Vyčistiť",
    "cancel": "Zrušiť",
    "save": "Spustiť",
    "saveAs": "Export"
  },
  "saveModel": {
    "save": "Export",
    "title": "Názov: ",
    "summary": "Zhrnutie: ",
    "description": "Popis: ",
    "tags": "Štítky: ",
    "folder": "Priečinok: ",
    "homeFolderPattern": "{username}(Domov)",
    "failed": "Export zlyhal."
  },
  "util": {
    "colorRamp": {
      "1": "Extrémne nízka",
      "2": "Veľmi nízka",
      "3": "Nízka",
      "4": "Nízka",
      "5": "Stredné",
      "6": "Stredne vysoká",
      "7": "Vysoká",
      "8": "Veľmi vysoká",
      "9": "Extrémne vysoká",
      "low": "Nízka",
      "high": "Vysoká",
      "tipPattern": "{label} ({value})",
      "flipCaption": "Prevrátiť"
    }
  },
  "wro": {
    "caption": "Suitability Modeler",
    "browsePrompt": "Služba váženého prekrytia",
    "selectLayersCaption": "Vybrať vrstvy",
    "selectLayers": "Vrstvy",
    "designModelCaption": "Dizajnovať model",
    "designModel": "Dizajnovať model",
    "transparency": "Priehľadnosť",
    "visible": "Viditeľný",
    "total": "Celkový počet",
    "unableToLoad": "Nie je možné načítať model.",
    "projectNotOpen": "Projekt nie je otvorený.",
    "readMore": "Čítať viac",
    "validation": {
      "validating": "Overovanie...",
      "invalidItemCaption": "Varovanie služby váženého prekrytia",
      "notAnImageService": "Táto položka nie je služba pre snímky.",
      "notAWroService": "Táto položka nie je služba váženého prekrytia.",
      "undefinedUrl": "URL tejto položky nie je definovaná.",
      "inaccessible": "Služba je nedostupná.",
      "generalError": "Nie je možné otvoriť položku.",
      "missingFieldPattern": "{field} je povinné pole",
      "notAllowRasterFunction": "funkciaPovoliťRaster musí byť nastavená na pravdivú",
      "notNearestResampling": "metódaPredvolenéhoPrevzorkovania musí byť najbližšia",
      "notIsWeightedOverlayProp": "Kľúčová vlastnosť JeVáženéPrekrytie musí byť nastavená na pravdivú",
      "invalidLink": "Táto URL je neplatná. Zlyhalo otvorenie stránky pre vybranú vrstvu.",
      "unexpectedError": "Objavil sa nečakaný stav.",
      "rangeMessage": "Hodnota musí byť medzi ${0} a ${1}",
      "rangeMessage100": "Hodnota musí byť medzi 0 a 100",
      "maxLayers": "Maximálne ${0} vrstiev povolených službou, pred pridaním novej vrstvy musíte najskôr odstrániť vrstvu.",
      "notFound": "Vrstva ${0} nebola nájdená v službe váženého prekrytia",
      "wroServiceNotDefined": "Pre model nie je definovaná žiadna služba váženého prekrytia.",
      "overlayLayerOutputInvalid": "Vrstva prekrytia [${0}] premapuje rozsahy [${1}] hodnota výstupu chýba alebo je neplatná",
      "overlayLayerInputInvalid": "Vrstva prekrytia [${0}] premapuje rozsahy [${1}] min/max výstup chýba alebo je neplatný",
      "overlayLayerRangesMissing": "Vrstva prekrytia [${0}] postráda premapované rozsahy",
      "overlayLayerWeight": "Váha vrstvy prekrytia musí pridať do 100",
      "overlayLayerRequired": "Vyžaduje sa aspoň jedna vrstva prekrytia",
      "overlayLayerNotDefined": "Vrstva prekrytia nie je definovaná",
      "requiresColormap": "Táto funkcia rastra vyžaduje farebnú mapu, ale model nemá platnú definíciu farebnej mapy",
      "createModelError": "Chyba pri vytváraní modelu",
      "invalidModel": "Model nie je platný",
      "imageServiceNotDefined": "Vrstva služby pre snímky nie je definovaná",
      "imageLayerNotDefined": "Vrstva služby pre snímky nie je definovaná",
      "histogramNotDefined": "Nie je definovaná funkcia histogramu váženého prekrytia."
    },
    "colorRampLabel": {
      "Green Yellow Red": "Zelená Žltá Červená",
      "Red Yellow Green": "Červená Žltá Zelená",
      "Yellow to Dark Red": "Žltá až tmavočervená",
      "Dark Red to Yellow": "Tmavočervená až žltá",
      "Light Gray to Dark Gray": "Svetlošedá až tmavošedá",
      "Dark Gray to Light Gray": "Tmavošedá až svetlošedá",
      "Light Brown to Dark Brown": "Svetlohnedá až tmavohnedá",
      "Dark Brown to Light Brown": "Tmavohnedá až svetlohnedá",
      "Full Spectrum - Bright Red to Blue": "Plné spektrum - svetločervená až modrá",
      "Full Spectrum - Bright Blue to Red": "Plné spektrum - svetlomodrá až červená",
      "Partial Spectrum - Yellow to Blue": "Čiastočné spektrum - žltá až modrá",
      "Partial Spectrum - Blue to Yellow": "Čiastočné spektrum - modrá až žltá",
      "Yellow-Green to Dark Blue": "Žlto-zelená až tmavomodrá",
      "Dark Blue to Yellow-Green": "Tmavomodrá až Žlto-zelená",
      "Cold to Hot Diverging": "Od studenej po horúcu, rozdvojená",
      "Hot to Cold Diverging": "Od horúcej po studenú, rozdvojená",
      "Surface - Low to High": "Povrch - od nízkeho po vysoký",
      "Surface - High to Low": "Povrch - od vysokého po nízky"
    }
  },
  "tabs": {
    "layers": "Vrstvy",
    "model": "Model",
    "chart": "Graf"
  },
  "chart": {
    "prompt": "Prvky",
    "working": "Akutalizuje sa...",
    "polygonTool": "Nakresliť polygón",
    "freehandPolygonTool": "Nakresliť polygón voľnou rukou",
    "selectTool": "Vybrať z vrstvy",
    "panTool": "Posun",
    "clearButton": "Vyčistiť",
    "noModelLayer": "Žiaden model.",
    "noSubjectLayers": "Vaša mapa nemá žiadne polygónové vrstvy.",
    "tipPattern": "${category} - ${label}: ${percent}%",
    "tipPattern2": "${category}: ${percent}%",
    "labelPattern": "${category} - ${label}"
  }
});