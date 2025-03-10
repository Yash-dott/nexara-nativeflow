const LightenColorShades = (hex:string, amount: number)=> {
    let r = Math.min(255, parseInt(hex.slice(1, 3), 16) + amount);
    let g = Math.min(255, parseInt(hex.slice(3, 5), 16) + amount);
    let b = Math.min(255, parseInt(hex.slice(5, 7), 16) + amount);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
export default LightenColorShades;