const LightenColorShades = (color: string, amount: number): string => {
    if (color.startsWith("#")) {
        color = color.slice(1);
    }
    if (color.length === 3) {
        color = color.split("").map(c => c + c).join("");
    }
    if (color.length !== 6) {
        throw new Error("Invalid HEX color.");
    }
   
    const getValidColorValue = (start: number): number => {
        const value = parseInt(color.slice(start, start + 2), 16);
        return Number.isNaN(value) ? 0 : Math.min(255, Math.max(0, value + amount));
    };

    const r: number = getValidColorValue(0);
    const g: number = getValidColorValue(2);
    const b: number = getValidColorValue(4);

    return `#${((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase()}`;
};

export default LightenColorShades;