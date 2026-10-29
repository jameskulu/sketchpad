import type { ToolContent } from "./tool-content-types";
import { indonesianTools } from "./indonesian";

const en = {
  "drawing-board": {
    seoTitle: "Online Drawing Board - Free Workspace for Planning & Brainstorming | SimpleSketchpad",
    seoDescription:
      "A free online drawing board for brainstorming, planning, visual notes, and diagrams. Use the pen, shapes, arrows, and sticky notes, then export to PNG or SVG.",
    h1: "Online Drawing Board",
    intro: [
      "An online drawing board is a place to think out loud. Where a drawing tool is about making a picture, a drawing board is about getting ideas out quickly: mapping a process, sketching a layout, taking visual notes, or walking a class through a concept step by step.",
      "This page gives you that board. It is a large, clean workspace with a pen, a highlighter, lines, shapes, and arrows for structure, text for labels, and sticky notes for the ideas you want to pin in place. Everything stays on your device, saves as you work, and exports to PNG or SVG when the thinking is done.",
    ],
    sections: [
      {
        heading: "How a drawing board differs from a drawing tool",
        paragraphs: [
          "A normal drawing or art tool is tuned for detail: pressure curves, brush textures, layers, and precise color work. A drawing board deliberately flips the focus. It is built for speed and clarity. Drop a rectangle to frame a section, draw an arrow to show how ideas connect, and pin a sticky note instead of writing a paragraph.",
          "That difference changes how you use the canvas. You are not trying to make a finished illustration; you are trying to make the structure of a conversation visible. The board should look organized enough to follow and loose enough to keep changing. If a box is in the wrong place, move it. If an idea stops mattering, delete it. The drawing is a working surface, not a deliverable.",
        ],
      },
      {
        heading: "How to use the drawing board",
        paragraphs: [
          "A short setup keeps the session focused. Do this before the first idea goes down:",
        ],
        ordered: true,
        list: [
          "Press F for fullscreen so the board fills the screen.",
          "Choose the pen for handwriting or the pencil for a looser sketch.",
          "Pick two or three colors and decide what each one means.",
          "Turn the grid on if you are building columns or a layout.",
          "Write the question or goal in a corner of the board.",
          "Add ideas as sticky notes or short labels before connecting anything.",
          "Group, connect, and delete until the board answers the question.",
          "Export a PNG or SVG so the result can be shared.",
        ],
      },
      {
        heading: "Brainstorming, planning, and visual notes",
        paragraphs: [
          "Use the board to break a project into steps, compare options side by side, capture meeting notes as visuals, or design a rough layout before opening anything heavier. Sticky notes let you treat ideas as movable cards, so clustering and rearranging feels as natural as it does on a real wall.",
          "The board is also a good place for the awkward middle of a project, when the plan is too detailed for a napkin and too uncertain for a formal document. Sketch the moving parts, mark the unknowns, and export the board as the working map everyone can react to.",
        ],
        list: [
          "Break big ideas into connected smaller ones",
          "Sketch page layouts, flows, and workflows",
          "Take visual notes in meetings and classes",
          "Plan lessons, workshops, and presentations",
          "Rough out diagrams before formalizing them",
          "Compare two or three options in parallel columns",
          "Map a decision and the reasons behind it",
          "Capture questions that still need an answer",
        ],
      },
      {
        heading: "Sticky notes: thinking in movable pieces",
        paragraphs: [
          "Sticky notes are the most useful tool on the board because they separate an idea from its position. Write one thought per note, scatter the notes, then group the related ones and discard the rest. Because each note is a separate object, you can move it without redrawing anything around it, which is exactly what early-stage thinking needs.",
          "Keep the writing short. A note should be a phrase or a single sentence, not a paragraph. If a note needs more explanation, split it into two notes or add a text label beside it. Color can carry meaning too: one color for facts, another for questions, a third for decisions. Just keep the meaning consistent for the whole session.",
        ],
      },
      {
        heading: "A simple workshop format that works on one board",
        paragraphs: [
          "If you are running a session with other people, a fixed sequence beats an open invitation to brainstorm. It gives quiet people room to contribute and stops the loudest idea from becoming the plan by default.",
        ],
        ordered: true,
        list: [
          "Write the question at the top of the board in one sentence.",
          "Give everyone three minutes to add ideas silently as sticky notes.",
          "Read the notes aloud and move duplicates together without judging them.",
          "Group the remaining notes into three to five themes.",
          "Draw arrows between themes that depend on each other.",
          "Dot-vote the themes that deserve attention first.",
          "Rewrite the winning theme as a short action with an owner and a date.",
          "Export the board and send it to everyone who took part.",
        ],
      },
      {
        heading: "Visual notes for meetings and classes",
        paragraphs: [
          "Visual notes are faster to review than a wall of text because the structure is visible. Draw a box for each topic, write the key phrase inside it, and connect the boxes in the order the conversation moved. Use the highlighter for the one point that matters most, and leave white space so the page does not feel crowded.",
          "In a class or a video call, the board can be the shared reference while you talk. Draw the concept, annotate it live, and rearrange it as questions come in. Because the board is local and saves automatically, there is no upload delay and no file to open. When the session ends, export a PNG and send it to the group.",
        ],
      },
      {
        heading: "Diagrams, flows, and layout sketches",
        paragraphs: [
          "The board includes rectangles, ellipses, triangles, lines, arrows, and text, which is enough for most explanatory diagrams. Keep the shapes aligned and the labels short. If the diagram needs precise measurements or a grid, move it to [online graph paper](/graph-paper/); if it needs a lot of open space and a more informal feel, the [whiteboard](/whiteboard/) is the better canvas.",
          "For a layout sketch, draw the frame first, then block in the major regions, then add labels. A wireframe does not need realistic content. Three grey rectangles and a heading tell a reviewer more about structure than a detailed mockup with placeholder text. The goal is to make the layout arguable before it becomes expensive to change.",
        ],
      },
      {
        heading: "Organizing a board that has become messy",
        paragraphs: [
          "Every working board reaches a point where it has too many notes. That is normal, and it is a sign that the thinking is happening. The fix is not to start over; it is to impose a little structure.",
        ],
        list: [
          "Move the notes that answer the main question into one column.",
          "Park open questions in a separate corner and label them.",
          "Delete duplicates and notes that no longer matter.",
          "Replace clusters of notes with one summary note and a label.",
          "Use a rectangle to draw a boundary around each theme.",
          "Reduce the palette to two colors: one for structure, one for emphasis.",
          "Leave the board for five minutes, then return and check whether it still reads.",
        ],
      },
      {
        heading: "Presenting and sharing the finished board",
        paragraphs: [
          "When the board is ready to leave your screen, check it at 100 percent and export. The file is cropped to the board's contents, so the grid and the current zoom do not appear in it. Export a PNG for documents, slides, chat, and printed handouts. Export an SVG when the board will be resized, printed large, or edited further in vector software. SVG keeps every line and label sharp at any size.",
          "A board is often more useful as a source than as a poster. Keep the autosaved canvas if the project is still moving, and export a dated PNG at each milestone. That gives you a record of how the thinking changed without turning every session into a polished deliverable.",
        ],
      },
      {
        heading: "Keyboard shortcuts for a faster session",
        paragraphs: [
          "The board rewards speed. A handful of shortcuts keep your hand off the toolbar:",
        ],
        list: [
          "V selects, B is the brush, P is the pencil, and E is the eraser.",
          "R rectangle, O ellipse, L line, A arrow, and T text. The triangle is in the toolbar.",
          "The highlighter and sticky note tools sit in the same toolbar.",
          "Ctrl+Z undoes and Ctrl+Shift+Z redoes.",
          "G toggles the grid and F toggles fullscreen.",
          "Ctrl+scroll zooms, and holding space lets you pan.",
          "Delete removes the selected element, and Ctrl+D downloads a PNG.",
        ],
      },
      {
        heading: "When another canvas is the better fit",
        paragraphs: [
          "The drawing board is the general-purpose thinking surface. It is not always the right one. If you need measured drawings, a snap-to-grid graph paper canvas will be faster. If you need a large, open space for a live lesson or a long brainstorming session, the whiteboard is designed for that. If you need a finished illustration with fine line control, the home [sketchpad](/) gives you a brush and a freer surface.",
          "The board is also not a collaboration tool. Two people cannot edit the same canvas at the same time. It is designed to be private and local. For a group session, share your screen while one person draws, or export the board after each round and pass the file around. That limitation is what keeps the tool fast and account-free.",
        ],
      },
    ],
    relatedHeading: "More free tools from SimpleSketchpad",
    related: {
      "drawing-board": { label: "Online Drawing Board", blurb: "A workspace for planning, sticky notes, and visual notes." },
      whiteboard: { label: "Free Online Whiteboard", blurb: "An infinite canvas for teaching, meetings, and brainstorming." },
      "graph-paper": { label: "Online Graph Paper", blurb: "An adjustable grid for math, geometry, and technical sketches." },
      "kids-drawing": { label: "Online Drawing for Kids", blurb: "Big buttons and fun stamps made for little artists." },
    },
    faqHeading: "Frequently Asked Questions",
    faq: [
      {
        q: "What is an online drawing board?",
        a: "An online drawing board is a browser-based workspace for sketching ideas, diagrams, and plans. Unlike a drawing tool focused on finished artwork, it emphasizes speed, structure, and clarity, which makes it useful for brainstorming, planning, and teaching.",
      },
      {
        q: "Can I add sticky notes to the board?",
        a: "Yes. Choose the sticky note tool, drag to place a note, and type into it. Notes behave like movable cards, so you can cluster and rearrange ideas as easily as on a real wall.",
      },
      {
        q: "Can I export the finished board?",
        a: "Yes. Export a PNG to share or print the board, or an SVG if you want a vector file that can be resized and edited without losing quality.",
      },
      {
        q: "Is the drawing board free?",
        a: "Yes. There is nothing to install and no account to create. The board runs in your browser, and your work is saved locally on your device.",
      },
      {
        q: "Does the board save automatically?",
        a: "Yes. The canvas autosaves in your browser as you work. The saving indicator near the top shows the current state. Export a file for anything you want to keep permanently or move to another device.",
      },
      {
        q: "Can two people edit the board at the same time?",
        a: "No. The board is a private local canvas, not a live collaboration tool. For group work, share your screen while one person draws, or export the board and pass the file around after each round.",
      },
      {
        q: "What is the highlighter for?",
        a: "The highlighter lays down a wide, translucent stroke. Use it to emphasize a phrase, underline a key number, or mark the one part of a diagram the room should look at first without hiding what is underneath.",
      },
      {
        q: "Can I use the board for teaching?",
        a: "Yes. It works well for lessons, tutoring, and workshops. Draw the concept live, annotate as questions come in, and export the finished board so students can review it afterwards.",
      },
      {
        q: "Does the drawing board work on a phone?",
        a: "Yes. Touch input works, and the toolbar compacts on small screens. A tablet or laptop is more comfortable for a large board, but a phone is fine for quick notes and simple sketches.",
      },
    ],
    closing: [
      "This drawing board is the thinking phase of SimpleSketchpad. When the ideas are settled and you need a more visual result, the home [sketchpad](/) adds a pencil, brush, and finer control for finished sketches.",
      "Open a board, write the question in the corner, and start with one sticky note. That is enough to begin.",
    ],
  },
  whiteboard: {
    seoTitle: "Free Online Whiteboard - Virtual Whiteboard for Brainstorming | SimpleSketchpad",
    seoDescription:
      "A free online whiteboard for meetings, teaching, studying, and brainstorming. Use the pen, highlighter, shapes, arrows, and sticky notes, then export to PNG or SVG.",
    h1: "Free Online Whiteboard",
    intro: [
      "This free online whiteboard gives you room to think. Sketch a flow, underline the key point, drop a sticky note, and zoom out to see the whole picture. Instead of running out of space at the edge of a page, you pan and zoom across a canvas that grows with the conversation.",
      "It works like a real whiteboard, with a few advantages: a highlighter that does not smudge, notes you can move without redrawing, and an export that stays sharp at any size. There are no accounts, no costs, and no uploads. Everything stays on your device and saves as you work.",
    ],
    sections: [
      {
        heading: "A canvas that makes room for the idea",
        paragraphs: [
          "The whiteboard is built around movement. Zoom in to write a small note, then zoom back out to arrange ten notes into a map. Pan across the board to work on a different part of the conversation without erasing what came before. On a laptop, Ctrl+scroll zooms and holding space lets you drag the canvas; on a touch device, pinch gestures do the same job.",
          "That freedom changes how you plan. You can keep the original question in one corner, the ideas in the middle, and the decisions at the edge, all on the same board. When the session ends, the geography of the board becomes part of the explanation.",
        ],
      },
      {
        heading: "How to run a whiteboard session",
        paragraphs: [
          "A little structure keeps a big canvas from turning into a pile of notes. This sequence works for a solo planning session and for a group watching a shared screen:",
        ],
        ordered: true,
        list: [
          "Press F for fullscreen and zoom to a comfortable writing size.",
          "Write the question or goal in the top-left corner.",
          "Choose the pen for handwriting and one color for the main ideas.",
          "Add ideas as sticky notes or short labels before connecting anything.",
          "Use the highlighter on the one point that matters most.",
          "Draw arrows only where the relationship needs to be explicit.",
          "Group the notes into a few clear zones and delete what no longer helps.",
          "Zoom out to check the whole board, then export a PNG or SVG.",
        ],
      },
      {
        heading: "Built for brainstorming and explaining",
        paragraphs: [
          "Use the pen for handwriting, the highlighter to draw attention, arrows to link cause and effect, and sticky notes to collect reactions and tasks. It is equally at home in a planning session, a study session, or a lesson where drawing the idea beats describing it.",
          "The important difference from a text document is that everything is spatial. Two ideas can sit side by side, overlap, or connect with an arrow. A question can literally surround the options it affects. That layout is often the fastest way to show why one plan is simpler than another.",
        ],
        list: [
          "Brainstorming and ideation sessions",
          "Teaching and online tutoring",
          "Explaining ideas in meetings",
          "Studying and revision maps",
          "Planning projects on one canvas",
          "Mapping a decision and its trade-offs",
          "Reviewing a process with a group",
          "Collecting questions before a workshop",
        ],
      },
      {
        heading: "Teaching and tutoring on a virtual whiteboard",
        paragraphs: [
          "For a lesson, the whiteboard replaces the scrap paper you would normally hold up to the camera. Draw the concept in steps, circle the part that changes, and leave the earlier steps visible so students can see how the argument developed. The highlighter is useful for emphasis, and sticky notes are a good place to park a question until the end.",
          "Because the board is local, there is no upload delay and no file to open in the middle of a lesson. Share your screen, draw live, and export the finished board as a PNG for students to review. If a student needs to try something themselves, send the exported image and let them redraw it on their own device.",
        ],
      },
      {
        heading: "Meeting notes and decision maps",
        paragraphs: [
          "A useful meeting board has three zones: what we know, what we are deciding, and what happens next. Add items to the first zone as the conversation moves, move the real decisions into the middle, and convert the outcome into short actions on the right. The board becomes the minutes, and the shape of it makes follow-up easier to scan than a transcript.",
          "For a decision with several options, give each option a column. Put the benefits, costs, and open questions underneath, then use arrows to show dependencies. Do not decorate the board; the goal is a shared picture of the trade-offs, not a presentation. A rough but honest map is more useful than a tidy one that hides the uncertainty.",
        ],
      },
      {
        heading: "Sticky notes and the highlighter",
        paragraphs: [
          "These two tools do most of the work on a whiteboard. Sticky notes turn an idea into a movable object, which means you can rearrange the thinking without rewriting it. Write one thought per note, keep it short, and use color to separate facts from questions or decisions. A note that needs a paragraph should be split into two notes.",
          "The highlighter is for emphasis, not for coloring. A wide translucent stroke over a word or a box says look here without covering the content underneath. Use it once or twice per board. If everything is highlighted, nothing is, and the board becomes harder to read rather than easier.",
        ],
      },
      {
        heading: "Organizing a large board",
        paragraphs: [
          "The bigger the canvas, the more the board needs landmarks. Decide on a small number of zones and keep them in the same place for the whole session. A common pattern is question at the top, ideas in the middle, decisions on the right, and open questions at the bottom. Another is a simple left-to-right timeline.",
        ],
        list: [
          "Give each zone a short heading so a newcomer can orient themselves.",
          "Keep related notes close together and leave space between groups.",
          "Use one color for structure and one for emphasis; avoid a rainbow.",
          "Replace clusters of notes with a summary note once the cluster is settled.",
          "Delete duplicates and notes that no longer affect the outcome.",
          "Add a date and a one-line purpose if the board will be shared later.",
        ],
      },
      {
        heading: "Presenting from the board",
        paragraphs: [
          "A whiteboard is easiest to follow when you control the zoom. Start zoomed out to show the whole shape of the argument, then zoom into the section you are discussing. Pan deliberately rather than drifting, and leave the pointer or cursor near the part you are explaining. On a video call, fullscreen mode removes the browser chrome and gives the board the whole frame.",
          "If the board is for someone else to read later, add the labels they will need before exporting. A board that made sense while you were talking can lose its thread without your voice. Short headings, a few arrows, and a clear left-to-right order are usually enough.",
        ],
      },
      {
        heading: "Saving and exporting a whiteboard",
        paragraphs: [
          "The board autosaves in your browser as you work, so you can close the tab and return to the same canvas later on the same device. That is protection between sessions, not a cloud backup. Clearing site data or moving to another device will not carry the board across, so export a file for anything you want to keep.",
          "Use PNG for slides, chat, documents, and printed handouts. Use SVG when the board will be resized, printed large, or edited in a vector tool. Vector lines and text stay sharp at any size. Before exporting, review the board at 100 percent; the file is cropped to its contents, so the grid and zoom level stay out.",
        ],
      },
      {
        heading: "Shortcuts and gestures",
        paragraphs: [
          "The whiteboard rewards a few seconds of practice with the keyboard. These are the ones worth remembering:",
        ],
        list: [
          "V selects, B is the brush, P is the pencil, and E is the eraser.",
          "R rectangle, O ellipse, L line, A arrow, and T text.",
          "The highlighter and sticky note tools sit in the same toolbar.",
          "Ctrl+Z undoes and Ctrl+Shift+Z redoes.",
          "G toggles the grid and F toggles fullscreen.",
          "Ctrl+scroll zooms, space-drag pans, and pinch gestures work on touch.",
          "Delete removes the selected element, and Ctrl+D downloads a PNG.",
        ],
      },
      {
        heading: "Privacy, sharing, and collaboration",
        paragraphs: [
          "The whiteboard is private by design. There is no account, no shared workspace, and no server copy of your board. That is a good fit for early ideas, internal planning, and lessons that should not be published. It also means the board does not sync between devices and cannot be edited by two people at once.",
          "To work with someone else, share your screen while one person draws, or export the board after each round and send the image. For a workshop, assign one person to drive and let the group talk through the changes. The constraint is deliberate: it keeps the tool fast, free, and free of the account management that usually comes with real-time collaboration.",
        ],
      },
      {
        heading: "When graph paper or a drawing board is the better fit",
        paragraphs: [
          "The whiteboard is the loosest of the canvases, which makes it ideal for ideas that are still moving. When the work needs measurements, use [online graph paper](/graph-paper/) with snap-to-grid instead. When the work is more about structured planning, sticky notes, and a contained board, the [online drawing board](/drawing-board/) is a better match. When the goal becomes a finished illustration, move to the home [sketchpad](/).",
          "Choosing the right canvas is part of the workflow. Start loose on the whiteboard, settle the structure on the drawing board, and move to graph paper when precision matters or to the home [sketchpad](/) when you want a freer surface. The tools share the same controls, so switching costs almost nothing.",
        ],
      },
    ],
    relatedHeading: "More free tools from SimpleSketchpad",
    related: {
      "drawing-board": { label: "Online Drawing Board", blurb: "A workspace for planning, sticky notes, and visual notes." },
      whiteboard: { label: "Free Online Whiteboard", blurb: "An infinite canvas for teaching, meetings, and brainstorming." },
      "graph-paper": { label: "Online Graph Paper", blurb: "An adjustable grid for math, geometry, and technical sketches." },
      "kids-drawing": { label: "Online Drawing for Kids", blurb: "Big buttons and fun stamps made for little artists." },
    },
    faqHeading: "Frequently Asked Questions",
    faq: [
      {
        q: "Is this online whiteboard really free?",
        a: "Yes. There is no trial, no watermark, and no account. The whiteboard runs entirely in your browser and exports to PNG or SVG whenever you need.",
      },
      {
        q: "Can I use a highlighter on the whiteboard?",
        a: "Yes. There is a dedicated highlighter with a wide, translucent stroke, so it emphasizes writing and diagrams without hiding what is underneath.",
      },
      {
        q: "Can I collaborate or share a whiteboard?",
        a: "Not live. The whiteboard is private and autosaved on your device. To share work, export a PNG or SVG and send the file, or share your screen while one person draws.",
      },
      {
        q: "Does an online whiteboard work in meetings?",
        a: "Yes. Pan and zoom keep a large board usable on a laptop, and fullscreen mode makes it practical for screen sharing in calls and lessons.",
      },
      {
        q: "How big is the whiteboard canvas?",
        a: "The canvas is large enough to hold a full workshop and can be panned and zoomed, so you are not limited by the visible screen. Zoom out to see the whole board and in to write comfortably.",
      },
      {
        q: "Does the whiteboard save my work?",
        a: "Yes. It autosaves in your browser as you draw. The saving indicator near the top shows the current state. Export a file for a permanent copy or to move the board to another device.",
      },
      {
        q: "Can I use the whiteboard for teaching?",
        a: "It works well for lessons, tutoring, and study sessions. Draw the concept live, highlight the key step, and export the board afterwards so students can review it at their own pace.",
      },
      {
        q: "Does it work on a phone or tablet?",
        a: "Yes. Touch input works, including pinch-to-zoom and pan. A tablet or laptop is more comfortable for a large board, but a phone is fine for quick sketches and notes.",
      },
      {
        q: "Can I draw straight lines and arrows?",
        a: "Yes. Lines, arrows, rectangles, and ellipses are built in, and each element can be selected, moved, resized, or deleted without affecting anything underneath it.",
      },
    ],
    closing: [
      "The whiteboard is where simple usability meets serious planning. Open it before the next meeting, write the question in the corner, and let the board take shape around it.",
      "If your session needs structure and grids rather than freedom, try [online graph paper](/graph-paper/); if it needs lined-up shapes and sticky notes, the [online drawing board](/drawing-board/) is a great fit.",
    ],
  },
  "graph-paper": {
    seoTitle: "Online Graph Paper - Adjustable Grid Paper for Drawing | SimpleSketchpad",
    seoDescription:
      "Draw on online graph paper with an adjustable grid. Choose line, dot, or square grids, change the spacing, snap to grid, and export to PNG or SVG. Free, no sign-up.",
    h1: "Online Graph Paper",
    intro: [
      "Sometimes you need ruled paper, not a blank page. This online graph paper puts an adjustable grid at the center of a real drawing tool: choose a line, dot, or square grid, change the spacing, snap your strokes to the grid, and keep every measurement aligned.",
      "It is built for the work where precision matters: geometry, plotting, technical sketches, floor plans, and diagrams with boxes and arrows that have to line up. Everything saves in the browser and exports to PNG or SVG, so the drawing is ready to print, share, or keep working on.",
    ],
    sections: [
      {
        heading: "The grid is the feature",
        paragraphs: [
          "A grid gives your eye a reference and removes the need to measure by hand. The canvas offers three grid styles and several spacings, and you can change them at any time. Major lines are drawn more strongly every few cells, which makes it easy to count distances without losing your place.",
          "Snap to grid is the setting that turns a neat sketch into an accurate one. With snap on, lines, shapes, and text lock to the nearest grid points, so edges land where you intended instead of a few pixels away. If you are drawing a floor plan, a chart, or a geometry construction, leave snap on for the whole session.",
        ],
        list: [
          "Line grid for a classic ruled-paper look",
          "Dot grid for a subtler reference with less visual noise",
          "Square grid for cells, plots, and measured layouts",
          "Adjustable spacing for fine detail or large plans",
          "Major and minor lines for easier counting",
          "Snap to grid for exact edges and corners",
          "Pencil, lines, arrows, shapes, text, and eraser",
          "Pan and zoom for large drawings",
          "PNG and SVG export",
        ],
      },
      {
        heading: "How to set up graph paper for your task",
        paragraphs: [
          "The right setup depends on what you are drawing. A geometry construction needs a different spacing from a floor plan, and a chart needs a different style from a sketch. Start with the task, then choose the grid to match.",
        ],
        ordered: true,
        list: [
          "Open the graph paper page and press F for fullscreen.",
          "Choose a grid style: line, dot, or square.",
          "Pick the spacing that matches the size of the drawing.",
          "Turn on snap to grid before drawing the first line.",
          "Select the pencil for construction lines and the shape tools for structure.",
          "Draw the axes, frame, or outer boundary first.",
          "Block in the main elements, then zoom in to refine small details.",
          "Add labels, units, and a scale note before exporting.",
        ],
      },
      {
        heading: "For students, math, and geometry",
        paragraphs: [
          "Graph paper is the natural surface for the math that is easier to see than to describe. Plot points, draw axes, sketch a triangle, construct a perpendicular line, or compare two shapes on the same grid. The line tool gives you a straight edge, the ellipse tool draws circles and ovals, and the text tool labels vertices, lengths, and angles.",
          "Because the grid is adjustable, the same canvas works for a small coordinate plot and a large geometric construction. Use a finer spacing for detailed work and a larger spacing when the whole drawing needs to fit on one screen. Snapping keeps vertices on exact intersections, which makes a construction easier to check and explain.",
        ],
      },
      {
        heading: "Plotting points and sketching charts",
        paragraphs: [
          "This is a drawing tool, not a spreadsheet or a graphing calculator. It will not calculate a function or generate data for you. What it does well is let you draw the axes, plot points, sketch a curve, and annotate the result by hand. That is often enough for a worksheet, a rough chart in a report, or an explanation on a whiteboard.",
          "Start with the axes: one horizontal line, one vertical line, and arrowheads at the positive ends. Label the axes and mark a few values. Then plot the points, sketch the trend, and use the text tool for the title and any notes. Keep the number of grid cells between ticks consistent so the chart reads honestly.",
        ],
      },
      {
        heading: "Technical sketches, floor plans, and layouts",
        paragraphs: [
          "Graph paper is the middle ground between a napkin sketch and a CAD drawing. It is accurate enough to plan a room, lay out a workshop, or sketch a mechanical part, but fast enough that you can change your mind. Draw the outer boundary first, then the internal divisions, then the fixed elements and labels.",
          "For a floor plan, decide what one grid cell represents before you draw and write that scale in the corner. One square per foot works for most rooms; one square per metre keeps a whole apartment manageable. If you want a full walkthrough of that workflow, the [floor plan guide](/blog/how-to-draw-a-floor-plan-online/) covers measuring, wall thickness, doors, windows, and furniture sizes in detail.",
        ],
      },
      {
        heading: "Choosing a grid style and spacing",
        paragraphs: [
          "The style is mostly a matter of visual noise. A line grid gives the strongest reference and suits measured drawings. A dot grid is quieter and works well for sketching and layout. A square grid is the most explicit option and is useful when the drawing is organized into cells.",
          "Spacing is a trade-off between precision and coverage. A small spacing gives you fine control but fewer units on screen; a large spacing covers more area but makes small details harder to place. Pick the spacing based on the smallest feature you need to draw, not on how the finished drawing should look. You can always zoom.",
        ],
        list: [
          "Fine spacing: geometry, small parts, detailed layouts.",
          "Medium spacing: room plans, charts, wireframes, diagrams.",
          "Large spacing: whole-floor plans, site layouts, teaching examples.",
          "Dot grid: sketching and layout work where lines would distract.",
          "Line grid: ruled-paper look, handwriting, math constructions.",
        ],
      },
      {
        heading: "Measuring, labeling, and keeping the drawing honest",
        paragraphs: [
          "A grid is only useful if the reader knows what it means. Add a scale note such as one square equals one foot, or label the axes with units. If the drawing is a plan, include the overall dimensions along the outside edges. If it is a chart, label both axes and the unit of measurement.",
          "Use the text tool for short annotations and place them where they do not collide with the drawing. Dimension lines, arrows, and small tick marks can make a plan easier to read, but they are not a substitute for accurate measurements. For anything that will be built or manufactured, treat the sketch as a planning aid and have the final dimensions produced by a professional drafting tool.",
        ],
      },
      {
        heading: "Precision tips that make a visible difference",
        paragraphs: [
          "Precision is mostly a matter of setup and restraint. These habits keep a technical drawing clean:",
        ],
        list: [
          "Turn snap to grid on before drawing anything and leave it on.",
          "Draw the long reference lines first, then build around them.",
          "Use one stroke weight for construction lines and one for the final edges.",
          "Keep labels horizontal; rotated text is harder to read on a plan.",
          "Zoom in to place small elements, then zoom out to check the whole drawing.",
          "Align repeated elements by copying their position rather than eyeballing it.",
          "Hide or simplify anything that does not help the reader understand the drawing.",
        ],
      },
      {
        heading: "Exporting graph paper drawings",
        paragraphs: [
          "Export a PNG when the drawing needs to be viewed or printed as an image. The grid is a guide on screen, not part of the file: exports are cropped to the drawing itself, so grid lines stay out and the result prints cleanly on plain paper or sits comfortably in a document. Export an SVG when the drawing will be resized or edited in vector software, where every line and label stays sharp.",
          "For a worksheet or a plan that will be printed, include the scale note and any units in the drawing itself rather than relying on the page margins. A browser canvas is not a physically calibrated printer, so do not assume that a printed line will measure an exact distance. Use the drawing to communicate the design, and use a drafting tool when physical scale is critical.",
        ],
      },
      {
        heading: "Keyboard shortcuts for graph paper",
        paragraphs: [
          "The same shortcuts apply here, with the pencil as the default tool:",
        ],
        list: [
          "V selects, P is the pencil, and E is the eraser.",
          "R rectangle, O ellipse, L line, A arrow, and T text. The triangle is in the toolbar.",
          "Ctrl+Z undoes and Ctrl+Shift+Z redoes.",
          "G toggles the grid and F toggles fullscreen.",
          "Ctrl+scroll zooms, and holding space lets you pan.",
          "Ctrl+D downloads a PNG of the current canvas.",
        ],
      },
      {
        heading: "When plain paper or a whiteboard is the better choice",
        paragraphs: [
          "Graph paper is the wrong tool for a loose brainstorm. If the idea is still forming and alignment does not matter, a blank canvas or the [online whiteboard](/whiteboard/) will be faster. If the work is about planning and sticky notes rather than measurements, use the [online drawing board](/drawing-board/). If the drawing is an illustration rather than a technical sketch, the home [sketchpad](/) gives you a brush and a freer surface.",
          "The useful rule is simple: choose graph paper when the position of a line relative to another line matters. Choose a blank canvas when the feeling of the drawing matters more than its measurements.",
        ],
      },
    ],
    relatedHeading: "More free tools from SimpleSketchpad",
    related: {
      "drawing-board": { label: "Online Drawing Board", blurb: "A workspace for planning, sticky notes, and visual notes." },
      whiteboard: { label: "Free Online Whiteboard", blurb: "An infinite canvas for teaching, meetings, and brainstorming." },
      "graph-paper": { label: "Online Graph Paper", blurb: "An adjustable grid for math, geometry, and technical sketches." },
      "kids-drawing": { label: "Online Drawing for Kids", blurb: "Big buttons and fun stamps made for little artists." },
    },
    faqHeading: "Frequently Asked Questions",
    faq: [
      {
        q: "What is online graph paper?",
        a: "Online graph paper is a ruled grid you draw on in the browser instead of printed paper. Unlike a static image, the grid style and spacing are adjustable, and your strokes can snap to the grid.",
      },
      {
        q: "Can I change the grid size and spacing?",
        a: "Yes. Switch between line, dot, and square grids and change the cell spacing to suit the task. Major lines are drawn more strongly every few cells to keep you oriented.",
      },
      {
        q: "Does the drawing snap to the grid?",
        a: "Yes, when snap to grid is enabled. Lines, shapes, and placed text lock onto the nearest grid points, which keeps diagrams, plots, and plans precise.",
      },
      {
        q: "Can I export my graph paper drawing?",
        a: "Yes. Export a PNG for printing or sharing, or an SVG for editing in vector software. The grid is a screen guide and is not included in the export, so the file contains only the drawing.",
      },
      {
        q: "Is the graph paper free?",
        a: "Yes. There is no account, no trial, and no watermark. The canvas runs in your browser and saves your work locally on your device.",
      },
      {
        q: "Can I use graph paper for a floor plan?",
        a: "Yes. Decide what one grid cell represents, turn on snap to grid, and draw the walls, openings, and furniture at that scale. Add a scale note and dimensions so the plan is readable outside the browser.",
      },
      {
        q: "Does the graph paper save my drawing?",
        a: "Yes. The canvas autosaves in your browser as you work. Export a PNG or SVG for a permanent copy or to move the drawing to another device.",
      },
      {
        q: "Can I draw circles and right angles?",
        a: "The ellipse and rectangle tools give you clean closed shapes, and the line tool gives you straight edges. With snap to grid on, corners and endpoints land on grid intersections.",
      },
      {
        q: "Will a printed drawing be exactly to scale?",
        a: "Not reliably. A browser canvas is not a calibrated printer. Use the grid and a written scale note to communicate proportions, and use a drafting or CAD tool when a print must measure an exact physical distance.",
      },
    ],
    closing: [
      "When blank paper feels too loose and final artwork feels too heavy, graph paper is the middle ground. Choose a spacing, turn on snap, and draw the reference lines first.",
      "For looser, idea-first boards, the [online drawing board](/drawing-board/) and [free online whiteboard](/whiteboard/) let you sketch without any rules at all.",
    ],
  },
  "kids-drawing": {
    seoTitle: "Online Drawing for Kids - Safe, Free & Fun | SimpleSketchpad",
    seoDescription:
      "A free online drawing tool for kids with big buttons, bright colors, and fun stamps. Safe and account-free, works on tablets and phones, and saves drawings to PNG.",
    h1: "Online Drawing for Kids",
    intro: [
      "This drawing page was built for small hands and big imaginations. There are no confusing menus, no accounts, and no chat. A child gets big buttons, nine bright colors, a forgiving eraser, and a row of emoji stamps to decorate any drawing.",
      "Everything works with a tap or a finger, so a child can start creating in seconds on a tablet, phone, or computer. Each drawing is saved on the device, and finished art downloads as a PNG to keep or print. This guide is for the grown-up setting up the session as much as for the child using it.",
    ],
    sections: [
      {
        heading: "Made for little artists",
        paragraphs: [
          "The interface is deliberately smaller than the main sketchpad. There is a brush, an eraser, undo and redo, a clear button, a palette of large color dots, and a stamp shelf. That is the whole toolset. No text tool, no shape settings, and no panels to accidentally close.",
          "The buttons are sized to be easy to tap, and the canvas fills the space between the controls. On a tablet, a child can draw with a finger or a stylus. On a computer, a mouse works the same way. Nothing needs to be configured before the first mark.",
        ],
      },
      {
        heading: "How to start a drawing session",
        paragraphs: [
          "Show two or three controls, not all of them. The rest can be discovered later. A simple first session looks like this:",
        ],
        ordered: true,
        list: [
          "Open the page and hand over the device, or sit together at the computer.",
          "Tap a color dot to choose a drawing color.",
          "Pick the brush and draw a line, a shape, or a scribble.",
          "Tap a stamp, then tap the canvas to place it.",
          "Use the eraser for a small mistake, or undo to step back.",
          "Try redo if the undo removed something worth keeping.",
          "Download a PNG when the drawing is finished.",
          "Use clear only when everyone is ready to start a fresh picture.",
        ],
      },
      {
        heading: "Stamps make drawing a game",
        paragraphs: [
          "The stamp shelf turns a blank canvas into a playground. Stars, hearts, rainbows, animals, rockets, and other small pictures appear wherever a child taps. Stamps can be layered with brush strokes to build scenes, patterns, and stories: a rocket among drawn planets, a cat on a drawn sofa, a rainbow over a scribbled house.",
          "Stamps are also a gentle way to practice placement and composition. Ask a child to put three stars in the sky and one on the ground, or to make a pattern by alternating two stamps. The constraint gives the drawing a job without turning it into a lesson.",
        ],
      },
      {
        heading: "Drawing prompts that work for young children",
        paragraphs: [
          "Open-ended instructions can stall a young artist. A short, specific prompt gives them a place to start and leaves room to improvise. Try one of these when the canvas is blank:",
        ],
        list: [
          "Draw a house for a favorite toy, then add a garden.",
          "Fill the page with circles and turn three of them into faces.",
          "Make a sky with stamps and draw the ground underneath.",
          "Draw your pet, real or imaginary, with one unusual color.",
          "Make a two-color poster for a pretend event.",
          "Draw a map of your bedroom, then add a secret door.",
          "Create a pattern using only stamps and one drawn line.",
          "Draw the weather you wish it was today.",
          "Make a birthday card for someone in the family.",
          "Draw a story in three pictures from left to right.",
        ],
      },
      {
        heading: "What children practice without noticing",
        paragraphs: [
          "Drawing on a screen is play first, but it builds real skills. Choosing a color is a decision about contrast. Placing a stamp is a decision about space. Undoing a line is a first lesson in editing, and redrawing it is a lesson in persistence. A child who explains what is happening in the picture is also practicing language and sequencing.",
          "The digital canvas adds one useful advantage over paper: mistakes are cheap. A child can experiment with a bold color, erase it, and try again without wasting materials. That freedom tends to produce more risks and more finished drawings, especially in the first few sessions.",
        ],
      },
      {
        heading: "A calm first session for parents",
        paragraphs: [
          "Keep the session short and the setup simple. Ten or fifteen minutes is enough for a first drawing, and a timer avoids the negotiation that comes with an open-ended screen session. Sit nearby, but let the child lead. The goal is exploration, not a tidy result.",
          "Ask about the drawing rather than judging it. What is the purple animal doing? Where does that door go? Why is the sun on the left? The questions show that the ideas matter, which is more motivating than praise for a neat line. If the child wants to keep going, the drawing will still be there on the same device.",
        ],
      },
      {
        heading: "Using the page in a classroom or playgroup",
        paragraphs: [
          "The page works well as a station in a rotation because it needs no login and no setup. Pair children at one screen and let them take turns adding one stamp or one line. The exercise practices sharing, sequencing, and negotiation as much as it practices drawing.",
          "For a group activity, give every pair the same prompt and compare the results at the end. The differences are the interesting part: the same instruction produces a completely different house, creature, or map. Export the drawings as PNGs so they can be printed for a wall display or sent home.",
        ],
      },
      {
        heading: "Setting up the device before you hand it over",
        paragraphs: [
          "A minute of preparation makes the first session smoother. Open the page in a browser tab, turn the device to landscape if it is a tablet, and close anything else that might steal a tap. Raise the screen brightness a little so the colors read properly, and check that the browser is not zoomed in so far that the controls crowd the canvas.",
          "If the child uses a stylus, make sure it is charged and paired before the drawing starts. If they use a finger, a clean screen helps more than any setting. For a shared family tablet, consider a separate browser profile for drawing so the canvas does not replace someone else's saved picture.",
        ],
      },
      {
        heading: "Five art games that need no preparation",
        paragraphs: [
          "A game gives the session a shape without turning it into a lesson. These work with one child or two, and each one can be finished in a few minutes:",
        ],
        list: [
          "Color hunt: name a color and ask the child to fill a corner with it, then add a stamp that matches.",
          "Shape story: draw three shapes, then turn each one into a character.",
          "Stamp pattern: alternate two stamps in a line, then break the pattern on purpose and spot the difference.",
          "Finish the picture: draw half of an animal and let the child complete it.",
          "Two-color challenge: make a whole picture using only two colors and one stamp.",
        ],
      },
      {
        heading: "A healthy approach to screen time",
        paragraphs: [
          "Drawing is one of the better uses of a screen because it is active rather than passive. A child is deciding, placing, correcting, and explaining, not just watching. That does not make the time unlimited, but it does mean a drawing session can sit comfortably alongside reading, building, and drawing on paper.",
          "A simple rhythm works well: a short session with a clear ending, a look at what was made, and a download if the picture matters. Keep paper and pencils nearby too. The screen version has undo and stamps; paper has texture, weight, and no battery. Children benefit from both, and moving between them is part of learning how materials behave.",
        ],
      },
      {
        heading: "Safety, privacy, and what to expect",
        paragraphs: [
          "There is no account, no profile, no comment section, and no in-app purchase. Drawings stay in the browser on the device and are not uploaded by the canvas. That makes the page easy to hand over without creating a login or managing a password.",
          "Like most websites, the page loads analytics and advertising scripts that may set cookies or record page-level information. Those scripts do not receive the contents of the drawing. A parent or teacher should decide whether that is acceptable for their setting, just as they would for any other site. The privacy policy has the details.",
        ],
      },
      {
        heading: "Saving, printing, and starting fresh",
        paragraphs: [
          "The drawing saves automatically in the browser. Close the tab and it will be waiting on the same device when the page is opened again. That is convenient between sessions, but it is not a permanent archive. Clearing browser data or switching devices will remove the local copy.",
          "Download a PNG when the work is worth keeping. A PNG can be printed, added to a family album, sent to a relative, or used as a desktop background. Give the file a descriptive name so it is easy to find later. When the child is ready for a new picture, the clear button starts a fresh canvas; export the old one first if it matters.",
        ],
      },
      {
        heading: "When a child is ready for more tools",
        paragraphs: [
          "The kids page is intentionally limited. When a child starts asking for shapes, text, or a grid, move to the home [sketchpad](/) or the [drawing board](/drawing-board/). Those pages add rectangles, ellipses, lines, arrows, text, and more control without changing the basic way of drawing.",
          "There is no need to rush the transition. A child who is comfortable experimenting, undoing, and explaining a picture has already learned the most important habits. The extra tools can wait until the work asks for them.",
        ],
      },
    ],
    relatedHeading: "More free tools from SimpleSketchpad",
    related: {
      "drawing-board": { label: "Online Drawing Board", blurb: "A workspace for planning, sticky notes, and visual notes." },
      whiteboard: { label: "Free Online Whiteboard", blurb: "An infinite canvas for teaching, meetings, and brainstorming." },
      "graph-paper": { label: "Online Graph Paper", blurb: "An adjustable grid for math, geometry, and technical sketches." },
      "kids-drawing": { label: "Online Drawing for Kids", blurb: "Big buttons and fun stamps made for little artists." },
    },
    faqHeading: "Frequently Asked Questions",
    faq: [
      {
        q: "Is this drawing tool safe for kids?",
        a: "The page has no account, no chat, and no purchases, and the canvas does not upload drawings. Like most sites it loads analytics and advertising scripts, so a parent or teacher should decide whether that is acceptable.",
      },
      {
        q: "Can my child draw on a tablet or phone?",
        a: "Yes. The interface uses large touch-friendly buttons and works with fingers, a stylus, or a mouse on any device.",
      },
      {
        q: "What are the stamps?",
        a: "Stamps are small pictures such as stars, hearts, rainbows, animals, and rockets. A child taps a stamp and then taps the canvas to place it, which makes drawing feel like a game.",
      },
      {
        q: "Can we save or print the drawings?",
        a: "Yes. Each drawing is autosaved on the device and can be downloaded as a PNG, ready to print, share, or keep.",
      },
      {
        q: "Do I need to create an account for my child?",
        a: "No. There is no sign-up, email address, or profile. The page opens and the child can draw immediately.",
      },
      {
        q: "Can my child undo a mistake?",
        a: "Yes. There are undo and redo buttons, plus an eraser for small corrections. Undo is usually the faster fix when a whole stroke needs to go.",
      },
      {
        q: "How do I start a new drawing?",
        a: "Use the clear button to empty the canvas. Download a PNG first if the current drawing should be kept. The previous drawing cannot be recovered after clearing.",
      },
      {
        q: "Does the kids page work offline?",
        a: "Once the page has loaded, the canvas keeps working and autosave continues locally. A first visit or a hard refresh needs a connection.",
      },
      {
        q: "When should a child move to the main sketchpad?",
        a: "When they ask for shapes, text, or more control. The home sketchpad and the drawing board add those features while keeping the same simple approach to drawing.",
      },
    ],
    closing: [
      "SimpleSketchpad's drawing space for kids keeps creativity frustration-free: a few big controls, bright colors, stamps, and a forgiving undo. The point is to make the first mark easy and the next one easier.",
      "When they are ready for more control, the home [sketchpad](/) and the [drawing board](/drawing-board/) add shapes, text, and notes to grow into.",
    ],
  },
};

