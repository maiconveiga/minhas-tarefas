import { Prioridade } from './../../utils/enums/tarefa'
import { Descricao } from './../../components/Tarefa/style'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar JavaScript rever exercícios',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Revisar JS'
    },
    {
      id: 2,
      descricao: 'Estudar JavaScript rever exercícios',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Revisar REDUX'
    },
    {
      id: 3,
      descricao: 'Estudar JavaScript rever exercícios',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Revisar REACT'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer