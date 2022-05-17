import styled from 'styled-components/native'

export const Container = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`
export const Column = styled.View`
  flex-direction: column;
  align-items: center;
  width: 25%;
  justify-content: flex-end;
`

interface StepsProps {
  isSuccess?: boolean
}

export const Circle = styled.View<StepsProps>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin: 8px 0;
  background-color: ${props => props.isSuccess ? props.theme.colors.primary : props.theme.colors.gray};
`
/**
 * Para posicioná-la corretamente,
 * some a altura do icone, metade da altura do circulo e
 * metade da altura da barra.
 * O resultado deve ser colocado na propriedade top.
 */
export const HorizontalBar = styled.View`
  height: 4px;
  width: 75%;
  top: 36px;
  position: absolute;
  flex-direction: row;
`

interface HorizontalBarProps {
  successLevel: 0 | 1 | 2 | 3 | 4
}

export const HorizontalBarPrimary = styled.View<HorizontalBarProps>`
  width: ${props => {
    switch (props.successLevel) {
      case 0:
        return '0%'
      case 1:
        return '17.5%'
      case 2:
        return '50%'
      case 3:
        return '82.5%'
      case 4:
        return '100%'
    }
  }};
  background-color: ${props => props.theme.colors.primary};
`

export const HorizontalBarGray = styled.View<HorizontalBarProps>`
  width: ${props => {
    switch (props.successLevel) {
      case 0:
        return '100%'
      case 1:
        return '82.5%'
      case 2:
        return '50%'
      case 3:
        return '17.5%'
      case 4:
        return '0%'
    }
  }};
  background-color: ${props => props.theme.colors.gray};
`
export const StyledText = styled.Text<StepsProps>`
  text-align: center;
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${props => props.theme.fonts.sizeCaption};
  color: ${props => props.isSuccess ? props.theme.colors.primary : props.theme.colors.gray};
`