const es = {
  "drawing-board": {
    seoTitle: "Pizarra de Dibujo en Línea - Espacio Gratis para Planificar | SimpleSketchpad",
    seoDescription:
      "Una pizarra de dibujo en línea gratis para lluvias de ideas, planificación, notas visuales, diagramas y enseñanza. Lienzo amplio con lápiz, formas, flechas, notas adhesivas y exportación a PNG o SVG.",
    h1: "Pizarra de Dibujo en Línea",
    intro: [
      "Una pizarra de dibujo en línea es un espacio compartido para pensar en voz alta. Mientras que una herramienta de dibujo busca hacer arte, una pizarra busca sacar las ideas rápido: mapear un proceso, esbozar un diseño, tomar notas visuales o explicar un concepto paso a paso.",
      "Esta página te da esa pizarra: un espacio de trabajo amplio y limpio con un lápiz, líneas, formas y flechas para estructurar, texto para etiquetar y notas adhesivas para las ideas que quieras fijar. Todo permanece privado en tu dispositivo y se exporta a PNG o SVG cuando quieras.",
    ],
    sections: [
      {
        heading: "Cómo difiere una pizarra de dibujo de una herramienta de dibujo",
        paragraphs: [
          "Una herramienta de dibujo o arte normal está pensada para el detalle: curvas de presión, texturas de pincel, capas. Una pizarra de dibujo cambia deliberadamente el enfoque. Está hecha para la velocidad y la claridad: coloca un rectángulo para enmarcar una sección, dibuja una flecha para mostrar cómo conectan las ideas, fija una nota adhesiva en lugar de escribir un párrafo. Si planeas, explicas o enseñas, esta es la forma más rápida de trabajar.",
        ],
      },
      {
        heading: "Lluvias de ideas, planificación y notas visuales",
        paragraphs: [
          "Usa la pizarra para dividir un proyecto en pasos, comparar opciones lado a lado, capturar notas de reuniones en formato visual o diseñar un diseño aproximado antes de abrir algo más pesado. Las notas adhesivas te permiten tratar las ideas como tarjetas móviles, así que agrupar y reorganizar se siente tan natural como en una pared real.",
        ],
        list: [
          "Divide ideas grandes en otras más pequeñas y conectadas",
          "Esboza diseños de páginas, flujos y procesos",
          "Toma notas visuales en reuniones y clases",
          "Planifica lecciones, talleres y presentaciones",
          "Delinea diagramas antes de formalizarlos",
        ],
      },
      {
        heading: "Hecha para enseñar y presentar",
        paragraphs: [
          "Como la pizarra funciona en el navegador, está lista para usarse con un proyector, en una videollamada con pantalla compartida o en una tableta frente a la clase. Dibuja, anota y reorganiza en vivo, y exporta la pizarra final para que los estudiantes o compañeros puedan leerla a su ritmo.",
        ],
      },
    ],
    relatedHeading: "Más herramientas gratis de SimpleSketchpad",
    related: {
      "drawing-board": { label: "Pizarra de Dibujo en Línea", blurb: "Un espacio de trabajo para planificar, notas adhesivas y notas visuales." },
      whiteboard: { label: "Pizarra Blanca en Línea Gratis", blurb: "Un lienzo infinito para enseñar, reuniones y lluvias de ideas." },
      "graph-paper": { label: "Papel Cuadriculado en Línea", blurb: "Una cuadrícula ajustable para matemáticas, geometría y bocetos técnicos." },
      "kids-drawing": { label: "Dibujo en Línea para Niños", blurb: "Botones grandes y sellos divertidos para pequeños artistas." },
    },
    faqHeading: "Preguntas Frecuentes",
    faq: [
      {
        q: "¿Qué es una pizarra de dibujo en línea?",
        a: "Una pizarra de dibujo en línea es un espacio blanco en el navegador para esbozar ideas, diagramas y planes. A diferencia de una herramienta de dibujo centrada en la obra terminada, enfatiza la velocidad, la estructura y la claridad: ideal para lluvias de ideas, planificación y enseñanza.",
      },
      {
        q: "¿Puedo añadir notas adhesivas a la pizarra?",
        a: "Sí. Elige la herramienta de nota adhesiva, arrastra para dibujar una nota y escribe directamente dentro de ella. Las notas se comportan como tarjetas móviles, así que puedes agrupar y reorganizar ideas tan fácil como en una pared real.",
      },
      {
        q: "¿Puedo exportar la pizarra terminada?",
        a: "Sí. Exporta la pizarra como PNG de alta resolución para compartir o imprimir, o como SVG si quieres seguir editándola después en software de gráficos.",
      },
      {
        q: "¿La pizarra de dibujo es gratis?",
        a: "Sí, y no hay nada que instalar ni cuenta que crear. Todo funciona en tu navegador y tu trabajo nunca se sube a ninguna parte.",
      },
    ],
    closing: [
      "Esta pizarra de dibujo es la fase de pensamiento de SimpleSketchpad. Cuando estés listo para pasar de las ideas aproximadas a algo más visual, la herramienta de dibujo en línea añade lápiz, pincel y más control para ilustraciones terminadas.",
    ],
  },
  whiteboard: {
    seoTitle: "Pizarra Blanca en Línea Gratis - Para Lluvias de Ideas | SimpleSketchpad",
    seoDescription:
      "Una pizarra blanca en línea gratis para reuniones, enseñanza, estudio y lluvias de ideas. Lienzo infinito, lápiz, resaltador, formas, flechas, notas adhesivas y exportación a PNG o SVG.",
    h1: "Pizarra Blanca en Línea Gratis",
    intro: [
      "Esta pizarra blanca en línea gratuita te da un lienzo ilimitado para los momentos en que las ideas necesitan espacio para moverse. Esboza un flujo, subraya el punto clave, coloca una nota adhesiva y aléjate para ver el panorama completo: nada te limita a los bordes de una página.",
      "Funciona como una pizarra real, pero mejor: puedes hacer paneo y zoom libremente, resaltar sobre diagramas con un marcador suave, reorganizar notas y exportar todo como PNG o SVG. Sin cuentas, sin costos y todo permanece en tu dispositivo.",
    ],
    sections: [
      {
        heading: "Un lienzo infinito para trabajo real",
        paragraphs: [
          "El lienzo crece con tu pensamiento. Acércate para escribir notas pequeñas y luego aléjate para organizarlas en un mapa de la conversación. El paneo con barra espaciadora, el zoom con la rueda y el zoom táctil de dos dedos mantienen la experiencia rápida en cualquier dispositivo: portátil, tableta o teléfono.",
        ],
      },
      {
        heading: "Hecha para lluvias de ideas y explicaciones",
        paragraphs: [
          "Usa un lápiz para escribir a mano, un resaltador para llamar la atención, flechas para vincular causa y efecto y notas adhesivas para recoger reacciones y tareas. Es igual de útil en una sesión de planificación, de estudio o en una clase donde dibujar la idea es mejor que describirla.",
        ],
        list: [
          "Sesiones de lluvia de ideas e ideación",
          "Enseñanza y tutorías en línea",
          "Explicar ideas en reuniones",
          "Mapas de estudio y repaso",
          "Planificar proyectos en un solo lienzo",
        ],
      },
      {
        heading: "Una pizarra virtual que se comporta como papel",
        paragraphs: [
          "La escritura a mano se mantiene natural porque los trazos se guardan como vectores, no como píxeles aplanados. Eso significa exportaciones nítidas en cualquier nivel de zoom y una exportación SVG que se edita como un archivo de dibujo real.",
        ],
      },
    ],
    relatedHeading: "Más herramientas gratis de SimpleSketchpad",
    related: {
      "drawing-board": { label: "Pizarra de Dibujo en Línea", blurb: "Un espacio de trabajo para planificar, notas adhesivas y notas visuales." },
      whiteboard: { label: "Pizarra Blanca en Línea Gratis", blurb: "Un lienzo infinito para enseñar, reuniones y lluvias de ideas." },
      "graph-paper": { label: "Papel Cuadriculado en Línea", blurb: "Una cuadrícula ajustable para matemáticas, geometría y bocetos técnicos." },
      "kids-drawing": { label: "Dibujo en Línea para Niños", blurb: "Botones grandes y sellos divertidos para pequeños artistas." },
    },
    faqHeading: "Preguntas Frecuentes",
    faq: [
      {
        q: "¿Esta pizarra blanca en línea es gratis de verdad?",
        a: "Sí. No hay prueba limitada, ni marca de agua, ni cuenta. La pizarra funciona por completo en tu navegador y exporta a PNG o SVG cuando lo necesites.",
      },
      {
        q: "¿Puedo usar un resaltador en la pizarra?",
        a: "Sí, hay una herramienta de resaltador dedicada con trazo suave y translúcido, para enfatizar tu escritura y diagramas sin ocultarlos.",
      },
      {
        q: "¿Puedo colaborar o compartir una pizarra?",
        a: "La pizarra está diseñada para ser privada y autoguardada en tu dispositivo. Para compartir trabajo, exporta como PNG o SVG y comparte el archivo: no interviene almacenamiento de terceros.",
      },
      {
        q: "¿Una pizarra en línea funciona en reuniones?",
        a: "Sí. El paneo y el zoom mantienen usable una pizarra grande en un portátil, y el modo de pantalla completa la hace ideal para compartir pantalla en llamadas y clases.",
      },
    ],
    closing: [
      "La pizarra blanca es donde la facilidad de uso se encuentra con la planificación seria. Si tu sesión necesita estructura y cuadrículas en lugar de libertad total, prueba el papel cuadriculado en línea; si necesita formas alineadas y notas adhesivas, la pizarra de dibujo en línea es ideal.",
    ],
  },
  "graph-paper": {
    seoTitle: "Papel Cuadriculado en Línea - Papel con Cuadrícula Ajustable | SimpleSketchpad",
    seoDescription:
      "Dibuja en papel cuadriculado en línea con una cuadrícula ajustable. Elige cuadrículas cuadradas, de puntos o de líneas, cambia el espaciado, alinea al grid y exporta a PNG o SVG. Gratis, sin registro.",
    h1: "Papel Cuadriculado en Línea",
    intro: [
      "A veces necesitas papel pautado, no una página en blanco. Este papel cuadriculado en línea pone una cuadrícula ajustable en el centro de una herramienta de dibujo real: elige cuadrículas cuadradas, de puntos o de líneas, cambia el espaciado, ajusta tus trazos al grid y mantén alineadas todas las medidas.",
      "Está pensado para el trabajo donde la precisión importa: geometría, matemáticas, trazado de gráficas, bocetos técnicos y diagramas con cajas y flechas que deben encajar. Todo se exporta a PNG o SVG, así tu dibujo cuadriculado está listo para imprimir o compartir.",
    ],
    sections: [
      {
        heading: "La cuadrícula es la protagonista",
        paragraphs: [
          "Elige una cuadrícula cuadrada para trazados y geometría, una de puntos para una guía más sutil o una de líneas para gráficas y tablas. Ajusta el tamaño de las celdas a tu tarea —espaciado fino para trazados detallados, celdas grandes para planos y distribuciones— y activa el ajuste al grid para que líneas, formas y texto caigan exactamente donde quieres.",
        ],
        list: [
          "Estilos de cuadrícula: cuadrada, de puntos y de líneas",
          "Espaciado de cuadrícula ajustable",
          "Líneas mayores y menores",
          "Ajuste del dibujo a la cuadrícula",
          "Lápiz, líneas, flechas, formas y texto",
          "Medidas y anotaciones",
          "Paneo y zoom para trazados grandes",
          "Exportación a PNG y SVG",
        ],
      },
      {
        heading: "Para estudiantes, matemáticas y trabajo técnico",
        paragraphs: [
          "Los estudiantes pueden trazar funciones sobre una cuadrícula precisa, las clases de geometría obtienen bordes rectos y ángulos limpios, y los ingenieros y diseñadores pueden esbozar diseños técnicos donde la alineación lo es todo. Usa la herramienta de texto para etiquetar ejes, anotar medidas y comentar cada paso.",
        ],
      },
      {
        heading: "Papel cuadriculado, sin el papel",
        paragraphs: [
          "El papel cuadriculado digital nunca se agota, no se mancha y no necesita fotocopias. Cambia la cuadrícula de un trazado a medias, borra los errores limpiamente y exporta una versión nítida para una hoja de trabajo, un informe o una presentación.",
        ],
      },
    ],
    relatedHeading: "Más herramientas gratis de SimpleSketchpad",
    related: {
      "drawing-board": { label: "Pizarra de Dibujo en Línea", blurb: "Un espacio de trabajo para planificar, notas adhesivas y notas visuales." },
      whiteboard: { label: "Pizarra Blanca en Línea Gratis", blurb: "Un lienzo infinito para enseñar, reuniones y lluvias de ideas." },
      "graph-paper": { label: "Papel Cuadriculado en Línea", blurb: "Una cuadrícula ajustable para matemáticas, geometría y bocetos técnicos." },
      "kids-drawing": { label: "Dibujo en Línea para Niños", blurb: "Botones grandes y sellos divertidos para pequeños artistas." },
    },
    faqHeading: "Preguntas Frecuentes",
    faq: [
      {
        q: "¿Qué es el papel cuadriculado en línea?",
        a: "Es una cuadrícula pautada en la que dibujas en el navegador en lugar de en papel impreso. A diferencia de una imagen estática, el tamaño y el estilo de la cuadrícula son ajustables y tus trazos se alinean a ella.",
      },
      {
        q: "¿Puedo cambiar el tamaño de la cuadrícula?",
        a: "Sí. Cambia entre cuadrículas cuadradas, de puntos y de líneas, y ajusta el espaciado de las celdas a tu tarea. Las líneas principales se dibujan con más fuerza cada pocas celdas para mantenerte orientado.",
      },
      {
        q: "¿El dibujo se ajusta a la cuadrícula?",
        a: "Sí, cuando activas el ajuste al grid. Las líneas, formas y texto se fijan a los puntos más cercanos de la cuadrícula, lo que mantiene precisos los diagramas y trazados.",
      },
      {
        q: "¿Puedo exportar mi dibujo cuadriculado?",
        a: "Sí. Exporta un PNG de alta resolución para imprimir o compartir, o un SVG para editar en software vectorial. La propia cuadrícula aparece en la exportación para que tu trazado se lea con claridad.",
      },
    ],
    closing: [
      "Cuando el papel en blanco parece suelto y el trabajo final parece pesado, el papel cuadriculado es el punto medio. Para pizarras más libres y centradas en ideas, la pizarra de dibujo en línea y la pizarra blanca en línea gratuita permiten esbozar sin ninguna regla.",
    ],
  },
  "kids-drawing": {
    seoTitle: "Dibujo en Línea para Niños - Gratis, Seguro y Divertido | SimpleSketchpad",
    seoDescription:
      "Una herramienta de dibujo en línea para niños con botones grandes, colores brillantes y sellos divertidos. Segura y sin registro, funciona en tabletas y teléfonos, y guarda dibujos en PNG.",
    h1: "Dibujo en Línea para Niños",
    intro: [
      "Esta herramienta de dibujo está pensada para manos pequeñas y grandes imaginaciones. Sin menús confusos y sin cuentas: solo botones enormes, colores brillantes, un borrador comprensivo y una caja de sellos llena de estrellas, corazones y animales para decorar cualquier dibujo.",
      "Todo funciona con un toque o un dedo, así que un niño puede empezar a crear en segundos, en una tableta, teléfono o computadora. Cada dibujo se guarda en el dispositivo y la obra terminada se descarga como PNG para conservarla o imprimirla.",
    ],
    sections: [
      {
        heading: "Hecha para pequeños artistas",
        paragraphs: [
          "Las herramientas tienen un tamaño imposible de pasar por alto: un gran botón de dibujo, un gran borrador y nueve muestras grandes de color. No hay herramienta de texto, ni de formas, ni ajustes con los que tropezarse: solo la alegría de marcar un lienzo brillante.",
        ],
      },
      {
        heading: "Los sellos convierten cada dibujo en un juego",
        paragraphs: [
          "La caja de sellos convierte el dibujo en juego. Elige una estrella, un corazón o un animal amigable, toca el lienzo y aparece al instante del tamaño del dedo. Combina sellos con líneas dibujadas para crear escenas, patrones e historias.",
        ],
      },
      {
        heading: "Segura, privada y amable con los padres",
        paragraphs: [
          "No hay compras dentro de la app ni cuentas. Los dibujos se guardan solo en el navegador y nunca se suben. Los padres pueden entregar una tableta tranquilamente sin preocuparse por sorpresas.",
        ],
      },
    ],
    relatedHeading: "Más herramientas gratis de SimpleSketchpad",
    related: {
      "drawing-board": { label: "Pizarra de Dibujo en Línea", blurb: "Un espacio de trabajo para planificar, notas adhesivas y notas visuales." },
      whiteboard: { label: "Pizarra Blanca en Línea Gratis", blurb: "Un lienzo infinito para enseñar, reuniones y lluvias de ideas." },
      "graph-paper": { label: "Papel Cuadriculado en Línea", blurb: "Una cuadrícula ajustable para matemáticas, geometría y bocetos técnicos." },
      "kids-drawing": { label: "Dibujo en Línea para Niños", blurb: "Botones grandes y sellos divertidos para pequeños artistas." },
    },
    faqHeading: "Preguntas Frecuentes",
    faq: [
      {
        q: "¿Esta herramienta de dibujo es segura para niños?",
        a: "Sí. No hay compras ni cuentas. Todo funciona en el navegador y los dibujos nunca salen del dispositivo, así que no hay nada que un niño pueda tocar por error.",
      },
      {
        q: "¿Mi hijo puede dibujar en una tableta o teléfono?",
        a: "Sí. La interfaz usa botones grandes pensados para el tacto y funciona con dedos, lápiz óptico o ratón en cualquier dispositivo.",
      },
      {
        q: "¿Qué son los sellos?",
        a: "Son imágenes divertidas —estrellas, corazones, animales y más— que el niño toca para dejar caer sobre el lienzo al instante. Hacen que dibujar se sienta como un juego.",
      },
      {
        q: "¿Podemos guardar o imprimir los dibujos?",
        a: "Sí. Cada dibujo se guarda automáticamente en el dispositivo y se puede descargar como PNG, listo para imprimir, compartir o colgar en la nevera.",
      },
    ],
    closing: [
      "El espacio de dibujo para niños de SimpleSketchpad mantiene la creatividad sin frustraciones. Cuando estén listos para más control, la herramienta de dibujo en línea y la pizarra de dibujo en línea añaden formas, texto y notas para que sigan creciendo.",
    ],
  },
};

