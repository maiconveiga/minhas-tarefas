import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard ativo />
        <FiltroCard ativo={false} />
        <FiltroCard ativo={false} />
        <FiltroCard ativo={false} />
        <FiltroCard ativo={false} />
        <FiltroCard ativo={false} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
