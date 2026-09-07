import type { Locale } from "./locales";

// Shared UI strings (shell + sketchpad chrome). These mirror the markup in
// the components/pages. Add keys as new chrome text appears.
export interface UIStrings {
  siteName: string;
  nav: {
    about: string;
    privacyPolicy: string;
    terms: string;
    contact: string;
  };
  footer: {
    openSketchpad: string;
    copyright: (year: string) => string;
  };
  canvas: {
    downloadPng: string;
    downloadPngShort: string;
    palette: string;
    undo: string;
    redo: string;
    toggleGrid: string;
    clearCanvas: string;
    toggleFullscreen: string;
    autosaveSaved: string;
    autosaveSaving: string;
    autosaveNotSaved: string;
    stroke: string;
    opacity: string;
    fillShapes: string;
    fillOn: string;
    fillOff: string;
    color: string;
    pickCustomColor: string;
    textSize: string;
    eraserSize: string;
    px: string;
    hints: string;
    drawingTools: string;
    toolOptions: string;
    strokeSizeAria: string;
    opacityAria: string;
    zoomIn: string;
    zoomOut: string;
    zoom100: string;
    zoomFit: string;
    statusHint: string;
  };
  tools: {
    brush: string;
    pencil: string;
    rect: string;
    ellipse: string;
    triangle: string;
    line: string;
    arrow: string;
    text: string;
    eraser: string;
  };
}

export type UI = Record<Locale, UIStrings>;

const en: UIStrings = {
  siteName: "Simple Sketchpad",
  nav: { about: "About", privacyPolicy: "Privacy Policy", terms: "Terms & Conditions", contact: "Contact Us" },
  footer: { openSketchpad: "Open sketchpad", copyright: (y) => `© ${y} Simple Sketchpad` },
  canvas: {
    downloadPng: "Download PNG (Ctrl+D)",
    downloadPngShort: "Download PNG",
    palette: "Open tools panel",
    undo: "Undo (Ctrl+Z)",
    redo: "Redo (Ctrl+Shift+Z)",
    toggleGrid: "Toggle grid (G)",
    clearCanvas: "Clear canvas",
    toggleFullscreen: "Toggle fullscreen (F)",
    autosaveSaved: "Saved",
    autosaveSaving: "Saving…",
    autosaveNotSaved: "Not saved",
    stroke: "Stroke",
    opacity: "Opacity",
    fillShapes: "Fill shapes",
    fillOn: "On",
    fillOff: "Off",
    color: "Color",
    pickCustomColor: "Pick custom color",
    textSize: "Text size",
    eraserSize: "Eraser",
    px: "px",
    hints: "Space pan · Ctrl+scroll zoom · [ ] size",
    drawingTools: "Drawing tools",
    toolOptions: "Tool options",
    strokeSizeAria: "Stroke size",
    opacityAria: "Opacity",
    zoomIn: "Zoom in (Ctrl++)",
    zoomOut: "Zoom out (Ctrl+−)",
    zoom100: "Reset zoom to 100%",
    zoomFit: "Fit drawing to screen",
    statusHint: "Click to draw · two fingers to zoom · Ctrl+scroll to zoom · double-click text to edit",
  },
  tools: {
    brush: "Brush",
    pencil: "Pencil",
    rect: "Rectangle",
    ellipse: "Ellipse",
    triangle: "Triangle",
    line: "Line",
    arrow: "Arrow",
    text: "Text",
    eraser: "Eraser",
  },
};

