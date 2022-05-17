import styled from 'styled-components/native'

export const Container = styled.View`
  width: 90%;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
`

export const Row = styled.View`
  /* max-width: 320px; */
  width: 100%;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  /* margin-right: 8px; */
  /* margin-bottom: 4px; */
  /* justify-content: space-around; */
`

export const Column = styled.View`
  width: 100%;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
`

export const ColumnSmall = styled.View`
  width: 100%;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 3;
`

export const ColumnBig = styled.View`
  width: 100%;
  flex-direction: column;
  flex-grow: 3;
  flex-shrink: 1;
  margin: 0 8px;
`

export const StyledImage = styled.Image`
  width: 80px;
  height: 80px;
  /* margin-right: 8px; */
`

export const RowCenter = styled(Row)`
  margin-top: 8px;
  align-items: flex-end;
  justify-content: space-between;
`

export const RowTop = styled(Row)`
  align-items: flex-start;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: ${props => props.theme.fonts.sizeRegular};
  font-family: ${props => props.theme.fonts.regular};
  /* width: 100%; */
`

export const Caption = styled.Text`
  font-size: ${props => props.theme.fonts.sizeCaption};
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.gray};
  /* margin-right: 8px; */
  /* width: 100%; */
`

export const Price = styled.Text`
  font-size: ${props => props.theme.fonts.sizeSmall};
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.primary};
  text-align: right;
  width: 100%;
`

export const OldPrice = styled.Text`
  font-size: ${props => props.theme.fonts.sizeCaption};
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.gray};
  text-decoration: line-through;
  text-align: right;
  width: 100%;
`
