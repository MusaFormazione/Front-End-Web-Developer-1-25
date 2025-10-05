interface Climb {
    name: string
    location: string
    grade: string
    height: number
    isOutdoor: boolean
}

export function describeClimb(climb: Climb): string {
    return `${climb.name} è ${climb.isOutdoor ? "un'arrampicata all'aperto" : "un'arrampicata al chiuso"} situata in ${climb.location}.
Ha un grado di difficoltà di ${climb.grade} e un'altezza di ${climb.height} metri.`
}
