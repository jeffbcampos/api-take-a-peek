export class Evaluation {
    dataRegistro!: string
    email!: string
    nomeEmpresa!: string
    ramoAtividade!: string
    outroRamo?: string
    modeloContratacao!: string
    modeloTrabalho!: string
    cargo!: string
    stacksEmpresa!: string
    stacksOutros?: string
    avaliacaoGeral!: string
    ambienteTrabalho!: string
    apoioAssistenciaRh!: string
    diversidade!: string
    planoCarreira!: string
    remuneracao!: string
    treinamento!: string
    beneficios!: string
    outrosBeneficios?: string
    salario!: number
    comentarios?: string

    constructor(props:Evaluation){
        Object.assign(this, props)
    }
}