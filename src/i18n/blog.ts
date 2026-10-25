export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  sections: BlogSection[];
  related: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "complete-guide-to-online-drawing",
    title: "The Complete Guide to Drawing Online: Tools, Technique, and Workflow",
    description:
      "A long-form guide to drawing on a browser sketchpad, covering tools, stroke control, color, grids, diagrams, keyboard shortcuts, export formats, and a repeatable workflow.",
    excerpt:
      "Everything that matters about drawing online, in one place: how the tools behave, how to make clean lines with any input device, how to build diagrams that explain themselves, and how to finish a session with a file worth keeping.",
    category: "Guides",
    date: "2026-10-25",
    readingTime: 16,
    related: ["/online-drawing", "/drawing-board", "/whiteboard", "/graph-paper"],
    sections: [
      {
        paragraphs: [
          "Drawing online sounds like a compromise: a browser tab instead of a sketchbook, a mouse instead of a pencil. In practice, it is one of the fastest ways to turn a thought into something visible. There is nothing to install, nothing to charge, and no reason to postpone the first mark while you look for the right notebook.",
          "This guide is the long version. It covers what each tool is actually good for, how to make lines you are happy with using whatever input device you have, how to move from a loose sketch to a diagram somebody else can follow, and how to end a session with a file that is worth keeping. Read it start to finish once, then use the headings as a reference when you get stuck.",
          "Everything here works in the free [online drawing](/online-drawing/) canvas, the [drawing board](/drawing-board/), the [whiteboard](/whiteboard/), and the [graph paper](/graph-paper/) view. The tools are the same; only the defaults change.",
        ],
      },
      {
        heading: "Start with a canvas that gets out of the way",
        paragraphs: [
          "The first minute of a drawing session sets the tone. If the workspace is cluttered, you spend your attention on the interface instead of the idea. Set the canvas up before you start drawing:",
        ],
        list: [
          "Press F to go fullscreen so browser tabs stop competing for attention.",
          "Pick one tool and one color. You can change both later; you cannot get the first thirty seconds back.",
          "Leave the grid on if the drawing has to be measured, and off if it does not.",
          "Set the zoom to 100% so proportions stay honest while you block in the big shapes.",
          "Check the autosave indicator once, so you know your work is being kept.",
        ],
      },
      {
        heading: "Know what each tool is for",
        paragraphs: [
          "The toolbar is short on purpose, but the tools behave differently enough that using the wrong one makes drawing harder than it needs to be. The list below is the mental model worth keeping.",
        ],
        list: [
          "Brush: smooth, consistent, opaque. Best for outlines, filled areas, and confident shapes.",
          "Pencil: softer edges and a slight grain. Best for rough ideas, shading, and handwriting.",
          "Highlighter: wide and translucent. Best for emphasis, revision marks, and callouts.",
          "Rectangle, ellipse, triangle, line, arrow: precise primitives for diagrams, icons, and layout.",
          "Text: short labels placed after the drawing is stable.",
          "Sticky note: a movable block of text for brainstorming and workshop sessions.",
          "Eraser: clears a small area. Undo is usually faster for removing a whole stroke.",
          "Select: moves, resizes, restyles, or deletes an element without touching anything underneath.",
        ],
      },
      {
        heading: "Understand stroke size and opacity before you need them",
        paragraphs: [
          "Two sliders do most of the visual work in a sketch. Stroke size controls weight, and weight controls hierarchy. A 2px line reads as a detail, a 6px line reads as an edge, and a 16px line reads as a headline or a border. If everything is the same weight, the eye has nowhere to land.",
          "Opacity controls depth. Drawing a second shape at 30–40% opacity is the quickest way to suggest a shadow, a reflection, a background zone, or a highlight. Keep the subject of the drawing at full opacity and let supporting shapes sit behind it. The highlighter uses this idea by default, which is why it feels different from the brush even at the same color.",
        ],
      },
      {
        heading: "The shortcuts that carry a whole session",
        paragraphs: [
          "You do not need a wall of key combinations. Learn six, and you will rarely reach for the toolbar again:",
        ],
        list: [
          "V select, B brush, P pencil, E eraser.",
          "G toggles the grid; F toggles fullscreen.",
          "[ and ] step the stroke size down and up.",
          "Ctrl+Z undoes, Ctrl+Shift+Z redoes.",
          "Ctrl+scroll zooms; hold space and drag to pan.",
          "Ctrl+D downloads a PNG of the canvas.",
        ],
      },
      {
        heading: "Block in the big shapes first",
        paragraphs: [
          "Most drawings go wrong in the first two minutes, not the last two. The fix is a simple order of operations: block, refine, detail, label.",
          "Blocking means drawing the largest shapes at the size they will actually occupy. A face starts as an oval, a room starts as a rectangle, a dashboard starts as three stacked bands. Do not add eyes, door handles, or chart labels yet. At this stage you are only deciding how much space each part gets.",
          "Refining means correcting proportions and moving things into place. The selection tool is designed for this: place a shape roughly, then nudge it rather than redrawing it. If a shape needs to be bigger, resize it; if it needs a different look, restyle it. Redrawing is the slowest possible edit.",
          "Details and labels come last, when the composition is stable and you know where the empty space is.",
        ],
      },
      {
        heading: "How to draw a clean line with a mouse or trackpad",
        paragraphs: [
          "A mouse produces lines that are confident but slightly mechanical. That is an advantage for diagrams and a limitation for expressive illustration. Work with it instead of fighting it:",
        ],
        ordered: true,
        list: [
          "Draw each line in one motion. Short, corrective strokes produce wobble.",
          "If a line goes wrong, undo it immediately and try again. Do not patch it with the eraser.",
          "For long straight lines, use the line tool. It exists precisely because freehand straight lines are hard.",
          "For curves, rotate your whole arm from the shoulder rather than pivoting at the wrist.",
          "Zoom in only after the composition works. Detail work at high zoom hides proportion mistakes.",
        ],
      },
      {
        heading: "Build a palette you can repeat",
        paragraphs: [
          "Good color in a sketch is mostly restraint. Pick three roles and stay with them for the whole drawing: a dark neutral for outlines and text, one primary color for the subject, and one accent for the thing you want people to notice. Reusing those colors makes even a rough drawing feel deliberate.",
          "The preset swatches are enough for most sessions. Reach for the custom picker only when a color has to match something real: a brand, a product, or a screenshot. When you do use a custom color, reuse it rather than picking a near-match for every new element — a palette with eleven almost-identical blues looks accidental, not rich.",
        ],
      },
      {
        heading: "Let the grid do the measuring",
        paragraphs: [
          "Turn the grid on for anything that depends on alignment: floor plans, timelines, wireframes, charts, seating charts, and icons with repeated spacing. The grid is an overlay, not part of the artwork, so you can hide it before exporting and no one will know you used it.",
          "The [graph paper](/graph-paper/) view goes further. It starts with a finer grid, a pencil as the default tool, and snap-to-grid enabled, which means shape edges land on the grid lines instead of a few pixels away from them. That single setting is the difference between a sketch that looks neat and one that looks almost neat.",
          "For technical drawings, decide the grid spacing before you draw, not after. Changing spacing halfway through a drawing moves your reference points and makes you re-check every measurement.",
        ],
      },
      {
        heading: "Make diagrams that explain themselves",
        paragraphs: [
          "A diagram is a drawing with an argument. It works when a reader can follow it without you standing next to them. That takes more discipline than a doodle, but not much more time.",
        ],
        list: [
          "Group related items inside a rectangle or a band before you connect anything.",
          "Choose one reading direction — left to right, or top to bottom — and keep every arrow consistent with it.",
          "Label with verbs and nouns, not phrases: send invoice, approve request, retry payment.",
          "Use exactly two arrow weights: one for the main flow, one for exceptions.",
          "Delete any box that does not change the reader's understanding.",
          "Stop when the diagram answers one question clearly. Five half-answered questions is not a better diagram.",
        ],
      },
      {
        heading: "Use sticky notes for thinking, shapes for explaining",
        paragraphs: [
          "Sticky notes are for the messy stage. Write one idea per note, scatter them, then group and discard. Because each note is a separate object, you can move it without redrawing anything around it, which is exactly what early-stage thinking needs.",
          "Once the ideas settle, rebuild the survivors as labelled shapes. A finished diagram should not look like a brainstorm: notes floating at odd angles are hard to read, while aligned boxes with short labels are easy to scan. The transition from notes to shapes is the moment a private thought becomes a shared plan.",
        ],
      },
      {
        heading: "Work at two zoom levels on purpose",
        paragraphs: [
          "Zoom is not just a magnifier; it is a way of switching between two kinds of judgment. Zoomed out, you judge composition: balance, spacing, whether the drawing reads at a glance. Zoomed in, you judge execution: line quality, text alignment, small gaps.",
          "Use the zoom presets or Ctrl+scroll to move between them deliberately. A good rhythm is to block and arrange at 100%, then zoom to 200% or 300% to clean up details, then return to 100% to confirm the whole thing still works. The last look should always be zoomed out, because that is how other people will see the drawing.",
        ],
      },
      {
        heading: "Edit like an editor, not an eraser",
        paragraphs: [
          "Digital drawing is mostly editing. The people who finish drawings are not the ones who make fewer mistakes; they are the ones who remove mistakes faster.",
        ],
        list: [
          "Undo is for whole decisions: a stroke, a placement, a color you just changed.",
          "The eraser is for small, local fixes inside an otherwise good area.",
          "The selection tool is for moving and restyling without redrawing.",
          "Delete is for elements you have decided not to keep at all.",
          "Clear canvas is for starting over on purpose — not for the middle of a session, when it is too easy to use as an escape hatch.",
        ],
      },
      {
        heading: "Autosave is a safety net, not a backup",
        paragraphs: [
          "The sketchpad saves your drawing in the browser as you work, and the indicator at the top of the canvas tells you whether the latest change has been written. That is genuinely useful: close the tab, come back tomorrow, and the drawing is still there on the same device.",
          "It is not a cloud backup. Browser storage belongs to one browser on one device, and clearing site data or switching machines will not carry the drawing with it. Treat autosave as protection between sessions and an export as the actual archive. Anything you would be upset to lose should leave the browser as a file the same day.",
        ],
      },
      {
        heading: "PNG or SVG? Pick the export that matches the job",
        paragraphs: [
          "The canvas offers two exports, and they solve different problems.",
          "PNG is a flat image made of pixels. Use it for documents, slides, chat messages, social posts, and anything that will be viewed rather than edited. It is the safe default because it looks the same everywhere.",
          "SVG is a vector file made of shapes and paths. Use it for logos, icons, diagrams that will be resized, and anything headed into a design tool or a print workflow. Vector edges stay sharp at any size, which pixel images cannot do.",
          "Either way, hide the grid first and frame the drawing the way you want it to appear. The export matches what is on screen, including the zoom, so a quick check before downloading saves a second attempt.",
        ],
      },
      {
        heading: "A twenty-minute sketch routine",
        paragraphs: [
          "When you do not have much time, a fixed sequence beats inspiration. This one fits in twenty minutes and ends with something shareable:",
        ],
        ordered: true,
        list: [
          "Minutes 1–2: set up fullscreen, pick a tool, pick three colors, decide whether you need the grid.",
          "Minutes 3–6: block the largest shapes at 100% zoom. No details.",
          "Minutes 7–10: correct proportions with the selection tool; add or remove whole elements.",
          "Minutes 11–14: refine line weights and add the second color for emphasis.",
          "Minutes 15–17: add short labels and arrows, or leave them out if they are not needed.",
          "Minutes 18–19: zoom out, simplify, and delete anything that does not help.",
          "Minute 20: hide the grid if it is on, then export a PNG or SVG.",
        ],
      },
      {
        heading: "Five common mistakes and the quick fix",
        paragraphs: [
          "Nearly every rough first attempt fails in one of the same five ways. Each has a cheap correction:",
        ],
        list: [
          "Too many colors: cut to one neutral, one primary, one accent.",
          "Everything the same weight: make the outline thicker than the details, and the labels thicker still.",
          "Details too early: undo back to the blocking stage and re-place the big shapes first.",
          "A grid that fights the drawing: turn it off before exporting, and choose spacing before you draw.",
          "A diagram with no direction: pick left-to-right or top-to-bottom and make every arrow agree.",
        ],
      },
      {
        heading: "Drawing with children or a classroom",
        paragraphs: [
          "The same tool works well with beginners because nothing has to be installed and no account stands between a child and the canvas. Keep the first session to two controls — color and undo — and let the rest be discovered later. Short prompts beat open instructions: draw a house with rectangles and triangles, fill the page with circles and turn three into faces, make a two-color poster for a pretend event.",
          "For a classroom, pair students at one screen and let them take turns adding a single shape. The exercise practices sequencing and negotiation as much as drawing, and because autosave is local to the browser, there is no audience and no feed to worry about. The dedicated [kids drawing](/kids-drawing/) page uses larger controls and a friendlier starting palette for exactly this kind of session.",
        ],
        list: [
          "Demonstrate undo early, so mistakes stop being scary.",
          "Set a time limit. Ten minutes produces more finished drawings than an open afternoon.",
          "Ask what is happening in the picture instead of whether it looks realistic.",
          "Export the PNG at the end so the work can be printed or sent home.",
        ],
      },
      {
        heading: "Touch, stylus, and low-power devices",
        paragraphs: [
          "The canvas accepts a mouse, a trackpad, a finger, and a stylus without configuration. On a tablet or phone, pinch gestures zoom and pan, and the toolbar collapses into a palette so the drawing area stays large. Use a stylus if you have one; use a finger if you do not. Both work.",
          "On an older laptop, the practical advice is to keep the drawing simple and the tab count low. A browser canvas is light, but a dozen background tabs are not. Close what you are not using, work at 100% zoom, and export often. If the machine struggles, a smaller canvas with fewer elements will always be smoother than a large, dense one.",
        ],
      },
      {
        heading: "A seven-day practice plan",
        paragraphs: [
          "Skill in this kind of drawing comes from repetition, not from reading. One short session a day for a week will change how the tools feel:",
        ],
        ordered: true,
        list: [
          "Day 1: five parallel lines, five circles, five arrows. Twice, once at 100% and once zoomed in.",
          "Day 2: copy a simple icon using only rectangles and ellipses.",
          "Day 3: sketch a room from memory with the grid on, then hide the grid and check the alignment.",
          "Day 4: draw the same object with the pencil and the brush; note which one suits it.",
          "Day 5: turn a paragraph of instructions into a five-box flowchart with arrows.",
          "Day 6: build a three-color poster with one line of text and one shape.",
          "Day 7: take one old sketch, simplify it, and export both versions to compare.",
        ],
      },
      {
        heading: "When a full illustration app is the better choice",
        paragraphs: [
          "A browser sketchpad is a thinking tool, not a replacement for every drawing program. If your work depends on pressure-sensitive brushes, hundreds of layers, color-managed printing, or animation, a dedicated illustration app will save you time and frustration. That is not a failure of the sketchpad; it is a different job.",
          "The useful boundary is this: use the sketchpad when the goal is to get an idea out, explain something, or practice. Move to a full app when the goal is a finished piece of art with exacting production requirements. Many people never need the second tool, and the ones who do still benefit from sketching the idea here first, where opening a canvas takes one second.",
        ],
      },
      {
        heading: "Common questions, quick answers",
        paragraphs: [
          "Do I need an account? No. The canvas opens and saves locally without signing in.",
          "Do I need a graphics tablet? No. A mouse or trackpad is enough for diagrams, notes, and most everyday sketching. A tablet helps with expressive illustration, not with thinking.",
          "Where are my drawings stored? In this browser on this device. Export anything you want to keep permanently.",
          "Can I use it offline? Once the page has loaded, the canvas keeps working, and autosave continues locally. Keep the tab open if the connection is unreliable.",
          "Is it free? Yes. There is no paywall between you and the tools described in this guide.",
        ],
      },
      {
        heading: "The short version",
        paragraphs: [
          "Set up a quiet canvas, pick one tool and three colors, block the big shapes, refine with the selection tool, add details and labels last, then export. Use the grid when alignment matters and hide it before you download. Treat undo as part of drawing rather than a correction, and treat autosave as a safety net rather than a backup.",
          "That is the whole method. Everything else is practice. Open the [online drawing](/online-drawing/) canvas now and give it twenty minutes — the routine above is a good place to start.",
        ],
      },
    ],
  },
  {
    slug: "sketchpad-tips-for-beginners",
    title: "10 Sketchpad Tips Every Beginner Should Know",
    description:
      "Get cleaner lines, better colors, and faster results with ten practical tips for drawing on a free online sketchpad.",
    excerpt:
      "A browser sketchpad is simple on purpose, but a handful of small habits make the difference between a rough doodle and a drawing you are happy to share. Start with these ten.",
    category: "Tips & tutorials",
    date: "2026-10-14",
    readingTime: 6,
    related: ["/online-drawing", "/drawing-board", "/graph-paper"],
    sections: [
      {
        paragraphs: [
          "The first time you open a blank canvas, the toolbar can feel like a lot of choices. The truth is that most good drawings use only a few tools, a limited palette, and a little patience. These tips are ordered roughly the way you would use them in a real session, so you can put them into practice right away.",
        ],
      },
      {
        heading: "1. Match the tool to the line you want",
        paragraphs: [
          "The brush is smooth and consistent, which makes it the better choice for bold outlines, filled areas, and quick working sketches. The pencil has a softer, grainier edge that feels closer to paper, so it works well for shading, rough ideas, and loose handwriting. Try the same shape with both tools before you commit to one.",
        ],
      },
      {
        heading: "2. Learn five shortcuts first",
        paragraphs: [
          "You do not need to memorize everything. These five get you through most sessions:",
        ],
        list: [
          "B for brush and P for pencil.",
          "Ctrl+Z to undo and Ctrl+Shift+Z to redo.",
          "G to toggle the grid when you need alignment.",
          "F for fullscreen when you want fewer distractions.",
          "Ctrl+D to download the current drawing as a PNG.",
        ],
      },
      {
        heading: "3. Work at 100% zoom, then zoom in",
        paragraphs: [
          "It is tempting to zoom in immediately and chase perfect details. Instead, draw the whole idea at 100% so the proportions stay honest. Once the composition works, zoom in with Ctrl+scroll to refine corners, text, and small shapes. Space-drag pans the canvas without changing your tool.",
        ],
      },
      {
        heading: "4. Let the grid do the measuring",
        paragraphs: [
          "Turn on the grid whenever a drawing depends on alignment: floor plans, flowcharts, charts, or anything with repeated spacing. You can hide it again before exporting, so there is no reason to guess at straight lines and equal gaps.",
        ],
      },
      {
        heading: "5. Build complex shapes from simple ones",
        paragraphs: [
          "Most icons and diagrams are combinations of rectangles, ellipses, triangles, lines, and arrows. Place the basic shapes first, adjust their size, and then use the selection tool to move them into position. If a shape needs a different look, change its stroke or turn on fill instead of redrawing it from scratch.",
        ],
      },
      {
        heading: "6. Save text for the end",
        paragraphs: [
          "Text labels are easier to place once the drawing is stable. Add them last, keep the wording short, and leave breathing room around each label. If a label gets in the way, select it, move it, or remove it without disturbing the artwork underneath.",
        ],
      },
      {
        heading: "7. Use opacity for depth",
        paragraphs: [
          "A second color at 40% opacity reads as a shadow, a highlight, or a background layer. Soft overlays are a fast way to add dimension without complex blending. Keep the main subject at full opacity so it stays the focal point.",
        ],
      },
      {
        heading: "8. Choose a small, repeatable palette",
        paragraphs: [
          "Pick one dark neutral, one primary color, and one accent. Reusing those three colors across a sketch makes it feel intentional, even if the drawing itself is simple. The custom color picker is there when you need an exact brand color, but you rarely need more than a few.",
        ],
      },
      {
        heading: "9. Treat undo as part of the process",
        paragraphs: [
          "Good digital drawing is mostly editing. Sketch loosely, undo the lines that do not help, and keep the ones that do. The eraser is useful for cleaning up a small area, but undo is faster when you want to step back from a whole stroke.",
        ],
      },
      {
        heading: "10. Export when the idea is clear",
        paragraphs: [
          "A sketch does not have to be finished to be useful. Once the idea is readable, download a PNG and put it in the document, chat, or slide where it belongs. You can always reopen the sketchpad and keep refining later.",
        ],
      },
    ],
  },
  {
    slug: "draw-on-a-laptop-without-a-graphics-tablet",
    title: "How to Draw on a Laptop Without a Graphics Tablet",
    description:
      "No drawing tablet? You can still sketch, diagram, and annotate on a laptop using a mouse and a browser-based sketchpad.",
    excerpt:
      "You do not need expensive hardware to get an idea out of your head. A trackpad, a mouse, and a well-designed canvas are enough for most everyday drawing tasks.",
    category: "Guides",
    date: "2026-09-30",
    readingTime: 6,
    related: ["/online-drawing", "/drawing-board", "/whiteboard"],
    sections: [
      {
        paragraphs: [
          "Graphics tablets are wonderful for illustration, but they are not a requirement for thinking visually. Diagrams, wireframes, annotated screenshots, and quick concept sketches are all well within reach of a laptop keyboard and mouse. The trick is to work with the input device instead of fighting it.",
        ],
      },
      {
        heading: "Start with a workspace that gets out of the way",
        paragraphs: [
          "Open the sketchpad and press F to go fullscreen. A quiet canvas with no browser tabs competing for attention makes it easier to judge spacing and proportion. Keep the tools panel within reach, and use Ctrl+scroll to zoom only when you need detail.",
        ],
      },
      {
        heading: "Use the pencil for texture and the brush for clarity",
        paragraphs: [
          "A mouse produces confident, slightly mechanical lines. Lean into that. The pencil softens the edge and makes rough sketching feel more natural, while the brush gives you clean outlines for diagrams and labels. If a line comes out shaky, undo it and draw it again in one deliberate motion rather than trying to correct it with many small strokes.",
        ],
      },
      {
        heading: "Draw with shapes instead of freehand lines",
        paragraphs: [
          "Rectangles, ellipses, triangles, lines, and arrows are the fastest way to make a mouse-drawn sketch look tidy. Place a shape, adjust its size, then move it with the selection tool. For a simple icon, combine two or three primitives and stop there. Precision beats complexity.",
        ],
      },
      {
        heading: "Use the grid for anything technical",
        paragraphs: [
          "Turn on the grid with G when you are drawing a floor plan, a chart, a UI wireframe, or a timeline. The grid gives your eye a reference and removes the need to measure by hand. Hide it before you export so the final PNG stays clean.",
        ],
      },
      {
        heading: "Practice stroke control with a simple drill",
        paragraphs: [
          "Draw five parallel lines, then five circles, then five arrows pointing in different directions. Do it once at 100% zoom and once zoomed in. The exercise is boring on purpose: it trains your hand to commit to a stroke and teaches you how the canvas responds to your mouse or trackpad.",
        ],
      },
      {
        heading: "When a tablet is worth it",
        paragraphs: [
          "If your work depends on pressure-sensitive shading, expressive lettering, or detailed illustration, a tablet will eventually save you time. For planning, teaching, whiteboarding, and quick visual notes, a mouse is usually enough. Start with the browser sketchpad, and upgrade only when the work asks for it.",
        ],
      },
      {
        heading: "The practical takeaway",
        paragraphs: [
          "Choose the right tool, lean on shapes, keep the canvas simple, and export when the idea is readable. You can try the full workflow in the [online drawing](/online-drawing/) tool or open a fresh [drawing board](/drawing-board/) and sketch for five minutes.",
        ],
      },
    ],
  },
  {
    slug: "digital-drawing-for-kids",
    title: "Digital Drawing for Kids: A Simple, Safe Starting Guide",
    description:
      "A practical guide for parents and teachers introducing children to drawing on a browser-based sketchpad, with five starter activities.",
    excerpt:
      "Children take to digital drawing quickly when the tool is simple and the stakes are low. Here is how to set up a calm first session and what to draw together.",
    category: "For parents & teachers",
    date: "2026-09-18",
    readingTime: 5,
    related: ["/kids-drawing", "/drawing-board", "/online-drawing"],
    sections: [
      {
        paragraphs: [
          "A browser sketchpad is a good first drawing app because there is nothing to install, no account to create, and no social feed waiting on the other side. A child can open the page, pick a color, and start making marks. That low barrier matters more than a long list of advanced features.",
        ],
      },
      {
        heading: "Set up a calm first session",
        paragraphs: [
          "Open the [kids drawing](/kids-drawing/) page and press F for fullscreen. Show two controls first: the color swatches and the undo button. Everything else can wait. Autosave means the drawing is kept in the browser between visits, so there is no pressure to finish in one sitting.",
        ],
      },
      {
        heading: "Five activities to try together",
        paragraphs: [
          "Short, playful prompts work better than open-ended instructions. Try one of these:",
        ],
        list: [
          "Draw a house using only rectangles and triangles.",
          "Fill the canvas with circles, then turn three of them into faces.",
          "Draw a simple map of a bedroom, real or imaginary.",
          "Write a name in the largest letters that fit, then decorate the letters.",
          "Make a two-color poster for a pretend event.",
        ],
      },
      {
        heading: "Teach one shortcut at a time",
        paragraphs: [
          "Undo is the most valuable lesson. Once a child knows that mistakes disappear with Ctrl+Z, they experiment more freely. Add the grid later for alignment games, and save the PNG export for the moment a drawing is ready to print or share.",
        ],
      },
      {
        heading: "Keep the focus on ideas, not polish",
        paragraphs: [
          "Digital tools can tempt children to chase perfect lines. Encourage them to treat the canvas like paper: quick marks, bold colors, and stories behind the picture. Ask what is happening in the drawing rather than whether it looks realistic. The habit of explaining an idea is more valuable than a tidy result.",
        ],
      },
      {
        heading: "A note for classrooms",
        paragraphs: [
          "Because the sketchpad runs in the browser and needs no login, it works well for a short classroom activity or a station in a rotation. Pair students at one screen and let them take turns adding a shape to a shared drawing. The activity practices negotiation and sequencing as much as it practices art.",
        ],
      },
      {
        heading: "When the drawing is finished",
        paragraphs: [
          "Download a PNG so the work can be printed, added to a portfolio, or sent to a family member. If the child wants to keep working, the browser autosave will still be there on the same device. For a fresh start, clear the canvas and begin again.",
        ],
      },
    ],
  },
  {
    slug: "sketchpad-for-planning-and-diagrams",
    title: "From Doodle to Diagram: Using a Sketchpad to Plan Your Next Project",
    description:
      "Turn a messy sketch into a clear diagram with shapes, text, arrows, and a simple workflow you can repeat for any project.",
    excerpt:
      "The fastest way to align a team is often a rough drawing. Here is a lightweight process for moving from a loose doodle to a diagram that explains itself.",
    category: "Productivity",
    date: "2026-09-05",
    readingTime: 5,
    related: ["/whiteboard", "/graph-paper", "/drawing-board"],
    sections: [
      {
        paragraphs: [
          "Planning rarely starts as a neat flowchart. It starts as a handful of boxes, a few arrows, and a question in the middle. A sketchpad is useful precisely because it lets you think in that messy intermediate state before committing to a polished tool.",
        ],
      },
      {
        heading: "Step 1: Dump the idea without organizing it",
        paragraphs: [
          "Open a [whiteboard](/whiteboard/) and write down every part of the problem as a separate shape or label. Do not worry about order or alignment yet. Keep the grid off for this pass. The goal is to get the pieces out of your head where you can see them.",
        ],
      },
      {
        heading: "Step 2: Group related pieces",
        paragraphs: [
          "Turn the grid on and start moving related items closer together. Use rectangles to draw boundaries around groups, or switch to the [graph paper](/graph-paper/) view if the project has a spatial layout. At this stage, you are deciding what belongs with what, not how everything connects.",
        ],
      },
      {
        heading: "Step 3: Add arrows and a reading direction",
        paragraphs: [
          "Arrows turn a collection of boxes into a process. Choose one direction, usually left to right or top to bottom, and be consistent. If a connection goes backward, make it visually obvious. A diagram that is easy to follow is more useful than one that captures every edge case.",
        ],
      },
      {
        heading: "Step 4: Label with short, concrete text",
        paragraphs: [
          "Replace vague labels with verbs and nouns: send invoice, approve request, retry payment. Keep each label to a few words. If a box needs a paragraph, it probably deserves its own page or a note outside the diagram.",
        ],
      },
      {
        heading: "Step 5: Simplify before you share",
        paragraphs: [
          "Remove anything that does not help the reader. Delete duplicate boxes, straighten the arrows, and reduce the palette to two or three colors. The final diagram should answer one question clearly, even if the working sketch answered five.",
        ],
      },
      {
        heading: "Step 6: Export and keep the source",
        paragraphs: [
          "Download a PNG for the document, slide, or chat where the plan will live. Because the sketchpad autosaves, you can come back to the original drawing when the project changes. That is often more useful than a polished file that is hard to edit.",
        ],
      },
      {
        heading: "A repeatable habit",
        paragraphs: [
          "The whole process can take ten minutes. Sketch first, group second, connect third, label fourth, simplify fifth, export last. Once the sequence becomes familiar, a sketchpad turns into a fast thinking tool rather than a place to make finished art.",
        ],
      },
    ],
  },
  {
    slug: "sketchpad-features-explained",
    title: "Autosave, PNG Export, and Grid: Sketchpad Features Explained",
    description:
      "A plain-language guide to the Sketchpad features that matter most: autosave, PNG download, grid, zoom, undo, and keyboard shortcuts.",
    excerpt:
      "The toolbar looks simple, but each control solves a specific problem. Here is what the main features do, when to use them, and how they work together.",
    category: "Product",
    date: "2026-08-22",
    readingTime: 6,
    related: ["/online-drawing", "/drawing-board", "/whiteboard"],
    sections: [
      {
        paragraphs: [
          "A good drawing tool hides its complexity. You should be able to open the page and draw without reading a manual, but knowing what each feature is for makes the whole experience faster. This guide covers the parts of the sketchpad you are most likely to use.",
        ],
      },
      {
        heading: "Autosave keeps your work in the browser",
        paragraphs: [
          "The sketchpad saves your drawing locally as you work. The status indicator near the top of the canvas shows whether the latest change is saved. Autosave is tied to the browser and device you are using, so it is a safety net for unfinished work, not a cloud backup. Download a PNG when you want a permanent copy.",
        ],
      },
      {
        heading: "PNG export turns a drawing into a file",
        paragraphs: [
          "Use the download button or press Ctrl+D to export the canvas as a PNG. The exported image matches what you see on screen, including the current zoom level and any grid that is visible. If you want a clean final image, hide the grid first and frame the drawing the way you want it to appear.",
        ],
      },
      {
        heading: "The grid is a measuring aid",
        paragraphs: [
          "Press G to toggle the grid. It is useful for alignment, equal spacing, and anything that needs to look technical. The grid is an overlay, not part of the artwork, so you can turn it off whenever you want a clean view.",
        ],
      },
      {
        heading: "Zoom and pan let you work at two scales",
        paragraphs: [
          "Ctrl+scroll zooms in and out, and holding space lets you pan. Start zoomed out to judge the whole composition, then zoom in for details. The zoom controls in the status bar offer quick presets when you do not want to use the scroll wheel.",
        ],
      },
      {
        heading: "Undo, redo, and the eraser",
        paragraphs: [
          "Undo steps back through recent changes, while redo brings them forward again. The eraser removes marks in a specific area. In practice, undo is faster for removing a whole stroke, and the eraser is better for cleaning up a small part of a larger shape.",
        ],
      },
      {
        heading: "Keyboard shortcuts worth remembering",
        paragraphs: ["These cover most of the daily workflow:"],
        list: [
          "V select, B brush, P pencil, R rectangle, O ellipse, L line, A arrow, T text, E eraser.",
          "Ctrl+Z undo, Ctrl+Shift+Z redo, Delete to remove a selection.",
          "G grid, F fullscreen, [ and ] to change stroke size.",
          "Ctrl+scroll to zoom, space to pan, Ctrl+D to download.",
        ],
      },
      {
        heading: "Putting it together",
        paragraphs: [
          "Sketch with the pencil, clean up with the brush, align with the grid, label with text, and export when the idea is ready. Autosave covers the gaps between sessions. If you want to see the whole flow in action, open the [online drawing](/online-drawing/) page and try a five-minute sketch.",
        ],
      },
    ],
  },
];

export const BLOG_CATEGORIES = Array.from(new Set(BLOG_POSTS.map((post) => post.category)));

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function sortedPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function relatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return BLOG_POSTS.filter((candidate) => candidate.slug !== post.slug).slice(0, limit);
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