const ja = {
  "drawing-board": {
    seoTitle: "オンライン製図ボード - 企画・ブレスト用の無料スペース | SimpleSketchpad",
    seoDescription:
      "ブレインストーミング、企画、ビジュアルノート、図解、授業のための無料オンライン製図ボード。ペン、図形、矢印、付箋を備えた広いキャンバス。PNG・SVG書き出し対応。",
    h1: "オンライン製図ボード",
    intro: [
      "オンライン製図ボードは、考えを声に出して整理するための共有スペースです。描画ツールが作品を作るのに対し、製図ボードはアイデアを素早く形にするためのもの。プロセスのマップ化、レイアウトのスケッチ、ビジュアルノート、授業での段階的な説明などに向きます。",
      "このページはそのためのボードです。ペン、線、図形、矢印による構造化、ラベル用のテキスト、そしてアイデアを留めておく付箋を備えた、広くてすっきりしたワークスペース。すべて端末上にプライベートに保たれ、好きなときにPNG・SVGで書き出せます。",
    ],
    sections: [
      {
        heading: "製図ボードと描画ツールの違い",
        paragraphs: [
          "普通の描画・アートツールは細部に特化しています。筆圧カーブ、ブラシのテクスチャ、レイヤーなど。製図ボードは意識的に焦点を変えています。スピードと明快さのために作られているのです。セクションを枠でくくり、矢印でアイデアのつながりを示し、長い文章の代わりに付箋を貼る。企画・説明・授業をするなら、これが最速の作業方法です。",
        ],
      },
      {
        heading: "ブレインストーミング、企画、ビジュアルノート",
        paragraphs: [
          "ボードを使ってプロジェクトをステップに分解し、選択肢を並べて比較し、会議メモをビジュアルとして残し、重いツールを開く前にラフなレイアウトを設計しましょう。付箋はアイデアを動かせるカードとして扱えるので、束ねたり並べ替えたりするのが本物の壁と同じように自然に感じられます。",
        ],
        list: [
          "大きなアイデアを小さく結びつく形に分解",
          "ページレイアウトやフロー、ワークフローのスケッチ",
          "会議や授業でのビジュアルノート",
          "授業、ワークショップ、プレゼンの企画",
          "正式化する前の図解の下書き",
        ],
      },
      {
        heading: "授業とプレゼンのために",
        paragraphs: [
          "ブラウザで動くので、プロジェクター、画面共有のビデオ通話、あるいはクラスに見せるタブレットですぐ使えます。ライブで描いたり、注釈を付けたり、並べ替えたりして、完成したボードを書き出せば、学生やチームは自分のペースで読めます。",
        ],
      },
    ],
    relatedHeading: "SimpleSketchpadのその他の無料ツール",
    related: {
      "drawing-board": { label: "オンライン製図ボード", blurb: "企画、付箋、ビジュアルノートのためのワークスペース。" },
      whiteboard: { label: "無料オンラインホワイトボード", blurb: "授業、会議、ブレインストーミングのための無限キャンバス。" },
      "graph-paper": { label: "オンライン方眼紙", blurb: "数学、幾何、技術スケッチのための調整可能なグリッド。" },
      "kids-drawing": { label: "子ども向けオンラインお絵かき", blurb: "小さなアーティスト向けの大きなボタンと楽しいスタンプ。" },
    },
    faqHeading: "よくある質問",
    faq: [
      {
        q: "オンライン製図ボードとは何ですか？",
        a: "アイデア、図解、計画をスケッチするためのブラウザ上の白いスペースです。完成作品に焦点を当てる描画ツールとは違い、スピード・構造・明快さを重視します。ブレインストーミング、企画、授業に最適です。",
      },
      {
        q: "ボードに付箋を追加できますか？",
        a: "はい。付箋ツールを選び、ドラッグしてノートを描き、そのままタイプします。ノートは移動できるカードとして機能し、本物の壁と同じようにアイデアを束ねたり並べ替えたりできます。",
      },
      {
        q: "完成したボードを書き出せますか？",
        a: "はい。共有・印刷用の高解像度PNG、または後でグラフィックソフトで編集したい場合はSVGとして書き出せます。",
      },
      {
        q: "製図ボードは無料ですか？",
        a: "はい。インストールもアカウント作成も不要です。すべてブラウザで動作し、作業がどこかにアップロードされることはありません。",
      },
    ],
    closing: [
      "この製図ボードはSimpleSketchpadの「考える」段階です。ラフなアイデアからもっと視覚的なものへ進む準備ができたら、オンライン描画ツールが鉛筆、ブラシ、そして完成したイラストのための細かい操作を提供します。",
    ],
  },
  whiteboard: {
    seoTitle: "無料オンラインホワイトボード - ブレスト用 | SimpleSketchpad",
    seoDescription:
      "会議、授業、勉強、ブレインストーミングのための無料オンラインホワイトボード。無限キャンバス、ペン、蛍光ペン、図形、矢印、付箋。PNG・SVG書き出し対応。",
    h1: "無料オンラインホワイトボード",
    intro: [
      "この無料オンラインホワイトボードは、アイデアが動き回る余地を必要とする瞬間のための無限キャンバスです。フローをスケッチし、要点に下線を引き、付箋を貼り、ズームアウトして全体像を見る。ページの端に縛られることはありません。",
      "本物のホワイトボードのように動作しますが、さらに優れています。自由にパンとズームができ、図解の上を柔らかいマーカーでハイライトでき、ノートを並べ替え、すべてをPNG・SVGで書き出せます。アカウントも費用も不要で、すべて端末上に残ります。",
    ],
    sections: [
      {
        heading: "実際の作業のための無限キャンバス",
        paragraphs: [
          "キャンバスはあなたの思考とともに広がります。小さなメモを書くためにズームインし、会話の地図に並べるためにズームアウト。スペースバーでのパン、ホイールズーム、タッチの2本指ピンチズームで、ノートパソコン、タブレット、スマホのどの端末でも快適です。",
        ],
      },
      {
        heading: "ブレストと説明のために",
        paragraphs: [
          "手書きにはペンを、注意を引きたい部分には蛍光ペンを、因果関係のリンクには矢印を、反応やタスクの収集には付箋を使います。企画セッション、勉強セッション、あるいはアイデアを言葉で説明するより描く方が良い授業まで、どこでも活躍します。",
        ],
        list: [
          "ブレインストーミングとアイデア出し",
          "授業とオンライン個別指導",
          "会議でのアイデア説明",
          "勉強と復習マップ",
          "1つのキャンバスでのプロジェクト企画",
        ],
      },
      {
        heading: "紙のように振る舞うバーチャルホワイトボード",
        paragraphs: [
          "ストロークは平坦化されたピクセルではなくベクターとして保存されるため、手書きは自然なままです。つまり、どのズームレベルでもクリーンでシャープな書き出しができ、SVG書き出しは本物の描画ファイルのように編集できます。",
        ],
      },
    ],
    relatedHeading: "SimpleSketchpadのその他の無料ツール",
    related: {
      "drawing-board": { label: "オンライン製図ボード", blurb: "企画、付箋、ビジュアルノートのためのワークスペース。" },
      whiteboard: { label: "無料オンラインホワイトボード", blurb: "授業、会議、ブレインストーミングのための無限キャンバス。" },
      "graph-paper": { label: "オンライン方眼紙", blurb: "数学、幾何、技術スケッチのための調整可能なグリッド。" },
      "kids-drawing": { label: "子ども向けオンラインお絵かき", blurb: "小さなアーティスト向けの大きなボタンと楽しいスタンプ。" },
    },
    faqHeading: "よくある質問",
    faq: [
      {
        q: "このオンラインホワイトボードは本当に無料ですか？",
        a: "はい。トライアルも透かしもアカウントもありません。ホワイトボードは完全にブラウザで動作し、必要なときに好きなだけPNG・SVGで書き出せます。",
      },
      {
        q: "ホワイトボードで蛍光ペンを使えますか？",
        a: "はい。専用の蛍光ペンツールがあり、柔らかく半透明のストロークで、書き込みや図を隠さずに強調できます。",
      },
      {
        q: "ホワイトボードを共有・共同編集できますか？",
        a: "ホワイトボードは端末上でプライベートかつ自動保存される設計です。共有するにはPNG・SVGとして書き出してファイルを共有してください。第三者のストレージは一切関与しません。",
      },
      {
        q: "オンラインホワイトボードは会議で使えますか？",
        a: "はい。パンとズームのおかげでノートパソコンでも大きなボードを扱え、全画面表示は通話や授業での画面共有に最適です。",
      },
    ],
    closing: [
      "ホワイトボードは、シンプルな使いやすさと本格的な企画力が出会う場所です。自由さよりも構造とグリッドが必要なら、オンライン方眼紙を。整列した図形と付箋が必要なら、オンライン製図ボードが最適です。",
    ],
  },
  "graph-paper": {
    seoTitle: "オンライン方眼紙 - 調整可能なグリッド紙 | SimpleSketchpad",
    seoDescription:
      "調整可能なグリッドでオンライン方眼紙に描けます。正方形、ドット、ラインのグリッドを選び、間隔を変え、グリッドにスナップしてPNG・SVGに書き出せます。無料で登録不要。",
    h1: "オンライン方眼紙",
    intro: [
      "時には白紙ではなく、罫線入りの紙が必要です。このオンライン方眼紙は、調整可能なグリッドを本物の描画ツールの中心に置いています。正方形・ドット・ラインのグリッドを選び、間隔を変え、ストロークをグリッドにスナップさせ、すべての寸法を整列させられます。",
      "精度が重要になる作業のために作られています。幾何、数学、グラフのプロット、製図、そして箱と矢印がきちんと揃う必要のあるダイアグラムに。すべてPNG・SVGで書き出せるので、方眼紙の描画は印刷や共有の準備ができています。",
    ],
    sections: [
      {
        heading: "グリッドこそが機能",
        paragraphs: [
          "プロットや幾何には正方形グリッド、より控えめなガイドにはドットグリッド、グラフや表にはライングリッドを選びます。タスクに合わせてセルのサイズを調整し（詳細プロットには細かい間隔、間取りやレイアウトには大きいセル）、スナップをオンにすれば、線、図形、テキストが意図した位置に正確に収まります。",
        ],
        list: [
          "正方形・ドット・ラインのグリッドスタイル",
          "調整可能なグリッド間隔",
          "主線と補助線",
          "グリッドへの描画スナップ",
          "鉛筆、線、矢印、図形、テキスト",
          "寸法と注釈",
          "大きなプロットのためのパンとズーム",
          "PNG・SVG書き出し",
        ],
      },
      {
        heading: "学生、数学、技術作業のために",
        paragraphs: [
          "学生は正確なグリッド上で関数をプロットでき、幾何の授業ではまっすぐな辺ときれいな角度が得られ、エンジニアやデザイナーは整列がすべての技術レイアウトをスケッチできます。テキストツールで軸にラベルを付け、寸法を記録し、各ステップに注釈を付けましょう。",
        ],
      },
      {
        heading: "紙なしの方眼紙",
        paragraphs: [
          "デジタル方眼紙は尽きることがなく、汚れもせず、コピーも不要です。作業途中のプロットのグリッドを変更し、失敗をきれいに消し、ワークシートやレポート、プレゼン用のシャープな書き出しができます。",
        ],
      },
    ],
    relatedHeading: "SimpleSketchpadのその他の無料ツール",
    related: {
      "drawing-board": { label: "オンライン製図ボード", blurb: "企画、付箋、ビジュアルノートのためのワークスペース。" },
      whiteboard: { label: "無料オンラインホワイトボード", blurb: "授業、会議、ブレインストーミングのための無限キャンバス。" },
      "graph-paper": { label: "オンライン方眼紙", blurb: "数学、幾何、技術スケッチのための調整可能なグリッド。" },
      "kids-drawing": { label: "子ども向けオンラインお絵かき", blurb: "小さなアーティスト向けの大きなボタンと楽しいスタンプ。" },
    },
    faqHeading: "よくある質問",
    faq: [
      {
        q: "オンライン方眼紙とは？",
        a: "印刷した紙の代わりにブラウザ上で描く罫線入りグリッドです。静的な画像とは違い、グリッドのサイズとスタイルを調整でき、ストロークがグリッドに揃います。",
      },
      {
        q: "グリッドのサイズや間隔を変えられますか？",
        a: "はい。正方形・ドット・ラインのグリッドを切り替え、セルの間隔をタスクに合わせて調整できます。一定セルごとに主線が強く描かれ、位置の把握に役立ちます。",
      },
      {
        q: "描画はグリッドにスナップしますか？",
        a: "はい、スナップをオンにするとそうなります。線、図形、テキストが最も近いグリッド点に固定され、ダイアグラムやプロットを正確に保てます。",
      },
      {
        q: "方眼紙の描画を書き出せますか？",
        a: "はい。印刷・共有用の高解像度PNG、またはベクターソフトで編集するためのSVGとして書き出せます。グリッド自体も書き出しに含まれるので、プロットが明確に読めます。",
      },
    ],
    closing: [
      "白紙が緩すぎ、完成作品が重すぎると感じるとき、方眼紙が中間地点です。より自由でアイデア中心のボードが必要なら、オンライン製図ボードと無料オンラインホワイトボードで、規則なしにスケッチできます。",
    ],
  },
  "kids-drawing": {
    seoTitle: "子ども向けオンラインお絵かき - 無料・安全・楽しい | SimpleSketchpad",
    seoDescription:
      "大きなボタン、明るい色、楽しいスタンプが揃った子ども向けの無料オンラインお絵かきツール。安全で登録不要。タブレットやスマホで使え、PNGで保存できます。",
    h1: "子ども向けオンラインお絵かき",
    intro: [
      "このお絵かきツールは、小さな手と大きな想像力のために作られました。迷うメニューも、アカウントもありません。大きなボタン、明るい色、寛大な消しゴム、そして星、ハート、動物でいっぱいのスタンプボックスで、どんな絵も飾れます。",
      "すべてタップか指で動くので、子どもはタブレット、スマホ、パソコンのどれでも数秒で作り始められます。絵は端末に保存され、完成作品はPNGとしてダウンロードして保管・印刷できます。",
    ],
    sections: [
      {
        heading: "小さなアーティストのために",
        paragraphs: [
          "ツールは見逃しようがないサイズです。大きなお絵かきボタン、大きな消しゴム、9つの大きなカラースウォッチ。テキストツールも図形ツールも、つまずきそうな設定もありません。明るいキャンバスを塗る喜びだけがあります。",
        ],
      },
      {
        heading: "スタンプがすべての絵をゲームにする",
        paragraphs: [
          "スタンプボックスはお絵かきを遊びに変えます。星、ハート、魚、かわいい動物を選んでキャンバスをタップすると、指サイズですぐに現れます。スタンプと描いた線を重ねて、シーンや模様、物語を作りましょう。",
        ],
      },
      {
        heading: "安全でプライベート、親に優しい",
        paragraphs: [
          "アプリ内課金も、アカウントもありません。絵はブラウザ内にだけ保存され、アップロードされることはありません。親は安心してタブレットを渡せます。",
        ],
      },
    ],
    relatedHeading: "SimpleSketchpadのその他の無料ツール",
    related: {
      "drawing-board": { label: "オンライン製図ボード", blurb: "企画、付箋、ビジュアルノートのためのワークスペース。" },
      whiteboard: { label: "無料オンラインホワイトボード", blurb: "授業、会議、ブレインストーミングのための無限キャンバス。" },
      "graph-paper": { label: "オンライン方眼紙", blurb: "数学、幾何、技術スケッチのための調整可能なグリッド。" },
      "kids-drawing": { label: "子ども向けオンラインお絵かき", blurb: "小さなアーティスト向けの大きなボタンと楽しいスタンプ。" },
    },
    faqHeading: "よくある質問",
    faq: [
      {
        q: "このお絵かきツールは子どもに安全ですか？",
        a: "はい。課金も、アカウントもありません。すべてブラウザで動き、絵が端末の外へ出ることはないので、子どもが誤って触ってしまうものはありません。",
      },
      {
        q: "子どもはタブレットやスマホで描けますか？",
        a: "はい。大きなタッチ向けボタンのインターフェースで、どの端末でも指、スタイラス、マウスで使えます。",
      },
      {
        q: "スタンプとは何ですか？",
        a: "星、ハート、動物など楽しい絵柄で、タップするだけでキャンバスに瞬時に現れます。お絵かきをゲームのように感じさせます。",
      },
      {
        q: "絵を保存または印刷できますか？",
        a: "はい。各絵は端末に自動保存され、PNGとしてダウンロードして、印刷、共有、冷蔵庫に貼ることができます。",
      },
    ],
    closing: [
      "SimpleSketchpadの子ども向けお絵かきスペースは、クリエイティビティをストレスなく保ちます。もっと操作を学ぶ準備ができたら、オンライン描画ツールとオンライン製図ボードが図形、テキスト、付箋を追加します。",
    ],
  },
};

