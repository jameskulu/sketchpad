import type { Locale } from "./locales";
import type { ToolPageKey } from "./tool-content-types";

export interface ToolUIStrings {
  exportSvg: string;
  exportSvgShort: string;
  tools: {
    highlighter: string;
    sticky: string;
    stamp: string;
  };
  graph: {
    gridSize: string;
    gridSizeAria: string;
    styleHeading: string;
    square: string;
    dots: string;
    lines: string;
    snapToGrid: string;
    snapToGridAria: string;
  };
  boardNav: {
    boards: string;
    menuAria: string;
    short: Record<ToolPageKey, string>;
  };
  kids: {
    stampsHeading: string;
    stampHint: string;
    draw: string;
    erase: string;
    clear: string;
    undo: string;
    redo: string;
    download: string;
    paletteHeading: string;
  };
}

export type ToolUI = Record<Locale, ToolUIStrings>;

const en: ToolUIStrings = {
  exportSvg: "Download SVG",
  exportSvgShort: "SVG",
  tools: { highlighter: "Highlighter", sticky: "Sticky note", stamp: "Stamp" },
  graph: {
    gridSize: "Grid size",
    gridSizeAria: "Grid size",
    styleHeading: "Grid style",
    square: "Square",
    dots: "Dots",
    lines: "Lines",
    snapToGrid: "Snap to grid",
    snapToGridAria: "Snap drawing to the grid",
  },
  boardNav: {
    boards: "Boards",
    menuAria: "Drawing tools and boards",
    short: {
      "online-drawing": "Drawing Tool",
      "drawing-board": "Drawing Board",
      whiteboard: "Whiteboard",
      "graph-paper": "Graph Paper",
      "kids-drawing": "Drawing for Kids",
    },
  },
  kids: {
    stampsHeading: "Stamps",
    stampHint: "Pick a stamp, then tap the canvas to place it.",
    draw: "Draw",
    erase: "Erase",
    clear: "Clear",
    undo: "Undo",
    redo: "Redo",
    download: "Download",
    paletteHeading: "Colors",
  },
};

