export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
}

export interface BlogFaq {
  question: string;
  answer: string;
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
  /** Site routes with a matching tool/page, used for inline links and tool CTAs. */
  related: string[];
  /** Blog slugs to feature under "Keep reading". Falls back to the most recent posts. */
  relatedPosts?: string[];
  /** Optional FAQ block, also emitted as FAQPage structured data. */
  faqs?: BlogFaq[];
  /** Extra search terms for the meta keywords tag. */
  keywords?: string[];
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
    related: ["/drawing-board", "/whiteboard", "/graph-paper"],
    sections: [
      {
        paragraphs: [
          "Drawing online sounds like a compromise: a browser tab instead of a sketchbook, a mouse instead of a pencil. In practice, it is one of the fastest ways to turn a thought into something visible. There is nothing to install, nothing to charge, and no reason to postpone the first mark while you look for the right notebook.",
          "This guide is the long version. It covers what each tool is actually good for, how to make lines you are happy with using whatever input device you have, how to move from a loose sketch to a diagram somebody else can follow, and how to end a session with a file that is worth keeping. Read it start to finish once, then use the headings as a reference when you get stuck.",
          "Everything here works in the free [sketchpad](/) canvas, the [drawing board](/drawing-board/), the [whiteboard](/whiteboard/), and the [graph paper](/graph-paper/) view. The tools are the same; only the defaults change.",
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
          "Either way, check the drawing at 100 percent before downloading. The export is cropped to the artwork itself, so the grid and the zoom level do not appear in the file.",
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
          "Minute 20: check the drawing at 100 percent, then export a PNG or SVG.",
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
          "A grid that fights the drawing: choose the spacing before you draw, and remember that the grid stays out of exports.",
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
          "Set up a quiet canvas, pick one tool and three colors, block the big shapes, refine with the selection tool, add details and labels last, then export. Use the grid when alignment matters; it stays out of the exported file. Treat undo as part of drawing rather than a correction, and treat autosave as a safety net rather than a backup.",
          "That is the whole method. Everything else is practice. Open the [sketchpad](/) canvas now and give it twenty minutes — the routine above is a good place to start.",
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
    related: ["/drawing-board", "/graph-paper"],
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
    related: ["/drawing-board", "/whiteboard"],
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
          "Choose the right tool, lean on shapes, keep the canvas simple, and export when the idea is readable. You can try the full workflow in the [sketchpad](/) or open a fresh [drawing board](/drawing-board/) and sketch for five minutes.",
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
    related: ["/kids-drawing", "/drawing-board"],
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
    related: ["/drawing-board", "/whiteboard"],
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
          "Use the download button or press Ctrl+D to export the drawing as a PNG. The file is cropped to the marks on the canvas with a small margin and rendered at twice the screen resolution, so it stays sharp. The grid, the current zoom level, and selection outlines are not included.",
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
          "Sketch with the pencil, clean up with the brush, align with the grid, label with text, and export when the idea is ready. Autosave covers the gaps between sessions. If you want to see the whole flow in action, open the [sketchpad](/) and try a five-minute sketch.",
        ],
      },
    ],
  },
  {
    slug: "how-to-draw-a-floor-plan-online",
    title: "How to Draw a Floor Plan Online: A Free Step-by-Step Guide",
    description:
      "Learn how to draw a floor plan online for free: measure a room, set a scale, draw walls, doors, and windows, add furniture, and export a clean plan.",
    excerpt:
      "A floor plan does not need expensive software. With graph paper, a pencil, and a few measurements, you can draw a room accurately enough to rearrange furniture, plan a move, or brief a contractor.",
    category: "Guides",
    date: "2026-10-26",
    readingTime: 16,
    related: ["/graph-paper", "/drawing-board", "/whiteboard"],
    relatedPosts: [
      "complete-guide-to-online-drawing",
      "sketchpad-for-planning-and-diagrams",
      "sketchpad-tips-for-beginners",
    ],
    keywords: [
      "how to draw a floor plan",
      "floor plan online",
      "free floor plan maker",
      "draw floor plan online",
      "online floor plan drawing",
      "room layout planner",
      "floor plan sketch",
      "house plan drawing",
      "floor plan on graph paper",
      "how to draw a room plan",
    ],
    sections: [
      {
        paragraphs: [
          "A floor plan is the most practical drawing most people ever make. It answers a simple question from above: what is in this room, how big is it, and what fits where? You do not need CAD software or an architect to answer that. A browser canvas, a tape measure, and twenty minutes are enough for a sketch that is accurate enough to rearrange furniture, plan a move, or explain an idea to a builder.",
          "This guide walks through the whole process in the order you would actually do it. You will measure the room, choose a scale, draw the walls as a closed loop, add doors, windows, and furniture, label the dimensions, and export a plan somebody else can read. Every step works in the free [graph paper](/graph-paper/) canvas, and the same drawing tools are available in the [drawing board](/drawing-board/) if you prefer a blank page.",
          "One thing to get out of the way first: this is a planning sketch, not a permit drawing. It is excellent for layouts, furniture, rentals, and early design conversations. When a project needs structural changes, exact construction dimensions, or official approval, a professional with CAD tools should produce the final drawing. For everything before that point, a sketch plan is faster and easier to change.",
        ],
      },
      {
        heading: "The short answer: draw the shell, then fill it",
        paragraphs: [
          "If you only remember one thing, remember the order. Floor plans go wrong when people start with furniture and try to fit the room around it. Build the container first, then decide what goes inside.",
        ],
        ordered: true,
        list: [
          "Measure each wall and note the door and window openings.",
          "Open the graph paper canvas and choose a scale, such as one square = one foot.",
          "Draw the outer walls as one closed shape, including wall thickness.",
          "Cut openings for doors and windows, and mark which way doors swing.",
          "Block in large furniture and fixed fixtures with simple rectangles and circles.",
          "Add dimensions, room names, a north arrow, and a scale note.",
          "Check the plan at 100 percent, then export it as PNG or SVG.",
        ],
      },
      {
        heading: "What a floor plan actually needs",
        paragraphs: [
          "A useful plan carries a small amount of information beyond the shapes. Before you start drawing, know what you are trying to communicate, because that decides how much detail belongs on the page.",
        ],
        list: [
          "Wall positions and thickness, so the room reads as an enclosed space rather than a floating rectangle.",
          "Door openings and swing direction, because a door that cannot open is a layout problem.",
          "Windows, with enough of a mark to show where light enters and where a wall is solid.",
          "Fixed elements: sink, toilet, bathtub, kitchen run, radiators, stairs, and built-in storage.",
          "Movable furniture at roughly the right size, so clearances can be judged.",
          "Dimensions for the overall room and any wall that matters for a decision.",
          "Labels for room names, plus a north arrow and a scale note if the plan leaves your screen.",
        ],
      },
      {
        heading: "Before you draw: measure the room properly",
        paragraphs: [
          "A plan is only as good as its measurements. You do not need laser precision, but you do need consistency. Measure in the same unit everywhere and write the numbers down before you open the canvas, so you are not guessing halfway through.",
        ],
        ordered: true,
        list: [
          "Sketch the room roughly on paper first, with a line for every wall.",
          "Measure wall to wall at the widest point, at skirting-board height rather than at the ceiling.",
          "Measure each wall twice. If the numbers disagree by more than a couple of centimetres, measure again.",
          "Record every opening: door width, window width, and the distance from each opening to the nearest corner.",
          "Note anything that protrudes into the room, such as a chimney breast, radiator, pipe box, or column.",
          "Photograph each wall. Photos make it much easier to remember which side the door hinges are on.",
          "Measure the ceiling height once, even though it does not appear on the plan. It matters when you judge whether a wardrobe will feel oppressive.",
        ],
      },
      {
        heading: "Pick a scale you can keep",
        paragraphs: [
          "Scale is the relationship between a distance on the canvas and a distance in the room. You do not need a formal architectural ratio for a sketch, but you do need one rule and the discipline to keep it.",
          "The simplest rule is one grid square equals one foot (about 30 cm). A typical bedroom is then roughly 11 to 13 squares wide, which fits comfortably on screen. If you are drawing a whole apartment, one square per metre keeps the page manageable. For a small bathroom or a detailed kitchen run, one square per six inches (15 cm) gives you room for accurate fittings.",
          "Write the scale in the corner of the drawing while you work. It takes five seconds and it prevents the most common floor plan error: a plan where the sofa is drawn at one scale and the room at another, making a tight room look generous.",
        ],
        list: [
          "One square = 1 ft (30 cm): good default for bedrooms, living rooms, and offices.",
          "One square = 1 m: good for a whole flat or house, where furniture detail matters less.",
          "One square = 6 in (15 cm): good for bathrooms, kitchens, and storage planning.",
        ],
      },
      {
        heading: "Set up the graph paper canvas",
        paragraphs: [
          "Open the [online graph paper](/graph-paper/) and set it up before you draw a single wall. Two minutes of setup saves a lot of correcting later.",
        ],
        ordered: true,
        list: [
          "Press F to go fullscreen so the toolbar and browser tabs stop competing for space.",
          "Choose a square grid. Dotted grids look softer, but square cells make wall lengths easier to count.",
          "Set the grid spacing to match your scale, and turn on snap to grid.",
          "Pick the pencil for measuring lines and the rectangle tool for walls and furniture.",
          "Choose a neutral dark color for structure and leave a second color for annotation.",
          "Stay at 100% zoom while you block the walls; zoom in only when you place small fixtures.",
        ],
      },
      {
        heading: "Draw the outside walls as one closed loop",
        paragraphs: [
          "Walls are the skeleton of the plan. Draw them as a closed loop so the room reads as an enclosed space, and give them thickness. A single hairline rectangle looks like a table, not a room.",
          "A practical approach is two rectangles: the outer edge of the walls and the inner edge. The gap between them is wall thickness, usually 4 to 6 inches (10 to 15 cm) for interior walls and a little more for exterior walls. With snap to grid on, both rectangles stay aligned and the wall reads evenly all the way around.",
          "If the room is not a simple rectangle, build it from rectangles rather than trying to draw the whole outline freehand. Place one rectangle for each straight section, line the edges up, then add the interior walls that divide the space. Simple shapes snapped to the grid will always look more convincing than a single wobbly outline.",
        ],
        list: [
          "Draw the inner wall line first, because that is the usable floor area.",
          "Add the outer line a few grid cells away, or draw a second rectangle and align its centre.",
          "Keep the same wall thickness everywhere unless the building genuinely changes.",
          "Use the select tool to nudge walls rather than redrawing them.",
        ],
      },
      {
        heading: "Add doors and windows the way they behave",
        paragraphs: [
          "Openings are where a floor plan starts to feel real. A door is not just a gap in a wall; it is a gap plus a swing. Draw the opening in the wall, then draw a thin line for the door leaf and a quarter-circle arc for the space it sweeps through. If two doors open into each other, the arcs will overlap and you will see the problem immediately.",
          "Most interior doors are 30 to 36 inches (75 to 90 cm) wide, with 32 inches being a common compromise. Front doors are wider, often 36 inches. A doorway needs a little more space than the door itself because of the frame, so leave a grid cell of clearance on each side when you are blocking in furniture.",
          "Windows are usually drawn as a thinner double line inside the wall, sometimes with a break in the wall line. Note the sill height for anything that will sit underneath a window, such as a desk, a sofa, or a radiator. Sliding doors and folding doors get a straight track line instead of a swing arc, which keeps the drawing honest about how much floor space they actually need.",
        ],
        list: [
          "Mark every door with a swing arc; it is the fastest way to spot a blocked layout.",
          "Show which side the door is hinged on, not just which wall it sits in.",
          "Use a straight line for sliding and bifold doors instead of an arc.",
          "Add window sill heights as a short note if furniture will sit below them.",
        ],
      },
      {
        heading: "Block furniture instead of decorating it",
        paragraphs: [
          "At planning stage, furniture is a footprint, not an illustration. A rectangle with a label is more useful than a detailed sofa, because the rectangle is easy to resize and move. Keep everything to the same level of abstraction so the plan reads consistently.",
          "Use known sizes so the plan tells the truth. A double bed is roughly 4 ft 6 in by 6 ft 3 in (135 by 190 cm). A three-seat sofa is usually 6 to 7 ft (1.8 to 2.1 m) long and about 3 ft deep. A dining chair needs about 2 ft (60 cm) of table edge and 3 ft of pull-out space behind it. A kitchen counter is 2 ft (60 cm) deep, and a standard bathtub is 5 ft 6 in by 2 ft 6 in (170 by 75 cm).",
          "Place the largest items first, then the ones that need a wall or a service connection, then the small pieces. If a piece does not fit, do not shrink it until it does. Move it, rotate it, or decide it belongs in another room. A plan that quietly lies about furniture size is worse than no plan at all.",
        ],
        list: [
          "Beds, sofas, tables, and storage: simple rectangles at true size.",
          "Chairs: small squares, rotated where needed.",
          "Round tables: use the ellipse tool and keep the footprint as circular as you can.",
          "Rugs: a light outline at low opacity, so they read as floor rather than furniture.",
        ],
      },
      {
        heading: "Annotate dimensions, names, and orientation",
        paragraphs: [
          "Labels turn a drawing into a document. Add them after the layout is stable, when you know which numbers a reader will actually need. You do not have to dimension every wall; dimension the ones that answer a question.",
        ],
        list: [
          "Overall room width and depth, placed outside the walls.",
          "Any wall run that constrains furniture: a chimney breast, a kitchen return, a short wall beside a door.",
          "Room names in short, plain words: bedroom, kitchen, store, landing.",
          "A north arrow, drawn as a simple line and a triangle.",
          "A scale note such as one square = 1 ft, placed in a corner where it will survive cropping.",
          "A date if the plan is part of a project conversation and may be revised.",
        ],
      },
      {
        heading: "Check the plan before you share it",
        paragraphs: [
          "Most floor plan mistakes are visible in ten seconds if you know what to look for. Run this check before the plan leaves your browser:",
        ],
        ordered: true,
        list: [
          "Does the outer wall loop close, with no gaps at the corners?",
          "Does every door have room to open, including the space in front of it?",
          "Are there any furniture pieces overlapping each other or passing through a wall?",
          "Is the walking route between the door and the main furniture at least 2 ft 6 in (75 cm) wide?",
          "Do the dimensions match the measurements you wrote down?",
          "Is the same scale used for the room and for the furniture?",
          "Can someone who has never seen the room tell where the window and the door are?",
          "Is the grid hidden, and is the whole plan inside the frame?",
        ],
      },
      {
        heading: "A worked example: one bedroom in ten minutes",
        paragraphs: [
          "Here is how the process looks with real numbers. The room is 12 ft by 10 ft (3.6 by 3.0 m), with one door on the short wall and one window on the long wall.",
        ],
        ordered: true,
        list: [
          "Set the scale to one square = 1 ft. Draw a 12 by 10 rectangle for the inside face of the walls.",
          "Offset a second rectangle by half a square to show wall thickness, and align the corners with snap on.",
          "Mark a 3 ft opening on the short wall for the door, then draw the leaf and a quarter-circle swing into the room.",
          "Mark a 5 ft window on the long wall as a double line, and note a 3 ft sill height underneath it.",
          "Place a 4.5 by 6.3 rectangle for the bed, with its head against the long wall away from the door.",
          "Add two 2 by 2 bedside tables and a 6 by 2 wardrobe along the opposite wall.",
          "Check clearances: 3 ft beside the bed, 2.5 ft at the foot, and a clear path from the door.",
          "Label the room, add the overall dimensions outside the walls, and export.",
        ],
      },
      {
        heading: "Test a layout before you move anything",
        paragraphs: [
          "The real value of a sketch plan is that it lets you try a layout without lifting a sofa. Draw the room once, then duplicate the plan or save a copy before you experiment. Move the furniture, rotate the bed, swap the desk and the wardrobe, and see which arrangement leaves the best walking route.",
          "Judge each version by clearances rather than by how tidy it looks. A 3 ft (90 cm) gap is comfortable for a main route, 2 ft 6 in (75 cm) is workable beside a bed, and anything under 2 ft (60 cm) will feel tight every day. Leave more space in front of a wardrobe or a chest of drawers than the drawer itself pulls out.",
          "Sketch the version you like, then sketch one alternative with the main pieces swapped. Comparing two plans side by side is much easier than arguing about a room in the abstract, and the losing version often reveals a constraint you had not noticed.",
        ],
      },
      {
        heading: "Export the right file for the job",
        paragraphs: [
          "When the plan is ready, decide where it is going before you export it. Use PNG for documents, chat messages, slides, and anything that only needs to be looked at. It is a flat image that opens everywhere and preserves exactly what you drew.",
          "Use SVG when the plan will be resized, printed, or edited further. Vector files keep their edges sharp at any size, which matters for a plan that might become a poster, a worksheet, or an asset inside a design tool. If you plan to keep adjusting the layout, the autosaved canvas is the working copy and the export is the archive.",
          "Check the plan at 100 percent before exporting. The file is cropped to the drawing itself, so the grid and zoom level stay out of it. If the plan is leaving your screen, add the scale note and north arrow before exporting. Those two marks are what make a drawing portable.",
        ],
      },
      {
        heading: "Where a sketch plan stops being enough",
        paragraphs: [
          "A sketch plan is a communication tool, not a construction document. It is the right choice for deciding where the bed goes, testing a desk layout, planning a move, or showing a landlord what you mean. It is the wrong choice for anything that will be built from the drawing without interpretation.",
          "If walls are being removed, a load-bearing structure is involved, electrics or plumbing are moving, or a permit is required, the final plan needs a qualified professional and proper drafting software. That is not a limitation of a browser canvas; it is the difference between thinking visually and certifying a design. Use the sketch to have a better first conversation, then hand the decision to someone with the right tools.",
        ],
      },
      {
        heading: "Seven floor plan mistakes to avoid",
        paragraphs: [
          "These are the errors that show up again and again in hand-drawn plans. Each one has a quick correction:",
        ],
        list: [
          "Drawing walls as a single line: use two lines or two rectangles to show thickness.",
          "Forgetting door swings: add the arc, then move any furniture that blocks it.",
          "Mixing scales: pick one rule and write it on the plan.",
          "Shrinking furniture to make it fit: keep true sizes and change the layout instead.",
          "Ignoring fixed elements: measure radiators, chimney breasts, and pipe boxes before you draw.",
          "Crowding the drawing with labels: keep only the dimensions a reader needs.",
          "Exporting with the grid visible: not a problem; the grid is never included in the file.",
        ],
      },
      {
        heading: "Floor plan, mind map, or whiteboard?",
        paragraphs: [
          "Not every spatial idea needs a measured plan. If you are deciding what belongs in a room, a [whiteboard](/whiteboard/) with sticky notes is faster: one note per object, grouped by zone, no scale required. If you are deciding where the objects physically fit, switch to graph paper and draw them at size.",
          "The distinction is useful because it stops you from over-measuring an early idea. Start loose on a whiteboard, agree on the zones, then draw the winning layout as a plan. The same workflow applies to project planning: brainstorm first, then commit to boxes, arrows, and dimensions. Our guide to [turning a doodle into a diagram](/blog/sketchpad-for-planning-and-diagrams/) covers that transition in more detail.",
        ],
      },
      {
        heading: "Using a floor plan with a team or a class",
        paragraphs: [
          "A plan is a good shared object because everyone reads it the same way. In an office move, draw the room shell once, then let each person place their own desk footprint and check the route to the door. In a classroom, give pairs a simple room and a fixed list of furniture, and ask them to fit everything without blocking the entrance.",
          "Keep the rules short so the exercise stays about spatial reasoning: walls first, doors second, big furniture third, labels last. Export the finished plan as a PNG so it can be printed or added to a shared document. Because the canvas saves locally and needs no account, there is no setup cost and no audience beyond the people in the room.",
        ],
      },
      {
        heading: "A five-minute practice exercise",
        paragraphs: [
          "The fastest way to learn this workflow is to draw a room you already know. Pick one room, measure it roughly, and give yourself five minutes:",
        ],
        ordered: true,
        list: [
          "Minute 1: open the graph paper, set one square = 1 ft, and turn on snap.",
          "Minute 2: draw the inner rectangle and the outer wall line.",
          "Minute 3: add the door opening, the swing arc, and the window.",
          "Minute 4: block in the three largest pieces of furniture at true size.",
          "Minute 5: check the door clearance, add the dimension and scale note, and export.",
        ],
      },
      {
        heading: "The short version",
        paragraphs: [
          "Measure the walls and openings, choose one scale, draw the wall loop with thickness, cut the doors and windows, block the furniture at true size, then label and export. Keep the drawing abstract, keep the clearances honest, and use the plan to compare layouts rather than to decorate them.",
          "That is enough to plan a move, rearrange a room, or brief someone else without ambiguity. Open the [online graph paper](/graph-paper/) and draw the room you are sitting in. The five-minute exercise above is a good place to start, and the [complete guide to drawing online](/blog/complete-guide-to-online-drawing/) covers the tools in more depth if you want to go further.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I draw a floor plan online for free?",
        answer:
          "Yes. Open the online graph paper in any browser, set a scale such as one square equals one foot, and draw with the pencil, rectangle, line, and text tools. There is no account, no trial, and no watermark, and you can export the finished plan as a PNG or SVG.",
      },
      {
        question: "What scale should I use for a floor plan?",
        answer:
          "One grid square per foot (30 cm) works for most bedrooms, living rooms, and offices. Use one square per metre for a whole apartment, or one square per six inches (15 cm) for bathrooms and kitchens where fittings need more detail. Pick one scale, write it on the plan, and keep it consistent.",
      },
      {
        question: "Do I need exact measurements to draw a floor plan?",
        answer:
          "No, but you need consistent ones. Measure each wall once, check the numbers, and note door and window openings. A plan that is accurate to a few centimetres is plenty for furniture layouts. If the drawing will guide construction, a professional should measure and draft it.",
      },
      {
        question: "Can I draw a floor plan on a phone or tablet?",
        answer:
          "Yes. The canvas works with touch, mouse, and stylus, and pinch gestures zoom and pan. A larger screen makes wall lengths easier to judge, so a laptop or tablet is more comfortable for a full room. On a phone, keep the plan simple and use fullscreen mode.",
      },
      {
        question: "Can I print or share the floor plan?",
        answer:
          "Export a PNG for sharing in chat, documents, or slides, and an SVG if the plan will be resized or edited further. Include the scale note and north arrow so the drawing still makes sense away from the canvas.",
      },
      {
        question: "Is my floor plan private?",
        answer:
          "Yes. Drawings are saved in your browser on your own device and are not uploaded to a server. That also means the plan does not follow you to another device, so export a file when you want a permanent copy.",
      },
      {
        question: "Can I use a sketch floor plan for a building permit?",
        answer:
          "No. A permit or construction drawing needs precise dimensions, structural information, and a qualified professional. A sketch plan is ideal for planning furniture, briefing a designer, or comparing layouts before that stage begins.",
      },
      {
        question: "How long does it take to draw a floor plan?",
        answer:
          "A single room takes about ten to twenty minutes once you have measurements. Most of that time goes into measuring and checking clearances, not drawing. The drawing itself is a rectangle for the walls, a few openings, and labelled blocks for the furniture.",
      },
    ],
  },
  {
    slug: "how-to-draw-a-flowchart-online",
    title: "How to Draw a Flowchart Online: A Complete, Practical Guide",
    description:
      "Learn how to draw a clear flowchart online: choose the right symbols, map the happy path, add decisions and swimlanes, avoid the common mistakes, and export a diagram people can follow.",
    excerpt:
      "A good flowchart is not a diagram of everything you know. It is a diagram of the one path a reader needs to follow. Here is how to build one from a blank canvas, step by step.",
    category: "Guides",
    date: "2026-10-27",
    readingTime: 18,
    related: ["/whiteboard", "/drawing-board", "/graph-paper"],
    relatedPosts: [
      "sketchpad-for-planning-and-diagrams",
      "complete-guide-to-online-drawing",
      "how-to-draw-a-floor-plan-online",
    ],
    keywords: [
      "how to draw a flowchart",
      "flowchart online",
      "free flowchart maker",
      "flowchart symbols",
      "flowchart tutorial",
      "process flow diagram",
      "decision flowchart",
      "online flowchart tool",
      "how to make a flowchart",
      "flowchart examples",
    ],
    sections: [
      {
        paragraphs: [
          "A flowchart is the most quietly useful drawing most teams ever make. It answers three questions on one page: what happens next, who does it, and what happens when something goes wrong. That is why flowcharts survive in engineering, support, operations, and software while fancier diagram styles come and go.",
          "You do not need dedicated diagramming software to draw a good one. A browser canvas with rectangles, arrows, and text is enough, and it has an advantage over a rigid template library: you can think in the same space where you present. This guide walks through the full process, from deciding whether you need a flowchart at all to exporting one that still makes sense when it leaves your screen.",
          "Every step works in the free [whiteboard](/whiteboard/) canvas. The same tools are available on the [drawing board](/drawing-board/) if you want a blank page, or on [graph paper](/graph-paper/) if the process has rows, columns, or a fixed layout.",
        ],
      },
      {
        heading: "The short answer: start with the question, not the boxes",
        paragraphs: [
          "Most bad flowcharts are bad before the first shape is drawn, because the author starts by listing steps instead of deciding what the chart must prove. Fix that first, and the drawing becomes much easier.",
        ],
        ordered: true,
        list: [
          "Write the question the chart must answer in one sentence, such as \u201cHow does a refund request get approved?\u201d",
          "List every step as a short verb phrase on paper or in sticky notes. Do not draw anything yet.",
          "Mark the single starting event and every acceptable ending. A process can have several ends, but it should have one obvious start.",
          "Open the whiteboard and place the start at the top, with room below for the longest path.",
          "Connect the happy path first: the sequence that happens when nothing goes wrong.",
          "Add decisions only where the path genuinely splits, and label every arrow with the condition that sends the reader down it.",
          "Read the chart aloud from start to finish, then delete, align, and shorten until a stranger could follow it.",
        ],
      },
      {
        heading: "What a flowchart is good at, and what it is not",
        paragraphs: [
          "A flowchart is a tool for showing a sequence with branches. It is at its best when the reader needs to know what to do next, who owns the step, or where a request can go wrong. Onboarding sequences, approval chains, support escalations, publishing pipelines, refund policies, and troubleshooting guides all fit the form.",
          "It is a poor fit for open-ended thinking. If you are still deciding which steps exist, a wall of sticky notes is faster and more honest than a tidy chart that implies a decision has been made. It is also the wrong shape for showing relationships between ideas, a schedule over time, or the layout of a screen. Those need a mind map, a timeline, or a wireframe respectively.",
          "The practical rule: use a flowchart when the reader has to follow a path. Use something else when the reader has to compare, explore, or imagine. Our guide to [turning a doodle into a diagram](/blog/sketchpad-for-planning-and-diagrams/) covers the earlier, messier stage if you are not ready to commit to a sequence yet.",
        ],
      },
      {
        heading: "The only symbols most flowcharts need",
        paragraphs: [
          "Formal flowchart standards define dozens of shapes. Real workplace diagrams use six or seven, and readers only reliably recognise a handful. Stick to this set unless your industry expects otherwise.",
        ],
        list: [
          "Terminator (rounded rectangle or stadium): the start and the end. Label it with an event, not a task: \u201crequest received\u201d, \u201crefund issued\u201d.",
          "Process (rectangle): a single action or task. Begin each label with a verb: check order, send email, issue refund.",
          "Decision (diamond): a question with two or more exits. Draw a square, then rotate it 45 degrees with the select tool, or build a diamond from four straight lines.",
          "Input or output (parallelogram, or a rectangle with a note): information entering or leaving the process, such as a customer form or a confirmation email.",
          "Document (rectangle with a wavy bottom edge, or just a labelled rectangle): a physical or digital artefact the process produces.",
          "Predefined process (rectangle with a second vertical line near each side): a step handled by another documented process. Use it to avoid exploding a chart into detail.",
          "Connector (small circle): a jump from one part of the page to another, or to a second page. Label it A, B, C so the pairs are easy to match.",
          "Annotation (bracket or dashed line with text): a note for the reader that is not part of the flow.",
        ],
      },
      {
        heading: "Set up a canvas that keeps you honest",
        paragraphs: [
          "A few minutes of setup prevents most of the correction work later. The goal is a canvas where boxes align without effort and arrows have room to breathe.",
        ],
        ordered: true,
        list: [
          "Press F to go fullscreen and close the tabs you are not using.",
          "Turn the grid on for alignment. On the [graph paper](/graph-paper/) view, snap-to-grid is already enabled, which is the fastest way to keep a flowchart even.",
          "Pick two line weights: a medium weight for boxes and a thinner one for arrows. The contrast does most of the visual hierarchy for you.",
          "Choose three colors at most: a dark neutral for structure, one fill for decisions, and one accent for the steps you want the reader to notice.",
          "Set the default text size large enough to read at 100 percent. Flowcharts fail when labels are shrunk to fit boxes instead of boxes being made to fit labels.",
          "Leave a margin around the whole page. Arrows that touch the edge look accidental, and export crops close to the artwork.",
        ],
      },
      {
        heading: "Step 1: Draw the happy path before anything else",
        paragraphs: [
          "The happy path is the shortest successful route through the process. Draw it as a straight column of rectangles from the start terminator to the end terminator, connected with downward arrows. No decisions, no exceptions, no annotations.",
          "This first pass is deliberately boring. It establishes the spine of the chart and the vertical spacing that everything else will hang from. If a step does not belong on the shortest successful route, it does not belong in this pass.",
          "Keep the boxes the same width where the labels allow it. Equal width creates a visual rhythm and makes the chart scannable; wildly different box sizes make the reader work to find the sequence. If one label is much longer than the others, shorten the label rather than widening one box.",
          "When the spine is in place, walk it out loud. \u201cRequest received, check order, verify address, issue refund, notify customer, done.\u201d If a step feels missing or out of order, fix it now, while there is nothing else to disturb.",
        ],
      },
      {
        heading: "Step 2: Add decisions one at a time",
        paragraphs: [
          "Decisions are where flowcharts earn their keep and where they most often fall apart. Add one diamond at a time, and finish its branches before starting the next.",
          "A decision should be a real question with a clear answer. \u201cIs the order within 30 days?\u201d is a decision. \u201cWhat should we do about the order?\u201d is not; it is a conversation that needs its own chart. If a diamond needs three or four exits, ask whether two of them are actually the same outcome, or whether the chart has drifted into showing policy rather than process.",
          "Give each exit its own arrow and write the condition on the arrow itself: yes, no, approved, declined, in stock, out of stock. An unlabelled branch forces the reader to guess, and guessing is exactly what a flowchart is supposed to prevent.",
          "Send the less common branch to the side rather than straight down. The eye reads the vertical spine as the main path, so keeping exceptions off to one side preserves the story. Rejoin the branches at a single point when they produce the same next step; separate paths that never meet should end in their own terminators.",
        ],
      },
      {
        heading: "Step 3: Keep the reader moving in one direction",
        paragraphs: [
          "Choose one reading direction and commit to it. Top to bottom suits processes with clear stages; left to right suits pipelines and handoffs. Mixing the two is the fastest way to make a simple process look complicated.",
          "Arrows should enter a shape on one side and leave from another, not both from the top or both from the bottom. A short, straight arrow is easier to follow than a long diagonal, so move the boxes rather than routing the line around them.",
          "Try to avoid crossing lines. When two arrows must cross, a small hop or a break in one line signals that they do not connect. If the drawing needs more than two or three crossings, the layout is telling you something: split the chart, move a branch, or use a connector to jump to a second page.",
          "A useful test is to trace the chart with a finger. If your finger has to double back, change direction twice, or hover over a junction to decide where to go, the reader will struggle too. Redraw for the finger, not for the page.",
        ],
      },
      {
        heading: "Step 4: Use swimlanes when responsibility changes hands",
        paragraphs: [
          "A flowchart shows what happens. A swimlane flowchart also shows who makes it happen. The moment a process involves more than one person, team, or system, lanes prevent the most common ambiguity: a step that everyone assumes someone else owns.",
          "Draw one horizontal lane per owner, label the lanes at the left edge, and place each step inside the lane of the person who performs it. Arrows that cross a lane boundary are handoffs, and they are worth counting. Every crossing is a place where work can wait, be dropped, or be misunderstood.",
        ],
        list: [
          "Use the customer, the support agent, and the finance team as lanes for a refund process.",
          "Keep each step in exactly one lane. A step shared by two owners usually means two steps.",
          "Draw handoff arrows as straight vertical lines where possible; they read faster than diagonals.",
          "Label the handoff with the artefact that moves: request form, approval note, payment file.",
          "If one lane is overloaded with boxes, the process is probably concentrated on one role. That is a finding, not a drawing problem.",
        ],
      },
      {
        heading: "Step 5: Label the arrows, not just the boxes",
        paragraphs: [
          "Box labels describe actions; arrow labels describe conditions. Both are necessary. \u201cApprove refund\u201d tells the reader what happens, while \u201cwithin 30 days\u201d on the incoming arrow tells them why this path was taken.",
          "Keep arrow labels to two or three words. Put them near the middle of the line, with a small gap so the text does not sit on top of the stroke. If an arrow label needs a sentence, the decision above it is doing too much work and should be split.",
          "This is also where you document the rules that people usually keep in their heads. \u201cManager approval required\u201d, \u201citem opened\u201d, \u201cpayment failed twice\u201d. Written on the chart, those rules become reviewable. Left unwritten, they become the reason two people disagree about the process a month later.",
        ],
      },
      {
        heading: "Step 6: Build hierarchy with size, color, and space",
        paragraphs: [
          "A flowchart with forty identical boxes is technically correct and practically unreadable. Visual hierarchy tells the reader where to start and what matters.",
        ],
        list: [
          "Make the start and end terminators visually distinct, either with a fill or a heavier outline.",
          "Keep ordinary process boxes light. Use a single accent fill for decisions so the eye can find the branches.",
          "Reserve color for meaning. If red means \u201cexception\u201d, do not also use red for a normal step.",
          "Leave more space between stages than between a box and its arrow. Grouping by whitespace is faster to read than grouping by borders.",
          "Use bold text for the few labels that carry the main story, and normal weight for supporting detail.",
        ],
      },
      {
        heading: "A worked example: the refund request",
        paragraphs: [
          "Here is the whole method applied to a process most online stores recognise. The chart answers one question: how does a refund request get resolved?",
        ],
        ordered: true,
        list: [
          "Start terminator: refund request received.",
          "Process: look up the order in the store admin.",
          "Decision: is the order found? If no, output \u201cask the customer for the order number\u201d, then loop back to the lookup step.",
          "Decision: is the request within the 30-day window? If no, go to the faulty-item check on the exception branch.",
          "Decision: is the item faulty or damaged? If yes, continue to approval. If no, send a decline with a link to the returns policy and end.",
          "On the main branch, process: check whether the item has been opened or used.",
          "Decision: is it unopened? If yes, approve the refund. If no, offer a partial refund or store credit and end.",
          "Process: issue the refund to the original payment method, and note the 3 to 5 business day settlement.",
          "Process: email the customer a confirmation with the refund reference.",
          "End terminator: refund issued, request closed.",
        ],
      },
      {
        heading: "The three-pass edit that makes a flowchart readable",
        paragraphs: [
          "Do not try to draw a polished chart in one pass. Draw it roughly, then edit it three times with a different question each time. This is faster than fiddling with individual boxes as you go.",
        ],
        ordered: true,
        list: [
          "Pass one, remove: delete every box the reader does not need to follow the path. Merge steps that always happen together. Move implementation detail into a note or a predefined-process box.",
          "Pass two, align: put the spine on one axis, make repeated boxes the same size, and straighten the arrows. Turn the grid on if you have not already, and nudge rather than redraw.",
          "Pass three, style: apply the two line weights, the three colors, and the larger text size. Add the title, the owner, and the date. Then stop.",
        ],
      },
      {
        heading: "Eight flowchart mistakes and their fixes",
        paragraphs: [
          "Nearly every confusing flowchart fails in one of these ways. Each fix takes a minute or two.",
        ],
        list: [
          "No clear start: add one terminator at the top and make sure every path can be traced from it.",
          "Decision boxes with one exit: if there is no branch, it is a process, not a decision.",
          "Unlabelled branches: write yes, no, or the actual condition on every arrow out of a diamond.",
          "Arrows that end in mid-air: connect them to a shape or a labelled connector circle.",
          "Two start points: keep one, and turn the other into a process or an annotation.",
          "Mixing owners without lanes: add swimlanes or state the owner in each box.",
          "Too much detail: replace a cluster of steps with one predefined-process box and a separate chart.",
          "A chart that answers five questions: split it into one chart per decision the reader needs to make.",
        ],
      },
      {
        heading: "The pre-share checklist",
        paragraphs: [
          "Run this check before the chart goes into a document, a ticket, or a meeting. It takes less time than the questions you will otherwise answer in the meeting.",
        ],
        ordered: true,
        list: [
          "Can a stranger name the start, the main path, and every ending?",
          "Does every decision have at least two labelled exits?",
          "Does every arrow begin and end on a shape or a connector?",
          "Is every process label a verb phrase, and every terminator an event?",
          "Are all handoffs visible, either as lane crossings or as owner labels?",
          "Is there exactly one scale of detail, or are some boxes hiding whole sub-processes?",
          "Does the chart still work when printed in black and white?",
          "Is the title specific enough to stand alone, such as \u201cRefund request, standard orders, 2026\u201d?",
          "Is the working file saved, and is the exported file named for the process and date?",
        ],
      },
      {
        heading: "Flowchart, mind map, or process map?",
        paragraphs: [
          "These three diagrams look related but answer different questions. Choosing the wrong one is a common reason a session feels harder than it should.",
        ],
        list: [
          "Mind map: what are the parts of this idea, and how do they relate? Use it to explore, not to prescribe.",
          "Flowchart: what happens next, in what order, and under which condition? Use it to define a path.",
          "Process map or swimlane: who does what, and where does work wait? Use it to find handoffs and bottlenecks.",
          "Timeline: when does each stage happen, and how long does it take? Use it when duration is the point.",
          "Wireframe: what does the screen look like, and where does the user click? Use it when layout is the point.",
        ],
      },
      {
        heading: "Export the version the reader needs",
        paragraphs: [
          "A flowchart usually has two audiences: the people who will edit it and the people who will read it. Export for the second group and keep the working canvas for the first.",
          "PNG is the right choice for tickets, chat, documentation, and slides. It is flat, reliable, and opens everywhere. Export at 100 percent zoom with the grid hidden, and check that small labels are still legible on a laptop screen.",
          "SVG is better when the chart will be resized, printed, or pulled into a design tool. Vector edges stay sharp, which matters for a process that ends up on a wall or in a handbook. Either way, the export is cropped to the artwork, so the grid and selection handles do not appear in the file.",
          "Name exports with the process and a date, such as refund-flow-2026-10.png. A folder of files called diagram.png, diagram-2.png, and diagram-final.png is not an archive; it is a future argument.",
        ],
      },
      {
        heading: "A ten-minute practice exercise",
        paragraphs: [
          "The fastest way to learn this is to chart a process you already know, where you can tell immediately when the drawing lies. Pick something small and bounded.",
        ],
        ordered: true,
        list: [
          "Minute 1: write the question, the start, and the end on a sticky note.",
          "Minute 2: list the steps as verbs, then cross out two that are really one.",
          "Minutes 3 to 5: draw the happy path as a straight column, all boxes the same width.",
          "Minutes 6 to 7: add one decision and label both exits.",
          "Minute 8: add the exception branch and rejoin it where it belongs.",
          "Minute 9: run the three-pass edit, remove and align first, style last.",
          "Minute 10: read it aloud, fix one unclear arrow, and export a PNG.",
        ],
      },
      {
        heading: "The short version",
        paragraphs: [
          "Decide the question first, list the steps as verbs, and draw the happy path as one straight column. Add decisions one at a time, label every exit, keep the flow in one direction, and use swimlanes the moment more than one person owns a step. Edit in three passes, check it against a reader, and export a PNG for sharing or an SVG for resizing.",
          "That is enough to turn a process that lives in people's heads into a document they can agree on. Open the [whiteboard](/whiteboard/) and chart the last process that caused confusion in your team. Ten minutes is usually enough to find the step nobody owned.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I draw a flowchart online for free?",
        answer:
          "Yes. Open the free whiteboard or drawing board in any browser and use rectangles, rotated squares for decisions, arrows, and text. There is no account, no trial, and no watermark, and you can export the finished chart as a PNG or SVG.",
      },
      {
        question: "What are the basic symbols in a flowchart?",
        answer:
          "Most flowcharts need only a few: a rounded terminator for start and end, a rectangle for a process, a diamond for a decision, a parallelogram for input or output, a circle for a connector, and a rectangle with a doubled edge for a predefined process. Keep the set small so readers do not have to learn a legend.",
      },
      {
        question: "How do I draw a decision diamond in a browser sketchpad?",
        answer:
          "Draw a square with the rectangle tool, select it, and rotate it 45 degrees using the rotation handle. Alternatively, draw four straight lines between the four points. Either way, keep the diamond the same size as the other decisions so the chart reads consistently.",
      },
      {
        question: "How many steps should a flowchart have?",
        answer:
          "Aim for roughly 10 to 20 shapes on one page. Beyond that, readers lose the thread and the layout starts to cross itself. Split the chart into a high-level overview with predefined-process boxes, then draw a separate detail chart for each one.",
      },
      {
        question: "Should I use swimlanes in every flowchart?",
        answer:
          "No. Add swimlanes when responsibility changes hands, because that is when ownership becomes ambiguous. For a single-owner process or a simple troubleshooting guide, a plain top-to-bottom chart is easier to read.",
      },
      {
        question: "How do I label arrows in a flowchart?",
        answer:
          "Write the condition that sends the reader down that path: yes, no, approved, declined, within 30 days. Keep labels to two or three words, place them near the middle of the arrow, and leave a small gap so the text does not sit on the line.",
      },
      {
        question: "Can I share or print the flowchart?",
        answer:
          "Export a PNG for chat, tickets, documents, and slides, or an SVG if the chart will be resized or printed large. Add a title, an owner, and a date so the file still makes sense outside the canvas. The grid is never included in the export.",
      },
      {
        question: "Is my flowchart private?",
        answer:
          "Yes. Drawings are saved in your browser on your own device and are not uploaded to a server. That also means the chart does not follow you to another device, so export a file when you want a permanent copy.",
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
  const explicit: BlogPost[] = [];
  for (const slug of post.relatedPosts ?? []) {
    const candidate = getPost(slug);
    if (candidate && candidate.slug !== post.slug) explicit.push(candidate);
  }
  const fallback = sortedPosts().filter(
    (candidate) => candidate.slug !== post.slug && !explicit.some((item) => item.slug === candidate.slug),
  );
  return [...explicit, ...fallback].slice(0, limit);
}

/** Anchor id for an H2, stable across builds. */
export { headingId } from "../lib/anchors";

/** Rough word count of the body, used for BlogPosting structured data. */
export function postWordCount(post: BlogPost): number {
  const chunks = post.sections.flatMap((section) => [
    section.heading ?? "",
    ...(section.paragraphs ?? []),
    ...(section.list ?? []),
  ]);
  for (const faq of post.faqs ?? []) chunks.push(faq.question, faq.answer);
  return chunks.join(" ").split(/\s+/).filter(Boolean).length;
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
