import Tarefa from '../../components/Tarefa'
import { Container } from './style'

const tarefas = [
  {
    titulo: 'TCC',
    descricao: 'Acessar materiais',
    prioridade: 'importante',
    status: 'concluída'
  },
  {
    titulo: 'NPS',
    descricao: 'Plano de ação',
    prioridade: 'urgente',
    status: 'pendente'
  },
  {
    titulo: 'Fisioterapia cotovelo',
    descricao: 'Exercícios para desinchar o edema',
    prioridade: 'urgente',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
            descricao={t.descricao}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