const fr = {
  "drawing-board": {
    seoTitle: "Planche de Dessin en Ligne - Espace Gratuit pour Planifier | SimpleSketchpad",
    seoDescription:
      "Une planche de dessin en ligne gratuite pour brainstorming, planification, notes visuelles, schémas et enseignement. Grande toile avec crayon, formes, flèches, notes adhésives et export PNG ou SVG.",
    h1: "Planche de Dessin en Ligne",
    intro: [
      "Une planche de dessin en ligne est un espace partagé pour réfléchir à voix haute. Là où un outil de dessin sert à créer de l'art, une planche de dessin sert à sortir les idées rapidement — cartographier un processus, esquisser une mise en page, prendre des notes visuelles ou expliquer un concept étape par étape.",
      "Cette page vous donne cette planche : un grand espace de travail avec un crayon, des lignes, des formes et des flèches pour structurer, du texte pour étiqueter et des notes adhésives pour les idées à fixer. Tout reste privé sur votre appareil et s'exporte en PNG ou SVG.",
    ],
    sections: [
      {
        heading: "Comment une planche de dessin diffère d'un outil de dessin",
        paragraphs: [
          "Un outil de dessin ou d'art normal est orienté détail : courbes de pression, textures de pinceau, calques. Une planche de dessin délibérément inversé la mise au point. Elle est construite pour la rapidité et la clarté — placez un rectangle pour cadrer une section, dessinez une flèche pour montrer comment les idées se connectent, épingler une note adhésive au lieu d'écrire un paragraphe. Si vous planifiez, expliquez ou enseignez, c'est le moyen le plus rapide de travailler.",
        ],
      },
      {
        heading: "Brainstorming, planification et notes visuelles",
        paragraphs: [
          "Utilisez la planche pour décomposer un projet en étapes, comparer des options côte à côte, capturer des notes de réunion sous forme visuelle, ou esquisser une mise en page avant d'ouvrir un outil plus lourd. Les notes adhésives vous permettent de traiter les idées comme des cartes déplaçables, ce qui rend le regroupement et le réarrangement aussi naturel que sur un vrai mur.",
        ],
        list: [
          "Décomposer les grandes idées en petites idées connectées",
          "Esquisser des maquettes, flux et processus",
          "Prendre des notes visuelles en réunion et en cours",
          "Planifier des leçons, ateliers et présentations",
          "Ébaucher des schémas avant de les formaliser",
        ],
      },
      {
        heading: "Conçu pour enseigner et présenter",
        paragraphs: [
          "Comme la planche fonctionne dans le navigateur, elle est prête à être utilisée avec un projecteur, dans un appel vidéo avec partage d'écran, ou sur une tablette tenue devant une classe. Dessinez, annotez et réorganisez en direct, puis exportez la planche terminée pour que les étudiants ou coéquipiers puissent la lire à leur rythme.",
        ],
      },
    ],
    relatedHeading: "Plus d'outils gratuits de SimpleSketchpad",
    related: {
      "drawing-board": { label: "Planche de Dessin en Ligne", blurb: "Un espace de travail pour planifier, notes adhésives et notes visuelles." },
      whiteboard: { label: "Tableau Blanc en Ligne Gratuit", blurb: "Un canevas infini pour enseigner, réunions et brainstorming." },
      "graph-paper": { label: "Papier Quadrillé en Ligne", blurb: "Une grille réglable pour mathématiques, géométrie et dessins techniques." },
      "kids-drawing": { label: "Dessin en Ligne pour Enfants", blurb: "De grands boutons et des tampons amusants pour les petits artistes." },
    },
    faqHeading: "Foire Aux Questions",
    faq: [
      {
        q: "Qu'est-ce qu'une planche de dessin en ligne ?",
        a: "Une planche de dessin en ligne est un espace blanc dans le navigateur pour esquisser des idées, des schémas et des plans. Contrairement à un outil de dessin centré sur l'œuvre finale, elle met l'accent sur la rapidité, la structure et la clarté — idéale pour le brainstorming, la planification et l'enseignement.",
      },
      {
        q: "Puis-je ajouter des notes adhésives à la planche ?",
        a: "Oui. Choisissez l'outil note adhésive, faites glisser pour dessiner une note et tapez directement dedans. Les notes se comportent comme des cartes déplaçables, vous pouvez donc regrouper et réarranger les idées facilement comme sur un vrai mur.",
      },
      {
        q: "Puis-je exporter la planche terminée ?",
        a: "Oui. Exportez la planche en PNG haute résolution pour partager ou imprimer, ou en SVG si vous voulez continuer à l'éditer dans un logiciel graphique.",
      },
      {
        q: "La planche de dessin est-elle gratuite ?",
        a: "Oui, et il n'y a rien à installer ni de compte à créer. Tout fonctionne dans votre navigateur et votre travail n'est jamais téléchargé nulle part.",
      },
    ],
    closing: [
      "Cette planche de dessin est la phase de réflexion de SimpleSketchpad. Quand vous êtes prêt à passer des idées approximatives à quelque chose de plus visuel, l'outil de dessin en ligne ajoute crayon, pinceau et contrôle fini pour les illustrations terminées.",
    ],
  },
  whiteboard: {
    seoTitle: "Tableau Blanc en Ligne Gratuit - Pour Brainstorming | SimpleSketchpad",
    seoDescription:
      "Un tableau blanc en ligne gratuit pour réunions, enseignement, étude et brainstorming. Canevas infini, crayon, surligneur, formes, flèches, notes adhésives, export PNG et SVG.",
    h1: "Tableau Blanc en Ligne Gratuit",
    intro: [
      "Ce tableau blanc en ligne gratuit vous donne un canevas illimité pour les moments où les idées ont besoin d'espace pour bouger. Esquissez un flux, soulignez le point clé, déposez une note adhésive et dézoomez pour voir l'ensemble — rien ne vous limite aux bords d'une page.",
      "Il fonctionne comme un vrai tableau blanc, mais mieux : vous pouvez défiler et zoomer librement, surligner par-dessus des schémas avec un marqueur doux, réorganiser des notes et tout exporter en PNG ou SVG. Pas de comptes, pas de frais, et tout reste sur votre appareil.",
    ],
    sections: [
      {
        heading: "Un canevas infini pour un vrai travail",
        paragraphs: [
          "Le canevas grandit avec votre réflexion. Zoomez pour écrire de petites notes, puis dézoomez pour les organiser en carte de la conversation. Le défilement à la barre d'espace, le zoom à la molette et le zoom pincé à deux doigts maintiennent l'expérience rapide sur tout appareil — ordinateur, tablette ou téléphone.",
        ],
      },
      {
        heading: "Conçu pour le brainstorming et les explications",
        paragraphs: [
          "Utilisez un crayon pour l'écriture à la main, un surligneur pour attirer l'attention, des flèches pour relier cause et effet, et des notes adhésives pour recueillir des réactions et des tâches. Il est tout aussi à l'aise dans une session de planification, d'étude ou de cours où dessiner l'idée vaut mieux que la décrire.",
        ],
        list: [
          "Sessions de brainstorming et d'idéation",
          "Enseignement et tutorat en ligne",
          "Expliquer des idées en réunion",
          "Cartes d'étude et de révision",
          "Planifier des projets sur un seul canevas",
        ],
      },
      {
        heading: "Un tableau virtuel qui se comporte comme du papier",
        paragraphs: [
          "L'écriture à la main reste naturelle car les traits sont stockés en vecteurs, pas en pixels aplatis. Cela signifie des exports nets à tout niveau de zoom et un export SVG qui s'édite comme un vrai fichier de dessin.",
        ],
      },
    ],
    relatedHeading: "Plus d'outils gratuits de SimpleSketchpad",
    related: {
      "drawing-board": { label: "Planche de Dessin en Ligne", blurb: "Un espace de travail pour planifier, notes adhésives et notes visuelles." },
      whiteboard: { label: "Tableau Blanc en Ligne Gratuit", blurb: "Un canevas infini pour enseigner, réunions et brainstorming." },
      "graph-paper": { label: "Papier Quadrillé en Ligne", blurb: "Une grille réglable pour mathématiques, géométrie et dessins techniques." },
      "kids-drawing": { label: "Dessin en Ligne pour Enfants", blurb: "De grands boutons et des tampons amusants pour les petits artistes." },
    },
    faqHeading: "Foire Aux Questions",
    faq: [
      {
        q: "Ce tableau blanc en ligne est-il vraiment gratuit ?",
        a: "Oui. Pas d'essai limité, pas de filigrane, pas de compte. Le tableau blanc fonctionne entièrement dans votre navigateur et exporte en PNG ou SVG quand vous en avez besoin.",
      },
      {
        q: "Puis-je utiliser un surligneur sur le tableau blanc ?",
        a: "Oui, il y a un outil surligneur dédié avec un trait doux et translucide qui met en valeur votre écriture et vos schémas sans les masquer.",
      },
      {
        q: "Puis-je collaborer ou partager un tableau blanc ?",
        a: "Le tableau blanc est conçu pour être privé et sauvegardé automatiquement sur votre appareil. Pour partager votre travail, exportez en PNG ou SVG et partagez le fichier — aucun stockage tiers n'est impliqué.",
      },
      {
        q: "Un tableau blanc en ligne fonctionne-t-il en réunion ?",
        a: "Oui. Le défilement et le zoom maintiennent un grand tableau utilisable sur un ordinateur, et le mode plein écran le rend idéal pour le partage d'écran en appels et en cours.",
      },
    ],
    closing: [
      "Le tableau blanc est là où la facilité d'utilisation rencontre la planification sérieuse. Si votre session a besoin de structure et de grilles plutôt que de liberté, essayez le papier quadrillé en ligne ; si elle a besoin de formes alignées et de notes adhésives, la planche de dessin en ligne est un excellent choix.",
    ],
  },
  "graph-paper": {
    seoTitle: "Papier Quadrillé en Ligne - Grille Réglable pour Dessiner | SimpleSketchpad",
    seoDescription:
      "Dessinez sur du papier quadrillé en ligne avec une grille réglable. Choisissez des grilles carrées, en pointillés ou en lignes, modifiez l'espacement, accrochez à la grille et exportez en PNG ou SVG. Gratuit, sans inscription.",
    h1: "Papier Quadrillé en Ligne",
    intro: [
      "Parfois vous avez besoin de papier ligné, pas de page blanche. Ce papier quadrillé en ligne place une grille réglable au centre d'un véritable outil de dessin — choisissez des grilles carrées, en pointillés ou en lignes, modifiez l'espacement, accrochez vos traits à la grille et gardez chaque mesure alignée.",
      "Il est conçu pour le travail où la précision compte : géométrie, mathématiques, traçage de graphiques, dessins techniques et schémas avec des cases et des flèches qui doivent être alignés. Tout s'exporte en PNG ou SVG, votre dessin sur papier quadrillé est prêt à être imprimé ou partagé.",
    ],
    sections: [
      {
        heading: "La grille est la fonctionnalité",
        paragraphs: [
          "Choisissez une grille carrée pour le traçage et la géométrie, une grille en pointillés pour un guide plus subtil, ou une grille en lignes pour les graphiques et tableaux. Ajustez la taille des cellules à votre tâche — espacement fin pour les traçages détaillés, grandes cellules pour les plans et mises en page — et activez l'accrochage à la grille pour que les lignes, formes et texte se positionnent exactement là où vous le souhaitez.",
        ],
        list: [
          "Styles de grille : carrée, en pointillés et en lignes",
          "Espacement de grille réglable",
          "Lignes principales et secondaires",
          "Accrochage du dessin à la grille",
          "Crayon, lignes, flèches, formes et texte",
          "Mesures et annotations",
          "Défilement et zoom pour les grands traçages",
          "Export PNG et SVG",
        ],
      },
      {
        heading: "Pour les étudiants, les mathématiques et le travail technique",
        paragraphs: [
          "Les étudiants peuvent tracer des fonctions sur une grille précise, les cours de géométrie obtiennent des bords droits et des angles nets, et les ingénieurs et designers peuvent esquisser des dispositions techniques où l'alignement est essentiel. Utilisez l'outil texte pour étiqueter les axes, noter les mesures et annoter chaque étape.",
        ],
      },
      {
        heading: "Papier quadrillé, sans le papier",
        paragraphs: [
          "Le papier quadrillé numérique ne manque jamais, ne salit jamais et ne nécessite jamais de photocopie. Redimensionnez la grille d'un traçage à moitié terminé, effacez proprement les erreurs et exportez une version nette pour une feuille d'exercices, un rapport ou une présentation.",
        ],
      },
    ],
    relatedHeading: "Plus d'outils gratuits de SimpleSketchpad",
    related: {
      "drawing-board": { label: "Planche de Dessin en Ligne", blurb: "Un espace de travail pour planifier, notes adhésives et notes visuelles." },
      whiteboard: { label: "Tableau Blanc en Ligne Gratuit", blurb: "Un canevas infini pour enseigner, réunions et brainstorming." },
      "graph-paper": { label: "Papier Quadrillé en Ligne", blurb: "Une grille réglable pour mathématiques, géométrie et dessins techniques." },
      "kids-drawing": { label: "Dessin en Ligne pour Enfants", blurb: "De grands boutons et des tampons amusants pour les petits artistes." },
    },
    faqHeading: "Foire Aux Questions",
    faq: [
      {
        q: "Qu'est-ce que le papier quadrillé en ligne ?",
        a: "C'est une grille lignée sur laquelle vous dessinez dans le navigateur au lieu de sur du papier imprimé. Contrairement à une image statique, la taille et le style de la grille sont ajustables et vos traits s'y alignent.",
      },
      {
        q: "Puis-je changer la taille et l'espacement de la grille ?",
        a: "Oui. Passez entre les grilles carrées, en pointillés et en lignes, et ajustez l'espacement des cellules à votre tâche. Les lignes principales sont dessinées plus fortement toutes les quelques cellules pour vous garder orienté.",
      },
      {
        q: "Le dessin s'accroche-t-il à la grille ?",
        a: "Oui, lorsque vous activez l'accrochage à la grille. Les lignes, formes et texte se fixent aux points de grille les plus proches, ce qui maintient les schémas et traçages précis.",
      },
      {
        q: "Puis-je exporter mon dessin sur papier quadrillé ?",
        a: "Oui. Exportez un PNG haute résolution pour imprimer ou partager, ou un SVG pour éditer dans un logiciel vectoriel. La grille elle-même apparaît dans l'export pour que votre traçage soit clair.",
      },
    ],
    closing: [
      "Quand le papier blanc est trop libre et l'œuvre finale trop lourde, le papier quadrillé est le juste milieu. Pour des tableaux plus libres et centrés sur les idées, la planche de dessin et le tableau blanc en ligne vous permettent d'esquisser sans aucune contrainte.",
    ],
  },
  "kids-drawing": {
    seoTitle: "Dessin en Ligne pour Enfants - Gratuit, Sûr et Amusant | SimpleSketchpad",
    seoDescription:
      "Un outil de dessin en ligne pour enfants avec de grands boutons, des couleurs vives et des tampons amusants. Sûr et sans inscription, fonctionne sur tablettes et téléphones, et sauvegarde en PNG.",
    h1: "Dessin en Ligne pour Enfants",
    intro: [
      "Cet outil de dessin a été conçu pour les petites mains et les grandes imaginations. Pas de menus confus, pas de comptes — juste des boutons énormes, des couleurs vives, une gomme indulgente et une boîte à tampons pleine d'étoiles, de cœurs et d'animaux pour décorer n'importe quel dessin.",
      "Tout fonctionne avec un tap ou un doigt, un enfant peut donc commencer à créer en quelques secondes, sur une tablette, un téléphone ou un ordinateur. Chaque dessin est sauvegardé sur l'appareil, et l'œuvre terminée se télécharge en PNG pour la conserver ou l'imprimer.",
    ],
    sections: [
      {
        heading: "Conçu pour les petits artistes",
        paragraphs: [
          "Les outils sont dimensionnés pour être impossibles à manquer : un gros bouton de dessin, une grosse gomme et neuf grands échantillons de couleurs. Pas d'outil de texte, pas d'outil de forme, pas de paramètres à traverser — juste la joie de marquer une toile lumineuse.",
        ],
      },
      {
        heading: "Les tampons transforment chaque dessin en jeu",
        paragraphs: [
          "La boîte à tampons transforme le dessin en jeu. Choisissez une étoile, un cœur ou un animal mignon, touchez la toile et il apparaît instantanément à la taille du doigt. Superposez des tampons et des lignes dessinées pour créer des scènes, des motifs et des histoires.",
        ],
      },
      {
        heading: "Sûr, privé et rassurant pour les parents",
        paragraphs: [
          "Pas d'achats intégrés, pas de comptes. Les dessins sont stockés uniquement dans le navigateur et ne sont jamais téléchargés. Les parents peuvent sereinement confier une tablette, sans craindre de mauvaises surprises.",
        ],
      },
    ],
    relatedHeading: "Plus d'outils gratuits de SimpleSketchpad",
    related: {
      "drawing-board": { label: "Planche de Dessin en Ligne", blurb: "Un espace de travail pour planifier, notes adhésives et notes visuelles." },
      whiteboard: { label: "Tableau Blanc en Ligne Gratuit", blurb: "Un canevas infini pour enseigner, réunions et brainstorming." },
      "graph-paper": { label: "Papier Quadrillé en Ligne", blurb: "Une grille réglable pour mathématiques, géométrie et dessins techniques." },
      "kids-drawing": { label: "Dessin en Ligne pour Enfants", blurb: "De grands boutons et des tampons amusants pour les petits artistes." },
    },
    faqHeading: "Foire Aux Questions",
    faq: [
      {
        q: "Cet outil de dessin est-il sûr pour les enfants ?",
        a: "Oui. Pas d'achats, pas de comptes. Tout fonctionne dans le navigateur et les dessins ne quittent jamais l'appareil, il n'y a donc rien qu'un enfant pourrait toucher par erreur.",
      },
      {
        q: "Mon enfant peut-il dessiner sur une tablette ou un téléphone ?",
        a: "Oui. L'interface utilise de grands boutons adaptés au tactile et fonctionne avec les doigts, un stylet ou une souris sur n'importe quel appareil.",
      },
      {
        q: "Que sont les tampons ?",
        a: "Ce sont des images amusantes — étoiles, cœurs, animaux et plus — qu'un enfant touche pour faire apparaître instantanément sur la toile. Ils font que dessiner ressemble à un jeu.",
      },
      {
        q: "Puis-nous sauvegarder ou imprimer les dessins ?",
        a: "Oui. Chaque dessin est sauvegardé automatiquement sur l'appareil et peut être téléchargé en PNG, prêt à imprimer, partager ou accrocher au réfrigérateur.",
      },
    ],
    closing: [
      "L'espace de dessin pour enfants de SimpleSketchpad maintient la créativité sans frustration. Quand ils sont prêts à plus de contrôle, l'outil de dessin en ligne et la planche de dessin ajoutent des formes, du texte et des notes pour évoluer.",
    ],
  },
};

