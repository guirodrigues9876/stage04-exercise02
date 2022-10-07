
const students = [
    {
       name: 'John',
       firstNote: 8,
       secondNote: 9, 
    },
    {
        name: 'Natalie',
        firstNote: 7,
        secondNote: 10, 
     },
     {
        name: 'Bobby',
        firstNote: 5,
        secondNote: 8, 
     },
]


function calculaMedia (student){
    return (student.firstNote + student.secondNote) / 2;
}



for(let student of students){
    let media = calculaMedia(student)
    if( media >= 7){
        alert(`A média do(a) aluno(a) ${student.name} é: ${media} \n Parabéns, ${student.name}! Você foi aprovado(a) no concurso`)
    }else{
        alert(`A média do(a) aluno(a) ${student.name} é: ${media} \n Não foi dessa vez, ${student.name}. Tente novamente`)
    }
}



