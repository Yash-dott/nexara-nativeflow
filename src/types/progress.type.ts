export type ProgressProps = {
    /** Current progress value (0-100) */
    value?: number;

    /** Thickness of the progress bar */
    thickness?: number;

    /** Border radius of the progress bar */
    br?: number;

    /** Background color of the track (unfilled part) */
    trackColor?: string;

    /** Color of the progress (filled part) */
    progressColor?: string;
}