const de = {
  "drawing-board": {
    seoTitle: "Online Zeichenbrett - Kostenloser Raum für Planung | SimpleSketchpad",
    seoDescription:
      "Ein kostenloses Online-Zeichenbrett für Brainstorming, Planung, visuelle Notizen, Diagramme und Unterricht. Große Fläche mit Stift, Formen, Pfeilen, Haftnotizen und PNG- oder SVG-Export.",
    h1: "Online Zeichenbrett",
    intro: [
      "Ein Online-Zeichenbrett ist ein gemeinsamer Raum zum lauten Denken. Wo ein Zeichenwerkzeug darum geht, Kunst zu schaffen, geht es bei einem Zeichenbrett darum, Ideen schnell herauszubekommen — einen Prozess zu kartieren, ein Layout zu skizzieren, visuelle Notizen zu machen oder eine Klasse Schritt für Schritt durch ein Konzept zu führen.",
      "Diese Seite gibt Ihnen genau dieses Brett: eine große, saubere Arbeitsfläche mit Stift, Linien, Formen und Pfeilen zur Strukturierung, Text für Beschriftungen und Haftnotizen für die Ideen, die Sie festnageln möchten. Alles bleibt privat auf Ihrem Gerät und lässt sich bei Bedarf als PNG oder SVG exportieren.",
    ],
    sections: [
      {
        heading: "Wie sich ein Zeichenbrett von einem Zeichenwerkzeug unterscheidet",
        paragraphs: [
          "Ein normales Zeichen- oder Kunstwerkzeug ist auf Details ausgerichtet: Druckkurven, Pinselstrukturen, Ebenen. Ein Zeichenbrett kehrt den Fokus bewusst um. Es ist auf Geschwindigkeit und Klarheit ausgelegt — platzieren Sie ein Rechteck, um einen Abschnitt einzurahmen, zeichnen Sie einen Pfeil, um zu zeigen, wie Ideen zusammenhängen, und heften Sie eine Haftnotiz an, statt einen Absatz zu schreiben. Wenn Sie planen, erklären oder unterrichten, ist das der schnellere Weg.",
        ],
      },
      {
        heading: "Brainstorming, Planung und visuelle Notizen",
        paragraphs: [
          "Nutzen Sie das Brett, um ein Projekt in Schritte zu zerlegen, Optionen nebeneinander zu vergleichen, Besprechungsnotizen visuell festzuhalten oder ein grobes Layout zu entwerfen, bevor Sie etwas Schwereres öffnen. Haftnotizen lassen sich wie verschiebbare Karten behandeln, sodass sich Bündeln und Umordnen so natürlich anfühlt wie an einer echten Wand.",
        ],
        list: [
          "Große Ideen in kleine, verbundene zerlegen",
          "Seitenlayouts, Abläufe und Workflows skizzieren",
          "Visuelle Notizen in Besprechungen und Kursen machen",
          "Lektionen, Workshops und Präsentationen planen",
          "Diagramme grob entwerfen, bevor sie formalisiert werden",
        ],
      },
      {
        heading: "Gebaut für Unterricht und Präsentation",
        paragraphs: [
          "Da das Brett im Browser läuft, ist es sofort einsatzbereit mit einem Projektor, in einem Videoanruf mit Bildschirmfreigabe oder auf einem Tablet vor einer Klasse. Zeichnen, kommentieren und ordnen Sie live um, und exportieren Sie das fertige Brett, damit Studierende oder Teamkollegen es in ihrem eigenen Tempo lesen können.",
        ],
      },
    ],
    relatedHeading: "Weitere kostenlose Tools von SimpleSketchpad",
    related: {
      "drawing-board": { label: "Online Zeichenbrett", blurb: "Ein Arbeitsbereich für Planung, Haftnotizen und visuelle Notizen." },
      whiteboard: { label: "Kostenloses Online-Whiteboard", blurb: "Eine unendliche Fläche für Unterricht, Besprechungen und Brainstorming." },
      "graph-paper": { label: "Online-Millimeterpapier", blurb: "Ein einstellbares Raster für Mathematik, Geometrie und technische Skizzen." },
      "kids-drawing": { label: "Online-Zeichnen für Kinder", blurb: "Große Buttons und lustige Stempel für kleine Künstler." },
    },
    faqHeading: "Häufig gestellte Fragen",
    faq: [
      {
        q: "Was ist ein Online-Zeichenbrett?",
        a: "Ein Online-Zeichenbrett ist eine weiße Fläche im Browser zum Skizzieren von Ideen, Diagrammen und Plänen. Anders als ein Zeichenwerkzeug, das auf das fertige Kunstwerk ausgerichtet ist, betont es Geschwindigkeit, Struktur und Klarheit — ideal für Brainstorming, Planung und Unterricht.",
      },
      {
        q: "Kann ich Haftnotizen zum Brett hinzufügen?",
        a: "Ja. Wählen Sie das Haftnotiz-Werkzeug, ziehen Sie eine Notiz auf und tippen Sie direkt hinein. Notizen verhalten sich wie verschiebbare Karten, sodass Sie Ideen genauso einfach bündeln und umordnen können wie an einer echten Wand.",
      },
      {
        q: "Kann ich das fertige Brett exportieren?",
        a: "Ja. Exportieren Sie das Brett als hochauflösendes PNG zum Teilen oder Drucken oder als SVG, wenn Sie es später in Grafiksoftware weiterbearbeiten möchten.",
      },
      {
        q: "Ist das Zeichenbrett kostenlos?",
        a: "Ja, und es gibt nichts zu installieren und kein Konto zu erstellen. Alles läuft in Ihrem Browser, und Ihre Arbeit wird nie irgendwo hochgeladen.",
      },
    ],
    closing: [
      "Dieses Zeichenbrett ist die Denkphase von SimpleSketchpad. Wenn Sie bereit sind, von groben Ideen zu etwas Visuellerem überzugehen, fügt das Online-Zeichenwerkzeug Bleistift, Pinsel und feine Kontrolle für fertige Illustrationen hinzu.",
    ],
  },
  whiteboard: {
    seoTitle: "Kostenloses Online-Whiteboard - Für Brainstorming | SimpleSketchpad",
    seoDescription:
      "Ein kostenloses Online-Whiteboard für Besprechungen, Unterricht, Lernen und Brainstorming. Unendliche Fläche, Stift, Textmarker, Formen, Pfeile, Haftnotizen und PNG- oder SVG-Export.",
    h1: "Kostenloses Online-Whiteboard",
    intro: [
      "Dieses kostenlose Online-Whiteboard gibt Ihnen eine unbegrenzte Fläche für die Momente, in denen Ideen Platz zum Bewegen brauchen. Skizzieren Sie einen Ablauf, unterstreichen Sie den Kernpunkt, setzen Sie eine Haftnotiz und zoomen Sie hinaus, um das Gesamtbild zu sehen — nichts begrenzt Sie auf die Ränder einer Seite.",
      "Es funktioniert wie ein echtes Whiteboard, aber besser: Sie können frei schwenken und zoomen, Diagramme mit einem weichen Marker überzeichnen, Notizen umordnen und alles als PNG oder SVG exportieren. Keine Konten, keine Kosten, und alles bleibt auf Ihrem Gerät.",
    ],
    sections: [
      {
        heading: "Eine unendliche Fläche für echte Arbeit",
        paragraphs: [
          "Die Fläche wächst mit Ihrem Denken. Zoomen Sie hinein, um kleine Notizen zu schreiben, und heraus, um sie zu einer Karte des Gesprächs zu organisieren. Schwenken mit der Leertaste, Rad-Zoom und Zwei-Finger-Pinch-Zoom halten die Erfahrung auf jedem Gerät schnell — Laptop, Tablet oder Telefon.",
        ],
      },
      {
        heading: "Gebaut für Brainstorming und Erklärungen",
        paragraphs: [
          "Nutzen Sie einen Stift für Handschrift, einen Textmarker, um Aufmerksamkeit zu lenken, Pfeile, um Ursache und Wirkung zu verbinden, und Haftnotizen, um Reaktionen und Aufgaben zu sammeln. Es ist gleichermaßen zu Hause in einer Planungssitzung, einer Lernsession oder einem Unterricht, in dem das Zeichnen der Idee besser ist als ihre Beschreibung.",
        ],
        list: [
          "Brainstorming- und Ideenfindungssitzungen",
          "Unterricht und Online-Nachhilfe",
          "Ideen in Besprechungen erklären",
          "Lern- und Wiederholungskarten",
          "Projekte auf einer einzigen Fläche planen",
        ],
      },
      {
        heading: "Ein virtuelles Whiteboard, das sich wie Papier verhält",
        paragraphs: [
          "Handschrift bleibt natürlich, weil Striche als Vektoren gespeichert werden, nicht als geglättete Pixel. Das bedeutet saubere, scharfe Exporte auf jeder Zoomstufe und einen SVG-Export, der sich wie eine echte Zeichendatei bearbeiten lässt.",
        ],
      },
    ],
    relatedHeading: "Weitere kostenlose Tools von SimpleSketchpad",
    related: {
      "drawing-board": { label: "Online Zeichenbrett", blurb: "Ein Arbeitsbereich für Planung, Haftnotizen und visuelle Notizen." },
      whiteboard: { label: "Kostenloses Online-Whiteboard", blurb: "Eine unendliche Fläche für Unterricht, Besprechungen und Brainstorming." },
      "graph-paper": { label: "Online-Millimeterpapier", blurb: "Ein einstellbares Raster für Mathematik, Geometrie und technische Skizzen." },
      "kids-drawing": { label: "Online-Zeichnen für Kinder", blurb: "Große Buttons und lustige Stempel für kleine Künstler." },
    },
    faqHeading: "Häufig gestellte Fragen",
    faq: [
      {
        q: "Ist dieses Online-Whiteboard wirklich kostenlos?",
        a: "Ja. Keine Testversion, kein Wasserzeichen, kein Konto. Das Whiteboard läuft vollständig in Ihrem Browser und exportiert bei Bedarf als PNG oder SVG.",
      },
      {
        q: "Kann ich auf dem Whiteboard einen Textmarker verwenden?",
        a: "Ja, es gibt ein eigenes Textmarker-Werkzeug mit einem weichen, halbtransparenten Strich, der Ihre Schrift und Diagramme betont, ohne sie zu verdecken.",
      },
      {
        q: "Kann ich ein Whiteboard teilen oder gemeinsam bearbeiten?",
        a: "Das Whiteboard ist darauf ausgelegt, privat und automatisch auf Ihrem Gerät gespeichert zu werden. Zum Teilen exportieren Sie es als PNG oder SVG und teilen die Datei — es ist kein Drittanbieter-Speicher beteiligt.",
      },
      {
        q: "Funktioniert ein Online-Whiteboard in Besprechungen?",
        a: "Ja. Schwenken und Zoomen halten ein großes Board auf einem Laptop nutzbar, und der Vollbildmodus eignet sich ideal für Bildschirmfreigaben in Anrufen und Kursen.",
      },
    ],
    closing: [
      "Das Whiteboard ist, wo einfache Bedienbarkeit auf ernsthafte Planung trifft. Wenn Ihre Sitzung Struktur und Raster statt Freiheit braucht, probieren Sie das Online-Millimeterpapier; wenn sie ausgerichtete Formen und Haftnotizen braucht, ist das Online-Zeichenbrett eine gute Wahl.",
    ],
  },
  "graph-paper": {
    seoTitle: "Online-Millimeterpapier - Einstellbares Rasterpapier | SimpleSketchpad",
    seoDescription:
      "Zeichnen Sie auf Online-Millimeterpapier mit einstellbarem Raster. Wählen Sie Quadrat-, Punkt- oder Linienraster, ändern Sie den Abstand, rasten Sie am Raster ein und exportieren Sie als PNG oder SVG. Kostenlos, ohne Registrierung.",
    h1: "Online-Millimeterpapier",
    intro: [
      "Manchmal brauchen Sie liniertes Papier, keine leere Seite. Dieses Online-Millimeterpapier stellt ein einstellbares Raster in den Mittelpunkt eines echten Zeichenwerkzeugs — wählen Sie Quadrat-, Punkt- oder Linienraster, ändern Sie den Abstand, rasten Sie Ihre Striche am Raster ein und halten Sie jede Messung ausgerichtet.",
      "Es ist für Arbeit gebaut, bei der Präzision zählt: Geometrie, Mathematik, Funktionszeichnungen, technische Skizzen und Diagramme mit Kästen und Pfeilen, die zusammenpassen müssen. Alles exportiert als PNG oder SVG, sodass Ihre Millimeterpapier-Zeichnung zum Drucken oder Teilen bereit ist.",
    ],
    sections: [
      {
        heading: "Das Raster ist das Feature",
        paragraphs: [
          "Wählen Sie ein Quadratraster für Zeichnungen und Geometrie, ein Punktraster für eine dezentere Führung oder ein Linienraster für Graphen und Tabellen. Passen Sie die Zellengröße Ihrer Aufgabe an — feiner Abstand für detaillierte Zeichnungen, größere Zellen für Grundrisse und Layouts — und aktivieren Sie das Einrasten, damit Linien, Formen und Text genau dort landen, wo Sie es beabsichtigen.",
        ],
        list: [
          "Gitterstile: quadratisch, gepunktet und Linien",
          "Einstellbarer Rasterabstand",
          "Haupt- und Nebenlinien",
          "Zeichnung am Raster einrasten",
          "Bleistift, Linien, Pfeile, Formen und Text",
          "Messungen und Beschriftungen",
          "Schwenken und Zoomen für große Zeichnungen",
          "Export als PNG und SVG",
        ],
      },
      {
        heading: "Für Studierende, Mathematik und technische Arbeit",
        paragraphs: [
          "Studierende können Funktionen auf einem präzisen Raster zeichnen, Geometriekurse erhalten gerade Kanten und saubere Winkel, und Ingenieure und Designer können technische Layouts skizzieren, bei denen Ausrichtung alles ist. Nutzen Sie das Textwerkzeug, um Achsen zu beschriften, Messungen zu notieren und jeden Schritt zu kommentieren.",
        ],
      },
      {
        heading: "Millimeterpapier, ohne das Papier",
        paragraphs: [
          "Digitales Millimeterpapier geht nie aus, verschmutzt nie und muss nie kopiert werden. Ändern Sie das Raster einer halbfertigen Zeichnung, radieren Sie Fehler sauber weg und exportieren Sie eine scharfe Version für ein Arbeitsblatt, einen Bericht oder eine Präsentation.",
        ],
      },
    ],
    relatedHeading: "Weitere kostenlose Tools von SimpleSketchpad",
    related: {
      "drawing-board": { label: "Online Zeichenbrett", blurb: "Ein Arbeitsbereich für Planung, Haftnotizen und visuelle Notizen." },
      whiteboard: { label: "Kostenloses Online-Whiteboard", blurb: "Eine unendliche Fläche für Unterricht, Besprechungen und Brainstorming." },
      "graph-paper": { label: "Online-Millimeterpapier", blurb: "Ein einstellbares Raster für Mathematik, Geometrie und technische Skizzen." },
      "kids-drawing": { label: "Online-Zeichnen für Kinder", blurb: "Große Buttons und lustige Stempel für kleine Künstler." },
    },
    faqHeading: "Häufig gestellte Fragen",
    faq: [
      {
        q: "Was ist Online-Millimeterpapier?",
        a: "Online-Millimeterpapier ist ein liniertes Raster, auf dem Sie im Browser statt auf gedrucktem Papier zeichnen. Anders als ein statisches Bild sind Rastergröße und -stil einstellbar und Ihre Striche richten sich danach aus.",
      },
      {
        q: "Kann ich Rastergröße und Abstand ändern?",
        a: "Ja. Wechseln Sie zwischen Quadrat-, Punkt- und Linienrastern und passen Sie den Zellabstand Ihrer Aufgabe an. Hauptlinien werden alle paar Zellen stärker gezeichnet, um Sie zu orientieren.",
      },
      {
        q: "Rastet die Zeichnung am Raster ein?",
        a: "Ja, wenn Sie das Einrasten aktivieren. Linien, Formen und Text werden dann an den nächsten Rasterpunkten eingerastet, was Diagramme und Zeichnungen präzise hält.",
      },
      {
        q: "Kann ich meine Millimeterpapier-Zeichnung exportieren?",
        a: "Ja. Exportieren Sie ein hochauflösendes PNG zum Drucken oder Teilen oder ein SVG zur Bearbeitung in Vektorsoftware. Das Raster selbst erscheint im Export, damit Ihre Zeichnung klar lesbar ist.",
      },
    ],
    closing: [
      "Wenn leeres Papier zu locker und die fertige Arbeit zu schwer wirkt, ist Millimeterpapier die Mitte. Für lockerere, ideenorientierte Tafeln lassen Sie das Online-Zeichenbrett und das kostenlose Online-Whiteboard Sie ganz ohne Regeln skizzieren.",
    ],
  },
  "kids-drawing": {
    seoTitle: "Online-Zeichnen für Kinder - Kostenlos, Sicher und Spaß | SimpleSketchpad",
    seoDescription:
      "Ein kostenloses Online-Zeichenwerkzeug für Kinder mit großen Buttons, bunten Farben und lustigen Stempeln. Sicher und ohne Anmeldung, funktioniert auf Tablets und Telefonen, speichert Zeichnungen als PNG.",
    h1: "Online-Zeichnen für Kinder",
    intro: [
      "Dieses Zeichenwerkzeug wurde für kleine Hände und große Fantasien gebaut. Keine verwirrenden Menüs, keine Konten — nur riesige Buttons, helle Farben, ein verzeihender Radierer und eine Stempelbox voller Sterne, Herzen und Tiere, um jede Zeichnung zu verschönern.",
      "Alles funktioniert mit einem Tipp oder Finger, sodass ein Kind in Sekunden zu zeichnen beginnen kann, auf einem Tablet, Telefon oder Computer. Jede Zeichnung wird auf dem Gerät gespeichert, und das fertige Kunstwerk kann als PNG heruntergeladen werden, um es aufzubewahren oder zu drucken.",
    ],
    sections: [
      {
        heading: "Für kleine Künstler gemacht",
        paragraphs: [
          "Die Werkzeuge sind so dimensioniert, dass sie nicht zu übersehen sind: ein großer Zeichnen-Button, ein großer Radierer und neun große Farbfelder. Kein Textwerkzeug, kein Formenwerkzeug, keine Einstellungen, über die man stolpert — nur die Freude, eine helle Fläche zu gestalten.",
        ],
      },
      {
        heading: "Stempel machen jede Zeichnung zum Spiel",
        paragraphs: [
          "Die Stempelbox macht aus dem Zeichnen ein Spiel. Wählen Sie einen Stern, ein Herz oder ein freundliches Tier, tippen Sie auf die Fläche, und es erscheint sofort in Fingergröße. Legen Sie Stempel und gezeichnete Linien übereinander, um Szenen, Muster und Geschichten zu schaffen.",
        ],
      },
      {
        heading: "Sicher, privat und elternfreundlich",
        paragraphs: [
          "Keine In-App-Käufe, keine Konten. Zeichnungen werden nur im Browser gespeichert und nie hochgeladen. Eltern können ein Tablet beruhigt weitergeben, ohne sich um Überraschungen zu sorgen.",
        ],
      },
    ],
    relatedHeading: "Weitere kostenlose Tools von SimpleSketchpad",
    related: {
      "drawing-board": { label: "Online Zeichenbrett", blurb: "Ein Arbeitsbereich für Planung, Haftnotizen und visuelle Notizen." },
      whiteboard: { label: "Kostenloses Online-Whiteboard", blurb: "Eine unendliche Fläche für Unterricht, Besprechungen und Brainstorming." },
      "graph-paper": { label: "Online-Millimeterpapier", blurb: "Ein einstellbares Raster für Mathematik, Geometrie und technische Skizzen." },
      "kids-drawing": { label: "Online-Zeichnen für Kinder", blurb: "Große Buttons und lustige Stempel für kleine Künstler." },
    },
    faqHeading: "Häufig gestellte Fragen",
    faq: [
      {
        q: "Ist dieses Zeichenwerkzeug sicher für Kinder?",
        a: "Ja. Keine Käufe, keine Konten. Alles läuft im Browser, und Zeichnungen verlassen das Gerät nie, sodass es nichts gibt, was ein Kind versehentlich antippen könnte.",
      },
      {
        q: "Kann mein Kind auf einem Tablet oder Telefon zeichnen?",
        a: "Ja. Die Oberfläche verwendet große, touchfreundliche Buttons und funktioniert auf jedem Gerät mit Fingern, Stift oder Maus.",
      },
      {
        q: "Was sind die Stempel?",
        a: "Stempel sind lustige Bilder — Sterne, Herzen, Tiere und mehr —, die ein Kind antippt, um sie sofort auf der Fläche zu platzieren. Sie lassen das Zeichnen wie ein Spiel wirken.",
      },
      {
        q: "Können wir die Zeichnungen speichern oder drucken?",
        a: "Ja. Jede Zeichnung wird automatisch auf dem Gerät gespeichert und kann als PNG heruntergeladen werden, bereit zum Drucken, Teilen oder Aufhängen am Kühlschrank.",
      },
    ],
    closing: [
      "Der Zeichenbereich für Kinder von SimpleSketchpad hält Kreativität frustfrei. Wenn sie bereit für mehr Kontrolle sind, fügen das Online-Zeichenwerkzeug und das Online-Zeichenbrett Formen, Text und Notizen hinzu, in die sie hineinwachsen können.",
    ],
  },
};

