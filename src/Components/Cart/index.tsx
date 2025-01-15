import { Button } from '../Button'
import { Tag } from '../Tag'
import * as S from './style'

import { close } from '../../store/reducers/cart'
import { remove } from '../../store/reducers/cart'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { parseToBrl } from '../../utils'
import { Game } from '../../pages/Home'

export function Cart() {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  function closeCart() {
    dispatch(close())
  }

  function getTotalPrice() {
    return items.reduce((acumulator, currentValue) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulator += currentValue.prices.current!)
    }, 0)
  }

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <S.OverLay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items &&
            items.map((item: Game) => (
              <S.CartItem key={item.id}>
                <img src={item.media.thumbnail} />
                <div>
                  <h3>{item.name}</h3>
                  <div>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                  </div>
                  <span>{parseToBrl(item.prices.current)}</span>
                </div>
                <button
                  onClick={() => dispatch(remove(item.id))}
                  type="button"
                />
              </S.CartItem>
            ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {parseToBrl(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.Container>
  )
}
