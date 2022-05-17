import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

import { Container } from './styles'
import { useTheme } from 'styled-components/native'

type StarName = 'star'|'star-o'|'star-half-o'

interface RatingStarsProps {
  rating: number
  maxRating?: number
  color?: string
  size?: number
  maxWidth?: string
  width?: string
}

/**
 * Auxiliar para criar a barra de rating
 * De acordo com a nota. Ex: Nota 2.2
 * ['star','star','star-half-o','star-o','star-0']
 * @param rating nota
 * @param maxRating nota máxima, controla o número de estrelas
 * @returns Um array com a lista do nome dos icones
 */
function createStarsNameArray (rating:number, maxRating:number) : StarName[] {
  const starsNames: StarName[] = 'star-o'
    .repeat(maxRating)
    .split(/(star-o)/)
    .filter(str => str !== '')
    .fill('star', 0, rating) as StarName[]

  if (rating % 1 !== 0) {
    const position = starsNames.indexOf('star-o')
    position > -1 && (starsNames[position] = 'star-half-o')
  }

  return starsNames
}

/**
 * Componente para as notas como estrelas cheias,
 * meio cheias e vazias
 * @param props
 * @returns JSX.Element
 */
function RatingStars (props: RatingStarsProps) {
  const theme = useTheme()

  const size = props.size ?? 12
  const color = props.color ?? theme.colors.primary
  const maxRating = props.maxRating ?? 5

  const starsNames = createStarsNameArray(props.rating, maxRating)
  return (
    <Container maxWidth={props.maxWidth} width={props.width}>
      {starsNames.map((iconName, index) =>
        <FontAwesome name={iconName} color={color} size={size} key={index}/>
      )}
    </Container>
  )
}

export default RatingStars