export const UI: UI = {
  en,
  es: {
    siteName: "Simple Sketchpad",
    nav: { about: "Acerca de", privacyPolicy: "Política de Privacidad", terms: "Términos y Condiciones", contact: "Contacto" },
    footer: { openSketchpad: "Abrir el sketchpad", copyright: (y) => `© ${y} Simple Sketchpad` },
    canvas: {
      downloadPng: "Descargar PNG (Ctrl+D)",
      downloadPngShort: "Descargar PNG",
      palette: "Abrir panel de herramientas",
      undo: "Deshacer (Ctrl+Z)",
      redo: "Rehacer (Ctrl+Shift+Z)",
      toggleGrid: "Activar cuadrícula (G)",
      clearCanvas: "Borrar lienzo",
      toggleFullscreen: "Pantalla completa (F)",
      autosaveSaved: "Guardado",
      autosaveSaving: "Guardando…",
      autosaveNotSaved: "Sin guardar",
      stroke: "Trazo",
      opacity: "Opacidad",
      fillShapes: "Rellenar formas",
      fillOn: "Sí",
      fillOff: "No",
      color: "Color",
      pickCustomColor: "Elegir color",
      textSize: "Tamaño del texto",
      eraserSize: "Borrador",
      px: "px",
      hints: "Espacio pan · Ctrl+scroll zoom · [ ] tamaño",
      drawingTools: "Herramientas de dibujo",
      toolOptions: "Opciones de la herramienta",
      strokeSizeAria: "Tamaño del trazo",
      opacityAria: "Opacidad",
      zoomIn: "Acercar (Ctrl++)",
      zoomOut: "Alejar (Ctrl+−)",
      zoom100: "Restablecer zoom al 100 %",
      zoomFit: "Ajustar dibujo a la pantalla",
      statusHint: "Haz clic para dibujar · dos dedos para zoom · Ctrl+scroll para zoom · doble clic para editar texto",
    },
    tools: {
      brush: "Pincel",
      pencil: "Lápiz",
      rect: "Rectángulo",
      ellipse: "Elipse",
      triangle: "Triángulo",
      line: "Línea",
      arrow: "Flecha",
      text: "Texto",
      eraser: "Borrador",
    },
  },
  ja: {
    siteName: "Simple Sketchpad",
    nav: { about: "概要", privacyPolicy: "プライバシーポリシー", terms: "利用規約", contact: "お問い合わせ" },
    footer: { openSketchpad: "スケッチパッドを開く", copyright: (y) => `© ${y} Simple Sketchpad` },
    canvas: {
      downloadPng: "PNGをダウンロード (Ctrl+D)",
      downloadPngShort: "PNGをダウンロード",
      palette: "ツールパネルを開く",
      undo: "元に戻す (Ctrl+Z)",
      redo: "やり直す (Ctrl+Shift+Z)",
      toggleGrid: "グリッド切り替え (G)",
      clearCanvas: "キャンバスを消去",
      toggleFullscreen: "全画面切り替え (F)",
      autosaveSaved: "保存済み",
      autosaveSaving: "保存中…",
      autosaveNotSaved: "未保存",
      stroke: "線",
      opacity: "不透明度",
      fillShapes: "図形を塗りつぶす",
      fillOn: "オン",
      fillOff: "オフ",
      color: "色",
      pickCustomColor: "色を選ぶ",
      textSize: "文字サイズ",
      eraserSize: "消しゴム",
      px: "px",
      hints: "Space パン · Ctrl+スクロール ズーム · [ ] サイズ",
      drawingTools: "描画ツール",
      toolOptions: "ツールオプション",
      strokeSizeAria: "線の太さ",
      opacityAria: "不透明度",
      zoomIn: "拡大 (Ctrl++)",
      zoomOut: "縮小 (Ctrl+−)",
      zoom100: "ズームを100%に戻す",
      zoomFit: "画面に合わせてフィット",
      statusHint: "クリックで描画 · 2本指でズーム · Ctrl+スクロールでズーム · テキストをダブルクリックで編集",
    },
    tools: {
      brush: "ブラシ",
      pencil: "鉛筆",
      rect: "長方形",
      ellipse: "楕円",
      triangle: "三角形",
      line: "直線",
      arrow: "矢印",
      text: "テキスト",
      eraser: "消しゴム",
    },
  },
  fr: {
    siteName: "Simple Sketchpad",
    nav: { about: "À propos", privacyPolicy: "Politique de confidentialité", terms: "Conditions d'utilisation", contact: "Contact" },
    footer: { openSketchpad: "Ouvrir le sketchpad", copyright: (y) => `© ${y} Simple Sketchpad` },
    canvas: {
      downloadPng: "Télécharger PNG (Ctrl+D)",
      downloadPngShort: "Télécharger PNG",
      palette: "Ouvrir le panneau d'outils",
      undo: "Annuler (Ctrl+Z)",
      redo: "Rétablir (Ctrl+Shift+Z)",
      toggleGrid: "Activer la grille (G)",
      clearCanvas: "Effacer le canevas",
      toggleFullscreen: "Plein écran (F)",
      autosaveSaved: "Enregistré",
      autosaveSaving: "Enregistrement…",
      autosaveNotSaved: "Non enregistré",
      stroke: "Trait",
      opacity: "Opacité",
      fillShapes: "Remplir les formes",
      fillOn: "Oui",
      fillOff: "Non",
      color: "Couleur",
      pickCustomColor: "Choisir une couleur",
      textSize: "Taille du texte",
      eraserSize: "Gomme",
      px: "px",
      hints: "Espace pan · Ctrl+molette zoom · [ ] taille",
      drawingTools: "Outils de dessin",
      toolOptions: "Options de l'outil",
      strokeSizeAria: "Épaisseur du trait",
      opacityAria: "Opacité",
      zoomIn: "Zoom avant (Ctrl++)",
      zoomOut: "Zoom arrière (Ctrl+−)",
      zoom100: "Réinitialiser le zoom à 100 %",
      zoomFit: "Ajuster le dessin à l'écran",
      statusHint: "Cliquez pour dessiner · deux doigts pour zoomer · Ctrl+molette pour zoomer · double-clic sur un texte pour éditer",
    },
    tools: {
      brush: "Pinceau",
      pencil: "Crayon",
      rect: "Rectangle",
      ellipse: "Ellipse",
      triangle: "Triangle",
      line: "Ligne",
      arrow: "Flèche",
      text: "Texte",
      eraser: "Gomme",
    },
  },
  de: {
    siteName: "Simple Sketchpad",
    nav: { about: "Über uns", privacyPolicy: "Datenschutz", terms: "AGB", contact: "Kontakt" },
    footer: { openSketchpad: "Sketchpad öffnen", copyright: (y) => `© ${y} Simple Sketchpad` },
    canvas: {
      downloadPng: "PNG herunterladen (Ctrl+D)",
      downloadPngShort: "PNG herunterladen",
      palette: "Werkzeugpanel öffnen",
      undo: "Rückgängig (Ctrl+Z)",
      redo: "Wiederholen (Ctrl+Shift+Z)",
      toggleGrid: "Raster umschalten (G)",
      clearCanvas: "Zeichenfläche leeren",
      toggleFullscreen: "Vollbild umschalten (F)",
      autosaveSaved: "Gespeichert",
      autosaveSaving: "Speichern…",
      autosaveNotSaved: "Nicht gespeichert",
      stroke: "Strich",
      opacity: "Deckkraft",
      fillShapes: "Formen füllen",
      fillOn: "Ein",
      fillOff: "Aus",
      color: "Farbe",
      pickCustomColor: "Farbe auswählen",
      textSize: "Textgröße",
      eraserSize: "Radierer",
      px: "px",
      hints: "Leertaste pan · Strg+Scrollen zoom · [ ] Größe",
      drawingTools: "Zeichenwerkzeuge",
      toolOptions: "Werkzeugoptionen",
      strokeSizeAria: "Strichstärke",
      opacityAria: "Deckkraft",
      zoomIn: "Vergrößern (Ctrl++)",
      zoomOut: "Verkleinern (Ctrl+−)",
      zoom100: "Zoom auf 100 % zurücksetzen",
      zoomFit: "Zeichnung an Bildschirm anpassen",
      statusHint: "Zum Zeichnen klicken · mit zwei Fingern zoomen · Strg+Mausrad zoomen · Text doppelklicken zum Bearbeiten",
    },
    tools: {
      brush: "Pinsel",
      pencil: "Bleistift",
      rect: "Rechteck",
      ellipse: "Ellipse",
      triangle: "Dreieck",
      line: "Linie",
      arrow: "Pfeil",
      text: "Text",
      eraser: "Radierer",
    },
  },
  pt: {
    siteName: "Simple Sketchpad",
    nav: { about: "Sobre", privacyPolicy: "Política de Privacidade", terms: "Termos e Condições", contact: "Contato" },
    footer: { openSketchpad: "Abrir o sketchpad", copyright: (y) => `© ${y} Simple Sketchpad` },
    canvas: {
      downloadPng: "Baixar PNG (Ctrl+D)",
      downloadPngShort: "Baixar PNG",
      palette: "Abrir painel de ferramentas",
      undo: "Desfazer (Ctrl+Z)",
      redo: "Refazer (Ctrl+Shift+Z)",
      toggleGrid: "Ativar grade (G)",
      clearCanvas: "Limpar tela",
      toggleFullscreen: "Tela cheia (F)",
      autosaveSaved: "Salvo",
      autosaveSaving: "Salvando…",
      autosaveNotSaved: "Não salvo",
      stroke: "Traço",
      opacity: "Opacidade",
      fillShapes: "Preencher formas",
      fillOn: "Sim",
      fillOff: "Não",
      color: "Cor",
      pickCustomColor: "Escolher cor",
      textSize: "Tamanho do texto",
      eraserSize: "Borracha",
      px: "px",
      hints: "Espaço pan · Ctrl+scroll zoom · [ ] tamanho",
      drawingTools: "Ferramentas de desenho",
      toolOptions: "Opções da ferramenta",
      strokeSizeAria: "Espessura do traço",
      opacityAria: "Opacidade",
      zoomIn: "Aumentar zoom (Ctrl++)",
      zoomOut: "Diminuir zoom (Ctrl+−)",
      zoom100: "Redefinir zoom para 100%",
      zoomFit: "Ajustar desenho à tela",
      statusHint: "Clique para desenhar · dois dedos para zoom · Ctrl+scroll para zoom · duplo clique para editar o texto",
    },
    tools: {
      brush: "Pincel",
      pencil: "Lápis",
      rect: "Retângulo",
      ellipse: "Elipse",
      triangle: "Triângulo",
      line: "Linha",
      arrow: "Seta",
      text: "Texto",
      eraser: "Borracha",
    },
  },
  ko: {
    siteName: "Simple Sketchpad",
    nav: { about: "소개", privacyPolicy: "개인정보 처리방침", terms: "이용약관", contact: "문의하기" },
    footer: { openSketchpad: "스케치패드 열기", copyright: (y) => `© ${y} Simple Sketchpad` },
    canvas: {
      downloadPng: "PNG 다운로드 (Ctrl+D)",
      downloadPngShort: "PNG 다운로드",
      palette: "도구 패널 열기",
      undo: "실행 취소 (Ctrl+Z)",
      redo: "다시 실행 (Ctrl+Shift+Z)",
      toggleGrid: "격자 전환 (G)",
      clearCanvas: "캔버스 지우기",
      toggleFullscreen: "전체 화면 (F)",
      autosaveSaved: "저장됨",
      autosaveSaving: "저장 중…",
      autosaveNotSaved: "저장 안 됨",
      stroke: "선",
      opacity: "투명도",
      fillShapes: "도형 채우기",
      fillOn: "켜짐",
      fillOff: "꺼짐",
      color: "색상",
      pickCustomColor: "색상 선택",
      textSize: "텍스트 크기",
      eraserSize: "지우개",
      px: "px",
      hints: "Space 팬 · Ctrl+스크롤 줌 · [ ] 크기",
      drawingTools: "그리기 도구",
      toolOptions: "도구 옵션",
      strokeSizeAria: "선 두께",
      opacityAria: "투명도",
      zoomIn: "확대 (Ctrl++)",
      zoomOut: "축소 (Ctrl+−)",
      zoom100: "줌을 100%로 재설정",
      zoomFit: "그림을 화면에 맞추기",
      statusHint: "클릭하여 그리기 · 두 손가락으로 줌 · Ctrl+스크롤 줌 · 텍스트를 더블클릭하여 편집",
    },
    tools: {
      brush: "브러시",
      pencil: "연필",
      rect: "사각형",
      ellipse: "타원",
      triangle: "삼각형",
      line: "선",
      arrow: "화살표",
      text: "텍스트",
      eraser: "지우개",
    },
  },
  it: {
    siteName: "Simple Sketchpad",
    nav: { about: "Chi siamo", privacyPolicy: "Informativa sulla privacy", terms: "Termini e condizioni", contact: "Contatti" },
    footer: { openSketchpad: "Apri lo sketchpad", copyright: (y) => `© ${y} Simple Sketchpad` },
    canvas: {
      downloadPng: "Scarica PNG (Ctrl+D)",
      downloadPngShort: "Scarica PNG",
      palette: "Apri pannello strumenti",
      undo: "Annulla (Ctrl+Z)",
      redo: "Ripeti (Ctrl+Shift+Z)",
      toggleGrid: "Attiva griglia (G)",
      clearCanvas: "Cancella tela",
      toggleFullscreen: "Schermo intero (F)",
      autosaveSaved: "Salvato",
      autosaveSaving: "Salvataggio…",
      autosaveNotSaved: "Non salvato",
      stroke: "Tratto",
      opacity: "Opacità",
      fillShapes: "Riempire forme",
      fillOn: "Sì",
      fillOff: "No",
      color: "Colore",
      pickCustomColor: "Scegli colore",
      textSize: "Dimensione testo",
      eraserSize: "Gomma",
      px: "px",
      hints: "Spazio pan · Ctrl+scroll zoom · [ ] dimensione",
      drawingTools: "Strumenti di disegno",
      toolOptions: "Opzioni dello strumento",
      strokeSizeAria: "Spessore del tratto",
      opacityAria: "Opacità",
      zoomIn: "Zoom avanti (Ctrl++)",
      zoomOut: "Zoom indietro (Ctrl+−)",
      zoom100: "Reimposta zoom al 100%",
      zoomFit: "Adatta disegno allo schermo",
      statusHint: "Clicca per disegnare · due dita per lo zoom · Ctrl+scroll per zoomare · doppio clic per modificare il testo",
    },
    tools: {
      brush: "Pennello",
      pencil: "Matita",
      rect: "Rettangolo",
      ellipse: "Ellisse",
      triangle: "Triangolo",
      line: "Linea",
      arrow: "Freccia",
      text: "Testo",
      eraser: "Gomma",
    },
  },
};

export function uiFor(locale: Locale): UIStrings {
  return UI[locale] ?? UI.en;
}