export const TOOL_UI: ToolUI = {
  en,
  es: {
    exportSvg: "Descargar SVG",
    exportSvgShort: "SVG",
    tools: { highlighter: "Resaltador", sticky: "Nota adhesiva", stamp: "Sello" },
    graph: {
      gridSize: "Tamaño de la cuadrícula",
      gridSizeAria: "Tamaño de la cuadrícula",
      styleHeading: "Estilo de la cuadrícula",
      square: "Cuadrícula",
      dots: "Puntos",
      lines: "Líneas",
      snapToGrid: "Ajustar a la cuadrícula",
      snapToGridAria: "Ajustar el dibujo a la cuadrícula",
    },
    boardNav: {
      boards: "Pizarras",
      menuAria: "Herramientas de dibujo y pizarras",
      short: {
        "online-drawing": "Herramienta de Dibujo",
        "drawing-board": "Pizarra de Dibujo",
        whiteboard: "Pizarra Blanca",
        "graph-paper": "Papel Cuadriculado",
        "kids-drawing": "Dibujo para Niños",
      },
    },
    kids: {
      stampsHeading: "Sellos",
      stampHint: "Elige un sello y toca el lienzo para colocarlo.",
      draw: "Dibujar",
      erase: "Borrar",
      clear: "Limpiar",
      undo: "Deshacer",
      redo: "Rehacer",
      download: "Descargar",
      paletteHeading: "Colores",
    },
  },
  ja: {
    exportSvg: "SVGをダウンロード",
    exportSvgShort: "SVG",
    tools: { highlighter: "蛍光ペン", sticky: "付箋", stamp: "スタンプ" },
    graph: {
      gridSize: "グリッドサイズ",
      gridSizeAria: "グリッドサイズ",
      styleHeading: "グリッドのスタイル",
      square: "方眼",
      dots: "ドット",
      lines: "罫線",
      snapToGrid: "グリッドにスナップ",
      snapToGridAria: "描画をグリッドにスナップ",
    },
    boardNav: {
      boards: "ボード",
      menuAria: "お絵かきツールとボード",
      short: {
        "online-drawing": "お絵かきツール",
        "drawing-board": "製図ボード",
        whiteboard: "ホワイトボード",
        "graph-paper": "方眼紙",
        "kids-drawing": "子ども向けお絵かき",
      },
    },
    kids: {
      stampsHeading: "スタンプ",
      stampHint: "スタンプを選んで、キャンバスをタップして置きます。",
      draw: "おえかき",
      erase: "けしゴム",
      clear: "きれいにする",
      undo: "もどす",
      redo: "やりなおす",
      download: "セーブ",
      paletteHeading: "いろ",
    },
  },
  fr: {
    exportSvg: "Télécharger SVG",
    exportSvgShort: "SVG",
    tools: { highlighter: "Surligneur", sticky: "Note adhésive", stamp: "Tampon" },
    graph: {
      gridSize: "Taille de la grille",
      gridSizeAria: "Taille de la grille",
      styleHeading: "Style de la grille",
      square: "Quadrillage",
      dots: "Points",
      lines: "Lignes",
      snapToGrid: "Aligner sur la grille",
      snapToGridAria: "Aligner le dessin sur la grille",
    },
    boardNav: {
      boards: "Tableaux",
      menuAria: "Outils de dessin et tableaux",
      short: {
        "online-drawing": "Outil de Dessin",
        "drawing-board": "Planche de Dessin",
        whiteboard: "Tableau Blanc",
        "graph-paper": "Papier Quadrillé",
        "kids-drawing": "Dessin pour Enfants",
      },
    },
    kids: {
      stampsHeading: "Tampons",
      stampHint: "Choisis un tampon, puis touche la toile pour le poser.",
      draw: "Dessiner",
      erase: "Gomme",
      clear: "Effacer",
      undo: "Annuler",
      redo: "Rétablir",
      download: "Télécharger",
      paletteHeading: "Couleurs",
    },
  },
  de: {
    exportSvg: "SVG herunterladen",
    exportSvgShort: "SVG",
    tools: { highlighter: "Textmarker", sticky: "Haftnotiz", stamp: "Stempel" },
    graph: {
      gridSize: "Rastergröße",
      gridSizeAria: "Rastergröße",
      styleHeading: "Rasterstil",
      square: "Kariert",
      dots: "Punkte",
      lines: "Linien",
      snapToGrid: "Am Raster einrasten",
      snapToGridAria: "Zeichnung am Raster einrasten",
    },
    boardNav: {
      boards: "Boards",
      menuAria: "Zeichenwerkzeuge und Boards",
      short: {
        "online-drawing": "Zeichenwerkzeug",
        "drawing-board": "Zeichenbrett",
        whiteboard: "Whiteboard",
        "graph-paper": "Millimeterpapier",
        "kids-drawing": "Zeichnen für Kinder",
      },
    },
    kids: {
      stampsHeading: "Stempel",
      stampHint: "Wähle einen Stempel und tippe auf das Blatt, um ihn zu setzen.",
      draw: "Malen",
      erase: "Radieren",
      clear: "Leeren",
      undo: "Rückgängig",
      redo: "Wiederholen",
      download: "Speichern",
      paletteHeading: "Farben",
    },
  },
  pt: {
    exportSvg: "Baixar SVG",
    exportSvgShort: "SVG",
    tools: { highlighter: "Marca-texto", sticky: "Nota adesiva", stamp: "Carimbo" },
    graph: {
      gridSize: "Tamanho da grade",
      gridSizeAria: "Tamanho da grade",
      styleHeading: "Estilo da grade",
      square: "Quadriculado",
      dots: "Pontos",
      lines: "Linhas",
      snapToGrid: "Ajustar à grade",
      snapToGridAria: "Ajustar o desenho à grade",
    },
    boardNav: {
      boards: "Quadros",
      menuAria: "Ferramentas de desenho e quadros",
      short: {
        "online-drawing": "Ferramenta de Desenho",
        "drawing-board": "Quadro de Desenho",
        whiteboard: "Quadro Branco",
        "graph-paper": "Papel Quadriculado",
        "kids-drawing": "Desenho para Crianças",
      },
    },
    kids: {
      stampsHeading: "Carimbos",
      stampHint: "Escolha um carimbo e toque na tela para colocá-lo.",
      draw: "Desenhar",
      erase: "Borracha",
      clear: "Limpar",
      undo: "Desfazer",
      redo: "Refazer",
      download: "Baixar",
      paletteHeading: "Cores",
    },
  },
  ko: {
    exportSvg: "SVG 다운로드",
    exportSvgShort: "SVG",
    tools: { highlighter: "형광펜", sticky: "메모지", stamp: "스탬프" },
    graph: {
      gridSize: "격자 크기",
      gridSizeAria: "격자 크기",
      styleHeading: "격자 스타일",
      square: "모눈",
      dots: "점",
      lines: "선",
      snapToGrid: "격자에 맞추기",
      snapToGridAria: "그림을 격자에 맞추기",
    },
    boardNav: {
      boards: "보드",
      menuAria: "그리기 도구와 보드",
      short: {
        "online-drawing": "드로잉 도구",
        "drawing-board": "드로잉 보드",
        whiteboard: "화이트보드",
        "graph-paper": "모눈종이",
        "kids-drawing": "어린이용 그리기",
      },
    },
    kids: {
      stampsHeading: "스탬프",
      stampHint: "스탬프를 고르고 캔버스를 눌러 놓으세요.",
      draw: "그리기",
      erase: "지우개",
      clear: "비우기",
      undo: "실행 취소",
      redo: "다시 실행",
      download: "저장",
      paletteHeading: "색깔",
    },
  },
  it: {
    exportSvg: "Scarica SVG",
    exportSvgShort: "SVG",
    tools: { highlighter: "Evidenziatore", sticky: "Note adesive", stamp: "Timbro" },
    graph: {
      gridSize: "Dimensione griglia",
      gridSizeAria: "Dimensione griglia",
      styleHeading: "Stile griglia",
      square: "Quadretti",
      dots: "Punti",
      lines: "Linee",
      snapToGrid: "Allinea alla griglia",
      snapToGridAria: "Allinea il disegno alla griglia",
    },
    boardNav: {
      boards: "Lavagne",
      menuAria: "Strumenti di disegno e lavagne",
      short: {
        "online-drawing": "Strumento di Disegno",
        "drawing-board": "Tavoletta di Disegno",
        whiteboard: "Lavagna",
        "graph-paper": "Carta a Quadretti",
        "kids-drawing": "Disegno per Bambini",
      },
    },
    kids: {
      stampsHeading: "Timbri",
      stampHint: "Scegli un timbro e tocca la tela per piazzarlo.",
      draw: "Disegna",
      erase: "Gomma",
      clear: "Cancella",
      undo: "Annulla",
      redo: "Ripeti",
      download: "Scarica",
      paletteHeading: "Colori",
    },
  },
  zh: {
    exportSvg: "下载 SVG",
    exportSvgShort: "SVG",
    tools: { highlighter: "荧光笔", sticky: "便利贴", stamp: "图章" },
    graph: {
      gridSize: "网格大小",
      gridSizeAria: "网格大小",
      styleHeading: "网格样式",
      square: "方格",
      dots: "圆点",
      lines: "线条",
      snapToGrid: "对齐网格",
      snapToGridAria: "将绘图对齐到网格",
    },
    boardNav: {
      boards: "画板",
      menuAria: "绘图工具和画板",
      short: {
        "online-drawing": "绘图工具",
        "drawing-board": "绘图板",
        whiteboard: "白板",
        "graph-paper": "方格纸",
        "kids-drawing": "儿童画画",
      },
    },
    kids: {
      stampsHeading: "图章",
      stampHint: "选一个图章，然后点击画布放置。",
      draw: "画画",
      erase: "橡皮",
      clear: "清空",
      undo: "撤销",
      redo: "重做",
      download: "下载",
      paletteHeading: "颜色",
    },
  },
};

export function toolUiFor(locale: Locale): ToolUIStrings {
  return TOOL_UI[locale] ?? TOOL_UI.en;
}