const pt = {
  "drawing-board": {
    seoTitle: "Quadro de Desenho Online - Espaço Grátis para Planejar | SimpleSketchpad",
    seoDescription:
      "Um quadro de desenho online grátis para brainstorming, planejamento, notas visuais, diagramas e ensino. Tela ampla com caneta, formas, setas, notas adesivas e exportação para PNG ou SVG.",
    h1: "Quadro de Desenho Online",
    intro: [
      "Um quadro de desenho online é um espaço compartilhado para pensar em voz alta. Enquanto uma ferramenta de desenho busca fazer arte, um quadro busca tirar as ideias rapidamente — mapear um processo, esboçar um layout, fazer notas visuais ou conduzir uma turma passo a passo por um conceito.",
      "Esta página te dá esse quadro: um espaço de trabalho amplo e limpo com caneta, linhas, formas e setas para estruturar, texto para rotular e notas adesivas para as ideias que você quer fixar. Tudo fica privado no seu dispositivo e é exportado como PNG ou SVG quando você quiser.",
    ],
    sections: [
      {
        heading: "Como um quadro de desenho difere de uma ferramenta de desenho",
        paragraphs: [
          "Uma ferramenta de desenho ou arte normal é feita para detalhes: curvas de pressão, texturas de pincel, camadas. Um quadro de desenho inverte deliberadamente o foco. Ele é construído para velocidade e clareza — coloque um retângulo para emoldurar uma seção, desenhe uma seta mostrando como as ideias se conectam, fixe uma nota adesiva em vez de escrever um parágrafo. Se você planeja, explica ou ensina, este é o caminho mais rápido.",
        ],
      },
      {
        heading: "Brainstorming, planejamento e notas visuais",
        paragraphs: [
          "Use o quadro para dividir um projeto em etapas, comparar opções lado a lado, capturar notas de reunião em formato visual ou desenhar um layout aproximado antes de abrir algo mais pesado. As notas adesivas permitem tratar ideias como cartões móveis, então agrupar e reorganizar é tão natural quanto em uma parede real.",
        ],
        list: [
          "Dividir grandes ideias em menores e conectadas",
          "Esboçar layouts de página, fluxos e processos",
          "Fazer notas visuais em reuniões e aulas",
          "Planejar lições, workshops e apresentações",
          "Rascunhar diagramas antes de formalizá-los",
        ],
      },
      {
        heading: "Feito para ensinar e apresentar",
        paragraphs: [
          "Como o quadro roda no navegador, ele está pronto para uso com um projetor, em uma chamada de vídeo com compartilhamento de tela ou em um tablet mostrado para a turma. Desenhe, anote e reorganize ao vivo, e exporte o quadro final para que alunos ou colegas possam ler no seu próprio ritmo.",
        ],
      },
    ],
    relatedHeading: "Mais ferramentas grátis do SimpleSketchpad",
    related: {
      "drawing-board": { label: "Quadro de Desenho Online", blurb: "Um espaço de trabalho para planejar, notas adesivas e notas visuais." },
      whiteboard: { label: "Quadro Branco Online Grátis", blurb: "Uma tela infinita para ensino, reuniões e brainstorms." },
      "graph-paper": { label: "Papel Quadriculado Online", blurb: "Uma grade ajustável para matemática, geometria e esboços técnicos." },
      "kids-drawing": { label: "Desenho Online para Crianças", blurb: "Botões grandes e carimbos divertidos para pequenos artistas." },
    },
    faqHeading: "Perguntas Frequentes",
    faq: [
      {
        q: "O que é um quadro de desenho online?",
        a: "É um espaço branco no navegador para esboçar ideias, diagramas e planos. Diferente de uma ferramenta de desenho focada na obra final, ele prioriza velocidade, estrutura e clareza — ideal para brainstorming, planejamento e ensino.",
      },
      {
        q: "Posso adicionar notas adesivas ao quadro?",
        a: "Sim. Escolha a ferramenta de nota adesiva, arraste para desenhar uma nota e escreva direto dentro dela. As notas se comportam como cartões móveis, então você pode agrupar e reorganizar ideias tão facilmente quanto em uma parede real.",
      },
      {
        q: "Posso exportar o quadro finalizado?",
        a: "Sim. Exporte como PNG de alta resolução para compartilhar ou imprimir, ou como SVG se quiser continuar editando depois em um software gráfico.",
      },
      {
        q: "O quadro de desenho é grátis?",
        a: "Sim, e não há nada para instalar nem conta para criar. Tudo roda no seu navegador e seu trabalho nunca é enviado para lugar nenhum.",
      },
    ],
    closing: [
      "Este quadro de desenho é a fase de pensar do SimpleSketchpad. Quando estiver pronto para passar de ideias aproximadas para algo mais visual, a ferramenta de desenho online adiciona lápis, pincel e mais controle para ilustrações finalizadas.",
    ],
  },
  whiteboard: {
    seoTitle: "Quadro Branco Online Grátis - Para Brainstorming | SimpleSketchpad",
    seoDescription:
      "Um quadro branco online grátis para reuniões, ensino, estudo e brainstorming. Tela infinita, caneta, marca-texto, formas, setas, notas adesivas e exportação para PNG ou SVG.",
    h1: "Quadro Branco Online Grátis",
    intro: [
      "Este quadro branco online gratuito dá a você uma tela ilimitada para os momentos em que as ideias precisam de espaço para se mover. Esboce um fluxo, sublinhe o ponto-chave, coloque uma nota adesiva e afaste-se para ver o quadro geral — nada te limita às bordas de uma página.",
      "Funciona como um quadro branco real, mas melhor: você pode rolar e dar zoom livremente, destacar sobre diagramas com um marcador suave, reorganizar notas e exportar tudo como PNG ou SVG. Sem contas, sem custos e tudo fica no seu dispositivo.",
    ],
    sections: [
      {
        heading: "Uma tela infinita para trabalho real",
        paragraphs: [
          "A tela cresce com o seu pensamento. Aproxime-se para escrever notas pequenas e depois afaste-se para organizá-las como um mapa da conversa. Rolagem com barra de espaço, zoom com a roda e zoom de pinça com dois dedos mantêm a experiência rápida em qualquer dispositivo — notebook, tablet ou celular.",
        ],
      },
      {
        heading: "Feito para brainstorming e explicações",
        paragraphs: [
          "Use uma caneta para escrita à mão, um marca-texto para chamar a atenção, setas para ligar causa e efeito e notas adesivas para coletar reações e tarefas. Ele é igualmente útil numa sessão de planejamento, de estudo ou numa aula onde desenhar a ideia é melhor do que descrevê-la.",
        ],
        list: [
          "Sessões de brainstorming e ideação",
          "Ensino e tutoria online",
          "Explicar ideias em reuniões",
          "Mapas de estudo e revisão",
          "Planejar projetos em uma única tela",
        ],
      },
      {
        heading: "Um quadro virtual que se comporta como papel",
        paragraphs: [
          "A escrita à mão continua natural porque os traços são salvos como vetores, não como pixels achatados. Isso significa exportações nítidas em qualquer nível de zoom e uma exportação SVG que edita como um arquivo de desenho real.",
        ],
      },
    ],
    relatedHeading: "Mais ferramentas grátis do SimpleSketchpad",
    related: {
      "drawing-board": { label: "Quadro de Desenho Online", blurb: "Um espaço de trabalho para planejar, notas adesivas e notas visuais." },
      whiteboard: { label: "Quadro Branco Online Grátis", blurb: "Uma tela infinita para ensino, reuniões e brainstorms." },
      "graph-paper": { label: "Papel Quadriculado Online", blurb: "Uma grade ajustável para matemática, geometria e esboços técnicos." },
      "kids-drawing": { label: "Desenho Online para Crianças", blurb: "Botões grandes e carimbos divertidos para pequenos artistas." },
    },
    faqHeading: "Perguntas Frequentes",
    faq: [
      {
        q: "Este quadro branco online é realmente grátis?",
        a: "Sim. Sem avaliação limitada, sem marca d'água, sem conta. O quadro branco roda inteiramente no seu navegador e exporta para PNG ou SVG quando você precisar.",
      },
      {
        q: "Posso usar um marca-texto no quadro branco?",
        a: "Sim, existe uma ferramenta de marca-texto dedicada, com traço suave e translúcido que enfatiza suas escritas e diagramas sem escondê-los.",
      },
      {
        q: "Posso colaborar ou compartilhar um quadro branco?",
        a: "O quadro é projetado para ser privado e salvo automaticamente no seu dispositivo. Para compartilhar, exporte como PNG ou SVG e compartilhe o arquivo — nenhum armazenamento de terceiros está envolvido.",
      },
      {
        q: "Um quadro branco online funciona em reuniões?",
        a: "Sim. Rolar e dar zoom mantêm um quadro grande utilizável num notebook, e o modo tela cheia o torna ideal para compartilhamento de tela em chamadas e aulas.",
      },
    ],
    closing: [
      "O quadro branco é onde a facilidade de uso encontra o planejamento sério. Se sua sessão precisa de estrutura e grades em vez de liberdade, experimente o papel quadriculado online; se precisa de formas alinhadas e notas adesivas, o quadro de desenho online é uma ótima opção.",
    ],
  },
  "graph-paper": {
    seoTitle: "Papel Quadriculado Online - Grade Ajustável para Desenhar | SimpleSketchpad",
    seoDescription:
      "Desenhe em papel quadriculado online com uma grade ajustável. Escolha grades quadradas, pontilhadas ou de linhas, mude o espaçamento, encaixe na grade e exporte para PNG ou SVG. Grátis, sem cadastro.",
    h1: "Papel Quadriculado Online",
    intro: [
      "Às vezes você precisa de papel pautado, não de uma página em branco. Este papel quadriculado online coloca uma grade ajustável no centro de uma ferramenta de desenho real — escolha grades quadradas, pontilhadas ou de linhas, mude o espaçamento, encaixe seus traços na grade e mantenha todas as medidas alinhadas.",
      "Ele é feito para o trabalho em que precisão importa: geometria, matemática, traçado de gráficos, esboços técnicos e diagramas com caixas e setas que precisam se encaixar. Tudo exporta para PNG ou SVG, então seu desenho quadriculado está pronto para imprimir ou compartilhar.",
    ],
    sections: [
      {
        heading: "A grade é o recurso",
        paragraphs: [
          "Escolha uma grade quadrada para traçados e geometria, uma pontilhada para guia mais sutil ou uma de linhas para gráficos e tabelas. Ajuste o tamanho das células à sua tarefa — espaçamento fino para traçados detalhados, células grandes para plantas e layouts — e ative o encaixe na grade para que linhas, formas e texto caiam exatamente onde você quer.",
        ],
        list: [
          "Estilos de grade: quadrada, pontilhada e linhas",
          "Espaçamento de grade ajustável",
          "Linhas principais e secundárias",
          "Encaixe do desenho na grade",
          "Lápis, linhas, setas, formas e texto",
          "Medidas e anotações",
          "Rolagem e zoom para traçados grandes",
          "Exportação para PNG e SVG",
        ],
      },
      {
        heading: "Para alunos, matemática e trabalho técnico",
        paragraphs: [
          "Alunos podem traçar funções numa grade precisa, aulas de geometria ganham bordas retas e ângulos limpos, e engenheiros e designers podem esboçar layouts técnicos onde o alinhamento é tudo. Use a ferramenta de texto para rotular eixos, anotar medidas e comentar cada passo.",
        ],
      },
      {
        heading: "Papel quadriculado, sem o papel",
        paragraphs: [
          "O papel quadriculado digital nunca acaba, não suja e não precisa de xerox. Mude a grade de um traçado pela metade, apague erros com limpeza e exporte uma versão nítida para uma folha de atividades, um relatório ou uma apresentação.",
        ],
      },
    ],
    relatedHeading: "Mais ferramentas grátis do SimpleSketchpad",
    related: {
      "drawing-board": { label: "Quadro de Desenho Online", blurb: "Um espaço de trabalho para planejar, notas adesivas e notas visuais." },
      whiteboard: { label: "Quadro Branco Online Grátis", blurb: "Uma tela infinita para ensino, reuniões e brainstorms." },
      "graph-paper": { label: "Papel Quadriculado Online", blurb: "Uma grade ajustável para matemática, geometria e esboços técnicos." },
      "kids-drawing": { label: "Desenho Online para Crianças", blurb: "Botões grandes e carimbos divertidos para pequenos artistas." },
    },
    faqHeading: "Perguntas Frequentes",
    faq: [
      {
        q: "O que é papel quadriculado online?",
        a: "É uma grade pautada na qual você desenha no navegador em vez de em papel impresso. Diferente de uma imagem estática, o tamanho e o estilo da grade são ajustáveis e seus traços se alinham a ela.",
      },
      {
        q: "Posso mudar o tamanho e o espaçamento da grade?",
        a: "Sim. Alterne entre grades quadradas, pontilhadas e de linhas e ajuste o espaçamento das células à sua tarefa. As linhas principais são desenhadas mais fortes a cada poucas células para manter você orientado.",
      },
      {
        q: "O desenho encaixa na grade?",
        a: "Sim, quando você ativa o encaixe na grade. Linhas, formas e texto se fixam nos pontos mais próximos da grade, o que mantém diagramas e traçados precisos.",
      },
      {
        q: "Posso exportar meu desenho quadriculado?",
        a: "Sim. Exporte um PNG de alta resolução para imprimir ou compartilhar, ou um SVG para editar em software vetorial. A própria grade aparece na exportação para que seu traçado seja lido com clareza.",
      },
    ],
    closing: [
      "Quando o papel em branco parece solto e a obra final parece pesada, o papel quadriculado é o meio-termo. Para quadros mais livres e focados em ideias, o quadro de desenho online e o quadro branco online grátis permitem esboçar sem nenhuma regra.",
    ],
  },
  "kids-drawing": {
    seoTitle: "Desenho Online para Crianças - Grátis, Seguro e Divertido | SimpleSketchpad",
    seoDescription:
      "Uma ferramenta de desenho online para crianças com botões grandes, cores vivas e carimbos divertidos. Segura e sem cadastro, funciona em tablets e celulares e salva desenhos em PNG.",
    h1: "Desenho Online para Crianças",
    intro: [
      "Esta ferramenta de desenho foi feita para mãos pequenas e grandes imaginações. Sem menus confusos e sem contas: só botões enormes, cores brilhantes, uma borracha generosa e uma caixa de carimbos cheia de estrelas, corações e animais para decorar qualquer desenho.",
      "Tudo funciona com um toque ou com o dedo, então uma criança pode começar a criar em segundos, num tablet, celular ou computador. Cada desenho é salvo no dispositivo e a obra finalizada é baixada como PNG para guardar ou imprimir.",
    ],
    sections: [
      {
        heading: "Feita para pequenos artistas",
        paragraphs: [
          "As ferramentas têm um tamanho impossível de passar despercebido: um grande botão de desenhar, uma grande borracha e nove amostras de cor grandes. Sem ferramenta de texto, sem ferramenta de formas, sem ajustes para tropeçar — só a alegria de marcar uma tela brilhante.",
        ],
      },
      {
        heading: "Os carimbos transformam cada desenho em um jogo",
        paragraphs: [
          "A caixa de carimbos transforma o desenho em brincadeira. Escolha uma estrela, um coração ou um animal amigável, toque na tela e ele aparece na hora no tamanho do dedo. Combine carimbos com linhas desenhadas para criar cenas, padrões e histórias.",
        ],
      },
      {
        heading: "Segura, privada e amigável para os pais",
        paragraphs: [
          "Sem compras no aplicativo, sem contas. Os desenhos ficam salvos apenas no navegador e nunca são enviados. Os pais podem entregar um tablet com tranquilidade, sem se preocupar com surpresas.",
        ],
      },
    ],
    relatedHeading: "Mais ferramentas grátis do SimpleSketchpad",
    related: {
      "drawing-board": { label: "Quadro de Desenho Online", blurb: "Um espaço de trabalho para planejar, notas adesivas e notas visuais." },
      whiteboard: { label: "Quadro Branco Online Grátis", blurb: "Uma tela infinita para ensino, reuniões e brainstorms." },
      "graph-paper": { label: "Papel Quadriculado Online", blurb: "Uma grade ajustável para matemática, geometria e esboços técnicos." },
      "kids-drawing": { label: "Desenho Online para Crianças", blurb: "Botões grandes e carimbos divertidos para pequenos artistas." },
    },
    faqHeading: "Perguntas Frequentes",
    faq: [
      {
        q: "Esta ferramenta de desenho é segura para crianças?",
        a: "Sim. Sem compras, sem contas. Tudo roda no navegador e os desenhos nunca saem do dispositivo, então não há nada que uma criança possa tocar por engano.",
      },
      {
        q: "Meu filho pode desenhar em um tablet ou celular?",
        a: "Sim. A interface usa botões grandes pensados para toque e funciona com os dedos, uma caneta ou um mouse em qualquer dispositivo.",
      },
      {
        q: "O que são os carimbos?",
        a: "São imagens divertidas — estrelas, corações, animais e mais — que a criança toca para deixar aparecer na tela na hora. Eles fazem com que desenhar pareça um jogo.",
      },
      {
        q: "Podemos salvar ou imprimir os desenhos?",
        a: "Sim. Cada desenho é salvo automaticamente no dispositivo e pode ser baixado como PNG, pronto para imprimir, compartilhar ou pendurar na geladeira.",
      },
    ],
    closing: [
      "O espaço de desenho para crianças do SimpleSketchpad mantém a criatividade sem frustrações. Quando estiverem prontos para mais controle, a ferramenta de desenho online e o quadro de desenho online adicionam formas, texto e notas para crescerem.",
    ],
  },
};

