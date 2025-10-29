class CustomError extends Error {
    CodiceErrore: string;

    constructor(message: string, CodiceErrore?: string) {
        super(message);
        this.CodiceErrore = CodiceErrore || "CustomError";
    }
}

class ErroreParticolare extends Error {
    Dettagli: string;

    constructor(message: string, Dettagli?: string) {
        super(message);
        this.Dettagli = Dettagli || "Nessun dettaglio fornito";
    }
}

function MiaFunzione(param: string): void {
    if (param === "non-valido") {
        throw new CustomError("Parametro non valido", "ParamErr001");
    }
    if (param === "errore") {
        throw new Error("Errore generico");
    }
    if (param === "particolare") {
        throw new ErroreParticolare("Errore particolare", "Dettagli specifici sull'errore");
    }
    console.log("Funzione eseguita con successo");
}

function Esegui(): void {
    try {
        MiaFunzione("non-valido");
    } catch (error) {
        if (error instanceof CustomError) {
            console.error(`CustomError catturato: ${error.message}, CodiceErrore: ${error.CodiceErrore}`);
        } else if (error instanceof Error) {
            console.error(`Errore generico catturato: ${error.message}`);
        } else {
            console.error("Errore non gestito in maniera specifica");
        }
    }

    try {
        MiaFunzione("errore");
    } catch (error) {
        if (error instanceof CustomError) {
            console.error(`CustomError catturato: ${error.message}, CodiceErrore: ${error.CodiceErrore}`);
        } else if (error instanceof Error) {
            console.error(`Errore generico catturato: ${error.message}`);
        } else {
            console.error("Errore non gestito in maniera specifica");
        }
    }

    try {
        MiaFunzione("valido");
    } catch (error) {
        if (error instanceof CustomError) {
            console.error(`CustomError catturato: ${error.message}, CodiceErrore: ${error.CodiceErrore}`);
        } else if (error instanceof Error) {
            console.error(`Errore generico catturato: ${error.message}`);
        } else {
            console.error("Errore non gestito in maniera specifica");
        }
    }

    try {
        MiaFunzione("particolare");
    } catch (error) {
        if (error instanceof ErroreParticolare) {
            console.error(`ErroreParticolare catturato: ${error.message}, Dettagli: ${error.Dettagli}`);
        } else if (error instanceof Error) {
            console.error(`Errore generico catturato: ${error.message}`);
        } else {
            console.error("Errore non gestito in maniera specifica");
        }
    }
}

Esegui();
