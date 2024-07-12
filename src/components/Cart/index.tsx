import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import Button from '../Tag&Button/Button'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco, getTotalPrice } from '../../utils'
import { useGetAdressQuery } from '../../services/cepApi'
import { useGetCompraMutation } from '../../services/api'

import * as S from './styles'

const Card = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const [cep, setCep] = useState('')
  const { data: dataCep, isLoading: carregandoCep } = useGetAdressQuery(cep, {
    skip: !cep
  })
  const [compra, { data: retornoCompra, isSuccess: compraSucedida }] =
    useGetCompraMutation()
  const [estaNaEntrega, setEstaNaEntrega] = useState(false)
  const [estaNoPagamento, setEstaNoPagamento] = useState(false)

  const form = useFormik({
    initialValues: {
      nome: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      nomeCartao: '',
      numeroCartao: '',
      cvv: '',
      mes: '',
      ano: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string().required('O campo é obrigatório.'),
      endereco: Yup.string().required('O campo é obrigatório.'),
      cidade: Yup.string().required('O campo é obrigatório.'),
      cep: Yup.string()
        .min(9, 'CEP inválido.')
        .max(9, 'CEP inválido.')
        .required('O campo é obrigatório.'),
      numero: Yup.string().required('O campo é obrigatório.'),
      nomeCartao: Yup.string().when((values, schema) =>
        estaNoPagamento ? schema.required('O campo é obrigatório.') : schema
      ),
      numeroCartao: Yup.string().when((values, schema) =>
        estaNoPagamento ? schema.required('O campo é obrigatório.') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        estaNoPagamento ? schema.required('O campo é obrigatório.') : schema
      ),
      mes: Yup.string().when((values, schema) =>
        estaNoPagamento ? schema.required('O campo é obrigatório.') : schema
      ),
      ano: Yup.string().when((values, schema) =>
        estaNoPagamento ? schema.required('O campo é obrigatório.') : schema
      )
    }),
    onSubmit: (values) => {
      console.log('enviado', values)
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const alteraCep = (cep: string) => {
    setCep(cep)
  }

  useEffect(() => {
    if (carregandoCep) {
      form.values.endereco = 'Carregando endereço...'
      form.values.cidade = 'Carregando endereço...'
    }
    if (dataCep) {
      form.values.endereco = `${dataCep.logradouro}, ${dataCep.bairro}`
      form.values.cidade = dataCep.localidade
      form.values.cep = dataCep.cep
    }
  }, [dataCep, form.values, carregandoCep])

  const backToCart = () => {
    setEstaNaEntrega(false)
  }
  const goToEntrega = () => {
    setEstaNaEntrega(true)
    setEstaNoPagamento(false)
  }

  const goToPagamento = () => {
    if (
      !(
        form.errors.nome ||
        form.errors.endereco ||
        form.errors.cidade ||
        form.errors.cep ||
        form.errors.numero ||
        !form.values.nome ||
        !form.values.endereco ||
        !form.values.cep ||
        !form.values.numero ||
        !form.values.numero
      )
    ) {
      setEstaNaEntrega(false)
      setEstaNoPagamento(true)
    }
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContent className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <S.Section
          className={!estaNaEntrega && !estaNoPagamento ? 'is-visible' : ''}
        >
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h4>{item.nome}</h4>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="lixeira"
                type="button"
              />
            </S.CartItem>
          ))}
          <S.Prices>
            <p>Valor total</p>
            <span>{formataPreco(getTotalPrice(items))}</span>
          </S.Prices>
          <Button onClick={goToEntrega} variant="secondary">
            Continuar com a entrega
          </Button>
          <Button onClick={closeCart} variant="secondary">
            Continuar buscando
          </Button>
        </S.Section>
        <S.Section className={estaNaEntrega ? 'is-visible' : ''}>
          <h3>Entrega</h3>
          <S.Form onSubmit={form.handleSubmit}>
            <S.FormItem>
              <label htmlFor="nome">Quem irá receber</label>
              <input
                className={checkInputHasError('nome') ? 'error' : ''}
                value={form.values.nome}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="nome"
                type="text"
                name="nome"
              />
              <small>{checkInputHasError('nome') && form.errors.nome}</small>
            </S.FormItem>
            <S.FormItem>
              <label htmlFor="endereco">Endereço</label>
              <input
                className={checkInputHasError('enderceo') ? 'error' : ''}
                value={form.values.endereco}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="endereco"
                type="text"
                name="endereco"
              />
              <small>
                {checkInputHasError('endereco') && form.errors.endereco}
              </small>
            </S.FormItem>
            <S.FormItem>
              <label htmlFor="cidade">Cidade</label>
              <input
                className={checkInputHasError('cidade') ? 'error' : ''}
                value={form.values.cidade}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="cidade"
                type="text"
                name="cidade"
              />
              <small>
                {checkInputHasError('cidade') && form.errors.cidade}
              </small>
            </S.FormItem>
            <div className="between">
              <S.FormItem>
                <label htmlFor="cep">CEP</label>
                <InputMask
                  mask="99999-999"
                  className={checkInputHasError('cep') ? 'error' : ''}
                  value={form.values.cep}
                  onChange={(e) => {
                    form.handleChange(e)
                    alteraCep(e.target.value)
                  }}
                  onBlur={form.handleBlur}
                  id="cep"
                  type="text"
                  name="cep"
                />
                <small>{checkInputHasError('cep') && form.errors.cep}</small>
              </S.FormItem>
              <S.FormItem>
                <label htmlFor="numero">Número</label>
                <input
                  className={checkInputHasError('numero') ? 'error' : ''}
                  value={form.values.numero}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  id="numero"
                  type="text"
                  name="numero"
                />
                <small>
                  {checkInputHasError('numero') && form.errors.numero}
                </small>
              </S.FormItem>
            </div>
            <S.FormItem>
              <label htmlFor="complemento">Complemento (opcional):</label>
              <input
                value={form.values.complemento}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="complemento"
                type="text"
                name="complemento"
              />
            </S.FormItem>
          </S.Form>
          <Button onClick={goToPagamento} variant="secondary">
            Continuar com o pagamento
          </Button>
          <Button onClick={backToCart} variant="secondary">
            Voltar para o carrinho
          </Button>
        </S.Section>
        <S.Section className={estaNoPagamento ? 'is-visible' : ''}>
          <h3>Pagamento</h3>
          <S.Form onSubmit={form.handleSubmit}>
            <S.FormItem>
              <label htmlFor="nomeCartao">Nome no cartão</label>
              <input
                className={checkInputHasError('nomeCartao') ? 'error' : ''}
                value={form.values.nomeCartao}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                id="nomeCartao"
                type="text"
                name="nomeCartao"
              />
              <small>
                {checkInputHasError('nomeCartao') && form.errors.nomeCartao}
              </small>
            </S.FormItem>
            <div className="between">
              <S.FormItem id="numeroCartao">
                <label htmlFor="numeroCartao">Número do cartão</label>
                <input
                  className={checkInputHasError('numeroCartao') ? 'error' : ''}
                  value={form.values.numeroCartao}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  id="numeroCartao"
                  type="text"
                  name="numeroCartao"
                />
                <small>
                  {checkInputHasError('numeroCartao') &&
                    form.errors.numeroCartao}
                </small>
              </S.FormItem>
              <S.FormItem id="cvv">
                <label htmlFor="cvv">CVV</label>
                <input
                  className={checkInputHasError('cvv') ? 'error' : ''}
                  value={form.values.cvv}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  id="cvv"
                  type="text"
                  name="cvv"
                />
                <small>{checkInputHasError('cvv') && form.errors.cvv}</small>
              </S.FormItem>
            </div>
            <div className="between">
              <S.FormItem>
                <label htmlFor="mes">Mês de vencimento</label>
                <input
                  className={checkInputHasError('mes') ? 'error' : ''}
                  value={form.values.mes}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  id="mes"
                  type="text"
                  name="mes"
                />
                <small>{checkInputHasError('mes') && form.errors.mes}</small>
              </S.FormItem>
              <S.FormItem>
                <label htmlFor="ano">Ano de vencimento</label>
                <input
                  className={checkInputHasError('ano') ? 'error' : ''}
                  value={form.values.ano}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  id="ano"
                  type="text"
                  name="ano"
                />
                <small>{checkInputHasError('ano') && form.errors.ano}</small>
              </S.FormItem>
            </div>
          </S.Form>
          <Button onClick={goToPagamento} variant="secondary">
            Finalizar pagamento
          </Button>
          <Button onClick={goToEntrega} variant="secondary">
            Voltar a edição de endereço
          </Button>
        </S.Section>
      </S.Sidebar>
    </S.CartContent>
  )
}

export default Card
