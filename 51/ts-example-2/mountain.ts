export type Mountain = {
    name: string;
    height: number;
};

export function findNameOfTallestMountain(mountains: Mountain[]): string {
    if (mountains.length === 0) return "";
    if (mountains[0] === undefined) return "";
    let tallestMountain = mountains[0];
    for (const mountain of mountains) {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    }

    return tallestMountain.name;
}