const ko = {
  "drawing-board": {
    seoTitle: "온라인 드로잉 보드 - 기획·브레인스토밍용 무료 공간 | SimpleSketchpad",
    seoDescription:
      "브레인스토밍, 기획, 비주얼 노트, 다이어그램, 수업을 위한 무료 온라인 드로잉 보드. 펜, 도형, 화살표, 포스트잇을 갖춘 넓은 캔버스. PNG·SVG 내보내기 지원.",
    h1: "온라인 드로잉 보드",
    intro: [
      "온라인 드로잉 보드는 생각을 소리 내어 정리하는 공유 공간입니다. 드로잉 도구가 작품을 만드는 데 집중한다면, 드로잉 보드는 아이디어를 빠르게 꺼내는 데 집중합니다. 프로세스 매핑, 레이아웃 스케치, 비주얼 노트, 수업에서 개념을 단계별로 설명하는 데 적합합니다.",
      "이 페이지는 바로 그 보드를 제공합니다. 펜, 선, 도형, 화살표로 구조를 만들고, 텍스트로 라벨을 붙이고, 고정하고 싶은 아이디어에는 포스트잇을 사용하는 넓고 깨끗한 작업 공간. 모든 것이 기기에 개인적으로 보관되며 원할 때 PNG나 SVG로 내보낼 수 있습니다.",
    ],
    sections: [
      {
        heading: "드로잉 보드와 드로잉 도구의 차이",
        paragraphs: [
          "일반적인 드로잉·아트 도구는 디테일에 특화되어 있습니다. 압력 커브, 브러시 질감, 레이어처럼요. 드로잉 보드는 의도적으로 초점을 바꿉니다. 속도와 명확성을 위해 만들어진 것이죠. 섹션을 감싸는 사각형을 놓고, 아이디어가 어떻게 연결되는지 보여주는 화살표를 그리고, 문장을 쓰는 대신 포스트잇을 붙이는 방식입니다. 기획, 설명, 수업을 한다면 이것이 더 빠른 방법입니다.",
        ],
      },
      {
        heading: "브레인스토밍, 기획, 비주얼 노트",
        paragraphs: [
          "보드를 사용해 프로젝트를 단계로 나누고, 옵션을 나란히 비교하고, 회의 메모를 시각적으로 기록하고, 무거운 도구를 열기 전에 대략적인 레이아웃을 설계하세요. 포스트잇은 아이디어를 움직일 수 있는 카드처럼 다룰 수 있게 해 주어, 묶고 다시 배열하는 것이 실제 벽처럼 자연스럽습니다.",
        ],
        list: [
          "큰 아이디어를 작고 연결된 아이디어로 분해",
          "페이지 레이아웃, 흐름, 워크플로 스케치",
          "회의와 수업에서 비주얼 노트 작성",
          "수업, 워크숍, 발표 기획",
          "공식화하기 전 다이어그램 초안",
        ],
      },
      {
        heading: "수업과 발표를 위해",
        paragraphs: [
          "보드는 브라우저에서 작동하므로 프로젝터, 화면 공유가 있는 화상 통화, 또는 학급 앞에 든 태블릿에서 바로 사용할 수 있습니다. 라이브로 그리고, 주석을 달고, 재배치한 다음 완성된 보드를 내보내면 학생이나 팀원이 자신의 속도로 읽을 수 있습니다.",
        ],
      },
    ],
    relatedHeading: "SimpleSketchpad의 다른 무료 도구",
    related: {
      "drawing-board": { label: "온라인 드로잉 보드", blurb: "기획, 포스트잇, 비주얼 노트를 위한 작업 공간." },
      whiteboard: { label: "무료 온라인 화이트보드", blurb: "수업, 회의, 브레인스토밍을 위한 무한 캔버스." },
      "graph-paper": { label: "온라인 모눈종이", blurb: "수학, 기하, 기술 스케치를 위한 조절 가능한 그리드." },
      "kids-drawing": { label: "어린이용 온라인 그리기", blurb: "어린 화가를 위한 큰 버튼과 재미있는 스탬프." },
    },
    faqHeading: "자주 묻는 질문",
    faq: [
      {
        q: "온라인 드로잉 보드란 무엇인가요?",
        a: "아이디어, 다이어그램, 계획을 스케치하기 위한 브라우저 속 하얀 공간입니다. 완성된 작품에 초점을 맞춘 드로잉 도구와 달리 속도, 구조, 명확성을 강조합니다. 브레인스토밍, 기획, 수업에 이상적입니다.",
      },
      {
        q: "보드에 포스트잇을 추가할 수 있나요?",
        a: "네. 포스트잇 도구를 선택하고 드래그해서 노트를 그린 다음 바로 입력하면 됩니다. 노트는 이동 가능한 카드처럼 동작해서 실제 벽처럼 쉽게 아이디어를 묶고 다시 배열할 수 있습니다.",
      },
      {
        q: "완성된 보드를 내보낼 수 있나요?",
        a: "네. 공유하거나 인쇄할 수 있는 고해상도 PNG, 또는 나중에 그래픽 소프트웨어에서 편집하고 싶다면 SVG로 내보낼 수 있습니다.",
      },
      {
        q: "드로잉 보드는 무료인가요?",
        a: "네, 설치할 것도 계정을 만들 것도 없습니다. 모든 것이 브라우저에서 실행되며 작업이 어디에도 업로드되지 않습니다.",
      },
    ],
    closing: [
      "이 드로잉 보드는 SimpleSketchpad의 '생각하기' 단계입니다. 대략적인 아이디어에서 더 시각적인 것으로 나아갈 준비가 되면, 온라인 드로잉 도구가 연필, 브러시, 완성된 일러스트를 위한 정밀한 컨트롤을 제공합니다.",
    ],
  },
  whiteboard: {
    seoTitle: "무료 온라인 화이트보드 - 브레인스토밍용 | SimpleSketchpad",
    seoDescription:
      "회의, 수업, 공부, 브레인스토밍을 위한 무료 온라인 화이트보드. 무한 캔버스, 펜, 형광펜, 도형, 화살표, 포스트잇. PNG·SVG 내보내기 지원.",
    h1: "무료 온라인 화이트보드",
    intro: [
      "이 무료 온라인 화이트보드는 아이디어가 움직일 공간이 필요한 순간을 위한 무한 캔버스입니다. 흐름을 스케치하고, 핵심에 밑줄을 긋고, 포스트잇을 붙이고, 줌아웃해서 전체 그림을 보세요. 페이지 가장자리에 갇히는 일이 없습니다.",
      "실제 화이트보드처럼 작동하지만 더 낫습니다. 자유롭게 이동하고 확대·축소할 수 있고, 부드러운 마커로 다이어그램 위를 강조하고, 노트를 다시 배열하고, 모든 것을 PNG나 SVG로 내보낼 수 있습니다. 계정도 비용도 없고 모든 것이 기기에 남습니다.",
    ],
    sections: [
      {
        heading: "진짜 작업을 위한 무한 캔버스",
        paragraphs: [
          "캔버스는 생각과 함께 커집니다. 작은 메모를 쓰려면 확대하고, 대화의 지도로 배열하려면 축소하세요. 스페이스바 이동, 휠 줌, 두 손가락 핀치 줌 덕분에 노트북, 태블릿, 휴대폰 어디서든 빠르게 사용할 수 있습니다.",
        ],
      },
      {
        heading: "브레인스토밍과 설명을 위해",
        paragraphs: [
          "손글씨에는 펜을, 주목을 끌 때는 형광펜을, 원인과 결과를 잇는 화살표를, 반응과 작업을 모으는 포스트잇을 사용하세요. 기획 세션, 공부 세션, 그리고 아이디어를 설명하는 것보다 그리는 게 나은 수업에서 모두 유용합니다.",
        ],
        list: [
          "브레인스토밍 및 아이데이션 세션",
          "수업과 온라인 과외",
          "회의에서 아이디어 설명",
          "공부와 복습 지도",
          "하나의 캔버스에서 프로젝트 기획",
        ],
      },
      {
        heading: "종이처럼 행동하는 가상 화이트보드",
        paragraphs: [
          "스트로크는 평평한 픽셀이 아니라 벡터로 저장되므로 손글씨가 자연스럽게 유지됩니다. 어떤 줌 수준에서도 깨끗하고 선명한 내보내기가 가능하고, SVG 내보내기는 실제 드로잉 파일처럼 편집할 수 있습니다.",
        ],
      },
    ],
    relatedHeading: "SimpleSketchpad의 다른 무료 도구",
    related: {
      "drawing-board": { label: "온라인 드로잉 보드", blurb: "기획, 포스트잇, 비주얼 노트를 위한 작업 공간." },
      whiteboard: { label: "무료 온라인 화이트보드", blurb: "수업, 회의, 브레인스토밍을 위한 무한 캔버스." },
      "graph-paper": { label: "온라인 모눈종이", blurb: "수학, 기하, 기술 스케치를 위한 조절 가능한 그리드." },
      "kids-drawing": { label: "어린이용 온라인 그리기", blurb: "어린 화가를 위한 큰 버튼과 재미있는 스탬프." },
    },
    faqHeading: "자주 묻는 질문",
    faq: [
      {
        q: "이 온라인 화이트보드는 정말 무료인가요?",
        a: "네. 평가판도, 워터마크도, 계정도 없습니다. 화이트보드는 완전히 브라우저에서 실행되며 필요할 때 언제든 PNG나 SVG로 내보낼 수 있습니다.",
      },
      {
        q: "화이트보드에서 형광펜을 사용할 수 있나요?",
        a: "네, 전용 형광펜 도구가 있습니다. 부드럽고 반투명한 스트로크로 글씨와 다이어그램을 숨기지 않고 강조합니다.",
      },
      {
        q: "화이트보드를 협업하거나 공유할 수 있나요?",
        a: "화이트보드는 기기에서 개인적으로 자동 저장되도록 설계되었습니다. 공유하려면 PNG나 SVG로 내보내 파일을 공유하세요. 제3자 저장소는 관여하지 않습니다.",
      },
      {
        q: "온라인 화이트보드는 회의에서 쓸 수 있나요?",
        a: "네. 이동과 확대·축소 덕분에 노트북에서도 큰 보드를 다룰 수 있고, 전체 화면 모드는 통화와 수업에서 화면 공유에 이상적입니다.",
      },
    ],
    closing: [
      "화이트보드는 단순한 사용성과 진지한 기획이 만나는 곳입니다. 자유보다 구조와 그리드가 필요하다면 온라인 모눈종이를, 정렬된 도형과 포스트잇이 필요하다면 온라인 드로잉 보드가 잘 맞습니다.",
    ],
  },
  "graph-paper": {
    seoTitle: "온라인 모눈종이 - 조절 가능한 그리드 종이 | SimpleSketchpad",
    seoDescription:
      "온라인 모눈종이에서 조절 가능한 그리드로 그리세요. 사각형, 점, 선 그리드를 선택하고 간격을 바꾸고 그리드에 스냅한 뒤 PNG·SVG로 내보낼 수 있습니다. 무료, 가입 불필요.",
    h1: "온라인 모눈종이",
    intro: [
      "때로는 빈 페이지가 아니라 줄이 있는 종이가 필요합니다. 이 온라인 모눈종이는 실제 드로잉 도구의 중심에 조절 가능한 그리드를 둡니다. 사각형, 점, 선 그리드를 선택하고, 간격을 바꾸고, 스트로크를 그리드에 스냅시키고, 모든 측정값을 정렬하세요.",
      "정밀함이 중요한 작업을 위해 만들어졌습니다. 기하, 수학, 그래프 그리기, 기술 스케치, 그리고 상자와 화살표가 깔끔하게 맞아야 하는 다이어그램에 적합합니다. 모든 것이 PNG나 SVG로 내보내지므로 모눈종이 그림은 인쇄하거나 공유할 준비가 됩니다.",
    ],
    sections: [
      {
        heading: "그리드가 바로 핵심 기능",
        paragraphs: [
          "그래프와 기하에는 사각형 그리드를, 더 은은한 가이드에는 점 그리드를, 그래프와 표에는 선 그리드를 선택하세요. 작업에 맞게 셀 크기를 조정하고(디테일한 그래프에는 촘촘한 간격, 평면도와 레이아웃에는 큰 셀) 스냅을 켜면 선, 도형, 텍스트가 의도한 위치에 정확히 놓입니다.",
        ],
        list: [
          "사각형·점·선 그리드 스타일",
          "조절 가능한 그리드 간격",
          "주요선과 보조선",
          "그리드에 그리기 스냅",
          "연필, 선, 화살표, 도형, 텍스트",
          "측정과 주석",
          "큰 그래프를 위한 이동과 확대·축소",
          "PNG·SVG 내보내기",
        ],
      },
      {
        heading: "학생, 수학, 기술 작업을 위해",
        paragraphs: [
          "학생은 정확한 그리드에서 함수를 그리고, 기하 수업은 곧은 변과 깔끔한 각도를 얻고, 엔지니어와 디자이너는 정렬이 전부인 기술 레이아웃을 스케치할 수 있습니다. 텍스트 도구로 축에 라벨을 붙이고, 측정값을 기록하고, 각 단계에 주석을 다세요.",
        ],
      },
      {
        heading: "종이 없는 모눈종이",
        paragraphs: [
          "디지털 모눈종이는 다 떨어지지 않고, 번지지 않고, 복사할 필요가 없습니다. 반쯤 그린 그래프의 그리드를 바꾸고, 실수를 깔끔하게 지우고, 학습지, 보고서, 발표용 선명한 버전으로 내보내세요.",
        ],
      },
    ],
    relatedHeading: "SimpleSketchpad의 다른 무료 도구",
    related: {
      "drawing-board": { label: "온라인 드로잉 보드", blurb: "기획, 포스트잇, 비주얼 노트를 위한 작업 공간." },
      whiteboard: { label: "무료 온라인 화이트보드", blurb: "수업, 회의, 브레인스토밍을 위한 무한 캔버스." },
      "graph-paper": { label: "온라인 모눈종이", blurb: "수학, 기하, 기술 스케치를 위한 조절 가능한 그리드." },
      "kids-drawing": { label: "어린이용 온라인 그리기", blurb: "어린 화가를 위한 큰 버튼과 재미있는 스탬프." },
    },
    faqHeading: "자주 묻는 질문",
    faq: [
      {
        q: "온라인 모눈종이란 무엇인가요?",
        a: "인쇄된 종이 대신 브라우저에서 그리는 줄 있는 그리드입니다. 정적 이미지와 달리 그리드 크기와 스타일을 조절할 수 있고 스트로크가 그리드에 맞춰집니다.",
      },
      {
        q: "그리드 크기와 간격을 바꿀 수 있나요?",
        a: "네. 사각형, 점, 선 그리드를 전환하고 셀 간격을 작업에 맞게 조정할 수 있습니다. 몇 셀마다 주요선이 더 강하게 그려져 방향을 잡는 데 도움이 됩니다.",
      },
      {
        q: "그리기 내용이 그리드에 스냅되나요?",
        a: "네, 스냅을 켜면 그렇습니다. 선, 도형, 텍스트가 가장 가까운 그리드 지점에 고정되어 다이어그램과 그래프를 정밀하게 유지합니다.",
      },
      {
        q: "모눈종이 그림을 내보낼 수 있나요?",
        a: "네. 인쇄하거나 공유할 고해상도 PNG, 또는 벡터 소프트웨어에서 편집할 SVG로 내보낼 수 있습니다. 그리드 자체도 내보내기에 포함되어 그래프가 선명하게 읽힙니다.",
      },
    ],
    closing: [
      "빈 종이가 너무 느슨하고 완성작이 너무 무겁게 느껴질 때, 모눈종이가 중간 지점입니다. 더 자유롭고 아이디어 중심적인 보드가 필요하다면 온라인 드로잉 보드와 무료 온라인 화이트보드가 규칙 없이 스케치할 수 있게 해 줍니다.",
    ],
  },
  "kids-drawing": {
    seoTitle: "어린이용 온라인 그리기 - 무료·안전·재미 | SimpleSketchpad",
    seoDescription:
      "큰 버튼, 밝은 색, 재미있는 스탬프가 있는 어린이용 무료 온라인 그리기 도구. 안전하고 가입 없음. 태블릿과 휴대폰에서 작동하며 PNG로 저장할 수 있습니다.",
    h1: "어린이용 온라인 그리기",
    intro: [
      "이 그리기 도구는 작은 손과 큰 상상력을 위해 만들어졌습니다. 헷갈리는 메뉴도, 계정도 없습니다. 큰 버튼, 밝은 색, 너그러운 지우개, 그리고 어떤 그림이든 꾸밀 수 있는 별·하트·동물로 가득한 스탬프 상자만 있습니다.",
      "모든 것이 탭이나 손가락으로 작동하므로 아이는 태블릿, 휴대폰, 컴퓨터 어디에서든 몇 초 만에 만들기 시작할 수 있습니다. 각 그림은 기기에 저장되고 완성된 작품은 PNG로 다운로드해 보관하거나 인쇄할 수 있습니다.",
    ],
    sections: [
      {
        heading: "어린 화가를 위해",
        paragraphs: [
          "도구는 지나칠 수 없을 만큼 크게 만들어졌습니다. 큰 그리기 버튼, 큰 지우개, 9개의 큰 색상 팔레트. 텍스트 도구도, 도형 도구도, 걸려 넘어질 설정도 없습니다. 밝은 캔버스를 칠하는 즐거움만 있습니다.",
        ],
      },
      {
        heading: "스탬프가 모든 그림을 게임으로 만들다",
        paragraphs: [
          "스탬프 상자는 그리기를 놀이로 바꿉니다. 별, 하트, 귀여운 동물을 선택해 캔버스를 탭하면 손가락 크기로 즉시 나타납니다. 스탬프와 그린 선을 겹쳐서 장면, 패턴, 이야기를 만들어 보세요.",
        ],
      },
      {
        heading: "안전하고 사적이며 부모님에게 친절한",
        paragraphs: [
          "인앱 구매도, 계정도 없습니다. 그림은 브라우저에만 저장되고 절대 업로드되지 않습니다. 부모는 걱정 없이 태블릿을 안심하고 건네줄 수 있습니다.",
        ],
      },
    ],
    relatedHeading: "SimpleSketchpad의 다른 무료 도구",
    related: {
      "drawing-board": { label: "온라인 드로잉 보드", blurb: "기획, 포스트잇, 비주얼 노트를 위한 작업 공간." },
      whiteboard: { label: "무료 온라인 화이트보드", blurb: "수업, 회의, 브레인스토밍을 위한 무한 캔버스." },
      "graph-paper": { label: "온라인 모눈종이", blurb: "수학, 기하, 기술 스케치를 위한 조절 가능한 그리드." },
      "kids-drawing": { label: "어린이용 온라인 그리기", blurb: "어린 화가를 위한 큰 버튼과 재미있는 스탬프." },
    },
    faqHeading: "자주 묻는 질문",
    faq: [
      {
        q: "이 그리기 도구는 아이에게 안전한가요?",
        a: "네. 구매도, 계정도 없습니다. 모든 것이 브라우저에서 실행되고 그림이 기기 밖으로 나가지 않으므로 아이가 잘못 터치할 것이 없습니다.",
      },
      {
        q: "아이가 태블릿이나 휴대폰에서 그릴 수 있나요?",
        a: "네. 큰 터치 친화적 버튼의 인터페이스로 어떤 기기에서든 손가락, 스타일러스, 마우스로 사용할 수 있습니다.",
      },
      {
        q: "스탬프란 무엇인가요?",
        a: "별, 하트, 동물 같은 재미있는 그림으로, 캔버스를 탭하기만 하면 즉시 나타납니다. 그리기가 게임처럼 느껴지게 만듭니다.",
      },
      {
        q: "그림을 저장하거나 인쇄할 수 있나요?",
        a: "네. 각 그림은 기기에 자동 저장되고 PNG로 다운로드하여 인쇄, 공유, 냉장고에 붙일 수 있습니다.",
      },
    ],
    closing: [
      "SimpleSketchpad의 어린이 그리기 공간은 창의력을 스트레스 없이 유지합니다. 더 많은 컨트롤을 배울 준비가 되면 온라인 드로잉 도구와 온라인 드로잉 보드가 도형, 텍스트, 포스트잇을 추가해 줍니다.",
    ],
  },
};

