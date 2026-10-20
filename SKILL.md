---
name: yufei-video-editing
description: Edit newly uploaded single-speaker talking-head videos in ChatCut using Yufei's established house style. Use when the user asks to edit a new video according to their usual rules, this prior workflow, or the Yufei video style; do not apply to interviews, music videos, or unrelated editing styles unless requested.
---

# Yufei Video Editing

Apply this workflow to a newly uploaded speech-led video when the user wants the established Yufei treatment. Use ChatCut Desktop when the user names it or continues an open Desktop project. Load the available ChatCut talking-head and Motion Graphics guidance before editing.

## Editorial priorities

1. Make the speech clean and natural.
2. Keep the speaker visible and the information easy to scan.
3. Separate persistent chapter orientation from short root-cause emphasis.
4. Use restrained motion. Every graphic must explain the content or hide a necessary jump cut.

## Speech edit

- Transcribe first and edit from the transcript.
- Remove failed takes, repeated attempts, filler words, breath noises, and long pauses. When the same content is repeated, keep the final successful take unless the user selects another.
- Preserve sentence meaning and natural phrasing. Do not remove short pauses that make the English sound human.
- Inspect the opening frames and start on a natural, open-eyed expression. Trim only the necessary lead-in; preserve the first spoken word and retime all layers.
- After cleanup, use **1.15x playback speed by default**. This is the accepted baseline. Change it only when the user explicitly requests another speed.
- If speed or cuts change after graphics are placed, retime captions, chapter titles, root-cause graphics, transitions, and any effects before finishing.

## Captions

- Generate English captions from the cleaned timeline.
- Use bold white sans-serif type with a clear black outline and no background band, matching the latest reference.
- Keep captions in the bottom safe area, centered, with enough side margin for a vertical video.
- For 1080x1920, use approximately `left: 80`, `top: 1500`, `width: 920`, `height: 220`; scale proportionally for other canvas sizes.
- Use approximately Inter Bold, white, 4 px black stroke, and readable two-line wrapping. Keep the spoken language unless the user asks for translation.
- Check the first, middle, and final caption after every retiming pass.

## Opening title

- Use the user's supplied title and subtitle across the entire introductory speech span, ending at the first chapter. Keep them visible from the first frame rather than briefly flashing.
- Reference 1 treatment: smaller black subtitle inside a white rounded band above a much larger bold white main title with a dark shadow. Center the pair in clear space above the head, adapting placement to the actual shot.
- Use [assets/opening-title.jsx](assets/opening-title.jsx). Its editable props are `title`, `subtitle`, `font` (Manrope), `band` (#FFFFFF), `subtitleColor` (#111111), and `titleColor` (#FFFFFF); natural box 960x240. Example copy is specific to the current video, not future videos.

## Chapters

- Detect semantic chapters from the spoken structure. Do not force a fixed chapter count.
- Exclude the hook/intro and closing call-to-action unless they form real chapters.
- Add one persistent chapter title for the full duration of each chapter.
- Place it at the top center. Use large bold white text without any black outline; a soft shadow is acceptable. Omit the small pattern label and underline. Keep this rule distinct from V2's smaller white text, which retains its black outline.
- For 1080x1920, use roughly 83–94 px Manrope Bold in a 960x125 box at left 60, top 170, adjusting long titles to fit.
- Give the title a short, gentle entrance and exit only. It must remain stable throughout the chapter and must not flash on and disappear.
- Use the reusable source in [assets/floating-chapter-title.jsx](assets/floating-chapter-title.jsx) as the starting point when authoring the ChatCut Motion Graphic.

## Root-cause emphasis

- Animate diagnostic/root-cause terms, such as `constrained liver Qi`, `damp heat`, `weak digestion and food stagnation`, and `qi deficiency`.
- Use the latest reference's smaller bold white text with a black outline, centered directly below the large chapter title. Omit panels, badges, underlines and organ icons.
- For 1080x1920, use approximately 48–54 px Manrope Bold in a 940x260 box at left 70, top 215. Balance long phrases across two lines if needed, and keep the text above the speaker's head.
- Show the graphic around the exact spoken phrase with a short subtle entrance and stable hold.
- Use [assets/root-keyword.jsx](assets/root-keyword.jsx); editable props are `term`, `font` (Manrope), and `ink` (#FFFFFF).

## Symptoms

- Symptom keyword animation is optional. Use it when a symptom is important to comprehension or the user requests more visual emphasis; do not animate every symptom in a dense list.
- Keep symptom emphasis visually distinct from root-cause emphasis through color, type size, and hierarchy. Symptoms may use smaller aqua text when needed, while roots use the white outlined small-title treatment; keep both forms simple.
- Short symptom labels, small modular callouts, or relevant B-roll may be used when they support the spoken point and do not cover the face, chapter title, or captions.

## Visual language

- Default emphasis palette: white `#FFFFFF`, dark shadow, and optional symptom aqua `#72C4B8`. Medical-atlas colors remain available for explanatory illustrations when appropriate, not default keyword cards.
- Fonts: Manrope for the opening, chapter titles and root keywords; Inter for captions.
- Prefer custom Motion Graphics over ChatCut's generic stock MG library.
- Keep overlays transparent and modular. Avoid large opaque surfaces except when explicitly requested.
- Use zooms sparingly at important sentences or visible jump cuts. Avoid constant push-ins.

## Chapter transitions

- Add a restrained transition at each real chapter boundary.
- Vary the transition according to the semantic shift and surrounding motion. Suitable options include a clean line wipe, soft directional wipe, brief blur/dissolve, restrained push or zoom, and a custom medical-atlas line or shape reveal.
- Keep most transitions short, typically about 8–12 frames, and maintain a coherent visual family across the video. Avoid choosing effects at random or repeating one transition mechanically at every boundary.
- Keep transitions attached to adjacent A-roll clips so they survive later timing changes.
- Do not add a transition at every ordinary jump cut.

## Verification

Before reporting completion:

- Inspect the chapter start, settled middle, and chapter end for every chapter.
- Inspect every root-cause graphic at entrance, settled, and exit frames.
- Confirm captions remain synchronized and inside the bottom safe area.
- Confirm chapter titles stay visible for the whole chapter.
- Confirm the opening title covers the full intro, ends at the first chapter, and does not obscure the face. Verify the first frame has a natural open-eyed expression.
- If symptom keyword animations are used, confirm they are selective, visually distinct from root-cause graphics, and correctly timed to the spoken symptoms.
- Confirm root graphics do not overlap chapter titles, the speaker's face, or captions.
- Confirm chapter transitions still sit on the correct boundaries after speech retiming.
- Export only when the user asks for an export.

Read [references/chatcut-workflow.md](references/chatcut-workflow.md) when performing the edit in ChatCut.
