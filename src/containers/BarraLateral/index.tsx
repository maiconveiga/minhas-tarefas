import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={5} />
        <FiltroCard legenda="concluidas" contador={1} />
        <FiltroCard legenda="urgentes" contador={6} />
        <FiltroCard legenda="importantes" contador={1} />
        <FiltroCard legenda="normal" contador={11} />
        <FiltroCard legenda="todas" contador={24} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