const it = {
  "drawing-board": {
    seoTitle: "Tavoletta di Disegno Online - Spazio Gratuito per Pianificare | SimpleSketchpad",
    seoDescription:
      "Una tavoletta di disegno online gratuita per brainstorming, pianificazione, note visive, diagrammi e insegnamento. Ampia tela con penna, forme, frecce, note adesive ed esportazione in PNG o SVG.",
    h1: "Tavoletta di Disegno Online",
    intro: [
      "Una tavoletta di disegno online è uno spazio condiviso per pensare ad alta voce. Mentre uno strumento di disegno serve a fare arte, una tavoletta serve a tirar fuori le idee in fretta: mappare un processo, schizzare un layout, prendere note visive o guidare una classe attraverso un concetto passo dopo passo.",
      "Questa pagina ti dà proprio quella tavoletta: un ampio spazio di lavoro pulito con penna, linee, forme e frecce per strutturare, testo per etichettare e note adesive per le idee che vuoi fissare. Tutto resta privato sul tuo dispositivo ed esportabile in PNG o SVG quando vuoi.",
    ],
    sections: [
      {
        heading: "Come una tavoletta di disegno differisce da uno strumento di disegno",
        paragraphs: [
          "Uno strumento di disegno o arte normale è orientato al dettaglio: curve di pressione, texture dei pennelli, livelli. Una tavoletta di disegno inverte deliberatamente l'attenzione. È costruita per velocità e chiarezza: posiziona un rettangolo per inquadrare una sezione, disegna una freccia per mostrare come le idee si collegano, fissa una nota adesiva invece di scrivere un paragrafo. Se pianifichi, spieghi o insegni, questo è il modo più veloce di lavorare.",
        ],
      },
      {
        heading: "Brainstorming, pianificazione e note visive",
        paragraphs: [
          "Usa la tavoletta per scomporre un progetto in passi, confrontare opzioni fianco a fianco, catturare note di riunione in formato visivo o progettare un layout approssimativo prima di aprire qualcosa di più pesante. Le note adesive ti permettono di trattare le idee come carte mobili, quindi raggruppare e riorganizzare è naturale come su un vero muro.",
        ],
        list: [
          "Scomporre grandi idee in piccole e collegate",
          "Schizzare layout di pagina, flussi e flussi di lavoro",
          "Prendere note visive in riunioni e lezioni",
          "Pianificare lezioni, workshop e presentazioni",
          "Abbozzare diagrammi prima di formalizzarli",
        ],
      },
      {
        heading: "Fatta per insegnare e presentare",
        paragraphs: [
          "Poiché la tavoletta funziona nel browser, è pronta all'uso con un proiettore, in una videochiamata con condivisione schermo o su un tablet mostrato alla classe. Disegna, annota e riorganizza dal vivo, poi esporta la tavoletta finita così studenti o colleghi possono leggerla al proprio ritmo.",
        ],
      },
    ],
    relatedHeading: "Altri strumenti gratis di SimpleSketchpad",
    related: {
      "drawing-board": { label: "Tavoletta di Disegno Online", blurb: "Uno spazio di lavoro per pianificare, note adesive e note visive." },
      whiteboard: { label: "Lavagna Online Gratuita", blurb: "Una tela infinita per insegnare, riunioni e brainstorming." },
      "graph-paper": { label: "Carta a Quadretti Online", blurb: "Una griglia regolabile per matematica, geometria e schizzi tecnici." },
      "kids-drawing": { label: "Disegno Online per Bambini", blurb: "Grandi pulsanti e timbri divertenti per piccoli artisti." },
    },
    faqHeading: "Domande Frequenti",
    faq: [
      {
        q: "Cos'è una tavoletta di disegno online?",
        a: "È uno spazio bianco nel browser per abbozzare idee, diagrammi e piani. A differenza di uno strumento di disegno incentrato sull'opera finita, enfatizza velocità, struttura e chiarezza — ideale per brainstorming, pianificazione e insegnamento.",
      },
      {
        q: "Posso aggiungere note adesive alla tavoletta?",
        a: "Sì. Scegli lo strumento nota adesiva, trascina per disegnare una nota e scrivi direttamente dentro. Le note si comportano come carte mobili, quindi puoi raggruppare e riorganizzare le idee facilmente come su un vero muro.",
      },
      {
        q: "Posso esportare la tavoletta finita?",
        a: "Sì. Esporta la tavoletta come PNG ad alta risoluzione per condividere o stampare, oppure come SVG se vuoi continuare a modificarla in un software grafico.",
      },
      {
        q: "La tavoletta di disegno è gratis?",
        a: "Sì, e non c'è nulla da installare né un account da creare. Tutto funziona nel tuo browser e il tuo lavoro non viene mai caricato da nessuna parte.",
      },
    ],
    closing: [
      "Questa tavoletta di disegno è la fase di pensiero di SimpleSketchpad. Quando sei pronto a passare dalle idee approssimative a qualcosa di più visivo, lo strumento di disegno online aggiunge matita, pennello e controllo fine per illustrazioni finite.",
    ],
  },
  whiteboard: {
    seoTitle: "Lavagna Online Gratuita - Per Brainstorming | SimpleSketchpad",
    seoDescription:
      "Una lavagna online gratuita per riunioni, insegnamento, studio e brainstorming. Tela infinita, penna, evidenziatore, forme, frecce, note adesive ed esportazione in PNG o SVG.",
    h1: "Lavagna Online Gratuita",
    intro: [
      "Questa lavagna online gratuita ti dà una tela illimitata per i momenti in cui le idee hanno bisogno di spazio per muoversi. Abbozza un flusso, sottolinea il punto chiave, appoggia una nota adesiva e allontanati per vedere il quadro completo — nulla ti vincola ai bordi di una pagina.",
      "Funziona come una vera lavagna, ma meglio: puoi scorrere e fare zoom liberamente, evidenziare sopra i diagrammi con un pennarello morbido, riorganizzare le note ed esportare tutto in PNG o SVG. Nessun account, nessun costo e tutto resta sul tuo dispositivo.",
    ],
    sections: [
      {
        heading: "Una tela infinita per un vero lavoro",
        paragraphs: [
          "La tela cresce con il tuo pensiero. Avvicinati per scrivere piccole note, poi allontanati per organizzarle come mappa della conversazione. Lo scorrimento con la barra spaziatrice, lo zoom con la rotella e il pinch a due dita mantengono l'esperienza rapida su qualsiasi dispositivo — laptop, tablet o telefono.",
        ],
      },
      {
        heading: "Fatta per brainstorming e spiegazioni",
        paragraphs: [
          "Usa una penna per la scrittura a mano, un evidenziatore per attirare l'attenzione, frecce per collegare causa ed effetto e note adesive per raccogliere reazioni e compiti. È ugualmente a casa in una sessione di pianificazione, di studio o in una lezione dove disegnare l'idea batte descriverla.",
        ],
        list: [
          "Sessioni di brainstorming e ideazione",
          "Insegnamento e tutoraggio online",
          "Spiegare idee in riunioni",
          "Mappe di studio e ripasso",
          "Pianificare progetti su un'unica tela",
        ],
      },
      {
        heading: "Una lavagna virtuale che si comporta come carta",
        paragraphs: [
          "La scrittura a mano resta naturale perché i tratti sono salvati come vettori, non come pixel appiattiti. Ciò significa esportazioni nitide a qualsiasi livello di zoom e un'esportazione SVG modificabile come un vero file di disegno.",
        ],
      },
    ],
    relatedHeading: "Altri strumenti gratis di SimpleSketchpad",
    related: {
      "drawing-board": { label: "Tavoletta di Disegno Online", blurb: "Uno spazio di lavoro per pianificare, note adesive e note visive." },
      whiteboard: { label: "Lavagna Online Gratuita", blurb: "Una tela infinita per insegnare, riunioni e brainstorming." },
      "graph-paper": { label: "Carta a Quadretti Online", blurb: "Una griglia regolabile per matematica, geometria e schizzi tecnici." },
      "kids-drawing": { label: "Disegno Online per Bambini", blurb: "Grandi pulsanti e timbri divertenti per piccoli artisti." },
    },
    faqHeading: "Domande Frequenti",
    faq: [
      {
        q: "Questa lavagna online è davvero gratis?",
        a: "Sì. Nessuna prova limitata, nessuna filigrana, nessun account. La lavagna funziona interamente nel tuo browser ed esporta in PNG o SVG quando ti serve.",
      },
      {
        q: "Posso usare un evidenziatore sulla lavagna?",
        a: "Sì, c'è uno strumento evidenziatore dedicato con un tratto morbido e traslucido che enfatizza la tua scrittura e i diagrammi senza nasconderli.",
      },
      {
        q: "Posso collaborare o condividere una lavagna?",
        a: "La lavagna è progettata per essere privata e salvata automaticamente sul tuo dispositivo. Per condividere, esporta in PNG o SVG e condividi il file: nessun archivio di terze parti è coinvolto.",
      },
      {
        q: "Una lavagna online funziona in riunione?",
        a: "Sì. Scorrimento e zoom mantengono utilizzabile una grande lavagna su un laptop, e la modalità a schermo intero la rende ideale per la condivisione dello schermo in chiamate e lezioni.",
      },
    ],
    closing: [
      "La lavagna è dove la semplicità d'uso incontra la pianificazione seria. Se la tua sessione ha bisogno di struttura e griglie anziché libertà, prova la carta a quadretti online; se ha bisogno di forme allineate e note adesive, la tavoletta di disegno online è perfetta.",
    ],
  },
  "graph-paper": {
    seoTitle: "Carta a Quadretti Online - Griglia Regolabile per Disegnare | SimpleSketchpad",
    seoDescription:
      "Disegna su carta a quadretti online con una griglia regolabile. Scegli griglie quadrate, puntinate o a linee, cambia la spaziatura, aggancia alla griglia ed esporta in PNG o SVG. Gratis, senza registrazione.",
    h1: "Carta a Quadretti Online",
    intro: [
      "A volte serve carta rigata, non una pagina bianca. Questa carta a quadretti online mette una griglia regolabile al centro di un vero strumento di disegno — scegli griglie quadrate, puntinate o a linee, cambia la spaziatura, aggancia i tuoi tratti alla griglia e mantieni ogni misura allineata.",
      "È costruita per il lavoro dove la precisione conta: geometria, matematica, tracciamento di grafici, schizzi tecnici e diagrammi con scatole e frecce che devono combaciare. Tutto esporta in PNG o SVG, così il tuo disegno su carta quadrettata è pronto per la stampa o la condivisione.",
    ],
    sections: [
      {
        heading: "La griglia è la funzionalità",
        paragraphs: [
          "Scegli una griglia quadrata per tracciamento e geometria, una puntinata per una guida più sottile o una a linee per grafici e tabelle. Regola la dimensione delle celle in base al compito — spaziatura fine per grafici dettagliati, celle grandi per piante e layout — e attiva l'aggancio alla griglia così linee, forme e testo atterrano esattamente dove intendi.",
        ],
        list: [
          "Stili griglia: quadrata, puntinata e a linee",
          "Spaziatura della griglia regolabile",
          "Linee principali e secondarie",
          "Aggancio del disegno alla griglia",
          "Matita, linee, frecce, forme e testo",
          "Misurazioni e annotazioni",
          "Scorrimento e zoom per grandi grafici",
          "Esportazione in PNG e SVG",
        ],
      },
      {
        heading: "Per studenti, matematica e lavoro tecnico",
        paragraphs: [
          "Gli studenti possono tracciare funzioni su una griglia precisa, le classi di geometria ottengono bordi dritti e angoli puliti, e ingegneri e designer possono abbozzare layout tecnici dove l'allineamento è tutto. Usa lo strumento testo per etichettare gli assi, annotare le misure e commentare ogni passo.",
        ],
      },
      {
        heading: "Carta a quadretti, senza la carta",
        paragraphs: [
          "La carta a quadretti digitale non finisce mai, non si sporca e non richiede fotocopie. Cambia la griglia di un grafico a metà, cancella gli errori con pulizia ed esporta una versione nitida per un foglio di lavoro, un rapporto o una presentazione.",
        ],
      },
    ],
    relatedHeading: "Altri strumenti gratis di SimpleSketchpad",
    related: {
      "drawing-board": { label: "Tavoletta di Disegno Online", blurb: "Uno spazio di lavoro per pianificare, note adesive e note visive." },
      whiteboard: { label: "Lavagna Online Gratuita", blurb: "Una tela infinita per insegnare, riunioni e brainstorming." },
      "graph-paper": { label: "Carta a Quadretti Online", blurb: "Una griglia regolabile per matematica, geometria e schizzi tecnici." },
      "kids-drawing": { label: "Disegno Online per Bambini", blurb: "Grandi pulsanti e timbri divertenti per piccoli artisti." },
    },
    faqHeading: "Domande Frequenti",
    faq: [
      {
        q: "Cos'è la carta a quadretti online?",
        a: "È una griglia rigata su cui disegni nel browser invece che su carta stampata. A differenza di un'immagine statica, dimensione e stile della griglia sono regolabili e i tuoi tratti vi si allineano.",
      },
      {
        q: "Posso cambiare dimensione e spaziatura della griglia?",
        a: "Sì. Passa dalle griglie quadrate a quelle puntinate o a linee e regola la spaziatura delle celle in base al compito. Le linee principali sono disegnate più forti ogni poche celle per orientarti.",
      },
      {
        q: "Il disegno si aggancia alla griglia?",
        a: "Sì, quando attivi l'aggancio alla griglia. Linee, forme e testo si fissano ai punti più vicini, mantenendo precisi diagrammi e grafici.",
      },
      {
        q: "Posso esportare il mio disegno su carta quadrettata?",
        a: "Sì. Esporta un PNG ad alta risoluzione per stampare o condividere, o un SVG per modificare in software vettoriale. La griglia stessa appare nell'esportazione così il tuo grafico si legge chiaramente.",
      },
    ],
    closing: [
      "Quando la carta bianca è troppo libera e l'opera finita troppo pesante, la carta a quadretti è la via di mezzo. Per lavagne più libere e orientate alle idee, la tavoletta di disegno online e la lavagna online gratuita ti lasciano abbozzare senza alcuna regola.",
    ],
  },
  "kids-drawing": {
    seoTitle: "Disegno Online per Bambini - Gratis, Sicuro e Divertente | SimpleSketchpad",
    seoDescription:
      "Uno strumento di disegno online per bambini con grandi pulsanti, colori vivaci e timbri divertenti. Sicuro e senza registrazione, funziona su tablet e telefoni e salva i disegni in PNG.",
    h1: "Disegno Online per Bambini",
    intro: [
      "Questo strumento di disegno è stato costruito per mani piccole e grandi immaginazioni. Niente menu confusi, niente account — solo pulsanti enormi, colori vivaci, una gomma indulgente e una scatola di timbri piena di stelle, cuori e animali per decorare qualsiasi disegno.",
      "Tutto funziona con un tocco o con un dito, così un bambino può iniziare a creare in pochi secondi, su un tablet, un telefono o un computer. Ogni disegno viene salvato sul dispositivo e l'opera finita si scarica come PNG da conservare o stampare.",
    ],
    sections: [
      {
        heading: "Fatto per piccoli artisti",
        paragraphs: [
          "Gli strumenti sono dimensionati per essere impossibili da non notare: un grande pulsante di disegno, una grande gomma e nove grandi campioni di colore. Nessuno strumento di testo, nessuno strumento di forme, nessuna impostazione su cui inciampare — solo la gioia di segnare una tela luminosa.",
        ],
      },
      {
        heading: "I timbri trasformano ogni disegno in un gioco",
        paragraphs: [
          "La scatola dei timbri trasforma il disegno in gioco. Scegli una stella, un cuore o un simpatico animale, tocca la tela e appare subito a grandezza di dito. Sovrapponi i timbri alle linee disegnate per creare scene, motivi e storie.",
        ],
      },
      {
        heading: "Sicuro, privato e amico dei genitori",
        paragraphs: [
          "Niente acquisti in-app, niente account. I disegni sono salvati solo nel browser e non vengono mai caricati. I genitori possono affidare un tablet con serenità, senza preoccuparsi di sorprese.",
        ],
      },
    ],
    relatedHeading: "Altri strumenti gratis di SimpleSketchpad",
    related: {
      "drawing-board": { label: "Tavoletta di Disegno Online", blurb: "Uno spazio di lavoro per pianificare, note adesive e note visive." },
      whiteboard: { label: "Lavagna Online Gratuita", blurb: "Una tela infinita per insegnare, riunioni e brainstorming." },
      "graph-paper": { label: "Carta a Quadretti Online", blurb: "Una griglia regolabile per matematica, geometria e schizzi tecnici." },
      "kids-drawing": { label: "Disegno Online per Bambini", blurb: "Grandi pulsanti e timbri divertenti per piccoli artisti." },
    },
    faqHeading: "Domande Frequenti",
    faq: [
      {
        q: "Questo strumento di disegno è sicuro per i bambini?",
        a: "Sì. Niente acquisti, niente account. Tutto funziona nel browser e i disegni non escono mai dal dispositivo, quindi non c'è nulla che un bambino possa toccare per sbaglio.",
      },
      {
        q: "Mio figlio può disegnare su un tablet o telefono?",
        a: "Sì. L'interfaccia usa grandi pulsanti adatti al touch e funziona con dita, pennino o mouse su qualsiasi dispositivo.",
      },
      {
        q: "Cosa sono i timbri?",
        a: "Sono immagini divertenti — stelle, cuori, animali e altro — che un bambino tocca per far apparire istantaneamente sulla tela. Fanno sentire il disegno come un gioco.",
      },
      {
        q: "Possiamo salvare o stampare i disegni?",
        a: "Sì. Ogni disegno viene salvato automaticamente sul dispositivo e può essere scaricato come PNG, pronto per stampare, condividere o appendere al frigo.",
      },
    ],
    closing: [
      "Lo spazio di disegno per bambini di SimpleSketchpad mantiene la creatività senza frustrazione. Quando sono pronti per più controllo, lo strumento di disegno online e la tavoletta di disegno online aggiungono forme, testo e note in cui crescere.",
    ],
  },
};

const zh = {
  "drawing-board": {
    seoTitle: "在线绘画板 - 免费规划与头脑风暴空间 | SimpleSketchpad",
    seoDescription:
      "用于头脑风暴、规划、视觉笔记、图表和教学的免费在线绘画板。宽敞画布配笔、图形、箭头、便签，支持 PNG 或 SVG 导出。",
    h1: "在线绘画板",
    intro: [
      "在线绘画板是一个边想边说的共享空间。绘图工具的重点是创作作品，而绘画板的重点则是快速产出想法——梳理流程、勾画布局、做视觉笔记，或带着全班逐步理解一个概念。",
      "这个页面提供的就是这样一块板：宽敞、干净的工作空间，配有用于构建结构的笔、线条、图形和箭头，用于标注的文字，以及用于固定想法的便签。一切都在你的设备上私密保存，准备好随时导出为 PNG 或 SVG。",
    ],
    sections: [
      {
        heading: "绘画板与绘图工具的区别",
        paragraphs: [
          "普通的绘图或美术工具侧重于细节：压力曲线、笔刷质感、图层。绘画板则刻意转换了焦点。它追求速度与清晰——放一个矩形框住某个部分，画一个箭头展示想法如何关联，用一张便签代替一大段文字。如果你在规划、讲解或教学，这是更快的工作方式。",
        ],
      },
      {
        heading: "头脑风暴、规划和视觉笔记",
        paragraphs: [
          "用这块板把项目拆解成步骤，并排比较方案，把会议记录变成视觉笔记，或在打开重型工具之前先画出大致布局。便签让你把想法当作可移动的卡片，分组合并和重新排列就像在真墙上一样自然。",
        ],
        list: [
          "把大想法拆解为相互关联的小想法",
          "勾画页面布局、流程和工作流",
          "在会议和课堂上记录视觉笔记",
          "规划课程、工作坊和演示",
          "在正式化之前先画出图表草稿",
        ],
      },
      {
        heading: "为教学和演示而生",
        paragraphs: [
          "因为绘画板在浏览器中运行，它随时可以搭配投影仪、带屏幕共享的视频通话，或举在班级前面的平板电脑使用。实时绘制、注释和重排，然后导出成品，让学生或队友按自己的节奏阅读。",
        ],
      },
    ],
    relatedHeading: "SimpleSketchpad 的更多免费工具",
    related: {
      "drawing-board": { label: "在线绘画板", blurb: "用于规划、便签和视觉笔记的工作空间。" },
      whiteboard: { label: "免费在线白板", blurb: "用于教学、会议和头脑风暴的无限画布。" },
      "graph-paper": { label: "在线方格纸", blurb: "用于数学、几何和技术草图的可调网格。" },
      "kids-drawing": { label: "儿童在线画画", blurb: "为小画家设计的超大按钮和趣味印章。" },
    },
    faqHeading: "常见问题",
    faq: [
      {
        q: "什么是在线绘画板？",
        a: "在线绘画板是浏览器中用来勾画想法、图表和计划的一块白色空间。与注重成品作品的绘图工具不同，它强调速度、结构和清晰度——非常适合头脑风暴、规划和教学。",
      },
      {
        q: "我可以在板上添加便签吗？",
        a: "可以。选择便签工具，拖动画出一张便签，直接在里面打字。便签像可移动的卡片一样，你可以像在真墙上一样轻松地合并和重排想法。",
      },
      {
        q: "我可以导出完成后的板吗？",
        a: "可以。将板导出为高分辨率 PNG 用于分享或打印，如果需要之后在图形软件中继续编辑，则可导出 SVG。",
      },
      {
        q: "绘画板免费吗？",
        a: "是的，无需安装任何东西，也不必创建账户。一切都在你的浏览器中运行，你的作品永远不会被上传到任何地方。",
      },
    ],
    closing: [
      "这块绘画板是 SimpleSketchpad 的“思考”阶段。当你准备好从粗略的想法转向更具视觉感的内容时，在线绘图工具会为成品插图添加铅笔、画笔和更精细的控制。",
    ],
  },
  whiteboard: {
    seoTitle: "免费在线白板 - 头脑风暴专用 | SimpleSketchpad",
    seoDescription:
      "用于会议、教学、学习和头脑风暴的免费在线白板。无限画布、钢笔、荧光笔、图形、箭头、便签，支持 PNG 或 SVG 导出。",
    h1: "免费在线白板",
    intro: [
      "这款免费在线白板为你提供一个无限画布，用于想法需要移动空间的时刻。勾画流程、给重点划线、贴一张便签、缩小去看全局——没有任何东西把你困在页面边缘。",
      "它像真正的白板一样工作，但更好：你可以自由平移和缩放，用柔和的马克笔在图表上高亮，重新排列笔记，并把一切导出为 PNG 或 SVG。没有账户，没有费用，一切都留在你的设备上。",
    ],
    sections: [
      {
        heading: "为真正工作准备的无限画布",
        paragraphs: [
          "画布随着你的思考不断扩展。放大来写小笔记，再缩小把它们组织成一张对话地图。空格键平移、滚轮缩放和双指捏合缩放，让任何设备——笔记本、平板或手机——上的体验都保持流畅。",
        ],
      },
      {
        heading: "为头脑风暴和讲解而生",
        paragraphs: [
          "用钢笔书写手写内容，用荧光笔吸引注意力，用箭头连接因果关系，用便签收集反馈和任务。它在规划会议、学习课，或“画出想法胜过描述”的课堂上同样出色。",
        ],
        list: [
          "头脑风暴和创意发散会议",
          "教学和在线辅导",
          "在会议中解释想法",
          "学习和复习地图",
          "在一块画布上规划项目",
        ],
      },
      {
        heading: "表现得像纸一样的虚拟白板",
        paragraphs: [
          "笔迹保持自然，因为笔画以矢量形式保存，而非压扁的像素。这意味着在任何缩放级别下导出都干净清晰，SVG 导出也像真正的绘图文件一样可编辑。",
        ],
      },
    ],
    relatedHeading: "SimpleSketchpad 的更多免费工具",
    related: {
      "drawing-board": { label: "在线绘画板", blurb: "用于规划、便签和视觉笔记的工作空间。" },
      whiteboard: { label: "免费在线白板", blurb: "用于教学、会议和头脑风暴的无限画布。" },
      "graph-paper": { label: "在线方格纸", blurb: "用于数学、几何和技术草图的可调网格。" },
      "kids-drawing": { label: "儿童在线画画", blurb: "为小画家设计的超大按钮和趣味印章。" },
    },
    faqHeading: "常见问题",
    faq: [
      {
        q: "这款在线白板真的免费吗？",
        a: "是的。没有试用限制、没有水印、没有账户。白板完全在你的浏览器中运行，需要时即可导出为 PNG 或 SVG。",
      },
      {
        q: "我可以在白板上使用荧光笔吗？",
        a: "可以，有专门的荧光笔工具，柔和半透明的笔触在强调书写和图表的同时不会遮挡它们。",
      },
      {
        q: "我可以协作或分享白板吗？",
        a: "白板设计为在你的设备上私密并自动保存。要分享，请导出为 PNG 或 SVG 并共享文件——不涉及任何第三方存储。",
      },
      {
        q: "在线白板在会议中可用吗？",
        a: "可以。平移和缩放让大块白板在笔记本上也可用，全屏模式非常适合在通话和课程中共享屏幕。",
      },
    ],
    closing: [
      "白板是简单易用与严肃规划相遇之处。如果你的场景需要结构和网格而非自由，试试在线方格纸；如果需要对齐的图形和便签，在线绘画板是不错的选择。",
    ],
  },
  "graph-paper": {
    seoTitle: "在线方格纸 - 可调网格画纸 | SimpleSketchpad",
    seoDescription:
      "在带有可调网格的在线方格纸上画画。选择方格、点阵或线条网格，更改间距，对齐网格并导出为 PNG 或 SVG。免费，无需注册。",
    h1: "在线方格纸",
    intro: [
      "有时你需要的是有格线的纸，而不是空白页。这款在线方格纸把一个可调网格放在真正的绘图工具的中心——选择方格、点阵或线条网格，更改间距，让笔画对齐网格，并保持每个尺寸都对齐。",
      "它是为精度至关重要的场景而造：几何、数学、绘制图表、技术草图，以及要求框和箭头严丝合缝的图示。一切都能导出为 PNG 或 SVG，让你的方格纸画作随时可以打印或分享。",
    ],
    sections: [
      {
        heading: "网格就是核心功能",
        paragraphs: [
          "绘图和几何选择方格网格，更含蓄的参考选点阵网格，图表和表格选线条网格。按任务调整单元格大小——精细绘图用细间距，平面图和布局用大单元格——并打开对齐网格，让线条、图形和文字正好落在你计划的位置。",
        ],
        list: [
          "方格、点阵和线条网格样式",
          "可调网格间距",
          "主要线和次要线",
          "绘图对齐网格",
          "铅笔、线条、箭头、图形和文字",
          "测量和批注",
          "大型图表平移和缩放",
          "PNG 和 SVG 导出",
        ],
      },
      {
        heading: "面向学生、数学和技术工作",
        paragraphs: [
          "学生可以在精确的网格上绘制函数，几何课获得笔直的边线和干净的角度，工程师和设计师可以勾画对齐至关重要的技术布局。用文字工具标注坐标轴、记录尺寸并为每一步添加注释。",
        ],
      },
      {
        heading: "去掉纸张的方格纸",
        paragraphs: [
          "数字方格纸永不耗尽、永不弄脏、无需复印。调整半成品图表的网格，干净地擦除错误，并导出清晰的版本用于练习页、报告或演示。",
        ],
      },
    ],
    relatedHeading: "SimpleSketchpad 的更多免费工具",
    related: {
      "drawing-board": { label: "在线绘画板", blurb: "用于规划、便签和视觉笔记的工作空间。" },
      whiteboard: { label: "免费在线白板", blurb: "用于教学、会议和头脑风暴的无限画布。" },
      "graph-paper": { label: "在线方格纸", blurb: "用于数学、几何和技术草图的可调网格。" },
      "kids-drawing": { label: "儿童在线画画", blurb: "为小画家设计的超大按钮和趣味印章。" },
    },
    faqHeading: "常见问题",
    faq: [
      {
        q: "什么是在线方格纸？",
        a: "在线方格纸是你在浏览器中而非打印纸上画画的带格网格。与静态图片不同，网格的尺寸和样式可调，你的笔画会与之对齐。",
      },
      {
        q: "我可以更改网格大小和间距吗？",
        a: "可以。在方格、点阵和线条网格之间切换，并按任务调整单元格间距。每隔几个单元格会画出更粗的主线，帮助你定位。",
      },
      {
        q: "绘图会自动对齐网格吗？",
        a: "会，当你打开对齐网格时。线条、图形和文字会吸附到最近的网格点，使图表和绘图保持精确。",
      },
      {
        q: "我可以导出方格纸画作吗？",
        a: "可以。导出高分辨率 PNG 用于打印或分享，或导出 SVG 以便在矢量软件中编辑。网格本身也会出现在导出中，让你的绘图清晰易读。",
      },
    ],
    closing: [
      "当空白纸显得过于松散、成品又显得过于沉重时，方格纸是中间的平衡点。如果需要更自由、以想法为先的板面，在线绘画板和免费在线白板可以让你不受任何规则约束地勾画。",
    ],
  },
  "kids-drawing": {
    seoTitle: "儿童在线画画 - 免费、安全又有趣 | SimpleSketchpad",
    seoDescription:
      "为儿童打造的免费在线画画工具，超大的按钮、鲜艳的颜色和有趣的印章。安全无需注册，可在平板和手机上使用，支持保存为 PNG。",
    h1: "儿童在线画画",
    intro: [
      "这个画画工具是为小手和大大的想象力而造。没有令人困惑的菜单、没有账户——只有超大的按钮、鲜艳的颜色、宽容的橡皮擦，以及装满星星、爱心和动物印章的图章盒，用来装饰任何画作。",
      "一切都可以轻点或用手指操作，所以孩子能在几秒钟内开始创作，无论在平板、手机还是电脑上。每幅画都会保存在设备上，完成后可以下载为 PNG 保存或打印。",
    ],
    sections: [
      {
        heading: "为小艺术家而生",
        paragraphs: [
          "工具的尺寸大到不容错过：一个超大的画画按钮、一把大橡皮擦和九个大色块。没有文字工具、没有图形工具、没有会绊倒人的设置——只有在一块明亮画布上涂画的乐趣。",
        ],
      },
      {
        heading: "印章让每幅画都变成游戏",
        paragraphs: [
          "图章盒把画画变成玩耍。选一颗星星、一颗爱心或一个可爱的动物，点一下画布，它就以手指大小立刻出现。把印章和画的线条叠起来，创作场景、图案和故事。",
        ],
      },
      {
        heading: "安全、私密、对家长友好",
        paragraphs: [
          "没有应用内购买、没有账户。画作只保存在浏览器中，永远不会上传。家长可以放心地把平板交给孩子，不用担心惊喜。",
        ],
      },
    ],
    relatedHeading: "SimpleSketchpad 的更多免费工具",
    related: {
      "drawing-board": { label: "在线绘画板", blurb: "用于规划、便签和视觉笔记的工作空间。" },
      whiteboard: { label: "免费在线白板", blurb: "用于教学、会议和头脑风暴的无限画布。" },
      "graph-paper": { label: "在线方格纸", blurb: "用于数学、几何和技术草图的可调网格。" },
      "kids-drawing": { label: "儿童在线画画", blurb: "为小画家设计的超大按钮和趣味印章。" },
    },
    faqHeading: "常见问题",
    faq: [
      {
        q: "这个画画工具对孩子安全吗？",
        a: "是的。没有购买、没有账户。一切都在浏览器中运行，画作永远不会离开设备，孩子没有可以误点的东西。",
      },
      {
        q: "我的孩子可以在平板或手机上画画吗？",
        a: "可以。界面使用适合触控的大按钮，在任何设备上都可用手指、触控笔或鼠标操作。",
      },
      {
        q: "什么是印章？",
        a: "印章是有趣的图案——星星、爱心、动物等等——孩子轻点一下就能瞬间放到画布上。它们让画画感觉像做游戏。",
      },
      {
        q: "我们可以保存或打印画作吗？",
        a: "可以。每幅画都会自动保存在设备上，可以下载为 PNG，随时打印、分享或贴在冰箱上。",
      },
    ],
    closing: [
      "SimpleSketchpad 的儿童画画空间让创造力无忧无虑。当他们准备好获得更多控制时，在线绘图工具和在线绘画板会提供图形、文字和便签，供他们继续成长。",
    ],
  },
};

export const TOOL_CONTENT: ToolContent = {
  id: indonesianTools,
  en,
  es,
  ja,
  fr,
  de,
  pt,
  ko,
  it,
  zh,
};
