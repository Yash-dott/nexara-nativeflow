type typographySizeTypes = {
    [key: string]: number
}

const typographySizes: Record<string, number> = {
    xxs: 10,
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 24,
    '2xl': 28,
    '3xl': 32,
    '4xl': 36,
    '5xl': 45,
    '6xl': 57,
}

export default typographySizes;
export type { typographySizeTypes };