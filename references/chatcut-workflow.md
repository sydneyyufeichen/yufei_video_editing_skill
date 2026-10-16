# ChatCut workflow

Use this sequence when applying the Yufei style in ChatCut.

1. Activate the open ChatCut project and load its project-scoped operations.
2. Read the project, timeline, tracks, captions, and transcript before mutating anything.
3. Clean fixed fillers and pauses, then use transcript-based Script editing for failed takes, repeated attempts, and semantic duplicates.
   Inspect the first frames and trim any closed-eye lead-in without clipping the first spoken word.
4. Apply the accepted default speed of 1.15x after speech cleanup. Keep embedded audio enabled and preserve pitch.
5. Re-read the resulting A-roll item ranges. Locate chapter boundaries and root terms from the cleaned timeline rather than from source-media timestamps.
6. Style captions as bold white sans-serif text with black outline and no band, centered around top 1500 on a 1080x1920 canvas. Keep the spoken language unless translation is requested.
7. Create or reuse the persistent floating chapter-title Motion Graphic and place one instance across each complete chapter. V3 large white titles have no black outline; V2 smaller white root keywords retain their black outline.
   Add the separate opening title/subtitle across the full intro, using the white subtitle band and large white main title treatment.
8. Create or reuse the small white outlined root-keyword Motion Graphic and place it around diagnostic/root-cause phrases, top-centered beneath the larger chapter title. Keep it above the speaker's head.
9. Add symptom keyword Motion Graphics selectively when they improve comprehension or the user requests them. Keep them smaller and visually distinct from root-cause graphics.
10. Add short, restrained transitions only at semantic chapter boundaries. Choose among coherent wipes, blur/dissolve, subtle push/zoom, or custom medical-atlas line and shape reveals according to the content.
11. Preview exact frames around title changes, root graphics, transition boundaries, and captions. Correct timing or overlap before reporting success.

## Timing invariants

- Speech edits and playback-rate changes come before final graphic timing.
- Chapter-title instances begin on the first frame of a chapter and end on the first frame of the next chapter. The final chapter ends when the closing call-to-action begins.
- Root graphics are timed from the cleaned, retimed transcript. Do not reuse frame numbers from an earlier version.
- When changing playback rate, update every A-roll item's duration and start frame atomically, then update chapter titles and root graphics in the same edit when possible.
- Captions derived from A-roll may retime automatically, but their bottom layout must still be visually checked.

## Layering

- A-roll is the base layer.
- Root-cause graphics sit above A-roll, directly below the persistent chapter titles.
- Persistent chapter titles sit above root graphics in both layer order and position.
- Adjust both boxes together when long text or the shot causes overlap.
- Captions remain at the bottom and must stay unobstructed.

## Visual checks

For a vertical 1080x1920 timeline, sample at least:

- one frame immediately before and after every chapter boundary;
- one stable frame near the middle of every chapter;
- one stable frame for every root term and every symptom keyword animation used;
- one early, middle, and final caption frame.

The desired result is a large white top chapter title without outline, a smaller white keyword with black outline below it, an unobstructed face, and outlined bottom captions. Symptom graphics, when present, remain visually secondary to root-cause graphics.
